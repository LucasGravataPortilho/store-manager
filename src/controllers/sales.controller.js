const { saleService } = require('../services');

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
  createSale,
};