// farm model
import { DataTypes } from 'sequelize';
import {sequelize} from '../config/db.js';
import farmer from './farmer.js';

// Define the farm model
const farm = sequelize.define('farm', {
  farmId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // auto-increments farm id
    primaryKey: true      // primaryKey
  },
  farmName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set(value) {
      this.setDataValue('farmName', value.trim());  // Trims the whitespace for farmName
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM('less than 2.5 acres', '2.5-7.5 acres', '7.5-12 acres', 'More than 20 acres'),
    allowNull: false
  },
  supplyFrequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distributionChannel: {
    type: DataTypes.ENUM('local market', 'wholesalers', 'Direct sales'),
  },
  mainChallenges: {
    type: DataTypes.TEXT,
  }, 
  additionalOfferings: {
    type: DataTypes.STRING,
    allowNull: false
  },
  farmerId: {
    type: DataTypes.INTEGER,
    references: {
      model: farmer,    // Reference to farmer model (Farmer)
      key: 'farmerId'     // Reference the farmerId field
    },
    allowNull: false
  }
}, {
  timestamps: true
});

export default farm;