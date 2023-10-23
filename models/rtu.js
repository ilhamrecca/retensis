"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rtu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rtu.belongsTo(models.Witel);
      Rtu.hasMany(models.Retensis);
    }
  }
  Rtu.init(
    {
      name: DataTypes.STRING,
      ipAddress: {
        type: DataTypes.STRING,
        unique: true, // Set the 'unique' constraint for ipAddress
      },
      witelID: DataTypes.INTEGER,
      hargaKWH: DataTypes.INTEGER,
      tipeKontrak: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rtu",
    }
  );
  return Rtu;
};
