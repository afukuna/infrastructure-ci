exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test-protractor.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }]
};
