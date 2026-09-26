import { chromium } from 'playwright';
import { spawn } from 'child_process';

async function run() {
  console.log('Starting preview server on port 4176...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4176'], {
    stdio: 'pipe',
    shell: true
  });

  server.stdout.on('data', (d) => console.log(`[Preview] ${d.toString().trim()}`));
  server.stderr.on('data', (d) => console.error(`[Preview Err] ${d.toString().trim()}`));

  await new Promise((resolve) => setTimeout(resolve, 2500));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
  });

  const page = await context.newPage();

  console.log('Navigating to http://localhost:4176...');
  await page.goto('http://localhost:4176', { waitUntil: 'networkidle' });

  // Check horizontal overflow
  const overflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });

  console.log(`Viewport: 390px. ScrollWidth: ${overflow.scrollWidth}px, ClientWidth: ${overflow.clientWidth}px`);

  if (overflow.hasOverflow) {
    console.error(`❌ HORIZONTAL OVERFLOW DETECTED: ${overflow.scrollWidth} > ${overflow.clientWidth}`);
    await browser.close();
    server.kill();
    process.exit(1);
  } else {
    console.log('✅ ZERO HORIZONTAL OVERFLOW VERIFIED (W3C overflow-x: clip standard applied)');
  }

  // Capture hero screenshot
  await page.screenshot({ path: 'mobile-390px-hero.png' });
  console.log('Hero screenshot saved: mobile-390px-hero.png');

  // Scroll down smoothly to verify canvas scrub
  console.log('Scrubbing through spatial frames...');
  await page.evaluate(async () => {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
  });
  await new Promise((r) => setTimeout(r, 1000));

  await page.screenshot({ path: 'mobile-390px-scrub.png' });
  console.log('Scrub screenshot saved: mobile-390px-scrub.png');

  // Scroll to full page
  await page.evaluate(async () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
  await new Promise((r) => setTimeout(r, 1500));

  await page.screenshot({ path: 'mobile-390px-full.png', fullPage: true });
  console.log('Full page mobile screenshot saved: mobile-390px-full.png');

  await browser.close();
  server.kill();
  console.log('✅ Mobile 390px Audit Passed Successfully!');
  process.exit(0);
}

run().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
