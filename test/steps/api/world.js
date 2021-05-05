const { setWorldConstructor } = require("cucumber");
const apickli = require("../../support/apickli");
require("dotenv-flow").config();

const fixturePath = "test/fixture";
class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.variable = 0;
    this.apickli = new apickli.Apickli(process.env.BASE_URL);
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
