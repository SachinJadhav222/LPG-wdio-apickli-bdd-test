# @core
# Feature: 
#     As an API Client
#     I want to present a Client Certificate with a HTTP Request
#     So that I can access protected systems

#     Scenario: I successfully present a client certificate and ca certificate
#         Given I use the mock target
#         And I have valid client TLS configuration
#         When I GET / 
#         Then response code should be 200

#     Scenario: Git Hub Repos Sort using query parameter
#         Given User set the base API url "https://api.github.com"
#         Then User authenticate API request with "git_token"
#         And User set the query parameter "sort" and value "created"
#         And User sends GET request to get all repos
#         Then User validates the response code "200"

#     Scenario: Git Hub Repos Path parameter
#         Given User set the base API url "https://api.github.com"
#         Then User authenticate API request with "git_token"
#         And User set the PATH parameter "username" and value "sachinjadhav222"
#         And User sends GET request with PATH parameter "sachinjadhav222"
#         Then User validates the response code "200"

