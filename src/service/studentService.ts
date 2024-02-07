import { EventModel } from '../db/models.js';
import { IEvent } from '../types/event.js';
import { PointsMap } from '../consts/common.js';

// Работы с БД. создание заявки
export const createEvent = async (entity: IEvent) => {
  const points = PointsMap[entity.status][entity.result];
  return await EventModel.create({
    ...entity,
    isApprove: false,
    points,
  });
};

// Работы с БД. Получения заявок
export const getEvents = async (studentId: number) => {
  return await EventModel.findAll({
    where: {
      userId: studentId,
    },
  });
};

export const StudentService = {
  createEvent,
  getEvents,
};
