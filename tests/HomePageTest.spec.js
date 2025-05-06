import { test, expect } from '@playwright/test';

test('Home Page', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    const pageTitle = page.title();
    console.log("Page Title is ", pageTitle);

    await expect(page).toHaveTitle('STORE');
    const pageUrl = page.url();
    console.log('pageUrlis ', pageUrl);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.close();

})