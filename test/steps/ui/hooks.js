const { Before, After, Status } = require("cucumber");
//const chalk= require('chalk')

Before(function(){
  console.log("This is Before--->>>");
  require("expect-webdriverio").setOptions({ wait: 5000 });
});

After(function(scenario,done)
{
  console.log("This is After--->>>",scenario.pickle.name);
  //scenario.attach('test data goes here------->>>>>>>>');
  // if (scenario.result.status = Status.PASSED) {
 //    browser.saveScreenshot();
  // };
  
  // return scenario.result.status;
  // browser.takeScreenshot().then(function (buffer) {
  //   return this.attach(buffer, 'image/png');
  // })
});
