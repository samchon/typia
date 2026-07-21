---
name: documentation
description: Defines README, website-guide, and agent-instruction structure, audience, prose formatting, and voice for typia. Use before writing, modifying, renaming, or moving repository documentation.
---

# Documentation

## READMEs

README files are for the final reader of that package or directory. Start with what it is, when to use it, installation, the smallest working setup, and the common path.

Keep README language direct and practical. Avoid compiler theory, protocol details, internal architecture, and edge cases unless the reader must know them to use the package. Move deep explanations into the website guides and link them only as the next step.

## Guide Documents

User-facing guides live under `website/src/content/docs/**` as MDX and publish at https://typia.io/docs. The site uses Next.js and Nextra, exports a static site, and deploys to GitHub Pages. Keep one audience and one task per page.

The current tree is organized by feature area:

- top-level pages `index.mdx`, `setup.mdx`, `pure.mdx`, `random.mdx`, and `misc.mdx` cover introduction, setup, and cross-cutting features;
- `validators/`, `json/`, `protobuf/`, and `llm/` own their operation guides; and
- `utilization/` owns framework integrations for MCP, Vercel AI SDK, LangChain, NestJS, tRPC, and Hono.

The root and each guide folder use `_meta.ts` for sidebar order and labels. Nextra reads keys in declaration order; `{ display: "hidden" }` keeps a page reachable while removing it from the sidebar. Update the matching `_meta.ts` whenever a guide is added, renamed, moved, hidden, or exposed.

When emitted code is the point, pair the TypeScript source with its compiled JavaScript in side-by-side tabs so the reader can see what the transform replaces. Back performance claims with a specific benchmark result instead of an adjective. Follow the fresh website-build prerequisites in `.agents/skills/development/SKILL.md`.

## Agent Instructions

`AGENTS.md` and `SKILL.md` files are operational documents for humans and agents. Keep only the product-wide contract in `AGENTS.md`, the always-applicable procedure in `SKILL.md`, and conditional detail in a linked sibling document.

Concise and clear means:

- Include the context needed to act correctly. Do not make the reader infer prerequisites, exceptions, reasons, or stop conditions merely to shorten the document.
- State each rule at its owning document and link to it elsewhere. Remove repeated wording, not necessary substance.
- Give each paragraph one job. Separate purpose, rule, rationale, procedure, and consequence when combining them obscures the action.
- Use structure to compress meaning: ordered lists for procedures, bullets for choices and checks, tables for repeated mappings, and code blocks for exact commands.
- State the rule before its reason. Use a negative rule only when it prevents a named failure the affirmative rule does not already exclude.
- Link to website guides, READMEs, or source comments instead of paraphrasing them.

## Prose line breaks

Write each Markdown or MDX paragraph on one source line. Never hard-wrap a single paragraph at a fixed column: Markdown already soft-wraps it, while manual wrapping makes small edits reflow unrelated lines.

One source line does not mean one long paragraph. Insert a blank line whenever the idea changes. Keep structural line breaks for paragraphs, list items, headings, tables, and fenced code.

This is a manual convention, not a formatter gate. Root `pnpm format` runs Prettier over `**/*.ts` and formats changed Go files; it does not format `*.md` or `*.mdx`, and the repository does not set `proseWrap`. Preserve one-line paragraphs yourself.

## Voice

Write in the plain, direct, technical voice of the human-authored typia docs. Do not write like an AI assistant.

- No AI-cliche phrasing: "not only X but also Y", "whether you're X or Y", "it's worth noting", "let's dive in", and reflexive hedging.
- No marketing adjectives such as "seamless", "powerful", "robust", or "effortless". State the behavior; where speed is the point, cite the benchmark.
- No wrap-up sentence that just restates the paragraph. State the fact and stop.
- Em-dashes already fit the existing typia prose; do not remove them mechanically or impose a punctuation ban.
- Sidebar emoji in `_meta.ts` are part of the existing navigation voice. Keep them where they already fit; this exception does not turn guide prose into decorative copy.
