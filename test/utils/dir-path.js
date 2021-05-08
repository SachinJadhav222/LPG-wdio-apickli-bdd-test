const fs = require("fs");

const featureFilePathUI = "./test/features/ui/*.feature";
const featureFilePathAPI = "./test/features/api/*.feature";

const apiRepPath = "./reports/api";
if (!fs.existsSync(apiRepPath)) {
  fs.mkdirSync(apiRepPath);
}
const screenshotPath = "./reports/screenshots";
if (!fs.existsSync(screenshotPath)) {
  fs.mkdirSync(screenshotPath);
}

const uiJSONPath = "./reports/ui";
if (!fs.existsSync(uiJSONPath)) {
  fs.mkdirSync(uiJSONPath);
}

module.exports = {
  apiRepPath,
  screenshotPath,
  uiJSONPath,
  featureFilePathUI,
  featureFilePathAPI,
};
