import { Roles } from '../consts/common.js';
import { IResponsible } from '../types/user.js';
import { UserModel } from '../db/models.js';

const getAllUsers = async () => {
  return await UserModel.findAll();
};

const createAdmin = async () => {
  try {
    const createdUser = await UserModel.create({
      login: 'admin',
      password: 'admin',
      role: Roles.admin,
      phone: '',
      birthday: '',
      email: '',
      fio: '',
    });
  } catch (e) {
    console.log(e);
  }
};

const createStudent = async () => {
  try {
    const createdUser = await UserModel.create({
      login: 'test',
      password: 'test',
      role: Roles.student,
      phone: '',
      birthday: '',
      email: '',
      fio: '',
    });
  } catch (e) {
    console.log(e);
  }
};

const findByLogin = async (login: string) => {
  return await UserModel.findOne({ where: { login: login } });
};

const createUser = async (entity: IResponsible) => {
  return await UserModel.create({
    ...entity,
  });
};

export const UserService = {
  getAllUsers,
  createAdmin,
  findByLogin,
  createUser,
  createStudent,
};
