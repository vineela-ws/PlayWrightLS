import { test, expect } from '@playwright/test';

test('Handle DragAndDrop', async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const rome = page.locator('#box6');
    const italy = page.locator('#box106');
   
    //Approch1 
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.up();

    await page.waitForTimeout(3000);

    //Approch2
    await rome.dragTo(italy);

})