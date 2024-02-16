const createServer = require('./src/server')

require('dotenv').config()
console.log(process.env)

const PORT = process.env.PORT || 3033

const app = createServer()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
