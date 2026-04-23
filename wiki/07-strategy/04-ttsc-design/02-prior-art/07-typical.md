# Prior Art 7 — elliots/typical

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/).


> 분석 대상: `elliotshpherd/typical`
> 중요도: ★★★★★ — **이미 typia의 Go 포팅 프로토타입이 존재**. 옵션 C(typia Go 포팅)의 실현 가능성을 증명하는 prior art.

## 한 줄 요약

> **Typical은 typia와 거의 동일한 사상("Pure TypeScript runtime safety")으로 Go 기반으로 구현된 대안이다.** typia v12보다 훨씬 신생(v0.3.1)이고 기능은 검증만 커버하지만, samchon이 옵션 C(typia Go 포팅)로 갔을 때 **이미 존재하는 참고 구현**.

## 사상 비교

### Typical README 슬로건
> "Typical makes TypeScript type safe at runtime **with no changes to your code**."

### typia 슬로건
> "Super-fast runtime validators via **transformation**, with pure TypeScript types."

둘 다 **"타입 한 번이면 끝"**이라는 동일 사상. 다만 **주입 방식이 다르다**:

| 방식 | typia | typical |
|---|---|---|
| 호출 형식 | `typia.is<T>(input)` 명시 | 없음 (함수 파라미터/반환 자동 검증) |
| 사용자 코드 변경 | 필요 (함수 호출 추가) | **없음** (기존 코드 그대로) |
| 세분화 통제 | 필요한 곳만 | 전역 (또는 config로 opt-out) |

## 아키텍처 대조

### typia (현재)
```
사용자 TS
  ↓ ts.createProgram + TransformerFactory (Node, 20K LOC)
  ↓ MetadataFactory + Programmers
  ↓ ts.factory로 AST 생성
변환된 TS
```

### typical
```
사용자 TS
  ↓ ts-plugin 또는 unplugin (Node JS)
  ↓ stdin JSON → Go 바이너리 (typical-compiler)
  ↓ typescript-go shim 활용
  ↓ Go analyze + codegen (packages/compiler/go/)
  ↓ MessagePack binary → Node
변환된 TS
```

→ **Go 컴파일러가 JS 파일 변환을 담당**, Node client는 얇은 wrapper. 이게 **정확히 옵션 C(typia Go 포팅)의 실제 모델**.

## Typical의 Go 컴파일러 내부

`packages/compiler/go/`:
- `cmd/typical/main.go` — binary entry (stdin 서버)
- `cmd/typical-wasm/main.go` — WebAssembly target (실험)
- `internal/server/` — MessagePack 서버, transformFile/loadProject RPC
- `internal/analyze/` — TypeScript 프로젝트 로드, AST 분석
- `internal/codegen/` — 타입별 validator 생성
  - `primitives.go` — string/number/boolean/bigint/literal
  - `objects.go` — interface/nested
  - `arrays.go` — Array/Tuple
  - `unions.go` — if-else chain (early bail-out)
  - `templates.go` — template literal types (email regex 등)
  - `filtering.go` — JSON.parse/stringify 필터링
  - `generator.go` — 최상위 generator 구조체 (100+ LOC)

## typescript-go 통합 방식

- `packages/compiler/go/go.mod`에 `github.com/microsoft/typescript-go` 직접 의존
- **shim을 local replace**로 사용: `shim/ast`, `shim/checker`, `shim/compiler` 등
- tsgolint와 동일한 `go:linkname` shim 방식
- patch 없음

## 플랫폼 지원

매우 광범위:
- **ESM Loader** (Node.js native hook)
- **tsc-plugin** (ts-patch 기반)
- **unplugin** (Vite/Webpack/Rollup/Rspack/Farm/Rolldown/esbuild)
- **Bun plugin**
- **Metro transformer** (React Native/Expo)
- **ttsx / ttsc wrapper**

→ typia보다 **더 많은 플랫폼** 지원. samchon이 차용할 가치 있음.

## 기능 비교 (typia vs typical)

| 기능 | typia | typical |
|---|---|---|
| Runtime 검증 | ✅ (is/assert/validate) | ✅ (자동 주입) |
| JSON schema | ✅ | ❌ |
| LLM function calling | ✅ | ❌ |
| Protobuf | ✅ | ❌ |
| Random 생성 | ✅ | ❌ |
| clone/prune/literals | ✅ | ❌ |
| JSON sanitization | 명시적 `sanitize<T>` | **자동 `JSON.parse/stringify` 필터** |
| 함수 래핑 | `assertFunction(fn)` | **자동 함수 파라미터·반환 검증** |

→ **typia는 압도적으로 기능 많음**. typical은 검증에 특화.

## 최적화 전략 (Typical이 앞서는 부분)

