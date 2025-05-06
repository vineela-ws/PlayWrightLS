import { test, expect } from '@playwright/test';

test('Handle Dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple Ways to Select Option from the Dropdown
    await page.locator('#country').selectOption({label:'India'});  //label/ Visible Text
    await page.locator('#country').selectOption('India');  // Visible Text
    await page.locator('#country').selectOption({value:'uk'}); // By using Value attribute 
    await page.locator('#country').selectOption({index: 1});  // By using Index
    await page.selectOption("#country",'India'); //bytext

    //Assertions
    //1.Check number of options in dropdown -Approch1
    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);

    //2.Check number of options in dropdown -Approch2
    const options1 = await page.$$('#country option');
    console.log("Number of options:", options1.length);
    await expect(options1.length).toBe(10);

    //3.Check presence value of the dropdown
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();

    //4.Check presence value of the dropdown -Approch2
    const options2 = await page.$$('#country option');
    let status = false;
    for(const option of options2){
        console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            status =true;
            break;
        }
    }
    expect(status).toBeTruthy();

    //5.Select Option from dropdown using loop
    const options3 = await page.$$('#country option');
    let status1 = false;
    for(const option of options3){
        console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            await page.selectOption("#country",value);
            break;
        }
    }

    await page.waitForTimeout(5000);

    await page.close();

})