# Mega-cycle 3 — 외부 래퍼런스 심층 대조

> 상태: 대기 중
> 입력: `../mega-cycle-2/01-*.md` ~ `06-*.md`
> 산출: `mega-cycle-3/01-*.md` ~ `06-*.md`

## Mega-3 의 고유 임무

Mega-1/2 에서도 인용된 외부 래퍼런스 (tsgonest, tsgolint, effect-ts, typical, typescript-go) 를 **다시 한 번, 더 깊이** 정독하여 Mega-2 규약과 대조한다. 외부 프로젝트가 이미 풀어놓은 문제를 우리가 재발명하거나, 외부가 피한 함정에 우리가 빠지지 않도록.

## 외부 래퍼런스 독파 스코프 (에이전트별)

| 역할 | 추가 심층 독파 대상 |
|------|-------------------|
| A Boundary | tsgonest 패키지 토폴로지 8 개 + 마이그레이션 전략 실증 |
| B Go Engine | typical (Go 기반 typia 클론) 전량, typescript-go checker internals 재독 |
| C ttsc Driver | tsgolint `gen_shims`·linkname 896 + effect-ts 23 patches 의 각 patch 목적 |
| D TS Facade | tsgonest facade, effect-ts Effect library 사용자 API 의 TS 층 |
| E QA/Test | tsgolint test infra, effect-ts CI 매트릭스 |
| F Release/DX | tsgolint 멀티플랫폼 릴리스 yaml, tsgonest OIDC trusted publishing 상세 |

## Sub-1 에이전트 프롬프트 요지

- 입력: Mega-2 최종본 + 외부 레퍼런스 심층 독파
- 임무: "외부가 이미 풀어둔 문제인데 우리 규약은 재발명 중인가? 외부가 피한 함정을 우리가 밟는가?" 를 각 규약마다 대조
- 산출: `mega-cycle-3/cycles/cycle-01-X-external-compare.md`

## 대조 결과 분류

- **수용**: 외부 모델을 채택하여 우리 규약 수정
- **거부**: 외부 모델이 우리 맥락에 안 맞음 → 명시적 근거 기록
- **혼합**: 부분 채택

모든 결정은 "왜" 와 "출처 파일 경로·commit hash" 를 남긴다.

## Sub-2, 3, 4, 5 — 표준 절차

## 진행 상태

- [ ] Sub-1
- [ ] Sub-2
- [ ] Sub-3
- [ ] Sub-4
- [ ] Sub-5
