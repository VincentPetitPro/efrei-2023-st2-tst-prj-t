import { expect, Locator, Page } from '@playwright/test';

export class PlaywrightTeamsPage {
    readonly page: Page;
    readonly homePageLink: Locator;
    readonly title: Locator;
    readonly firstTeamLink: Locator;
    readonly secondTeamLink: Locator;
    readonly deleteFirstTeam: Locator;
    readonly deleteSecondTeam: Locator;
    constructor(page: Page) {
        this.page = page;
        this.homePageLink = page.locator('body').locator('nav').locator('a', { hasText: 'Home' });
        this.title = page.locator('body').locator('h1', { hasText: 'Teams' });
        this.firstTeamLink = page.locator('body').locator('table').locator('tbody').locator('tr').first().locator('td').nth(1).locator('a', { hasText: 'View members' });
        this.secondTeamLink = page.locator('body').locator('table').locator('tbody').locator('tr').first().locator('td').nth(2).locator('a', { hasText: 'Delete' });
        this.deleteFirstTeam = page.locator('body').locator('table').locator('tbody').locator('tr').nth(1).locator('td').nth(1).locator('a', { hasText: 'View members' });
        this.deleteSecondTeam = page.locator('body').locator('table').locator('tbody').locator('tr').nth(1).locator('td').nth(2).locator('a', { hasText: 'Delete' });
    }

    async gotoMain() {
        await this.page.goto('https://t.hr.dmerej.info');
    }

    async getStarted() {
        await this.homePageLink.first().click();
        await expect(this.deleteFirstTeam).toBeVisible();
        await expect(this.deleteSecondTeam).toBeVisible();
    }

    async issue3() {
        await this.firstTeamLink.click();
    }
    async pageObjectModel() {
        await this.getStarted();
    }
}