/* eslint new-cap: "off", no-invalid-this: "off" */

"use strict";

const prettyJson = require("prettyjson");
const { Given, When, Then } = require("cucumber");
const chalk = require("chalk");
const apickli = require("../../support/apickli");
const getURL = require("../../config/urls");
const getSecret=require("./../../secrets/secret")

const stepContext = {};

const prettyPrintJson = function (json) {
  const output = {
    stepContext,
    testOutput: json,
  };

  return prettyJson.render(output, {
    noColor: true,
  });
};

const callbackWithAssertion = function (callback, assertion) {
  if (assertion.success) {
    callback();
  } else {
    callback(prettyPrintJson(assertion));
  }
};


Given("I set base URL as {string}", function (base_url) {
  this.apickli = new apickli.Apickli(getURL[base_url]);
  console.log("\nBase URL:- ", getURL[base_url]);
});

 Given(
  "I set {string} header to {string}",
  function (headerName, headerValue, callback) {
    
    this.apickli.addRequestHeader(headerName, headerValue);
    callback();
  }
);
 

Given(
  "I set Authorization header as {string}",
  function (headerValue, callback) {
    this.apickli.addRequestHeader("Authorization", getSecret[headerValue]);
    callback();
  }
);

Given(/^I set cookie to (.*)$/, function (cookie, callback) {
  this.apickli.addCookie(cookie);
  callback();
});

Given(/^I set headers to$/, function (headers, callback) {
  this.apickli.setHeaders(headers.hashes());
  callback();
});

Given(/^I set body to (.*)$/, function (bodyValue, callback) {
  this.apickli.setRequestBody(bodyValue);
  callback();
});

Given(/^I pipe contents of file (.*) to body$/, function (file, callback) {
  this.apickli.pipeFileContentsToRequestBody(file, function (error) {
    if (error) {
      callback(new Error(error));
    }

    callback();
  });
});

Given(/^I set query parameters to$/, function (queryParameters, callback) {
  this.apickli.setQueryParameters(queryParameters.hashes());
  callback();
});

Given(/^I set form parameters to$/, function (formParameters, callback) {
  this.apickli.setFormParameters(formParameters.hashes());
  callback();
});

Given(
  /^I have basic authentication credentials (.*) and (.*)$/,
  function (username, password, callback) {
    this.apickli.addHttpBasicAuthorizationHeader(username, password);
    callback();
  }
);

Given(
  /^I have (.+) client TLS configuration$/,
  function (configurationName, callback) {
    this.apickli.setClientTLSConfiguration(configurationName, function (error) {
      if (error) {
        callback(new Error(error));
      }
      callback();
    });
  }
);

When("I GET {string}", function (resource, callback) {
  this.apickli.get(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }
    console.log(chalk.cyan("\n", "Response Body -->>>"));
    console.log(chalk.yellow("\n", response.body));
    callback();
  });
});

When(/^I POST to (.*)$/, function (resource, callback) {
  this.apickli.post(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }

    callback();
  });
});

When(/^I PUT (.*)$/, function (resource, callback) {
  this.apickli.put(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }

    callback();
  });
});

When(/^I DELETE (.*)$/, function (resource, callback) {
  this.apickli.delete(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }

    callback();
  });
});

When(/^I PATCH (.*)$/, function (resource, callback) {
  this.apickli.patch(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }

    callback();
  });
});

When(/^I request OPTIONS for (.*)$/, function (resource, callback) {
  this.apickli.options(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }

    callback();
  });
});

Then(/^response header (.*) should exist$/, function (header, callback) {
  const assertion = this.apickli.assertResponseContainsHeader(header);
  callbackWithAssertion(callback, assertion);
});

Then(/^response header (.*) should not exist$/, function (header, callback) {
  const assertion = this.apickli.assertResponseContainsHeader(header);
  assertion.success = !assertion.success;
  callbackWithAssertion(callback, assertion);
});

Then(
  "response body should be valid {string}",
  function (contentType, callback) {
    const assertion = this.apickli.assertResponseBodyContentType(contentType);
    callbackWithAssertion(callback, assertion);
  }
);

Then(/^response code should be (.*)$/, function (responseCode, callback) {
  const assertion = this.apickli.assertResponseCode(responseCode);
  callbackWithAssertion(callback, assertion);
});

Then(/^response code should not be (.*)$/, function (responseCode, callback) {
  const assertion = this.apickli.assertResponseCode(responseCode);
  assertion.success = !assertion.success;
  callbackWithAssertion(callback, assertion);
});

