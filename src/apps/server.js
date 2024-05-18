const express = require('express');
const cors = require('cors');
const {config} = require('dotenv');
const tf = require('@tensorflow/tfjs-node');

const predictRouter = require('../routes/predictRouter');
const errorHandler = require('../middlewares/errorHandler');

config();

const app = async () => {
  const model = await tf.loadGraphModel(process.env.MODEL_URL);
  const server = express();

  server.use(cors());
  server.use(express.json());

  server.use((req, _, next) => {
    req.model = model;
    next();
  });

  server.use('/predict', predictRouter);
  server.use(errorHandler);

  return server;
};

module.exports = app;
