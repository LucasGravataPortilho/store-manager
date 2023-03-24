const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const listPassengers = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getPassenger = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.createProducts(name);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { type, message } = await productService.updateProducts(name, id);

  if (type === 'PRODUCT_NOT_EXIST') {
    return res.status(400).json({ message });
  }

  if (type === 'PRODUCT_NOT_FOUND') {
    return res.status(404).json({ message });
  }

  if (type === 'INVALID_VALUE') {
    return res.status(422).json({ message });
  }

  res.status(200).json(message);
};

module.exports = {
  listPassengers,
  getPassenger,
  createProduct,
  updateProduct,
};