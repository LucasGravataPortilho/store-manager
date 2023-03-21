const { productModel } = require('../models');
const schema = require('./validations/validationInputs');

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (passengerId) => {
  const error = schema.validateId(passengerId);
  if (error.type) return error;

  const product = await productModel.findById(passengerId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const createProducts = async (name) => {
  const newProductId = await productModel.insertProducts(name);
  const newProduct = await productModel.findById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  createProducts,
};