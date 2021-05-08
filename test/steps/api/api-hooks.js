const { Before, After, Status } = require("cucumber");
const chalk= require('chalk')

Before(function (scenario) {
  console.log(chalk.green('\n',"SCENARIO-->>>", scenario.pickle.name));
  this.scenario=scenario;
});

After(function (scenario) {
  //console.log(chalk.green('\n',"<<<---------->>>"));
});
