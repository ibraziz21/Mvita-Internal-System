const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_development', 'postgres', 'elmagico21', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
