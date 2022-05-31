const request = require('supertest')
const server = require('../index')


describe('Test test framework', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

describe('Get statuscode', () => {
    it('positive case', async () => {
        const res = await request(server)
            .get('/statuscode/201')
        expect(res.statusCode).toEqual(201)
        // expect(res.body). .toHaveProperty('You ask for')
    })
    it('max status code case', async () => {
        const res = await request(server)
            .get('/statuscode/999')
            .send()
        expect(res.statusCode).toEqual(999)
        // expect(res.body). .toHaveProperty('You ask for')
    })
    it('invalid number case', async () => {
        const res = await request(server)
            .get('/statuscode/8000')
            .send()
        expect(res.statusCode).toEqual(503)
        // expect(res.body). .toHaveProperty('You ask for')
    })
    it('invalid string parameter case', async () => {
        const res = await request(server)
            .get('/statuscode/abc')
            .send()
        expect(res.statusCode).toEqual(503)
        // expect(res.body). .toHaveProperty('You ask for')
    })
})

describe('Get timeout', () => {
    it('timeout case', async () => {
        const res = await request(server)
            .get('/timeout/300')
        expect(res.statusCode).toEqual(200)
    })
})

afterAll(async () => {
    await server.close();
});
