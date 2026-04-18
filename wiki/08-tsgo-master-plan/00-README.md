# 08. tsgo Master Plan — typia의 TypeScript 7 대응 무결 계획

> **지위**: typia 메인테이너(samchon)의 tsgo 대응에 관한 **단일 진실원**.
> 이 폴더의 문서가 다른 모든 07-strategy/* 문서와 충돌할 경우 **이 폴더가 우선**한다.
>
> **작성 원칙**:
> - 모든 숫자는 측정 출처를 명시한다.
> - AI 재구성과 원저자 사상을 명확히 구분한다.
> - 내부 모순은 제거한다.
> - 모르면 모른다고 쓴다.
> - 완벽주의를 위한 완벽주의 아닌, 결정을 돕기 위한 완벽주의다.

## 이 폴더의 구성 (v2 — 옵션 비교 폐기)

| # | 문서 | 역할 |
|---|---|---|
| 00 | (이 문서) | 네비게이션 |
| 01 | [Preface — 사상·전제·범위](01-preface.md) | 이 계획이 지키고 흔드는 것 |
| 02 | [위협 지도 (2026-04 실측)](02-threat-landscape.md) | tsgonest·typical·tsgo·시장의 현재 상태 |
| 03 | [기술적 기반 (5 모델 비교)](03-technical-foundations.md) | JS변조 / Patch / Shim / Hybrid / 완전재구현 |
| 04 | [**Strategic Options v2**](04-strategic-options.md) | **"옵션 비교" 폐기** — ttsc+typia-go 통합 |
| 05 | [**Recommended Path v2**](05-recommended-path.md) | **단일 경로의 실행 전략** |
| 06 | [ttsc 완전 설계](06-ttsc-specification.md) | driver / shim / patch |
| 07 | [typia-go 완전 설계](07-typia-go-specification.md) | engine 범위 / 매핑 |
| 08 | [월 단위 일정](08-implementation-timeline.md) | Phase 0~6 |
| 09 | [리스크 대장 (15개)](09-risk-register.md) | 리스크 + 완화 + kill criteria |
| 10 | [성공·실패 기준](10-success-criteria.md) | KPI / Red flag |
| 11 | [대외 커뮤니케이션](11-communication-plan.md) | 공식 입장문, 컨퍼런스 |
| 12 | [거버넌스](12-governance.md) | 의사결정 점검 주기 |
| 13 | [부록 — 사실 수치 출처](13-appendix-facts.md) | 모든 숫자의 출처 |
| 14 | [부록 — 용어집](14-appendix-glossary.md) | 용어 통일 |
| 15 | [**Executive Summary v2**](15-executive-summary.md) | **1 페이지 요약** ★ |
| 16 | [**Package Port Boundary**](16-package-port-boundary.md) ⭐ **신규** | **9 패키지의 Go/TS 결정** |

## 이 plan의 3가지 핵심 약속 (v2)

### 약속 1. 사상 불변
사용자 API (`typia.is<T>(input)`)는 **한 자도 바뀌지 않는다**. 빌드 명령 `tsc` → `ttsc` 한 글자 변경은 `npx typia setup`이 자동화.

### 약속 2. 정직
- 모든 숫자에 출처 표시 (실측 / 공개 / 추정 구분).
- 불확실한 것은 불확실하다고 명시.
- 경쟁자 강점을 축소하지 않는다.

### 약속 3. 단일 결정력
- **"옵션 중 선택"은 없다.** ttsc + typia-go는 한 시스템의 두 층.
- @typia/interface/typia는 TS 얇게 유지, core/transform은 Go로 건너간다 ([16번 참조](16-package-port-boundary.md)).
- ts-patch 경로는 2028 말 graceful deprecation.

## 이전 07-strategy 폴더와의 관계

| 07-strategy 폴더 | 08-tsgo-master-plan | 관계 |
|---|---|---|
| `01-tsgo-strategy.md` v2 | `04-strategic-options.md` + `05-recommended-path.md` | 흡수·정제 |
| `02-roadmap.md` | `08-implementation-timeline.md` | 흡수·정제 |
| `03-positioning-actions.md` | `11-communication-plan.md` | 흡수·정제 |
| `04-ttsc-design/` (10편) | `06-ttsc-specification.md` (단일) | 핵심 요약 |
| `05-go-port-design/` (8편) | `07-typia-go-specification.md` (단일) | 핵심 요약 |
| `06-final-decision/` (6편) | `05-recommended-path.md` + `15-executive-summary.md` | 흡수·정제 |

상세는 07-strategy/*에 남아있다. 08-master-plan은 **결정에 필요한 최소 완결 정보**.

## 이 master plan을 읽는 권장 순서 (v2)

### 결정자 (30분)
1. `15-executive-summary.md` (1 페이지, v2)
2. `16-package-port-boundary.md` (패키지별 Go/TS 결정) ★ 신규
3. `02-threat-landscape.md`
4. `04-strategic-options.md` (v2 — 옵션 비교 폐기)
5. `05-recommended-path.md` (v2 — 단일 경로 실행)

### 실행자 (2시간)
위 + `06-ttsc-specification.md`, `07-typia-go-specification.md`, `08-implementation-timeline.md`

### 감수자 (3시간)
위 전부 + `03-technical-foundations.md`, `09-risk-register.md`, `13-appendix-facts.md` + `09-audit/`

---

## 현재 상태 (2026-04-18)

- [x] 위협 지도 실측 (08-01/02/03)
- [x] 3 모델 비교 (04-ttsc-design/02-prior-art/* 8편 기반)
- [x] 옵션 비교 매트릭스 (사이클 4 결과 반영)
- [x] ttsc v2 아키텍처 (shim + 최소 patch)
- [x] typia-go 18개월 계획
- [x] 감수 결과 반영 (independent audit 1~7)
- [ ] samchon 검토 및 승인 — **대기 중**

다음 행동: `15-executive-summary.md` → 의견 수렴 → Phase 0 착수.
