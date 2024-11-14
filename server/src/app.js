const express = require('express');
const morgan = require('morgan');

const housesRouter = require('./routes/housesRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/houses', housesRouter);

module.exports = app;
