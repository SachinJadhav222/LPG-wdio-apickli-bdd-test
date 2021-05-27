@jsonservice
Feature: JSON placeholder Service
    I want to make sure CRUD operations through REST API works fine

    Background: Set base url
        Given I set base URL as "JSON_Placeholder"

    Scenario:
        Given I GET "/posts/2"
        Then response body should be valid "json"
        Then response code should be 200
        Then response body should contain "qui est esse"
        
#         Then response body should match
# ```
# {
# "userId": 1,
# "id": 2,
# "title": "qui est esse",
# "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
# }
# ```


