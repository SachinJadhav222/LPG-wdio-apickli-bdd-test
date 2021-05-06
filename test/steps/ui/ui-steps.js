const { Given, When, Then, Before, After } = require("cucumber");
//const expect= require('expect-webdriverio').setOptions({ wait: 50000 });
const assert = require("cucumber-assert");
const locators = require("../../support/locator").locators;
const urls = require("../../config/urls");

// Before(function (scenarioResult, callback) {
  

//   console.log("<<<<--Before in steps ------------------->>>>>>>>>", this);
//   require('expect-webdriverio').setOptions({ wait: 5000 })

//   callback();
// });

// Before(()=>{
//   console.log('This is Before--->>>')
//  // require('expect-webdriverio').setOptions({ wait: 5000 })
// });

Given("I visit {string}", async function (URL) {
      await browser.url(urls[URL]);
});

Then("I entered {string} at {string}", (expectedValue, selector) => {
  browser.$(locators[selector]).setValue(expectedValue);
});
Then("I click on {string}", (selector) => {
  browser.$(locators[selector]).click();
});

Then("I shloud see Page title {string}", (expectedValue) => {
  assert.equal(browser.getTitle(), expectedValue);
});

Then("I should see {string} at {string}", (expectedValue, selector) => {
  assert.equal(browser.$(locators[selector]).getText(), expectedValue);
});

// Then("I should see page title {string}", (expectedValue) => {
//   assert.equal(browser.getTitle(), expectedValue);
//   // browser.getTitle();
// });

Then("I scrolled to {string}", (selector) => {
  browser.$(locators[selector]).scrollIntoView();
});

Then(
  "I select {string} from dropdown at {string}",
  (expedtedValue, selector) => {
    browser.getTitle();
  }
);

Then("I expect to see URL containing {string}", (expectedValue) => {
  expect(browser).toHaveUrlContaining(expectedValue)
  //expect(locators[selector]).toBeDisplayed()
  //browser.$(locators[selector]).isVisible();
});
