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

  await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class', 'blinkingText');
  // await page.pause();
});

test.only('Child windows handle', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const linkToChildPage = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    linkToChildPage.click()
  ])

  const docReqPage = newPage.locator(".red");
  const page2Text = await docReqPage.textContent();
  const email2ndPart = page2Text.split("@");
  const linkFromMail = email2ndPart[1].split(" ")[0];
  const gotUsername = linkFromMail.split(".")[0];
  console.log(linkFromMail);

  const userName = page.locator("#username");
  await userName.fill(gotUsername);
  await page.pause();
});
