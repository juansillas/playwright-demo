import { test, expect } from '@playwright/test';

test('Mi primer test de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
