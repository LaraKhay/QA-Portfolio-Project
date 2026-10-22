import { test, expect } from "@playwright/test";

test.describe('Login and Logout', () => {

    //Run before every test in this group
    test.beforeEach(async ({ page }) => {

        // Block ad requests: ads are not part of what we test, and they slow the site down
        await page.route(/googlesyndication|doubleclick|googleads|adservice/, (route) => route.abort());

        // Precondition: the Home page is open
        await page.goto('/', { waitUntil: 'domcontentloaded' });

        // Step 1: Click Signup / Login in the header
        await page.getByRole('link', { name: 'Signup / Login' }).click();
    });

    test('TC-LOG-02: Login with a valid email and password', async ({ page }) => {

        // Step 2: Enter the email in the Email Address field
        await page.locator('[data-qa="login-email"]').fill('lara.qa.tc01@mailinator.com');

        // Step 3: Enter the password in the Password field
        await page.locator('[data-qa="login-password"]').fill('Test1234');

        // Step 4: Click Login
        await page.locator('[data-qa="login-button"]').click();

        // Expected result: the header shows "Logged in as Lara QA"
        await expect(page.getByText('Logged in as Lara QA')).toBeVisible();
    });

    test('TC-LOG-05: Login fails with a wrong password', async ({ page }) => {

        // Step 2: Enter the email in the Email Address field
        await page.locator('[data-qa="login-email"]').fill('lara.qa.tc01@mailinator.com');

        // Step 3: Enter the password in the Password field
        await page.locator('[data-qa="login-password"]').fill('Wrong9999');

        // Step 4: Click Login
        await page.locator('[data-qa="login-button"]').click();

        // Expected result 1: the error message is displayed
        await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

        // Expected result 2: the user is not logged in
        await expect(page.getByText('Logged in as')).not.toBeVisible();
    });

    test('TC-LOG-06: Login fails with an unregistered email', async ({ page }) => {
        // Step 2: Enter the email in Email Address
        await page.locator('[data-qa="login-email"]').fill('lara.qa.notregistered01@mailinator.com');

        // Step 3: Enter the password in Password field
        await page.locator('[data-qa="login-password"]').fill('Test1234');

        // Step 4: Click Login
        await page.locator('[data-qa="login-button"]').click();

        // Expected result 1: the error message is displayed
        await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

        // Expected result 2: the user is not logged in
        await expect(page.getByText('Logged in as')).not.toBeVisible();
    });

    test('TC-LOG-04: Logout returns the user to the login form', async ({ page }) => {
        // Precondition: the home page is open and the header is displayed as "Logged in as Lara QA"
        // Uses its own account (ACC-02) so it is not affected by other tests using ACC-01,
        // such as TC-LOG-05's wrong-password attempt.
        await page.locator('[data-qa="login-email"]').fill('lara.qa.tc01.a@mailinator.com');
        await page.locator('[data-qa="login-password"]').fill('Test1234');
        await page.locator('[data-qa="login-button"]').click();
        await expect(page.getByText('Logged in as Lara QA')).toBeVisible();

        // Step 1: Click Logout
        await page.getByRole('link', { name: 'Logout' }).click();

        // Expected result 1: the login form is displayed
        await expect(page.getByText('Login to your account')).toBeVisible();

        // Expected result 2: the user is not logged in
        await expect(page.getByText('Logged in as')).not.toBeVisible();
    });
});



