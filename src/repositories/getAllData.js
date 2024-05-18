const db = require('../apps/db');

const getAllData = async () => {
  try {
    const collection = db.collection('predictions');
    const result = await collection.get();
    const data = result.docs.map((doc) => {
      const d = doc.data();

      return {
        id: d.id,
        history: {...d},
      };
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllData;
