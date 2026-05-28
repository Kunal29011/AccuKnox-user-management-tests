const { test } = require('@playwright/test');

test('Search Created User', async ({ page }) => {

test.setTimeout(60000);

// Open Login Page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// Login
await page.locator('input[name="username"]').fill('Admin');

await page.locator('input[name="password"]').fill('admin123');

await page.locator('button[type="submit"]').click();

// Open Admin Module
await page.getByRole('link', { name: 'Admin' }).click();

// Enter Username
await page.locator('.oxd-input').nth(1).fill('testuser01');

// Click Search
await page.getByRole('button', { name: 'Search' }).click();

// Wait for results
await page.waitForTimeout(5000);


});

