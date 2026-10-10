# QA Portfolio Project: Automation Exercise

A hands-on software testing project where I test a B2C e-commerce web application from start to finish: requirement analysis, test planning, test case design, test execution, bug reporting, API testing, database testing, test automation, and final reporting.

**Application under test:** [Automation Exercise](https://automationexercise.com), a public demo online clothing store built for testing practice.

**Status:** 🚧 In progress. Currently in Phase 6 (Test Execution) and Phase 9 (API Testing).

**Author:** Nang Yu Yu Khay (Lara)

---

## Project Progress

| Phase | Status |
|---|---|
| 1. Project Setup | ✅ Completed |
| 2. Requirement Analysis | ✅ Completed |
| 3. Test Plan | ✅ Completed |
| 4. Test Scenarios | ✅ Completed |
| 5. Test Case Design | ✅ Completed |
| 6. Test Execution | 🚧 In progress |
| 7. Bug Reporting | ⏳ Planned |
| 8. Bug Lifecycle | ⏳ Planned |
| 9. API Testing | 🚧 In progress |
| 10. Database Testing | ⏳ Planned |
| 11. Automation Testing | ⏳ Planned |
| 12. Regression Testing | ⏳ Planned |
| 13. Test Summary Report | ⏳ Planned |

## Completed Work

### Requirement Analysis
- [Application Overview](Requirements/Application-Overview.md): features, user types, user journeys, and clarifying questions
- [Functional Requirements](Requirements/Functional-Requirements.md): testable requirements for Login and Logout, Registration, Cart, and Checkout and Payment
- [Business Rules, NFRs, and User Roles](Requirements/Business-Rules-and-NFRs.md)
- [Requirements Review](Requirements/Requirements-Review.md): 11 missing or ambiguous requirements, with product owner answers
- [Requirements Traceability Matrix](RTM/): 60 requirements traced to test cases and defects, with 100% requirement coverage

### Test Planning
- [QA Workflow](Test-Plan/QA-Workflow.md): how this project follows SDLC and STLC
- [Test Plan](Test-Plan/Test-Plan.md): objectives, scope, environment, risk-based approach, entry and exit criteria, risks, and schedule

### Test Design
- [Test Scenarios](Test-Scenarios/Test-Scenarios.md): 72 scenarios covering positive, negative, validation, edge case, error handling, security, and usability checks
- [Test Design Techniques](Test-Cases/Test-Design-Techniques.md): equivalence partitioning and boundary value analysis for password length and quantity rules
- [Test Cases](Test-Cases/): 103 detailed test cases across 5 modules (Login and Logout, Registration, Cart, Checkout and Payment, Non-Functional), with reusable test data sets

### Test Execution (in progress)
- Smoke test passed: entry criteria met on 2026-10-03
- High-priority tests executed first, following a risk-based approach (Checkout and Payment, Login and Logout, Registration, Cart)
- Every executed test records the actual result, execution date, and screenshot evidence ([Screenshots](Screenshots/))

### API Testing (in progress)
- [API Test Cases](API-Testing/API-Testing.csv): 18 test cases covering all 14 documented APIs, plus chained account tests (create, read, update, delete) and security checks for credentials in the URL
- [Postman Collection](API-Testing/Automation-Exercise-API.postman_collection.json): all requests, ready to import and rerun
- Automated checks with Postman test scripts: shared collection-level checks (response time, Content-Type, responseCode) and request-specific checks for status codes, messages, and data, run with the Collection Runner

## Test Execution Progress

### UI Tests

| Module | Total | Executed | Passed | Failed | Not Run |
|---|---|---|---|---|---|
| Login and Logout | 14 | 6 | 5 | 1 | 8 |
| Registration | 36 | 11 | 8 | 3 | 25 |
| Cart | 25 | 14 | 11 | 3 | 11 |
| Checkout and Payment | 22 | 7 | 7 | 0 | 15 |
| Non-Functional | 6 | 0 | 0 | 0 | 6 |
| **Total** | **103** | **38** | **31** | **7** | **65** |

### API Tests

| Total | Executed | Passed | Failed |
|---|---|---|---|
| 18 | 18 | 7 | 11 |

*Most API failures share one cause: error responses return HTTP 200 OK (OBS-09).*

*Last updated: 2026-10-10*

## Key Findings So Far

| ID | Finding | Status |
|---|---|---|
| OBS-01 | Signup accepts an email address without a domain extension (e.g., test@gmail) | Confirmed by PO; reproduced in TC-REG-07 |
| OBS-02 | Grammar error in the duplicate email message ("already exist!") | To be reported |
| OBS-03 | Invoice showed a total of 0 for orders containing Blue Top (reproduced twice, isolated to one product) | Cannot reproduce as of 2026-10-03 |
| OBS-04 | Required fields on the Payment page are not marked with * | Confirmed by PO |
| OBS-05 | Signup accepts passwords that break the password rules | Defect against simulated requirement; reproduced in TC-REG-14b, 15a |
| OBS-06 | Product details page accepts a quantity greater than 10 | Defect against simulated requirement; reproduced in TC-CART-12a |
| OBS-07 | Back button after logout shows the previous logged-in page from the browser cache (the session itself has ended) | To be reported |
| OBS-08 | All API responses use Content-Type text/html instead of application/json | To be reported |
| OBS-09 | All API responses return HTTP 200 OK, including errors and account creation | To be discussed (likely by design) |
| OBS-10 | Brands List API returns duplicate brands (34 entries for 8 brands) | To be reported |
| OBS-11 | User details API returns personal information (name, address, date of birth) with only an email, without authentication | To be reported |
| OBS-12 | Quantity of 0 or less is accepted: an order for Rs. 0 can be placed, and negative quantities produce negative totals | To be reported |
| OBS-13 | Live site shows a Django debug error page that reveals the framework, debug mode, and internal URL patterns | To be reported |

Full details: [Observations](Bug-Reports/Observations.md)

## Tools

**Used so far:** Postman, Google Sheets, VS Code (Markdown), Git and GitHub, Chrome (including Developer Tools), Safari

**Planned:** DB Browser for SQLite, Playwright, GitHub Actions

---

*This project is for learning and portfolio purposes. I am not affiliated with Automation Exercise. Product owner answers in this project were simulated by my project mentor for practice purposes.*