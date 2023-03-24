const { idSchema, updateProduct } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateUpdate = (name, id) => {
  const { error } = updateProduct.validate({ name, id });
  if (error) return { type: 'PRODUCT_NOT_EXIST', message: '"name" is required' };

  if (name.length < 5) {
    return {
      type: 'INVALID_VALUE',
      message: '"name" length must be at least 5 characters long',
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateUpdate,
};