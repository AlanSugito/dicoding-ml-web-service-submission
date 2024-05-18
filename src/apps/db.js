const {Firestore} = require('@google-cloud/firestore');

const db = new Firestore({
  keyFilename: '/app/key.json',
  projectId: 'dicoding-course-422805',
});

module.exports = db;
