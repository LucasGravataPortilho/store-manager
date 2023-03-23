const Joi = require('joi');
const { saleSchema } = require('../services/validations/schema');

const errorCheck = (error) => {
  if (error.details[0].type === 'number.min') {
    const err = { status: 422, message: error.message };
    throw err;
  }

  if (error.details[0].type === 'any.required') {
    const err = { status: 400, message: error.message };
    throw err;
  }
};

const validateObj = (req, _res, next) => {
  try {
    const sale = req.body;
    const saleArrSchema = Joi.array().items(saleSchema);
    const { error } = saleArrSchema.validate(sale);
    if (error) {
      errorCheck(error);
    }
  
    next();   
  } catch (e) {
    next(e);
  }
};

// const validateProductId = (req, res, next) => {
//   const sales = req.body;
//   sales.forEach((sale) => {
//     if (!sale.productId) {
//       return res.status(400).json({ message: '"productId" is required' });
//     }
//   });

//   next();
// };

// const validateQuantity = (req, res, next) => {
//   const sales = req.body;
//   sales.forEach((sale) => {
//     if (sale.quantity === undefined) {
//       return res.status(400).json({ message: '"quantity" is required' });
//     }
//   });

//   next();
// };

// const validateQuantityValue = (req, res, next) => {
//   const sales = req.body;
//   sales.forEach((sale) => {
//     if (sale.quantity <= 0) {
//       return res.status(422)
//         .json({ message: '"quantity" must be greater than or equal to 1' });
//     }
//   });

//   next();
// };

module.exports = {
  validateObj,
};