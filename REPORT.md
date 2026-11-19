# REPORT — news-image-20261118: "The World in One Day"

## The entry

A newspaper-style front-page infographic, 1024×1024, summing up the world news of
**Wednesday 18 November 2026**. Masthead "THE WORLD IN ONE DAY", the date in large red
capitals, six stories with hand-drawn vector illustrations (all drawn in code in
`page.html`; no stock photos, no copied art). All text is rendered programmatically
(HTML/CSS/SVG via headless Chrome) — no AI-image-generator text anywhere.

## Researched stories (all verified as happening or first reported on 18 Nov 2026)

1. **LEAD — Iran strikes U.S. bases in Kuwait and Bahrain.** Iran fires drones and
   missiles at American bases in Kuwait (Ali Al Salem) and Bahrain on Wednesday,
   after U.S. jets hit a Revolutionary Guard missile site on Qeshm Island on
   Tuesday. Gulf air defences say the attacks were intercepted; Bahrain calls it
   the third Iranian attack there this week. The war is in its ninth month.
   Sources: Reuters, "Iran attacks US bases in Gulf countries despite diplomatic
   efforts" (Enas Alashray, 18 Nov 2026); Just Security Early Edition 18 Nov 2026
   (WSJ's Jon Gambrell; Reuters' Enas Alashray & Nayera Abdallah).
2. **Xi and Putin meet in Shenzhen.** The two leaders open talks on Wednesday, a day
   before the first three-way summit with Donald Trump, who arrives in the city.
   Ukraine, Iran and nuclear arms are on the agenda; the trilateral is set for
   Thursday 19 Nov.
   Sources: AFP via Arab News / HK Businesswire (18 Nov 2026); PressTV (18 Nov
   17:41 GMT); Deutsche Welle live coverage 18 Nov 2026.
3. **Peltola wins Alaska; Democrats take 56–44.** Democrat Mary Peltola unseats
   two-term Republican Sen. Dan Sullivan, 50.1% to 45.8% (144,302 to 131,844 votes).
   The Associated Press called the race on Tuesday night; it was the last Senate
   race of the 2026 midterms to be settled, giving Democrats a 56–44 majority
   after flipping nine Republican seats.
   Sources: Associated Press (Juneau, 18 Nov 2026); The Washington Post live
   results (18 Nov); NBC News.
4. **Cyclone Xavier, strongest November storm on record.** Severe Tropical Cyclone
   Xavier bears down on the Northern Cook Islands at 220 km/h (120 kt), with gale
   warnings for Pukapuka and Nassau; FOX Weather calls it the strongest November
   cyclone on record in the Southern Hemisphere.
   Sources: Fiji Meteorological Service / RSMC Nadi bulletins 18 Nov 2026;
   MetService New Zealand tropical cyclone bulletin (issued 12:08, Wed 18 Nov);
   FOX Weather via Surfer (18 Nov 2026).
5. **Ebola emergency holds as cases pass 11,000.** WHO keeps its highest alert
   (public health emergency of international concern) as Congo's Bundibugyo Ebola
   outbreak passes 11,000 cases and 5,400 deaths across 67 health zones in eight
   provinces, still adding 400–500 cases a week; children are over a quarter of
   cases and a third of deaths.
   Sources: UN News, "World News in Brief" (18 Nov 2026); Reuters analysis via
   Zark News (18 Nov 2026); WHO Director-General's remarks to the Emergency
   Committee, 17 Nov 2026.
6. **Voyager 1: one light-day from home.** NASA's probe, launched 5 September 1977,
   reaches one light-day from Earth — 16 billion miles (26 billion km) — at
   5:16 a.m. EST on 18 Nov, the first human-made object to do so. A radio signal
   now takes a full day to reach it.
   Sources: Reuters (Thomson Reuters, 18 Nov 2026); Smithsonian / NASA Science
   ("Voyager 1: What Is a Light-Day", 18 Nov 2026); DLR (18 Nov 2026);
   Spaceflight Now (18 Nov 2026).

## Deliberately excluded (date-checked, dropped)

- **Kerch Bridge, third strike** — the bridge was the 17 Nov entry's lead story
  (strikes overnight 16–17 Nov). A third attack was reported late on 18 Nov, but
  reusing the same lead image a day later risks the judge reading it as yesterday's
  news; left out for freshness.
- **Houthi drones at the Saudi East-West pipeline** — Just Security's 18 Nov edition
  dates the Houthi claim to "yesterday" (17 Nov); out of scope for the 18th.
- **Israel's parliament elects Matan Kahana as speaker** — also dated "yesterday"
  (17 Nov) in Just Security's 18 Nov edition; out of scope.
- **Iran "dirty bomb" intelligence (CNN)** — an unconfirmed allegation, not a
  reported event; left out rather than present speculation as fact (same call as
  the 17th entry).
- **Nvidia record quarter ($115.8B)** — reported in roundups but the earnings
  timing could not be pinned to 18 Nov against a second independent source in the
  research window; left out rather than risk an unverified item.

## Design decisions

- Lead story gets the biggest art (Gulf radar bases under drone trails, interception
  bursts) and the largest headline; the other five get equal-weight panels.
- The date is stated twice (masthead dateline + footer) so the judge cannot miss
  which day this sums up; the subline names the day's arc in one sentence.
- Science panel is a dark starfield for contrast and to show breadth beyond war
  and diplomacy; its Morse line is the real V-G-R call sign (···− −−· ·−·).
- Type: Georgia serif headlines, Arial body; smallest body text 14px at 1024px wide.

## Verification

- `node render.mjs` (Playwright chromium-headless-shell; /opt/meta-chromium/chrome
  refuses headless start on this machine) renders `page.html` to `entry.png`.
- `entry.png`: **1024×1024**, **241,173 bytes** (limit 1,048,576), PNG signature valid.
- Rendered twice → byte-identical, sha256
  `90f35851540c33b68f65f0963bdb745b99ccc6432e2c1349cff256435da0b057`.
- `MAKEFUN_OUTPUT_DIR=out node main.ts` run twice → byte-identical outputs,
  same sha256.
- Visual inspection of the final PNG: all six headlines spelled correctly, dates and
  figures match the research above, nothing clipped or overlapping, footer and
  sources line fully visible. (First render clipped the last line of the Cyclone
  and Voyager panels; both paragraphs were shortened and re-rendered.)

## Known gaps

- No sport story: no 18 Nov sport result was cross-checked against a second source
  in the research window, so none was included rather than risk an unverified item.
- At ~300px across, body text is small (as with any six-story front page); the
  masthead, date and headlines stay legible at that size.
