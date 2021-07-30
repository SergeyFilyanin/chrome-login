const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const url = "http://malta3025.startdedicated.com:32333/guacamole/#/";
  const username = "secadmin";
  const password = "Unix_11!";
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('.version > .app-name');
  await page.fill('.ng-scope > [type="text"]', username);
  await page.fill('.ng-scope > [type="password"]', password);
  await page.click('.buttons >> [type="submit"]');
  await page.waitForSelector('.connection-list-ui > .header > .ng-binding');
})();