# 05. 13 Namespace 이식 계획

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> typia 13 namespace 각각의 Go 이식 난이도, 우선순위, 특이사항.

## 이식 우선순위

```
Priority 1 (v0.5 — 가장 먼저)
  is / assert / validate / equals

Priority 2 (v0.7)
  json.schema / json.stringify / json.parse

Priority 3 (v0.8)
  misc / notations / reflect / functional / http

Priority 4 (v0.9)
  random / protobuf

Priority 5 (v0.95)
  llm (최대 차별점, 완성도 핵심)
```

## 각 namespace 상세

### Priority 1: Validators

#### `typia.is<T>`, `typia.equals<T>`
- 가장 단순 (boolean 반환)
- AND/OR combiner만 사용
- discriminator 기반 union 최적화
- **LOC**: ~2000 Go
- **난이도**: 중

#### `typia.assert<T>`, `typia.assertGuard<T>`, `typia.assertEquals<T>`
- `is`와 공통 골조 + `create_guard_call` 추가
- path 문자열 컴파일 타임 합성 (typia의 자랑거리)
- TypeGuardError throw
- **LOC**: ~1500 Go (is 위에 얹음)
- **난이도**: 중

#### `typia.validate<T>`, `typia.validateEquals<T>`
- errors 누적, full path 추적
- IValidation 반환
- **LOC**: ~1500 Go
- **난이도**: 중

→ Priority 1 총 ~5000 Go LOC, 2~3개월.

### Priority 2: JSON

#### `typia.json.schema<T>`
- MetadataSchema → IJsonSchema 변환
- OpenAPI 3.0 / 3.1 / 3.2 / Emended 네 가지 출력
- `@typia/utils`의 OpenApiConverter를 Go로 포팅
- **LOC**: ~3000 Go
- **난이도**: 고

#### `typia.json.stringify<T>` (★ typia의 백미)
- 1129 LOC TS → ~2500 Go
- inline JSON 합성, template literal 최적화
- `StringifyJoinder` 특수 로직 포팅
- **LOC**: ~2500 Go
- **난이도**: 고

#### `typia.json.parse<T>` / `assertParse<T>`
- JSON.parse + validate 결합
- **LOC**: ~800 Go
- **난이도**: 중

#### `typia.json.application<Class>`
- 클래스 메소드 전부 추출 → 메서드별 schema
- NestJS / nestia 통합 필요
- **LOC**: ~1200 Go
- **난이도**: 고

→ Priority 2 총 ~7500 Go LOC, 3개월.

### Priority 3: Misc / 기타

#### `typia.misc.clone<T>`
- 깊은 복사 코드 생성
- **LOC**: ~1000 Go
- **난이도**: 중

#### `typia.misc.prune<T>`
- extra property 제거
- **LOC**: ~800 Go
- **난이도**: 중

#### `typia.misc.literals<T>`
- union → array of literals
- **LOC**: ~300 Go
- **난이도**: 낮

#### `typia.notations.camel / pascal / snake<T>`
- 키 이름 변환
- **LOC**: ~1000 Go
- **난이도**: 중

#### `typia.reflect.schema<T>`, `reflect.name<T>`
- runtime에 IR 노출
- **LOC**: ~500 Go
- **난이도**: 낮

#### `typia.functional.assertFunction / assertParameters / assertReturn`
- 함수 선언 분석 + 파라미터·리턴 wrap
- **LOC**: ~1500 Go
- **난이도**: 고

#### `typia.http.formData / queryObject / headers / parameter`
- string-only 입력을 타입으로 coerce
- **LOC**: ~2000 Go
- **난이도**: 고

→ Priority 3 총 ~7100 Go LOC, 2개월.

### Priority 4: Specialized

#### `typia.random<T>` / `createRandom<T>`
- 1200 LOC TS → ~3000 Go
- 제약 존중(tags.*)
- IRandomGenerator 인터페이스
- **LOC**: ~3000 Go
- **난이도**: 고

