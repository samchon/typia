# Session 3 — IR ↔ emitter 경계 공방

> 2026-04-19, 14:50. 의장: **B (Go Engine Lead)**. 기록: E.
> 쟁점: (1) emitter 가 engine 폴더 안에 있는 구조 (물리적 경계 불명확), (2) pointer identity 불변식과 emitter dedup 계약, (3) `typeKey` 문자열 식별 vs `*ObjectType` 포인터 식별.
> 자료: `cycle-01-B-go-engine.md §3~§4`, `cycle-01-C-ttsc-driver.md §5~§7`, `cycle-01-E-testing.md §3` (R-0001/R-0002 회고).

## 의장 개회

**B (의장)**: 이번 세션 핵심 쟁점은 세 가지입니다.
1. 현재 `packages/ttsc/internal/engine/emitter/` 가 engine 폴더 안에 있는데, C 가 S1 에서 "driver 로 옮기자" 고 제안했습니다.
2. Cycle 4 에서 발견된 두 버그 (R-0001 analyzer 포인터 재귀, R-0002 emitter goroutine 스택오버) 의 재발 방지.
3. IR 과 emitter 사이 계약의 명문화 — 무엇이 IR 이고 무엇이 emit 인가.

C, emitter 폴더 이동부터 답변 부탁드립니다.

## 폴더 구조 토의

**C**: 저의 제안은 논리적 분리입니다. `internal/driver/` 아래에 `dispatch.go`, `visit.go` 등 driver 고유 코드. `internal/engine/metadata/`, `internal/engine/analyzer/` 에 IR·분석. 그리고 `internal/emitter/` 를 별도 폴더로 빼내서 — 혹은 `internal/driver/emitter/` 로 — driver 쪽에 둡니다. 이유:

- **emit 는 driver 책임**: driver 가 TypeChecker 를 받아 visit 돌리고 CallExpression 을 치환합니다. 치환에 쓸 JS 문자열 생성이 emitter. 논리적으로 driver 쪽.
- **engine 은 순수**: IR·분석은 "외부 부수 효과 없음" 이어야 합니다. 지금 emitter 가 engine 폴더 안에 있으면 엔진 패키지가 JS 문자열을 반환하는 꼴이라 혼동됩니다.

하지만 **반대 근거**도 있습니다:
- import cycle 이 생길 수 있음: driver → engine.metadata → (emitter 가 필요할 경우) driver 로 역참조.
- 이미 Phase 0 코드가 전부 `internal/engine/emitter/` 에 있습니다. 옮기면 git blame 이 깨지고 리뷰 부담.

**B**: git blame 은 `git log --follow` 로 추적 가능하니 과대평가 마세요. 논리적 분리가 더 중요합니다.

저는 동의합니다. **`internal/emitter/`** 로 옮기고, `internal/engine/` 은 순수 IR·분석만. driver 는 emitter 를 import, emitter 는 engine 을 import. 단방향.

**E**: fixture 관점에서 보면 이게 테스트에도 좋습니다. engine 은 JS 생성 없이도 IR 만 검증하는 테스트 가능. emitter 는 고정 IR 을 주고 JS 문자열을 검증.

**A**: 저도 찬성. 단 `internal/emitter/` 이동은 Phase 0 끝난 뒤 일괄로. 지금 Phase 0 에서 경로 바꾸면 나머지 in-flight 작업이 깨집니다.

**C**: OK. Phase 0 end-of-phase gate 에 묶어두고, Phase 1 첫 작업이 이동.

## pointer identity 쟁점

**B**: 두 번째 쟁점. Cycle 4 R-0001 은 제가 `visitingObjects` 에 `*shimchecker.Type` 을 키로 썼던 게 원인이었습니다. tsgo 가 의미 동일 타입에 distinct pointer 반환하는 경로가 있어 재귀 탈출이 안 됐습니다. 지금은 `typeKey(t) = Type.Id() 기반 문자열` 로 교체.

C 가 초안 §4 에서 "재귀 emitter 전부 `map[*ObjectType]bool` 을 visiting set 으로" 라고 제안했는데 — 이건 잘못입니다. R-0001 의 교훈이 정확히 반대예요. 포인터 키는 위험합니다.

**C**: 정정합니다. 저는 analyzer 쪽 shimchecker.Type 과 emitter 쪽 `*ObjectType` (우리의 IR 객체) 을 혼동했습니다. IR 의 `*ObjectType` 는 Collection 에 의해 의미 동일 타입에 동일 pointer 보장되므로 포인터 키가 안전합니다. 반면 tsgo shimchecker Type 은 아닙니다.

규약 개정안: 
- **포인터 키 허용** 은 Collection 으로 dedup 된 IR 객체 한정.
- **shimchecker.Type (tsgo 타입)** 은 무조건 `typeKey(t)` 문자열 경유.

**B**: 이게 정확합니다. C 는 이 둘을 섞어 쓰면 안 된다는 점을 규약 §3.7 (IR pointer identity) 과 §4.9 (Analyzer typeKey) 양쪽에서 명시해야 합니다.

