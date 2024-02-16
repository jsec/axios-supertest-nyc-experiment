const router = require('express').Router()

const { add, subtract } = require('./lib/calc')
const { getTodo } = require('./lib/external')


router.get('/add', (_, res) => {
  const response = add(2, 3)
  res.json({
    res: response
  })
})

router.get('/subtract', async (_, res) => {
  const response = await subtract(5, 2)
  res.json({
    res: response,

  })
})

router.get('/todo', async (req, res) => {
  console.log(req.token)
  const response = await getTodo()
  res.json(response)
})

module.exports = router
