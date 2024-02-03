import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface IEvent {
  id?: number;
  type: string;
  name: string;
  status: string;
  date: string;
  result: string;
  award: string;
  isApprove?: boolean;
  points: number;
  userId: number;
}

export interface IEventModel
  extends IEvent,
    Model<InferAttributes<IEventModel>, InferCreationAttributes<IEventModel>> {}
