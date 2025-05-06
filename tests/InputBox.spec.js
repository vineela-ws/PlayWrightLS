import { test, expect } from '@playwright/test';

test('Handle InputBox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
    await expect(await page.locator('#name')).toBeEditable();
    await expect(await page.locator('#name')).toBeEnabled();

    await page.locator('#name').fill("John");

    //Radio Buttons
    await page.locator('#male').check();
    //await page.check('#male');
    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();

    await expect(await page.locator('#male').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
    await page.close();

})