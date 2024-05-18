const getAllData = require('../repositories/getAllData');

const getPredictionHistories = async () => {
  const data = await getAllData();

  return data;
};

module.exports = getPredictionHistories;
