const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

// Assertion style

chai.should();
chai.use(chaiHttp);

describe('News API', () => {
    /**
     * Test the GET route
     */
    describe("GET /topnews/", () => {
        it("It should get news with default pageSize 10 and page number 1", (done) => {
            chai.request(server)
                .get("/topnews")
                .end((err, res) => {
                    expect(res.body.articles).to.be.a('array');
                    expect(res.body.articles.length).to.be.eq(10);
                    res.should.have.status(200);
                    done()
                }).timeout(10000)
        })
    })
    /**
        * Test the GET route by pageSize
    */
    describe("GET /topnews/", () => {
        it("It should get news with default pageSize 50 and page number 1", (done) => {
            chai.request(server)
                .get("/topnews?pageSize=50")
                .end((err, res) => {
                    expect(res.body.articles.length).to.be.eq(50);
                    res.should.have.status(200);
                    done()
                }).timeout(10000)
        })
    })
    /**
     * Test The GET route by wrong api
     */
    describe("GET /topnew/", () => {
        it("It should return a 404", (done) => {
            chai.request(server)
                .get("/topnew?pageSize=50")
                .end((err, res) => {
                    res.should.have.status(404);
                    done()
                }).timeout(10000)
        })
    })
})
