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

module.exports = {
  findAll,
  findById,
  insertProducts,
};