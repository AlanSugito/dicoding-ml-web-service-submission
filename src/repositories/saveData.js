const db = require('../apps/db');
const APIError = require('../exceptions/APIError');

const saveData = async (idDoc, data) => {
  try {
    const collection = db.collection('predictions');
    const doc = collection.doc(`${idDoc}`);
    await doc.set(data);
  } catch (error) {
    throw new APIError(400, 'Terjadi kesalahan dalam melakukan prediksi');
  }
};

module.exports = saveData;
