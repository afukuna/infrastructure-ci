exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test-protractor.js'],
  capabilities: {
    browserName: 'firefox'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },
};
