# cycles — 5 사이클 토의 기록

본 폴더는 6 역할 × 5 사이클 토의의 **원본 기록**이다. 최종 규약은 한 단계 위 `conventions/01-*.md` ~ `06-*.md` 에 정리된다. 이곳의 내용은 개정 이력·근거·반대의견을 보존하기 위해 수정하지 않는다 (오탈자 제외).

## 색인

| 사이클 | 파일 |
|--------|------|
| 1. 초안 | `cycle-01-A-boundary.md`, `-B-go-engine.md`, `-C-ttsc-driver.md`, `-D-ts-facade.md`, `-E-testing.md`, `-F-release-dx.md` |
| 2. 교차 리뷰 | `cycle-02-*.md` (6편) |
| 3. 개정 | `cycle-03-*.md` (6편) |
| 4. 통합 감수 | `cycle-04-integration.md` |
| 5. 최종 회의록 | `cycle-05-summary.md` |

## 에이전트 참조 자료 공통

모든 역할의 에이전트가 사이클 진입 전 line-by-line 독파 대상:

**wiki 본편**
- `wiki/00-INDEX.md` — wiki 전체 지도
- `wiki/08-tsgo-master-plan/00~18` — 단일 진실원 19편
- `wiki/09-audit/00~09` — 독립 감수 10편
- `wiki/10-ecosystem/00~05` — 세트 생태계 6편

**코드 본체**
- `packages/ttsc/` — Phase 0 실구현 (Go + TS)
- `packages/core/src/` — 구 v12 core (Go 이식 원본)
- `packages/transform/src/` — 구 v12 transform (ttsc driver 흡수 대상)
- `packages/typia/src/` — 사용자 facade
- `packages/interface/src/` — 타입 전용

**외부 레퍼런스 (clone 위치: `/mnt/d/github/contributions/`)**
- `microsoft/typescript-go` — tsgo 본체
- `typescript-eslint/tsgolint` — shim 모델 (896 linkname)
- `effect-ts/effect` — patch 모델 (23 patches)
- `samchon/tsgonest` — 경쟁자 (72K Go, 3 patches)
- `elliotnb/typical` — 또 다른 typia Go 클론
