const { saleModel, productModel } = require('../models');

const findAll = async () => {
  const result = await saleModel.findAll();
  return result;
};

const findById = async (id) => {
  const result = await saleModel.findById(id);
  
  return result;
};

const createSale = async (sale) => {
  const checkSales = sale.map(({ productId }) => productModel.findById(productId));
  const checkSalesResolve = await Promise.all(checkSales);
  const checkInvalidId = checkSalesResolve.some((product) => product === undefined);
  
  if (checkInvalidId) {
    const notFound = { status: 404, message: 'Product not found' };
    throw notFound;
  }

  const newSale = await saleModel.insertSale(sale);

  return { type: null, message: newSale };
};

module.exports = {
  findAll,
  findById,
  createSale,
};