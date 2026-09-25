## OBS-01: Sign up accepts an email address without a domain extension
- **Page:** Sign up
- **What I did:** Entered an email like test@gmail (without .com) in the Sign up email field
- **What happened:** The website accepted it and created the account
- **What I expected:** An error message asking for a valid email address
- **Note:** Login correctly rejects an email that does not exactly match the registered one (tested with a fresh account), so the issue is only on the Sign up page.
- **Status:** To confirm with the product owner
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