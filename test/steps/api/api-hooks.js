const { Before, After, BeforeAll } = require("cucumber");
const chalk = require("chalk");

// Before(function (scenario) {
//   console.log(chalk.green('\n',"SCENARIO-->>>", scenario.pickle.name));
//   this.scenario=scenario;
// });

// Before('@core',function(){
//   console.log(chalk.green('\n',"<<<---@core Tag---->>>"));
// })

// Before('@lpg',function(){
//   console.log(chalk.red('\n',"<<<---@lpg Tag---->>>"));
// })

Before(function (scenario,callback) {
  console.log(chalk.green("\n", "SCENARIO-->>>", scenario.pickle.name));
  this.scenario = scenario;
  // https://github.com/cucumber/cucumber-js/issues/891
  // stepContext.step = step.getName;
  //stepContext.scenario = scenario.getName;

  //console.log("<<<<--Before in steps ------------------->>>>>>>>>", this);
  // console.log(stepContext)
  // this.apickli = new apickli.Apickli('http', 'httpbin.org');
  // this.apickli.addRequestHeader('Cache-Control', 'no-cache');
  // this.apickli.clientTLSConfig = {
  //   valid: {
  //     key: './test/mock_target/certs/client-key.pem',
  //     cert: './test/mock_target/certs/client-crt.pem',
  //     ca: './test/mock_target/certs/ca-crt.pem',
  //   },
  // };

  callback();
});

After(function (scenario) {
  console.log(chalk.green('\n',"<<<---------->>>"));
});
