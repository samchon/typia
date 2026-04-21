# 08. tsgo Master Plan — live plan

> **지위**: typia의 tsgo 대응에 관한 단일 진실원.
> 이 폴더의 문서는 `07-strategy/*` 보다 항상 우선한다.

## 먼저 알아둘 4가지

1. 지금 만들 build 제품은 **`@typia/ttsc`** 다.
2. 실행 제품은 **별도 패키지 `@typia/ttsx`** 다.
3. 지금 개발하는 위치는 **typia monorepo** 다.
4. 지금 해결할 문제는 repo 분리가 아니라 **공통 코어와 typia 어댑터의 경계 설계** 다.
5. generic `ttsc` 분리는 **안정화 이후의 추출 작업** 이다.

## 구성

| # | 문서 | 역할 |
|---|---|---|
| 00 | (이 문서) | 네비게이션 |
| 01 | [Preface](01-preface.md) | 범위와 용어 |
| 02 | [Threat Landscape](02-threat-landscape.md) | 외부 압력과 시장 |
| 03 | [Technical Foundations](03-technical-foundations.md) | 가능한 연결 모델 |
| 04 | [Strategic Options](04-strategic-options.md) | 왜 `@typia/ttsc` 경로 하나만 남는가 |
| 05 | [Recommended Path](05-recommended-path.md) | 실행 전략 |
| 06 | [ttsc Specification](06-ttsc-specification.md) | `@typia/ttsc` 제품 경계 |
| 07 | [typia-go Specification](07-typia-go-specification.md) | 내부 Go engine 범위 |
| 08 | [Implementation Timeline](08-implementation-timeline.md) | 단계별 일정 |
| 09 | [Risk Register](09-risk-register.md) | 리스크와 중단 기준 |
| 10 | [Success Criteria](10-success-criteria.md) | 측정 기준 |
| 11 | [Communication Plan](11-communication-plan.md) | 외부 메시지 |
| 12 | [Governance](12-governance.md) | 점검 체계 |
| 13 | [Appendix Facts](13-appendix-facts.md) | 수치 출처 |
| 14 | [Glossary](14-appendix-glossary.md) | 용어 통일 |
| 15 | [Executive Summary](15-executive-summary.md) | 1페이지 요약 |
| 16 | [Package Port Boundary](16-package-port-boundary.md) | 패키지별 Go/TS 결정 |
| 17 | [Phase 0 Kickoff](17-phase0-kickoff.md) | 첫 6주 실행 가이드 |
| 18 | [Phase 0 Progress Report](18-phase0-progress-report.md) | 현재 구현 진척도 |

## 이 plan의 핵심 약속

### 1. 표면 API 불변
`typia.is<T>(input)` 와 `tsconfig.json plugins` 표면은 유지한다.

### 2. 현재 제품은 `@typia/ttsc` + `@typia/ttsx`
당장은 typia 전용 build adapter와 runner로 완성한다. 이름과 저장소를 성급히 일반화하지 않는다.

### 3. 분리는 나중
공통 코어가 안정화되고 두 번째 소비자가 붙은 뒤에야 generic `ttsc` 를 분리한다.

## 읽는 순서

### 결정자
1. [15](15-executive-summary.md)
2. [16](16-package-port-boundary.md)
3. [17](17-phase0-kickoff.md)
4. [18](18-phase0-progress-report.md)

### 실행자
1. 위 4개
2. [04](04-strategic-options.md)
3. [05](05-recommended-path.md)
4. [06](06-ttsc-specification.md)
5. [08](08-implementation-timeline.md)

### 감수자
1. 위 전부
2. [03](03-technical-foundations.md)
3. [09](09-risk-register.md)
4. [13](13-appendix-facts.md)
5. [09-audit](../09-audit/)

## 07-strategy와의 관계

`07-strategy/` 는 분석 궤적 보존용이다. 현재 결정을 읽을 때는 07을 출발점으로 삼지 않는다.

## 현재 상태

- 계획 기준 문서: [15](15-executive-summary.md), [16](16-package-port-boundary.md), [17](17-phase0-kickoff.md)
- 구현 기준 문서: [18](18-phase0-progress-report.md)
- 수치 기준 문서: [13](13-appendix-facts.md)

다음 행동은 문서 추가가 아니라 **`@typia/ttsc` 코어와 `@typia/ttsx` runner 안정화, 그리고 공통 경계 정련** 이다.
