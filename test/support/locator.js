const merge = require("deepmerge");
const ele1 = require("../locators/homePage");
const ele2 = require("../locators/03.contactUsPage");

module.exports.locators = merge.all([ele1, ele2]);

