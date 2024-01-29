import { sequelize } from './dbConnect.js';
import { DataTypes } from 'sequelize';
import { IResponsibleModel, IStudentModel, IUserModel } from '../types/user.js';

export const UserModel = sequelize.define<
  IUserModel | IResponsibleModel | IStudentModel
>('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fio: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});
