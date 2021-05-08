const { Before, After, Status } = require("cucumber");
const chalk= require('chalk')

Before(function (scenario) {
  console.log(chalk.green("SCENARIO-->>>", scenario.pickle.name));
  require("expect-webdriverio").setOptions({ wait: 5000 });
});

After(function (scenario) {
  console.log(chalk.green("<<<---------->>>"));
});
