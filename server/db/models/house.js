'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  House.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      area: DataTypes.INTEGER,
      adress: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'House',
    },
  );
  return House;
};
