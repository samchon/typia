# 06. ttsc 완전 설계

> 배경: [07-strategy/04-ttsc-design/](../07-strategy/04-ttsc-design/) (역사 이력).
>
> ⚠️ **중요**: 이 문서의 "기존 typia Node transformer를 Node bridge로 재사용" 관점은 **초기 v2 설계**다. 사용자가 이후 "ttsc와 typia-go를 하나의 Go 바이너리로 통합" 으로 확정 → **Node bridge가 사라짐**. 최신 통합 아키텍처는 **[04-strategic-options.md](04-strategic-options.md) § "유일한 길: ttsc + typia-go 동시 구축"** 와 **[16-package-port-boundary.md](16-package-port-boundary.md)** 참조.
>
> 이 문서(06)는 **ttsc의 driver 부분만을 상세히 논의**하는 것으로 읽으면 된다 (Node bridge 섹션은 구식).

## 정의 (업데이트)

> **ttsc** = typescript-go 위에 얹는 **Go 네이티브 transformer driver**. typia-go engine을 호출하며, **같은 바이너리 안에 engine이 포함**됨 (16번 문서 확정).

## 초기 v2 아키텍처 (Node bridge 포함, 구식)

```
┌──────────────────────────────────────────────┐
│ 사용자: npx ttsc --build                      │
│ tsconfig.json plugins: typia/lib/transform    │
└──────────┬───────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────┐
│ @ttsc/cli (Node launcher, ~200 LOC)          │
│ bin 선택 (platform/arch)                       │
└──────────┬───────────────────────────────────┘
           │ spawn
           ▼
┌──────────────────────────────────────────────┐
│ @ttsc/ttsc-{platform}-{arch} (Go binary)     │
│                                               │
│ cmd/ttsc/           CLI 진입                  │
│ internal/ttscore/   plugins 파싱              │
│ internal/ttschooks/ transform chain hook      │
│ internal/ttscbridge/ Node child IPC           │
│ shim/ (~12)         go:linkname (tsgolint 모델)│
│ patches/ (수: TBD, Phase 0에서 결정)         │
└──────────┬───────────────────────────────────┘
           │ typescript-go (submodule)
           ▼
┌──────────────────────────────────────────────┐
│ typescript-go upstream                        │
└──────────┬───────────────────────────────────┘
           │ MessagePack stdio IPC
           ▼
┌──────────────────────────────────────────────┐
│ @ttsc/node-bridge (Node child, per plugin)   │
│ AST 역직렬화 → ts.factory 재구성              │
│ Program proxy (TypeChecker callback to Go)   │
│ require(plugin).default(program, opts, extras)│
│ 결과 AST 직렬화                                │
└──────────────────────────────────────────────┘
```

## 3-Layer 분리

### Layer 3: @ttsc/cli (Node)
- ~200 LOC
- `require.resolve`로 platform 바이너리 찾기
- `execFileSync`로 Go binary 실행

