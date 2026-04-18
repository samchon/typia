# 03. typia-go Architecture

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


## 한 장 그림

```
┌─────────────────────────────────────────────────────────┐
│ 사용자 코드 (TypeScript)                                 │
│   import typia, { tags } from "typia";                  │
│   typia.is<Member>(input);                              │
│   typia.llm.application<MyClass>();                     │
└─────────────────────────┬───────────────────────────────┘
                          │  typia build (CLI)
                          ▼
┌─────────────────────────────────────────────────────────┐
│ @typia/typia (npm launcher, ~200 LOC Node)              │
│  - bin script 선택 (platform detect)                     │
│  - argv 그대로 전달                                       │
└─────────────────────────┬───────────────────────────────┘
                          │ spawn
                          ▼
┌─────────────────────────────────────────────────────────┐
│ @typia/typia-{platform}-{arch}  (Go 바이너리)            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  cmd/typia/           (CLI entry)                │   │
│  │    main.go, build.go, dev.go, generate.go        │   │
│  │    check.go, openapi.go, llm.go, migrate.go      │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐   │
│  │  internal/analyzer/   (MetadataFactory)          │   │
│  │    type_walker.go, metadata_factory.go           │   │
│  │    intersection.go, union.go, generic.go         │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐   │
│  │  internal/metadata/   (자체 IR)                  │   │
│  │    schema.go, property.go, array.go, tuple.go    │   │
│  │    atomic.go, constant.go, alias.go, native.go   │   │
│  │    collection.go, tag.go                         │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐   │
│  │  internal/codegen/    (Programmer 13종)          │   │
│  │    is.go, assert.go, validate.go                 │   │
│  │    equals.go                                      │   │
│  │    json_schema.go, json_stringify.go, parse.go   │   │
│  │    llm_schema.go, llm_application.go             │   │
│  │    protobuf_encode.go, protobuf_decode.go        │   │
│  │    random.go, clone.go, prune.go                 │   │
│  │    http.go, notation.go, functional.go           │   │
│  │    emitter.go (공통 JS 코드 빌더)                 │   │
│  │    helpers.go (format 검증 코드)                  │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐   │
│  │  internal/rewrite/    (emit-time 주입)           │   │
│  │    rewrite.go, typia_call.go                     │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐   │
│  │  shim/                (go:linkname)              │   │
│  │    ast/, checker/, compiler/, core/, parser/,    │   │
│  │    scanner/, tsoptions/, tspath/, vfs/, bundled/  │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                               │
└─────────────────────────┼───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│ typescript-go (git submodule, patch 0~2개)              │
└─────────────────────────────────────────────────────────┘
```

## 배포 아티팩트

```
npm:
  @typia/typia                  (launcher, ~200 LOC Node)
  @typia/typia-darwin-arm64     (Go 바이너리)
  @typia/typia-darwin-x64
  @typia/typia-linux-arm64
  @typia/typia-linux-arm        (Raspberry Pi)
  @typia/typia-linux-x64
  @typia/typia-win32-arm64
  @typia/typia-win32-x64
  
  @typia/interface              (0-dep 타입, 그대로 유지)
  @typia/runtime                (런타임 헬퍼 + TypeGuardError + IRandomGenerator)
```

## Go 모듈 구조

`go.mod` 설계:
```go
module github.com/samchon/typia-go
go 1.26

replace (
  github.com/microsoft/typescript-go/shim/ast      => ./shim/ast
  github.com/microsoft/typescript-go/shim/checker  => ./shim/checker
  github.com/microsoft/typescript-go/shim/compiler => ./shim/compiler
  // ... 13 shim 패키지
)

require (
  github.com/microsoft/typescript-go v...        // submodule pinned
  github.com/fsnotify/fsnotify v1.9.0            // watch mode
  github.com/go-json-experiment/json v...        // 빠른 JSON
  golang.org/x/tools v0.43.0                     // gen_shims용
)
```

## 3-Layer 분리 원칙

### Layer 1: shim/ (unstable boundary)
- `go:linkname`으로 tsgo internal 접근
- 13~15 shim 패키지
- `tools/gen_shims/main.go` 자동 생성기 (tsgolint / Effect-TS / tsgonest 공통 패턴 차용)
- 이 layer만 tsgo 변경에 영향

