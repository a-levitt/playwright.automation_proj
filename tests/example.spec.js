// @ts-check
const { test, expect } = require('@playwright/test');

test('UI controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signInButton = page.locator("#signInBtn");
  const roleDropdown = page.locator("select.form-control");
  const isAdmin = page.locator("span.checkmark").nth(1);
  const termsCheckbox = page.locator("#terms");

  await roleDropdown.selectOption("consult");

  await isAdmin.click();
  await page.locator("#okayBtn").click();
  await expect(isAdmin).toBeChecked();
  console.log(await isAdmin.isChecked());

  await termsCheckbox.click();
  await expect(termsCheckbox).toBeChecked();
  console.log(await termsCheckbox.isChecked());
  await termsCheckbox.uncheck();
  expect(await termsCheckbox.isChecked()).toBeFalsy();
  await page.pause();
});
