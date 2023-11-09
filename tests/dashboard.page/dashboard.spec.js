// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify Login page elements', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/dashboard');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SB Dashboard/);

  //Expect Header to be visible
  await expect(page.getByRole('heading', { name: 'Welcome, please sign in' })).toBeVisible();

  // Check if the username label, input, password label, password input, and login button elements exist
  const usernameLabel = await page.$('form label:has-text("Username")');
  const usernameInput = await page.$('form input[type="text"]');
  const passwordLabel = await page.$('form label:has-text("Password")');
  const passwordInput = await page.$('form input[type="password"]');
  const loginButton = await page.$('form button[type="submit"]');

  // Assert that the elements are present
  expect(usernameLabel).toBeTruthy();
  expect(usernameInput).toBeTruthy();
  expect(passwordLabel).toBeTruthy();
  expect(passwordInput).toBeTruthy();
  expect(loginButton).toBeTruthy();

  // Attach screenshot to HTML report
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});

test('Verify user can log in', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/dashboard');

  const usernameInput = await page.$('form input[type="text"]');
  const passwordInput = await page.$('form input[type="password"]');
  const loginButton = await page.$('form button[type="submit"]');

  // Enter values into the username and password inputs
  const usernameValue = 'Test';
  const passwordValue = 'Test123';

  await usernameInput?.fill(usernameValue);
  await passwordInput?.fill(passwordValue);

  // Submit the form
  await loginButton?.click();

  await expect(page.getByRole('heading', { name: 'CI/CD Dashboard' })).toBeVisible();

  // Attach screenshot to HTML report
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});