const { saleService } = require('../services');

const findAll = async (_req, res) => {
  const { message } = await saleService.findAll();
  res.status(200).json(message);
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = await saleService.findById(id);
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

const createSale = async (req, res, next) => {
  try {
    const sales = req.body;
  
    const { message } = await saleService.createSale(sales);
  
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  findById,
  createSale,
};