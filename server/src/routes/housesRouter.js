const { Router } = require('express');
const { House } = require('../../db/models');

const housesRouter = Router();

housesRouter
  .get('/', async (req, res) => {
    try {
      const houses = await House.findAll();
      res.status(200).json(houses);
    } catch (error) {
      console.log('Ошибка получения всех домов', error);
      res.status(500).json({ message: 'Ошибка получения всех домов' });
    }
  })
  .post(async (req, res) => {
    try {
      const house = await House.create(req.body);
      res.status(200).json(house);
    } catch (error) {
      console.log('Ошибка создания дома', error);
      res.status(500).json({ message: 'Ошибка создания дома' });
    }
  });

housesRouter
  .get('/:id', async (req, res) => {
    try {
      const house = await House.findByPk(req.params.id);
      res.status(200).json(house);
    } catch (error) {
      console.log('Ошибка получения дома по id', error);
      res.status(500).json({ message: 'Ошибка получения дома по id' });
    }
  })
  .put(async (req, res) => {
    try {
      const house = await House.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json(house);
    } catch (error) {
      console.log('Ошибка обновления дома по id', error);
      res.status(500).json({ message: 'Ошибка обновления дома по id' });
    }
  })
  .delete(async (req, res) => {
    try {
      const house = await House.destroy({ where: { id: req.params.id } });
      res.status(200).json(house);
    } catch (error) {
      console.log('Ошибка удаления дома по id', error);
      res.status(500).json({ message: 'Ошибка удаления дома по id' });
    }
  });

module.exports = housesRouter;
