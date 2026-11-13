# Domain migration status

Configured 2026-11-13 for www.genuine4ever.com.

## Configuration and remaining verification

1. Completed: catalog, all three book pages, cart, and blog verified over HTTPS at shop.genuine4ever.com. The shop remains the Wix site's primary domain.
2. Completed: shop.genuine4ever.com is the primary domain of the existing Premium Genuine Life Ent Wix site and no longer redirects to www.
3. Completed: migration merged into main (f723309e738bed1335535df783da9c93fdd0b474). GitHub Pages run 43475730224 succeeded and the original preview redirects to the custom domain.
4. Completed: apex A and www CNAME records saved in Wix as shown below and verified in public DNS. Other subdomains and records were retained.
5. Verified: the new main website and CSS, JavaScript, and logo load over HTTP; the apex redirects to www. All 24 main-site Wix links now use shop.genuine4ever.com. Remaining verification: GitHub's new HTTPS certificate was still provisioning at 12:48 PM America/New_York. Confirm HTTPS at both www and apex, then confirm or enable Enforce HTTPS in GitHub Pages when available. Do not bypass a browser certificate warning.

## Configured website DNS

| Type | Wix host | Value |
| --- | --- | --- |
| A | blank (apex) | 185.199.108.153 |
| A | blank (apex) | 185.199.109.153 |
| A | blank (apex) | 185.199.110.153 |
| A | blank (apex) | 185.199.111.153 |
| CNAME | www | rgwebd.github.io |

## Existing website DNS before migration

- Apex A: 185.230.63.171, 185.230.63.186, 185.230.63.107; TTL 1 hour.
- www CNAME: cdn3.wixdns.net; TTL 1 hour.
- Nameservers: ns2.wixdns.net and ns3.wixdns.net.
- Existing other CNAMEs: customer-appreci-1, www.customer-appreci-1, en -> cdn3.wixdns.net.
- Newly added by Wix: shop and www.shop -> initial.wixdns.net; TTL 1 hour. Preserve these provider-generated records.
- Wix UI showed no existing MX, TXT, or SRV records.

## Wix store activation

Wix completed shop.genuine4ever.com activation on 2026-11-13. The shop was set as the primary domain of the existing Genuine Life Ent site. Its HTTPS catalog returns HTTP 200 and remains at shop.genuine4ever.com. A temporary Wix verification error resolved during setup.

## References

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages
- https://support.wix.com/en/article/connecting-a-subdomain-to-a-site-in-your-wix-account
- https://support.wix.com/en/article/switching-your-primary-and-redirected-domains
