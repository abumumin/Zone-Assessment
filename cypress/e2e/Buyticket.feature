Feature: Dummyticket booking
    As a user, I should be able to buy a ticket

    Scenario: User should be able to buy ticket with card
        Given  I launch dummyticket website
        When I click on BUY TICKET
        And I input first name and Last name
        And I input order Notes
        And I select Date of Birth
        And I click on  Sex
        And I input City from and City To
        And I insert a depature date
        And I input additional information
        And I input Appointment Date
        And i click on email
        And I input Billing name
        And I input phone number
        And I input email address
        And I select Country
        And I input street address
        And I input City
        And I input State
        And I click on Debit and Credit Card
        And I inpute card details
        And I click on Proceed to Pay
        Then I should see the price of the first available flight
