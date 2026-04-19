# Session 2 — Standard Schema 정본 공방

> 2026-04-19, 14:20. 의장: **D (TS Facade Keeper)**. 기록: E.
> 쟁점: Standard Schema `~standard` 주입의 정본을 TS 로 할 것인가 Go 로 할 것인가, 또는 공존할 것인가.
> 자료: `cycle-01-D-ts-facade.md §5`, `cycle-01-C-ttsc-driver.md §7.3.3`, `packages/typia/src/internal/_createStandardSchema.ts`, `packages/ttsc/internal/engine/emitter/assert.go`.

## 쟁점 재설명

**D (의장)**: S1 에서 꺼냈던 건이 커서 한 번 더 정리합니다. 현재 Standard Schema `~standard` 주입은 두 경로로 존재합니다.

1. **TS 경로 (v12, 살아있음)**: `packages/typia/src/internal/_createStandardSchema.ts` — 134 줄의 순수 TS 함수. v12 `CallExpressionTransformer` 가 `typia.createValidate<T>()` 호출을 만날 때 `createValidate` 를 돌려주되 그 결과를 `_createStandardSchema(__fn)` 로 감싸도록 emit.

2. **Go 경로 (Phase 0 신규, 현재 작동 중)**: `packages/ttsc/internal/engine/emitter/assert.go` 주변에서 `{ validate: __fn, vendor: 'typia', version: 1, types: ...}` 객체를 **inline 으로 직접 생성** — TS 함수를 호출하지 않음.

외부 관측 동치 여부가 **위험** 합니다. TS 쪽은 장기간 검증됐고, Go 쪽은 Phase 0 에 갓 만든 inline. 미세 차이 (프로퍼티 순서, undefined vs missing, vendor string 등) 가 생길 수 있고, `@standard-schema/spec` 이 미래에 바뀌면 두 경로를 다 고쳐야 합니다.

C, 먼저 답변 부탁합니다. 왜 Go 에서 inline 을 택했습니까?

## C 반론

**C**: 솔직히 말하면 단축 경로였습니다. Phase 0 에 엔드투엔드를 일찍 돌리고 싶어서 Go 안에서 JS 문자열을 직접 조립했습니다. 당시엔 TS helper 를 호출하려면:
- 사용자 소스에 `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema"` 같은 import 를 넣어야 하는데
- 사용자 tsconfig `paths` 에 따라 해소가 다를 수 있고
- Edge runtime 에서 private internal 경로 노출이 걸릴 수 있다고 우려했습니다.

그래서 일단 **inline** 으로 돌렸습니다. 지금 보니 Phase 1 전에 정리해야 할 기술 부채입니다.

**D**: 기술 부채로는 맞지만 더 심각합니다. **사용자 관측 동치 위반** 입니다. v12 → v13 migration 에서 `~standard` 객체의 property enumeration 순서, Object.keys 결과, JSON.stringify 결과가 달라질 수 있어요. Standard Schema spec 은 순서를 요구하지는 않지만, 사용자 중 순서 기반 snapshot 테스트를 가진 사람이 있을 수 있습니다.

**A (끼어듦)**: BND-API-04 (사용자 관측 동치) 관점에서 이건 **명백한 위반 상태**입니다. Phase 0 에 한해 허용된 debt 로 인정하되, v13 preview alpha 이전 해소 의무로 규약화합니다.

## B 중재 — IR 관점

**B**: Go engine 측 관점에서 보면, IR (MetadataSchema) 에 "Standard Schema 주입 필요" 를 의미 플래그로만 남겨두고, 실제 코드 생성은 emitter (C) 가 담당하는 게 맞습니다. IR 에 spec 문자열을 박으면 spec 이 바뀔 때 엔진을 건드려야 하는 결합이 생깁니다.

저는 IR 에 **`StandardSchemaHint`** 같은 boolean 필드 하나만 두고 emitter 가 해석하자는 입장이에요. 그렇게 하면 D 의 TS 정본 결정과 무관하게 IR 은 안정적입니다.

**D**: 좋습니다. 동의.

**C**: B 의견 수용. 그럼 emitter 의 inline 구현만 정리하면 됩니다.

## E — 검증 fixture 제안

**E**: 기술적 토의는 좋은데 저는 **검증 공백** 을 걱정합니다. 지금 합의한 대로 inline 을 지우기 전에, 먼저 **parity fixture** 를 만들어야 합니다. 그래야 변경 전후로 외부 관측 동치를 CI 로 잡을 수 있어요.

제안: `tests/test-typia-ttsc/fixtures/standard-schema-parity/` 에 TS 코드 하나 두고, v12 typia 로 컴파일한 JS 와 v13 ttsc 로 컴파일한 JS 를 각각 실행해 `~standard` 객체를 `JSON.stringify` 로 직렬화한 결과를 비교. 이 fixture 가 **RED** 로 뜨면 C 가 작업할 motivation 이 확실해집니다.

**D**: 훌륭합니다. 이건 E 가 이번 주 내로.

**E**: 예. `R-1.2-D-0001` (Mega-1 Sub-2 에서 D 제기 첫 번째 regression) 으로 ID 부여합니다.

## F — publish 영향

