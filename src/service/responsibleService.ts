import { EventModel } from '../db/models.js';

// Работы с БД. Подтверждения заявки
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

// Работы с БД. Получения заявок
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
