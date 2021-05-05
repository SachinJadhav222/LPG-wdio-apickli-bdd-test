const reporter = require("cucumber-html-reporter");
require("dotenv-flow").config();
const options = {
  theme: "bootstrap",
  jsonFolder: "reports/api/",
  jsonFile: "reports/api/cucumber.json",
  output: "reports/api/api-test-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  name: "API Automation",
  brandTitle: "REST API Test Report",
  metadata: {
    "Date:": new Date(),
    "Test Environment": process.env.ENV,
     "Platform": process.env.PLATFORM,
    "SDTE": process.env.SDET,
  },
};

reporter.generate(options);
