const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const saleSchema = Joi.object({
  productId: Joi.number().min(1).required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'number.min': '{{#label}} must be greater than or equal to 1',
});

module.exports = {
  idSchema,
  saleSchema,
};