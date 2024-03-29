import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:2727/projects');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Projects/);
});
