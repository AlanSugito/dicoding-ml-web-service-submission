const {MulterError} = require('multer');
const APIError = require('../exceptions/APIError');

const errorHandler = (err, _, res, next) => {
  if (!err) return next();

  if (err instanceof MulterError) {
    return res.status(413).json({
      status: 'fail',
      message: 'Payload content length greater than maximum allowed: 1000000',
    });
  }

  if (err instanceof APIError) {
    return res.status(err.status).json({
      status: 'fail',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'fail',
    message: 'Internal Server Error',
  });
};

module.exports = errorHandler;
