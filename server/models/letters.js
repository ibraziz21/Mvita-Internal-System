'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Letters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Letters.init({
    senderName: DataTypes.STRING,
    purpose: DataTypes.STRING,
    receivedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Letters',
  });
  return Letters;
};