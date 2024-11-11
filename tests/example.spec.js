// @ts-check
const { test, expect } = require('@playwright/test');

test('UI controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signInButton = page.locator("#signInBtn");
  const roleDropdown = page.locator("select.form-control");

  await roleDropdown.selectOption("consult");
  await page.pause();
});
