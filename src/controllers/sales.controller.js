const { saleService } = require('../services');

const findAll = async(_req, res) => {
  const result = await saleService.findAll();
  res.status(200).json(result);
};

const createSale = async (req, res, next) => {
  try {
    const sales = req.body;
  
    const { message } = await saleService.createSale(sales);
  
    // if (type) return res.status(errorMap.mapError(type)).json(message);
  
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  createSale,
};