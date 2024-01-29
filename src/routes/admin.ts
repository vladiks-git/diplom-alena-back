import { Router, Request } from 'express';
import { IResponsible } from '../types/user.js';
import { UserService } from '../service/userService.js';

export const adminRouter = Router();

adminRouter.get('/', (req, res) => {
  res.send('admin welcome');
});

adminRouter.post(
  '/create',
  async (req: Request<any, any, IResponsible>, res) => {
    const body = req.body;
    try {
      const createdUser = await UserService.createResponsible(body);
      res.status(201).send(JSON.stringify(createdUser));
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: 'Ошибка создания' });
    }
  }
);
