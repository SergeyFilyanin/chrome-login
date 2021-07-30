const { chromium } = require('playwright');


(async () => {
    const browser = await chromium.launch({
    headless: false 
  });
  const url = "https://gentrackinthecloud.signin.aws.amazon.com/console/";
  const username = "dan.zegelman@gentrack.com";
  const password = "F9RpH9bL0p#nd^2$nIZk@72bVZ";
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1890, height: 1024 });
  await page.goto(url);
  await page.waitForSelector('#input_account  [type="text"]');
  await page.fill('.textinput  [name="username"]', username);
  await page.fill('.textinput  [name="password"]', password);
  await page.click('.buttoninput #signin_button');
  await page.waitForSelector('#nav-home-link');
})();
