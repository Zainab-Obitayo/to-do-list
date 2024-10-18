import { DataTypes } from 'sequelize';
import {sequelize} from '../config/db.js';
import farm from './farm.js';

const produce = sequelize.define('produce', {
  produceId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // auto-increments farmer id
    primaryKey: true      // primaryKey
  },
  typeOfProduce: {
    type: DataTypes.STRING,
    allowNull: false
  },
  farmId: {
    type: DataTypes.INTEGER,
    references: {
      model: farm,    // reference to waitlist model
      key: 'farmId'     // Reference the column farmerId
    },
    allowNull: false
  }
}, {
  timestamps: true
});

export default produce;