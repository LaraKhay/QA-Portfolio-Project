# Test Plan: Automation Exercise

## 1. Objectives
- Verify that users can register, log in, and log out according to the functional requirements.
- Verify that users can add products to the cart with the correct quantity and tools according to the functional requirements.
- Verify that users can proceed to checkout, place order, pay and confirm order and download the invoice according to the functional requirements.
- Identify and report defects with clear reproductive steps, severity and evidence.
- Verify that the public API endpoints return the correct responses and status codes.

## 2. Scope
- Login and logout
- Registration (including password rules and email validation)
- Cart (including quantity limits)
- Checkout and Payment
- Product browsing and search: exploratory testing only (no formal requirements written)
- Non-functional checks: HTTPS, browser compatibility, mobile view, page load time, usability
- API testing of the public API endpoints (Postman)
- Database testing using a practice SQLite database
- UI automation of key user flows (Playwright)

## 3. Out of Scope
- **Recommended Items:** The marketing team manually choose recommended items (out of scope, RQ-02).
- **Password reset:** Not included in this release (deferred, RQ-05).
- **Admin:** The admin role is not visible or accessible from public website (see user roles).
- **Load and stress testing:** Heavy traffic could slow down or disrupt a public website that we do not own and have no permission to load test.
- **Real payment processing:** Only fake card data is used, so actual payment charging and bank responses cannot be verified. Entering real card data on a public practice site would also be unsafe.
- **Contact Us form and newsletter subscription:** No formal requirements were written for these features in this project.



