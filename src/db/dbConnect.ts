import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('alena', 'postgres', 'admin', {
  dialect: 'postgres',
});

export const connectDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с бд установлено.');
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e);
  }
};
