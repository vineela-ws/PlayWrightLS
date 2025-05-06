import { test, expect } from '@playwright/test';

test('Locators', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    
    //Click on Login Button -Property
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //Provide Username --Use CSS
    await page.locator('#loginusername').fill('Vineela98765');

    //Provide Password --Use CSS
    await page.locator('#loginpassword').fill('Vineela@98765');

    await page.locator("//button[@onclick='logIn()']").click();

    //Verify logout link Presense

    const logoutLink = await page.locator('id=logout2');
    await expect(logoutLink).toBeVisible();

    await page.close();

})