import { sequelize } from './dbConnect.js';
import { IEventModel } from '../types/event.js';
import { DataTypes } from 'sequelize';
import { IResponsibleModel, IStudentModel, IUserModel } from '../types/user.js';

export const EventModel = sequelize.define<IEventModel>('event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  award: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isApprove: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
});

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
  course: {
    type: DataTypes.STRING,
  },
});

EventModel.belongsTo(UserModel);

UserModel.hasMany(EventModel, {
  foreignKey: 'id',
});
