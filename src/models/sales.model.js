const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) values (NOW())',
  );
  return insertId;
};

const findById = async (saleId) => {
  const [[sale]] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?',
    [saleId],
  );
  return sale;
};

module.exports = {
  insertSale,
  findById,
};