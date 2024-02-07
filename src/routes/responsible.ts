import { Request, Router } from 'express';
import { ResponsibleService } from '../service/responsibleService.js';
import { UserService } from '../service/userService.js';

export const responsibleRouter = Router();

// Контроллер подтверждения заявок ответственным
responsibleRouter.post(
  '/api/responsible/approve',
  async (req: Request<any, any, { eventId: number }>, res) => {
    try {
      console.log(req.body, req.body);
      const { eventId } = req.body;
      await ResponsibleService.approveEvent(eventId);
      res.status(200).send({});
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: 'Ошибка на сервера' });
    }
  }
);

// Контроллер получения заявок ответственным
responsibleRouter.get('/api/responsible', async (req, res) => {
  try {
    const events = await ResponsibleService.getNotApprovedEvents();
    const mappedEvents = await Promise.all(
      events.map(async (event) => {
        const user = await UserService.findById(event.userId);
        if (!user) return { ...event };
        if ('course' in user) {
          return {
            ...event.dataValues,
            cfg: `${user.course}-${user.faculty}-${user.group}`,
            fio: user.fio,
          };
        }
        return event;
      })
    );
    res.status(200).send(JSON.stringify(mappedEvents));
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
});
