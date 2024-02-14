const server = require('../src/server')()
const request = require('supertest')
const nock = require('nock')
const waitOn = require("wait-on")

let app

beforeAll(async () => {
  app = server.listen(3033, () => {
    console.log('Server running')
  })

  await waitOn({ resources: ['tcp:3033'] })
})

afterAll(() => {
  app.close()
})

const agent = request.agent('http://localhost:3033')

const scope = nock('https://jsonplaceholder.typicode.com')
  .get('/todos/1')
  .reply(200, {
    meep: 'moop'
  })

describe('/calc/add', () => {
  it('should return 5, because 2 + 3 = 5', async () => {
    // sleep for 10 seconds to prove that the service is running in a different process

    const { statusCode, type, body } = await agent.get('/calc/add')

    expect(statusCode).toEqual(200)
    expect(type).toMatch(/json/)
    expect(body).toStrictEqual({
      res: 5
    })
  })
})

describe('/calc/subtract', () => {
  it('shuld return 3, because 5 -2 = 3', async () => {
    const { statusCode, type, body } = await agent.get('/calc/subtract')

    expect(statusCode).toEqual(200)
    expect(type).toMatch(/json/)
    expect(body).toStrictEqual({
      res: 3
    })
  })
})
