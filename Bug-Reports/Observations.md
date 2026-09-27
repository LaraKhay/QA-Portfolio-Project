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