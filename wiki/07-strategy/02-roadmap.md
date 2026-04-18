# 02. 종합 로드맵 — 18개월 시간축

[06-feedback/03-improvement-proposals.md](../06-feedback/03-improvement-proposals.md)의 14개 액션 아이템과 [01-tsgo-strategy.md](01-tsgo-strategy.md)의 3-track을 한 시간축에 배치.

## Q2 2026 (현재 ~ 6월) — Quick Wins + Track 2 착수

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| **A1 Standard Schema 어댑터** | ★★★★★ | 1주 | 생태계 진입 |
| **A2 홈페이지 메시지 정렬** | ★★★★ | 며칠 | 인지 |
| A10 SDK 어댑터 안정화 (CI 매주 latest) | ★★ | 며칠 | 격리 |
| A13 Edge 런타임 호환성 표 | ★★ | 며칠 | 신뢰 |
| **Track 2-A**: typia generate CLI 재설계 (watch, partial, hash) | ★★★★★ | 3주 | 미래 |
| **공식 tsgo 입장문** 발표 | ★★★★ | 1일 | 신뢰 |

**Q2 산출물**: 
- `~standard` 어댑터 출시 → Zod 종속 생태계 진입
- 홈페이지 첫 인상 = "사상" (속도는 증거로)
- `typia generate` 강화 시작 (watch + partial regeneration)

## Q3 2026 (7~9월) — Track 2 본격화 + 마이그레이션 자료

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| **Track 2-B**: Generate 모드 API 설계 (typia.config.ts) | ★★★★★ | 2주 | 미래 |
| **Track 2-C**: VS Code extension (interface 변경 시 자동 generate) | ★★★★ | 2주 | DX |
| A4 마이그레이션 가이드 3종 (class-validator/zod/joi → typia) | ★★★★ | 2주 | 채택 |
| A6 unplugin 1급 시민화 (setup 페이지 권장 순서 변경) | ★★★ | 1주 | tsgo 대비 |
| A3 setup 자동화 1단계 (`typia init` 한 줄) | ★★★★ | 1주 | 채택 |
| A12 Format 사용자 확장 prototype | ★★★ | 3주 | DX |

**Q3 산출물**:
- Generate 모드가 사용 가능한 형태 (typia v12.x → v13 베타)
- 마이그레이션 가이드 3종
- `typia init` 한 줄 setup
- 사용자 정의 Format 가능

## Q4 2026 (10~12월) — Track 2 정식 출시 + 회귀 인프라

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| **Track 2-D**: 마이그레이션 가이드 (transformer → generate) + codemod | ★★★★★ | 3주 | 미래 |
| **Track 2-E**: typia v13 출시 (generate 1급 시민) | ★★★★★ | 1주 | 미래 |
| A5 회귀 테스트 + 시계열 벤치 | ★★★★ | 2주 | 품질 |
| A7 RSC / Server Action / Hono / Tanstack 통합 가이드 | ★★★ | 2주 | 트렌드 |
| A9 LLM 호환성 자동 검증 (분기 1회 smoke test) | ★★★ | 3주 | 품질 |

**Q4 산출물**:
- **typia v13** — generate 모드 정식 (transformer는 옵션으로 공존)
- 회귀 인프라 (snapshot + 시계열 벤치)
- 7개 통합 가이드 추가

## Q1 2027 (1~3월) — Track 3 prototype 시작 + tsgo 추적

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| TS 7.0 GA 직후 typia 호환 발표 | ★★★★★ | 1주 | 신뢰 |
| **Track 3-A** tsgo API 모니터링 강화 | ★★★★ | 지속 | 미래 |
| **Track 3-B** MetadataFactory의 tsgo IPC 어댑터 prototype | ★★★★★ | 6~8주 | 미래 |
| A11 OpenAPI 3.2 정식 지원 | ★★ | 1개월 | 미래 |
| A14 거대 파일 리팩토링 1차 (CheckerProgrammer 분리) | ★★★ | 2개월 | 유지보수 |

**Q1 산출물**:
- TS 7.0 호환 가이드 (TS 6 LTS + Track 2 generate)
- Track 3 prototype repo (별도 브랜치)

## Q2 2027 (4~6월) — Track 3 prototype 완성

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| **Track 3-C** 빌드 통합 재설계 (out-of-process codegen) | ★★★★★ | 2개월 | 미래 |
| Track 3 dogfooding (typia 자체 → AutoBE/Agentica) | ★★★★★ | 1개월 | 검증 |
| TS 6.x 지원 종료 일정 공지 (2028 말) | ★★★ | 1주 | 신뢰 |
| A14 거대 파일 리팩토링 2차 (RandomProgrammer, JsonStringifyProgrammer) | ★★ | 2개월 | 유지보수 |

## Q3-Q4 2027 — Track 3 production 검증

| 항목 | 우선 |
|---|---|
| Track 3 production 안정화 | ★★★★★ |
| 호환성 매트릭스 자동화 (TS 6 / TS 7 / esbuild / swc / vite / webpack / rspack) | ★★★★ |
| typia v14 alpha (tsgo native) | ★★★★ |
| 컨퍼런스 발표 ("Pure TypeScript in the Age of Tsgo") | ★★★ |

## 2028 — 새 시대 정착

- typia v14 정식 (tsgo native + TS 6.x 호환)
- ts-patch 모드 deprecation 공지
- TS 6.x 지원 종료 (말)

---

## 누적 효과 — 18개월 후 typia 모습

```
사용자가 보는 typia (2027 말):

  npm i -D @typia/core
  npx typia init  # 한 줄 setup
  
  // typia.config.ts
  export default {
    mode: "generate",            // or "transformer" (v12까지의 방식)
    target: "esm",
    output: "co-located",
    standardSchema: true,        // ~standard 어댑터 자동
  };

  // src/Member.ts
  export interface Member { ... }
  
  // src/Member.generated.ts (자동 emit, watch로 자동 갱신)
  export const isMember, assertMember, validateMember, ...;
  
  // 사용
  import { isMember } from "./Member.generated";
  if (!isMember(input)) ...;
  
  // 또는 zod와 호환되는 곳에서:
  import { validateMember } from "./Member.generated";
  // validateMember는 ~standard 인터페이스 구현 → MCP/AI SDK/Hono 등에 그대로 사용
```

지원 환경:
- TypeScript 6.x (LTS 모드)
- TypeScript 7.x (Tsgo, native)
- esbuild / swc / Bun (generate는 빌드 도구 무관)
- Vite / Webpack / Rspack / Esbuild / Rolldown / Bun / Next / Hono / Tanstack Start

---

## 이 로드맵의 한 줄 약속

> **18개월 안에 typia는 "transformer 시대"에서 "generate 1급 + transformer 옵션 + tsgo 호환" 시대로 이행한다. 사상은 양보하지 않는다.**

→ 다음 [03. 포지셔닝과 메시징 액션](03-positioning-actions.md)
