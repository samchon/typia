# Prior Art 6 — oxc-project/tsgolint

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 분석 대상: `/mnt/d/github/contributions/tsgolint`
> 중요도: ★★★★★★ (★ 6개). ttsc 아키텍처의 **결정적 발견**. Effect-TS의 patch 방식과 완전히 다른 대안 — `go:linkname` shim만으로 tsgo internal API를 patch 없이 접근.

## 한 줄 요약

> **tsgolint는 typescript-go 소스에 patch를 전혀 하지 않고, 15개 shim 패키지의 `go:linkname` 896개만으로 internal API를 노출한다.** 이는 Effect-TS/tsgo의 24개 patch 모델에 대한 근본적 대안. ttsc 설계의 핵심 신기술.

## 저장소 구조

```
tsgolint/
├── shim/               # 15개 shim 패키지
│   ├── ast/shim.go
│   ├── checker/shim.go    (약 350 linkname)
│   ├── compiler/shim.go
│   ├── core/shim.go
│   ├── parser/shim.go
│   ├── scanner/shim.go
│   ├── tsoptions/shim.go
│   ├── tspath/shim.go
│   ├── vfs/shim.go (+ cachedvfs, osvfs)
│   ├── bundled/shim.go
│   ├── project/shim.go
│   └── lsp/lsproto/shim.go
├── internal/
│   ├── rule/rule.go    (Rule, RuleContext, fix/suggestion)
│   ├── linter/linter.go (worker pool, diagnostic collection)
│   ├── rules/*/        (59개 규칙 구현)
│   └── utils/
├── cmd/tsgolint/
│   ├── main.go         (CLI entry, rule registry)
│   ├── headless.go     (Oxlint stdin/stdout)
│   └── payload.go      (v1/v2 JSON deserialization)
└── tools/
    └── gen_shims/main.go  (shim 자동 생성기)
```

## `go:linkname` 메커니즘 완전 해부

### 구문
```go
//go:linkname localName github.com/microsoft/typescript-go/internal/ast.CanHaveDecorators
func CanHaveDecorators(node *ast.Node) bool
```

### 실제 샘플 (`shim/ast/shim.go`)
```go
//go:linkname CanHaveDecorators github.com/microsoft/typescript-go/internal/ast.CanHaveDecorators
//go:linkname CanHaveIllegalDecorators github.com/microsoft/typescript-go/internal/ast.CanHaveIllegalDecorators
//go:linkname CanHaveIllegalModifiers github.com/microsoft/typescript-go/internal/ast.CanHaveIllegalModifiers
//go:linkname ChildIsDecorated github.com/microsoft/typescript-go/internal/ast.ChildIsDecorated
//go:linkname FindAncestor github.com/microsoft/typescript-go/internal/ast.FindAncestor
//go:linkname ExpressionIsAlias github.com/microsoft/typescript-go/internal/ast.ExpressionIsAlias
// … (수십 개 더)
```

### 메소드 (receiver 있음)
```go
//go:linkname Checker_getTypeOfSymbol github.com/microsoft/typescript-go/internal/checker.(*Checker).getTypeOfSymbol
func Checker_getTypeOfSymbol(recv *checker.Checker, symbol *ast.Symbol) *checker.Type
```

### 필드 접근 (unsafe.Pointer 필요)
```go
type extra_Checker struct {
  // 내부 필드를 mirror로 다시 선언
  someField *Type
}
func Checker_fieldName(v *Checker) Type {
  return ((*extra_Checker)(unsafe.Pointer(v))).someField
}
```

### 제약 (Go 1.23+, 1.26 주목)
- `_ "unsafe"` import 필수
- exported type alias 또는 wrapper func 형태로만 사용 가능
- **Go 1.23부터 stdlib 대상으로는 handshake 필요** — 양쪽 opt-in
- **third-party 모듈(typescript-go)은 현재 제약 없음** — 그러나 언제든 막힐 수 있음

## 자동 생성 도구 `tools/gen_shims/main.go`

- `golang.org/x/tools/go/packages`로 typescript-go internal 패키지 분석
- **Exported 심볼**: type alias로 re-export (`type Program = compiler.Program`)
- **Unexported 함수**: `go:linkname` wrapper 생성
- **Unexported 필드**: mirror struct + `unsafe.Pointer` wrapper
- `extra-shim.json`에서 수동 지정된 심볼도 추가

→ **매 tsgo release마다 gen_shims 재실행 → 대부분 자동 갱신**. 시그니처 변경만 수동 대응.

## Oxlint ↔ tsgolint 통신 (Headless)

**입력 (stdin JSON v2)**:
```json
{
  "version": 2,
  "configs": [{
    "file_paths": ["src/app.ts"],
    "rules": [{"name": "no-floating-promises", "options": {}}]
  }]
}
```

**출력 (stdout, binary 프레임)**:
```
[4바이트 little-endian length][1바이트 type][JSON payload]
```

type: `0=error`, `1=diagnostic`

## 실행 흐름

1. Oxlint CLI → tsgolint binary spawn
2. tsconfig 자동 발견 (`FindTsConfigParallel`)
3. Program 생성 (`NewProgram`, 여러 tsconfig → 여러 Program 병렬)
4. `ForEachCheckerParallel`로 worker별 checker 할당
5. 각 파일의 각 rule Run 함수 → `RuleListeners` 맵 (kind별 visitor)
6. AST 순회, listener 호출, `ReportDiagnostic` 수집
7. binary 프로토콜로 stdout 송출

