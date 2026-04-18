# 10. Ecosystem — typia · nestia · agentica · autobe (세트)

> samchon이 직접 개발·관리하는 **4 프로젝트의 피라미드 구조**. typia의 tsgo 전환은 이 세트 전체를 함께 움직인다.

## 이 폴더의 구성

| # | 문서 | 역할 |
|---|---|---|
| 00 | (이 문서) | 네비게이션 |
| 01 | [nestia 개요 + tsgo 전환](01-nestia-and-tsgo.md) | @nestia/* 8 패키지 구조 + typia와 함께 Go 전환 |
| 02 | [agentica 개요](02-agentica.md) | LLM function calling 프레임워크 (autobe가 사용) |
| 03 | [autobe 개요](03-autobe.md) | vibe coding / compiler-driven development 실증 |
| 04 | [Philosophy Pyramid](04-philosophy-pyramid.md) | typia 사상의 계층적 확장 (타입→백엔드 전체) |
| 05 | [세트 tsgo 전환 통합 계획](05-integrated-tsgo-transition.md) | 4 프로젝트의 동시 전환 일정 |

## 한 눈에 보는 관계

```
Layer 4 — 응용 (Vibe Coding)
  AutoBE                         자연어 → 백엔드 전체 생성
    ↑ (LLM agent가 호출)
Layer 3 — Agent 프레임워크
  Agentica                       LLM function calling
    ↑ (typia.llm.application 사용)
Layer 2 — 웹 프레임워크 통합
  nestia (@core + @sdk + ...)    NestJS 데코레이터 + SDK + Swagger
    ↑ (typia transformer 확장)
Layer 1 — 타입 엔진 (기반)
  typia                          타입 → 검증/직렬화/스키마/LLM/Protobuf
    ↑ (typescript-go 정복)
Layer 0 — 컴파일러
  typescript-go (Microsoft)
```

## 왜 한 세트인가

- **기술적**: 모두 `tsconfig.json plugins`에 typia transformer를 필요로 함. nestia는 독자 transformer도 추가.
- **배포적**: pnpm workspace, 동일 release 라이프사이클, 동일 ts-patch 의존
- **사상적**: "Pure TypeScript, 타입에서 모든 것" 원칙의 4단계 계층 확장
- **운영적**: samchon 한 사람이 전체 관리, autobe는 wrtnlabs 팀까지

## tsgo 전환의 함의

typia가 Go로 전환하면 **nestia·agentica·autobe도 동시 전환** 불가피:
- nestia: ts-patch 의존 제거, @nestia/core transformer를 ttsc에 통합
- agentica: typia.llm.application의 Go 구현을 그대로 소비 (표면 변화 적음)
- autobe: typia interface 소비 (표면 변화 거의 없음)

상세: [05-integrated-tsgo-transition.md](05-integrated-tsgo-transition.md)

## 현재 상태 (작성 시점)

| 프로젝트 | 저장소 | 공개/비공개 | 버전 |
|---|---|---|---|
| typia | samchon/typia | 공개 | v12.0.2 |
| nestia | samchon/nestia | 공개 | v11.0.2 |
| agentica | samchon/agentica | 공개 | (미측정) |
| autobe | wrtnlabs/autobe | private | (@autobe/agent npm 공개) |

→ 상세는 각 단원 참조.
