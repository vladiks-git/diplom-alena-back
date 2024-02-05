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

export const getApprovedEvents = async (studentId: number) => {
  return EventModel.findAll({
    where: {
      userId: studentId,
      isApprove: false,
    },
  });
};

export const StudentService = {
  createEvent,
  getApprovedEvents,
};
