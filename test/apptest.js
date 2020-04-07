const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

describe('Meme endpoints', () => {
    it('homepage', (done) => {
        request(app)
        .get('/')
        .then((res) => {
            expect(res.status).to.eq(200)
            expect(res.text).to.eq('HomePage Holla!!')
            done();
        })
        .catch(err => {
            console.log(err);
            done(err);
        })
    });
});

