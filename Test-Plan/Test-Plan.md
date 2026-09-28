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

## 4. Test Environment
| Item | Details |
|---|---|
| Application under test | Automation Exercise (https://automationexercise.com) |
| Device | MacBook Air |
| Operating system | macOS Tahoe 26.5.2 |
| Browsers | Google Chrome 155.0.8059.12(arm64), Safari 26.5.2 |
| Mobile view | Chrome DevTools device emulation (375 px width) |
| Test accounts | New accounts are created with unique fake email addresses for each test (e.g., lara.qa.reg01@mailinator.com). Only fake personal and card data is used. |
| Tools | VS Code (Markdown), Git and GitHub, Google Sheets, Postman, DB Browser for SQLite, Playwright (TypeScript), GitHub Actions, macOS Screenshot |
| Network | Home Wi-Fi |

## 5. Testing Types
| Testing Type | Meaning | How it is used in this project |
|---|---|---|
| Smoke testing | A quick check that the most important features work before deeper testing | Before each test cycle, check that the Home page loads, a user can log in, and a product can be added to the cart. |
| Functional testing | Checking features against the requirements | Check the system features: Login and Logout, Registration, Cart and Checkout and Payment against their 53 functional requirements. |
| UI testing | Checking what users see: labels, layout, messages | Check that labels, buttons, messages, and required-field markers appear correctly on all in-scope pages (e.g., the grammar error in OBS-02 and the missing * markers in OBS-04). |
| Exploratory testing | Testing freely without written test cases to discover issues | Test products browsing and searching without formal requirements. |
| Regression testing | Re-running tests after a change to make sure nothing else broke | After defect fixes or site changes, and at the end of testing, re-run a set of critical tests for login, registration, cart, and checkout to confirm nothing else broke. |
| Compatibility testing | Checking the site works on different browsers and screen sizes | Check that the site displays and works correctly on Google Chrome and Safari, and at mobile width (375 px) using Chrome DevTools device emulation. |
| Basic security checks | Simple checks that protect user data | Check the URL is starting with HTTPS and connection is secure or not in login/signup and payment pages and that passwords are masked (FR-REG-04). |
| API testing | Testing the system's API directly, without the website screens | Test the public API endpoints return correct responses and status codes using Postman. |
| Database testing | Checking that stored data is correct | Write SQL queries against a practice SQLite database modeled on the store (users, products, orders) to verify data such as registered users and order totals. |
| Automation testing | Using code to run tests automatically |  Automate key user flows (login, add to cart, checkout) with Playwright and run them automatically with GitHub Actions. |


## 6. Test Approach
1. **Smoke test first:** Before each test cycle, run the smoke checks (Home page loads, user can log in, product can be added to the cart). If a smoke check fails, stop and report it before continuing.
2. **Design test cases:** Write test cases from the functional requirements, including positive and negative tests. Use equivalence partitioning and boundary value analysis for rules with numeric limits (password length 8–20, quantity 1–10).
3. **Execute by risk priority:** Test the highest-risk modules first: Checkout and Payment and Login (money and access), then Registration and Cart, then UI text and appearance.
4. **Log defects:** Record every failed test in the defect log with steps to reproduce, expected and actual results, severity, priority, and screenshots.
5. **Retest and regression:** When a defect is fixed, retest it to confirm the fix, then run the regression tests to make sure nothing else broke.
6. **API and database testing:** After manual UI testing, test the public API endpoints with Postman and verify data with SQL queries on the practice database.
7. **Automation:** Automate stable, frequently repeated flows (login, add to cart, checkout) with Playwright and run them with GitHub Actions.
8. **Exploratory testing:** Run short exploratory sessions throughout testing, especially for product browsing and search, to find issues not covered by test cases.
9. **Report:** Summarize the results, defects, and risks in a Test Summary Report.


