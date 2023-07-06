const { DataTypes } = require('sequelize');
const db = require('../db');

const Letter = db.define('Letter', {
    senderName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receivedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  module.exports = Letter;
