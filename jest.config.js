module.exports = {
  testEnvironment: 'node',
  testTimeout: 20000,
  bail: 0,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
  ],
  coverageProvider: 'v8'
}
