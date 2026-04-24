# 10. Ecosystem — typia · nestia · agentica · autobe (세트)

typia를 중심으로 연결된 4개 프로젝트를 다룬다.

주의:

- typia 쪽 `ttsc` / `ttsx` 전환은 이미 현재 repo 안에서 실현되었다.
- 이 폴더의 나머지 문서는 downstream consumer 들의 정렬 방향과 설계 메모를 포함한다.
- 따라서 precise calendar, launch-day 서술, 다프로젝트 동시 릴리스 문구는 **계약**이 아니라 **ecosystem planning note** 로 읽어야 한다.

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

## 왜 같이 보나

- typia가 공통 기반이다.
- nestia는 transformer와 schema를 직접 소비한다.
- agentica와 autobe는 typia의 LLM 경계를 소비한다.
- tsgo 전환 영향이 네 프로젝트에 연결된다.

## tsgo 전환의 함의

typia가 Go로 전환하면 **nestia·agentica·autobe도 동시 전환** 불가피:
- nestia: legacy `ts-patch` 의존 제거, `@nestia/core` transformer를 `ttsc` host/plugin 모델로 재배치
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
