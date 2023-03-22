const { saleModel } = require('../models');

const createSale = async (sale) => {
  const newSale = await saleModel.insertSale(sale);

  return { type: null, message: newSale };
};

module.exports = {
  createSale,
};