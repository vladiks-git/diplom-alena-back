import { Router, Request } from 'express';
import { IResponsible } from '../types/user.js';
import { UserService } from '../service/userService.js';

export const adminRouter = Router();

// Контроллер получения пользователей админом
adminRouter.get('/api', async (req, res) => {
  try {
    const allUsers = (await UserService.getAllUsers()) || [];
    res.status(200).send(JSON.stringify(allUsers));
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Ошибка получения пользователей' });
  }
});

// Контроллер создания пользователей админом
adminRouter.post(
  '/api/create',
  async (req: Request<any, any, IResponsible>, res) => {
    const body = req.body;
    try {
      const createdUser = await UserService.createUser(body);
      res.status(201).send(JSON.stringify(createdUser));
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: 'Ошибка создания' });
    }
  }
);
