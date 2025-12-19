// Script to generate OG image screenshot of homepage
// Run: node generate-og-image.js
// Requires: npm install puppeteer

const puppeteer = require('puppeteer');

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image size
  await page.setViewport({ width: 1200, height: 630 });
  
  // Load the deployed site
  await page.goto('https://gym-demo-2-ten.vercel.app', { waitUntil: 'networkidle0' });
  
  // Wait a bit for any animations/transitions
  await page.waitForTimeout(3000);
  
  // Take screenshot
  await page.screenshot({
    path: 'og-image.png',
    width: 1200,
    height: 630,
    fullPage: false,
  });
  
  await browser.close();
  console.log('OG image generated: og-image.png');
}

generateOGImage().catch(console.error);