**E**: regression 추가. `R-1.3-B-0001` = "analyzer 에서 shimchecker.Type 을 포인터 키로 쓴 경우 lint 로 거부". `R-1.3-B-0002` = "emitter 재귀에서 IR `*ObjectType` 이 Collection 에 등록되지 않은 채 쓰인 경우 panic".

**B**: 감사합니다.

## emit dedup (helper hoisting)

**C**: R-0002 의 교훈은 재귀 스키마에서 emit 이 자기 자신을 호출해야 한다는 점이었습니다. 저는 `isState` 구조체를 만들어 방문 중인 `*ObjectType` 이 재귀적으로 나타나면 `__is_N` 헬퍼 이름을 미리 예약하고 본문을 한 번만 방출한 뒤 자기참조로 호출하는 식으로 해결했죠.

규약으로: **"재귀 타입은 helper hoisting, 비재귀 타입은 인라인"**. hoisting 은 overhead 가 있어서 비재귀에 적용하면 낭비입니다.

**B**: 좋은 원칙. IR 에서는 재귀 여부를 어떻게 알려줄까요? Collection 이 이미 cycle detection 을 하고 있다면 IR 이 `Recursive: bool` 를 제공할 수 있습니다.

**C**: 저도 그게 깔끔. Collection 이 DFS 로 등록할 때 재귀 cycle 을 만나면 해당 node 를 recursive 로 마킹. emitter 는 이 플래그만 보고 결정.

**B**: IR 에 `Recursive: bool` 필드 추가. 규약 §3.x 에 명문화.

## functor name 1:1 매핑

**D (들어옴)**: 발언 잠깐. 제 초안 §13.1 lint 에서 "functor-name-match-go" 제안했어요. typia 의 **147 FUNCTORS** 와 Go emitter 의 dispatcher 함수 이름이 1:1 매핑되어야 한다는 것.

**C**: v12 TS 의 programmer 함수명을 Go 에서도 이름 그대로 유지하자는 거죠. 동의. `IsProgrammer.ts` → `is.go`, `AssertProgrammer.ts` → `assert.go` 식.

**B**: 저도 IR 쪽 metadata factor 이름을 v12 과 동일하게 유지합니다. `MetadataFactory` → `metadata/factory.go`, `iterate_metadata_atomic.ts` → `analyzer/iterate_metadata_atomic.go`. 이 1:1 매핑이 있어야 새 기여자가 v12 소스를 보고 Go 쪽을 찾을 수 있습니다.

**D**: 이걸 lint 로 강제합니다. `metadata/functor_names.go` 에 목록을 두고, CI 에서 v12 의 programmer 함수 이름 ↔ Go 파일 basename 을 비교. 불일치 시 fail.

**E**: `R-1.3-D-0001`. 추가.

## 의장 요약

**B (의장)**: 정리합니다.

1. **폴더 이동**: `internal/engine/emitter/` → `internal/emitter/`. Phase 0 종료 gate 에 묶어 Phase 1 첫 작업으로. Phase 0 중엔 현상 유지.
2. **pointer key 규약**: IR `*ObjectType` 포인터 키 허용 (Collection 보장 시). tsgo `shimchecker.Type` 은 절대 포인터 키 금지. `typeKey(t)` 사용.
3. **재귀 플래그**: IR 에 `Recursive: bool` 추가. Collection 이 DFS 등록 시 설정.
4. **emit 전략**: 재귀면 helper hoisting, 비재귀면 인라인.
5. **functor name 1:1**: v12 TS programmer 이름 ↔ Go 파일 basename 일치. `metadata/functor_names.go` 단일 출처. lint 로 강제.
6. **regression 추가**: `R-1.3-B-0001`, `R-1.3-B-0002`, `R-1.3-D-0001`.

이의 없음? 없음. **Session 3 종료**.

---

## Session 3 결산

### 합의

| ID | 내용 | 담당 | 데드라인 |
|----|------|------|----------|
| C3-01 | `internal/engine/emitter/` → `internal/emitter/` 이동 | C | Phase 1 첫 작업 |
| C3-02 | pointer key 허용 범위 (IR 만) | B + C | IR 규약 §3.x |
| C3-03 | `typeKey` 의무 범위 (tsgo 타입) | B | Analyzer §4.9 |
| C3-04 | IR `Recursive: bool` 추가 | B | IR 확정 시 |
| C3-05 | helper hoisting 재귀 한정 | C | Emitter §7.x |
| C3-06 | `metadata/functor_names.go` 단일 출처 | B | IR 확정 시 |
| C3-07 | functor-name-match-go lint | D + CI | Phase 0 종료 전 |
| C3-08 | regression 3 건 추가 | E | 이번 주 |

### 미결

없음.

### 규약 문서 변경

- B §3.x — `Recursive: bool`, pointer key 허용 범위.
- B §4.9 — typeKey 의무.
- C §5 — 폴더 이동 스케줄.
- C §7.x — hoisting 규약.
- D §13.1 — lint rule.
- E — R 목록 추가.

다음 세션: **S4 — 빌드·배포·플랫폼**. 의장 F.
