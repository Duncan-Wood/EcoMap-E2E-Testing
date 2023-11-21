// @ts-check 

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecomapmetamap.com/');
  await page.locator('div:nth-child(2) > div:nth-child(3) > .clickable-element').first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByText('Post Something').click();
  await page.getByText('My Content').click();
  await page.getByText('Latest Posts').click();
  await page.getByText('My Connections').click();
  await page.getByText('Explore Programs').click();
  await page.getByText('Talent Portal').click();
  await page.getByRole('link', { name: 'My Saved Items' }).click();
  await page.getByText('About').first().click();
  await page.locator('button').filter({ hasText: '' }).click();
  await page.getByText('What are Lists?').click();
  await page.getByText('Collections of items put').click();
  await page.getByRole('link', { name: 'Denise\'s Submap' }).click();
  await page.getByRole('button', { name: 'Learn More' }).click();
});