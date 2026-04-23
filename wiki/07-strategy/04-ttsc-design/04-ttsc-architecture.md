# 04. ttsc Architecture (v2 — shim 모델 반영)

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/).


> v1은 Effect-TS 패턴 중심 (24 patch 예상). v2는 tsgolint 발견 반영: **shim 13개 + 최소 patch 1~3개** 하이브리드.

## 한 장 그림 (v2)

```
┌──────────────────────────────────────────────────────────────────┐
│ 사용자 코드                                                       │
│   import typia, { tags } from "typia";                           │
│   typia.is<Member>(input);                                       │
│   tsconfig.json: plugins: [{ transform: "typia/lib/transform" }] │
└──────────────┬───────────────────────────────────────────────────┘
               │ npx ttsc --build
               ▼
┌──────────────────────────────────────────────────────────────────┐
│ Layer 3: @ttsc/cli  (Node, ~200 LOC)                              │
│  - bin script (platform detect → 바이너리 spawn)                   │
│  - 인자 그대로 전달                                                │
└──────────────┬───────────────────────────────────────────────────┘
               │ spawn
               ▼
┌──────────────────────────────────────────────────────────────────┐
│ Layer 2: ttsc-{platform}-{arch} (Go binary)                       │
│                                                                   │
│  cmd/ttsc/main.go          CLI entry, 서브커맨드                   │
│  cmd/ttsc/build.go         파이프라인 (tsgonest build.go 패턴)     │
│                                                                   │
│  internal/ttscore/         plugins[] 파싱, config                 │
│  internal/ttschooks/       transform chain hook                   │
│  internal/ttscbridge/      Node child process spawn + IPC         │
│                                                                   │
│  shim/ (13 packages)       ← tsgolint 모델                        │
│    ast/, checker/, compiler/, core/, parser/, scanner/,           │
│    tsoptions/, tspath/, vfs/, bundled/, lsp/                      │
│    (go:linkname 896+, patch 0)                                    │
│                                                                   │
│  patches/ (1~3 patches)   ← Effect-TS 모델 최소화                  │
│    001-cmd-main.patch         (hook 모듈 import)                   │
│    002-emitter-hook.patch     (TransformChain 훅 추가)             │
│    003-options-plugins.patch  (CompilerOptions.Plugins 필드)       │
└──────────────┬───────────────────────────────────────────────────┘
               │ typescript-go (git submodule)
               ▼
┌──────────────────────────────────────────────────────────────────┐
│ typescript-go upstream (unmodified + 3 patches)                   │
└──────────────┬───────────────────────────────────────────────────┘
               │ Go → Node IPC (MessagePack stdio)
               ▼
┌──────────────────────────────────────────────────────────────────┐
│ Layer 1: @ttsc/node-bridge (Node child, per-plugin)               │
│  - MessagePack ↔ ts.Node 역직렬화                                  │
│  - Program proxy (TypeChecker callback → Go shim으로 위임)         │
│  - require(plugin) 로드 → TransformerFactory 실행                  │
│  - 변환된 SourceFile → MessagePack → Go                            │
│  - Diagnostics 수집                                                │
└──────────────────────────────────────────────────────────────────┘
```

## v1 대비 변경점

| 항목 | v1 (Effect-TS 패턴) | v2 (shim 하이브리드) |
|---|---|---|
| Upstream 관계 | fork (pinned commit) | submodule (tsgolint/tsgonest 방식) |
| Patch 수 | 5~8 | **1~3** |
| API 접근 방식 | 전부 patch로 export | 대부분 go:linkname, 일부 patch |
| 유지보수 부담 | 매 release 15~60분 | **매 release 5~10분** |
| 재현성 | Nix flake | Nix flake (동일) |

## 3 Layer 상세 (v2)

### Layer 1 — @ttsc/node-bridge (Node 자식)

