# Prior Art 4 — Effect-TS/tsgo

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 분석 대상: `/mnt/d/github/contributions/effect-tsgo`
> 중요도: ★★★★★★ (★ 6개) — ttsc의 구조적 모델. 유일한 production-grade tsgo wrapper.

## 한 줄

> **Minimal upstream patch overlay + Go hook modules + npm cross-platform binary** — 이 세 가지가 effect-tsgo의 전부이고, ttsc가 그대로 상속받을 아키텍처.

## 빌드 흐름 (완전한 단계)

### 1. Upstream 소스 획득 (flake.nix)

`flake.nix:8-16`:
```nix
typescript-go-src = fetchFromGitHub {
  rev = "83b8d2aa23b2d385087dabe5a5a8afd5e296013d";   # pinned commit
  ...
};
typescript-src = fetchFromGitHub {
  rev = "c3bd12d888b86f676718b16e64d7d2abcb423514";
  ...
};
```

`typescript-go`와 `TypeScript` 두 저장소의 **특정 커밋을 pin**. Nix가 재현가능 빌드 보장.

### 2. Patch 적용 (`_tools/setup-repo.sh:39-49`)

- `_patches/*.patch` 알파벳순 자동 적용
- 충돌 시 수동 해결 (upgrade 워크플로에서 가장 큰 비용)

### 3. Go 훅 모듈 추가 (`flake.nix:91-104`)

```
source/
  ├── effect-tsgo 프로젝트 파일 (etscore, etscheckerhooks, …)
  ├── typescript-go/               ← patched upstream
  └── typescript-go/_submodules/TypeScript → ${typescript-src} (symlink)
```

### 4. Codegen + Build (`flake.nix:106-137`)

- preBuild: `typescript-go/internal/diagnostics/generate.go` 실행 → effect diagnostic 병합
- Build: `subPackages = ["typescript-go/cmd/tsgo"]`
- Ldflags: `-s -w` (stripped)

### 5. Cross-compile + npm 배포 (`_tools/release-prepare.sh:20-123`)

- 7 플랫폼: darwin-arm64/x64, win32-arm64/x64, linux-arm/arm64/x64
- `_packages/tsgo-${platform}-${arch}/lib/tsgo` 바이너리
- 메인 `@effect/tsgo`는 optionalDependencies로 플랫폼 자동 선택

## Patch 세트 (24개) — 모두 hook 등록만

전부 `~10-50줄` 크기. 핵심 원칙: **upstream 로직 바꾸지 말고 callback 등록 지점만 추가**.