#### `typia.protobuf.message<T>`, `encode<T>`, `decode<T>`
- .proto IDL 생성 + wire format encode/decode
- `_ProtobufWriter`, `_ProtobufReader` 포팅
- **LOC**: ~4000 Go
- **난이도**: 고

→ Priority 4 총 ~7000 Go LOC, 2~3개월.

### Priority 5: LLM (★ 차별점)

#### `typia.llm.application<Class, Model>`
- 13 namespace 중 가장 복잡
- 모델별(chatgpt/claude/gemini/llama/...) 스키마 분기
- JSDoc에서 description 추출
- ILlmApplication 구조 생성
- **LOC**: ~3000 Go
- **난이도**: 고

#### `typia.llm.controller<Class>`
- application + 인스턴스 결합
- **LOC**: ~500 Go
- **난이도**: 중

#### `typia.llm.schema<T>`, `llm.parameters<T>`, `llm.structuredOutput<T>`
- 단일 타입 → LLM 스키마
- **LOC**: ~2000 Go (공통 ILlmSchema 로직)
- **난이도**: 고

#### ILlmFunction의 parse / coerce / validate
- **런타임 헬퍼**이므로 Go 포팅 대상 아님 (`@typia/runtime`에 계속 유지)
- LlmJson lenient parser는 이미 JS로 존재 → Go 측에서 emit 코드에 삽입만

→ Priority 5 총 ~5500 Go LOC, 2~3개월.

## 합산

| Priority | LOC | 개월 |
|---|---|---|
| 1. Validators | ~5,000 | 2~3 |
| 2. JSON | ~7,500 | 3 |
| 3. Misc | ~7,100 | 2 |
| 4. Protobuf + Random | ~7,000 | 2~3 |
| 5. LLM | ~5,500 | 2~3 |
| **Programmers 소계** | **~32,000** | **11~14** |
| + metadata/analyzer/shim/cli/tests | ~30,000 | ~6 |
| + 통합·벤치·릴리스 준비 | ~5,000 | ~2 |
| **총계** | **~70,000** | **~19~22 개월** |

실제로는 중간에 오버랩 발생 + AI 페어링 생산성 → **18~20 개월** 예상.

## 기능 간 의존성

```
metadata + analyzer
  ↓
is / assert / validate
  ↓
equals → json.schema → json.stringify / parse
  ↓                      ↓
random          llm.schema / llm.parameters
  ↓                      ↓
protobuf          llm.application / controller / structuredOutput
                          ↓
                  functional
                          ↓
                  http / notations / misc / reflect
```

→ metadata가 모든 기능의 필수 기반. **가장 먼저 완성**해야 함.

## 어떤 기능은 포팅 빼도 되는가? (Non-essential)

### 필수
- validators, json, llm

### 선택 (v1.1+ 로 미룰 수 있음)
- protobuf (별도 프로젝트 화 가능)
- random (typia 사용자 중 10% 미만 추정)
- http.* (nestia로 이동 가능)
- notations, reflect, functional (드물게 사용)

→ **v1.0 MVP 범위 축소로 12~14개월 내 출시 가능**.

## 권장 마일스톤 순서

```
M1 (3개월)  metadata 스키마 + analyzer + is
M2 (3개월)  assert/validate/equals + 자동 테스트 재사용
M3 (3개월)  json.schema / stringify / parse
M4 (2개월)  llm.schema / application (MVP 경쟁력 확보)
M5 (1개월)  misc / notations / http / reflect (간단)
M6 (2개월)  random (우선순위 낮음)
M7 (2개월)  protobuf (우선순위 낮음)
M8 (2개월)  functional + 전체 통합 + 벤치

총 18개월
```

## 한 줄 요약

> **validators + json + llm만 v1.0에 넣으면 12~14개월에 가능.** protobuf / random / misc는 v1.1로 미룰 수 있음. typia 사용 패턴 분석으로 우선순위 최적화.
