const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.get('/', productController.listPassengers);

router.get('/:id', productController.getPassenger);

router.post('/', productController.createProduct);

module.exports = router;