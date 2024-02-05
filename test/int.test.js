const createServer = require('../src/server')
const supertest = require('supertest')

const app = createServer()
const request = supertest(app)

describe('/calc/add', () => {
  it('should return 5, because 2 + 3 = 5', async () => {
    const { statusCode, type, body } = await request.get('/calc/add')

    expect(statusCode).toEqual(200)
    expect(type).toMatch(/json/)
    expect(body).toStrictEqual({
      res: 5
    })
  })
})

describe('/calc/subtract', () => {
  it('shuld return 3, because 5 -2 = 3', async () => {
    const { statusCode, type, body } = await request.get('/calc/subtract')

    expect(statusCode).toEqual(200)
    expect(type).toMatch(/json/)
    expect(body).toStrictEqual({
      res: 3
    })
  })
})
