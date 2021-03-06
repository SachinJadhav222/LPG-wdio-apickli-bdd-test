# LPG SDET Test Automation Framework
*Test Automation for UI and API test project for LPG  using WebdriverIO , cucumberjs   and other tools
 The framework is BDD enabled,Page Object Model,  using cucumber js to create feature file written in Gherkin Language*


### *Setup Instructions*
set .env.local file at root , this file will overwrite local environment variables, We can add login credentials ,  access tokens etc to this file .  best practice, keep this file in .gitignore and do not commit to git for security reasons. 
### *For demo purpuse I have commited .env.local file to git*

### Folder Structure
* [Project Root](./tree-md) : LPG-WDIO-APICKLI-BDD-TEST
    * [reports](./reports)  : Cucumber HTML reports
    * [test](./test)
        * [config](./test/config) - webdriver configurations , urls
        * [features](./test/features) -All bdd feature file are here
          * [api](./test/features/api) -feature file for API
          * [ui](./test/features/ui) -feature file for UI
        * [fixture](./test/fixtures) - Test fixtures and mock data
        * [locators](./test/locators) - Locators, webelements are stored per page as page object.
        * [steps](./test/steps) - Step defition files
        * [support](./test/support) - Support and helpers  files
        * [utils](./test/utils) - Utility files
  * [.env.local](./.env.local) : This file will overwirte local environment variables 
  * [README.md](./README.md)
 

### Install node packages
```
npm i

```

### Run API Test
```
npm run api-test
```
### API Test Report
```
npm run api-report
```
### UI Test
```
npm run ui-test
```
### UI Test report
```
npm run ui-report
```
### Run ALL test & Generate Report 
```
npm test
```

### CircleCi Setup: https://app.circleci.com/pipelines/github/SachinJadhav222/LPG-wdio-apickli-bdd-test?invite=true

*Steps to view Test report in CI*
1. Go to project dashboard /pipeline
2. Click on build
3. Click on Artifacts - test reports are saved here on CircleCI cloud 

![Alt text](test/fixtures/CircleCi.PNG?raw=true "Optional Title")

### Cucumber HTML Report

![Alt text](test/fixtures/CucumberReport.PNG?raw=true "Optional Title")


 