module.exports = {
  testEnvironment: 'node',
  bail: 0,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
  ],
  coverageProvider: 'v8'
}
