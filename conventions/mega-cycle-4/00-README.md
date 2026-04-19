# Mega-cycle 4 — 코드 line-by-line 재검증

> 상태: 대기 중
> 입력: `../mega-cycle-3/01-*.md` ~ `06-*.md`
> 산출: `mega-cycle-4/01-*.md` ~ `06-*.md`

## Mega-4 의 고유 임무

Mega-3 까지 규약은 문서상 촘촘해졌다. 이제 **실제 코드 한 줄 한 줄**이 규약을 따르는지 검증한다. 규약과 실제 코드 사이 괴리를 전수 조사하여:
1. 코드가 규약을 따르고 있는가? (따르지 않으면 코드 수정 필요 항목 — 단 Mega-4 는 규약 수정이 주 업무, 실제 코드 수정은 별도 PR)
2. 규약이 코드 현실에 맞지 않는 부분? (규약 수정 필요)
3. 규약이 없는데 코드에 정착된 암묵 규칙? (명문화 대상)

## 각 역할 실코드 스윕 범위

| 역할 | 실코드 sweep 대상 |
|------|------------------|
| A Boundary | 9 패키지 package.json + pnpm-workspace.yaml + import 경로 실측 |
| B Go Engine | `packages/ttsc/internal/engine/` 전량 + 원본 `packages/core/src/` 대조 |
| C ttsc Driver | `packages/ttsc/internal/driver/` + `engine/emitter/` + `shim/` 전량 + 원본 `packages/transform/src/` |
| D TS Facade | `packages/typia/src/` 전량 + `interface/` + `utils/` + LLM 3 어댑터 |
| E QA/Test | 기존 테스트 전수 (`tests/`, ttsc `_test.go`, `tests/test-typia-ttsc/`, benchmark) |
| F Release/DX | `.github/workflows/` 6 파일 + `next.bash` + `bin/ttsc.js` + platform 스크립트 |

## Sub-1 임무

**"규약-코드 괴리 스윕"**. 각 에이전트는 자기 역할의 모든 코드 파일에 대해:
- 파일:라인 단위로 규약 위반/준수 판정
- 위반 발견 시 "규약을 코드에 맞출지, 코드를 규약에 맞출지" 결정 (이유 포함)
- 괴리 보고서 + 규약 개정 제안

산출: `mega-cycle-4/cycles/cycle-01-X-code-audit.md`

## Sub-2, 3, 4, 5 — 표준 절차

## 진행 상태

- [ ] Sub-1
- [ ] Sub-2
- [ ] Sub-3
- [ ] Sub-4
- [ ] Sub-5
