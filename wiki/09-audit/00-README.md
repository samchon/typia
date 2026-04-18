# 09. Audit — 독립 감수 결과

> 이 폴더는 **wiki 전체에 대한 독립 감수 에이전트 7개의 비판 보고**. 저자(AI) 옹호 없이 공격적으로 수행됨.

## 핵심 교훈

1. **wiki는 "정직한 감수"라 자칭했으나 실제로는 AI 호의적 편향 존재**
2. **사실 수치 오차 다수** (tsgolint linkname 896→910, Effect patch 24→23, typia LOC 34K→50K, Tag 11→~21)
3. **내부 모순 존재** (S10 vs 비판 8, S2 vs W5, "0-dep" vs 실제 devDep)
4. **의사결정 매트릭스는 post-hoc rationalization** — 점수·가중치 자의적
5. **v1/v2 불일치** — ttsc 설계 일부만 v2 업데이트
6. **누락 관점** — Edge runtime 승리, Standard Schema 1시간 아닌 2-3주, MS 적대 정책 리스크 등

## 문서

1. [01-cycle1-philosophy-architecture.md](01-cycle1-philosophy-architecture.md) — 철학·아키·패키지 (F1~F10)
2. [02-cycle2-features-research.md](02-cycle2-features-research.md) — 기능·연구 사실
3. [03-cycle3-feedback-honesty.md](03-cycle3-feedback-honesty.md) — 피드백 편향
4. [04-cycle4-ttsc-design.md](04-cycle4-ttsc-design.md) — ttsc v1/v2 불일치
5. [05-cycle5-decision-matrix.md](05-cycle5-decision-matrix.md) — 의사결정 근거 빈약
6. [06-cycle6-repository-measurements.md](06-cycle6-repository-measurements.md) — 저장소 실측
7. [07-cycle7-missing-perspectives.md](07-cycle7-missing-perspectives.md) — 누락된 14개 관점

## master plan 반영 상태

모든 감수 결과는 [08-tsgo-master-plan/](../08-tsgo-master-plan/) 에 반영됨. master plan은 이 감수 결과를 기반으로 재작성된 **정직한 단일 진실원**.