1. **Cross-file call graph analysis** — 전체 프로젝트 호출 그래프 분석 후, 이미 검증된 인자는 재검증 제거
2. **Type-aware dirty tracking** — primitive는 function call 후에도 valid 유지; object는 unknown call 후 재검증
3. **Reusable validators (hoisting)** — 같은 타입이 여러 곳 나타나면 module-level 함수로 승격

→ typia가 차용할 수 있는 최적화 아이디어.

## 성능 벤치마크 (typical README 509-520)

> "Zod 대비 2~10× 빠름"

typia처럼 inline 코드 생성이지만 Go 컴파일러의 분석력 덕에 redundancy 제거가 더 적극적.

## 강점 / 약점

### Typical의 강점
1. **투명성**: 사용자 코드 수정 0 — 엔터프라이즈 도입 마찰 최소
2. **Go 아키텍처**: 빌드 시간·메모리 이점
3. **기본값 안전**: JSON.parse/stringify 자동 필터링
4. **최신 플랫폼**: Bun, Metro 등

### Typical의 약점
1. **기능 미니멀**: 스키마/LLM/Protobuf/랜덤 모두 없음
2. **신생**: v0.3.1, 2026 초. 커뮤니티 미형성
3. **복잡한 배포**: Go binary + Node client + IPC — 플랫폼 바이너리 필수
4. **에러 메시지**: "to be string" 같은 기본 메시지 (typia는 path+expected+value 정교)

## typia 입장에서의 의미

### 위협
- Typical이 성숙하면 "명시적 호출 vs 자동 주입"에서 후자가 이길 가능성
- Go 아키텍처로 typia를 따라잡을 수 있음

### 기회
- 옵션 C(typia Go 포팅)의 viable 실증 — **Elliot이 이미 해봄**
- samchon이 typia의 풍부한 기능 + Typical의 Go 아키텍처를 결합하면 압도 가능
- Typical 최적화 기법(cross-file, dirty tracking) 차용

## 차용할 구체 기법

1. **MessagePack binary 프로토콜** (Node ↔ Go child process)
2. **Cross-file call graph analysis** — 전체 프로젝트 호출 그래프
3. **Dirty tracking** — 타입별 재검증 필요성 판정
4. **자동 주입 모드** (typia.config.ts로 opt-in): "typia.is 호출 없이 함수 파라미터 자동 검증"

## 배제할 부분

1. **기능 범위**: typia의 13 namespace를 포기하면 안 됨. typical은 검증만 → 시장 포지셔닝 부족.
2. **명시적 호출 포기**: `typia.is<T>(input)`는 사상의 핵심 — "타입에서 출발해 어디서나 호출". 자동 주입은 **보조 모드**로만.
3. **WebAssembly target**: typical은 실험 중. typia는 Node 바이너리에 집중.

## 주요 파일

| 파일 | 책임 |
|---|---|
| `packages/compiler/src/transformer.ts` | TypicalTransformer, Go 컴파일러 래퍼 |
| `packages/compiler/src/esm-loader.ts` | Node.js ESM loader hook |
| `packages/compiler/src/config.ts` | TypicalConfig 인터페이스 |
| `packages/compiler/src/cli.ts` | CLI |
| `packages/compiler/go/cmd/typical/main.go` | Go binary entry (stdin 서버) |
| `packages/compiler/go/cmd/typical-wasm/main.go` | WASM target |
| `packages/compiler/go/internal/server/server.go` | MessagePack 서버 |
| `packages/compiler/go/internal/server/api.go` | transformFile, loadProject RPC |
| `packages/compiler/go/internal/server/protocol.go` | 프로토콜 정의 |
| `packages/compiler/go/internal/codegen/generator.go` | 생성 엔진 |
| `packages/compiler/go/internal/codegen/primitives.go` | 원시 타입 검증 |
| `packages/compiler/go/internal/codegen/objects.go` | 객체 검증 |
| `packages/compiler/go/internal/codegen/unions.go` | union 분기 |
| `packages/compiler/go/internal/codegen/filtering.go` | JSON 필터링 |
| `packages/compiler/go/internal/analyze/` | 프로젝트 분석 |
| `packages/unplugin/src/index.ts` | unplugin wrapper |
| `packages/tsc-plugin/src/index.ts` | ts-patch plugin |
| `packages/bun-plugin/src/index.ts` | Bun plugin |
| `packages/metro-transformer/src/index.ts` | Metro transformer |
| `test/compiler.test.ts` | 51 KB 종합 테스트 |
| `test/project.test.ts` | 52 KB 다중파일 테스트 |
| `test/sourcemap.test.ts` | 22 KB 소스맵 테스트 |
| `README.md` | 17,000자 상세 문서 |

## 한 줄 결론

> **Typical의 존재는 옵션 C(typia Go 포팅)가 기술적으로 가능함을 증명한다. 단, typical은 기능이 좁고 신생이라 시장 장악 전 typia가 "Go 기반 + 전 기능" 조합을 먼저 내면 압도 가능.**
