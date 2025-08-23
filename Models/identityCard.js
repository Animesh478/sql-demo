const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const IdentityCard = sequelize.define("identityCards", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cardNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports = IdentityCard;
