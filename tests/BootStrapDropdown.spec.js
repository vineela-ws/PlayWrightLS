import { test, expect } from '@playwright/test';

test('Handle BootStrap MultiSelectDropdowns', async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator('.multiselect').click();

    //Assertions
    const options = page.locator('ul>li label input');
    await expect(options).toHaveCount(11);
    
    //2nd Way
    const options1 = page.$$('ul>li label input')
    await expect(options1.length).toBe(11);

    //3rd Select Options from Dropdown
    const options2 = page.$$('ul>li label input')
    for(let option of options2){
        const value = await option.textContent();
        console.log("Value is: ", value);
    }



    await page.waitForTimeout(5000);
    //npx playwright test BootStrapDropDown.spec.js --project=chromium --headed

})