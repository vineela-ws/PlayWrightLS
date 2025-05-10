import { test, expect } from '@playwright/test';

test('Handle MouseHover', async({page})=>{

    await page.goto('https://www.w3schools.com/howto/howto_css_dropdown.asp');
    await page.waitForTimeout(30000);

    const hoverMe = await page.locator(".dropbtn");
    const link1 =   await page.locator(".dropdown-content");

    await hoverMe.hover();
    await link1.hover();

    await page.waitForTimeout(3000);

})