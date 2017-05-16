var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var fs = require('fs');

describe('test', function () {

    it('test1', function (done) {

        var driver = new webdriver.Builder()
            .forBrowser('firefox')
            .usingServer('http://localhost:4444/wd/hub')
            .build();

        driver.get('http://www.google.com/ncr');

        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 1000)
//        .then(function(){
//            webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
//                return driver.takeScreenshot().then(function(data) {
//                    fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
//                        if(err) throw err;
//                    });
//                });
//            };
//            driver.saveScreenshot('sample.png');
            done();
            driver.quit();
//        }).catch(function(err){
//            done(err);
//            driver.quit();
//        });
    });
});
