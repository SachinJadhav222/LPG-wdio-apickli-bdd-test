Feature: GoCity Attractions
    As user
    I want to expolre gocity web

    Scenario: Go city Web
        Given I visit "goCityWeb"
        Then I shloud see Page title "Go Boston Pass | All-Inclusive Pass | Save Up To 55%"
         And I click on "loc01_menu_covid19"
        Then I expect to see URL containing "traveler-information" 
        Then I shloud see Page title "Things to do in Boston during COVID | COVID-19 Advice | Go City"

