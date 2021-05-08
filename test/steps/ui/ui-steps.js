const { Given, When, Then, Before, After } = require("cucumber");
const assert = require("cucumber-assert");

Given("I visit {string}", async function (URL) {
  await browser.url(this.getUrl[URL]);
});

Then("I entered {string} at {string}", function (expectedValue, selector) {
  browser.$(this.getLocators[selector]).setValue(expectedValue);
});
Then("I click on {string}", function (selector) {
  browser.$(this.getLocators[selector]).click();
});

Then("I shloud see Page title {string}", function (expectedValue) {
  assert.equal(browser.getTitle(), expectedValue);
});

Then("I should see {string} at {string}", function (expectedValue, selector) {
  assert.equal(browser.$(this.getLocators[selector]).getText(), expectedValue);
});

Then("I scrolled to {string}", function (selector) {
  browser.$(this.getLocators[selector]).scrollIntoView();
});

Then("I expect to see URL containing {string}", function (expectedValue) {
  expect(browser).toHaveUrlContaining(expectedValue);
});

//Take full page screenshots

Then("I take full page screenshot", function () {
  try {
    const currentTime = new Date().toJSON().replace(/:/g, "-");

    const normalisedScenarioName = this.scenarioName
      .replace(/ /g, "-")
      .replace(/"/g, "")
      .replace(/'/g, "")
      .replace(/\//g, "-")
      .replace(/\\/g, "-");

    const screenShotFilename = `./reports/ui/screenshots/${normalisedScenarioName}-I take screenshot of evidence-${currentTime}.png`

      .replace(/ /g, "-")
      .replace(/"/g, "")
      .replace(/'/g, "");

    //pause(this.config.constants.MINI_PAUSE);

    const screenShotStream = browser.saveDocumentScreenshot(screenShotFilename);

    this.attach("Screenshot taken");

    this.attach(screenShotStream, "image/png");
  } catch (error) {
    // console.log(chalk.red(`${error}`));
  }
});
