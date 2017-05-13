var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    fs = require('fs');

describe('test', function () {

    it('test1', function (done) {

        var driver = new webdriver.Builder()
            .forBrowser('firefox')
            .usingServer('http://localhost:4444/wd/hub')
            .build();

        driver.get('http://www.google.co.jp');

        webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
            return driver.takeScreenshot().then(function(data) {
                fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
                    if(err) throw err;
                });
            });    
        };
        driver.saveScreenshot('sample.png');

        done();
        driver.quit();
    });
});
