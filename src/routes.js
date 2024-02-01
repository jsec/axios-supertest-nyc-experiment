const router = require('express').Router()
const { add, subtract } = require('./calc')

router.get('/add', (_, res) => {
  const response = add(2, 3)
  res.json({
    res: response
  })
})

router.get('/subtract', (_, res) => {
  const response = subtract(5, 2)
  res.json({
    res: response
  })
})

module.exports = router
