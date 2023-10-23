"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Retensis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Retensis.belongsTo(models.Rtu);
    }
  }
  Retensis.init(
    {
      RTUid: DataTypes.INTEGER,
      activePower_R: DataTypes.INTEGER,
      activePower_S: DataTypes.INTEGER,
      activePower_T: DataTypes.INTEGER,
      activePowerTotal: DataTypes.INTEGER,
      vAverage: DataTypes.INTEGER,
      iAverage: DataTypes.INTEGER,
      frequency: DataTypes.INTEGER,
      BBM: DataTypes.INTEGER,
      fetchTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Retensis",
    }
  );
  return Retensis;
};
