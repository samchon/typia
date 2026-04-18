# 02. 종합 로드맵 — 24개월 시간축 (v2)

> v1 (초안)은 Track 2(Generate 모드)를 중심에 두었으나 철회. v2는 **ttsc 개발을 핵심 축**으로 [06-feedback/03-improvement-proposals.md](../06-feedback/03-improvement-proposals.md)의 14개 액션과 [01-tsgo-strategy.md](01-tsgo-strategy.md)의 3-track을 한 시간축에 재배치.

## Q2 2026 (현재 ~6월) — 공식 입장 + Quick Wins + ttsc 착수

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| **공식 tsgo 입장문 발표** ([03-positioning-actions.md](03-positioning-actions.md)) | ★★★★★ | 1주 | 매우 큼 |
| **ttsc Phase 0 spike** (2주) — go/no-go 결정 | ★★★★★ | 2주 | 매우 큼 |
| **A1 Standard Schema 어댑터** | ★★★★★ | 1주 | 생태계 |
| **A2 홈페이지 메시지 정렬** | ★★★★ | 며칠 | 인지 |
| A10 SDK 어댑터 안정화 (매주 latest CI) | ★★ | 며칠 | 격리 |
| A13 Edge 런타임 호환성 표 | ★★ | 며칠 | 신뢰 |

## Q3 2026 (7~9월) — ttsc Phase 1 + 마이그레이션 자료

| 항목 | 우선 | 비용 | 영향 |
|---|---|---|---|
| **ttsc Phase 1 (Walking Skeleton)** | ★★★★★ | 3개월 full | 미래 |
| A4 마이그레이션 가이드 3종 (class-validator/zod/joi → typia) | ★★★★ | 2주 | 채택 |
| A6 unplugin 1급 시민화 | ★★★ | 1주 | tsgo 대비 |
| A3 `typia init` 한 줄 setup | ★★★★ | 1주 | 채택 |
| A12 Format 사용자 확장 prototype | ★★★ | 3주 | DX |

## Q4 2026 — ttsc Phase 2 + 회귀 인프라

| 항목 | 우선 |
|---|---|
| **ttsc Phase 2 (typia full compatibility)** | ★★★★★ |
| A5 회귀 테스트 + 시계열 벤치 | ★★★★ |
| A7 RSC / Server Action / Hono / Tanstack 가이드 | ★★★ |
| A9 LLM 호환성 자동 검증 (분기 smoke test) | ★★★ |

**마일스톤**: ttsc가 typia test suite 전부 통과. **ttsc 0.5 alpha** 출시 가능.

## Q1 2027 (TS 7.0 GA 무렵) — ttsc Phase 3 시작

| 항목 | 우선 |
|---|---|
| TS 7.0 GA 직후 typia 호환 발표 (TS 6 LTS + ttsc 0.x alpha) | ★★★★★ |
| **ttsc Phase 3 (Production Hardening)** — watch/cache/diagnostics | ★★★★★ |
| A11 OpenAPI 3.2 정식 지원 | ★★ |
| A14 거대 파일 리팩토링 1차 (CheckerProgrammer) | ★★★ |

**마일스톤**: ttsc 0.9 beta 릴리스. 얼리어답터 초대.

## Q2 2027 — ttsc Phase 4 + 일반 공개

| 항목 | 우선 |
|---|---|
| **ttsc Phase 4 (Launch)** — typia setup 자동화, 사용자 beta, v1.0 | ★★★★★ |
| **typia v13** — ttsc 1급 지원 | ★★★★★ |
| TS 6.x 지원 종료 일정 공지 (2028 말) | ★★★ |
| A8 거대 파일 리팩토링 2차 (RandomProgrammer, JsonStringifyProgrammer) | ★★ |

## Q3 2027 — ttsc v1.0

- **ttsc v1.0 출시**
- typia v13.x 일반 채택
- 컨퍼런스 발표 (TSConf, Korea JS Conference)

## Q4 2027 — 생태계 확장

- ts-runtime-checks 등 타 transformer 라이브러리와 ttsc 호환 검증
- ttsc v1.1 (tsserver 지원, LSP 통합)
- Microsoft 공식 API 진전 모니터링

## 2028 — 새 시대 정착

- Microsoft 공식 transformer API 출시 시 → ttsc 내부 교체 (사용자 불변)
- TS 6.x 지원 종료 (말)
- typia v14 (tsgo native 완전 정착)
- ts-patch fork (samchon의) deprecation 완료

---

## 누적 효과 — 24개월 후 typia + ttsc 모습

```
사용자가 보는 typia (2028):

  # Setup
  npm i -D typescript@7 typia
  npx typia setup
  # → typia 감지: TS 7 → @typia/ttsc 자동 설치 → tsconfig 자동 구성
  
  # 사용자 코드 — 완전 불변
  interface Member { 
    id: string & tags.Format<"uuid">;
    email: string & tags.Format<"email">;
  }
  typia.is<Member>(input);
  typia.json.stringify<Member>(member);
  typia.llm.application<MyClass>();
  
  # 빌드
  npm run build  # 내부적으로 ttsc 실행
```

지원 환경:
- TS 6.x (2028 말까지 LTS)
- TS 7 tsgo (ttsc 경로)
- Vite / Webpack / Rspack / esbuild / Rolldown / Bun / Next / Tanstack Start (unplugin 경로, 대안)

## 이 로드맵의 약속

> **24개월 안에 typia는 "ts-patch 시대" → "ttsc + tsgo 시대"로 이행한다. 사상은 양보하지 않고, 사용자 경험은 바뀌지 않는다. 변하는 건 내부 인프라뿐.**

→ 다음 [03. 포지셔닝과 메시징 액션](03-positioning-actions.md)
