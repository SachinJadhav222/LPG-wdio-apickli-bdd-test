/**
 * 
 */
const { setWorldConstructor } = require("cucumber");
const apickli = require("../../support/apickli");
const BASE_URL = require("../../config/urls").BASE_URL;

class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.variable = 0;
    this.apickli = new apickli.Apickli(BASE_URL);
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);