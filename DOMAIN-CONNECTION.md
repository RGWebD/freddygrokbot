# Domain migration status

Prepared 2026-11-13 for www.genuine4ever.com.

## Required sequence

1. Confirm https://shop.genuine4ever.com/category/all-products and all three product pages work with a valid HTTPS certificate. Wix currently has the shop as a redirected domain, with domain verification in progress.
2. Set shop.genuine4ever.com as the primary domain of the existing Premium Genuine Life Ent Wix site. Verify that it no longer redirects to www.
3. Merge the domain migration into main. This branch-published GitHub Pages site reads the root CNAME file. Verify the Pages deployment and custom-domain redirect before changing public DNS.
4. Change only apex A and www CNAME website records in Wix DNS to the GitHub targets below; retain other subdomains and records.
5. Verify website, assets, shop links, and known old product URLs. Confirm HTTPS at both www and apex, and enable Enforce HTTPS in GitHub Pages when available.

## Desired website DNS

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

## Current blocker

Wix accepted shop.genuine4ever.com and created both DNS records, but reports domain verification in progress. HTTP reaches Wix and redirects to the existing primary domain. HTTPS currently fails with ERR_SSL_PROTOCOL_ERROR. The Wix verification flow rendered blank CNAME values and returned a temporary technical issue. Do not move the public website to GitHub before the store hostname can serve the existing shopping flow securely.

## References

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages
- https://support.wix.com/en/article/connecting-a-subdomain-to-a-site-in-your-wix-account
- https://support.wix.com/en/article/switching-your-primary-and-redirected-domains
