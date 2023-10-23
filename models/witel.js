'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Witel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Witel.hasMany(models.Rtu)
    }
  }
  Witel.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Witel',
  });
  return Witel;
};