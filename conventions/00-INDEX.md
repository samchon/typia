# typia conventions — tsgo 대응 구현 규약 (끝장 토론 체제)

> 시작: 2026-04-19
> 성격: 6 역할 × 5 sub-cycle × **6 mega-cycle** = 180+ 에이전트 호출 규모의 반복 합의 기록
> 단일 진실원 (규약): `conventions/final/` (6 mega-cycle 거친 확정본)
> 단일 진실원 (전략): `wiki/08-tsgo-master-plan/`

## 끝장 토론 체제 — 왜 6 mega-cycle 인가

`wiki/08-tsgo-master-plan/` 은 전략(무엇을) 을 확정했고, `packages/ttsc/` 가 실현성(가능한가) 을 증명했다. 남은 것은 **"앞으로 수 년간 일관되게 지킬 규약"**. 한두 번의 리뷰로는 규약의 한계·자기모순·누락이 드러나지 않는다. 따라서 한 번의 [초안→교차리뷰→개정→감수→최종] 5 sub-cycle 단위(= 1 mega-cycle) 를 통째로 **6번 반복** 하여, 직전 mega-cycle 의 확정본을 다음 mega-cycle 의 입력으로 받아 갈수록 더 엄격한 비판을 거친 규약에 수렴시킨다.

## 참여 역할 (6 — 지위고하 불문)

| # | 역할 | 담당 영역 |
|---|------|----------|
| A | Boundary Architect | Go/TS 경계, 패키지 토폴로지, 사용자 API 불변 보증 |
| B | Go Engine Lead | typia-go 엔진 (MetadataSchema IR, Analyzer, Collection) |
| C | ttsc Driver Lead | tsgo shim, driver, emitter (JS 코드 생성) |
| D | TS Facade Keeper | `@typia/typia` · `@typia/interface` 얇은 TS 층 |
| E | QA/Test Lead | Go unit test + TS integration, 벤치, fixture |
| F | Release/DX Lead | pnpm+Go 빌드, 7 플랫폼 릴리스, 문서, AI-native DX |

모든 참여자는 매 mega-cycle 진입 시:
1. `wiki/` 전체 (특히 08/09/10)
2. 외부 래퍼런스 (`/mnt/d/github/contributions/` — tsgonest / tsgolint / effect-ts / typical / typescript-go)
3. 본 저장소 관련 코드 (특히 `packages/ttsc/`, `packages/core/src/`, `packages/transform/src/`)

를 **line by line 꼼꼼히 정독**한 후 토의에 참여한다.

## 1 mega-cycle 내부 구조 (5 sub-cycle)

| Sub | 활동 | 산출 |
|-----|------|------|
| 1. 초안 | 6 역할 각자 담당 규약 초안 작성 | `cycles/cycle-01-*.md` (6편) |
| 2. 교차 리뷰 | 각자 다른 5명의 초안을 비판 | `cycles/cycle-02-*.md` (6편) |
| 3. 개정 | 비판 반영 + 근거 보강 | `cycles/cycle-03-*.md` (6편) |
| 4. 통합 감수 | 09-audit 스타일 공격적 감수 — 일관성·누락·자기모순 | `cycles/cycle-04-integration.md` |
| 5. 최종 확정 | 감수 반영 후 이 mega-cycle 의 합의안 6편 | `01-boundary.md` … `06-release-dx.md` + `cycles/cycle-05-summary.md` |

## 6 mega-cycle 구성

| Mega | 입력 | 포커스 | 출력 폴더 |
|------|------|--------|-----------|
| 1 | wiki + 코드 현 상태 | 규약 **초안 시스템** 구축 | `mega-cycle-1/` |
| 2 | mega-1 최종본 | mega-1 **허점 공격** 후 개정 | `mega-cycle-2/` |
| 3 | mega-2 최종본 | **외부 래퍼런스 심층** 대조로 결함 찾기 | `mega-cycle-3/` |
| 4 | mega-3 최종본 | **코드 line-by-line** 재검증, 규약-실제 괴리 찾기 | `mega-cycle-4/` |
| 5 | mega-4 최종본 | **미래 시나리오** 주입 (Phase 1~6 확장, tsgo 1.x → 2.x, typia-go 70% 포팅 상태) | `mega-cycle-5/` |
| 6 | mega-5 최종본 | **최종 합의** — 일체의 오점 제거, 이견 명시적 해소 | `mega-cycle-6/` + `final/` |

## 폴더 지도

```
conventions/
├─ 00-INDEX.md                (이 문서)
├─ mega-cycle-1/
│  ├─ 00-README.md            (이 mega 의 입력·결론)
│  ├─ cycles/
│  │  ├─ 00-README.md
│  │  ├─ cycle-01-A-boundary.md … cycle-01-F-release-dx.md  (초안 6)
│  │  ├─ cycle-02-*.md (교차 리뷰 6)
│  │  ├─ cycle-03-*.md (개정 6)
│  │  ├─ cycle-04-integration.md (통합 감수)
│  │  └─ cycle-05-summary.md (최종 회의록)
│  ├─ 01-boundary.md          (mega-1 확정본 6편)
│  ├─ 02-go-engine.md
│  ├─ 03-ttsc-driver.md
│  ├─ 04-ts-facade.md
│  ├─ 05-testing.md
│  └─ 06-release-dx.md
├─ mega-cycle-2/ … mega-cycle-6/    (동일 구조, 입력은 직전 mega 최종본)
└─ final/                     (mega-6 종료 후 합의 확정본)
   ├─ 00-INDEX.md
   ├─ 01-boundary.md ~ 06-release-dx.md
   └─ meta-review.md          (6 mega-cycle 변천사 · 주요 쟁점 해소 기록)
```

## 불변 원칙 (모든 mega-cycle 공통)

1. **사용자 API 불변** — `typia.is<T>(input)` 한 자도 바뀌지 않는다.
2. **tsconfig 호환** — `plugins[]` 스키마 호환 (빌드 명령 `tsc` → `ttsc` 로만 변경).
3. **13 namespace 유지**.
4. **Edge runtime 호환** — emit 결과는 `eval`/`new Function(code)` 금지.
5. **최소 patch** — typescript-go fork 는 3 patches 이하 (tsgonest 모델).
6. **wiki 08 이 전략 진실원** — 규약은 전략의 실행층. 충돌 시 전략이 우선.

## 진행 상태

- [ ] **Mega-cycle 1** — 초안 시스템 구축
  - [x] Sub-1 초안 6편 (실행 중)
  - [ ] Sub-2 교차 리뷰
  - [ ] Sub-3 개정
  - [ ] Sub-4 통합 감수
  - [ ] Sub-5 최종 확정
- [ ] **Mega-cycle 2** — 허점 공격
- [ ] **Mega-cycle 3** — 외부 래퍼런스 심층
- [ ] **Mega-cycle 4** — 코드 재검증
- [ ] **Mega-cycle 5** — 미래 시나리오 주입
- [ ] **Mega-cycle 6** — 최종 합의

## 변경 이력

| 버전 | 변경 |
|------|------|
| v1 | 단일 5-cycle 구조로 시작 |
| **v2 (현재)** | 사용자 지시로 6 mega-cycle × 5 sub-cycle 체제 확장 — 끝장 연속 토론 |
