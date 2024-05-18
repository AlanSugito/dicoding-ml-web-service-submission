const predict = require('../services/predictService');

const postHandler = async (req, res, next) => {
  try {
    const data = await predict(req.model, req.file.buffer);

    res.status(201).json({
      status: 'success',
      message: 'Model is predicted successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = postHandler;
