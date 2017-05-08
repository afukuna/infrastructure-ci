var webdriver = require('selenium-webdriver');
var t = require('selenium-webdriver/testing');
var driver;
var assert = require('assert');
var By = webdriver.By;

t.describe('テスト', function () {
  t.before(function () {
    driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub')
      .withCapabilities(webdriver.Capabilities.firefox()).build();
  });

  t.after(function () {
    driver.quit();
  });

  t.it('check return 200', function (done) {
    driver.get('http://www.google.co.jp').then(function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
