'use strict';

const { House } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await House.bulkCreate([
      {
        name: 'House 1',
        cost: 1000,
        area: 100,
        adress: 'Adress 1',
        description: 'Description 1',
      },
      {
        name: 'House 2',
        cost: 2000,
        area: 200,
        adress: 'Adress 2',
        description: 'Description 2',
      },
      {
        name: 'House 3',
        cost: 3000,
        area: 300,
        adress: 'Adress 3',
        description: 'Description 3',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Houses', null, {});
  },
};
