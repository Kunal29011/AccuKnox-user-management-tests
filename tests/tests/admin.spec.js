const { test, expect } = require('@playwright/test');

test('Login to OrangeHRM', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.locator('input[name="username"]').fill('Admin');

await page.locator('input[name="password"]').fill('admin123');

await page.locator('button[type="submit"]').click();

// Wait for dashboard heading
await expect(page.locator('h6')).toHaveText('Dashboard');

});
