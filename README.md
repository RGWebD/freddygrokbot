# Genuine Life Ent. — website preview (RGWebD)
Premium single-page redesign proposal for **Genuine Life Entertainment** / author **Freddy Scurry**, rebuilt from the current Wix site https://www.genuine4ever.com/.

Live preview: https://rgwebd.github.io/freddygrokbot/
Repository: https://github.com/RGWebD/freddygrokbot

## What's inside
- `index.html`, `style.css`, `script.js` — static, no build step, all asset paths relative (works under the /freddygrokbot/ subpath).
- `assets/` — optimized WebP images (logo, 3 covers, merch, young-reader, reading-chair, 3 journal images), favicons and OG image made from his logo.
- Sections: Hero · Best Sellers (3 books with full synopses, ISBN, $14.50, Buy links) · The STUCK Saga · Browse by genre · Our Offerings · Gallery (lightbox) · Upcoming Events · Journal (3 posts) · Link hub · Footer.
- Effects: CSS-only intro curtain with logo, gold-foil animated type, mouse-reactive 3D cover fan and spotlight, cover tilt + shine, scroll reveal with stagger, parallax, marquee, magnetic buttons, glassy sticky nav, scroll-progress bar, film grain, keyboard lightbox (←/→/Esc).
- Accessible: skip link, semantic landmarks, alt text, focus styles, native `<details>` synopses, `<dialog>` lightbox. `prefers-reduced-motion` disables all motion. With JS off every section and image is visible and the gallery links open full-size images.

## Links
All buy/shop/blog buttons point to his existing live Wix store and blog pages (13 outbound links). His current site has **no real social, email, phone or address** — the footer/social items there are Wix template placeholders (info@mysite.com, 123-456-7890, @wix). Add his real Instagram/Facebook/TikTok/email before launch.

## Local preview
`python3 -m http.server 8231` in this folder, then open http://127.0.0.1:8231/
See SOURCES.md, TEST-RESULTS.md, source/NOTES.md.
