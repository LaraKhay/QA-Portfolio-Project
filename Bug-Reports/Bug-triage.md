# Bug Triage

Decision on which observations are reported as bugs.

| OBS ID | Finding | Decision | Reason | Bug ID |
|---|---|---|---|---|
| OBS-01 | Signup accepts an email without a domain extension | Report | Accounts can be created with invalid email addresses that cannot receive emails; confirmed as a defect by PO (RQ-07). |  |
| OBS-02 | Grammar error in duplicate email message on Signup | Report | “Email Address already exist!” is shown to every user who signs up with an existing email; looks unprofessional but does not block anything. |  |
| OBS-03 | Invoice shows total purchase amount as 0 for orders containing Blue Top | Not report | Original evidence kept in OBS-03; status: Cannot reproduce. | N/A |
| OBS-04 | Required fields on the Payment page are not marked with * | Report | Missing * markers mean users don’t know which fields are required until they get an error. |  |
| OBS-05 | Signup accepts passwords that break the password rules | Report | Violates the confirmed password rule (RQ-04); TC-REG-14b and 15a failed. Rule is from simulated PO, so lower priority. |  |
| OBS-06 | Product details page accepts a quantity greater than 10 | Report | Violates the confirmed quantity rule (RQ-03); TC-CART-12a failed. Rule is from simulated PO, so low priority. |  |
| OBS-07 | Back button after logout shows the previous logged-in page | Report | On shared computers, the next person can see the previous user’s page after logout. |  |
| OBS-08 | All API responses use Content-Type "text/html" instead of "application/json" | Report | Clients may treat JSON responses as web pages; if rendered by a browser, this increases the risk of cross-site scripting (XSS). Affects all endpoints. |  |
| OBS-09 | All API responses return HTTP 200 OK, including errors and account creation | Discuss | Likely by design (the API list documents only the body code); raise with the team as a discussion point. | N/A |
| OBS-10 | Brands List API returns duplicate brands | Report | API returns 34 entries for 8 brands, inconsistent with the website; apps using the API would show duplicate brands. |  |
| OBS-11 | User details API returns personal information without authentication | Report | Anyone who knows a customer’s email address can get their personal information, including name, address, and date of birth, without logging in. |  |
| OBS-12 | Product details page accepts a quantity of 0 or less | Report | Orders can be placed for Rs. 0, and negative quantities produce negative totals; invalid on any shop and affects checkout and money. | BUG-001 |
| OBS-13 | Live site shows a Django debug error page that reveals internal information | Report | The live site reveals the framework, debug mode, and internal URLs (including admin/), helping attackers plan attacks. | BUG-002 |