Then(
  /^response header (.*) should be (.*)$/,
  function (header, expression, callback) {
    const assertion = this.apickli.assertHeaderValue(header, expression);
    callbackWithAssertion(callback, assertion);
  }
);

Then(
  /^response header (.*) should not be (.*)$/,
  function (header, expression, callback) {
    const assertion = this.apickli.assertHeaderValue(header, expression);
    assertion.success = !assertion.success;
    callbackWithAssertion(callback, assertion);
  }
);

Then("response body should match", function (expression, callback) {
  console.log('Expected body--->>>',expression);
  const assertion =
    this.apickli.assertResponseBody(expression);
  callbackWithAssertion(callback, assertion);
});


Then("response body should contain {string}", function (expression, callback) {
  const assertion =
    this.apickli.assertResponseBodyContainsExpression(expression);
  callbackWithAssertion(callback, assertion);
});

Then(
  /^response body should not contain (.*)$/,
  function (expression, callback) {
    const assertion =
      this.apickli.assertResponseBodyContainsExpression(expression);
    assertion.success = !assertion.success;
    callbackWithAssertion(callback, assertion);
  }
);

Then(
  /^response body path (.*) should be (((?!of type).*))$/,
  function (path, value, callback) {
    const assertion = this.apickli.assertPathInResponseBodyMatchesExpression(
      path,
      value
    );
    callbackWithAssertion(callback, assertion);
  }
);

Then(
  /^response body path (.*) should not be (((?!of type).+))$/,
  function (path, value, callback) {
    const assertion = this.apickli.assertPathInResponseBodyMatchesExpression(
      path,
      value
    );
    assertion.success = !assertion.success;
    callbackWithAssertion(callback, assertion);
  }
);

Then(
  /^response body path (.*) should be of type array$/,
  function (path, callback) {
    const assertion = this.apickli.assertPathIsArray(path);
    callbackWithAssertion(callback, assertion);
  }
);

Then(
  /^response body path (.*) should be of type array with length (.*)$/,
  function (path, length, callback) {
    const assertion = this.apickli.assertPathIsArrayWithLength(path, length);
    callbackWithAssertion(callback, assertion);
  }
);

Then(
  /^response body should be valid according to schema file (.*)$/,
  function (schemaFile, callback) {
    this.apickli.validateResponseWithSchema(schemaFile, function (assertion) {
      callbackWithAssertion(callback, assertion);
    });
  }
);

Then(
  /^response body should be valid according to openapi description (.*) in file (.*)$/,
  function (definitionName, swaggerSpecFile, callback) {
    this.apickli.validateResponseWithSwaggerSpecDefinition(
      definitionName,
      swaggerSpecFile,
      function (assertion) {
        callbackWithAssertion(callback, assertion);
      }
    );
  }
);

Then(
  /^I store the value of body path (.*) as access token$/,
  function (path, callback) {
    this.apickli.setAccessTokenFromResponseBodyPath(path);
    callback();
  }
);

When(/^I set bearer token$/, function (callback) {
  this.apickli.setBearerToken();
  callback();
});

Given(
  /^I store the raw value (.*) as (.*) in scenario scope$/,
  function (value, variable, callback) {
    this.apickli.storeValueInScenarioScope(variable, value);
    callback();
  }
);

Then(
  /^I store the value of response header (.*) as (.*) in global scope$/,
  function (headerName, variableName, callback) {
    this.apickli.storeValueOfHeaderInGlobalScope(headerName, variableName);
    callback();
  }
);

Then(
  /^I store the value of body path (.*) as (.*) in global scope$/,
  function (path, variableName, callback) {
    this.apickli.storeValueOfResponseBodyPathInGlobalScope(path, variableName);
    callback();
  }
);

Then(
  /^I store the value of response header (.*) as (.*) in scenario scope$/,
  function (name, variable, callback) {
    this.apickli.storeValueOfHeaderInScenarioScope(name, variable);
    callback();
  }
);

Then(
  /^I store the value of body path (.*) as (.*) in scenario scope$/,
  function (path, variable, callback) {
    this.apickli.storeValueOfResponseBodyPathInScenarioScope(path, variable);
    callback();
  }
);

Then(
  /^value of scenario variable (.*) should be (.*)$/,
  function (variableName, variableValue, callback) {
    if (this.apickli.assertScenarioVariableValue(variableName, variableValue)) {
      callback();
    } else {
      callback(
        new Error(
          "value of variable " +
            variableName +
            " isn't equal to " +
            variableValue
        )
      );
    }
  }
);