### Layer 2: Go binary
- cmd/ttsc: CLI, 서브커맨드
- internal/ttscore: `PluginConfig` 파싱 (ts-patch 스키마 호환)
- internal/ttschooks: emitter hook에서 Node plugin 호출
- internal/ttscbridge: libsyncrpc 또는 자체 stdio sync IPC
- shim/*: tsgolint의 `tools/gen_shims/main.go` 복제로 자동 생성
- patches/*: **수는 Phase 0에서 결정**. 이전 wiki의 "1~3개" 주장은 목표

### Layer 1: @ttsc/node-bridge
- Go child process 형태로 spawn
- MessagePack 프레임 수신
- ts.factory로 ts.Node 재구성
- 기존 `typia/lib/transform`의 TransformerFactory 호출
- Program proxy: TypeChecker 호출을 Go shim으로 위임

## 핵심 의존

### Go 측
- `github.com/microsoft/typescript-go` (git submodule, pinned commit)
- `github.com/vmihailenco/msgpack/v5` (MessagePack)
- `github.com/fsnotify/fsnotify` (watch mode)
- `golang.org/x/tools` (shim 생성)

### Node 측
- `typescript` (peer, 버전 제약 없음)
- `@typescript/libsyncrpc` (선택, v1 이후 자체 구현으로 교체 가능)

## Patch 설계 (최소)

### 가설 (Phase 0에서 검증)
```
patches/001-cmd-main.patch       (4줄, hook import)
patches/002-emitter-hook.patch   (6줄, TransformChain hook)
patches/003-options-plugins.patch (1줄, Plugins[] 필드)
```

총 11줄 — [Audit 4](../09-audit/04-cycle4-ttsc-design.md)는 "실제로는 10+개 필요 가능성"을 지적. Phase 0에서 **실제 필요 수 확정**.

### 대안 (tsgonest Rewrite 모델)
- Emit 후 파일 기반 rewrite (Audit 4 지적: 이전 wiki에서 평가 누락)
- patch 지점 1개로 축소 가능
- 단점: 문자열 편집, sourcemap 복잡

→ Phase 0 spike에서 **두 접근 모두 프로토타입 후 선택**.

## IPC 프로토콜 (MessagePack 3-tuple)

Go → Node:
- `[0, requestId, {method:"Init", plugin, tsconfig, options}]`
- `[0, requestId, {method:"Transform", astBuffer, programHandle}]`
- `[0, requestId, {method:"Close"}]`

Node → Go (callback):
- `[1, callbackId, {method:"GetTypeOfNode", handle}]`
- `[1, callbackId, {method:"GetPropertiesOfType", handle}]`
- `[1, callbackId, {method:"AddDiagnostic", payload}]`

**IPC 비용 (정직)**:
- 이론적 round-trip: ~100~500 μs (로컬 stdio + libsyncrpc)
- 파일당 TypeChecker 호출: 수십~수백
- **낙관 추정 15~50ms/파일 — 실제 Phase 2에서 측정 후 확정**
- 최적화: batch TypeChecker API, Layer 1에서 Type 캐시

## 캐싱

- `.ttsc-cache/` 디렉토리
- 파일 해시(xxhash) + plugin 버전 → 변환 결과
- typia 경우 interface 파일 드물게 변경 → hit rate 높음 예상
- incremental 재빌드 지원

## 배포

```
@ttsc/cli                   (main, Node launcher)
@ttsc-darwin-arm64          (Go binary)
@ttsc-darwin-x64
@ttsc-linux-arm64
@ttsc-linux-arm             (Raspberry Pi)
@ttsc-linux-x64
@ttsc-win32-arm64
@ttsc-win32-x64
```

`optionalDependencies`로 플랫폼 자동 선택 (tsgonest/typical 패턴).

## Standard Schema 어댑터 내장

- `@ttsc/node-bridge`가 `typia.createValidate<T>()` 반환 객체에 `~standard` 프로퍼티 자동 주입
- 사용자 설정 없이 Standard Schema 호환 ([Audit 7](../09-audit/07-cycle7-missing-perspectives.md) 1번)
- 비용: 2~3주 (1주 아님)

## Edge runtime 호환 ([Audit 7](../09-audit/07-cycle7-missing-perspectives.md) 7번)

ttsc가 emit하는 JS는 **static code only**. `eval`/`new Function(code)` 사용 안 함.
- Cloudflare Workers ✅
- Vercel Edge ✅
- Deno Edge ✅

## 성능 설계

- tsgo `program.ForEachCheckerParallel` 활용
- 파일별 codegen 병렬 (worker pool)
- `.ttsc-cache/` 80%+ hit 목표

## 미확정 항목 (Phase 0에서 결정)

| 항목 | 이전 주장 | 정정 |
|---|---|---|
| Patch 수 | 1~3 | **Phase 0 실측** |
| 매 tsgo release 유지 | 5~10분 | **CI 자동화 후 측정** |
| IPC 오버헤드 | 15~50ms | **실측 후 확정** |
| Layer 2 LOC | ~8K | **Phase 1 종료 후 확정** |
| 개발 기간 | 12개월 | **shim 발견 후 재추정: 8~12개월** |

→ 다음 [07. typia-go 완전 설계](07-typia-go-specification.md)
