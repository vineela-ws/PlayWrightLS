import { test, expect } from '@playwright/test';

test('Alerts with OK', async({page})=>{

    //Enabling alert handling//Dialog window Handler

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })

    await page.click('//span[normalize-space()="Alert"]');
    page.waitForTimeout(5000);


})

test('Confirmation Dialog alert with Ok and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();  //Close by using Ok Button
        await dialog.dismiss(); //Close by using Cancel button

    })

    await page.click('//span[normalize-space()="Alert"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
    page.waitForTimeout(5000);

})

test('Prompt Dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('Prompt');
        expect(dialog.message()).toContain('Please Enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John'); 
    })

    await page.click('//span[normalize-space()="Prompt"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Harry Potter! How are you today?');
    page.waitForTimeout(5000);

})