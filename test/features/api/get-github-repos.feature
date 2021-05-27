Feature: Get GitHub Repos

    Background: Set GIT HUB base url
        Given I set base URL as "GIT_HUB"

    Scenario: GET Git Hub Repos
        Given I set "User-Agent" header to "github"
        Then I set Authorization header as "git_token"
        And I set query parameters to
            | parameter | value   |
            | sort      | created |
        When I GET "/users/sachinjadhav222/repos"
        Then response body should be valid "json"
        Then response code should be 200

