import { test, expect } from '@playwright/test';

test('Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker','05/09/2025');

    //Date Picker
    const year ="2025";
    const month = "May";
    const date ="09";

    await page.click('#datepicker')  //Opens a Calender
    while(true){
        const currentYear = page.locator('.ui-datepicker-year').textContent();
        const currentMonth = page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth==month){
            break;
        }
        await page.locator('[title="Next"]').click(); //Next arrow

    }

    const dates =await page.$$("//a[@class='ui-state-default']");

    //Date Selection
    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }
    await page.waitForTimeout(3000);

    })