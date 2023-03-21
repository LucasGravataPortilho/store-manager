const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { allProducts } = require('./mocks/product.service.mock');

describe('Testes de unidade do service', function () {
  it('listando todos os produtos', async function () {
    sinon.stub(productModel, 'findAll').resolves(allProducts);

    const result = await productService.findAll();

    expect(result.type).to.deep.equal(null);
    expect(result.message).to.deep.equal(allProducts);
  });

  it('lista um produto da lista', async function () {
    sinon.stub(productModel, 'findById').resolves(allProducts[0]);

    const result = await productService.findById(1);

    expect(result.type).to.deep.equal(null);
    expect(result.message).to.deep.equal(allProducts[0]);
  });

  it('retorna um erro se ID inválido', async function () {
    const result = await productService.findById('k');

    expect(result.type).to.deep.equal('INVALID_VALUE');
    expect(result.message).to.deep.equal('"id" must be a number');
  });

  it('retorna um erro se ID que não existe', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined)

    const result = await productService.findById(400);

    expect(result.type).to.deep.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.deep.equal('Product not found');
  });

  afterEach(function () {
    sinon.restore();
  });
});