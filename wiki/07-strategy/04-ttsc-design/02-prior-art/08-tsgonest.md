# Prior Art 8 — tsgonest/tsgonest ★ 최중요

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 분석 대상: `/mnt/d/github/contributions/tsgonest`
> 중요도: ★★★★★★★ (★ 7개). **typia+nestia의 Go 포팅 실제 구현체**. 옵션 C의 **살아있는 증거**이자 **직접 경쟁자**.

## 한 줄 요약

> **tsgonest = "typia + nestia"를 Go로 재구현한 독립 프로젝트.** 72,200 LOC의 Go 코드로 이미 v0.13.5 (49 releases). NestJS "drop-in replacement"로 자리매김 중. samchon의 typia가 Go 포팅을 안 하면 이 프로젝트에 잠식될 수 있고, 하면 참고 교과서가 된다.

## 저장소 현황

| 항목 | 값 |
|---|---|
| Stars | 13 (신생) |
| Forks | 3 |
| Releases | **49** (v0.13.5, 2026-04-15) |
| Commits | 174 on main |
| 언어 | **Go 71.5%**, TypeScript 19.5%, MDX 8.2% |
| License | MIT |
| Go LOC | **~72,200** (internal/ + cmd/ + shim 제외) |
| 플랫폼 | macOS/Linux/Windows × ARM64/x64 |

## 전체 아키텍처

```
┌───────────────────────────────────────────┐
│ User NestJS Project                       │
│   tsgonest.config.ts (optional)           │
│   src/*.ts (@Controller, @Body, …)        │
└─────────┬─────────────────────────────────┘
          │ npx tsgonest build
          ▼
┌───────────────────────────────────────────┐
│ @tsgonest/cli-{platform}-{arch}           │
│   (native Go binary, ~6 platforms)        │
└─────────┬─────────────────────────────────┘
          │ (internal Go calls)
          ▼
┌───────────────────────────────────────────┐
│ shim/ ast, checker, compiler, ...         │
│   (go:linkname to typescript-go internal) │
└─────────┬─────────────────────────────────┘
          │
          ▼
┌───────────────────────────────────────────┐
│ typescript-go (git submodule)             │
│   (upstream, minimal patches in patches/) │
└───────────────────────────────────────────┘
```

## typescript-go 통합 방식

`.gitmodules`:
```
[submodule "typescript-go"]
    path = typescript-go
    url = https://github.com/microsoft/typescript-go
    ignore = dirty
```

`go.mod`:
```go
module github.com/tsgonest/tsgonest
go 1.26

replace (
    github.com/microsoft/typescript-go/shim/ast       => ./shim/ast
    github.com/microsoft/typescript-go/shim/bundled   => ./shim/bundled
    github.com/microsoft/typescript-go/shim/checker   => ./shim/checker
    github.com/microsoft/typescript-go/shim/compiler  => ./shim/compiler
    github.com/microsoft/typescript-go/shim/core      => ./shim/core
    github.com/microsoft/typescript-go/shim/execute/incremental => ./shim/execute/incremental
    github.com/microsoft/typescript-go/shim/parser    => ./shim/parser
    github.com/microsoft/typescript-go/shim/scanner   => ./shim/scanner
    github.com/microsoft/typescript-go/shim/tsoptions => ./shim/tsoptions
    github.com/microsoft/typescript-go/shim/tspath    => ./shim/tspath
    github.com/microsoft/typescript-go/shim/vfs       => ./shim/vfs
    github.com/microsoft/typescript-go/shim/vfs/cachedvfs => ./shim/vfs/cachedvfs
    github.com/microsoft/typescript-go/shim/vfs/osvfs    => ./shim/vfs/osvfs
)

require (
    github.com/microsoft/typescript-go v0.0.0-20260408193441-2a5e1cf9fe22
    github.com/fsnotify/fsnotify v1.9.0
    github.com/go-json-experiment/json v0.0.0-20260214004413-d219187c3433
    golang.org/x/tools v0.43.0
)
```