```ts
// 의사 코드
import { createSyncPeer } from "./sync-stdio";
import ts from "typescript";

const peer = createSyncPeer();

peer.onRequest("Init", (params) => {
  const { pluginName, tsconfig, options } = params;
  globalThis.__plugin = require(pluginName).default;
  globalThis.__options = options;
  return { ready: true };
});

peer.onRequest("Transform", (params) => {
  const { astBuffer, programHandle } = params;
  const sourceFile = decodeAST(astBuffer);
  const program = makeProgramProxy(peer, programHandle);
  const factory = globalThis.__plugin(program, globalThis.__options, extras);
  const result = ts.transform(sourceFile, [factory]);
  return encodeAST(result.transformed[0]);
});

peer.run();
```

### Layer 2 — ttsc-go (Go binary)

#### ttscore (plugins[] 파싱)
```go
type PluginConfig struct {
    Transform string                 `json:"transform"`
    Import    string                 `json:"import,omitempty"`
    Type      string                 `json:"type,omitempty"`   // program/config/checker/raw
    After     bool                   `json:"after,omitempty"`
    AfterDeclarations bool           `json:"afterDeclarations,omitempty"`
    Options   map[string]interface{} `json:"-"`  // 나머지는 options로
}

func ParsePluginsFromTsconfig(tsconfig Path) ([]PluginConfig, error) { ... }
```

#### ttschooks (transform chain 주입)
```go
// patches/002-emitter-hook.patch가 추가한 함수를 호출
func RegisterBeforeEmit(host *compiler.CompilerHost, sourceFile *ast.SourceFile) *ast.SourceFile {
    plugins := ttscore.GetPlugins()
    for _, plugin := range plugins {
        if plugin.After {
            continue // after emit 처리는 별도
        }
        sourceFile = ttscbridge.CallPlugin(plugin, sourceFile, host)
    }
    return sourceFile
}
```

#### ttscbridge (Node child 관리)
```go
type NodeBridge struct {
    pluginProcesses map[string]*PluginProcess
}

func (b *NodeBridge) CallPlugin(plugin PluginConfig, sf *SourceFile, host *CompilerHost) *SourceFile {
    proc := b.getOrSpawn(plugin.Transform)
    astBuf := encodeSourceFileMsgpack(sf)
    result := proc.RequestSync("Transform", map[string]interface{}{
        "astBuffer": astBuf,
        "programHandle": b.makeProgramHandle(host),
    })
    return decodeSourceFileMsgpack(result["astBuffer"].([]byte))
}
```

### Layer 3 — @ttsc/cli (Node launcher)

```js
#!/usr/bin/env node
const { spawn } = require("child_process");
const path = require("path");

function getBinaryPath() {
  const platform = process.platform;  // darwin, linux, win32
  const arch = process.arch;          // arm64, x64
  return require.resolve(`@ttsc/ttsc-${platform}-${arch}/bin/ttsc`);
}

const binary = getBinaryPath();
const args = process.argv.slice(2);
const child = spawn(binary, args, { stdio: "inherit" });
child.on("exit", (code) => process.exit(code));
```

## 최소 Patch 3개 상세

### Patch 001: cmd/ttsc/main.go hook import
```diff
--- a/cmd/tsgo/main.go
+++ b/cmd/tsgo/main.go
@@ -10,6 +10,9 @@ package main

 import (
     "fmt"
+    _ "github.com/ttsc/ttsc-go/internal/ttschooks"
+    _ "github.com/ttsc/ttsc-go/internal/ttscore"
     ...
 )
```

→ 4줄, init() 부작용으로 훅 등록.

### Patch 002: emitter.go TransformChain hook
```diff
--- a/internal/compiler/emitter.go
+++ b/internal/compiler/emitter.go
@@ -115,6 +115,12 @@ func getScriptTransformers(
+    // ttsc hook
+    if hook := getBeforeEmitHook(); hook != nil {
+        sourceFile = hook(sourceFile, host)
+    }
+
     return []*Transformer{ ... }
 }
```

→ 6줄, 외부 훅 등록 지점 한 군데.

