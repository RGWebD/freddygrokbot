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
