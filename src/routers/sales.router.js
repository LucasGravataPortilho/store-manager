const express = require('express');
const { saleController } = require('../controllers');
const { validateProductId, validateQuantity,
  validateQuantityValue } = require('../middlewares/salesValidation');

const router = express.Router();

router.post('/', validateProductId, validateQuantity,
  validateQuantityValue, saleController.createSale);

module.exports = router;