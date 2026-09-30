# Test Scenarios

## Login and Logout
| ID | Scenario | Type | Related Requirement |
|---|---|---|---|
| TS-LOG-01 | Verify that the system displays a login form with Email Address and Password fields and a Login button. | Positive | FR-LOG-01 |
| TS-LOG-02 | Verify that a registered user can log in with a valid email and password. | Positive | FR-LOG-04, FR-LOG-07 |
| TS-LOG-03 | Verify that the Logout button is displayed in the header after a user logs in. | Positive | FR-LOG-08 |
| TS-LOG-04 | Verify that a registered user can log out by clicking the Logout button in the header. | Positive | FR-LOG-09, FR-LOG-10 |
| TS-LOG-05 | Verify that login fails with a wrong password. | Negative | FR-LOG-06 |
| TS-LOG-06 | Verify that login fails with an unregistered email. | Negative | FR-LOG-05 |
| TS-LOG-07 | Verify login with the Email Address field empty. | Validation | FR-LOG-02 |
| TS-LOG-08 | Verify login with the Password field empty. | Validation | FR-LOG-03 |
| TS-LOG-09 | Verify login behavior when the email is entered in capital letters. | Edge case | FR-LOG-12 |
| TS-LOG-10 | Verify login behavior when the email is entered with extra spaces before or after it. | Edge case | FR-LOG-13 |
| TS-LOG-11 | Verify that a user can log in with a valid email and password after a failed login. | Error handling | None (new scenario) |
| TS-LOG-12 | Verify that the Password field is masked when the user enters a password. | Security | None (new scenario) |
| TS-LOG-13 | Verify that pressing the browser Back button after logout does not show the logged-in account. | Security | None (new scenario) |
| TS-LOG-14 | Verify that a registered user can log in by pressing Enter instead of clicking the Login button. | Usability | None (new scenario) |

## Registration
| ID | Scenario | Type | Related Requirement |
|---|---|---|---|
| TS-REG-01 | Verify that the system displays the "Enter Account Information" page when the user enters a Name and an unregistered email and clicks Signup. | Positive | FR-REG-03 |
| TS-REG-02 | Verify that the user cannot edit the Email field on the "Enter Account Information" page. | Positive | FR-REG-06 |
| TS-REG-03 | Verify that the user can edit the Name field on the "Enter Account Information" page. | Positive | FR-REG-08 |
| TS-REG-04 | Verify that the account is created when the user fills in all required fields on the "Enter Account Information" page. | Positive | FR-REG-11 |
| TS-REG-05 | Verify that the account is created when the user enters a password of 8–20 characters with at least one letter and one number, and all other required fields are filled in. | Positive | FR-REG-17 |
| TS-REG-06 | Verify that the system displays the Home page with "Logged in as [username]" in the header when the user clicks Continue on the "Account Created!" page. | Positive | FR-REG-12 |
| TS-REG-07 | Verify that registration fails when the user signs up with an email without a domain extension (e.g., test@gmail). | Negative | FR-REG-01 |
| TS-REG-08 | Verify that registration fails when the user signs up with an email that is already registered. | Negative | FR-REG-02 |
| TS-REG-09 | Verify that the user cannot continue signup when the Name field is left empty on the Signup form. | Validation | FR-REG-09 |
| TS-REG-10 | Verify that the user cannot continue signup when the Email Address field is left empty on the Signup form. | Validation | FR-REG-09 |
| TS-REG-11 | Verify that the account is not created when the user leaves any required field empty on the "Enter Account Information" page. | Validation | FR-REG-10 |
| TS-REG-12 | Verify that the account is not created when the user enters a password without any number. | Validation | FR-REG-15 |
| TS-REG-13 | Verify that the account is not created when the user enters a password without any letter. | Validation | FR-REG-16 |
| TS-REG-14 | Verify that the account is not created when the user enters a password shorter than 8 characters. | Edge case | FR-REG-13 |
| TS-REG-15 | Verify that the account is not created when the user enters a password longer than 20 characters. | Edge case | FR-REG-14 |
| TS-REG-16 | Verify that the user can continue signup after correcting an already registered email. | Error handling | None (new scenario) |
| TS-REG-17 | Verify that the password entered in the Password field is masked. | Security | FR-REG-04 |
| TS-REG-18 | Verify that the system pre-fills the Email field with the email entered on the Signup form. | Usability | FR-REG-05 |
| TS-REG-19 | Verify that the system pre-fills the Name field with the name entered on the Signup form. | Usability | FR-REG-07 |
| TS-REG-20 | Verify that the system marks the required fields with *. | Usability | FR-REG-09 |

## Cart
| ID | Scenario | Type | Related Requirement |
|---|---|---|---|
| TS-CART-01 | Verify that the "Added!" pop-up appears when the user clicks Add to cart. | Positive | FR-CART-01 |
| TS-CART-02 | Verify that the added product appears on the Shopping Cart page with the Item, Description, Price, Quantity, and Total columns. | Positive | FR-CART-02 |
| TS-CART-03 | Verify that the product is added to the cart with the quantity entered on the product details page. | Positive | FR-CART-11 |
| TS-CART-04 | Verify that clicking Add to cart again for the same product increases its quantity in the cart by 1. | Positive | FR-CART-03 |
| TS-CART-05 | Verify that the Total of each product equals the price multiplied by the quantity. | Positive | FR-CART-04 |
| TS-CART-06 | Verify that the quantity on the Shopping Cart page is read-only. | Positive | FR-CART-12 |
| TS-CART-07 | Verify that a product is removed from the cart when the user clicks the X (delete) icon for that product. | Positive | FR-CART-05 |
| TS-CART-08 | Verify that "Cart is empty! Click here to buy products." appears when the user removes all products from the cart. | Positive | FR-CART-06 |
| TS-CART-09 | Verify that the Address Details page appears when a logged-in user clicks Proceed To Checkout. | Positive | FR-CART-07 |
| TS-CART-10 | Verify that an out-of-stock product displays an "Out of Stock" label on the Products page and the product details page. | Positive | FR-CART-13 |
| TS-CART-11 | Verify that the Add to cart button is disabled for an out-of-stock product. | Positive | FR-CART-14 |
| TS-CART-12 | Verify that the product is not added to the cart when the user enters a quantity greater than 10 on the product details page. | Negative | FR-CART-09 |
| TS-CART-13 | Verify that the product is not added to the cart when the user enters a quantity of 0 or less on the product details page. | Negative | FR-CART-10 |
| TS-CART-14 | Verify the behavior when the user enters a decimal quantity (e.g., 2.5) on the product details page. | Validation | None (new scenario) |
| TS-CART-15 | Verify the behavior when the user enters letters (e.g., "abc") in the Quantity field on the product details page. | Validation | None (new scenario) |
| TS-CART-16 | Verify that the product is added to the cart when the user enters a quantity of exactly 1. | Edge case | FR-CART-11 |
| TS-CART-17 | Verify that the product is added to the cart when the user enters a quantity of exactly 10. | Edge case | FR-CART-11 |
| TS-CART-18 | Verify the cart contents after the user logs out and logs in again. | Edge case | None (new scenario) |
| TS-CART-19 | Verify that the user can enter a valid quantity and add the product after the "Maximum quantity per product is 10." error. | Error handling | None (new scenario) |
| TS-CART-20 | Verify that a guest user sees the "Checkout" pop-up asking to Register / Login when clicking Proceed To Checkout. | Security | FR-CART-08 |
| TS-CART-21 | Verify that the pop-up lets the user choose Continue Shopping or View Cart after adding a product. | Usability | FR-CART-01 |