import { test, expect, Locator } from '@playwright/test';
import {PlaywrightEmployeePage} from "../page-models/edit-employee-page";

test.describe('teams', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://t.hr.dmerej.info/teams');
  });

  test('Check for user deletion after team deletion', async ({ page }) => {
    await page.getByRole('row', { name: 'test View members Delete' }).getByRole('link', { name: 'Delete' }).click();
    await page.getByRole('link', { name: 'Proceed' }).click();

    await page.goto('https://t.hr.dmerej.info/employees');
    
    const testUser = await page.getByRole('cell', { name: 'test' })
    
    expect(testUser).not.toBe(null);
  });
})
