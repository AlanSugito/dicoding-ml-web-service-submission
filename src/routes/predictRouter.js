const {Router} = require('express');
const multer = require('multer');
const postHandler = require('../controllers/postHandler');
const getHandler = require('../controllers/getHandler');

const router = Router();
const upload = multer({limits: {fileSize: 1000000}});

router.post('/', upload.single('image'), postHandler);
router.get('/histories', getHandler);

module.exports = router;