### Layer 2: internal/ (stable logic)
- metadata / analyzer / codegen / rewrite
- shim을 통해 tsgo API 사용
- typia의 모든 비즈니스 로직

### Layer 3: cmd/ (CLI surface)
- 사용자 진입점
- 서브커맨드
- 설정 로드

## tsgo와의 결합 방식

**선택 1**: 완전 submodule (tsgonest 방식)
- typescript-go를 git submodule로 포함
- go.mod에서 로컬 경로 참조
- 장점: 재현가능, 빌드 격리
- 단점: 저장소 크기 ↑

**선택 2**: 외부 의존 (일반 Go 방식)
- `require github.com/microsoft/typescript-go v0.xx.x`
- 장점: 가벼움
- 단점: 버전 고정 시 replace 사용

**권장**: 선택 1 (submodule). 재현성 + 디버깅 편의.

## Patch 최소화

tsgolint가 증명: **대부분 shim으로 해결**. typia-go에 필요한 patch는:

| 후보 patch | 필요성 | 대안 |
|---|---|---|
| `emitter.go`에 "pre-emit hook" 추가 | 필요 (typia call을 emit 직전 치환) | `internal/rewrite/` — emit 후 파일 수정으로 우회 |
| `compiler.go`에 plugin option field | 선택 | Go 측 ttscore 모듈에서 config 로드 |
| `checker.go`에 diagnostic code 확장 | 선택 | 기존 diagnostic code 재활용 |

→ **이상적 patch 수: 0~2개**. tsgonest가 이미 입증.

## 성능 설계

### 병렬 처리
- `program.ForEachCheckerParallel` (tsgolint 패턴) — worker pool
- 파일별 codegen 병렬
- `runtime.GOMAXPROCS(0)`

### 캐싱
- `buildcache/` — file hash 기반 incremental
- emit 결과 디스크 캐시
- watch mode 시 변경 파일만 재생성

### 메모리
- `internal/metadata/` collection은 재귀 타입에 대비한 캐시 포함 (typia MetadataCollection 동등)

## 빌드 파이프라인

Nix flake (Effect-TS 방식) + GitHub Actions:
```
build:
  1. go generate ./tools/gen_shims  (shim 재생성)
  2. go generate ./internal/diagnostics  (i18n 메시지 생성)
  3. go build -ldflags="-s -w" ./cmd/typia  (각 플랫폼)
  4. npm publish @typia/typia-{plat}-{arch}
  5. npm publish @typia/typia  (main launcher)
```

## 사용자 경험 (before / after)

### before (typia v12)
```bash
npm i -D typescript typia ts-patch
# package.json: "prepare": "ts-patch install"
# tsconfig.json: plugins: [{ "transform": "typia/lib/transform" }]
npm run build    # tsc with patched typia transformer
```

### after (typia v13 = typia-go)
```bash
npm i -D typia
# tsconfig.json 변경 없음
# ts-patch 불필요
# prepare 스크립트 불필요
npx typia build   # 또는 typia가 자동으로 tsc 대체
```

→ **사용자 setup 시간 90% 감소**.

## tsgonest와의 기술적 차별화

같은 prior art를 참고해도 typia-go는 다음을 지킨다:

1. **13 namespace 전부** (tsgonest는 4개)
2. **프레임워크 중립** (tsgonest는 NestJS 전용)
3. **OpenAPI 3.0/3.1/3.2 모두** (tsgonest는 3.2만)
4. **LLM function calling** — tsgonest에 없는 결정적 차별점
5. **Protobuf encode/decode** — 바이너리 프로토콜 영역
6. **Random 데이터 생성** — 테스트·fixture·LLM 학습용
7. **tags 생태계 보존** — typia의 기존 `tags.*`를 그대로 유지

## 한 줄 결론

> **typia-go = tsgonest의 구조 + typia의 모든 기능.** 18~24 개월 후 생기는 산출물은 tsgonest 대비 범위가 3배 넓고 깊이는 동등.

→ 다음 [04. TS core → Go 매핑](04-mapping-typia-core-to-go.md)
