import express from 'express';
import bodyParser from 'body-parser';
import { adminRouter } from './routes/admin.js';
import { connectDataBase, sequelize } from './db/dbConnect.js';
import { authRouter } from './routes/auth.js';
import { UserService } from './service/userService.js';
import { studentRoute } from './routes/student.js';
import { responsibleRouter } from './routes/responsible.js';

// Инициализация приложения
const app = express();

app.use(bodyParser());
app.use(express.json());

// Роуты
app.use(authRouter);
app.use(adminRouter);
app.use(studentRoute);
app.use(responsibleRouter);

// DataBase
connectDataBase();
(async () => {
  await sequelize.sync({ force: true });
  // await sequelize.sync();
  await UserService.createAdmin();
  await UserService.createStudent();
  await UserService.createResponsible();
  app.listen(6000);
  console.log('App listen on port - 6000');
})();
