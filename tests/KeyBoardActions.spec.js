import { test, expect } from '@playwright/test';

test('Handle KeyBoardActions', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');
    await page.locator('[name="text1"]').fill("Welcome to Auotmation");

    //ctrl+A,
    await page.keyboard.press('Control+A');
    // ctrl+c,
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl+V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

})