const mockVerifyFn = jest.fn()
const server = require('../src/server')()
const axios = require('axios')
const nock = require('nock')
const waitOn = require("wait-on")
require('dotenv').config()

jest.mock('@okta/jwt-verifier', () => {
  return jest.fn().mockImplementation(() => {
    return {
      verifyAccessToken: mockVerifyFn
    }
  })
})

let app

const options = {
  headers: {
    'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
  }
}

beforeAll(async () => {
  app = server.listen(3033, () => {
    console.log('Server running')
  })

  await waitOn({ resources: ['tcp:3033'] })
})

afterAll(() => {
  app.close()
})

const BASE_URL = process.env.BASE_URL

const scope = nock('https://jsonplaceholder.typicode.com')
  .get('/todos/1')
  .reply(200, {
    meep: 'moop'
  })

describe('/todo', () => {
  mockVerifyFn.mockReturnValue({
    claims: {
      roles: [
        'Super Duper Admin',
        'Eater of Donuts'
      ]
    }
  })

  it('should return the intercepted value', async () => {
    const { status, statusText, headers, data: body } = await axios.get(BASE_URL + '/api/todo', options)

    expect(status).toEqual(200)
    expect(statusText).toEqual('OK')
    expect(headers['content-type']).toMatch(/json/)
    expect(body).toStrictEqual({
      meep: 'moop'
    })
  })
})

describe('/calc/add', () => {
  it('should return 5, because 2 + 3 = 5', async () => {
    mockVerifyFn.mockReturnValue({
      claims: {
        roles: [
          'really good guy'
        ]
      }
    })

    const { status, statusText, headers, data: body } = await axios.get(BASE_URL + '/api/add', options)

    expect(status).toEqual(200)
    expect(statusText).toEqual('OK')
    expect(headers['content-type']).toMatch(/json/)
    expect(body).toStrictEqual({
      res: 5
    })
  })
})

describe('/calc/subtract', () => {
  it('shuld return 3, because 5 -2 = 3', async () => {
    mockVerifyFn.mockReturnValue({
      claims: {
        roles: [
          'really good guy'
        ]
      }
    })

    const { status, statusText, headers, data: body } = await axios.get(BASE_URL + '/api/subtract', options)

    expect(status).toEqual(200)
    expect(statusText).toMatch('OK')
    expect(headers['content-type']).toMatch(/json/)
    expect(body).toStrictEqual({
      res: 3
    })
  })
})
