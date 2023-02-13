import { test, expect, Locator } from '@playwright/test';
import {PlaywrightEmployeePage} from "../page-models/edit-employee-page";

test.describe('employee', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://t.hr.dmerej.info/employee/1');
  });

  test('Check readonly inputs', async ({ page }) => {
    const playwrightEmployeePage = new PlaywrightEmployeePage(page)
    await playwrightEmployeePage.contractUpdateLink.click()
    
    const readonlyInputs = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input'));
      return inputs.filter(input => input.hasAttribute('readonly'));
    });
    if (readonlyInputs.length === 0) {
      console.warn("You do not have readonly inputs on your page");
    }
  });

  test('Check force readonly input', async ({ page }) => {
    const playwrightEmployeePage = new PlaywrightEmployeePage(page)
    await playwrightEmployeePage.contractUpdateLink.click()    

    await page.evaluate(() => {
      const input = document.querySelector('input[name="hiring_date"]');
      if (input) {
        input.removeAttribute('readonly');
      } else {
        throw new Error("No readonly used.");
      }
    });

    await page.getByPlaceholder('Hiring date').fill('2020-02-02');
    const inputValue = await page.getByPlaceholder('Hiring date').inputValue();
    expect(inputValue).not.toBe('2020-02-02');
  });

  test('Check user with email already taken', async ({ page }) => {
    await page.goto('https://t.hr.dmerej.info/add_employee');

    await page.getByPlaceholder('Name').fill('test');
    
    await page.getByPlaceholder('Email').fill('test@test.com');
    
    await page.locator('#id_address_line1').fill('test');
    
    await page.getByPlaceholder('City').fill('test');
    
    await page.getByPlaceholder('Zip code').fill('75000');

    await page.getByPlaceholder('Hiring date').fill('2023-02-17');

    await page.getByPlaceholder('Job title').fill('test');

    await page.getByRole('button', { name: 'Add' }).click();

    expect(page).toHaveURL('https://t.hr.dmerej.info/add_employee');
  });

  test('Check for wrong zipcode', async ({ page }) => {
    await page.goto('https://t.hr.dmerej.info/add_employee');

    await page.getByPlaceholder('Name').fill('test');
    
    await page.getByPlaceholder('Email').fill('test-zipcode@test.com');
    
    await page.locator('#id_address_line1').fill('test');
    
    await page.getByPlaceholder('City').fill('test');
    
    await page.getByPlaceholder('Zip code').fill('1');

    await page.getByPlaceholder('Hiring date').fill('2023-02-17');

    await page.getByPlaceholder('Job title').fill('test');

    await page.getByRole('button', { name: 'Add' }).click();

    expect(page).toHaveURL('https://t.hr.dmerej.info/add_employee');
  });

  // !!!!! BE CAREFULL AS THIS TEST CHANGES YOUR DATA IN THE DB
  // !!!!! THIS COULD ALTER YOUR TEST ENV

  // test('Check submit force readonly input', async ({ page }) => {
  //   const playwrightEmployeePage = new PlaywrightEmployeePage(page)
  //   await playwrightEmployeePage.contractUpdateLink.click()    

  //   await page.evaluate(() => {
  //     const input = document.querySelector('input[name="hiring_date"]');
  //     if (input) {
  //       input.removeAttribute('readonly');
  //     } else {
  //       throw new Error("No readonly used.");
  //     }
  //   });

  //   await page.getByPlaceholder('Hiring date').fill('2020-02-02');
  //   await page.getByRole('button', { name: 'Update' }).click();
  //   expect(page).not.toHaveURL('https://t.hr.dmerej.info/employee/1');
  // });
})