**핵심 관찰**:
1. **Fork 아님**. upstream을 submodule로 참조.
2. **shim을 local replace**로 inject — tsgolint와 동일.
3. **patches/** 디렉토리 별도 존재 (최소한의 변경만).
4. Go 1.26, typescript-go도 1.26.

## 디렉토리 구조

```
tsgonest/
├── cmd/tsgonest/
│   ├── main.go            entry (서브커맨드 라우팅)
│   ├── build.go           (1064 LOC, 가장 복잡한 파이프라인)
│   ├── check.go, dev.go, openapi.go, sdk.go, migrate.go, dump.go
│   └── pipeline.go        path alias, config loading
├── internal/
│   ├── analyzer/
│   │   ├── type_walker.go     (typia MetadataFactory 동등)
│   │   ├── routes.go          (NestJS 라우트 분석)
│   │   ├── nestjs.go          (@Controller, @Get, @Body 파싱)
│   │   ├── branded.go         (branded type 추출)
│   │   ├── constraints.go     (tags.Email 등 제약)
│   │   ├── jsdoc.go           (@summary, @description, @deprecated)
│   │   ├── decorator_origin.go
│   │   └── glob.go
│   ├── codegen/
│   │   ├── emitter.go         (JS 코드 빌더)
│   │   ├── validate.go        (검증 함수 생성)
│   │   ├── validate_is.go     (pure boolean)
│   │   ├── validate_assert.go (throw-on-error)
│   │   ├── validate_constraints.go
│   │   ├── serialize.go       (JSON stringify)
│   │   ├── companion.go       (validate+assert+serialize+schema 통합)
│   │   ├── formats.go         (email, uuid, url 등 32개 format)
│   │   └── helpers.go
│   ├── metadata/
│   │   └── metadata.go        (typia MetadataSchema 동등)
│   ├── openapi/
│   │   ├── generator.go       (OpenAPI 3.2 문서 생성)
│   │   └── schema.go          (metadata → JSON Schema)
│   ├── rewrite/
│   │   ├── rewrite.go         (Emit 중 WriteFile callback)
│   │   └── controllers.go     (컨트롤러 body에 validation/serialization inject)
│   ├── buildcache/            (incremental 캐시)
│   └── nestjs/                (SSE, EventStream 등)
├── shim/                      (10개 shim 패키지, ~1500 go:linkname 추정)
├── patches/                   (typescript-go minimal patches)
├── packages/
│   ├── core/                  npm 메인 (@tsgonest CLI 런처)
│   ├── runtime/               @tsgonest/runtime (defineConfig, errors)
│   └── types/                 @tsgonest/types (tags.Email, tags.Min<N>)
├── cmd/tsgonest/assets/       (generated JS helpers embedded)
├── typescript-go/             (git submodule)
├── e2e/, testdata/, benchmarks/
└── docs/, docs.json           (https://tsgonest.dev)
```

## 핵심 Go 컴포넌트 대응

| tsgonest | typia 대응 |
|---|---|
| `internal/metadata/metadata.go` | `@typia/core/schemas/metadata/MetadataSchema.ts` |
| `internal/analyzer/type_walker.go` | `@typia/core/factories/MetadataFactory.ts` + `explore_metadata.ts` 등 |
| `internal/codegen/validate_is.go` | `IsProgrammer.ts` |
| `internal/codegen/validate_assert.go` | `AssertProgrammer.ts` |
| `internal/codegen/validate.go` | `ValidateProgrammer.ts` |
| `internal/codegen/serialize.go` | `JsonStringifyProgrammer.ts` |
| `internal/codegen/companion.go` | N/A (typia는 호출별 emit) |
| `internal/codegen/emitter.go` | `ts.factory.*` 사용 |
| `internal/codegen/formats.go` | `_isFormat*` 헬퍼들 |
| `internal/openapi/` | `JsonSchemaProgrammer` + `OpenApiConverter` |
| `internal/rewrite/controllers.go` | @nestia/core의 decorator + interceptor |
| `packages/types/` | `@typia/interface/tags/` |
| `patches/` | Effect-TS의 `_patches/` |
| `shim/` | tsgolint의 `shim/` |

→ **거의 1:1 대응**. typia의 구조를 그대로 Go로 옮긴 구조.

## 실제 사용법

### 사용자 입력 (interface)
```ts
import { tags } from '@tsgonest/types';

export interface CreateUserDto {
  name: string & tags.Trim & tags.MinLength<1>;
  email: string & tags.Email;
  age: number & tags.Min<0> & tags.Max<150>;
}

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.service.create(body);
  }
}
```

### 빌드
```bash
npx tsgonest build
```

### 생성된 validation 함수 (~.tsgonest.js)
```js
export function validateCreateUserDto(input) {
  if (!isCreateUserDto(input))
    throw new __e("CreateUserDto", input);
  return input;
}

export function isCreateUserDto(input) {
  if (typeof input !== "object" || input === null) return false;
  if (typeof input.email !== "string") return false;
  if (!/^.+@.+\..+$/.test(input.email)) return false;
  if (typeof input.name !== "string") return false;
  if (input.name.length < 1) return false;
  if (typeof input.age !== "number") return false;
  if (input.age < 0) return false;
  return true;
}

export function serializeCreateUserDto(input) {
  return JSON.stringify({
    email: __s(input.email),
    name: __s(input.name),
    age: "" + input.age
  });
}
```

→ **typia emit 품질과 동등**. inline, zero allocation, fast-path.

## CLI 명령어

```
tsgonest build          # Production build
tsgonest dev            # Watch mode
tsgonest check --watch  # Type check only
tsgonest openapi        # OpenAPI 3.2 생성
tsgonest sdk            # Typed client SDK 생성
tsgonest migrate --apply  # class-validator / typia / nestia → tsgonest
tsgonest dump           # debug
```

**중요**: `tsgonest migrate` 명령이 **typia/nestia 사용자를 tsgonest로 전환**시키는 자동화 — 경쟁 위협 표면.

## 기능 범위

| 기능 | tsgonest | typia |
|---|---|---|
| Runtime 검증 | ✅ is/assert/validate | ✅ |
| JSON serialize | ✅ inline | ✅ 200× |
| JSON parse | ✅ | ✅ |
| OpenAPI | ✅ **3.2 only** | ✅ 3.0/3.1 |
| SDK 생성 | ✅ | nestia 영역 |
| Protobuf | ❌ | ✅ |
| LLM function calling | ❌ | ✅ |
| LLM structured output | ❌ | ✅ |
| MCP adapter | ❌ | ✅ |
| Random 생성 | ❌ | ✅ |
| clone/prune/literals | ❌ | ✅ |
| Template literal types | 부분 | ✅ |
| 32 built-in formats | ✅ | ✅ (비슷) |
| Custom validators | ✅ `tags.Validate<typeof fn>` | ✅ |
| 프레임워크 | **NestJS 전용** | 범용 (NestJS는 nestia) |
| 빌드 도구 | **독립 Go 바이너리** | ts-patch / unplugin |

## 성능 주장
- "~10x faster compilation than tsc + class-validator + @nestjs/swagger"
- "Zero runtime overhead"
- 상세 벤치 공개 아직 (benchmarks/ 디렉토리 존재하나 GitHub readme에는 미표시)

## samchon에게의 의미

### 위협 측면
1. **선점**: v0.13.5, 49 releases — 이미 상용 가능 수준
2. **Migration 자동화**: `tsgonest migrate`가 기존 typia/nestia 사용자 흡수
3. **속도 우위**: Go 네이티브, 10× 컴파일 속도
4. **Zero setup**: ts-patch 불필요 — 신규 사용자 진입 장벽 낮음
5. **NestJS 시장**: nestia의 핵심 시장 직공략
6. 시간 지나면 다른 프레임워크(Hono, Express) 추가 가능

### 기회 측면 (samchon이 반드시 활용할 것)
1. **옵션 C 실현 가능성 완전 증명** — 기술적 의심 해소
2. **아키텍처 교과서**: shim, metadata schema, emitter 패턴 그대로 차용
3. **LOC 실측**: typia-go 예산 ~100~150K LOC (tsgonest 72K + typia 추가 기능)
4. **차별점**: tsgonest가 포기한 **LLM / Protobuf / 범용 프레임워크** 영역에서 typia 우위 보존
5. **Migration 역방향**: typia 쪽도 `typia migrate --from tsgonest` 제공 가능
6. **Agentica/AutoBE 결합**: tsgonest가 못 하는 LLM agent 영역은 typia의 결정적 방어선

### 구체 차용 패턴
1. **shim 13개**: tsgolint + tsgonest + effect-tsgo 세 곳의 shim 패턴 합집합
2. **metadata schema**: `internal/metadata/metadata.go` 참고해 typia-go 버전 설계
3. **Emitter pattern**: `internal/codegen/emitter.go`의 Line/Block/EndBlock builder
4. **Rewrite callback**: `internal/rewrite/rewrite.go`의 WriteFile hook (이게 **transform 주입의 진짜 답**)
5. **Platform binary + npm launcher**: `packages/core` 패턴

### 배제할 부분
1. OpenAPI 3.2 only — typia는 3.0/3.1/3.2 모두 유지
2. NestJS only — typia는 프레임워크 중립 유지
3. @tsgonest/types vs `typia/lib/tags` — 기존 typia tags 호환 유지

## 흥미로운 Rewrite 모델 (emit-time transformation)

`internal/rewrite/rewrite.go` + `controllers.go`의 접근:
- **Emitter가 JS 파일을 write하기 직전**에 콜백에서 수정
- path alias inline
- marker (`tsgonest.validate<T>()` 호출) 치환
- 컨트롤러 body에 validation/serialization inject

이는 **Effect-TS의 transform chain patch와 다른 접근** — 컴파일 후 파일 기반 수정.

### 장점
- transform chain에 patch 불필요
- tsgo upstream 변경에 덜 민감
- 별도 AST 순회 비용 최소

### 단점
- 이미 emit된 JS를 문자열 편집 — 타입 정보 소실
- sourcemap 관리 복잡
- 새로운 함수·파일 생성은 자연스럽지 않음 (companion 파일 패턴으로 우회)

→ **이 패턴은 ttsc에도 적용 가능한 대안**. Cycle 3 설계에서 재평가.

## 주요 파일 (25개 핵심)

| 파일 | LOC | 책임 |
|---|---|---|
| `cmd/tsgonest/main.go` | ~50 | 서브커맨드 라우팅 |
| `cmd/tsgonest/build.go` | **1064** | 전체 빌드 파이프라인 |
| `cmd/tsgonest/pipeline.go` | ~400 | config, path alias |
| `cmd/tsgonest/openapi.go` | ~300 | openapi 명령 |
| `cmd/tsgonest/migrate.go` | ~500 | migrate 명령 (핵심 위협) |
| `internal/analyzer/type_walker.go` | ~800 | MetadataFactory 동등 |
| `internal/analyzer/routes.go` | ~500 | NestJS 라우트 |
| `internal/analyzer/nestjs.go` | ~600 | 데코레이터 파싱 |
| `internal/analyzer/constraints.go` | ~400 | branded type |
| `internal/analyzer/jsdoc.go` | ~200 | JSDoc 태그 |
| `internal/codegen/emitter.go` | ~300 | JS 코드 빌더 |
| `internal/codegen/validate.go` | ~400 | 검증 생성 상위 |
| `internal/codegen/validate_is.go` | ~500 | is 전용 |
| `internal/codegen/validate_assert.go` | ~500 | assert 전용 |
| `internal/codegen/serialize.go` | ~400 | JSON stringify |
| `internal/codegen/companion.go` | ~600 | 통합 emit |
| `internal/codegen/formats.go` | ~600 | 32 formats |
| `internal/metadata/metadata.go` | ~500 | MetadataSchema |
| `internal/openapi/generator.go` | ~800 | OpenAPI 3.2 |
| `internal/openapi/schema.go` | ~400 | metadata → JSON Schema |
| `internal/rewrite/rewrite.go` | ~400 | Emit 중 rewrite |
| `internal/rewrite/controllers.go` | ~500 | 컨트롤러 inject |
| `packages/core/package.json` | - | CLI 런처 |
| `packages/runtime/src/index.ts` | ~200 | runtime helpers |
| `packages/types/src/index.ts` | ~300 | branded types |

## 최종 판단

### tsgonest는 무엇인가?
**경쟁자 + 선조 + 교과서**. 세 역할 동시.

### samchon의 답
1. **무시 금지** — 성숙 속도 너무 빠름, 이미 migration 도구까지 있음
2. **Go 포팅은 이제 선택이 아닌 필수 옵션** — tsgonest가 기술적 실현성을 증명 완료
3. **차별점 극대화** — LLM, Protobuf, 다중 프레임워크, 13 namespace는 typia의 해자
4. **협력 가능성도 배제 안 함** — 장기적 표준화(OpenAPI 3.x 호환성 등)에서 합력 여지

## 한 줄 결론

> **tsgonest는 samchon이 미룰 수 없는 결정을 강제한다: 옵션 C(typia Go 포팅)를 지금 시작할 것인가, tsgonest에 NestJS 시장을 넘길 것인가.** 이 결정이 Cycle 4-5의 중심 주제.
