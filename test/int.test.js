const axios = require('axios')

const BASE_URL = 'http://localhost:3333'

describe('/calc/add', () => {
  it('should return 5, because 2 + 3 = 5', async () => {
    const response = await axios.get(`${BASE_URL}/calc/add`)

    expect(response.status).toEqual(200)
    expect(response.statusText).toEqual('OK')

    expect(response.data).toStrictEqual({
      res: 5
    })
  })
})

describe('/calc/subtract', () => {
  it('shuld return 3, because 5 -2 = 3', async () => {
    const response = await axios.get(`${BASE_URL}/calc/subtract`)

    expect(response.status).toEqual(200)
    expect(response.statusText).toEqual('OK')

    expect(response.data).toStrictEqual({
      res: 3
    })
  })
})
