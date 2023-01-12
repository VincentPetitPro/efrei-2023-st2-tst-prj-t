import { expect, Locator, Page } from '@playwright/test';

export class PlaywrightEmployeesPage {
    readonly page: Page;
    readonly homePageLink: Locator;
    readonly title: Locator;
    readonly editFirstEmployee: Locator;
    readonly deleteFirstEmployee: Locator;
    readonly editSecondEmployee: Locator;
    readonly deleteSecondEmployee: Locator;
    readonly editThirdEmployee: Locator;
    readonly deleteThirdEmployee: Locator;
    constructor(page: Page) {
        this.page = page;
        this.homePageLink = page.locator('body').locator('nav').locator('a', { hasText: 'Home' });
        this.title = page.locator('body').locator('h1', { hasText: 'Employees (3)' });
        this.editFirstEmployee = page.locator('body').locator('table').locator('tbody').locator('tr').first().locator('td').locator('a', { hasText: 'Edit' });
        this.deleteFirstEmployee = page.locator('body').locator('table').locator('tbody').locator('tr').first().locator('td').locator('a', { hasText: 'Delete' });
        this.editSecondEmployee = page.locator('body').locator('table').locator('tbody').locator('tr').nth(1).locator('td').locator('a', { hasText: 'Edit' });
        this.deleteSecondEmployee = page.locator('body').locator('table').locator('tbody').locator('tr').nth(1).locator('td').locator('a', { hasText: 'Delete' });
        this.editThirdEmployee = page.locator('body').locator('table').locator('tbody').locator('tr').nth(2).locator('td').locator('a', { hasText: 'Edit' });
        this.deleteThirdEmployee = page.locator('body').locator('table').locator('tbody').locator('tr').nth(2).locator('td').locator('a', { hasText: 'Delete' });
    }

    async gotoMain() {
        await this.page.goto('https://t.hr.dmerej.info');
    }

    async getStarted() {
        await this.homePageLink.first().click();
        await expect(this.editFirstEmployee).toBeVisible();
        await expect(this.deleteFirstEmployee).toBeVisible();
        await expect(this.editSecondEmployee).toBeVisible();
        await expect(this.deleteSecondEmployee).toBeVisible();
        await expect(this.editThirdEmployee).toBeVisible();
        await expect(this.deleteThirdEmployee).toBeVisible();
    }

    async issue3() {
        await this.editFirstEmployee.click();
    }
    async pageObjectModel() {
        await this.getStarted();
    }
}