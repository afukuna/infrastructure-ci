var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

describe('tedt', function () {

    it('tedt', function (done) {

        var driver = new webdriver.Builder()
            .forBrowser('firefox')
            .usingServer('http://localhost:4444/wd/hub')
            .build();

        driver.get('http://www.google.co.jp')
        done();
        driver.quit();
    });
});
