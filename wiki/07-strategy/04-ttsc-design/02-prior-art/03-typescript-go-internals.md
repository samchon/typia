# Prior Art 3 — typescript-go 내부 지도

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 분석 대상: `/mnt/d/github/contributions/typescript-go` (Microsoft 공식)
> 중요도: ★★★★★ (ttsc가 물려받거나 우회할 시스템 자체)

## 저장소 개요

- Go 1.26 단일 모듈 (`go.mod`: `github.com/microsoft/typescript-go`)
- npm workspace: `_extension/`, `_packages/native-preview`, `_packages/ast`, `_packages/api`
- **.go 파일 약 4,500개, 37 MB**
- Hereby task runner + Go make 병행 (`Herebyfile.mjs`)

## 실행 진입점: cmd/tsgo

`cmd/tsgo/main.go:13-25`:
```go
func runMain() int {
  args := os.Args[1:]
  if len(args) > 0 {
    switch args[0] {
    case "--lsp":   return runLSP(args[1:])
    case "--api":   return runAPI(args[1:])
    }
  }
  result := execute.CommandLine(newSystem(), args, nil)
  return int(result.Status)
}
```

3개 모드:
- **기본** — `tsgo file.ts` (표준 컴파일)
- `--lsp` — Language Server
- `--api` — IPC API 서버 (PR #711 본체)

## 컴파일 파이프라인

```
execute.CommandLine → ParseCommandLine → tscCompilation
  → compiler.Program (parse, bind, check)
  → emitter.Emit (transform chain + printer)
```

`internal/execute/tsc.go:95~` 부터 표준 흐름.

## internal/api — IPC 서버 (ttsc 가장 중요)

### 프로토콜
두 가지 선택:

**MessagePack** (기본, 동기):
- 3-튜플 `[MessageType, method, payload]`
- `protocol_msgpack.go`의 `msgpackBin8/16/32` (0xC4~0xC6) + 길이 + 데이터
- Node 클라이언트는 `@typescript/libsyncrpc` (sync stdio)

**JSON-RPC** (비동기):
- LSP 스타일 Content-Length 헤더 + JSON
- `protocol_jsonrpc.go`

### 전송
- `transport.go` — stdio / named pipe / unix socket 추상화
- `conn_sync.go` (MessagePack), `conn_async.go` (JSON-RPC)

### Session / Snapshot 모델

```go
// session.go:31-44
type snapshotData struct {
  snapshot         *project.Snapshot
  symbolRegistry   map[Handle[ast.Symbol]]*ast.Symbol
  typeRegistry     map[Handle[checker.Type]]*checker.Type
  signatureRegistry map[Handle[checker.Signature]]*checker.Signature
}
```

- `Session` — 클라이언트 세션
- `Snapshot` — 파일 상태의 **불변 스냅샷**
- Handle 체계 (`proto.go:29-59`):
  - Project: `'p'` + ID
  - Symbol: `'s'` + hex ID
  - Type: `'t'` + hex ID
  - Node: `pos.end.kind.path` 텍스트 포맷

### API 메소드 67개 (`proto.go:94-171`)

주요 카테고리:
- 초기화: `Initialize`, `UpdateSnapshot`, `ParseConfigFile`
- Symbol: `GetSymbolAtPosition`, `GetSymbolAtLocation`
- Type: `GetTypeOfSymbol`, `GetPropertiesOfType`, `GetIndexInfosOfType`, `TypeToTypeNode`
- Node: `GetSourceFile`, `PrintNode` (emit)
- Diagnostics: `GetSyntacticDiagnostics`, `GetSemanticDiagnostics`, …

**제약**: 전부 **읽기 전용 쿼리**. AST 조작 후 재컴파일은 **불가능**.

### Callback FS
`callbackfs.go` — `--callbacks` 옵션 시 readFile/fileExists 등 파일 작업을 클라이언트로 역위임. 가상 파일 시스템 통합 가능.

## internal/transformers — 변환 체인

```
transformers/
  transformer.go       (기본 Transformer: visit + emitContext)
  chain.go             (순차 실행)
  estransforms/        (async/await, optional chain, ...)
  tstransforms/        (typeeraser, decorator metadata, ...)
  moduletransforms/    (CJS/ESM 변환)
  declarations/        (.d.ts emit)
  jsxtransforms/
  inliners/            (const enum)
```

**가장 중요한 관찰**: `getScriptTransformers()` (`emitter.go:77-120`)가 **하드코딩된 transformer 리스트**를 반환. 외부에서 추가하는 훅 없음. **closed system**.

## internal/ast, internal/checker — 타입 정보

- `ast.Node` — Kind, Pos, End, 자식
- `checker.Type / Symbol / Signature` — JS ts.* API 1:1 매핑 (`GetTypeOfNode → getTypeAtLocation`, `GetPropertiesOfType` 등)
- **Go concurrency**: `checker.GetTypeOfNode(ctx, node)` — `context.Context`로 타임아웃/취소

## @typescript/native-preview 배포

```
_packages/native-preview/
  package.json       # bin: { tsgo: "./bin/tsgo.js" }
  bin/tsgo.js        # Node wrapper
  lib/getExePath.js  # platform/arch별 바이너리 경로 resolve
```

`getExePath.js:6-56` 3단 탐색:
1. 개발 빌드: `./built/local/tsgo[.exe]`
2. npm 빌드: `./built/npm/native-preview/lib/tsgo[.exe]`
3. 설치됨: `node_modules/@typescript/native-preview-{platform}-{arch}/lib/tsgo[.exe]`

각 플랫폼별 **독립 npm 패키지**. cross-compile로 6개 변형 (darwin-arm64/x64, linux-arm/arm64/x64, win32-arm64/x64).

## Plugin/Extension의 공식 지점

| 지점 | 가능한가 | 제약 |
|---|---|---|
| IPC API 67개 메소드 | ✅ | 읽기 전용 |
| LSP 확장 (`_extension/`) | ✅ | VS Code 중심 |
| `--callbacks` FS | ✅ | IO 레벨만 |
| **Custom transformer 추가** | ❌ | `getScriptTransformers()` 하드코딩 |
| AST 조작 후 재emit | ❌ | Snapshot 불변 |

## typia가 transform을 주입하는 4가지 이론적 경로

### 경로 A. IPC로 AST 받아 조작 후 돌려주기
❌ 불가능. API는 read-only.

### 경로 B. Go 소스 fork 후 transformer chain에 inject
✅ **가능**. `getScriptTransformers()` 수정 후 바이너리 재빌드.
- 비용: Go 스킬, fork 유지보수, 플랫폼별 바이너리 배포
- 이게 **Effect-TS/tsgo가 택한 경로**
- **ttsc의 메인 전략**

### 경로 C. Post-compile 후 emit된 JS를 재파싱·수정
✅ 가능. tsgo 실행 → JS 출력 → Node 측에서 TypeScript 파서(@typescript/api)로 재분석 → typia transform → overwrite
- 비용: 타입 정보가 emit에서 사라지므로 **typia.is<T>의 T 추론이 어려워짐**. 별도 .d.ts 재파싱 필요
- → typia의 경우 **매우 힘듦**. 타입 제거 후의 JS에는 T가 없다.

### 경로 D. IPC로 type info 받아 별도 codegen 후 사용자 코드에 주입
✅ 부분적 가능. `typia generate` 모드의 진화형
- 비용: 사상 양보 (사용자 API 변화)
- 이전 초안에서 제안했으나 **철회**

## 결론 — ttsc의 길

**경로 B가 유일한 사상-유지 해결책**. Effect-TS/tsgo가 증명 완료. ttsc는 이걸 typia용으로 축소·특화.

## 주요 파일 한 줄 설명 (핵심 35개)

| 파일 | 책임 |
|---|---|
| `cmd/tsgo/main.go` | 진입점, --lsp/--api 분기 |
| `cmd/tsgo/api.go` | API 서버 옵션 파싱 |
| `internal/api/server.go` | StdioServer, transport 선택 |
| `internal/api/session.go` | 세션, 67 메소드 핸들러, snapshot |
| `internal/api/proto.go` | 메소드 상수, handle 포맷 |
| `internal/api/protocol.go` | Protocol 인터페이스 |
| `internal/api/protocol_msgpack.go` | **MessagePack 3-튜플** |
| `internal/api/protocol_jsonrpc.go` | JSON-RPC 2.0 |
| `internal/api/transport.go` | stdio / pipe 추상화 |
| `internal/api/conn_sync.go` | 동기 연결 (MessagePack) |
| `internal/api/conn_async.go` | 비동기 (JSON-RPC) |
| `internal/api/callbackfs.go` | FS 콜백 위임 |
| `internal/api/encoder/` | AST/Type 이진 직렬화 |
| `internal/compiler/program.go` | Program, 파일 파싱, 체커 풀 |
| `internal/compiler/emitter.go` | **`getScriptTransformers()` — 핵심 후킹 대상** |
| `internal/compiler/filesparser.go` | 파싱 |
| `internal/compiler/fileloader.go` | 모듈 resolution |
| `internal/transformers/transformer.go` | 기본 구조 |
| `internal/transformers/chain.go` | 순차 실행 |
| `internal/transformers/tstransforms/typeeraser.go` | TS 문법 제거 |
| `internal/transformers/estransforms/async.go` | async/await |
| `internal/transformers/estransforms/optionalchain.go` | ?. |
| `internal/transformers/moduletransforms/esmodule.go` | ESM |
| `internal/transformers/moduletransforms/commonjsmodule.go` | CJS |
| `internal/transformers/declarations/transform.go` | .d.ts |
| `internal/parser/parser.go` | 파서 |
| `internal/checker/checker.go` | 타입 체커 |
| `internal/checker/types.go` | Type/Symbol/Signature |
| `internal/ast/ast.go` | Node 구조 |
| `internal/ast/ast_generated.go` | 생성 AST kinds |
| `internal/printer/printer.go` | Node → text |
| `internal/printer/factory.go` | NodeFactory |
| `internal/printer/emitcontext.go` | EmitContext |
| `internal/execute/tsc.go` | CommandLine |
| `_packages/native-preview/bin/tsgo.js` | npm wrapper |
| `_packages/native-preview/lib/getExePath.js` | platform resolve |

## 한 줄 요약

> tsgo는 내부 transformer chain이 **완전히 폐쇄**. IPC API는 **read-only**. **사상을 지키려면 Go 소스 fork 후 chain에 훅 주입이 유일한 길**. 이게 ttsc의 존재 이유.
