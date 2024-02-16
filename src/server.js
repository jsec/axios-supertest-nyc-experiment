const express = require('express')
const routes = require('./routes')
const authMiddleware = require('./middleware/auth.middleware')


const createServer = () => {
  const app = express()
  app.use(express.json())
  app.use(authMiddleware)
  app.use('/api', routes)
  return app
}

module.exports = createServer
