const axios = require('axios')

function add(num1, num2) {
  return num1 + num2
}

async function subtract(num1, num2) {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log('response body:', data)
  return num1 - num2
}


module.exports = {
  add,
  subtract
}
