const { Router } = require('express');
const { Word } = require('../../db/models');
const { wordSchema, reqBodySchema } = require('../schemas/wordSchema');

const wordsRouter = Router();

wordsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allWords = await Word.findAll();
      res.status(200).json(wordSchema.array().parse(allWords));
    } catch (error) {
      console.log('Ошибка получения всех слов', error, error?.issues);
      res.status(500).json({
        message: 'Ошибка получения всех слов',
      });
    }
  })
  .post(async (req, res) => {
    try {
      const { translation, original } = reqBodySchema.parse(req.body);
      const newWord = await Word.create({ translation, original });
      res.json(wordSchema.parse(newWord));
    } catch (error) {
      console.log('Ошибка добавления слова', error, error?.issues);
      res.status(500).json({
        message: 'Ошибка добавления слова',
      });
    }
  });

wordsRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const word = await Word.findByPk(id);
      if (!word) throw new Error('Word not found');
      res.json(wordSchema.parse(word));
    } catch (error) {
      console.log('Ошибка получения слова', error, error?.issues);
      res.status(500).json({
        message: 'Ошибка получения слова',
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const word = await Word.findByPk(id);
      if (!word) throw new Error('Word not found');
      await word.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log('Ошибка удаления слова', error, error?.issues);
      res.status(500).json({
        message: 'Ошибка удаления слова',
      });
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { translation, original } = reqBodySchema.partial().parse(req.body);
      const word = await Word.findByPk(id);
      if (!word) throw new Error('Word not found');
      await word.update({ translation, original });
      res.json(wordSchema.parse(word));
    } catch (error) {
      console.log('Ошибка редактирования слова', error, error?.issues);
      res.status(500).json({
        message: 'Ошибка редактирования слова',
      });
    }
  });

module.exports = wordsRouter;
