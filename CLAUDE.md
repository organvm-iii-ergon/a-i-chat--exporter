# CLAUDE.md — a-i-chat--exporter

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

**@pionxzh/chatgpt-exporter** — browser extension to export ChatGPT and other AI chat conversation history. Supports multiple export formats. Fork of the original chatgpt-exporter, extended to cover additional AI chat interfaces.

**Active branch**: `master` (not `main`).

## Commands

```bash
pnpm install         # Install dependencies
pnpm run dev         # Vite dev server (for local testing)
pnpm run build       # Vite build → dist/ (load unpacked in Chrome)
pnpm run test        # TypeScript typecheck only (tsc --noEmit) — no test suite
pnpm run lint        # ESLint
pnpm run lint:fix    # ESLint with auto-fix
```

## Architecture

Browser extension built with TypeScript + Vite. Output in `dist/` — load as unpacked extension in `chrome://extensions`.

**Entry points** (`src/`):
- `main.tsx` — Content script injected into chat pages
- `page.ts` — Page-level utilities
- `api.ts` — API interaction helpers
- `constants.ts` — Shared constants
- `i18n.ts` — Internationalization (locales in `src/locales/`)
- `style.css` / `src/styles/` — Extension styles

**Exporter module** (`src/exporter/`): Format-specific export logic (JSON, Markdown, HTML, etc.)

**Hooks** (`src/hooks/`): React hooks for extension UI components

**Releases**: Managed by `release-please`. Config in `release-please-config.json` / `.release-please-manifest.json`. CHANGELOG auto-generated.

**Git hooks**: Husky (`.husky/`) — runs lint/typecheck pre-commit.

## Notes

- No formal test suite — `npm test` only typechecks
- Multilingual READMEs: `README_FR.md`, `README_ID.md`, `README_KR.md`, `README_TR.md`

<!-- ORGANVM:AUTO:START -->
<!-- ORGANVM:AUTO:END -->
