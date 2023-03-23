const { saleService } = require('../services');

const findAll = async(_req, res) => {
  const result = await saleService.findAll();
  res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await saleService.findById(id);
  res.status(200).json(result);
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