**F**: publish 관점에서 따로 물어볼 게 있습니다. TS 정본 `_createStandardSchema.ts` 가 `packages/typia/src/internal/` 경로에 있죠. internal 은 semver 보호 범위 밖이지만, Go emit 이 이걸 **public 계약으로 의존** 하는 순간 사실상 public API 가 됩니다.

D, 두 선택지:
- (a) 이 함수를 `packages/utils/runtime/` (또는 향후 `@typia/runtime`) 으로 이동시켜 **공식 public** 으로.
- (b) 지금 자리에 두되 "Go emit 의 contract 로 보호됨" 주석을 달고 단위 테스트로 동결.

**D**: (a) 가 깔끔합니다. 하지만 `@typia/runtime` 분리 시점을 v14 로 잡았으니 그전엔 (b) 로 가죠. v14 에서 (a) 로 전환.

**A**: 동의.

## 합의 초안

**D (의장)**: 정리합니다.

1. **정본**: TS `_createStandardSchema` 를 유일 정본으로 선언.
2. **Go emit 변경**: C 는 `assert.go` 주변 inline 을 **`_createStandardSchema(__fn)` 함수 호출 한 줄 emit** 으로 교체.
3. **IR 변경**: B 는 MetadataSchema 에 `StandardSchemaHint: bool` 1 비트 플래그 추가. 하지만 C 가 실제 소비.
4. **검증**: E 가 parity fixture `R-1.2-D-0001` 을 이번 주 추가. v12 와 v13 의 `~standard` JSON.stringify 결과가 byte-equal 까지는 아니더라도 구조 동치 + 필수 프로퍼티 존재여야 함.
5. **위치**: v13 에서 `_createStandardSchema.ts` 는 현 위치 유지 + "Go emit contract" 주석. v14 에서 `@typia/runtime` 으로 이동.
6. **데드라인**: v13 preview alpha 이전 (Phase 1 착수 전) inline 제거.

반대 의견 있습니까?

## 반대/수정

**E**: 한 가지. TS 함수가 사용자 bundler 에 포함되지 않는 경우가 있을 수 있어요. 사용자가 tree-shake 로 typia 의 내부 헬퍼를 날려버리면 emit 된 JS 가 `_createStandardSchema is not defined` 로 죽습니다.

**C**: 좋은 지적. emit 시 import 를 자동 주입해야 합니다. 제 쪽에서 `ImportTransformer` 를 확장해 `_createStandardSchema` 를 emit 이 쓰는 경우 `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema"` 를 자동으로 넣겠습니다. 이건 unused import 제거 로직과 충돌 없이 작동합니다 (emit 이 만든 identifier 는 "used" 로 간주).

**E**: 그럼 이 import 자동 주입 자체도 fixture 가 필요합니다. `R-1.2-D-0002`.

## F 의 추가 우려

**F**: 세 줄 덧붙입니다. `typia/lib/internal/_createStandardSchema` import 경로가 사용자 bundler 에게 드러나면 bundle 분석 툴 (e.g., Webpack analyzer, esbuild meta) 에서 "internal" 경로가 노출됩니다. 이게 이상하게 보일 수 있어요. 하지만 이건 cosmetic 문제고 동작에는 영향 없음. 동의.

**A**: "internal" 이라는 단어가 드러나지 않게 하려면 공식 export (e.g., `typia/standardSchema`) 로 re-export 가 필요합니다. v14 이전엔 그냥 둡시다.

## 최종 의결

**D (의장)**: 의결합니다. 이의 없으면 찬성으로 간주.

- ✅ 항목 1~6 합의.
- 추가 5: `ImportTransformer` 에서 `_createStandardSchema` 자동 주입 규약.
- 추가 6: fixture `R-1.2-D-0001` (parity) + `R-1.2-D-0002` (auto import) 신설.

이의 없음. **Session 2 종료**.

---

## Session 2 결산

### 합의

| ID | 내용 | 담당 | 데드라인 |
|----|------|------|----------|
| C2-01 | TS `_createStandardSchema` 가 유일 정본 | D | 즉시 |
| C2-02 | Go emit inline 제거, 함수 호출로 축소 | C | v13 preview alpha 이전 |
| C2-03 | IR 에 `StandardSchemaHint: bool` 플래그 | B | IR 확정 시 |
| C2-04 | parity fixture `R-1.2-D-0001` 추가 | E | 이번 주 |
| C2-05 | auto-import fixture `R-1.2-D-0002` 추가 | E | 이번 주 |
| C2-06 | v14 에서 `@typia/runtime` 으로 이동 | D + F | v14 |
| C2-07 | `ImportTransformer` 자동 주입 로직 확장 | C | v13 preview alpha 이전 |

### 미결 → 이후 세션으로

없음.

### 이 세션이 규약 문서에 남길 변경

- 규약 A §4 (BND-API-04) 에 "Phase 0 한정 debt 인정, v13 alpha 이전 해소" 추가.
- 규약 C §7.3.3 (Standard Schema emit) 을 함수 호출 형태로 교체.
- 규약 B §3 (IR) 에 `StandardSchemaHint` 플래그 추가.
- 규약 D §5 (Standard Schema) 에 "단일 정본, v14 이동" 명시.
- 규약 E 에 새 fixture 2 개 등재.

다음 세션: **S3 — IR ↔ emitter 경계 공방**. 의장 B.
