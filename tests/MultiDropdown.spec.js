import { test, expect } from '@playwright/test';

test('Handle MultiSelectDropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['Blue','Red','Yellow']);

    //Assertions
    //1.Check number of options in dropdown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);

    await page.waitForTimeout(5000);

    //2.Check Number of Options in dropdown using JS Array
    const options1 = await page.locator('#colors option');
    console.log("Number of options:", options1.length);
    await expect(options1.length).toBe(5);

    //3.Check presence value of Dropdown
     const content = await page.locator('#colors').textContent();
     await expect(content.includes('Blue')).toBeTruthy();
     await expect(content.includes('Black')).toBeFalsy();

})