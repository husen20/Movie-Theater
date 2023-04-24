const express = require('express');
const authentication = require('../midleware/authentication');
const router = express.Router();
const users = require('./users');
const movies = require('./movies');
const Controller = require('../controllers/controller');

router.use(movies);

router.use(users);

router.use(authentication);

router.post('/paymen', Controller.paymentMethods);
router.patch('/payment/status/:id', Controller.updatePaymentStatus);
module.exports = router;
