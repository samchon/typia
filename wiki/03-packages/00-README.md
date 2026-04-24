# 03. 패키지별 깊은 분석

이 섹션은 현재 typia 본체 패키지군을 다룬다. TypeScript legacy transformer 패키지였던 `@typia/core` / `@typia/transform` 은 제거되었고, native backend 문서만 남긴다.

## 읽기 순서

1. [01-interface.md](01-interface.md) — 0-dep 순수 타입 (모든 패키지의 ABI)
2. [02-core.md](02-core.md) — `packages/core/native` analyzer/emitter
3. [03-transform.md](03-transform.md) — `packages/transform/native` ttsc adapter
4. [04-typia-utils-unplugin.md](04-typia-utils-unplugin.md) — 사용자 진입 + 런타임 헬퍼 + 번들러 통합
5. [05-llm-integrations.md](05-llm-integrations.md) — mcp/langchain/vercel 어댑터 3종
6. [06-website.md](06-website.md) — 문서/플레이그라운드/블로그
