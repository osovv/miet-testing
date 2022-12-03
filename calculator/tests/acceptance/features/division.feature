Feature: Subtraction
 As a user
 I want to calculate the product of two numbers
 So that I get the result

 Scenario: Add two numbers
   Given a user has navigated to the homepage
   # the text inside the quote works as a variable that can be passed to a function
   When the user types "0.5" into the "First argument" field
   When the user types "5" into the "Second argument" field
   When the user clicks "x" button
   Then text "Result: 2.5" should be displayed
