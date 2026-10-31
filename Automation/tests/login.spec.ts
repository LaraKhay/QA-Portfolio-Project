import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { testData } from "../test-data/testData";

test.describe('Login and Logout', () => {
    let loginPage: LoginPage;
    // Run before every test in this group
    test.beforeEach(async ({ page }) => {
        // Block ad requests: ads are not part of what we test, and they slow the site down
        await page.route(/googlesyndication|doubleclick|googleads|adservice/, (route) => route.abort());

        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('TC-LOG-02: Login with a valid email and password', async ({ page }) => {
        const user = testData.accounts.acc01;
        await loginPage.login(user.email, user.password);

        // Expected result: the header shows "Logged in as Lara QA"
        await expect(page.getByText(`Logged in as ${user.name}`)).toBeVisible();
    });

    test('TC-LOG-05: Login fails with a wrong password', async ({ page }) => {
        await loginPage.login(testData.accounts.acc01.email, testData.invalid.wrongPassword);

        // Expected result 1: the error message is displayed
        await expect(loginPage.errorMessage).toBeVisible();

        // Expected result 2: the user is not logged in
        await expect(page.getByText('Logged in as')).not.toBeVisible();
    });

    test('TC-LOG-06: Login fails with an unregistered email', async ({ page }) => {
        await loginPage.login(testData.invalid.unregisteredEmail, testData.invalid.wrongPassword);
        // Expected result 1: the error message is displayed
        await expect(loginPage.errorMessage).toBeVisible();

        // Expected result 2: the user is not logged in
        await expect(page.getByText('Logged in as')).not.toBeVisible();
    });

    test('TC-LOG-04: Logout returns the user to the login form', async ({ page }) => {
        // Precondition: the user is logged in with ACC-02
        // Uses its own account (ACC-02) so it is not affected by other tests using ACC-01,
        // such as TC-LOG-05's wrong-password attempt.
        const user = testData.accounts.acc02;
        await loginPage.login(user.email, user.password);
        await expect(page.getByText(`Logged in as ${user.name}`)).toBeVisible();

        // Step 1: Click Logout
        await page.getByRole('link', { name: 'Logout' }).click();

        // Expected result 1: the login form is displayed
        await expect(loginPage.loginHeading).toBeVisible();

        // Expected result 2: the user is not logged in
        await expect(page.getByText('Logged in as')).not.toBeVisible();
    });
});



