# @jsonservice
# Feature: JSON placeholder Service
#     I want to make sure CRUD operations through REST API works fine

#     Scenario:
#         Given I place GET request to /posts
#         Then I get reponse code 200

#     Scenario: get Post based on ID
#         Given The contact with 2 exist
#         When I send one GET request to /posts
#         Then I should receive
# ```
# { "userId": 1, "id": 2, "title": "qui est esse","body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"}
# ```