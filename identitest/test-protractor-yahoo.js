// at the top of the test spec:
var fs = require('fs');

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://www.yahoo.co.jp/');

    // abstract writing screen shot to a file
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    // within a test:
    browser.takeScreenshot().then(function (png) {writeScreenShot(png, 'sample1.png');});

    element(by.id('srchtxt')).sendKeys('protractor');
    browser.takeScreenshot().then(function (png) {writeScreenShot(png, 'sample2.png');});

    element(by.id('srchbtn')).click();
    browser.takeScreenshot().then(function (png) {writeScreenShot(png, 'sample3.png');});

  });
});
