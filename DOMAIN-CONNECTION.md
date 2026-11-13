# Domain migration status

Configured 2026-11-13 for www.genuine4ever.com.

## Configuration and verification

1. Completed: catalog, all three book pages, cart, and blog verified over HTTPS at shop.genuine4ever.com. The shop remains the Wix site's primary domain.
2. Completed: shop.genuine4ever.com is the primary domain of the existing Premium Genuine Life Ent Wix site and no longer redirects to www.
3. Completed: migration merged into main (f723309e738bed1335535df783da9c93fdd0b474). GitHub Pages run 43475730224 succeeded and the original preview redirects to the custom domain.
4. Completed: apex A and www CNAME records saved in Wix as shown below and verified in public DNS. Other subdomains and records were retained.
5. Completed: the new main website loads over HTTPS at www.genuine4ever.com with a valid secure connection. All 24 main-site Wix links use shop.genuine4ever.com.
6. Completed on 2026-11-13: restored www.genuine4ever.com in GitHub Pages settings after finding the custom-domain field empty. GitHub reported DNS check successful. Enabled Enforce HTTPS and verified that it remained checked after reloading settings.
7. Verified with normal TLS checks: HTTPS www returns 200; HTTPS apex redirects to HTTPS www; HTTP www redirects to HTTPS www; HTTP apex redirects through www to HTTPS; the Wix shop catalog returns HTTPS 200. The production site also opened successfully in Chrome without a certificate warning.

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
