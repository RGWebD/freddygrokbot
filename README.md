# Genuine Life Ent. — website (RGWebD)
Production single-page website for **Genuine Life Entertainment** / author **Freddy Scurry**, rebuilt from his Wix site.

Live website: https://www.genuine4ever.com/
Wix store: https://shop.genuine4ever.com/category/all-products
Wix journal: https://shop.genuine4ever.com/blog
Original preview address: https://rgwebd.github.io/freddygrokbot/ (redirects to the custom domain once connected)
Repository: https://github.com/RGWebD/freddygrokbot

## What's inside
- `index.html`, `style.css`, `script.js` — static, no build step, all asset paths relative (works at the custom-domain root and under the original /freddygrokbot/ subpath).
- `assets/` — optimized WebP images (logo, 3 covers, merch, young-reader, reading-chair, 3 journal images), favicons and OG image made from his logo.
- Sections: Hero · Best Sellers (3 books with full synopses, ISBN, $14.50, Buy links) · The STUCK Saga · Browse by genre · Our Offerings · Gallery (lightbox) · Upcoming Events · Journal (3 posts) · Link hub · Footer.
- Effects: CSS-only intro curtain with logo, gold-foil animated type, mouse-reactive 3D cover fan and spotlight, cover tilt + shine, scroll reveal with stagger, parallax, marquee, magnetic buttons, glassy sticky nav, scroll-progress bar, film grain, keyboard lightbox (←/→/Esc).
- Accessible: skip link, semantic landmarks, alt text, focus styles, native `<details>` synopses, `<dialog>` lightbox. `prefers-reduced-motion` disables all motion. With JS off every section and image is visible and the gallery links open full-size images.

## Links
All buy/shop/blog/cart buttons point to his existing Wix site at `https://shop.genuine4ever.com` (24 anchors across 12 unique routes). His current site has **no real social, email, phone or address** — the footer/social items there are Wix template placeholders (info@mysite.com, 123-456-7890, @wix). Add his real Instagram/Facebook/TikTok/email before launch.

## Publishing and domain setup
GitHub Pages publishes the `main` branch from the repository root. The uppercase `CNAME` file contains `www.genuine4ever.com`, and the GitHub Pages custom-domain setting must match it. Wix continues to manage the domain's DNS.

The existing Wix store, product pages, blog and cart remain on the same Wix site, with `shop.genuine4ever.com` as its primary domain. Verify the shop hostname and product pages before directing the main website hostname to GitHub Pages.

`404.html` redirects only the 12 known legacy Wix paths to the fixed `https://shop.genuine4ever.com` host, preserving their path, query string and fragment. Other missing paths show a useful 404 page with website and store links. These are browser-side redirects from GitHub Pages' 404 response; they are not server-side HTTP 301 redirects.

## Local preview
`python3 -m http.server 8231` in this folder, then open http://127.0.0.1:8231/
See SOURCES.md, TEST-RESULTS.md, source/NOTES.md.
