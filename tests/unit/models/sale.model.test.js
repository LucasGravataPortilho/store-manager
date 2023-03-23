const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection')
const { saleModel } = require('../../../src/models');
const { findAll, findById } = require('./mocks//sale.model.mock');

describe('Testes de unidade do model de sale', function () {
  it('listando os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([findAll]);

    const result = await saleModel.findAll();

    expect(result).to.deep.equal(findAll);
  });

  it('lista um produto da lista', async function () {
    sinon.stub(connection, 'execute').resolves([findById]);

    const result = await saleModel.findById(1);

    expect(result).to.deep.equal(findById);
  });

  afterEach(function () {
    sinon.restore();
  });
});
