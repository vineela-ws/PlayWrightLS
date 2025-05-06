import { test, expect } from '@playwright/test';

test('Soft Assertions', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    const pageTitle = page.title();
    console.log("Page Title is ", pageTitle);

    //Hard Assertions

    await expect(page).toHaveTitle('STORE');
    const pageUrl = page.url();
    console.log('pageUrlis ', pageUrl);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //Soft Assertions

    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    
    await page.close();

})