# QA Workflow

## 1. SDLC (Software Development Life Cycle)
- **Requirements:** Gather what the customers or business need.
- **Design:** Plan the architecture, database and UI.
- **Development:** Developers write code.
- **Testing:** Verify the software works as required.
- **Deployment:** Release to customers (production).
- **Maintenance:** Fix bugs, update and improve.

**Where QA should get involved, and why:** QA should get involved as early as the requirement phase because the missing acceptance criteria in the requirement meeting cost one conversation but the bugs found later after deployment cost highly.

## 2. STLC (Software Testing Life Cycle) in This Project

### Phase 1: Requirement Analysis
- **Activity in my project:** I explored Automation Exercise as both a guest user and a registered user. I documented 15 main features, the user types, and the main user journeys, and I wrote 6 clarifying questions about unclear behavior, such as signing up with an already registered email and handling out-of-stock products. Next, I will write a requirements list and create a Requirements Traceability Matrix (RTM) to link each requirement to its test cases.
- **Deliverable:** `Requirements/Application-Overview.md`, requirements list, RTM
- **Project phases:** Phases 1–2

### Phase 2: Test Planning
- **Activity in my project:** I will define what will be tested (e.g., sign up, login, cart, checkout) and what is out of scope (e.g., performance testing and the admin side, which is not accessible). I will also choose the testing types, tools, schedule, entry and exit criteria, and risks.
- **Deliverable:** `Test-Plan/Test-Plan.md`
- **Project phase:** Phase 3

### Phase 3: Test Case Development
- **Activity in my project:** I will identify test scenarios for each feature and write detailed test cases with steps and expected results. I will include positive, negative, boundary value, and equivalence partitioning tests, and prepare test data such as valid and invalid emails and passwords.
- **Deliverable:** Test scenarios, test cases, test data
- **Project phases:** Phases 4–5

### Phase 4: Test Environment Setup
- **Activity in my project:** I will prepare the environment before execution: Google Chrome on macOS (MacBook Air), test accounts created with fake email addresses, and the tools I need, including Google Sheets, Postman, DB Browser for SQLite, and Playwright.
- **Deliverable:** Ready test environment, documented in the Test Plan
- **Project phase:** Phase 6 (preparation)

### Phase 5: Test Execution
- **Activity in my project:** I will run the test cases, record the actual results, and compare them with the expected results. I will mark each test as Pass, Fail, or Blocked, save screenshots as evidence, report defects, and retest fixed bugs. This phase also includes API testing with Postman, database testing with SQL, automated testing with Playwright, and regression testing.
- **Deliverable:** Executed test cases, defect log, bug reports, screenshots, Postman collection, SQL scripts, automation scripts
- **Project phases:** Phases 6–12

### Phase 6: Test Cycle Closure
- **Activity in my project:** I will write a Test Summary Report showing how many tests passed, failed, and were blocked, the bugs found by severity, known issues, risks, and recommendations. Then I will organize all my work into a professional portfolio.
- **Deliverable:** Test Summary Report, final GitHub portfolio
- **Project phases:** Phases 13–14

## 3. SDLC vs STLC
SDLC is a step-by-step process followed by the team to build software, from the first idea until the software is live and maintained. 
STLC is the life cycle of the testing steps which is inside SDLC. STLC is the organized steps that QA follow so testing is not about "click around and see what happens".

## 4. Shift-Left Example
**Question from my Application Overview:**
What should happen when a product is out of stock? 

**If QA asks this now:** The product owner decides that out-of-stock products show an 'Out of Stock' label and have a disabled Add to cart button. The developers can write code to cover the out of stock product. For QA, the expected result will be the product is labeled as out of stock and the disable Add to cart button.

**If nobody asks:** Without a requirement, if I am able to buy an out-of-stock product during testing, I cannot tell whether it is a bug or intended behavior, because the business might want to allow backorders (customers order now and receive the product later). I would have to stop and ask the team, and my defect might be rejected as "working as intended." If the team then decides it is a bug, developers have to rework the code late in the project, and I have to retest it and run regression tests. This costs much more time than asking one question during requirement analysis.

**If it reaches customers:** The order cannot be delivered if the product is unavailable so there will be refunds to proceed and complaints from customers. The customers will lost trust in business.

**Why asking it early is better:** By asking those questions early, QA can prevent defects early in the requirement analysis phase and it costs less than finding bugs after development or deployment phase.