module.exports = {
  testEnvironment: 'node',
  testTimeout: 20000,
  bail: 0,
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.js",
  ],
  coverageProvider: 'v8'
}
