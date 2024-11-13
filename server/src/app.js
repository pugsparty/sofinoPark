const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./schemas/swagger.json');
const wordsRouter = require('./routes/wordsRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/api/words', wordsRouter);

module.exports = app;
