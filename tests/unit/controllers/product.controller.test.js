const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const { allProducts } = require('./mocks/product.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de unidade do controller product', function () {
  describe('Listar todos os produtos', function () {
    it('retorna status 200 e a lista de produtos', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'findAll').resolves({ type: null, message: allProducts });

      await productController.listPassengers(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts);
    });
  });

  describe('Listar um produto apenas', function () {
    it('retorna status 200 e o produto se existir', async function () {
      const res = {};
      const req = {
        params: {
          id: 1,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'findById').resolves({ type: null, message: allProducts[0] });

      await productController.getPassenger(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts[0]);
    });

    it('retorna erro do ID invalido', async function () {
      const res = {};
      const req = {
        params: {
          id: 'b',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'findById').resolves({ type: 'INVALID_VALUE', message: '"id" must be a number' });

      await productController.getPassenger(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: '"id" must be a number' });
    });

    it('retorna erro do ID inexistente', async function () {
      const res = {};
      const req = {
        params: {
          id: 99,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'findById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      await productController.getPassenger(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
