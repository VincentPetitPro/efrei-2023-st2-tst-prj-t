import { expect, Locator, Page } from '@playwright/test';

export class PlaywrightTeamPage {
    readonly page: Page;
    readonly homePageLink: Locator;
    readonly title: Locator;
    readonly ducki: Locator;
    readonly vincent: Locator;
    constructor(page: Page) {
        this.page = page;
        this.homePageLink = page.locator('body').locator('nav').locator('a', { hasText: 'Home' });
        this.title = page.locator('body').locator('h', { hasText: 'Team Members' });
        this.ducki = page.locator('body').locator('ul').locator('li').first();
        this.vincent = page.locator('body').locator('ul').locator('li').nth(1);
    }

    async gotoMain() {
        await this.page.goto('https://t.hr.dmerej.info');
    }
}