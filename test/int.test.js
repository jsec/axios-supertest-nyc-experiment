const createServer = require('../src/server')
const supertest = require('supertest')

const app = createServer()
const request = supertest(app)

describe('/calc/add', () => {
  it('should return 5, because 2 + 3 = 5', async () => {
    await request
      .get('/calc/add')
      .expect('Content-Type', /json/)
      .expect(200, {
        res: 5
      })
  })
})

describe('/calc/subtract', () => {
  it('shuld return 3, because 5 -2 = 3', async () => {
    await request
      .get('/calc/subtract')
      .expect('Content-Type', /json/)
      .expect(200, {
        res: 3
      })
  })
})
