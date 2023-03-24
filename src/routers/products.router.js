const express = require('express');
const { productController } = require('../controllers');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productController.listPassengers);

router.get('/:id', productController.getPassenger);

router.post('/', validateName, productController.createProduct);

router.put('/:id', productController.updateProduct);

module.exports = router;