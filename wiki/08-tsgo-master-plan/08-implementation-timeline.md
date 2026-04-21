# 08. Implementation Timeline

> 자세한 첫 6주는 [17](17-phase0-kickoff.md), 현재 구현 상태는 [18](18-phase0-progress-report.md)를 본다.

## 원칙

1. 먼저 `@typia/ttsc` 코어와 `@typia/ttsx` runner를 typia 전용 제품으로 안정화한다.
2. 그 안에서 공통 코어와 typia 어댑터를 분리한다.
3. generic `ttsc` 분리는 마지막에 검토한다.

## Phase 0 — 2026 Q2

- `@typia/ttsc` 패키지 골격
- `@typia/ttsx` 패키지 골격
- tsgo 연결
- rewrite 기반 end-to-end
- setup/migration 초안
- 속도·sourcemap·배포 검증

출구 기준은 [17](17-phase0-kickoff.md)의 week gate를 따른다.

## Phase 1 — 2026 Q3~Q4

- validators 핵심 경로 안정화
- CLI `build/check/transform/version` 정리
- JS API 정리
- `ttsx` CJS runner 정리
- typia workspace dogfooding 시작
- 7플랫폼 빌드/배포 정착

목표: `@typia/ttsc` 가 typia preview의 실제 빌드 도구가 되는 것.

## Phase 2 — 2027 Q1~Q2

- `is/assert/validate/equals` parity 확대
- JSON 경로 본격 이식
- diagnostics/watch/incremental 정리
- `npx typia setup` 마이그레이션 자동화

목표: **typia v13 preview / stable의 최소 성립선** 확보.

## Phase 3 — 2027 Q3~Q4

- JSON 완성도 향상
- factory/createX 계열 정리
- LLM/HTTP/Misc 우선순위 재정렬
- 두 번째 소비자 후보와 공통 코어 경계 검증 시작

목표: typia 전용 구현과 공통 코어 사이의 실제 경계를 문서가 아니라 코드로 증명하는 것.

## Phase 4 — 2028 Q1~Q2

- LLM, OpenAPI, schema 계열 강화
- ecosystem dogfooding 확대
- `@typia/ttsc` API 안정화

목표: typia 중심 제품으로서는 충분히 완성된 상태에 도달하는 것.

## Phase 5 — 2028 Q3~Q4

- nestia 같은 두 번째 소비자 연결
- 공통 driver/runtime 계층 분리
- typia adapter와 공통 코어의 계약 정련

목표: generic extraction 가능성 검증.

## Phase 6 — 2029 Q1~Q2

- generic `ttsc` 분리 여부 최종 판단
- 분리 시: 코어 추출 + typia adapter 유지
- 미분리 시: `@typia/ttsc` 유지하되 내부 계층만 확정

목표는 분리 자체가 아니라 **지속 가능한 구조** 다.

## 병행 활동

- TS 6.x LTS 유지
- tsgo upstream 추적
- 시장 모니터링
- 문서·블로그·커뮤니티 소통

→ 다음 [09. Risk Register](09-risk-register.md)
