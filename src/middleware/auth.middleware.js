const jwtVerifier = require('../lib/auth/verifier')

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]

  if (!token) {
    return res.send(401)
  }

  try {
    const jwt = await jwtVerifier.verifyAccessToken(token, process.env.OKTA_AUD)
    req.token = jwt
    next()
  } catch (err) {
    console.log('things went bad')
    console.error(err)
    throw err
  }
}

module.exports = authMiddleware
