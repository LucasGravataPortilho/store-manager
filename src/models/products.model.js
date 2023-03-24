const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findById = async (passengerId) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [passengerId],
  );
  return passenger;
};

const insertProducts = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) values (?)',
    [product],
  );
  return insertId;
};

const updateProduct = async (name, id) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`,
    [name, id],
  );

  return result;
};

module.exports = {
  findAll,
  findById,
  insertProducts,
  updateProduct,
};