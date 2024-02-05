import { EventModel } from '../db/models.js';
import { IEvent } from '../types/event.js';
import { PointsMap } from '../consts/common.js';

export const createEvent = async (entity: IEvent) => {
  const points = PointsMap[entity.status][entity.result];
  return await EventModel.create({
    ...entity,
    isApprove: false,
    points,
  });
};

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
