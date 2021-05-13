const { setWorldConstructor, attach } = require("cucumber");
const path = require("path");
const moment = require("moment");
const fs = require("fs");
getLocators = require("../../support/locator").locators;
const getUrl = require("../../config/urls");
const {screenshotPath}= require('./../../utils/dir-path');

class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    
    this.variable = 0;
    this.getLocators = getLocators;
    this.getUrl = getUrl;
    this.myName = function() {
      console.log("This is my name function --->>", this);
    };
    this.takeScreenshot = function (message) {
      const timestamp = moment().format("YYYYMMDD-HHmmss.SSS");
     // const screenshotPath= './reports/screenshots'; 
        if (!fs.existsSync(screenshotPath)){
          return  fs.mkdirSync(screenshotPath);
        }
      const filepath = path.join(screenshotPath+"/", timestamp + ".png");
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