| 패치 | 대상 | 목적 |
|---|---|---|
| 001-cmd-tsgo-main.patch | cmd/tsgo/main.go | ets* hook 모듈 import |
| 002-checker-checker.patch | internal/checker/checker.go | `AfterCheckSourceFileCallback` + `AddDiagnostic` export |
| 003-checker-exports.patch | internal/checker/exports.go | `GetTypeArgumentsForResolvedSignature` export |
| 006-compiler-program.patch | internal/compiler/program.go | Effect diagnostic 377xxx를 @ts-ignore 제외 |
| 007-core-compileroptions.patch | internal/core/compileroptions.go | `CompilerOptions.Effect` 필드 |
| 008-diagnostics-generate.patch | internal/diagnostics/generate.go | effectDiagnosticMessages.json 병합 |
| 009-execute-tsc-emit.patch | internal/execute/tsc/emit.go | Exit code filtering hook |
| 010-fourslash-fourslash.patch | internal/fourslash/fourslash.go | 테스트 VFS + QuickFix |
| 011-ls-codeactions.patch | internal/ls/codeactions.go | `RegisterCodeFixProvider / RegisterRefactorProvider` |
| 012-ls-hover.patch, 015-ls-inlay-hints.patch, … | internal/ls/* | LSP 기능 hooks |
| 021-core-version-suffix.patch | internal/core/version.go | Version suffix 지원 |
| … | | 총 24개, 패턴 일관 |

## Go 훅 모듈 4종

### etscore (옵션 — 368 LOC)
- `EffectPluginOptions` 구조체 (severity, override, key pattern, Mermaid, inlay hints …)
- tsconfig `plugins[]` 에서 파싱되어 `CompilerOptions.Effect`에 저장

### etscheckerhooks (진단 — init.go 282 LOC)
- `checker.RegisterAfterCheckSourceFileCallback(afterCheckSourceFile)`
- source file 타입 체크 후 callback 실행
- `collectDiagnostics() → rules.All` 순회
- `transformDiagnostics()` — directive(`@effect-diagnostics-next-line`) 기반 severity 변환

### etslshooks (LSP — init.go 357 LOC)
6개 hook 등록:
1. `ls.RegisterCodeFixProvider`
2. `ls.RegisterRefactorProvider`
3. `ls.RegisterAfterQuickInfoCallback` (hover)
4. `ls.RegisterAfterDocumentSymbolsCallback`
5. `ls.RegisterAfterInlayHintsCallback`
6. `ls.RegisterAfterCompletionCallback`

### etsexecutehooks (CLI — init.go 59 LOC)
- `tsc.RegisterFilterDiagnosticsForExitCodeCallback` — tsc exit code에서 특정 diagnostic 제외

### etstesthooks (테스트 — 거의 비어있음)

## Shim 자동생성 (`_tools/gen_shims/main.go`)

tsgo `internal/*` 패키지는 Go 관례상 외부에서 못 본다. shim 자동생성기가:
- 필요한 internal 패키지를 파싱
- 각 exported symbol을 wrapper로 노출
- `shim/*/shim.go` 파일 자동 생성
- 수동 편집 금지 (CLAUDE.md:5)

→ **ttsc에도 이 도구가 필수**. tsgo의 `internal/compiler/emitter`, `internal/transformers` 등에 접근하려면.

## npm 배포 구조

```
_packages/tsgo/                    # @effect/tsgo (메인)
  package.json                      # optionalDependencies로 7 플랫폼
  src/cli.ts                        # Node wrapper, 플랫폼 감지

_packages/tsgo-darwin-arm64/        # 각 플랫폼 바이너리 패키지
  lib/tsgo                          # Go 바이너리

