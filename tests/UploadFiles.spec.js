import { test, expect } from '@playwright/test';

test('Single File', async({page})=>{

    await page.goto('https://easyupload.io/');
    await page.waitForSelector('#select-files-input');
    await page.waitForSelector('#select-files-input').click();

    await page.waitForSelector('#select-files-input').setInputFiles('File Path');
    await page.waitForTimeout(5000);

})

test('Multiple Files', async({page})=>{

    await page.goto('https://easyupload.io/');

    await page.locator('').setInputFiles('',''); //Pass Multiple Files here
    expect (await page.locator('')).toHaveText('Uploded File name1') //Verification
    expect (await page.locator('')).toHaveText('Uploded File name2') //Verification

    await page.waitForTimeout(5000);

    //Removing Files 
    await page.locator('').setInputFiles([]);
    expect (await page.locator('')).toHaveText('No Files Selected') //Verification

    await page.waitForTimeout(5000);

})