// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/dashboard');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SB Dashboard/);

  //Expect Header to be visible
  await expect(page.getByRole('heading', { name: 'Welcome, please sign in' })).toBeVisible();
  
  // Attach screenshot to HTML report
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});
