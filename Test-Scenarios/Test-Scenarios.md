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

## Registration
| ID | Scenario | Type | Related Requirement |
|---|---|---|---|
| TS-REG-01 | Verify that the system displays the "Enter Account Information" page when the user enters a Name and an unregistered email and clicks Signup. | Positive | FR-REG-03 |
| TS-REG-02 | Verify that the user cannot edit the Email field on the "Enter Account Information" page. | Positive | FR-REG-06 |
| TS-REG-03 | Verify that the user can edit the Name field on the "Enter Account Information" page. | Positive | FR-REG-08 |
| TS-REG-04 | Verify that the account is created when the user fills in all required fields on the "Enter Account Information" page. | Positive | FR-REG-11 |
| TS-REG-05 | Verify that the account is created when the user enters a password of 8–20 characters with at least one letter and one number, and all other required fields are filled in. | Positive | FR-REG-17 |
| TS-REG-06 | Verify that the system displays the Home page with "Logged in as [username]" in the header when the user clicks Continue on the "Account Created!" page. | Positive | FR-REG-12 |
| TS-REG-07 | Verify that registration fails when the user signs up with an email without a domain extension (e.g., test@gmail). | Negative | FR-REG-01 |
| TS-REG-08 | Verify that registration fails when the user signs up with an email that is already registered. | Negative | FR-REG-02 |
| TS-REG-09 | Verify that the user cannot continue signup when the Name field is left empty on the Signup form. | Validation | FR-REG-09 |
| TS-REG-10 | Verify that the user cannot continue signup when the Email Address field is left empty on the Signup form. | Validation | FR-REG-09 |
| TS-REG-11 | Verify that the account is not created when the user leaves any required field empty on the "Enter Account Information" page. | Validation | FR-REG-10 |
| TS-REG-12 | Verify that the account is not created when the user enters a password without any number. | Validation | FR-REG-15 |
| TS-REG-13 | Verify that the account is not created when the user enters a password without any letter. | Validation | FR-REG-16 |
| TS-REG-14 | Verify that the account is not created when the user enters a password shorter than 8 characters. | Edge case | FR-REG-13 |
| TS-REG-15 | Verify that the account is not created when the user enters a password longer than 20 characters. | Edge case | FR-REG-14 |
| TS-REG-16 | Verify that the user can continue signup after correcting an already registered email. | Error handling | None (new scenario) |
| TS-REG-17 | Verify that the password entered in the Password field is masked. | Security | FR-REG-04 |
| TS-REG-18 | Verify that the system pre-fills the Email field with the email entered on the Signup form. | Usability | FR-REG-05 |
| TS-REG-19 | Verify that the system pre-fills the Name field with the name entered on the Signup form. | Usability | FR-REG-07 |
| TS-REG-20 | Verify that the system marks the required fields with *. | Usability | FR-REG-09 |