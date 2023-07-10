'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Requests.init({
    name: DataTypes.STRING,
    id_number: DataTypes.STRING,
    ward: DataTypes.STRING,
    docket: DataTypes.STRING,
    request: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Requests',
  });
  return Requests;
};