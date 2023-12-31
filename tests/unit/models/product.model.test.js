const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection')
const { productModel } = require('../../../src/models');
const { allProducts } = require('./mocks/product.model.mock');

describe('Testes de unidade do model', function () {
  it('listando os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const result = await productModel.findAll();

    expect(result).to.deep.equal(allProducts);
  });

  it('lista um produto da lista', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);

    const result = await productModel.findById(1);

    expect(result).to.deep.equal(allProducts[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});
