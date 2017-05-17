var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var fs = require('fs');

describe('sample test', function () {

console.log('test1');

    var driver = new webdriver.Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

console.log('test2');

    webdriver.WebDriver.prototype.saveScreenshot = function(filename) {

console.log('test2-1');
console.log(driver.takeScreenshot());

        return driver.takeScreenshot().then(function(data,err) {
            fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
console.log(err);
                if(err) throw err;
            });
        })
    };

console.log('test3');

    it('sample1', function (done) {

console.log('test4');

        driver.get('http://www.google.com/ncr');
//        driver.manage().window().setSize(400, 400);

console.log('test5');

        driver.saveScreenshot('/tmp/sample.png');
        
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 3000);

console.log('test6');

        driver.saveScreenshot('/tmp/sample.png');

console.log('test7');
        
        driver.quit();
        done();

console.log('test8');

    });
});
