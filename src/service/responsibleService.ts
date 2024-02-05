import { EventModel } from '../db/models.js';

export const approveEvent = async (eventId: number) => {
  const currentEvent = await EventModel.findOne({
    where: {
      id: eventId,
    },
  });
  if (currentEvent) {
    currentEvent.isApprove = true;
    await currentEvent.save();
  } else {
    throw new Error('Ошибка обновления');
  }
};

export const getNotApprovedEvents = async () => {
  return await EventModel.findAll({
    where: {
      isApprove: false,
    },
  });
};

export const ResponsibleService = {
  approveEvent,
  getNotApprovedEvents,
};
