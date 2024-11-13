'use strict';

const { Word } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Word.bulkCreate([
      { original: 'Mela', translation: 'Яблоко' },
      { original: 'Pera', translation: 'Груша' },
      { original: 'Zucchero', translation: 'Сахар' },
      { original: 'Limone', translation: 'Лимон' },
      { original: 'Arancia', translation: 'Апельсин' },
      { original: 'Carne', translation: 'Мясо' },
      { original: 'Pescare', translation: 'Рыба' },
      { original: 'Banana', translation: 'Банан' },
      { original: 'Sale', translation: 'Соль' },
      { original: 'Mare', translation: 'Море' },
      { original: 'Montagna', translation: 'Гора' },
      { original: 'Acqua', translation: 'Вода' },
      { original: 'Giorno', translation: 'День' },
      { original: 'Diavolo', translation: 'Дьявол' },
      { original: 'Casa', translation: 'Дом' },
      { original: 'Cane', translation: 'Собака' },
      { original: 'Gatto', translation: 'Кот' },
      { original: 'Formaggio', translation: 'Сыр' },
      { original: 'Fungo', translation: 'Гриб' },
      { original: 'Prosciutto', translation: 'Ветчина' },
      { original: 'Cipolla', translation: 'Лук' },
      { original: 'Pomodoro', translation: 'Помидор' },
      { original: 'Uomo', translation: 'Мужчина' },
      { original: 'Donna', translation: 'Женщина' },
      { original: 'Bambino', translation: 'Ребенок' },
      { original: 'Famiglia', translation: 'Семья' },
      { original: 'Scuola', translation: 'Школа' },
      { original: 'Vacanza', translation: 'Отпуск' },
      { original: 'Tigre', translation: 'Тигр' },
      { original: 'Volpe', translation: 'Лиса' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  },
};
