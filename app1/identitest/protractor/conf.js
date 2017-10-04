exports.config = {
  seleniumAddress: 'http://standalone-firefox:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
//    isVerbose: true,
//    showColors: true,
//    includeStackTrace: true,
    defaultTimeoutInterval: 60000
  },
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
  }
};
