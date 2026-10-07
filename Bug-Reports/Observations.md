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
- **Update (2026-10-03):** Not reproducible. Retested with Blue Top using both ACC-01 ("Lara QA") and the original account ("Lara K"). In both cases, the invoice showed the correct total of 500 (see TC-CHK-08a). The site may have been fixed or changed, or the defect may have been intermittent.
- **Status:** Cannot reproduce (as of 2026-10-03)


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

## OBS-07: Back button after logout shows the previous logged-in page
- **Page:** Home page (after logout)
- **What I did:** Logged in with ACC-01, clicked Logout, then pressed the browser's Back button. Then refreshed the page (Cmd + R).
- **What happened:** After pressing Back, the Home page was displayed with "Logged in as Lara QA" in the header. After refreshing, the page showed no account logged in.
- **What I expected:** After pressing Back, the header does not show "Logged in as Lara QA".
- **Type:** Security
- **Related test case:** TC-LOG-13
- **Reproducible:** Yes (3 of 3 attempts)
- **Evidence:** TC-LOG-13_1-after-logout.png to TC-LOG-13_4-after-link-click.png
- **Status:** To be reported in Phase 7 (Bug Reporting)
- **Note:** The session itself had ended. After pressing Back, clicking a link (Cart) opened a page with no account logged in, and refreshing also showed the user as logged out. So the previous page is only displayed from the browser cache; the account cannot be used.

## OBS-08: All API responses use Content-Type "text/html" instead of "application/json"
- **Endpoints tested (all 14 documented APIs, 16 requests):**
  - GET /api/productsList (TC-API-01)
  - POST /api/productsList (TC-API-02)
  - GET /api/brandsList (TC-API-03)
  - PUT /api/brandsList (TC-API-04)
  - POST /api/searchProduct, with and without search_product (TC-API-05, 06)
  - POST /api/verifyLogin, valid, without email, and invalid details (TC-API-07, 08, 10)
  - DELETE /api/verifyLogin (TC-API-09)
  - POST /api/createAccount (TC-API-11)
  - DELETE /api/deleteAccount (TC-API-12)
  - PUT /api/updateAccount (TC-API-13)
  - GET /api/getUserDetailByEmail (TC-API-14, 15, 16)
  - POST /api/verifyLogin?email=lara.qa.tc01@mailinator.com&password=Test1234 (TC-API-17)
  - GET /api/verifyLogin?email=lara.qa.tc01@mailinator.com&password=Test1234 (TC-API-18)
- **Tool:** Postman
- **What I did:** Sent requests to each endpoint and checked the Content-Type response header.
- **What happened:** Every response body is JSON, but every response has the header Content-Type: "text/html; charset=utf-8". This applies to both successful and error responses.
- **What I expected:** Content-Type is "application/json" for JSON responses.
- **Impact:** Programs read the Content-Type to decide how to handle a response. Because JSON is labeled as a web page, clients may handle the data incorrectly (for example, Chrome does not recognize it as JSON and shows no Pretty-print option), and browsers may treat the data as a web page, which increases the risk of cross-site scripting (XSS).
- **Type:** API
- **Reproducible:** Yes (all 18 requests)
- **Evidence:** API-01_content-type-text-html.png, API-01b_github-json-pretty-print.png, API-01c_productslist-no-pretty-print.png
- **Note:** The API list does not mention Content-Type. Because the same label appears on every endpoint, the cause is probably one shared setting or framework default, so a single fix would likely correct all endpoints.
- **Status:** To be reported in Phase 7 (Bug Reporting)

## OBS-09: All API responses return HTTP 200 OK, including errors and account creation
- **Endpoints tested (all 14 documented APIs, 18 requests):** same as OBS-08
- **Tool:** Postman
- **What I did:** Sent successful and invalid requests, and compared the HTTP status code with the responseCode in the body.
- **What happened:** Every response returned HTTP 200 OK. When the body reported a different result, the HTTP status still said 200 OK:
  - Unsupported method: HTTP 200, body 405, "This request method is not supported." (TC-API-02, 04, 09, 18)
  - Missing parameter: HTTP 200, body 400, "Bad request, ... parameter is missing in POST request." (TC-API-06, 08, 17)
  - User or account not found: HTTP 200, body 404, "User not found!" / "Account not found with this email, try another email!" (TC-API-10, 16)
  - Account created: HTTP 200, body 201, "User created!" (TC-API-11)
- **What I expected:** The HTTP status code matches the result: 405 Method Not Allowed, 400 Bad Request, 404 Not Found, and 201 Created.
- **Impact:** Tools and programs that check only the HTTP status code will treat failed requests as successful, and cannot tell a newly created account apart from other successful requests.
- **Type:** API
- **Reproducible:** Yes (all 11 requests where the body code is not 200)
- **Evidence:** API-02_post-productLists-rejected.png, API-04_put-brandLists-rejected.png, API-06_search-product-no-parameter.png, API-08_login-no-email.png, API-09_delete-login-rejected.png, API-10_login-invalid-pw-rejected.png, API-11_create_new_userAccount.png, API-16_get-user-detail-after-delete.png,API-17_post-login-credentials-in-url.png, API-18_get-login-credentials-in-url.png
- **Note:** The official API list documents only the responseCode inside the body, and the behavior is consistent on every endpoint. This suggests a deliberate design choice, but it still deviates from the HTTP standard.
- **Status:** To be discussed (likely by design)

## OBS-10: Brands List API returns duplicate brands
- **Endpoint:** GET https://automationexercise.com/api/brandsList
- **Tool:** Postman
- **What I did:** Sent a GET request and compared the response with the Brands sidebar on the website's Products page.
- **What happened:** The response contains 34 items but only 8 different brands. Brands are repeated; for example, "Polo" appears 6 times. The number of entries for each brand matches the number of products of that brand in the Products List API (e.g., 6 Polo products).
- **What I expected:** Each brand is listed once, matching the 8 brands shown on the website.
- **Type:** API / Data consistency
- **Related test case:** TC-API-03
- **Reproducible:** Yes (2 of 2 attempts)
- **Status:** To be reported in Phase 7 (Bug Reporting)

## OBS-11: User details API returns personal information without authentication
- **Endpoint:** GET https://automationexercise.com/api/getUserDetailByEmail
- **Tool:** Postman
- **What I did:** Sent a GET request with only the email parameter of my own test account (no password, not logged in).
- **What happened:** The response returned the account's personal details: name, email, title, birth_day, birth_month, birth_year, first_name, last_name, company, address1, address2, country, state, city, zipcode. The password was not returned.
- **What I expected:** The API requires authentication (the user's password or a login session) before returning personal details, or returns only the details of the logged-in user.
- **Impact:** Anyone who knows a customer's email address can retrieve their personal information, including their home address and date of birth.
- **Type:** Security / Privacy
- **Related test case:** TC-API-14
- **Reproducible:** Yes (3 of 3 attempts)
- **Status:** To be reported in Phase 7 (Bug Reporting)
- **Note:** Tested only with my own test account.