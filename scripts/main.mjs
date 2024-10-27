import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://yuls2024.github.io/desn3035-e5-v2/');
await page.setViewport({width: 1080, height: 1024});
await page.waitForNetworkIdle();
await page.screenshot({
    path: "auto_screenshot.png"
});

const options = {
    output: 'html'
};
const runnerResult = await lighthouse('https://yuls2024.github.io/desn3035-e5-v2/', options, undefined, page);

const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);

await browser.close();