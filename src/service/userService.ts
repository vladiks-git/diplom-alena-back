import { UserModel } from '../db/user.js';
import { Roles } from '../consts/common.js';
import { IResponsible } from '../types/user.js';

const getAllUsers = async () => {
  return UserModel.findAll();
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

const findByLogin = async (login: string) => {
  return await UserModel.findOne({ where: { login: login } });
};

const createResponsible = async (entity: IResponsible) => {
  return await UserModel.create({
    ...entity,
  });
};

export const UserService = {
  getAllUsers,
  createAdmin,
  findByLogin,
  createResponsible,
};
