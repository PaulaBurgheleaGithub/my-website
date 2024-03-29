import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:2727/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Home/);
});


test('view CV button', async ({ page }) => {
	await page.goto('http://localhost:2727/');
	// Click the get started link.
	await page.getByRole('button', { name: 'View CV' }).click();
	// Expects the URL to contain intro.
	await expect(page).toHaveURL(/#main/);
});
