import { test, expect, Locator } from '@playwright/test';
import {PlaywrightMainPage} from "../page-models/playwright-main-page";
import {PlaywrightTeamsPage} from "../page-models/playwright-teams-page";
import {PlaywrightTeamPage} from "../page-models/playwright-team-page";
import {PlaywrightEmployeesPage} from "../page-models/playwright-employees-page";
import {PlaywrightEmployeePage} from "../page-models/edit-employee-page";
import {AddToTeamPage} from "../page-models/add-to-team-page";

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://t.hr.dmerej.info');
  });
  test('a player added to two teams should be in both teams', async ({ page }) => {
    const playwrightMainPage = new PlaywrightMainPage(page);

    // add player 'ducki' to team 't'
    await playwrightMainPage.listEmployeesLink.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/employees');
    const playwrightEmployeesPage = new PlaywrightEmployeesPage(page);
    await playwrightEmployeesPage.editFirstEmployee.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/employee/1');
    const playwrightEmployeePage = new PlaywrightEmployeePage(page);
    await playwrightEmployeePage.addToTeamLink.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/employee/1/add_to_team');
    const addToTeamPage = new AddToTeamPage(page);
    await addToTeamPage.teamSelector.selectOption('t team');
    await addToTeamPage.addButton.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/employee/1');

    // add the same player to team 'test'
    await playwrightEmployeePage.addToTeamLink.click();
    await addToTeamPage.teamSelector.selectOption('test team');
    await addToTeamPage.addButton.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/employee/1');

    // check if player 'ducki' is in team t
    await playwrightEmployeePage.homePageLink.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info');
    await playwrightMainPage.listTeamsLink.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/teams');
    const playwrightTeamsPage = new PlaywrightTeamsPage(page);
    await playwrightTeamsPage.firstTeamLink.click();
    await expect(page).toHaveURL('https://t.hr.dmerej.info/team/1/members');
    const playwrightTeamPage1 = new PlaywrightTeamPage(page);
    expect( await playwrightTeamPage1.page.locator('body').locator('ul').locator('li').count()).toEqual(1);

    // check if player 'ducki' is in team 'test'
    await playwrightTeamPage1.homePageLink.click();
    await playwrightMainPage.listTeamsLink.click();
    await playwrightTeamsPage.secondTeamLink.click();
    const playwrightTeamPage2 = new PlaywrightTeamPage(page);
    expect( await playwrightTeamPage2.page.locator('body').locator('ul').locator('li').count()).toEqual(2);
  });

})
