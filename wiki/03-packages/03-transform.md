# packages/transform/native — ttsc typia adapter

> 위치: `packages/transform/native`

`@typia/transform` TypeScript 패키지는 제거되었다. 현재 transform 계층은 Go native ttsc adapter이며, `typia/lib/transform`이 지정하는 native binary가 이 코드를 실행한다.

## 구성

| 위치                          | 책임                                           |
| ----------------------------- | ---------------------------------------------- |
| `cmd/ttsc-typia/main.go`      | `build`, `check`, `transform` command dispatch |
| `cmd/ttsc-typia/build.go`     | project emit 경로                              |
| `cmd/ttsc-typia/transform.go` | 단일 파일 JS string 반환 경로                  |
| `ttsc/visit.go`               | typia.\* call site 수집                        |
| `ttsc/adapter.go`             | core/native analyzer/emitter 연결              |
| `ttsc/cleanup.go`             | emitted text 후처리                            |

## build 경로

```
driver.LoadProgram(...)
  ↓
CollectCallSites(...)
  ↓
AnalyzeTypeWithOptions(...)
  ↓
EmitCall(...)
  ↓
driver.RewriteSet.Add(...)
  ↓
prog.EmitAll(rewrites, writeFile)
```

## transform 경로

`@typia/unplugin`과 `typia generate` CLI가 쓰는 per-file API다.

```
@typia/ttsc.transform()
  ↓ ttsc-typia transform --file=...
collectTypiaRewrites(... onlyFile ...)
  ↓
prog.EmitAll(...)
  ↓
captured JS stdout
```

## 제거된 경로

- `transform.ts`
- `FileTransformer.ts`
- `CallExpressionTransformer.ts`
- `TypiaGenerator.ts`
- `features/*.ts`

위 TypeScript transformer 코드는 현재 코드베이스에서 제거되었다. legacy transformer가 필요한 사용자는 해당 기능을 포함한 구버전 typia를 사용한다.
