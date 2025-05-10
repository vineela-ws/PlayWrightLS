import { test, expect } from '@playwright/test';

test('Handle RightClick', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const button = page.locator('//span[normalize-space()="right click me"]');

    //Right click Action
    await button.click({button:'right'});

    await page.waitForTimeout(3000);

})