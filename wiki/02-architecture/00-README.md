# 02. 아키텍처 (Architecture)

현재 typia 구현 구조를 설명한다. 전환 계획은 [08-tsgo-master-plan/](../08-tsgo-master-plan/)에서 다룬다.

## 읽기 순서

1. [01-overview.md](01-overview.md) — 한 장의 그림 (typia 내부)
2. [02-data-flow.md](02-data-flow.md) — 한 호출이 코드가 되기까지 (9단계)
3. [03-package-graph.md](03-package-graph.md) — 현행 9개 패키지 의존 그래프 (`@typia/ttsc` 제외)
4. [04-transformation-pipeline.md](04-transformation-pipeline.md) — `ttsc` 기본 경로와 `@typia/unplugin` 대체 경로 (현재)

## 핵심 한 줄

> 4개 박스(빌드 통합 / AST 어댑터 / 메타데이터 분석 / 코드 생성)로 깨끗히 분리. 가운데에 자체 IR(MetadataSchema). TypeScript 호환성 표면이 한 박스에 격리.

## 현재 vs 미래 (요약)

| | 현재 | 전환 후 목표 |
|---|---|---|
| 빌드 도구 | `typia setup` → `@typescript/native-preview` + `@typia/ttsc`, 또는 `@typia/unplugin` | `typescript@7` + `@typia/ttsc` |
| 엔진 | @typia/core 30,307 + transform 4,306 = 34,613 LOC (9 패키지 합계 64,678 LOC) | Go 100~150K LOC (ttsc 내장) |
| 사용자 API | `typia.is<T>(input)` | **동일** |
| tsconfig plugins | `typia/lib/ttsc/plugin` 기본, `typia/lib/transform` 는 compatibility alias | 같은 host plugin 계약 유지 |
| 설치 | `npm i typia` + `npx typia setup` | preview compiler 제거 후 같은 setup 흐름 |
