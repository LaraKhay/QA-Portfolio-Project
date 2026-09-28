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


## 7. Entry and Exit Criteria

### Entry Criteria
- The test environment is ready: Chrome and Safari are installed, and test accounts are created with fake email addresses.
- Requirement documents are completed: Functional-Requirements.md, Business-Rules-NFRs.md, Requirements-Review.md(with PO answers) and the RTM.
- Test cases are written for all in-scope requirements, prioritized, and peer-reviewed (by the project mentor).
- The smoke test passed: the Home page loads, a user can log in, and a product can be added to the cart.
- Test data is prepared for all in-scope modules: valid and invalid emails, password at boundary lengths, quantities and fake card details.

### Exit Criteria
- No Critical defects remain open, unless the Product Owner accepts them as known issues and they are documented in the Test Summary Report.
- At least 90% of executed test cases have passed.
- All defects are logged in the defect log, and the RTM is updated with test case IDs, execution status, and defect IDs.
- The Test Summary Report is completed.

## 8. Risks
| Risk | Impact | Mitigation |
|---|---|---|
| Other users of the public site may create or change data (e.g., accounts with the same email). | Test results may be affected by data we did not create. | Use a unique fake email for every test account. |
| FR-CART-13 and FR-CART-14 cannot be tested because no products are out of stock on the site. | The out-of-stock behavior remains unverified. | Mark these tests as Blocked, report them as untested in the Test Summary Report, and test them if an out-of-stock product becomes available. |
| The site changes or goes offline during testing. | Testing is delayed, and earlier results may no longer match the site. | Record the date and time of every test run and save screenshots as evidence. If the site is offline, pause and retry later. Note any site changes in the test results. |
| Testing time runs out. | Not all test cases are executed. | Prioritize test cases by risk so the most important features are tested first. |

## 9. Assumptions
- The product owner answers in the Requirements Review are final for this project.
- The site accepts fake card details on the Payment page.
- The site stays the same throughout the project.

## 10. Dependencies
- A stable internet connection is needed to access the website.
- The Automation Exercise website and its public API must be available during testing.
- The required tools must be installed: Google Chrome, Safari, VS Code, Git, Postman, DB Browser for SQLite, and Node.js (needed to run Playwright).
- GitHub must be available to store project documents and run automated tests with GitHub Actions.
- Test cases and documents depend on peer review by the project mentor before execution.

## 11. Deliverables
| Deliverable | Location |
|---|---|
| Application Overview | Requirements/Application-Overview.md |
| Functional Requirements | Requirements/Functional-Requirements.md |
| Business Rules, NFRs, and User Roles | Requirements/Business-Rules-and-NFRs.md |
| Requirements Review (PO questions and answers) | Requirements/Requirements-Review.md |
| Requirements Traceability Matrix | RTM/ (.xlsx and .csv) |
| QA Workflow | Test-Plan/QA-Workflow.md |
| Test Plan | Test-Plan/Test-Plan.md |
| Test Scenarios | Test-Scenarios/ |
| Test Cases (including regression checklist) | Test-Cases/ |
| Test Data | Test-Data/ |
| Observations, Defect Log, and Bug Reports | Bug-Reports/ |
| Test Evidence (screenshots) | Screenshots/ |
| API Test Collection and API Test Cases | API-Testing/ |
| SQL Scripts and Database Test Cases | SQL/ |
| Automation Scripts and Test Reports | Automation/ |
| Test Summary Report | Test-Reports/ |

## 12. Schedule
*Dates assume about 10 hours of work per week and will be updated if the plan changes.*

| Activity | Project Phase | Planned Dates |
|---|---|---|
| Requirement Analysis | Phase 2 | Completed |
| Test Planning | Phase 3 | Sep 28 – Oct 2, 2026 |
| Test Scenarios and Test Case Design | Phases 4–5 | Oct 3 – Oct 16, 2026 |
| Test Execution, Bug Reporting, and Bug Lifecycle | Phases 6–8 | Oct 17 – Oct 27, 2026 |
| API Testing | Phase 9 | Oct 28 – Nov 3, 2026 |
| Database Testing | Phase 10 | Nov 4 – Nov 10, 2026 |
| Automation Testing | Phase 11 | Nov 11 – Nov 24, 2026 |
| Regression Testing | Phase 12 | Nov 25 – Nov 28, 2026 |
| Test Summary Report | Phase 13 | Nov 29 – Dec 1, 2026 |

