# Domain migration status

Prepared 2026-11-13 for www.genuine4ever.com.

## Required sequence

1. Confirm https://shop.genuine4ever.com/category/all-products and all three product pages work with a valid HTTPS certificate. The shop must remain the Wix site's primary domain.
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

## Wix store activation

Wix completed shop.genuine4ever.com activation on 2026-11-13. The shop was set as the primary domain of the existing Genuine Life Ent site. Its HTTPS catalog returns HTTP 200 and remains at shop.genuine4ever.com. A temporary Wix verification error resolved during setup.

## References

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages
- https://support.wix.com/en/article/connecting-a-subdomain-to-a-site-in-your-wix-account
- https://support.wix.com/en/article/switching-your-primary-and-redirected-domains
