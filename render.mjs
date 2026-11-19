// Renders page.html to entry.png (1024x1024) with headless Chrome.
// Run: node render.mjs
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const page = join(dir, 'page.html');
const out = join(dir, 'entry.png');
const chrome = process.env.CHROME_HEADLESS_SHELL
  ?? '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  `--screenshot=${out}`,
  `file://${page}`,
], { stdio: 'inherit' });

const size = statSync(out).size;
console.log(`entry.png: ${size} bytes`);
if (!existsSync(out) || size > 1048576) throw new Error('entry.png missing or over 1 MiB');
