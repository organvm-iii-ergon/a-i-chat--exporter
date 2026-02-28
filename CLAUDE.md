# CLAUDE.md — a-i-chat--exporter

**ORGAN III** (Commerce) · `organvm-iii-ergon/a-i-chat--exporter`
**Status:** ACTIVE · **Branch:** `master`

## What This Repo Is

Export and share AI chat conversation history (fork of chatgpt-exporter)

## Stack

**Languages:** TypeScript, HTML, CSS
**Build:** pnpm

## Directory Structure

```
📁 .github/
📁 .husky/
📁 .vscode/
📁 dist/
📁 docs/
    adr
📁 src/
    api.ts
    constants.ts
    exporter
    hooks
    i18n.ts
    locales
    main.tsx
    page.ts
    style.css
    styles
    ... (14 items)
  .editorconfig
  .gitignore
  .npmrc
  .release-please-manifest.json
  CHANGELOG.md
  CONTRIBUTING.md
  LICENSE
  README.md
  README_FR.md
  README_ID.md
  README_KR.md
  README_TR.md
  eslint.config.js
  index.html
  package.json
  pnpm-lock.yaml
  release-please-config.json
  seed.yaml
  tsconfig.json
  vite.config.ts
```

## Key Files

- `README.md` — Project documentation
- `package.json` — Dependencies and scripts
- `seed.yaml` — ORGANVM orchestration metadata
- `src/` — Main source code

## Development

```bash
pnpm install    # Install dependencies
pnpm build      # Build all packages
pnpm test       # Run tests
pnpm dev        # Start development server
```

## ORGANVM Context

This repository is part of the **ORGANVM** eight-organ creative-institutional system.
It belongs to **ORGAN III (Commerce)** under the `organvm-iii-ergon` GitHub organization.

**Registry:** [`registry-v2.json`](https://github.com/meta-organvm/organvm-corpvs-testamentvm/blob/main/registry-v2.json)
**Corpus:** [`organvm-corpvs-testamentvm`](https://github.com/meta-organvm/organvm-corpvs-testamentvm)
