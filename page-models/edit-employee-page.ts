import {Locator, Page} from "@playwright/test";

export class PlaywrightEmployeePage {
    readonly page: Page;
    readonly homePageLink: Locator;
    readonly basicUpdateLink: Locator;
    readonly addressUpdateLink: Locator;
    readonly contractUpdateLink: Locator;
    readonly promoteToManagerLink: Locator;
    readonly addToTeamLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageLink = page.locator('body').locator('nav').locator('a', { hasText: 'Home' });
        this.basicUpdateLink = page.locator('body').locator('ul').locator('li').locator('a', { hasText: 'Update basic info' });
        this.addressUpdateLink = page.locator('body').locator('ul').locator('li').locator('a', { hasText: ' Update address ' });
        this.contractUpdateLink = page.locator('body').locator('ul').locator('li').locator('a', { hasText: 'Update contract ' });
        this.promoteToManagerLink = page.locator('body').locator('ul').locator('li').locator('a', { hasText: 'Promote as manager' });
        this.addToTeamLink = page.locator('body').locator('ul').locator('li').locator('a', { hasText: 'Add to team' });
    }
}