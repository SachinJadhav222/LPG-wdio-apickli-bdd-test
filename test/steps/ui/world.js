const { setWorldConstructor } = require("cucumber");
// const expect= require('expect-webdriverio').setOptions({ wait: 50000 });
class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.variable = 0;
   // this.expect=expect;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
