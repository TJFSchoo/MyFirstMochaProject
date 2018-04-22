const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');
const should = chai.should();

chai.use(chaiHttp);

describe('API Test', function() {
    it('Test GET /api/v2/recipes', function(done) {
        chai.request(app)
            .get('/api/v2/recipes')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('Test GET /api/v2/info', function(done) {
        chai.request(app)
            .get('/api/v2/info')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('Test GET /api/v2/recipes/<nummer>', function(done) {
        chai.request(app)
            .get('/api/v2/recipes/<nummer>')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('Test GET /api/v2/recipes?category=<cat>', function(done) {
        chai.request(app)
            .get('/api/v2/recipes?category=<cat>')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
