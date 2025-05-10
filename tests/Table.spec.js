import { test, expect } from '@playwright/test';

test('WebTable', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    
    //1.Total number of rows & coloumns
    const columns = await table.locator('thead tr th');
    console.log('Number of columns', await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log('Number of rows:', await rows.count());
    expect(await columns.count()).toBe(5);

    //2.Select checkbox for Project 4
    const matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await matchedRow.locator('input').check()

    //3.Select Multiple Products by re-usable function
    await SelectProduct(rows,page,'Product 1');
    await SelectProduct(rows,page,'Product 3');
    await SelectProduct(rows,page,'Product 5');

    //4.Print all Product Details
    for(let i=0;i<await rows.count();i++){
       const row= rows.nth(i);
       const tds= row.locator('td')
             for(let j=0;i<tds.count()-1;j++){
              console.log(await tds.nth(j).textContent())
             }
    }

    //5.Read data from all the pages in the table
    const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the Table:', await pages.count())
      for(let p=0; p<await pages.count();p++){
         if(p>0){
            await pages.nth(p).click();
         }
         for(let i=0;i<await rows.count();i++){
            const row= rows.nth(i);
            const tds= row.locator('td')
                  for(let j=0;i<tds.count()-1;j++){
                   console.log(await tds.nth(j).textContent())
                  }
         }
      }

    await page.waitForTimeout(5000);

    })

    function SelectProduct(rows,page,name){
        const matchedRow= rows.filter({
            has: page.locator('td'),
            hasText: name
        })

    matchedRow.locator('input').check();

    }