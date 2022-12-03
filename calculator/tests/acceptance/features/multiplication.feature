Feature: Subtraction
 As a user
 I want to calculate the quotient of two numbers
 So that I get the result

 Scenario: Add two numbers
   Given a user has navigated to the homepage
   # the text inside the quote works as a variable that can be passed to a function
   When the user types "50" into the "First argument" field
   When the user types "2.5" into the "Second argument" field
   When the user clicks "/" button
   Then text "Result: 20" should be displayed
