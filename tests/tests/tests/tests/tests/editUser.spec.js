const { test } = require('@playwright/test');

test('Edit User Details', async ({ page }) => {

test.setTimeout(60000);

// Open Login Page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// Login
await page.locator('input[name="username"]').fill('Admin');

await page.locator('input[name="password"]').fill('admin123');

await page.locator('button[type="submit"]').click();

// Open Admin Module
await page.getByRole('link', { name: 'Admin' }).click();

// Search User
await page.locator('.oxd-input').nth(1).fill('testuser01');

await page.getByRole('button', { name: 'Search' }).click();

// Wait for results
await page.waitForTimeout(3000);

// Click Edit Button
await page.locator('.oxd-icon-button').nth(1).click();

// Wait for edit page
await page.waitForTimeout(3000);

// Change Status
await page.locator('.oxd-select-text').nth(1).click();

await page.locator('.oxd-select-dropdown').getByText('Disabled').click();

// Wait before save
await page.waitForTimeout(2000);

// Click Save
await page.locator('button[type="submit"]').click();

// Final Wait
await page.waitForTimeout(3000);


});


