import { test } from '@playwright/test';

test('fill dummy form', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/');

  const form = page.locator('.userform');

  const email = form.getByPlaceholder('Enter email');

  await email.click(); // important
  await email.fill('shiva@test.com');

  await form.getByPlaceholder('Enter Password').fill('Test@123');
  await form.getByPlaceholder('Enter your company').first().fill('TCS');
  await form.getByPlaceholder('Enter your mobile number').first().fill('9876543210');

  await form.locator('input[type="text"]').fill('India');

  await form.getByRole('button', { name: 'Submit' }).click();
});