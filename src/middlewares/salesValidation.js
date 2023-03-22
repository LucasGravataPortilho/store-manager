const validateProductId = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
    if (!sale.productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
  });

  next();
};

const validateQuantity = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
    if (sale.quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  });

  next();
};

const validateQuantityValue = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
    if (sale.quantity <= 0) {
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });

  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
  validateQuantityValue,
};