# Session 9 — 최종 의결

> 2026-04-19, 18:30. 의장: **A (Boundary Architect)**. 기록: D. samchon 참관 발언 1 회 허용.
> 목적: Mega-1 의 최종 규약 6 편 확정. 이후 `mega-cycle-1/01-boundary.md ~ 06-release-dx.md` 로 이관.

## 의장 개회

**A (의장)**: Mega-1 마지막 세션입니다. S1~S8 의 합의를 **최종 규약 6 편** 으로 어떻게 분배할지 의결합니다. 각 역할이 자기 규약 최종본을 선언하고, 다른 5 명이 이의 없음 표할 경우 확정.

## A — 최종 규약 01-boundary.md 선언

**A**: 나는 다음을 원본으로 제출합니다.

- 5 원칙: P1 API-Frozen (BND-API-04-DEF 포함), P2 Layer-driven 언어, P3 13 기능 그룹 유지, P4 tsconfig 호환, P5 Edge runtime.
- 규약 28 개 (원 26 + BND-API-04-VER + BND-API-04-DEF).
- priority 표기 P0~P2.
- Phase 별 로드맵 섹션 신설.

**B**: OK.  **C**: OK.  **D**: OK.  **E**: verifier 매핑 표 포함이면 OK. **F**: OK.

**A**: 확정.

## B — 최종 규약 02-go-engine.md 선언

**B**: 1,200+ 줄 예상. 주요 변경:
- pointer key 정책 분리 (IR 허용, shimchecker 금지).
- IR `Recursive: bool` 플래그.
- `metadata/functor_names.go` 단일 출처.
- 성능 가정 3 곳 측정 결과로 교체 또는 panic 전환.
- IR `StandardSchemaHint: bool` 플래그.
- regression 3 건 (R-1.3-B-0001/0002, R-1.5-B-0001~0003).
- 검증 공백 보완 (위치 lint, AST 기반 pointer key lint).
- priority 표기.

**A**: OK. **C**: IR 계약 동의. **D**: 동의. **E**: R 매핑 표 준수 OK. **F**: Go 빌드 결정론 축 OK.

**B**: 확정.

## C — 최종 규약 03-ttsc-driver.md 선언

**C**: 1,400+ 줄 예상. 주요 변경:
- §7.3.3 Standard Schema: `_createStandardSchema(__fn)` 호출 축소.
- §8 sentinel fixture.
- `internal/engine/emitter/` → `internal/emitter/` Phase 1 이동 스케줄.
- helper hoisting 재귀 한정.
- FUNCTORS 147 Go 상수 + 비교 lint.
- shim 자동생성 CI fail 정책.
- symlink → submodule Phase 0 종료 전.
- `unsafe.Pointer` allowlist.
- patch 0 유지 (자동 PR 없이 CI fail).
- regression 3 건 (R-1.5-C-0001~0002, R-1.7-C-0001~0003).

**A**: OK. **B**: IR 소비 계약 OK. **D**: marker 치환 계약 OK. **E**: verifier 매핑 OK. **F**: 빌드·배포 영향 OK.

**C**: 확정.

## D — 최종 규약 04-ts-facade.md 선언

**D**: 1,000 줄 예상. 주요 변경:
- §3.2 "9 import + 13 기능 그룹" 표.
- §5.3 Standard Schema 단일 정본 (TS).
- §3.5 bin 단계별 (`typia` v14 제거).
- §3.6 `src/transform.ts` v14 까지 no-op marker.
- §4.3 `@typia/utils/runtime` v13 subpath + v14 별도 패키지.
- §4.5 TypeScript peer Layer 별 정책.
- §13.1 9 lint rule.
- regression 2 건 (R-1.5-D-0001, R-1.7-D-0001).

**A**: OK. **B**: 엔진↔facade 계약 OK. **C**: marker 치환 OK. **E**: parity fixture OK. **F**: publish 순서 OK.

**D**: 확정.

## E — 최종 규약 05-testing.md 선언

