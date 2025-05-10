import { test, expect } from '@playwright/test';

test('Handle DoubleClick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const button = page.locator('//button[normalize-space()="Copy Text"]');

    //Double click Action
    await button.dblclick();
    const f2 = await page.locator("#field2");

    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(3000);

})