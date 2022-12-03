Feature: Sum
 As a user
 I want to calculate the sum of two numbers
 So that I get the result

 Scenario: Add two numbers
   Given a user has navigated to the homepage
   # the text inside the quote works as a variable that can be passed to a function
   When the user types "10" into the "First argument" field
   When the user types "5" into the "Second argument" field
   When the user clicks "+" button
   Then text "Result: 15" should be displayed
