const express = require('express');
const { saleController } = require('../controllers');
const { validateObj } = require('../middlewares/salesValidation');

const router = express.Router();

router.post('/', validateObj, saleController.createSale);

module.exports = router;