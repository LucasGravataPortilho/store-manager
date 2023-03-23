const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { saleController } = require('../../../src/controllers');
const { saleService } = require('../../../src/services');
const { findAll, findById } = require('./mocks/sales.controller.mock');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

describe('testes de unidade do controller sales', function () {
  describe('Listar todas as vendas', function () {
    it('retorna status 200 e a lista de vendas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(saleService, 'findAll').resolves({ type: null, message: findAll });

      await saleController.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(findAll);
    });

    it('retorna status 200 e a venda se existir', async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {};
      const next = () => { };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(saleService, 'findById').resolves({ type: null, message: findById });

      await saleController.findById(req, res, next);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(findById);
    });
  });

  afterEach(() => sinon.restore());
})