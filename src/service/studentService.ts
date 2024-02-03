import { EventModel } from '../db/models.js';
import { IEvent } from '../types/event.js';

export const createEvent = async (entity: IEvent) => {
  return await EventModel.create({
    ...entity,
    isApprove: false,
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
