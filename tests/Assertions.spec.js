import { test, expect } from '@playwright/test';

test('AssertionsTest', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    //1.expect(page).toHaveURL()  page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2.expect(page).toHaveTitle() page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3.expect(locator).toBeVisable() Element is Visable
    const logoElement = page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4.expect(locator).toBeEnabled()  control is enabled
    const searchStoreBox = page.locator('#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();

    //5.expect(locator).toBeChecked()  Radio/Checkbox is Checked
    //RadioButton
    const maleRadioButton = page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    //CheckBox
    const newsLetterCheckBox = page.locator('#Newsletter');
    await expect(newsLetterCheckBox).toBeChecked();

    //6.expect(locator).toHaveAttribute()  Element has Attribute
    const regButton = page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');

    //7.expect(locator).toHaveText()  Element matches text
    await expect(page.locator('page-title h1')).toHaveText('Register'); //Full Text

    //8.expect(locator).toContainsText()  Element contains text
    await expect(page.locator('page-title h1')).toContainText('Reg');  //Partial Text
    
    //9.expect(locator).toHaveValue(value) Input has a value
    const emailInput = page.locator('#Email');
    emailInput.fill('unknown@gmail.com');
    await expect(emailInput).toHaveValue('unknown@gmail.com');

    //10.expect(locator).toHaveCount(value) List of elements has given Length 
    const options = page.locator('');
    await expect(options).toHaveCount(13);

    await page.close();

})