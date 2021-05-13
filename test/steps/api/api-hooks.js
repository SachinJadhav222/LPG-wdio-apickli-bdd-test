const { Before, After,BeforeAll } = require("cucumber");
const chalk= require('chalk')

Before(function (scenario) {
  console.log(chalk.green('\n',"SCENARIO-->>>", scenario.pickle.name));
  this.scenario=scenario;
});

// After(function (scenario) {
//   //console.log(chalk.green('\n',"<<<---------->>>"));
// });

// Before('@core',function(){
//   console.log(chalk.green('\n',"<<<---@core Tag---->>>"));
// })

// Before('@lpg',function(){
//   console.log(chalk.red('\n',"<<<---@lpg Tag---->>>"));
// })

