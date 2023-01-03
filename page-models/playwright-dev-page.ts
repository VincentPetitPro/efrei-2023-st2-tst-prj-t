import { expect, Locator, Page } from '@playwright/test';

export class PlaywrightDevPage {
    readonly page: Page;
    readonly homePageLink: Locator;
    readonly titleHeader: Locator;
    readonly employeesHeader: Locator;
    readonly listEmployeesLink: Locator;
    readonly addEmployeeLink: Locator;
    readonly teamsHeader: Locator;
    readonly listTeamsLink: Locator;
    readonly createNewTeamLink: Locator;
    readonly dangerZone: Locator;
    readonly resetDatabase: Locator;
    readonly footer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageLink = page.locator('nav').locator('a', { hasText: 'Home' });
        this.titleHeader = page.locator('h1', { hasText: ' HR DB ' });
        this.employeesHeader = page.locator('h2', { hasText: ' Employees ' });
        this.listEmployeesLink = page.locator('ul').locator('li').locator('a', { hasText: 'List Employees' });
        this.addEmployeeLink = page.locator('ul').locator('li').locator('a', { hasText: 'Add new employee' });
        this.teamsHeader = page.locator('h2', { hasText: 'Teams' });
        this.listTeamsLink = page.locator('ul').locator('li').locator('a', { hasText: 'List teams' });
        this.createNewTeamLink = page.locator('ul').locator('li').locator('a', { hasText: 'Create new team' });
        this.dangerZone = page.locator('h2', { hasText: 'Danger zone' });
        this.resetDatabase = page.locator('ul').locator('li').locator('a', { hasText: 'Reset database' });
        this.footer = page.locator('footer');
    }

    async goto() {
        await this.page.goto('https://t.hr.dmerej.info');
    }

    async getStarted() {
        await this.homePageLink.first().click();
        await expect(this.titleHeader).toBeVisible();
        await expect(this.employeesHeader).toBeVisible();
        await expect(this.teamsHeader).toBeVisible();
        await expect(this.dangerZone).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.addEmployeeLink.click();
    }
}