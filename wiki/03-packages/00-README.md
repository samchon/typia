# 03. 패키지별 깊은 분석

> 범위: 이 섹션은 typia v12의 **현행 9개 패키지**를 다룬다. 신규 전환 드라이버 `@typia/ttsc`는 현재 운영 패키지 분석이 아니라 [08-tsgo-master-plan/](../08-tsgo-master-plan/)에서 별도로 다룬다.

## 읽기 순서 (의존도 낮은 것 → 높은 것)

1. [01-interface.md](01-interface.md) — 0-dep 순수 타입 (모든 패키지의 ABI)
2. [02-core.md](02-core.md) — 메타데이터 + 코드 생성 본체 (★ 가장 큼)
3. [03-transform.md](03-transform.md) — transformer host 어댑터
4. [04-typia-utils-unplugin.md](04-typia-utils-unplugin.md) — 사용자 진입 + 런타임 헬퍼 + 번들러 통합
5. [05-llm-integrations.md](05-llm-integrations.md) — mcp/langchain/vercel 어댑터 3종
6. [06-website.md](06-website.md) — 문서/플레이그라운드/블로그
