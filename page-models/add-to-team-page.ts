import {Locator, Page} from "@playwright/test";

export class AddToTeamPage {
    readonly page: Page;
    readonly homePageLink: Locator;
    readonly teamSelector: Locator;
    readonly addButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageLink = page.locator('body').locator('nav').locator('a', { hasText: 'Home' });
        this.teamSelector = page.locator('body').locator('form').locator('div').locator('select');
        this.addButton = page.locator('body').locator('form').locator('button', { hasText: 'Add' });
    }
}