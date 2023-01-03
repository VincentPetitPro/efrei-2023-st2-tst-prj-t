import { test, expect } from '@playwright/test';
import {PlaywrightDevPage} from "../page-models/playwright-dev-page";

test('homepage has title and links', async ({ page }) => {
  const mainPage = new PlaywrightDevPage(page);
  await mainPage.goto();
  await mainPage.getStarted();
});
