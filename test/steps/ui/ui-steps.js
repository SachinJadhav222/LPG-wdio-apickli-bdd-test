const { Given, When, Then, Before, After } = require("cucumber");
const assert = require("cucumber-assert");
const locators = require("../../support/locator").locators;
const urls = require("../../config/urls");

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

Then("I should see home page", () => {
  console.log("This is URL =======>>>>", browser.getUrl());
});
