# Appendix A.1 — tsgo IPC API (PR #711) 상세

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/).


> 출처: Microsoft typescript-go PR #711, DeepWiki, 실제 코드 (`internal/api/`).
> 용도: ttsc의 callback protocol 설계 참조.

## 프로토콜 요약

- **전송**: stdio 기본, Unix socket / Windows named pipe 옵션
- **인코딩**: MessagePack (기본, 동기) 또는 JSON-RPC (비동기)
- **JS 클라이언트**: `@typescript/api` (libsyncrpc 기반 동기)
- **AST 패키지**: `@typescript/ast` (Node definitions + enums)

## MessagePack 프레임

3-튜플: `[MessageType: uint8, method: string, payload: any]`

`protocol_msgpack.go`의 `msgpackBin8/16/32` (0xC4~0xC6) 길이 prefix + 데이터.

## JSON-RPC 프레임

LSP 스타일. `Content-Length: N\r\n\r\n{...}`

## 노출 메소드 (67개, 요약)

### 세션 관리
- `Initialize`
- `UpdateSnapshot`
- `ParseConfigFile`

### Symbol
- `GetSymbolAtPosition(fileName, position)`
- `GetSymbolAtLocation(node | nodes[])`

### Type
- `GetTypeOfSymbol(symbol)`
- `GetPropertiesOfType(type)`
- `GetIndexInfosOfType(type)`
- `GetTypeArgumentsOfResolvedSignature(signature)`
- `TypeToTypeNode(type)`

### AST
- `GetSourceFile(fileName)`
- `PrintNode(node)` — emit single node

### Diagnostics
- `GetSyntacticDiagnostics(fileName)`
- `GetSemanticDiagnostics(fileName)`

### Callback FS (클라이언트 → 서버 역방향)
- `--callbacks` 옵션 활성 시, 서버가 클라이언트에 `readFile`, `fileExists`, `directoryExists`, `getDirectories` 요청 가능 — 가상 FS 지원

## Handle 체계 (`proto.go:29-59`)

| Kind | Prefix | 예 |
|---|---|---|
| Project | `'p'` + ID | `p.tsconfig.json` |
| Symbol | `'s'` + 16진 | `s5a3c` |
| Type | `'t'` + 16진 | `t1b2e` |
| Signature | `'g'` + 16진 | |
| Node | `pos.end.kind.path` | `42.56.2.src/a.ts` |

**Node handle은 stateless** — 서버에 별도 등록 없이 위치 정보로 재구성 가능.

**Symbol/Type handle은 stateful** — 스냅샷 별 registry에 ID 보관.

## Session / Snapshot 모델

```go
type snapshotData struct {
  snapshot *project.Snapshot
  symbolRegistry   map[Handle[ast.Symbol]]*ast.Symbol
  typeRegistry     map[Handle[checker.Type]]*checker.Type
  signatureRegistry map[Handle[checker.Signature]]*checker.Signature
}
```

- 한 Session은 다수 Snapshot 가능
- Snapshot은 불변 — 파일 변경 시 새 Snapshot 생성
- AST 조작 후 재컴파일 **불가** (스냅샷 규약 위반)

## ttsc가 상속 vs 재정의

### 상속할 것
- 메시지 프레임 (MessagePack 3-튜플)
- Handle 체계 (Node stateless, Symbol/Type stateful)
- Session/Snapshot 개념

### 재정의할 것
- ttsc는 **Go ↔ Node 양방향** — IPC 방향 대칭
  - Go → Node: `Transform(sourceFile) → transformedSourceFile`
  - Node → Go (callback): `GetTypeOfNode(handle)` 등

### ttsc가 추가할 것
- **Transform 메시지** — AST 전체 전송 (PR #711에는 없음)
- **Diagnostic 수집** — Node 측에서 생성한 diagnostic 목록

## 성능 특성 (PR #711 측정 자료)

- MessagePack bin 인코딩: JSON 대비 10~30% 크기
- sync stdio는 microseconds 단위 지연 (로컬)
- "IPC overhead is not entirely negligible, but small enough" (Jake Bailey)
- batch API로 호출 수 감축 가능

## ttsc 프로토콜 v0 초안

```
// Go → Node
{method: "Init",      payload: { plugin: "typia/lib/transform", options: {...}}}
{method: "Transform", payload: { ast: SourceFile, program: ProgramSnapshot }}
{method: "Close",     payload: {}}

// Node → Go (callback)
{method: "GetTypeOfNode",       payload: { handle: "42.56.2.src/a.ts" }}
{method: "GetPropertiesOfType", payload: { handle: "t1b2e" }}
{method: "GetSymbolAtLocation", payload: { handle: "..." }}
{method: "AddDiagnostic",       payload: { message: "...", path: "...", code: 9000 }}
```

## 참고 구현

- Go: `github.com/vmihailenco/msgpack/v5`
- Node: `@msgpack/msgpack` + `@typescript/libsyncrpc` (sync)
- typescript-go `internal/api/protocol_msgpack.go` 그대로 차용 가능

## 한 줄 요약

> tsgo의 IPC API는 read-only이지만 프레임·핸들·세션 모델은 그대로 가져와 Go↔Node 쌍방향으로 확장하면 ttsc의 bridge 프로토콜이 된다.
