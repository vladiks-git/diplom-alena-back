import { Router, Request } from 'express';
import { IEvent } from '../types/event.js';
import { StudentService } from '../service/studentService.js';

export const studentRoute = Router();

// Контроллер создания заявок студентом
studentRoute.post(
  '/api/student/create',
  async (req: Request<any, any, IEvent>, res) => {
    const body = req.body;
    try {
      const createdEvent = await StudentService.createEvent(body);
      res.status(201).send({});
    } catch (e) {
      res.status(500).send({ message: 'Ошибка создания' });
    }
  }
);

// Контроллер получения заявок студентом
studentRoute.get(
  '/api/student/events',
  async (req: Request<{ id: string }>, res) => {
    const studentId = req.query.id;
    try {
      if (studentId && typeof Number(studentId) === 'number') {
        const events = await StudentService.getEvents(+studentId);
        res.status(200).send(JSON.stringify(events));
      }
    } catch (e) {
      console.log('e');
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  }
);
