# Local browser tests
Passed Nov 11, 2026 (ET), headless Chromium against the local server (`/workspace/genuine4ever/test.py`).

- Widths 1440, 1024, 768, 375, 320: no horizontal overflow, 0 broken images, 0 missing alt, 0 unnamed buttons, 0 console/page errors, 0 failed requests.
- Lightbox: opens from gallery, → advances, Esc closes, focus returns.
- Mobile menu opens at 375px.
- JavaScript disabled (375px): headline and all book sections visible (opacity 1), 6 nav links visible.
- prefers-reduced-motion: intro hidden, marquee/animations off, content fully visible.
- All 13 outbound links returned HTTP 200; all 21 referenced local assets exist.

Screenshots in `screenshots/`: hero-1440.png, hero-375.png, full-1440.png, full-768.png, full-375.png, lightbox.png, mobile-menu.png, mobile-nojs.png. Raw results: test-results.json.
Not a full automated accessibility audit.

# Live check
Nov 11, 2026 ~5:45 PM ET, https://rgwebd.github.io/freddygrokbot/ : same suite passed at 1440/1024/768/375/320 (no overflow, no broken images, no console errors, no failed requests; lightbox and no-JS checks pass). index, style.css, script.js and all 21 assets return HTTP 200. Screenshots in screenshots/ were re-captured from the live URL.
