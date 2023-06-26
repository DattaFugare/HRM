const { test, expect } = require('@playwright/test');

test.only('orghrm-homepage test ', async ({ page }) => {
    await page.goto('https://viratqa-trials77.orangehrmlive.com/auth/login');
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('98@AHreEbE')
    await page.getByRole('button', { name: 'Login' }).click()

  //  await page.pause()
    // Expect a title "to contain" a substring.
   // await expect(page).toHaveTitle("Employee Management");
    await page.getByRole('link', { name: 'HR Administration' }).click();
    await page.locator('a').filter({ hasText: 'add' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('QA');
    await page.getByLabel('Username*').click();
    await page.getByLabel('Username*').fill('virat kohli');
    
    await page.getByPlaceholder('Enter Password').click();
    await page.getByPlaceholder('Enter Password').fill('virat1818');
    await page.getByPlaceholder('Confirm Password').click();
    await page.getByPlaceholder('Confirm Password').fill('virat1818');
    await page.getByRole('button', { name: 'Save' }).click();





    // ---------------------

})