... (6개 더)
```

## 업데이트 워크플로 (매 tsgo release)

1. `flake.nix`에서 commit hash 수동 업데이트 (5분)
2. `_tools/update-flake-vendor-hash.sh` 실행 → Nix vendorHash 재계산 (2분)
3. `pnpm setup-repo` → patch apply → 충돌 해결 (10~60분, **변동성 큼**)
4. `pnpm test` (15~20분)
5. Changeset 작성 (5분)
6. PR + merge

**자동화 수준**: patch apply와 vendorHash는 자동, **충돌 해결은 수동**. CI 없음(현재).

## 사용자 설정

`tsconfig.json:compilerOptions.plugins[]`에 entry 추가:
```json
{
  "plugins": [{
    "name": "@effect/language-service",
    "diagnostics": true,
    "refactors": true,
    ...
  }]
}
```

`npx @effect/tsgo setup` — 대화형 설정 마법사.

**tsc / LSP 양쪽 모드 지원** — CLI 빌드 diagnostic + LSP full server 모두.

## ttsc가 상속할 것 (그대로 복제 가능)

| 자산 | 이유 |
|---|---|
| pinned commit + patch overlay 전략 | 유지보수 가능한 유일한 모델 |
| Hook-only patch 원칙 | 로직은 Go 모듈에, upstream은 최소 변경 |
| 4-layer Go 모듈 분리 (core / hooks / cli / tests) | 유지보수 경계 명확 |
| `gen_shims/main.go` 자동생성기 | internal 패키지 접근 유일 수단 |
| Nix 빌드 + cross-compile | 재현가능 |
| 플랫폼별 optionalDependencies 배포 | npm 표준 |
| `setup` 대화형 마법사 | typia 사상(한 줄 setup)에 부합 |

## ttsc 시나리오에서 축소/확장

| 항목 | Effect-tsgo | ttsc |
|---|---|---|
| 목적 | LSP 기능 강화 (진단/refactor/hover) | **Custom transformer 주입** |
| Hook 타입 | AfterCheckSourceFile, CodeFixProvider, RefactorProvider | **TransformChain 주입** hook |
| Patch 개수 | 24개 | 예상 **5~10개** (transformer 한 지점) |
| Go 로직 규모 | LSP 전체 구현 필요 (크다) | typia transformer는 Node측에 있음 → **Go는 얇은 bridge만** |
| 고유 문제 | Effect 규칙 50+ | **Go ↔ Node IPC로 AST 왕복** |

## ttsc가 풀어야 할 Effect-TS와 다른 문제

Effect는 **Go 내부에서 완결**된다 (규칙 평가도 Go로 구현). ttsc는 **Go 내부에서 Node transformer를 부르는 bridge**가 필요하다. 이건 Effect보다 복잡.

해결 아이디어:
1. ttsc patch가 추가하는 hook: `RegisterTransformChainHook(name, callback)`
2. `ttscore` Go 모듈이 tsconfig.plugins[]를 파싱해 각 plugin에 대해 Node child process spawn
3. **MessagePack 직렬화**로 AST를 Node에 보내고, 변환된 AST를 받아옴
4. Node 측 `@ttsc/node-bridge`가 기존 `ts.TransformerFactory`를 MessagePack 어댑터로 감싸 실행

## 주요 파일 (핵심 30개)

| 파일 | 책임 |
|---|---|
| `README.md` | 사용법, 상태표 |
| `CLAUDE.md`, `AGENTS.md` | AI 협업 가이드 |
| `flake.nix` | **핵심**. Nix 빌드 레시피 |
| `go.mod`, `go.work` | Go 모듈 + workspace |
| `package.json` | npm 메타, pnpm 스크립트 |
| `_tools/setup-repo.sh` | git submodule + patch + codegen |
| `_tools/gen_shims/main.go` | shim 자동생성기 |
| `_tools/release-prepare.sh` | cross-compile, npm 배포 |
| `_tools/update-flake-vendor-hash.sh` | vendorHash 재계산 |
| `_patches/001-024-*.patch` | 24개 patch (개별) |
| `etscore/options.go` | 옵션 구조체 |
| `etscore/consts.go` | 상수 |
| `etscheckerhooks/init.go` | 체커 훅 |
| `etslshooks/init.go` | LS 훅 |
| `etsexecutehooks/init.go` | CLI 훅 |
| `etstesthooks/init.go` | 테스트 훅 |
| `internal/rules/` | 진단 규칙 구현 |
| `internal/fixables/` | code fix 구현 |
| `internal/refactors/` | refactor 구현 |
| `internal/completions/` | completion 구현 |
| `internal/typeparser/` | Effect/Layer 타입 검출 |
| `internal/layergraph/` | Layer 의존성 그래프 |
| `shim/*/shim.go` | **자동생성**. tsgo internal export |
| `_packages/tsgo/package.json` | 메인 CLI 패키지 |
| `_packages/tsgo-{plat}-{arch}/` | 플랫폼별 바이너리 (7개) |
| `.changeset/` | 릴리스 노트 |
| `.specs/` | 기능 명세 |
| `internal/diagnostics/effectDiagnosticMessages.json` | 50+ 메시지 |

## 한 줄 요약

> **ttsc의 청사진**. ts-patch는 "무엇을 제공할지"의 스키마, effect-tsgo는 "어떻게 전달할지"의 구조. 둘의 합이 ttsc.
