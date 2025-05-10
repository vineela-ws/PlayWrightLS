import { test, expect } from '@playwright/test';

test('Handle AutoSuggestion', async({page})=>{

    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("");

    const fromCityOptions = page.$$("");

    for(let option of fromCityOptions){
       const value = await option.textContent();
       console.log(value);
       if(value.includes('Anand Vihar')){
        await option.click();
        break;
       }
    }
    await page.waitForTimeout(3000);

})