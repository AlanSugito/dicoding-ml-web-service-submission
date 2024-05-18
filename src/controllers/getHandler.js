const getAllData = require('../repositories/getAllData');
const getPredictionHistories = require('../services/getPredictions');

const getHandler = async (req, res, next) => {
  try {
    const data = await getPredictionHistories();
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getHandler;
