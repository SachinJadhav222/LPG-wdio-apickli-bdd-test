const { Before, After, Status } = require("cucumber");
//const { AfterStep } = require("cucumber");
const chalk = require("chalk");

Before(function (scenario) {
  console.log(chalk.green("\n", "SCENARIO-->>>", scenario.pickle.name));
  console.log(chalk.green("\n", "<<<---------->>>", this));
  require("expect-webdriverio").setOptions({ wait: 5000 });
});

After(function (stepData) {
  // let failedStepsName = "";
  // scenarioResult.stepResults.map((result) => {
  //   if (result.status === Status.FAILED) {
  //     failedStepsName = result.step.name;
  //   }
  // });

  // browser.deleteCookies();
  const screenshotStreem = browser.saveScreenshot();
  this.attach("Scroonshots for failed test result: ");
  this.attach(screenshotStreem, "image/png");
  // // console.log(chalk.green('\n',"<<<---------->>>",this.attach));

  //  scenarioResult.stepResults.map((result) => {
  //   console.log('Result--->',result)
  //   })

  console.log(chalk.green("\n", "<<<---------->>>"));
});

// AfterStep( function (stepData) {
//   console.log(chalk.green("\n", "<<<---------->>>", stepData));
//   if (result.status === Status.FAILED) {
//     this.driver.takeScreenshot();
//   }
// });
