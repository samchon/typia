# Session 6 — "13" 용어 4 중 충돌 중재

> 2026-04-19, 16:30. 의장: **A (Boundary Architect)**. 기록: D.
> 쟁점: 문서마다 "13" 이라는 숫자가 서로 다른 대상을 가리킴.
> 자료: `cycle-02-A-review.md §7` (용어 4축 지적), `packages/typia/src/module.ts` (실 export 측정).

## 의장 개회

**A (의장)**: 짧은 중재 세션입니다. "13" 이 네 축에서 다르게 쓰이고 있어요. 다음 표가 현실입니다.

| 축 | "13" 이 가리키는 것 | 출처 | 실수 |
|----|-------------------|------|------|
| (i) 13 namespace | 문서에서 종종 언급 | wiki/08, 제 초안 §2 | 실측은 **9 import 지점** (`export * as`) |
| (ii) 13 programmer | v12 Programmers 클래스 | `packages/core/src/programmers/` | 실측 Is/Assert/Validate/Stringify/Parse/Schema/Misc/Notations/Reflect/HTTP/Protobuf/Random/LLM = **13** |
| (iii) 13 emitter 모듈 | Phase 0 Go emitter 파일 | `packages/ttsc/internal/engine/emitter/` | 실측 12~14 (진화 중) |
| (iv) 13 릴리스 항목 | F 의 release 체크리스트 | F 초안 §4 | 문서적 숫자 |

이대로는 혼선. 표를 공식 단일 출처로 확정합니다.

## 축별 명명 통일

**A**: 제 제안:

- (i) 축은 **"9 import 지점"** 으로 명문 — `typia.llm`, `typia.json`, `typia.http`, `typia.protobuf`, `typia.random`, `typia.misc`, `typia.notations`, `typia.reflect`, `typia.functional` + root (총 9 + root = 10? 또는 9). **정확 수치 측정 요함**.

**D**: 제가 실측해 보니, `packages/typia/src/module.ts` 에서 `export * as` 로 나오는 건 **8 개**. root `typia` 를 더하면 **9 지점** 에서 사용자가 import.

그리고 docs 상 "기능 그룹 13" 은 root 의 직접 함수 (`typia.is`, `typia.assert`, `typia.validate`, `typia.createValidate` 등 5 묶음) + 8 namespace = 13 **기능 그룹** 이라는 해석 가능.

**A**: 좋습니다. 다음으로 고정:
- (i) **9 import 지점** = `typia` + `typia.{llm, json, http, protobuf, random, misc, notations, reflect, functional}`.
- (i-sub) **13 기능 그룹** (docs 전용) = root 의 5 validator 묶음 (is/assert/validate/equals/createX) + 8 namespace.

- (ii) **13 programmer** = v12 core 의 13 Programmer 클래스. 이건 코드 이름과 1:1.
- (iii) **Go emitter 모듈** = 숫자 고정 안 하고 **버전별로** 명기 (Phase 0 에 12, Phase 1 에 14 등).
- (iv) **release 체크리스트 13 항목** = F 의 내부 운영 문서로 분리. 규약에 "13" 을 쓰지 않음.

## 규약 반영

**A**: 각 역할 규약에서 "13" 이 나오는 곳을 다음 표 기준으로 교체하세요.

| 현재 기술 | → 교체 후 기술 |
|----------|---------------|
| "13 namespace" (Boundary, Facade) | "9 import 지점 + 13 기능 그룹" |
| "13 programmer" | 그대로 유지 (v12 core Programmer 클래스) |
| "13 emitter 모듈" | "Go emitter 모듈" + 버전 suffix |
| "13 릴리스 항목" | "release 체크리스트 13 항목" + F 내부 문서 참조 |

**D**: 동의. 제 초안 §3.2 를 이 표로 대체합니다.

**C**: 제 초안 §7 도 "13 emitter" 를 "Phase 0 Go emitter 12 모듈" 로 교체.

**F**: "릴리스 체크리스트 13 항목" 은 제 내부 문서. 규약에선 언급 안 하는 방향.

**B**: 저는 "12 sum-type" 이라는 표현을 썼는데 이는 **MetadataSchema 의 12 sum-type** 이고 "13" 과 무관. 혼동 없음.

**E**: fixture 이름에도 "13" 이 쓰인 곳 없나 확인. 없음.

## 의장 확정

**A (의장)**: **13 용어 4 중 충돌 해소**. 이후 모든 문서에서 위 표 준수. 다음 mega-cycle 에서도 동일.

**Session 6 종료**.

---

## Session 6 결산

### 합의 (용어 표)

| 이름 | 숫자 | 내용 |
|------|------|------|
| import 지점 | **9** | `typia` + 8 `export * as` |
| 기능 그룹 | 13 | root 5 + namespace 8 |
| Programmer 클래스 | 13 | v12 core (Is/Assert/...) |
| sum-type | 12 | MetadataSchema 종류 |
| Go emitter 모듈 | Phase-dependent | 버전별 표기 |
| release 체크리스트 | 13 (내부) | F 운영 문서 |

### 규약 문서 변경

- A §2 (namespace) — 9 import + 13 기능 그룹 표로.
- D §3.2 — 위 표 채택.
- C §7 — emitter 숫자 제거.
- F §4 — release 체크리스트를 규약 밖 내부 문서로 분리.

다음 세션: **S7 — 남은 공통 쟁점 정리** (shim 자동생성, `@typia/runtime` 시점, `@typia/unplugin` 얇게 유지). 의장 C.
