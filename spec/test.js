var selenium = require('selenium-webdriver'),
    AxeBuilder = require('axe-webdriverjs'),
    Keys = selenium.Key;

var util = require('util');

var driver, browser;

describe('Accessibility', function() {

    beforeEach(function(done) {
        driver = new selenium.Builder()
                        .forBrowser('chrome');

        browser  = driver.build();

        browser.get('http://localhost:3000')
            .then(function(){
                done();
            })
    });

    afterEach(function(done) {
        browser.quit().then(function(){
            done();
        });
    });

    it('should fetch the homepage and analyze it', function(done) {
        browser.findElement(selenium.By.css('#util_user_account > a'))
            .then(function(element) {
                element.sendKeys(Keys.Enter);
            })
            .then(function() {
                AxeBuilder(browser)
                    .include('#loginModal')
                    .analyze(function(results) {
                        console.log('Accessibility violations', results.violations.length);

                        printViolations(results.violations);
                        expect(results.violations.length).toBe(0);
                        done();
                    });
            })
    });

    function printViolations(violations) {
        violations.forEach(function (violation) {
            var output = '';
            var nodes = violation.nodes.map(function (node) { return '  - ' + node.target; }).join('\n');
            output += '---- ' + violation.id + ' ----\n';
            output += 'Help: ' + violation.help + '\n';
            output += 'Affected Nodes: \n';
            violation.nodes.forEach(function (node) { return node.any.forEach(function (item) {
                output += '- ' + item.message + '\n';
            }); });
            console.log(output);
        });
    }
});