Feature: New Account page 
	As a user i want to a new account page so that accounts can be created.

Scenario: C234- New Account should display without an error 
Given a user with username "techfiosdemo@gmail.com" and password "abc123" 
When when user navigates to new account page 
Then New Account page should display 

	#//another way
Scenario Outline: C235- Create a new account 
	Given a user with username "<username>" and password "<password>" 
	When when user navigates to new account page 
	When user creates a new account using title "<title>" Description "<description>" Amount "<amount>" 
	Examples: 
		|username			   |password |title	 |description|amount|
		|techfiosdemo@gmail.com|abc123	 |Chicken|Breast	 |20	|
		|techfiosdemo@gmail.com|abc123	 |Vegeies|Greens	 |10	|
		
