Feature: Blazedemo.com login page

    This page is used for the user to enter information to verify and validate the user.

    Scenario: User enters login credentials
        Given Navigate to the website
        Then Enter login credentials
        |email_address|password|
        |random@random.com|testAdmin1|
        Then Click the login button