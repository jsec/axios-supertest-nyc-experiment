const axios = require('axios')

async function getTodo() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return data
}

module.exports = {
  getTodo
}