## 성능

| 저장소 | ESLint+ts-eslint | tsgolint | Speedup |
|---|---|---|---|
| microsoft/vscode | 167.8s | 4.89s | **34×** |
| microsoft/typescript | 47.4s | 2.10s | 23× |
| typeorm/typeorm | 27.3s | 0.93s | 29× |
| vuejs/core | 20.7s | 0.95s | 22× |

**비결**: Go 네이티브 + worker pool + Program 재사용 + VFS 캐시 (`cachedvfs.From(osvfs.FS())`).

## **ttsc 적용 가능성 — 결정적 질문**

### Read-only API: ✅ 완벽 적용 가능
- typia의 MetadataFactory가 쓰는 `getTypeAtLocation`, `getPropertiesOfType`, `getApparentType` 등은 모두 이미 tsgolint shim에 존재
- 그대로 차용 — 개발 비용 거의 0

### Transform 주입: ❌ go:linkname만으로는 불가
- `getScriptTransformers()`가 반환하는 구조체가 unexported
- Emitter 내부 함수를 replace할 수 없음 (이미 컴파일된 호출)
- **transform chain 주입은 반드시 patch 필요**

### 결론 — 하이브리드 아키텍처 필수
```
ttsc = tsgolint의 shim 모델 (read-only 대량 접근)
     + Effect-TS의 patch 모델 (transform chain hook 1~3개만)
```

**Effect 24 patch → ttsc 1~3 patch**로 혁신적 축소 가능.

## 이 발견이 ttsc 비용 추정에 미치는 영향

| 이전 추정 (v1 설계) | 수정 추정 (shim 도입) |
|---|---|
| Patch 5~8개 | **Patch 1~3개 (transform hook만)** |
| 매 tsgo release rebase 15~30분 | **거의 자동 (shim만 재생성)** |
| upstream 변경 민감도 중 | **낮음** |
| 초기 구현 12개월 | 9~10개월로 단축 |

## Effect-TS vs tsgolint vs ttsc (선택지 재정의)

| 축 | Effect-TS | tsgolint | ttsc 최적 |
|---|---|---|---|
| Upstream patch | 24개 | **0개** | 1~3개 (transform hook만) |
| internal API 접근 | patch로 export | go:linkname | **go:linkname 대량 + 최소 patch** |
| rebase 비용 | 15~60분/release | 거의 없음 | **거의 없음** |
| Transform 주입 | ✅ | ❌ (lint 전용) | ✅ |
| 타입 안정성 | ✅✅ | ✅ (unsafe 최소) | ✅ |

## 주요 파일 한 줄 요약

| 파일 | 책임 |
|---|---|
| `shim/ast/shim.go` | AST 헬퍼, Diagnostic 필드 등 수백 개 linkname |
| `shim/checker/shim.go` | **핵심**. 350+ linkname — 모든 TypeChecker 메소드 |
| `shim/compiler/shim.go` | NewProgram, ParallelCheck, emit 함수 |
| `shim/core/shim.go` | CompilerOptions, TextRange, version |
| `shim/parser/shim.go` | ParseSourceFile, JSDoc |
| `shim/scanner/shim.go` | Line/column 변환, token text |
| `shim/tsoptions/shim.go` | tsconfig 파싱 |
| `shim/tspath/shim.go` | 경로 정규화 |
| `shim/vfs/*` | 추상 파일 시스템 |
| `shim/bundled/shim.go` | 번들된 lib.d.ts |
| `internal/rule/rule.go` | Rule, RuleContext, fix/suggestion |
| `internal/linter/linter.go` | worker pool, diagnostic 수집 |
| `internal/rules/*/` | 59개 규칙 |
| `internal/utils/ts_api_utils.go` | Type 분석 헬퍼 |
| `cmd/tsgolint/main.go` | CLI, rule registry |
| `cmd/tsgolint/headless.go` | Oxlint 통신 |
| `cmd/tsgolint/payload.go` | JSON v1/v2 역직렬화 |
| `tools/gen_shims/main.go` | **shim 자동 생성기** |

## ttsc 설계 혁신 (이 발견의 적용)

### Before (v1)
```
ttsc-go = tsgo fork + 5~8 patch + Go 훅 모듈
```

### After (v2, tsgolint 모델 적용)
```
ttsc-go = tsgo submodule (fork 아님!) 
        + shim 15개 (gen_shims 자동 생성)
        + 1~3 patch (transform chain hook만)
        + Go 훅 모듈 (ttsccore, ttscbridge)
        + Node bridge (MessagePack IPC)
```

**달라진 점**:
- fork 관리 불필요 → submodule + go.mod replace로 충분
- 대부분 API 접근은 shim (0 patch)
- patch는 transform hook 지점만

이 구조는 다음에 다시 상세화: [04-ttsc-architecture.md](../04-ttsc-architecture.md)가 v2로 업데이트 될 것.

## 한 줄 결론

> **tsgolint가 증명: tsgo internal 접근에 patch가 필요하지 않다. Effect-TS의 24 patch는 과잉이었다. ttsc는 shim + 최소 patch 하이브리드로 유지보수 비용을 극적으로 낮출 수 있다.**
