const createServer = require('./src/server')

const port = 3333

const app = createServer()
app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})
