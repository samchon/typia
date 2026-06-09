---
name: documentation
description: READMEs and the website guides. Read before writing or modifying docs.
---

# Documentation

Read before writing or modifying docs.

## READMEs

README files are for the final reader of that package or directory. Start with what it is, when to use it, installation, the smallest working setup, and the common path. Keep the language direct and practical. Move compiler internals, protocol details, and edge cases into the website guides and link them as the next step.

## Guide Documents

User-facing guides live under `website/src/content/docs/**` as MDX and publish to https://typia.io/docs. The site is built with Next.js + Nextra (docs theme), exported as a static site, and deployed to GitHub Pages. One audience, one task per page.

The tree is organized by feature area: top-level pages (`index.mdx`, `pure.mdx`, `random.mdx`, `misc.mdx`) for cross-cutting topics, `setup/` for installation and toolchain choices, and per-feature folders (`validators/`, `json/`, `protobuf/`, `llm/`) for the operation guides, plus `utilization/` for framework integrations (NestJS, tRPC, Hono, MCP, Vercel AI SDK, LangChain). Each folder owns a `_meta.ts` that sets sidebar order and labels (Nextra reads it as the source of truth; keys appear in declared order, and `{ display: "hidden" }` keeps a page reachable but off the nav). Update the matching `_meta.ts` when adding, renaming, or moving a guide. `llm/` runs deepest: beyond its operation guides it holds the adapter-architecture and integration patterns that `utilization/` only wires up.

Pages pair a TypeScript source block with its compiled JavaScript in side-by-side tabs so the reader sees what the transform emits. Performance claims are backed by benchmark numbers, not adjectives.

## Prose line breaks

Write Markdown and MDX prose as one line per paragraph, matching the existing docs; never hard-wrap at a fixed column. Markdown soft-wraps on render, so a manual line break mid-paragraph changes nothing visible while making diffs noisy and edits awkward. Keep real line breaks only for paragraph boundaries, list items, headings, tables, and fenced code.

This is a hand-maintained convention, not a format gate: `pnpm format` runs `prettier --write "**/*.ts"` plus the Go formatter and does **not** touch `*.md` / `*.mdx`, and the prettier config sets no `prose-wrap`. Keep the one-line-per-paragraph shape yourself.

## Voice

Write in the plain, direct, technical voice of the human-authored docs in this repo. Do not write like an AI assistant.

- No AI-cliche phrasing: "not only X but also Y", "whether you're X or Y", "it's worth noting", "let's dive in", and reflexive hedging.
- No marketing adjectives ("seamless", "powerful", "robust", "effortless"). State the behavior; where speed is the point, cite the benchmark instead of praising it.
- No wrap-up sentence that just restates the paragraph. State the fact and stop.

(Em-dashes and the emoji used in `_meta.ts` sidebar labels match the existing docs — keep them where they already fit. The point is plain, accurate prose, not a punctuation ban.)
