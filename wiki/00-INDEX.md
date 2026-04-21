# typia wiki — 읽기 가이드

> 개정: 2026-04-20
> 범위: typia 본체, tsgo 전환 계획, 생태계 전환, 감수 기록
> 규모: 108 문서

## 단일 진실원

| 주제 | 위치 | 메모 |
|---|---|---|
| 현재 계획 | [08-tsgo-master-plan/](08-tsgo-master-plan/) | 가장 먼저 봐야 하는 live 문서 |
| 생태계 확장 | [10-ecosystem/](10-ecosystem/) | nestia·agentica·autobe 연결 |
| 감수 기록 | [09-audit/](09-audit/) | 반론, 누락, 수치 검증 |
| 역사 문서 | [07-strategy/](07-strategy/) | 보존용. 현재 진실 아님 |

충돌 시 **08 → 10 → 09 → 07** 순으로 우선한다.

## 가장 빠른 읽기 순서

### 결정자
1. [08/15 — Executive Summary](08-tsgo-master-plan/15-executive-summary.md)
2. [08/16 — Package Port Boundary](08-tsgo-master-plan/16-package-port-boundary.md)
3. [08/17 — Phase 0 Kickoff](08-tsgo-master-plan/17-phase0-kickoff.md)
4. [08/18 — Phase 0 Progress Report](08-tsgo-master-plan/18-phase0-progress-report.md)
5. [10/00 — Ecosystem README](10-ecosystem/00-README.md)

### 실행자
1. 위 5개
2. [08/04 — Strategic Options](08-tsgo-master-plan/04-strategic-options.md)
3. [08/05 — Recommended Path](08-tsgo-master-plan/05-recommended-path.md)
4. [08/06 — ttsc Specification](08-tsgo-master-plan/06-ttsc-specification.md)
5. [08/08 — Implementation Timeline](08-tsgo-master-plan/08-implementation-timeline.md)
6. [10/01 — nestia and tsgo](10-ecosystem/01-nestia-and-tsgo.md)

### 감수자
1. 위 전부
2. [08/13 — Appendix Facts](08-tsgo-master-plan/13-appendix-facts.md)
3. [09/00 — Audit README](09-audit/00-README.md)
4. [09/06 — Repository Measurements](09-audit/06-cycle6-repository-measurements.md)
5. [09/09 — Phase 0 Critical Review](09-audit/09-cycle9-phase0-critical-review.md)

## 현재 방향 한 줄

- 현재 제품명과 배포 단위는 **`@typia/ttsc`** 다.
- 현재 개발 단위는 **typia monorepo** 다.
- **최종 설치 계약**은 **공식 compiler와 `@typia/ttsc` 의 side-by-side** 다.
  - preview 기간: `@typescript/native-preview` + `@typia/ttsc`
  - 7.0 GA 이후: `typescript@7` + `@typia/ttsc`
- 현재 구현 방향의 **Phase 0 spike** 는 **Go native backend + JS plugin host** 다. 이것은 standalone `ttsc` / `ttsx` 를 typia monorepo 안에서 검증하는 과도기 구현이다.
- typia는 이 host 위에 올라가는 **첫 built-in consumer plugin** 이다.
- 따라서 지금 시점의 질문은 “typia 전용으로 둘까”가 아니라 **standalone host 계약을 monorepo 안에서 어떻게 검증할까** 다.

## 폴더 지도

| 폴더 | 역할 |
|---|---|
| `01-philosophy/` | typia 사상 해석 |
| `02-architecture/` | 현행 v12 구조 |
| `03-packages/` | 현행 패키지 분석 (`@typia/ttsc` 이전 상태 중심) |
| `04-features/` | 사용자 기능별 정리 |
| `05-research/` | 외부 사실 자료 |
| `06-feedback/` | 감수 반영 기록 |
| `08-tsgo-master-plan/` | tsgo 대응 live plan |
| `09-audit/` | 공격적 감수와 수치 검증 |
| `10-ecosystem/` | nestia·agentica·autobe 연결 |
| `07-strategy/` | 과거 설계 기록 보존용 |
| `memo/` | 작업 로그 |

## 지금 기준 핵심 결론

### ttsc
- 지금 구현하는 것은 typia monorepo 안에 있는 **`ttsc` host / `ttsx` runner package pair** 다.
- 현재 배포 이름은 `@typia/ttsc`, `@typia/ttsx` 지만 역할은 **standalone host / runner** 다.
- `@typia/ttsc` 는 **공식 compiler를 재사용하는 adapter + plugin host** 다.
- `@typia/ttsx` 는 **별도 runner package** 로 두고, 내부적으로 `@typia/ttsc` host를 재사용한다.
- typia는 그 위의 **첫 consumer plugin** 으로 취급한다.

### 패키지 경계
- **TS 유지**: `@typia/interface`, `@typia/typia`, 런타임 성격의 `@typia/utils`, LLM adapter 패키지들
- **Go 이전**: `@typia/core`, `@typia/transform`
- **얇게 유지**: `@typia/unplugin`, setup/migration facade

### 생태계
- typia가 첫 consumer 로 `ttsc` / `ttsx` 를 dogfood 한다.
- 그 다음 nestia 같은 두 번째 소비자를 붙여 공통 host 경계를 검증한다.
- 배포 이름 / 저장소 경계는 그 검증 뒤에 조정할 수 있지만, **host 정체성 자체는 지금부터 generic** 으로 본다.

## 주의

- `07-strategy/` 는 역사 자료다. 사실 참고는 가능하지만 live 의사결정 문서로 쓰지 않는다.
- 수치는 [08/13](08-tsgo-master-plan/13-appendix-facts.md)를 단일 출처로 본다.
- 현재 구현 진척도는 [08/18](08-tsgo-master-plan/18-phase0-progress-report.md)가 가장 최신이다.

질문·추가 분석은 메인 대화로.
