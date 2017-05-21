exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test-protractor-yahoo.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }]
};
