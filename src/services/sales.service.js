const { saleModel } = require('../models');

const createSale = async (date) => {
  const newSaleId = await saleModel.insertSale(date);
  const newSale = await saleModel.findById(newSaleId);

  return { type: null, message: newSale };
};

module.exports = {
  createSale,
};