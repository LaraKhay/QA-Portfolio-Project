# Functional Requirements

## Login and Logout
| ID | Module | Requirement | Source |
|---|---|---|---|
| FR-LOG-01 | Login | The system shall display a login form with Email address and Password fields and a Login button.  | Observed |
| FR-LOG-02 | Login | The system shall display "Please fill out this field." when the user clicks Login with the Email address field empty (Chrome)  | Observed | 
| FR-LOG-03 | Login | The system shall display "Please fill out this field." when the user clicks Login with the Password field empty. (Chrome)  | Observed |
| FR-LOG-04 | Login | The system shall display "Logged in as [username]" in the header after a successful login.  | Observed |
| FR-LOG-05 | Login | The system shall display "Your email or password is incorrect!" when the user clicks Login with unregistered email. | Observed |
| FR-LOG-06 | Login | The system shall display "Your email or password is incorrect!" when the user clicks Login with wrong Password. | Observed |
| FR-LOG-07 | Login | The system shall log in a user only when the entered email exactly matches a registered email address. | Observed |
| FR-LOG-08 | Logout | The system shall display a Logout button in the header after the user logs in successfully. | Observed |
| FR-LOG-09 | Logout | The system shall display the login form if the user clicks Logout button | Observed |
| FR-LOG-10 | Logout | The system shall remove "Logged in as [username]" in the header if the user clicks Logout. | Observed |
| FR-LOG-11 | Logout | The system shall display "Confirm to Logout" message after the user clicks Logout button  | Assumption (to confirm with PO) |

## Registration
| ID | Module | Requirement | Source |
|---|---|---|---|
| FR-REG-01 | Registration | The system shall display an error message and not continue with sign up when the user enters an email address without a domain extension (e.g., test@gmail). | Assumption (to confirm with PO) |
| FR-REG-02 | Registration | The system shall display "Email Address already exist!" when the user enters an Email address that is already registered.  | Observed |
| FR-REG-03 | Registration | The system shall display "Enter Account Information" page when the user clicks Signup with a Name and Email address.  | Observed |
| FR-REG-04 | Registration | The system shall mask the characters entered in the Password field (displayed as dots). | Observed |
| FR-REG-05 | Registration | The system shall pre-fill the Email field on the "Enter Account Information" page with the email entered on the Signup form. | Observed |
| FR-REG-06 | Registration | The system shall not allow the user to edit the Email field on the "Enter Account Information" page.| Observed |
| FR-REG-07 | Registration | The system shall pre-fill the Name field on the "Enter Account Information" page with the Name entered on the Signup form. | Observed |
| FR-REG-08 | Registration | The system shall allow the user to edit the Name field on the "Enter Account Information" page. | Observed |
| FR-REG-09 | Registration | The system shall mark the following fields as required: Name, Email, Password, First name, Last name, Address, Country, State, City, Zipcode, Mobile Number. | Observed |
| FR-REG-10 | Registration | The system shall display "Please fill out this field." and not create the account when the user clicks Create Account with any required field empty. (Chrome) | Observed |
| FR-REG-11 | Registration | The system shall display "Account Created!" page after the user clicks Create Account with every required field filled in.  | Observed |
| FR-REG-12 | Registration | The system shall display Home page with "Logged in as [username]" in the header when the user clicks Continue on "Account Created!" page. | Observed |

## Cart
| ID | Module | Requirement | Source |
|---|---|---|---|
| FR-CART-01 | Cart | The system shall display a pop-up message "Added! Your product has been added to cart." with a View Cart link and Continue Shopping button when the user clicks Add to cart. | Observed |
| FR-CART-02 | Cart | The system shall display the columns: Item, Description, Price, Quantity, Total for each product on the Shopping Cart page. | Observed |
| FR-CART-03 | Cart | The system shall increase the quantity of a product in the Cart by 1 when the user clicks Add to cart again for the same product.| Observed |
| FR-CART-04 | Cart | The system shall display the value of Price * Quantity (e.g., Price = Rs. 500 and Quantity = 3, Total shall br Rs. 1500 ) in the Total column for each product row. | Observed |
| FR-CART-05 | Cart | The system shall delete the product when the user clicks the X(delete) button for that product. | Observed |
| FR-CART-06 | Cart | The system shall display "Cart is empty! Click here to buy products." when the user removes all the products in the Shopping Cart page. | Observed |
| FR-CART-07 | Cart | The system shall display Address Details page when the registered user clicks Proceed To Checkout. | Observed |
| FR-CART-08 | Cart | The system shall display a "Checkout" pop-up with the message "Register / Login account to proceed on checkout.", a Register / Login link and a Continue On Cart button when the guest user clicks Proceed to Checkout.| Observed |