### Patch 003: CompilerOptions.Plugins
```diff
--- a/internal/core/compileroptions.go
+++ b/internal/core/compileroptions.go
@@ -45,6 +45,7 @@ type CompilerOptions struct {
     Strict  bool
     ...
+    Plugins []PluginConfig  // tsconfig plugins[] 배열
 }
```

→ 1줄, ttscore가 이 필드 활용.

**총 patch: 11줄**. Effect-TS의 24 patch ~1200줄 대비 100배 적음.

## 캐싱

Layer 2가 `.ttsc-cache/` 디렉토리에 저장:
- 파일 해시 (xxhash) + plugin 버전 → 변환 결과
- 파일 변경 시 해시 체크 → 변경 없으면 Node bridge 호출 생략
- typia 경우 interface 파일 드물게 변경 → hit rate 80%+ 기대

## 성능 예측 (v2 기준)

| 경로 | 소요 시간 (100 파일) |
|---|---|
| tsc + ts-patch (base) | 30s |
| ttsc v1 (v1 설계) | 12s (2.5×) |
| **ttsc v2 (shim + 최소 patch)** | **9s (3.3×)** — 패치 오버헤드 감소 |
| typia-go (최종) | 3s (10×) |
| tsgo 단독 (typia 없이) | 2s (15×, 비교 ceiling) |

## Go 측 LOC 예산 (v2)

| 디렉토리 | LOC | 비고 |
|---|---|---|
| `cmd/ttsc/` | ~500 | main, build, dev, check |
| `internal/ttscore/` | ~800 | PluginConfig, tsconfig 파싱 |
| `internal/ttschooks/` | ~600 | transform chain 등록 |
| `internal/ttscbridge/` | ~1500 | Node child 관리, MessagePack |
| `shim/` | ~4000 | 13 패키지 (자동 생성) |
| `patches/` | ~11 lines | 3 patch |
| `tools/gen_shims/` | ~500 | 자동 생성기 |
| **총** | **~8000 Go LOC** | 자동 생성분 제외하면 ~3500 수작업 |

## Layer 간 성능 분석

### IPC 비용
- Layer 2 → Layer 1 RPC: ~μs 단위 (로컬 stdio)
- 파일당 평균 3~5회 TypeChecker 호출 (typia의 경우)
- 파일당 IPC overhead: ~15~50ms

### 완화
- Batch TypeChecker 호출 (tsgo PR #711 패턴)
- Layer 1에서 Type 캐시 (한 파일 내 재호출 억제)
- Prefetch: 전체 AST 먼저 스캔해서 필요한 Type 정보 일괄 요청

## v2의 승리

v2는 v1 대비 모든 차원에서 우월:

| 차원 | v1 | v2 | 개선 |
|---|---|---|---|
| Patch 수 | 5~8 | 1~3 | ~60% ↓ |
| Patch LOC | ~400 | ~11 | ~97% ↓ |
| 매 release 유지보수 | 15~60분 | 5~10분 | ~75% ↓ |
| 성능 | 2.5× | 3.3× | 32% ↑ |
| Layer 2 LOC | ~5000 | ~8000 | (shim 자동 생성) |
| tsgolint 영감 | ❌ | ✅ | |
| tsgonest 패턴 수용 | 부분 | 전체 | |

## 결론

> **v2 아키텍처는 Effect-TS의 patch 방식(v1)을 tsgolint의 shim 방식으로 대체하고, 필요한 경우에만 최소 patch를 유지하는 하이브리드. 결과적으로 사상 양보 없이 유지보수 비용 극적 감소.**

이 설계가 [06-final-decision/01-four-options-compared.md](../06-final-decision/01-four-options-compared.md)의 옵션 B의 기준점. (참고: 07-strategy는 [역사 문서](../../07-strategy/00-README.md). 최신 ttsc 설계는 [08-tsgo-master-plan/06](../../08-tsgo-master-plan/06-ttsc-specification.md).)

→ 다음 [05. 구현 계획](05-ttsc-implementation-plan.md)
