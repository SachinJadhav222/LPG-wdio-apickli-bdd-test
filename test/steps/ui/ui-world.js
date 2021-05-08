const { setWorldConstructor,attach } = require("cucumber");
getLocators = require("../../support/locator").locators;
const getUrl = require("../../config/urls");

class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.attach= attach;
    this.variable = 0;
    this.getLocators = getLocators;
    this.getUrl=getUrl;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
