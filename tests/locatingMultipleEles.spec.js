import { test, expect } from '@playwright/test';

test('locatingMultipleEles.spec.js', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');

    const links = await page.$$('a');

    for(const link of links){
        const linkText = await link.textContent(); // It will return each link text value
        console.log(linkText);
    }
})