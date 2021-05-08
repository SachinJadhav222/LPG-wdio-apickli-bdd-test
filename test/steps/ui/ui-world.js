const { setWorldConstructor, attach } = require("cucumber");
const path = require("path");
const moment = require("moment");
const fs = require("fs");
getLocators = require("../../support/locator").locators;
const getUrl = require("../../config/urls");

class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.attach = attach;
    this.variable = 0;
    this.getLocators = getLocators;
    this.getUrl = getUrl;
    this.myName = function () {
      console.log("This is my name function --->>", this);
    };
    this.takeScreenshot = function (message) {
      const timestamp = moment().format("YYYYMMDD-HHmmss.SSS");
      // fs.ensureDirSync('./reports/ui/screenshots/');
      const filepath = path.join("./reports/screenshots/", timestamp + ".png");
      browser.saveScreenshot(filepath);
      this.logMessage(message) ;
      process.emit("test:screenshot", filepath);
      return this;
    };

    this.logMessage = function (message) {
      process.emit("test:log", message);
    };
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
