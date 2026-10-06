# Nandeeswar Badugu — portfolio

Personal site for [Nandeeswar Badugu](https://github.com/nandeeswarbadugu): infrastructure, DevOps/SRE, platform engineering, and HPC/MLOps.

The site is a static Next.js export for GitHub Pages on the custom domain [nandeeswar.dev](https://nandeeswar.dev).

## Run locally

Requires Node.js 20.9+.

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Profile copy, stack, and projects live in `src/lib/content.ts`.

## GitHub Pages

Pushes to `main` build the static site into `out/` and deploy it with GitHub Actions (`.github/workflows/pages.yml`). `public/CNAME` publishes `nandeeswar.dev`.

One-time setup in the GitHub repo:

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `nandeeswar.dev`. Enforce HTTPS after the certificate is issued.

DNS at the domain registrar:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `nandeeswarbadugu.github.io` |

The site is served from the domain root, so `basePath` stays empty. That matches a custom domain on either a user site or a project site.
