const fs = require("fs");

const featureFilePathUI = "./test/features/ui/*.feature";
const uiStepsFilePath = "./test/steps/ui/*.js";
const featureFilePathAPI = "./test/features/api/*.feature";

const secretFilePath = "./test/secret";
if (!fs.existsSync(secretFilePath)) {
  fs.mkdirSync(secretFilePath);

  fs.open("secret.js", "w", (err, file) => {
    if (err) {
      throw err;
    }
    console.log("File is created in secredt folder");
  });
}

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
  uiStepsFilePath,
  featureFilePathAPI,
};
