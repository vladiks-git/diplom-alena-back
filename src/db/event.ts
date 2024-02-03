// import { sequelize } from './dbConnect.js';
// import { IEventModel } from '../types/event.js';
// import { DataTypes } from 'sequelize';
// import UserModel from './user.js';
//
// const EventModel = sequelize.define<IEventModel>('event', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   type: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   result: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   award: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
//
// EventModel.belongsTo(UserModel);
//
// export default EventModel;
