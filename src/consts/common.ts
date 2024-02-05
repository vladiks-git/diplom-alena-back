export enum Roles {
  admin = 'admin',
  student = 'student',
  responsible = 'responsible',
}

// TODO я хотел добавить мапинг для сохранения поинтов в бд
export const PointsMap: Record<string, { [key: string]: number }> = {
  Вузовский: {
    Участие: 3,
    Награда: 4,
  },
  Городской: {
    Участие: 6,
    Награда: 7,
  },
  Областной: {
    Участие: 9,
    Награда: 10,
  },
  Всероссийский: {
    Участие: 12,
    Награда: 13,
  },
  Международный: {
    Участие: 15,
    Награда: 16,
  },
};
