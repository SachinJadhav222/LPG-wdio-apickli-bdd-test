# Feature: Get GitHub Repost

#      Background: Set GIT HUB base url
#       Given I set base URL as "GIT_HUB"
#   Scenario: GET Git Hub Repos
#      Given I set bearer token
#      When I GET /get

#   Scenario: Git Hub Repos Sort using query parameter
#     Given User set the base API url "https://api.github.com"
#     Then User authenticate API request with "git_token"
#     And User set the query parameter "sort" and value "created"
#     And User sends GET request to get all repos
#     Then User validates the response code "200"

#   Scenario: Git Hub Repos Path parameter
#     Given User set the base API url "https://api.github.com"
#     Then User authenticate API request with "git_token"
#     And User set the PATH parameter "username" and value "sachinjadhav222"
#     And User sends GET request with PATH parameter "sachinjadhav222"
#     Then User validates the response code "200"