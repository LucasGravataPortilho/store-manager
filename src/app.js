const express = require('express');

const { productRouter, saleRouter } = require('./routers');

const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use('/sales', saleRouter);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use((error, _req, res, _next) => {
  res.status(error.status || 500)
    .json({ message: error.message });
})

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;