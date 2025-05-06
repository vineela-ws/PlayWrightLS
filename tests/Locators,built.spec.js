import { test, expect } from '@playwright/test';

test('Locators-BuiltIn', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() -to locate an element, Usually image, By it's test alternative
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button',{type:'submit'}).click();

    //page.getByText() to locate by text content.
    const name = await page.locator("//p[@class = 'oxd-userdropdown-name']").textContent();

    await page.getByText(name).toBeVisible();

})