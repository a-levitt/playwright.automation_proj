// @ts-check
const { test, expect } = require('@playwright/test');

test('UI controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signInButton = page.locator("#signInBtn");
  const roleDropdown = page.locator("select.form-control");
  const isAdmin = page.locator("span.checkmark").nth(1);

  await roleDropdown.selectOption("consult");

  await isAdmin.click();
  await page.locator("#okayBtn").click();
  await expect(isAdmin).toBeChecked();
  console.log(await isAdmin.isChecked());
  await page.pause();
});
