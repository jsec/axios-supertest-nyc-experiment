const OktaVerifier = require('@okta/jwt-verifier')

require('dotenv').config()

const jwtVerifier = new OktaVerifier({
  issuer: process.env.OKTA_ISSUER,
  assertClaims: {
    aud: process.env.OKTA_AUD
  },
  testing: false
});


module.exports = jwtVerifier
