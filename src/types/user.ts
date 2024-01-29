import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { Roles } from '../consts/common.js';

export interface IUser {
  id?: number;
  role: Roles;
  fio: string;
  birthday: string;
  phone: string;
  email: string;
  login: string;
  password: string;
}

export interface IUserModel
  extends IUser,
    Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> {}

export interface IResponsible extends IUser {
  eventType?: string;
}

export interface IResponsibleModel
  extends IResponsible,
    Model<
      InferAttributes<IResponsibleModel>,
      InferCreationAttributes<IResponsibleModel>
    > {}

export interface IStudent extends IUser {
  group?: string;
  faculty?: string;
  direction?: string;
  department?: string;
}

export interface IStudentModel
  extends IStudent,
    Model<
      InferAttributes<IStudentModel>,
      InferCreationAttributes<IStudentModel>
    > {}
