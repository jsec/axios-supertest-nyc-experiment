const express = require('express')
const routes = require('./routes')

const createServer = () => {
  const app = express()
  app.use(express.json())
  app.use('/calc', routes)
  return app
}

module.exports = createServer
