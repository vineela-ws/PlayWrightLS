import { test, expect } from '@playwright/test';

test('frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Total Frames
    const allFrames = await page.frames();
    console.log("Number of Frames:", allFrames.length);

    //Apptoch 1 : Using name or URL

    //const var = await page.frame('name'); //If name is presents
    const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    frame1.fill("[name='mytext1']",'Hello');

    //Approch 2 : Using Frame Locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputBox.fill("Hello");

    })
