'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate() {
      this.belongsToMany(Word, { through: 'Translations' });
    }
  }
  Word.init(
    {
      original: DataTypes.STRING,
      translation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );
  return Word;
};
