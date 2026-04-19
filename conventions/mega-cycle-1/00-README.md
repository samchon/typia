# Mega-cycle 1 — 초안 시스템 구축

> 상태: Sub-1 완료, Sub-2 진행 중
> 시작: 2026-04-19
> 입력: wiki + 현 코드 상태 (feat/ttsc 브랜치)
> 산출: conventions/mega-cycle-1/01-boundary.md ~ 06-release-dx.md (Sub-5 후)

## Mega-1 의 고유 임무

"초안 시스템"을 세운다. 이후 모든 mega-cycle 은 본 mega 의 6 규약 문서를 출발점으로 비판·재작성한다. 따라서 본 mega 에서 필요한 것은 **완전함이 아니라 골격의 명확함** — 6 역할의 영역이 분명하고, 규약 ID 체계가 정착되고, 교차 미해결 질문 (Q-* 목록) 이 충분히 쌓이는 것.

## Sub-1 초안 통계 (완료)

| 역할 | 파일 | 줄 |
|------|------|----|
| A Boundary | cycle-01-A-boundary.md | 866 |
| B Go Engine | cycle-01-B-go-engine.md | 1,122 |
| C ttsc Driver | cycle-01-C-ttsc-driver.md | 1,357 |
| D TS Facade | cycle-01-D-ts-facade.md | 836 |
| E QA/Test | cycle-01-E-testing.md | 933 |
| F Release/DX | cycle-01-F-release-dx.md | 1,161 |
| **합계** | | **6,275** |

## Sub 진행 상태

- [x] Sub-1: 초안 6편
- [ ] Sub-2: 교차 리뷰 6편 (진행 중)
- [ ] Sub-3: 개정 6편
- [ ] Sub-4: 통합 감수 1편
- [ ] Sub-5: 최종 확정 6편 + 요약

## 주요 미해결 질문 후보 (Sub-1 에서 표면화)

| ID | 쟁점 | 관련 역할 |
|----|------|-----------|
| M1-Q1 | 13 namespace 실체 (9 import 지점인가?) | A ↔ D |
| M1-Q2 | Standard Schema Go emit ↔ TS `_createStandardSchema` 외부 관측 동치 | C ↔ D |
| M1-Q3 | `@typia/utils` 런타임부 → `@typia/runtime` 분리 시점 | D ↔ A ↔ F |
| M1-Q4 | IR pointer identity ↔ emitter dedup 계약 | B ↔ C |
| M1-Q5 | sourcemap 지원 시점 (Phase 0 미지원) | C ↔ E |
| M1-Q6 | bash PATH prefix 제거 | F |
| M1-Q7 | 7 플랫폼 matrix OS·Node 확장 범위 | E ↔ F |
| M1-Q8 | Alpine/musl 공식 지원 여부 | F ↔ E |
| M1-Q9 | canary dist-tag 유지 기간 | F ↔ D |
| M1-Q10 | OpenApiTypeChecker 외부 이동 | D ↔ A |

Sub-2 에서 이 질문들에 대한 예비 답안과 새 질문이 추가될 예정.
