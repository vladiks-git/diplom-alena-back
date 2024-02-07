import { Router } from 'express';
import { UserService } from '../service/userService.js';

export const authRouter = Router();

// Контроллер авторизации
authRouter.post('/api/auth', async (req, res) => {
  const body = req.body;
  try {
    const currentUser = await UserService.findByLogin(body.login);
    if (currentUser === null) {
      res.status(401).send({ message: 'Ошибка авторизации' });
    } else {
      const formattedUser = {
        login: currentUser.login,
        password: currentUser.password,
      };
      res.send(JSON.stringify(currentUser));
    }
  } catch (e) {
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
});
