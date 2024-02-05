import { Roles } from '../consts/common.js';
import { IResponsible, IStudent } from '../types/user.js';
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
      phone: '999999999',
      birthday: '',
      email: 'admin@mail.ru',
      fio: 'admin',
    });
  } catch (e) {
    console.log(e);
  }
};

const createStudent = async () => {
  try {
    const createdUser = await UserModel.create({
      login: 'student',
      password: 'student',
      role: Roles.student,
      phone: 'student',
      birthday: '',
      email: 'student@mail.ru',
      fio: '',
      course: '1',
      faculty: 'facultet',
      department: 'departament',
      direction: 'direction',
      group: '1',
    });
  } catch (e) {
    console.log(e);
  }
};

const createResponsible = async () => {
  try {
    const createdUser = await UserModel.create({
      login: 'test1',
      password: 'test1',
      role: Roles.responsible,
      phone: '',
      birthday: '',
      email: '',
      fio: 'test1',
    });
  } catch (e) {
    console.log(e);
  }
};

const findByLogin = async (login: string) => {
  return await UserModel.findOne({ where: { login: login } });
};

const createUser = async (entity: IResponsible | IStudent) => {
  return await UserModel.create({
    ...entity,
  });
};

const findById = async (userId: number) => {
  return await UserModel.findOne({
    where: {
      id: userId,
    },
  });
};
export const UserService = {
  getAllUsers,
  createAdmin,
  findByLogin,
  createUser,
  createStudent,
  createResponsible,
  findById,
};
