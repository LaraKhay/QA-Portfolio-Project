# Test Scenarios

## Login and Logout
| ID | Scenario | Type | Related Requirement |
|---|---|---|---|
| TS-LOG-01 | Verify that the system displays a login form with Email Address and Password fields and a Login button. | Positive | FR-LOG-01 |
| TS-LOG-02 | Verify that a registered user can log in with a valid email and password. | Positive | FR-LOG-04, FR-LOG-07 |
| TS-LOG-03 | Verify that the Logout button is displayed in the header after a user logs in. | Positive | FR-LOG-08 |
| TS-LOG-04 | Verify that a registered user can log out by clicking the Logout button in the header. | Positive | FR-LOG-09, FR-LOG-10 |
| TS-LOG-05 | Verify that login fails with a wrong password. | Negative | FR-LOG-06 |
| TS-LOG-06 | Verify that login fails with an unregistered email. | Negative | FR-LOG-05 |
| TS-LOG-07 | Verify login with the Email Address field empty. | Validation | FR-LOG-02 |
| TS-LOG-08 | Verify login with the Password field empty. | Validation | FR-LOG-03 |
| TS-LOG-09 | Verify login behavior when the email is entered in capital letters. | Edge case | FR-LOG-12 |
| TS-LOG-10 | Verify login behavior when the email is entered with extra spaces before or after it. | Edge case | FR-LOG-13 |
| TS-LOG-11 | Verify that a user can log in with a valid email and password after a failed login. | Error handling | None (new scenario) |
| TS-LOG-12 | Verify that the Password field is masked when the user enters a password. | Security | None (new scenario) |
| TS-LOG-13 | Verify that pressing the browser Back button after logout does not show the logged-in account. | Security | None (new scenario) |
| TS-LOG-14 | Verify that a registered user can log in by pressing Enter instead of clicking the Login button. | Usability | None (new scenario) |