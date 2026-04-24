# 05. Stage 0 Outcome

이 문서는 원래 kickoff checklist 였다. 지금은 Stage 0에서 실제로 달성된 최소선을 기록한다.

## 달성된 것

1. `@typia/ttsc` / `@typia/ttsx` package identity 확정
2. `ttsc` / `ttsx` CLI 진입점과 JS API 표면 확보
3. `typia/lib/transform` 경로 확정
4. `typia setup` 가 legacy `ts-patch` 경로 대신 preview compiler + `@typia/ttsc` 를 설치하도록 전환
5. typia workspace 패키지들이 `ttsc` / `ttsc --watch` 기준으로 재정렬
6. `ttsx src/index.ts` 경로 확보

## 아직 남아 있는 것

1. public plugin SDK와 long-term generic contract 정제
2. second consumer 실검증
3. stable `typescript@7` lane으로의 기본 전환
4. browser/static-hosting 계열과 native host 계열의 문서 경계 정리

## Exit Criteria

- `ttsc` project build 동작: 달성
- `ttsx src/index.ts` 동작: 달성
- typia consumer 최소 경로 동작: 달성
- standalone host / runner framing 정착: 달성
- plugin contract hardening: 진행 중
