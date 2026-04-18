# Prior Art 2 — ts-patch (nonara/ts-patch)

> 분석 대상: `/mnt/d/github/contributions/ts-patch` (현재), `ts-patch@original` (백업), `ts-patch-typescript-6.0` (samchon의 TS 6.0 호환 테스트 fork)
> 중요도: ★★★★★ (현재 typia가 쓰는 것. 계승 자산 최대.)

## 전략 요약

ts-patch는 **TypeScript 자체 번들(`tsc.js`, `typescript.js` 등)에 직접 코드를 주입하는 monkey-patching**. 두 모드:

| 모드 | 명령 | 파일 변조 | 용도 |
|---|---|---|---|
| Persistent | `ts-patch install` | node_modules/typescript/lib 변경 | 표준 `tsc`가 patch된 상태로 실행 |
| Live | `tspc` | 메모리에서만 | 변조 없이 `tspc`로 실행 (ttypescript 스타일) |

## CLI (7개 명령)

```
ts-patch install    # patch 적용
ts-patch uninstall  # 원본 복원
ts-patch check      # 현 상태 조회
ts-patch patch      # 특정 모듈만 patch
ts-patch unpatch
ts-patch clear-cache
ts-patch version
```

진입점: `projects/core/src/cli/cli.ts`, 명령 맵: `cli/commands.ts:11-29`, minimist 파싱.

## 패치의 실제 모양

**AST 변환 기반**. TypeScript Compiler API로 tsc 번들을 파싱해 특정 함수만 wrap.

### 핵심 후킹 지점
1. `createProgram()` 후킹 — `projects/core/src/patch/transformers/patch-create-program.ts`
   - 원본 함수 이름을 `originalCreateProgram`으로 변경
   - 새 `createProgram`이 `tsp.createProgram()` (plugin-aware 버전)으로 위임
2. `emitFilesAndReportErrors()` 후킹 — `patch-emitter.ts`
   - `tsp.diagnosticMap.set(program, allDiagnostics)` 삽입
3. 주입 코드 — `projects/core/src/patch/patch-module.ts:114-133`
   - SourceSection으로 파일을 header/body/footer 분해
   - `module-patch.js` 전체를 bundle 앞에 포함 + `PatchDetail` 메타 주입

## TransformerFactory 관리

`projects/patch/src/plugin/plugin-creator.ts:162-254`:
- tsconfig의 `plugins[]`를 파싱
- 각 플러그인을 `TspPlugin`으로 감싸고 (`plugin.ts:51-188`)
  - ESM/CJS 자동 감지
  - `.ts` 파일이면 ts-node 자동 등록
- `registerPlugin()`이 require/import 환경 구성

**5가지 transformer type 지원** (ttypescript 계승 + 확장):
- `program` (default)
- `config`
- `checker`
- `ls` (LanguageService)
- `raw`
- **`transformProgram: true`**: Program 트랜스포머 — emit 전에 Program 재생성. ts-patch의 고유 기능.

## Program/Checker 접근 — extras 객체

`projects/core/shared/plugin-types.ts:89-101`:
```ts
interface TransformerExtras {
  ts: typeof import("typescript");
  library: "tsc" | "tsserver" | "typescript";
  addDiagnostic: (d: Diagnostic) => number;
  removeDiagnostic: (index: number) => void;
  diagnostics: readonly Diagnostic[];
}
```

typia가 transformer 에러를 diagnostic으로 내는 경로가 바로 `extras.addDiagnostic`. **ttsc도 이 인터페이스를 그대로 제공**해야 기존 typia 코드 변경이 최소.

## 버전 호환성 전략

`projects/core/src/slice/`:
- `ts54.ts`, `ts55.ts`, `ts552.ts` — TypeScript 버전별 AST diff 로직
- TS 5.4 이하: `fixTsEarlyReturnTransformer` 추가 필요
- TS 5.5+: 반환문 처리 변경으로 불필요
- TS 6.0+: `tsserver.js` 등 구조 재변환 (`ts-module.ts:28-37`)

`PatchDetail.isOutdated`로 TS 버전 업그레이드 시 캐시 무효화 (`patch-detail.ts:55-57`).

## samchon의 ts-patch-typescript-6.0 fork는?

