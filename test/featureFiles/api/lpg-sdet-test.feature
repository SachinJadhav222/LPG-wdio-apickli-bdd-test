@lpg
Feature: Get the city Attraction using REST API

    As QA
    I want to check REST API response

    Scenario: Get All Citys
        When I GET /citys
        Then response body should be valid json
        Then response code should be 200
        Then response body should be valid according to schema file ./test/fixtures/get-simple.schema
        Then response body should contain New York
        Then response body should contain London
        Then response body should contain Los Angeles
        Then response body should contain Sydney
        Then response body should contain Paris

    Scenario: Get All Attraction for NewYork City
        Given I set query parameters to
            | parameter | value |
            | cityId    | 1     |
        When I GET /attractions
        Then response body should be valid json
        Then response code should be 200
        Then response body should be valid according to schema file ./test/fixtures/get-simple.schema
        Then response body should contain New York
        Then response body should contain Museum

    Scenario: Get All Museum for NewYork City and sort with rationgs in decending order
        Given I set query parameters to
            | parameter | value  |
            | cityId    | 1      |
            | type      | MUSEUM |
            | _sort     | rating |
            | _order    | desc   |
        When I GET /attractions
        Then response body should be valid json
        Then response code should be 200
        Then response body should be valid according to schema file ./test/fixtures/get-simple.schema
        Then response body should contain New York
        Then response body should contain Museum


