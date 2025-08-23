const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const students = sequelize.define("Students", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

module.exports = students;
