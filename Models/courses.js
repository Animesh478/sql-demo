const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Course = sequelize.define("Courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Course;
