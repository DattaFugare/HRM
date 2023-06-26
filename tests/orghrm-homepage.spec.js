
const { test, expect } = require('@playwright/test');

test('orghrm-homepage test ', async ({ page }) => {
    await page.goto('https://viratqa-trials77.orangehrmlive.com/auth/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("OrangeHRM");
});

test('check homepage elements properties', async ({ page })=>{
   

   
        await page.goto('https://viratqa-trials77.orangehrmlive.com/auth/login');
        await expect(page.locator('img').first()).toBeVisible()
        await expect(page.locator('.orangehrm-logo > img')).toBeVisible()
        await expect(page.getByText('Login').first()).toBeVisible()
        await expect(page.getByPlaceholder('Username')).toBeVisible()
        await expect(page.getByPlaceholder('Username')).toBeEnabled()
        await page.getByPlaceholder('Username').fill('Admin')

      

        await expect(page.getByPlaceholder('Password')).toBeVisible()
        await expect(page.getByPlaceholder('Password')).toBeEnabled()
        await  page.getByPlaceholder('Password').fill('98@AHreEbE')

        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
        await page.getByRole('button', { name: 'Login' }).click()

    });
    test('Login Test', async ({ page })=>{
   

   
        await page.goto('https://viratqa-trials77.orangehrmlive.com/auth/login');
        await page.getByPlaceholder('Username').fill('Admin')
        await  page.getByPlaceholder('Password').fill('98@AHreEbE')
        await page.getByRole('button', { name: 'Login' }).click()

        

    });


    

