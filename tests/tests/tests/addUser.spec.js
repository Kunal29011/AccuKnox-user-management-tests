const { test, expect } = require('@playwright/test');

test('Add New User', async ({ page }) => {

// Open Login Page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// Login
await page.locator('input[name="username"]').fill('Admin');

await page.locator('input[name="password"]').fill('admin123');

await page.locator('button[type="submit"]').click();

// Open Admin Module
await page.getByRole('link', { name: 'Admin' }).click();

// Click Add Button
await page.getByRole('button', { name: 'Add' }).click();

// Select User Role
await page.locator('.oxd-select-text').first().click();

await page.locator('.oxd-select-dropdown').getByText('ESS').click();

// Employee Name
const employeeInput = page.locator('input[placeholder="Type for hints..."]');

await employeeInput.fill('a');

await page.waitForTimeout(3000);

await page.keyboard.press('ArrowDown');

await page.keyboard.press('Enter');

// Select Status
await page.locator('.oxd-select-text').nth(1).click();

await page.locator('.oxd-select-dropdown').getByText('Enabled').click();

// Username
await page.locator('.oxd-input').nth(1).fill('testuser01');

// Password
await page.locator('input[type="password"]').first().fill('Test@12345');

// Confirm Password
await page.locator('input[type="password"]').nth(1).fill('Test@12345');

// Save User
await page.getByRole('button', { name: 'Save' }).click();

// Success Message
await expect(page.getByText('Successfully Saved')).toBeVisible();


});

