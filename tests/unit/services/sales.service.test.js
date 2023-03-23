const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { saleService, productService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const { findAll, findById } = require('./mocks/sales.service.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('testes de unidade do service sales', function () {
  describe('Listar todas as vendas', function () {
    it('retorna a lista de vendas', async function () {
      sinon.stub(saleModel, 'findAll').resolves(findAll);

      const result = await saleService.findAll();

      expect(result.type).to.deep.equal(null);
      expect(result.message).to.deep.equal(findAll);
    });

    it('retorna a venda se existir', async function () {
      sinon.stub(saleModel, 'findById').resolves(findById);

      const result = await saleService.findById(1);

      expect(result.type).to.deep.equal(null);
      expect(result.message).to.deep.equal(findById);
    });
  });

  afterEach(() => sinon.restore());
})