저장소명만 보면 **TS 6.0 호환성 테스트용 fork**. README에 "Tested my implementation is working well" 명시. 실제로는 현재 ts-patch 3.3.0을 그대로 쓰되, TS 6.0에서 일부 모듈이 IIFE → ESM으로 바뀐 점을 검증하는 용도. **원본 ts-patch가 이미 이 호환성을 내재화**했기에 역할은 종료 상태.

→ ttsc와의 관계: 이 fork는 **과도기 유산**. ttsc에 직접 넘어가진 않음. 단, 그 과정에서 samchon이 ts-patch 내부에 익숙해졌다는 **자산**.

## tsgo 관점에서 ts-patch의 근본 한계

1. **node_modules/typescript/lib/*.js 변조 전제** → tsgo는 Go 바이너리. 변조할 JS가 없다.
2. **`vm.runInThisContext()` 기반 live mode** → tsgo 바이너리 안에 Node VM이 없다.
3. **Node require 동적 로드** → tsgo는 Go. JS 플러그인 inline 로드 불가.
4. **WeakMap `diagnosticMap`** → IPC 경계를 못 넘는다.

→ ts-patch의 **전제 자체가 tsgo 세계에서 무너진다**. "ts-patch를 tsgo에 맞게 고친 것"이 아니라 **새 구조의 시스템**이 필요 = ttsc.

## ttsc가 ts-patch에서 가져올 것

| 자산 | 이유 |
|---|---|
| tsconfig.json `plugins[]` 스키마 | 사용자 코드 변경 최소화 |
| 5종 transformer type 다형성 | 생태계 호환 |
| `TransformerExtras` 인터페이스 | typia 등 기존 transformer 거의 그대로 재활용 |
| `transformProgram` 개념 | 일부 사용 사례에 필요 |
| `before/after/afterDeclarations` 단계 | 표준 |
| path alias 해결 (tsconfig-paths) | 운영 환경 필요 |

## ttsc가 ts-patch에서 버릴 것

| 버릴 것 | 이유 |
|---|---|
| in-process node_modules patching | tsgo에서는 불가능 |
| `vm.runInThisContext()` | Node VM 의존 |
| Node require 동적 로드 | Go 바이너리와 결합 불가 |
| WeakMap diagnosticMap | IPC 경계 못 넘음 |
| AST 기반 원본 소스 변조 | 새 구조 필요 |

## 주요 파일 (25개 핵심)

| 파일 | 책임 |
|---|---|
| `cli/cli.ts`, `cli/commands.ts` | CLI 파싱, 명령 라우팅 |
| `actions/install.ts`, `patch.ts`, `uninstall.ts`, `check.ts` | 각 명령 구현 |
| `bin/tspc.ts` | tspc 진입점 (live mode) |
| `compiler/tsc.js`, `tsserver.js` | live compiler wrapper |
| `module/get-live-module.ts` | live mode 핵심 |
| `module/ts-module.ts` | TsModule, isPatchable() |
| `module/module-source.ts` | SourceSection 분해 |
| `patch/patch-module.ts` | 핵심: 번들 AST 변환 |
| `patch/patch-detail.ts` | patch 메타데이터 |
| `patch/get-patched-source.ts` | 캐시 관리 |
| `patch/transformers/patch-create-program.ts` | createProgram 후킹 |
| `patch/transformers/patch-emitter.ts` | emit 후킹 |
| `shared/plugin-types.ts` | **공유 타입 정의** |
| `projects/patch/src/shared.ts` | tsp namespace, diagnosticMap |
| `projects/patch/src/ts/shim.ts` | tsShim Proxy |
| `projects/patch/src/ts/create-program.ts` | patched createProgram |
| `projects/patch/src/plugin/plugin-creator.ts` | plugin 로드/팩토리 |
| `projects/patch/src/plugin/plugin.ts` | TspPlugin (ESM/TS 자동 감지) |
| `projects/patch/src/plugin/register-plugin.ts` | ts-node 등록 등 |
| `projects/patch/src/plugin/esm-intercept.ts` | ESM 로드 후킹 |
| `slice/ts54.ts`, `ts55.ts`, `ts552.ts` | 버전별 AST diff |
| `dist/resources/module-patch.js` | 번들 패치 최종 형태 |

## 한 줄 요약

> typia의 현재 등뼈. **스키마·다형성·extras 인터페이스는 ttsc에 그대로 계승**. 그러나 `node_modules 변조·vm.runInThisContext` 방식은 tsgo에서 불가능하므로 ttsc는 새 아키텍처.
