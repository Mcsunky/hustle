// Playwright helper for the Hustle daily booking. Run with browser_run_code_unsafe(filename) after setting
// globalThis-free PICKS below. Never use in a logged-in context. Never clicks Place Bet.
async (page) => {
  const PICKS = __PICKS__;
  const base = 'https://www.football.com/ng/sport/football/x/x/x_vs_y/sr:match:';
  const log = [];
  // Start from an empty slip
  await page.goto('https://www.football.com/ng/m'); await page.waitForTimeout(2500);
  const bar = page.getByText(/\d+ folds|\d+\s*Betslip|Single/).first();
  const closeDlg = async () => { await page.getByRole('button', { name: 'Close' }).click({ timeout: 1500 }).catch(() => {}); };
  await closeDlg();
  if (await page.getByText(/\d+ folds/).first().isVisible().catch(() => false) || await page.getByText('Remove All').isVisible().catch(() => false)) {
    if (!(await page.getByText('Remove All').isVisible().catch(() => false))) { await page.getByText(/\d+ folds/).first().click(); await page.waitForTimeout(1000); }
    await closeDlg();
    await page.locator('text=Remove All').click({ timeout: 5000 }); await page.waitForTimeout(600);
    await page.getByRole('button', { name: 'OK' }).click({ timeout: 5000 }); await page.waitForTimeout(1200);
  }
  for (const p of PICKS) {
    await page.goto(base + p.id);
    await page.getByText('Draw').first().waitFor({ timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(1500);
    if (p.tab) { await page.getByText(p.tab, { exact: true }).first().click(); await page.waitForTimeout(1500); }
    log.push(await page.evaluate(async (p) => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      for (let i = 0; i < 8; i++) { window.scrollTo(0, document.body.scrollHeight); await sleep(400); }
      const hp = [...document.querySelectorAll('p')].find(x => x.textContent.trim() === p.hdr && x.parentElement?.parentElement?.parentElement?.querySelector('button'));
      if (!hp) return 'ERR no header ' + p.hdr;
      const blk = () => { let b = hp; for (let i = 0; i < 4; i++) b = b.parentElement; return b; };
      if (!/\d\.\d\d/.test(blk().innerText)) { hp.click(); await sleep(1000); }
      const b = blk(); let el;
      if (p.grid) { const rp = [...b.querySelectorAll('p')].find(x => x.textContent.trim() === 'Home'); el = rp?.parentElement.children[1]?.children[1]; }
      else if (p.row) { const rp = [...b.querySelectorAll('p')].find(x => x.textContent.trim() === p.row); el = rp?.parentElement.parentElement.children[1]?.children[0]; }
      else { const c = [...b.querySelectorAll('div')].filter(d => new RegExp('^' + p.label + '\\s+\\d+\\.\\d+$').test(d.innerText.trim())); c.sort((a, z) => a.querySelectorAll('*').length - z.querySelectorAll('*').length); el = c[0]; }
      if (!el) return 'ERR no outcome';
      el.scrollIntoView({ block: 'center' }); el.click(); await sleep(900);
      return document.title.split(' on ')[0] + ' -> ' + el.innerText.replace(/\s+/g, ' ').trim();
    }, p));
  }
  await page.getByText(/\d+ folds/).first().click(); await page.waitForTimeout(1800);
  const legs = await page.evaluate(() => [...new Set([...document.querySelectorAll('h4')].map(h => { let n = h; for (let i = 0; i < 5; i++) { n = n.parentElement; if (/vs/.test(n.innerText)) break; } return n.innerText.split('\n').filter(Boolean).slice(0, 3).join(' | '); }))].filter(t => /vs/.test(t)));
  const total = await page.evaluate(() => { const t = document.body.innerText.match(/Total Odds\s*([\d.,]+)/); return t ? t[1] : '?'; });
  let code = 'NOT BOOKED';
  if (legs.length === PICKS.length && !legs.some(l => /Unavailable/.test(l))) {
    await page.getByText('Book Bet', { exact: true }).last().click();
    await page.getByText('Booking Code').first().waitFor({ timeout: 15000 });
    await page.waitForTimeout(1500);
    code = await page.evaluate(() => { const m = document.body.innerText.match(/Booking Code\s*\n?\s*([A-Z0-9]{5,8})/); return m ? m[1] : '?'; });
  }
  return log.join('\n') + '\n---\n' + legs.join('\n') + '\nTOTAL ' + total + ' CODE ' + code;
}
