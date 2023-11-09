// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SB Dashboard/);

  // Attach screenshot to HTML report
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});
