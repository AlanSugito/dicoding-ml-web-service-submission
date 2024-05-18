const tf = require('@tensorflow/tfjs-node');
const APIError = require('../exceptions/APIError');
const saveData = require('../repositories/saveData');

const predict = async (model, image) => {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();
    const result = await model.predict(tensor).data();
    const isCancer = result >= 0.5 ? 'Cancer' : 'Non Cancer';
    const id = +new Date();
    const data = {
      id,
      result: isCancer,
      suggestion: 'Segera periksa ke dokter!',
      createdAt: new Date().toISOString(),
    };

    await saveData(id, data);

    return data;
  } catch (error) {
    throw new APIError(400, 'Terjadi kesalahan dalam melakukan prediksi');
  }
};

module.exports = predict;
