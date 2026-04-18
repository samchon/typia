# 02. Scope and Non-Goals

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


## 포팅 대상 (Scope)

### In-Scope: 사용자가 호출하는 모든 것

typia의 13 namespace 전부:

| 그룹 | 기능 |
|---|---|
| **Validators** | is, assert, validate, equals, assertEquals, validateEquals, assertGuard, createIs, createAssert, createValidate, createEquals, createAssertGuard |
| **JSON** | json.schema, schemas, application, parse, stringify, assertParse, assertStringify |
| **LLM** | llm.application, controller, schema, parameters, structuredOutput |
| **Protobuf** | protobuf.message, encode, decode, assertEncode, assertDecode |
| **Random** | random, createRandom |
| **Misc** | misc.clone, prune, literals |
| **Notations** | notations.camel, pascal, snake |
| **Reflect** | reflect.schema, reflect.name |
| **Functional** | functional.assertFunction, assertParameters, assertReturn |
| **HTTP** | http.formData, queryObject, headers, parameter |

**총 API 수**: ~50개 함수 + factory 변형

### In-Scope: 내부 엔진
- MetadataSchema (자체 IR)
- MetadataFactory
- 13 Programmer
- Helper (`_isFormat*`, `_ProtobufWriter` 등)
- TypeGuardError
- IRandomGenerator 인터페이스

### In-Scope: Standard Schema 어댑터
[06-feedback/03-improvement-proposals.md](../../06-feedback/03-improvement-proposals.md) A1 — `~standard` 인터페이스. Go 측에서 emit 코드에 자동 주입.

### In-Scope: 플랫폼 배포
- macOS (ARM64, x64)
- Linux (ARM64, ARMv6, x64, musl 호환)
- Windows (ARM64, x64)
- 선택: WebAssembly (Edge 런타임용)

## 포팅 제외 (Non-Goals)

### Non-goal 1. tsgonest의 기능 복사
tsgonest는 NestJS 전용, OpenAPI 3.2만. typia-go는 **typia의 범용성**을 유지 — 프레임워크 중립, OpenAPI 3.0/3.1/3.2 모두.

### Non-goal 2. nestia의 기능 흡수
nestia는 별도 유지. typia-go는 typia core만. nestia도 추후 Go 포팅 고려 가능 (별도 프로젝트).

### Non-goal 3. 런타임 라이브러리 대체
검증 실행 시 `TypeGuardError`, `_isFormatEmail` 등은 여전히 emit된 JS에 남음. 이는 `@typia/runtime` npm 패키지로 배포. typia-go 바이너리와 분리.

### Non-goal 4. 자동 주입 (typical 스타일)
typical은 함수 파라미터 자동 검증하지만 typia는 명시적 `typia.is<T>()` 호출 유지. **사상 양보 방지**.

### Non-goal 5. LSP / IDE plugin
- tsgo/@typescript/native-preview가 이미 담당. typia-go는 CLI + build 단계에 집중.
- typia의 IDE 경험은 TypeScript language server가 타입 검사, typia는 빌드 시 emit 변환만.

### Non-goal 6. Python / Rust 바인딩
Go 단일. 다언어 바인딩은 Go code의 unreliable FFI 부담.

## 전제 조건

### 기술적
- Go 1.26+ (typescript-go와 동일)
- `go:linkname` 사용 (필요하면 unsafe)
- Nix 빌드 (Effect-TS 참고) 또는 순수 Go toolchain

### 사용자 측
- `npm i typia` 한 번으로 설치 (tsgonest 모델)
- `tsconfig.json`의 `plugins[]` entry는 호환 유지 (migrate 불필요)
- 기존 사용자 코드 100% 그대로 작동

### 개발 측
- 18~24 person-months 투입 의지
- 기존 typia TS core 폐기 의지
- Go 스킬 습득 또는 Go 조력자 1인

## 경계 사례

### TS 6.x 호환
- typia-go도 TS 6 문법을 수용 (tsgo가 모든 TS 문법 처리 가능)
- 과거 TS 5.x 전용 기능(legacy decorator 등)은 tsgo가 지원하는 범위 내에서만

### Node 의존
- typia-go CLI는 Node 불필요 (Go 바이너리만)
- 단, emit된 JS의 런타임 헬퍼(`@typia/runtime`)는 Node 환경 가정 (또는 Deno/Bun/Browser 등)
- Edge runtime에서 WASM 폴백 검토

### IDE 경험
- tsgo의 TypeScript Language Server가 기본 — typia는 emit 단계만
- typia가 tsserver plugin 제공은 Non-goal. 필요하면 ttsc 경로 유지.

## 품질 기준 (DoD)

- typia test suite 100% 통과 (특히 168 × 40 test-typia-automated)
- 벤치마크: tsc + ts-patch 대비 ≥ 8× 빠름
- 바이너리 크기 < 50 MB per platform
- cold start < 500ms
- `typia.is<Member>(input)` emit 결과 = 기존 emit 결과 (byte-level diff 최소)

## 한 줄 요약

> **typia-go는 typia 사용자 경험을 한 자도 바꾸지 않으면서 구현을 100% Go로 옮긴다. tsgonest/typical이 해결 못 한 영역(LLM, Protobuf, 범용성, 13 namespace)이 차별점.**
