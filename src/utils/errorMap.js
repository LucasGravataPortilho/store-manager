const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  PRODUCT_NOT_EXIST: 400,
  DRIVER_NOT_FOUND: 404,
  TRAVEL_CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};