const merge = require("deepmerge");
const ele1 = require("./../locators/01.loginPage");
const ele2 = require("./../locators/02.homePage");
const ele3 = require("./../locators/03.contactUsPage");


const locators = merge.all([ele1, ele2, ele3]);
//console.log(locators)

module.exports = {
  locators: locators
};
