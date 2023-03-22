const connection = require('./connection');

const createSaleProduct = async (id, sales) => {
  const promises = sales.map(async (sale) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [id, sale.productId, sale.quantity],
    );
  });

  await Promise.all(promises);
  const obj = { id, itemsSold: sales };
  return obj;
};

const insertSale = async (sales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) values (NOW())',
  );
  
  const sale = await createSaleProduct(insertId, sales);
  return sale;
};

const findById = async (saleId) => {
  const [[sale]] = await connection.execute(
    `SELECT * 
    FROM sales AS s
    INNER JOIN sales_products AS p
    ON s.id = p.sale_id
    WHERE id = ?
    ORDER BY p.sale_id`,
    [saleId],
  );
  return sale;
};

module.exports = {
  insertSale,
  findById,
};