**E**: 1,200 줄 예상. 주요 변경:
- R-ID 체계 `R-{M}.{S}-{R}-{N}` 공식.
- `regressions.md` 레지스터.
- CI 9 job matrix 지정 (PR 3/Release 6/Nightly 9).
- no-skip-on-main + no-meaningless-assert lint.
- parity fixture 전면 도입 (14 → 28 build).
- "검증 수단 없는 규약 금지" 원칙 강화.
- 각 S1~S8 에서 합의된 verifier 전부 포함.
- R 목록 약 18 건 신설 (A/B/C/D/E/F 전 역할).

**A**: OK. **B**: 엔진 regression fixture OK. **C**: driver rewrite fixture OK. **D**: facade parity OK. **F**: CI matrix 동기화 OK.

**E**: 확정.

## F — 최종 규약 06-release-dx.md 선언

**F**: 1,300 줄 예상. 주요 변경:
- 빌드 분리 (npm TS 만, Go 별도).
- 재현 빌드 두 축 (바이너리 / emit).
- 7 플랫폼 matrix 3/6/9 (+ nightly linux-arm/win-arm 스모크).
- bin 단계별 (v13.0 warning → v13.3 dry-run → v14 제거).
- Setup wizard 멱등·dry-run·telemetry 0·fixture 12.
- AI-native DX Phase 2~3 이월.
- `@typia/unplugin` 500 LOC 이하 v13 재작성.
- OIDC trusted publishing.
- go.work replace 타이머 경고.
- regression 2 건 (R-1.4-F-0001, R-1.4-B-0001).

**A**: OK. **B**: Go 빌드 재현 OK. **C**: cross-compile OK. **D**: publish 순서 OK. **E**: CI matrix OK.

**F**: 확정.

## samchon 참관 발언 (1 회 허용)

**samchon (참관)**: 여러분 감사합니다. 두 가지만.

1. 지금까지 regulatory 중심이지만, **개발자 경험 (DX)** 의 쾌감을 잃지 않도록. typia 는 "`typia.is<T>(input)` 한 줄이면 끝" 이 매력입니다. 규약이 많아지면서 사용자가 느끼는 복잡도가 커지지 않게.

2. Mega-2~6 에서도 **솔직**하라. "가정"·"측정 필요"·"미지원" 을 숨기지 말고 명시할 것. wiki/09-audit 스타일을 conventions 에도 유지.

**A (의장)**: 접수. Mega-2 착수 시 첫 원칙으로.

## 의장 확정 선언

**A**: Mega-1 최종본 6 편 확정.

- `mega-cycle-1/01-boundary.md` ← A
- `mega-cycle-1/02-go-engine.md` ← B
- `mega-cycle-1/03-ttsc-driver.md` ← C
- `mega-cycle-1/04-ts-facade.md` ← D
- `mega-cycle-1/05-testing.md` ← E
- `mega-cycle-1/06-release-dx.md` ← F

모두 1,000~1,400 줄 범위. 단일 `cycle-03-*.md` 를 기반으로 S1~S8 합의 반영.

**Mega-1 폐회**. 다음 Mega-2 는 샤각 회의록 `mega-cycle-2/minutes/session-01-opening.md` 부터 시작.

---

## Session 9 결산

### 확정

- 최종 규약 6 편 확정 (이관 작업은 별도).
- samchon 참관 발언 2 항 접수.

### Mega-1 전체 결산

| 항목 | 수치 |
|------|------|
| 참여자 | 6 역할 + samchon 참관 |
| 세션 | 9 |
| 회의록 총 줄 수 | ≈ 3,200 |
| 합의 항목 | 약 50 |
| 규약 ID 개수 | 약 150 |
| R (regression) 신설 | 18 |
| 이월 쟁점 (→ Mega-2) | 6 |

### 이월 (Mega-2 개시 자료)

1. `@typia/runtime` v14 분리의 전략 변경 대응.
2. AI-native DX 확장 범위.
3. 4 프로젝트 동시 launch 세부.
4. tsgo Go 1.27+ linkname 제한 대응.
5. linux-arm 32-bit 실측.
6. `@typia/unplugin` 500 LOC 실측.

### 다음 단계

Mega-2 **허점 공격**. Mega-1 최종본 6 편을 입력으로, "내가 만약 이 규약을 악용하거나 우회하려면" 관점에서 공격 후 개정.
