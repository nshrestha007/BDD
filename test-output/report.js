$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account page",
  "description": "As a user i want to a new account page so that accounts can be created.",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10225197100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "C234- New Account should display without an error",
  "description": "",
  "id": "new-account-page;c234--new-account-should-display-without-an-error",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "when user navigates to new account page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "New Account page should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 5651790400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.when_user_navigates_to_new_account_page()"
});
formatter.result({
  "duration": 3287019500,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.new_Account_page_should_display()"
});
formatter.result({
  "duration": 81841000,
  "status": "passed"
});
formatter.after({
  "duration": 5917028000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 9,
      "value": "#//another way"
    }
  ],
  "line": 10,
  "name": "C235- Create a new account",
  "description": "",
  "id": "new-account-page;c235--create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "when user navigates to new account page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"\u003ctitle\u003e\" Description \"\u003cdescription\u003e\" Amount \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-account-page;c235--create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "description",
        "amount"
      ],
      "line": 15,
      "id": "new-account-page;c235--create-a-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Chicken",
        "Breast",
        "20"
      ],
      "line": 16,
      "id": "new-account-page;c235--create-a-new-account;;2"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Vegeies",
        "Greens",
        "10"
      ],
      "line": 17,
      "id": "new-account-page;c235--create-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8160612200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "C235- Create a new account",
  "description": "",
  "id": "new-account-page;c235--create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "when user navigates to new account page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"Chicken\" Description \"Breast\" Amount \"20\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 4656469300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.when_user_navigates_to_new_account_page()"
});
formatter.result({
  "duration": 3306633300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chicken",
      "offset": 40
    },
    {
      "val": "Breast",
      "offset": 62
    },
    {
      "val": "20",
      "offset": 78
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 496136200,
  "status": "passed"
});
formatter.after({
  "duration": 5882047100,
  "status": "passed"
});
formatter.before({
  "duration": 7498543800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "C235- Create a new account",
  "description": "",
  "id": "new-account-page;c235--create-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "when user navigates to new account page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"Vegeies\" Description \"Greens\" Amount \"10\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 4692498300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.when_user_navigates_to_new_account_page()"
});
formatter.result({
  "duration": 3702493600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vegeies",
      "offset": 40
    },
    {
      "val": "Greens",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 78
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 466889500,
  "status": "passed"
});
formatter.after({
  "duration": 5878787500,
  "status": "passed"
});
});