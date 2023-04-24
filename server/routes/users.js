const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/register', upload.single('profile_picture'), Controller.register);
router.post('/login', Controller.login);

module.exports = router;
