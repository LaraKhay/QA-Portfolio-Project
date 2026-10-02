## OBS-01: Sign up accepts an email address without a domain extension
- **Page:** Sign up
- **What I did:** Entered an email like test@gmail (without .com) in the Sign up email field
- **What happened:** The website accepted it and created the account
- **What I expected:** An error message asking for a valid email address
- **Note:** Login correctly rejects an email that does not exactly match the registered one (tested with a fresh account), so the issue is only on the Sign up page.
- **Status:** Confirmed as a defect by PO (RQ-07). To be reported in Phase 7 (Bug Reporting)
- **Reproducible:** Yes (tested twice with fresh email addresses, e.g., lara.reg01@gmail)

## OBS-02: Grammar error in duplicate email message on Signup
- **Page:** Signup ("New User Signup!" form)
- **What I did:** Entered a name and an email address that is already registered, then clicked Signup
- **What happened:** The message "Email Address already exist!" is displayed
- **What I expected:** A grammatically correct message, e.g., "Email Address already exists!"
- **Type:** Cosmetic (UI text)
- **Status:** To be reported in Phase 7 (Bug Reporting)

## OBS-03: Invoice shows total purchase amount as 0 for orders containing Blue Top
- **Page:** "Order Placed!" page → Download Invoice
- **What I did:** Placed an order containing only Blue Top (Rs. 500, quantity 1), then clicked Download Invoice and opened invoice.txt
- **What happened:** The invoice shows: "Hi Lara K, Your total purchase amount is 0. Thank you"
- **What I expected:** The invoice shows the order total from the Checkout page (Rs. 500)
- **Reproducible:** Yes, 2 of 2 times with Blue Top. An order with Madame Top For Women showed the correct amount.
- **Status:** To be reported in Phase 7 (Bug Reporting)

## OBS-04: Required fields on the Payment page are not marked with *
- **Page:** "Payment" page
- **What I did:** Opened the Payment page and checked the field labels. Then left the fields empty and clicked Pay and Confirm Order.
- **What happened:** Name on Card, Card Number, CVC, and Expiration are not marked with *. However, leaving any of them empty shows "Please fill out this field.", so they are required.
- **What I expected:** The system marks all the required fields with * on the Payment page.
- **Type:** UI / Usability
- **Related:** requirement: FR-CHK-12
- **Reproducible:** Yes (always visible on the Payment page)
- **Status:** Confirmed as a defect by PO (RQ-08). To be reported in Phase 7 (Bug Reporting)

## OBS-05: Signup accepts passwords that break the password rules
- **Page:** "Enter Account Information" page
- **What I did:** Signed up twice with new emails, filled in all required fields using REG-VALID, and clicked Create Account:
  1. Password "len05" (5 characters, too short)
  2. Password "registertwelve" (14 characters, letters only, no number)
- **What happened:** "Account Created!" was displayed for both passwords, and both accounts were created.
- **What I expected:** "Password must be 8–20 characters and include at least one letter and one number." is displayed, and the account is not created.
- **Type:** Validation
- **Related requirements:** FR-REG-13, FR-REG-15
- **Reproducible:** Yes (2 of 2 attempts)
- **Status:** Defect against the password rules confirmed by PO (RQ-04). To be reported in Phase 7 (Bug Reporting).
- **Note:** The password rules come from simulated product owner answers for this practice project.

## OBS-06: Product details page accepts a quantity greater than 10
- **Page:** Product details page (Men Tshirt)
- **What I did:** Logged in with ACC-01, emptied the cart, opened the product details page for Men Tshirt, cleared the Quantity field, entered 11, and clicked Add to cart. Then clicked View Cart.
- **What happened:** The "Added!" pop-up appeared, and the cart showed Men Tshirt with Quantity 11 and Total Rs. 4400.
- **What I expected:** "Maximum quantity per product is 10." is displayed, and the product is not added to the cart.
- **Type:** Validation
- **Related requirement:** FR-CART-09
- **Reproducible:** Yes (2 of 2 attempts)
- **Status:** Defect against the quantity rule confirmed by PO (RQ-03). To be reported in Phase 7 (Bug Reporting).
- **Note:** The quantity rule comes from simulated product owner answers for this practice project. A quantity of 0 was handled correctly: clicking Add to cart did nothing, and the cart stayed empty.