Feature: Product
    As a user
    I want to visit product page
    So that I can see list of product

    Scenario: Visit products page
        Given I am on the home page
        When I click Computers category
        Then I click Notebooks category
        Then I see list of notebook product