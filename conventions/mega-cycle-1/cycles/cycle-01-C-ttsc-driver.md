# C. ttsc Driver Lead — Cycle 1 초안

> 작성: 2026-04-19 (Cycle 1, 초안)
> 역할: ttsc Driver Lead (역할 C)
> 관장 범위: typescript-go 통합, shim 자동생성, 최소 patch 정책, Go driver 계층
> (program/visit/rewrite/cleanup), CallExpressionTransformer 이식, 13 Emitter, JS
> rewrite(IIFE 치환/unused import/sentinel/sourcemap)
> 상위 문서: [wiki/08-tsgo-master-plan/](../../wiki/08-tsgo-master-plan/) — 이곳은 실행 규약
> 형제 문서: `cycle-01-A-boundary.md` (경계), `cycle-01-B-go-engine.md` (IR/Analyzer), `cycle-01-D-ts-facade.md` (TS facade)

본 초안은 Phase 0 실구현 (`packages/ttsc/` 9,947 Go + 1,769 TS LOC, 21/21 테스트 PASS)을 근거로 작성됐다. 추정이 아닌 **지금 굴러가는 코드가 일관되게 유지되도록** 만드는 것이 C 역할의 목표다. 각 규약에는 "왜 이렇게 정하는가" 근거와 위반 시 나타나는 증상을 병기한다.

---

## 0. 맥락 요약 (읽는 사람을 위한 3분 브리핑)

본 문서는 `conventions/` 의 **첫 사이클 초안** 중 역할 C (ttsc Driver Lead) 의 것이다. 여기 적힌 규약은 **이미 `packages/ttsc/` 에서 실현된 행동 양식** 을 성문화한다. 추측 없음. 근거는 §9에 파일:라인 수준으로 인용.

핵심 맥락 5개:

1. **ttsc 는 typescript-go(tsgo) 위에 얹힌 Go 네이티브 driver** 이다. Node bridge 없음, 단일 Go 바이너리. 사용자 명령은 `ttsc --build` / `ttsc transform --file=...` / `ttsc -p tsconfig.json`.
2. **emit 전략은 경로 B (tsgonest 모델)** 를 채택. tsgo 의 public Emit + WriteFile 콜백으로 `.js` 텍스트를 가로채 문자열 수준 patch. 현재 typescript-go 본체 patch **0개** 로 동작.
3. **shim 12 패키지 (4,523 LOC 자동생성)** 가 typescript-go internal 에 대한 `go:linkname` 게이트웨이. `tools/gen_shims/main.go` 가 `extra-shim.json` 을 읽어 재노출.
4. **IR 은 B 역할 소유** (`internal/engine/metadata/`, `internal/engine/analyzer/`). C 는 이를 소비하는 **emitter 13 파일** 과 **driver 5 파일** 만 담당.
5. **사용자 관점 비대칭 안정성**: typia v12 사용자 API (`typia.is<T>(input)` 등 147 FUNCTORS) 가 한 글자도 바뀌지 않도록 보장 + tsconfig `plugins[]` 스키마 호환. 빌드 명령만 `tsc` → `ttsc` 전환.

이 5개에 대해 반대/수정 의견이 있다면 §12 미해결 질문으로 Cycle 2 토의에 가져온다.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 관장 범위 (C 역할 소유 경계)

| 영역 | 위치 | 파일 |
|---|---|---|
| typescript-go 통합 | `packages/ttsc/go.work`, `go.mod`, `third_party/typescript-go` | 5 |
| shim 자동생성 | `packages/ttsc/tools/gen_shims/`, `packages/ttsc/shim/*/` | 1 + 12 |
| Driver — Program 로드 | `packages/ttsc/internal/driver/program.go`, `host.go` | 2 |
| Driver — 방문/매칭 | `packages/ttsc/internal/driver/visit.go` | 1 |
| Driver — Rewrite | `packages/ttsc/internal/driver/rewrite.go`, `cleanup.go` | 2 |
| CallExpressionTransformer 이식 | `packages/ttsc/cmd/ttsc/dispatch.go` | 1 |
| Emitter (13 분야) | `packages/ttsc/internal/engine/emitter/*.go` | 13 |
| CLI 진입 | `packages/ttsc/cmd/ttsc/{main,build,transform}.go` | 3 |

**비소유 경계 (다른 역할):**
- MetadataSchema IR, Analyzer, Collection → **B 역할** (Go Engine Lead)
- `@typia/typia` TS facade · 13 namespace declaration → **D 역할** (TS Facade Keeper)
- Go unit test / TS integration test 전략 → **E 역할** (QA/Test Lead)
- pnpm workspace, 7 플랫폼 optionalDependencies, 배포 → **F 역할** (Release/DX Lead)
- 경계 원칙(사용자 API 불변, edge runtime 호환) 자체의 정의 → **A 역할** (Boundary Architect)

C 역할은 **"emitter 입력인 `*metadata.Schema` 을 B가 준다"** 와 **"사용자 관점 바이너리 `ttsc` 를 F가 패키징한다"** 두 인터페이스 위에서만 움직인다.

### 1.2 핵심 원칙 (C 역할 자체 원칙 6 조)

1. **shim 우선, patch 최후** — typescript-go 코드 수정은 마지막 수단. 내부 API 필요 시 먼저 `gen_shims`에 `extra-shim.json` 추가로 노출한다. patch 수 목표 **3 이하** (tsgonest 수준).
2. **emit 결과에 runtime dependency 없음** — 사용자의 `.js` 는 typia 패키지나 ttsc 바이너리를 import 하지 않는다. 자기완결 IIFE/arrow 만 방출.
3. **Edge runtime 호환** — `eval`, `new Function(code)`, `require()` dynamic 금지. 정적 JS 만.
4. **문자열 rewrite + marker 기반** — AST 직조 대신 tsgo가 emit 한 .js 를 정규식/문자열 스캔으로 patch. tsgonest 모델. 복잡한 경우 fallback 명시.
5. **idempotent rewrite** — sentinel (`/* @typia-ttsc-rewritten */`) 으로 watch-mode 재실행 시 중복 patch 금지.
6. **typia v12 파일명 1:1 대응** — Go 파일이 원본 TS 파일과 이름·책임 일치해야 사이드-바이-사이드 diff 가 가능. 거대 파일 분해 필수.

### 1.3 원칙 간 충돌 해결 우선순위

규약이 서로 충돌하는 것처럼 보일 때의 우선순위 (높은 순):

1. **사용자 API 불변** (`conventions/00-INDEX.md` 독립 문서 원칙 1). typia v12 사용자 코드 수정 0자를 절대 양보 안 함.
2. **Edge runtime 호환** (독립 문서 원칙 4). `eval`/`new Function` 금지 — 이는 성능 이득이 아무리 커도 양보 안 함.
3. **최소 patch** (독립 문서 원칙 5, patches ≤ 3). tsgo fork 화 방지.
4. **IR 경계** (본 문서 §1.2.1, shim 우선). emit/driver 가 B 역할 IR 을 침범 금지.
5. **diff-friendly 구조** (본 문서 §1.2.6). typia v12 파일명 1:1 대응.

예: "사용자 API 불변" 과 "IR 경계" 가 충돌하면 전자 우선. 즉 IR 이 어색해지더라도 사용자에게 보이는 API 는 그대로.

### 1.4 Non-goals (Phase 0 범위 밖)

C 역할이 **Phase 0 에서 명시적으로 다루지 않는 것** — 향후 Phase 이관:

- **sourcemap 생성** — Phase 1 목표. 현재 미지원 안내.
- **incremental build cache** (`.ttsc-cache/`) — Phase 1 목표. 현재는 매 빌드마다 전체.
- **watch mode 최적화** — Phase 1 목표. 현재는 rebuild 만 idempotent 보장.
- **functional/protobuf/llm/random namespace** — Phase 1~2 구현.
- **assert path threading per-property** — Phase 1.
- **validate per-property errors array** — Phase 1.
- **sourcemap-aware matchParen** — Phase 1 에서 `matchParen` 을 정식 JS 토크나이저로 교체.
- **upstream typescript-go 공식 IPC** (PR #711) — Phase 5+ 평가.

이들을 Phase 0 에 요구하는 것은 scope creep. Cycle 2 리뷰에서 "Phase 0 완결성" 평가 시 이 목록을 기준으로.

---

## 2. typescript-go 통합 규약

### 2.1 저장소 형태 — **submodule 대신 symlink + third_party/**

현재 구현 (`third_party/typescript-go` → 별도 clone 위치):

```
<repo-root>/
├─ packages/ttsc/
│  ├─ go.work          (use ../../third_party/typescript-go)
│  ├─ go.mod           (replace directives → ./shim/*)
│  └─ shim/…
└─ third_party/
   └─ typescript-go/   (별도 체크아웃, .gitignore)
```

**근거**:
- `git submodule` 은 monorepo CI 에서 추가 `--recursive` clone 부하 + upstream bump 시 merge 갈등. tsgonest/tsgolint 도 submodule 대신 vendoring 방식.
- symlink/third_party 는 `.gitignore` 로 숨기고 `bootstrap.sh` 로 clone 자동화.

**반대의견 수용 여지**: Release/DX Lead (F) 가 submodule 이 CI 에 더 낫다고 판단 시 전환 가능. Cycle 2 교차 리뷰에서 재논의.

### 2.2 go.work / go.mod 정책

- **`go.work`** (Phase 0 현재):
  - 루트 `.` + 12 shim 하위 모듈 + `tools/gen_shims` + `../../third_party/typescript-go` 를 `use` 로 묶는다.
  - `.gitignore` 대상 — 각 개발자 환경마다 경로 다를 수 있음.
- **`go.mod`** (Phase 0 현재):
  - 모든 `github.com/microsoft/typescript-go/shim/<pkg>` 에 대해 `replace` directive 로 `./shim/<pkg>` 지정.
  - 12 shim 서브모듈 + gen_shims tool 은 각자 `go.mod` 보유 (nested module 구조).
- **Production mode** (Phase 2+ 예정):
  - upstream typescript-go 가 정식 tagged release 를 내면 `replace` 제거하고 `require github.com/microsoft/typescript-go vX.Y.Z` 로 전환.
  - shim 서브모듈도 publish 하거나 main module 내부로 통합.

### 2.3 Go 버전 정책

- **Go 1.26** (Phase 0 확정). 근거:
  - typescript-go 가 1.26 에서 빌드된다는 실측.
  - `go:linkname` 은 1.23 부터 지원하나 1.26 의 `maps`, `slices`, `cmp` 패키지를 shim 생성기가 사용.
- **Go 1.27 linkname handshake 리스크** (wiki/08/09-risk-register.md R1): Go 팀이 linkname 제한 도입 시 shim 전략 붕괴. 대응:
  - 바이너리 빌드 시 `-buildvcs=false` / `-ldflags` 동결.
  - 대안 패스(effect-ts 스타일 직접 patch 모델) 도 병행 실증. Phase 0 Week 3 spike 가 이것.

### 2.4 바이너리 빌드 — `cmd/ttsc/build.go` vs `go build`

**규약 2.4.0 (명칭 구분)**: **주의** — 같은 이름이 3곳에 쓰인다.
- `cmd/ttsc/build.go` → ttsc 서브커맨드 `ttsc build` 의 구현 (runBuild 함수)
- `go build` → Go 컴파일러로 ttsc 바이너리 생성
- `npm run build` → TS facade `src/api.ts` 의 `.d.ts` + `.js` 생성 (D 역할 영역)

문서/커밋 메시지에 "build" 만 쓰면 혼동. 반드시 **ttsc build / go build / npm build** 로 prefix.

### 2.5 upstream bump 정책

| 빈도 | 이벤트 |
|---|---|
| 주간 | upstream HEAD commit 확인 (자동 스크립트) |
| 월간 | 안정 commit 으로 `third_party/typescript-go` 이동 + `go run ./tools/gen_shims` 재실행 |
| 이벤트-드리븐 | typescript-go major PR (특히 ast.Node 구조 변화) 발생 시 즉시 대응 |

bump 시 **shim.go 파일 diff 가 >200 줄이면 breaking change 의심**. 이때 `extra-shim.json` 에 명시 추가로 대응.

**규약 2.5.1**: bump 워크플로우 표준:
1. `cd third_party/typescript-go && git fetch && git checkout <new-commit>`
2. `cd ../../packages/ttsc && go run ./tools/gen_shims`
3. `go build ./...` 로 컴파일 에러 확인
4. 에러 발생 시 첫번째 에러만 분석 — shim 재노출 부족일 확률 높음 → `extra-shim.json` 에 추가
5. `go test ./...` 전체 실행 (runtime panic 감지)
6. `npm test` 로 end-to-end 회귀 검증
7. `docs/bump-YYYY-MM.md` 에 bump 사유 + 수정 사항 기록

**규약 2.5.2**: 실패 시 rollback 정책 — bump PR 은 **단독 commit** 로 유지. 회귀 발견 시 단일 revert. 다른 변경과 혼합 금지.

---

## 3. shim 규약

### 3.1 자동생성이 기본 — `gen_shims` 유일 관문

**규약 3.1.1**: 새로운 typescript-go API 가 필요하면 **반드시** 다음 순서로 진행한다.
1. `packages/ttsc/shim/<pkg>/extra-shim.json` 에 필요한 symbol 추가 (Methods / Fields / Functions / IgnoreFunctions).
2. `cd packages/ttsc && go run ./tools/gen_shims` 실행.
3. `go.work sum` / `go.sum` 갱신 확인 + `go test ./...` 로 회귀 검증.
4. 자동생성된 `shim/<pkg>/shim.go` 는 **수동 편집 금지** (파일 상단에 `DO NOT EDIT` 주석 존재).

**근거**: tsgolint 가 이 패턴으로 896 linkname 을 자동화. 수동 linkname 은 typescript-go 의 internal struct 가 바뀔 때마다 발견 못 하고 런타임 panic.

**위반 시 증상**: `go build` 는 통과하지만 `checker.GetTypeOfSymbol` 등이 segfault / `nil pointer dereference`. 디버깅 난이도 매우 높음.

### 3.2 shim 12 패키지 — 도메인별 분할

현재 확정된 shim 패키지 (각자 nested `go.mod`):

| 패키지 | LOC | 주요 용도 |
|---|---|---|
| `ast` | 2,706 | Node kinds, Identifier, CallExpression 등 모든 AST 타입 |
| `checker` | 1,102 | TypeChecker methods (GetResolvedSignature 등) |
| `compiler` | 50 | NewProgram, EmitOptions, WriteFile callback |
| `core` | 188 | CompilerOptions, TSTrue/TSFalse |
| `parser` | 55 | JSONC parser (tsconfig.json 처리) |
| `scanner` | 96 | ECMALineMap (line/column 변환) |
| `tsoptions` | 123 | ParsedCommandLine, GetParsedCommandLineOfConfigFile |
| `tspath` | 165 | ResolvePath, ToSlash 등 경로 유틸 |
| `vfs` | 19 | 파일시스템 추상화 |
| `vfs/cachedvfs` | (아래) | FS 캐시 래퍼 |
| `vfs/osvfs` | (아래) | OS 파일시스템 구현 |
| `bundled` | 19 | WrapFS, LibPath (bundled .d.ts 리소스) |

**규약 3.2.1**: shim 패키지 **추가** 시 반드시:
1. `tools/gen_shims/main.go` 의 `packagesToShim` 배열에 추가.
2. `packages/ttsc/go.work` 의 `use` 목록에 추가.
3. `packages/ttsc/go.mod` 의 `replace` 및 `require` 블록에 추가.
4. nested `go.mod` 를 `packages/ttsc/shim/<pkg>/` 아래에 생성.
5. `extra-shim.json` 을 작성 (비어있어도 `{"ExtraMethods":{},"ExtraFields":{}}` 로 파일 존재 필요).

### 3.3 linkname 대상 선정 기준

**원칙**: `gen_shims` 가 기본적으로 **exported 심볼 전부 재노출** 을 시도한다. `extra-shim.json` 은 "기본 규칙으로 커버 안 되는 것만" 명시하는 예외 목록이다.

| 경로 | 언제 쓰는가 | 예 |
|---|---|---|
| 자동 재노출 | export 된 type alias, const, var, 함수 | `ast.KindCallExpression`, `ast.Node` |
| `ExtraFunctions` | unexported (소문자 시작) 함수 중 필요한 것 | 내부 헬퍼 |
| `ExtraMethods` | struct 의 unexported 메소드 (또는 exported 인데 generic) | `Checker.getPropertiesOfType` |
| `ExtraFields` | struct 의 unexported 필드 읽기 | `Type.alias`, `Checker.globalRegExpType` |
| `IgnoreFunctions` | 이름만 같은 심볼 중 shim 에서 제외 | 중복/충돌 방지 |

**규약 3.3.1**: typia 가 직접 사용하지 **않는** method/field 는 `extra-shim.json` 에 추가 금지 (공격 표면 축소). 필요해지면 그때 추가.

**규약 3.3.2**: `ExtraFields` 는 `unsafe.Pointer` 로 struct 레이아웃을 복사하는 방식이라 upstream struct 필드 추가/삭제 시 **런타임에만** 실패. 새 필드 추가 시 PR 코멘트로 "upstream X version 에서 verified" 를 명시.

### 3.4 shim 경계 — driver 외부는 shim 금지

**규약 3.4.1**: `shim/*` 은 **오직** `packages/ttsc/internal/driver/` 와 `packages/ttsc/cmd/ttsc/` 만 import 할 수 있다. `internal/engine/` (metadata / analyzer / emitter) 은 shim 금지.

**근거**:
- Emitter 입력은 B 역할이 제공하는 `*metadata.Schema` 이며 typescript-go 와 분리돼야 typia-go 본체의 재사용성이 유지됨.
- Analyzer 도 `*shimchecker.Type` 을 **받긴 하지만** 그 밖의 shim 사용은 최소화 (현재 `analyzer/shim_type_string.go` 하나가 유일한 shim 종속).

**위반 시 증상**: typia-go 엔진이 ttsc 바이너리 밖에서 (예: unplugin API import) 재사용 불가. Phase 3 bun/deno 포팅 시 shim 리팩터 비용 폭증.

### 3.5 수동 shim 작성 금지선

**규약 3.5.1**: shim 디렉토리 아래에 `shim.go` 외 다른 `.go` 파일 (예: `helpers.go`) **금지**. 필요한 로직은 `internal/driver/` 쪽으로 이동. shim 은 순수 재노출 층이어야 함.

### 3.6 현재 `extra-shim.json` 인벤토리 (참조)

- `shim/checker/extra-shim.json`: 17 ExtraMethods + 2 ExtraFields → TypeChecker 타입 조사 전반
- `shim/ast/`: 비어있음 (exported 만 사용)
- `shim/scanner/`: `GetECMALineAndByteOffsetOfPosition` (진단 위치 계산)
- 나머지: 비어있음

이 목록은 Phase 1 때 Assert/Validate 패스가 symbol.Name 경로를 확장하면 늘어날 예정. 증가율 목표: **분기당 <10 항목**.

### 3.7 shim 자동생성 알고리즘 (gen_shims 독해)

Phase 0 의 `tools/gen_shims/main.go` 는 443 LOC. 동작 흐름:

1. **packages.Load** — `golang.org/x/tools/go/packages` 로 12 typescript-go internal package 를 syntax 레벨 로드.
2. **Scope 순회** — 각 패키지 scope 의 모든 `Name()` 에 대해:
   - **Exported TypeName** (type) → `type <Name> = <pkg>.<Name>` 재노출. Named type 이면 type parameter 유지.
   - **Exported Const/Var** → `const <Name> = <pkg>.<Name>` 또는 `var ...`.
   - **Exported Func** → `//go:linkname` directive + 동일 signature wrapper.
   - **Unexported 함수** + `ExtraFunctions` 에 명시됨 → `Title(name)` 형태 wrapper.
3. **ExtraMethods** — Named type 의 메서드 중 `ExtraMethods[TypeName]` 에 명시된 것은 receiver 를 첫 인자로 변환한 free function wrapper + `//go:linkname` directive.
4. **ExtraFields** — Named type 의 unexported 필드 읽기. `extra_<Name>` mirror struct + `unsafe.Pointer` 캐스팅 accessor 생성. 포인터 타입 unexported 필드는 재귀적으로 mirror struct 생성.
5. **IgnoreFunctions** — 동명 심볼 skip. 충돌 방지.
6. **Import 집계** — `qualifierOnlyPackageName` 콜백이 호출된 패키지 경로를 `importedPackages` map 에 기록. 직접 참조는 명시적 import, 간접(link 용)은 `_` blank import.
7. **결과 쓰기** — `shim/<pkg>/shim.go` 에 header + body 덤프, 상단 `DO NOT EDIT` 주석.

**규약 3.7.1**: 알고리즘 수정 시 tsgolint 원본과 diff 를 최소화. typia 특화는 (a) `packagesToShim` 목록, (b) `extra-shim.json` 위치 경로 뿐.

**규약 3.7.2**: unexported 필드 접근 (`ExtraFields`) 은 **upstream struct layout 이 보장되지 않는다**. Phase 1 에서 `typescript-go` 의 해당 필드가 export 되도록 upstream PR 을 제안 (공개 API 화).

---

## 4. 최소 patch 정책

### 4.1 목표 수치 — **patches ≤ 3**

tsgonest 가 3 patches 로 tsgo 위에서 동작하는 것을 실증. typia-ttsc 도 같은 수준을 목표. effect-tsgo 의 23 patches 는 **피해야 할 상한**.

### 4.2 언제 patch 가 허용되는가 (판단 순서)

1. shim 으로 필요 API 노출 가능? → **YES 면 patch 금지**.
2. 외부 훅(WriteFile, Emit 콜백, stdin/stdout)으로 해결 가능? → **YES 면 patch 금지**.
3. 문자열 rewrite 후처리로 해결 가능? → **YES 면 patch 금지** (현재 Phase 0 전략).
4. 위 셋이 모두 안 되고, upstream PR 로 받아들여질 **합리적 근거** 가 있으면 patch 허용.

**규약 4.2.1**: patch 는 1 파일당 6줄 이하, 3 파일 이하를 목표로 한다. 이를 넘기면 **shim 전략 재검토** 또는 **upstream RFC** 를 택한다.

### 4.3 patch 관리 구조

Phase 0 현재는 **patch 0개** 로 동작 중 (tsgo 의 public Emit + WriteFile 콜백만 활용). 향후 필요 시:

```
packages/ttsc/patches/
├─ 001-<짧은이름>.patch        (git format-patch 형식)
├─ 002-<짧은이름>.patch
└─ apply.sh                    (typescript-go 경로에 적용)
```

**규약 4.3.1**: 각 patch 파일은 상단 주석으로 (a) 왜 필요한가, (b) upstream PR 링크, (c) 제거 조건 (upstream merge 등) 을 명시.

**규약 4.3.2**: patch 적용은 `bootstrap.sh` 의 일부로만 실행. CI 는 적용 상태를 해시로 검증.

### 4.4 rewrite 모델 우선 — Emit-time 문자열 치환

현재 구현이 선택한 경로 B (tsgonest 모델):
- tsgo 의 `program.Emit(ctx, EmitOptions{WriteFile: wf})` 가 호출하는 `WriteFile` 콜백을 가로채 .js 텍스트를 patch.
- patch 지점 = **0** (순수 public API).
- 단점: 문자열 매칭 정확도 이슈 → §8 에서 상술.

경로 A (transform chain hook) 는 patch 1~3 필요 + AST 직조 필요. **Phase 0 에서 의도적으로 경로 B 채택**. 경로 A 는 Phase 1 에서 sourcemap 정확도가 요구될 때 재평가.

### 4.5 대안 평가 매트릭스 (경로 A vs B vs C)

| 차원 | A: transform chain hook | B: emit-time rewrite (현재) | C: Go AST 직조 |
|---|---|---|---|
| tsgo patch 수 | 1~3 | **0** | 1~3 |
| sourcemap | AST 레벨 보존 (최고) | 문자열 위치 재매핑 필요 | AST 레벨 보존 |
| 구현 복잡도 | 중간 | 낮음 (현재) | 높음 (2,111 ts.factory 호출 이식) |
| tsgonest 실증 | 없음 | ✓ | 없음 |
| 문자열 에러 위험 | 낮음 | 중간 (matchParen naïve) | 낮음 |
| 사용자 debugger UX | 좋음 | 나쁨 (현재) | 좋음 |
| upstream API 변화 취약성 | 중간 (hook API) | 낮음 (공개 API) | 중간 |

**규약 4.5.1**: 경로 선택은 **사용 데이터** 로만 결정. 신념 기반 결정 금지. Phase 0 Week 4 의 sourcemap 측정치(D5 kill gate)에 따라 경로 A 병행 도입 여부 판단.

### 4.6 patch 최소화 체크리스트

patch 를 추가해도 되는지 판단하는 4 단계 질문 (순서):
1. 이 필요가 typia 만의 것인가, typescript 사용자 일반의 것인가? 후자라면 **upstream PR**.
2. `go:linkname` 으로 internal 을 빼올 수 있는가? Yes → `extra-shim.json` 추가.
3. 기존 public API (`Emit`, `WriteFile`, `CompilerHost`) 의 callback 으로 우회 가능한가? Yes → callback.
4. emit 된 `.js` 를 문자열로 후처리 가능한가? Yes → rewriter.

**모두 No 일 때만 patch 허용**. 추가한 patch 는 upstream PR 로 3개월 이내 제거 시도.

---

## 5. Driver 계층 규약

Driver = `internal/driver/` 5 파일 + `cmd/ttsc/` 진입부. 역할별 세부 규약.

### 5.1 Program 로드 — `program.go`

**책임**: tsconfig 파싱 → tsgo Program 생성 → TypeChecker 획득.

**규약 5.1.1**: `*Program` 은 **shim-agnostic façade** 다. `shim/compiler` 의 타입은 struct 필드로만 노출되고, 외부로 export 하는 메서드는 순수 Go 타입 (`[]Diagnostic`, `[]*ast.SourceFile` 등) 반환만 허용. 이유: cmd/ 계층과 engine/ 계층이 shim 을 직접 다루지 않게 하기 위함 (§3.4 경계).

**규약 5.1.2**: `LoadProgram(cwd, tsconfigPath)` 가 Program + Diagnostic + error 3-tuple 반환. 구분:
- `error` → 시스템 수준 실패 (파일 없음, Program 생성 실패). 재시도 무의미.
- `[]Diagnostic` → tsconfig/프로그램 진단. 사용자 수정 필요.
- 성공 → Program 값.

**규약 5.1.3**: `Program.Close()` 는 `checkerRelease` 함수(`GetTypeChecker` 의 두번째 반환값)를 호출해야 함. 안 하면 tsgo 의 checker pool 이 소진돼 장시간 실행 (watch-mode) 에서 성능 저하.

### 5.2 CompilerHost — `host.go`

**규약 5.2.1**: `DefaultFS()` 와 `DefaultHost(cwd, fs)` 만 제공. 사용자가 `vfs.FS` 를 교체할 수 있도록 하되, 기본 구현은 **`bundled.WrapFS(cachedvfs.From(osvfs.FS()))`** 조합으로 고정.

**근거**: `bundled` = tsgo 의 기본 lib.es*.d.ts 포함 가상 FS. 없으면 사용자가 `--lib` 를 명시적으로 선언해야 함.

### 5.3 방문/CallSite 수집 — `visit.go`

**책임**: SourceFile 순회 → CallExpression 필터 → typia 여부 판정 → `CallSite` 생성.

`CallSite` 는 `{File, FilePath, Module, Method, Call, TypeArgument, RootName, Namespaces}` 로 구성. 해석:
- `Module` = "module" / "json" / "http" / "misc" / "notations" / "reflect" / "functional" / "protobuf" / "llm" / "random" / ... (typia 선언 파일 basename)
- `Method` = "is" / "assert" / "validate" / "stringify" / ... (signature declaration 의 name)
- `RootName` = JS 에서 쓰이는 root identifier (`typia`, alias 시 사용자가 지정한 이름)
- `Namespaces` = `typia.json.stringify` 에서 `["json"]`

**규약 5.3.1**: typia 여부 판정은 **signature declaration 의 파일 경로 패턴** 으로 한다.
- 현재 매칭: `typia/lib/*.d.ts`, `typia/src/*.ts`, `packages/typia/src/*.ts` (세 경우).
- **import 이름이 무엇이든** 같은 선언 파일을 가리키면 typia. 사용자가 `import t from "typia"` 해도 동작.

**근거**: typia v12 의 `CallExpressionTransformer.isTarget` 과 동일한 전략. 가짜 typia 구현체(user local copy)는 의도적으로 거른다.

**규약 5.3.2**: `TypeArgument` 는 `call.TypeArguments.Nodes[0]` 만 취한다. typia 모든 API 가 generic 1개만 씀.

**규약 5.3.3**: `extractRootAndNamespaces` 는 call expression 의 좌측 체인을 PropertyAccessExpression 체인 → Identifier 로 풀어내되, **마지막 segment 가 method 이름과 일치해야** 유효로 판정. 불일치 시 silent fail (return false) → 규약 1.3 (잘못된 rewrite 금지).

**규약 5.3.4**: CallExpression 방문은 **깊이 우선 재귀** (현재 `walk` 구현). tsgo 의 `ForEachChild` 가 시작 후 자식 재귀하지 않는 특성 때문에 명시적 `node.ForEachChild(...)` 호출로 자식 방문.

### 5.4 Rewrite 집합 관리 — `rewrite.go` 상단

`RewriteSet` 은 `map[srcPath][]Rewrite` 구조. 한 파일 내에서 등장 순서 보존 필수.

**규약 5.4.1**: `Rewrite` 구조체는 다음을 포함:
- `File *ast.SourceFile` — 원본 TS 파일
- `RootName string`, `Namespaces []string`, `Method string` — needle 구성
- `Replacement string` — 삽입될 JS 표현식 (이미 괄호 포함)
- `ConsumeParens bool` — factory 메서드(`createIs` 등) 는 뒤따르는 `()` 도 흡수

**규약 5.4.2**: `dispatchEmit` 의 return tuple (expression, factory, err, handled) 에서 `factory=true` 면 반드시 `ConsumeParens=true` 세팅. 혼동하면 `createIs<T>()` 가 `(arrow)()` 으로 남아 즉시 실행되는 사고 발생.

### 5.5 Cleanup — `cleanup.go`

**책임**: rewrite 완료 후, 더 이상 쓰이지 않는 `require("typia")` / `import typia from "typia"` 라인 제거. typia v12 `ImportTransformer` 의 2-pass 중 2번째 패스에 대응.

**규약 5.5.1**: 3 패턴 지원 (모두 line 기반 regex):
1. `const typia_N = __importDefault(require("typia"));` (commonjs + esModuleInterop)
2. `const typia_N = require("typia");` (commonjs)
3. `import typia from "typia";` (esm)

**규약 5.5.2**: alias(예: `typia_1`) 가 파일 다른 부분에서 **단어경계로 매칭** 되면 삭제 금지. `aliasStillReferenced` 가 `\b<alias>\b` 정규식으로 체크.

**규약 5.5.3**: Named import (`import { tags } from "typia"`) 는 **항상 유지**. `tags.Format<"uuid">` 가 타입 전용이어도 tsgo 가 declaration 을 요구할 수 있고, 무엇보다 named 는 typia 의 다른 기능 (`typia.tags`) 을 가리킬 수 있어 보수적으로 남긴다.

**규약 5.5.4**: 변환 규칙에 **확신 없는 라인은 건드리지 않는다** (conservative by design). 한 줄 잘못 지우면 번들 전체 fail.

### 5.6 Rewrite 실행 — `rewrite.go` 본체

**책임**: tsgo Emit 을 호출하고, 각 WriteFile 콜백에서 해당 파일의 Rewrite 들을 순차 spliceCall → 문자열 replace.

**규약 5.6.1**: **idempotency sentinel** = `/* @typia-ttsc-rewritten */`. `insertSentinel(text)` 로 `"use strict";` 디렉티브 **뒤** 에 삽입해 V8 strict mode 유지.

**규약 5.6.2**: sentinel 이 이미 있는 파일은 즉시 passthrough (재빌드 오염 방지). tsgonest 의 `@tsgonest-rewritten` 패턴 미러.

**규약 5.6.3**: `findSourceForOutput` 은 **slash-delimited suffix segment 매칭** 으로 출력 → 원본 매핑. basename stem 단독 매칭은 같은 이름의 다른 디렉토리 파일을 오인식 (5-Cycle 에서 발견돼 수정됨).

**규약 5.6.4**: `spliceCall` 은 **첫 miss 에서 bail** — 이후 rewrite 를 억지로 이어 붙이지 않는다. 실패 시 진단 에러 메시지에 원본 preview 400자 포함해 디버깅 경로 확보.

**규약 5.6.5**: `candidateRoots(root)` 가 반환하는 esm/commonjs/esModuleInterop 6가지 alias 형태를 **모두** 시도한다. 최단-최구체 순서 고정 (esm → `_1.default` → `.default` → `_1` → `_2`).

### 5.7 Diagnostic 변환

**규약 5.7.1**: `convertDiagnostics` 는 tsgo 의 0-base line/column 을 **1-base** 로 변환해 반환. VSCode, GitHub Actions annotations 등 툴과 호환 (5-Cycle C 에서 추가됨).

**규약 5.7.2**: `Diagnostic` struct 는 **shim 타입 미포함** (`File`, `Line`, `Column`, `Message` 4 필드만). 렌더링/필터링은 호출자 책임. 이유: CLI 출력과 TS facade 가 동일 구조를 서로 다른 방식으로 소비.

**규약 5.7.3**: `Diagnostic.String()` 포맷 `path:line:col: message` 는 tsc/GCC 관례 준수. 사용자 툴 (vim quickfix, ripgrep, etc.) 와 호환.

### 5.8 Driver 계층 의존 그래프

```
cmd/ttsc/
├─ main.go       (switch)
├─ build.go      ──┐
├─ transform.go  ──┤─→  internal/driver/  ──→  shim/*
└─ dispatch.go   ──┤       program.go
                   │       host.go
internal/engine/   │       visit.go
├─ metadata/    ←──┤       cleanup.go
├─ analyzer/    ←──┤       rewrite.go
└─ emitter/     ←──┘

← = "호출하는 쪽", 화살표 방향대로만 import 허용.
```

**규약 5.8.1**: 역순 import 금지:
- `shim/*` 이 `internal/*` import 금지
- `internal/driver/*` 가 `cmd/ttsc/*` import 금지
- `internal/engine/*` 가 `shim/*` import 금지 (예외: `analyzer/shim_type_string.go` 하나)

**규약 5.8.2**: `cmd/ttsc/*` 는 `internal/driver` 와 `internal/engine` 을 모두 호출할 수 있으나, `internal/engine` 의 emitter 만 사용하고 driver 는 경유. Emitter 를 직접 사용해 CallSite-less 호출을 만드는 경로는 **demo 서브커맨드** (`cmd/ttsc/main.go:runDemo`) 만 허용.

---

## 6. CallExpressionTransformer 이식 규약 — FUNCTORS 147 dispatch

### 6.1 typia v12 대응 표

typia v12 `packages/transform/src/CallExpressionTransformer.ts` 의 `FUNCTORS` 테이블은 **147 entry** (9 module × 평균 16 method). ttsc 는 이를 `cmd/ttsc/dispatch.go` 의 `dispatchEmit` switch 로 이식.

### 6.2 Dispatch 단일 진실원 — `dispatch.go`

**규약 6.2.1**: `build` / `transform` 두 서브커맨드는 **동일한 `dispatchEmit`** 를 호출한다. 서로 다른 switch 를 두면 언젠가 한쪽에만 method 가 추가되고 다른 쪽에서 누락.

**규약 6.2.2**: 한 개 파일에 한 개 switch 유지. typia v12 의 `FUNCTORS` 가 단일 테이블이므로 Go 측도 단일 switch 가 diff-friendly.

**규약 6.2.3**: `dispatchEmit` 리턴 4-tuple `(expression string, factory bool, err error, handled bool)` 의미 고정:
- `handled=false` → 매칭 안 됨, 호출자는 skip + 로그
- `handled=true, err!=nil` → 매칭됐으나 emitter 실패, 호출자는 skip + 로그
- `handled=true, err==nil, factory=false` → `typia.foo<T>(arg)` → `(arrow)(arg)` 로 변환
- `handled=true, err==nil, factory=true` → `typia.createFoo<T>()` → `arrow` (괄호 포함 전부 consume)

### 6.3 Phase 0 커버리지 현황

현재 dispatch 에서 처리되는 대상 (`dispatch.go` 실측):

| module | methods | 상태 |
|---|---|---|
| `module` (basic) | is, equals, assert, assertGuard, assertType, assertEquals, assertGuardEquals, validate, validateEquals | ✅ |
| `module` (factory) | createIs, createEquals, createAssert, createAssertGuard, createAssertType, createAssertEquals, createAssertGuardEquals, createValidate, createValidateEquals | ✅ |
| `json` | stringify, assertStringify, parse, assertParse, isParse, validateParse, createStringify, createAssertStringify, schema | ✅ |
| `misc` | literals, clone, prune | ✅ (일부) |
| `notations` | camel, pascal, snake | ✅ |
| `reflect` | schema, name | ✅ |
| `http` | parameter, query, queryObject, headers, formData | ✅ |

**미커버 (Phase 1 이후)**: `functional.*`, `protobuf.*`, `llm.*`, `random.*`, notations 의 {assert,is,validate} 변형, http 의 {assert,is,validate} 변형, misc 의 {assert,is,validate} 변형, createX 의 각 nested factory.

### 6.4 신규 method 추가 절차

1. **typia v12 의 해당 Transformer 찾기** — `packages/transform/src/features/<area>/<Method>Transformer.ts`.
2. **emitter 함수 작성** — `packages/ttsc/internal/engine/emitter/<area>.go` 에 `Emit<Method>ArrowFunction` 또는 `Emit<Method>Expression`.
3. **dispatch switch 에 case 추가** — `cmd/ttsc/dispatch.go`, 해당 module 아래 정확한 위치 (알파벳 순 권장).
4. **test fixture 추가** — `packages/ttsc/test/fixtures/<area>/` + `packages/ttsc/test/test_emit_<area>.ts`.
5. **문서 갱신** — 본 §6.3 표 및 `wiki/08-tsgo-master-plan/18-phase0-progress-report.md` 체크리스트.

### 6.5 Anti-pattern — 분산 dispatch

**금지**: emitter 패키지 내에서 module/method 를 판별하는 별도 switch 를 두는 것. 예를 들어 `json_stringify.go` 가 "assertStringify 요청이면 …" 하는 분기를 포함하면 **규약 6.2.1 위반**. emitter 함수는 하나의 method 에 1:1 대응.

---

## 7. Emitter 규약 — 13 분야별

각 emitter 파일은 `packages/ttsc/internal/engine/emitter/<area>.go`. 공통 원칙 먼저, 이후 분야별.

### 7.1 공통 원칙

**규약 7.1.1**: 모든 emitter 함수는 **`*metadata.Schema` 만을 입력** 으로 받는다. `shim/*` 직접 의존 금지 (§3.4).

**규약 7.1.2**: 반환은 JS 표현식 문자열. Statement 반환 금지 (호출 지점이 expression 위치이기 때문).

**규약 7.1.3**: `ErrUnsupportedSchema` 를 감싼 에러로 실패 표현. 호출자는 skip + 진단 로그. silent wrong output 금지.

**규약 7.1.4**: 공백·줄바꿈 최소화. sourcemap 미지원 Phase 0 이므로 **한 줄 표현식** 이 기본 (디버거 breakpoint 기능 포기). Phase 1 sourcemap 때 가독성 복원.

**규약 7.1.5**: **deterministic ordering** — `sort.Slice`, `sort.Strings` 로 출력 순서 고정. Go map 반복이 랜덤이라 테스트가 플레이키해진다.

**규약 7.1.6**: 사용자 식별자 이름과 충돌 방지 접두사 `__`. 예: `__is_0`, `__err`, `__fn`, `__walk`, `__allow`, `__k`, `__get`, `__getAll`, `__parsed`, `__ok`, `__rename`.

### 7.2 `is.go` (427줄) — IsProgrammer

**출력 shape**: `(input) => <boolean-expr>`.

**규약 7.2.1**: 재귀 타입 감지 `isState.visiting[obj]` 맵 사용. 동일 ObjectType 재방문 시 `__is_N` helper 로 hoist.
- 일반(비재귀): 인라인 single expression → IIFE 없음
- 재귀: `(() => { const __is_0 = (v) => (...); return <body>; })()` 로 wrap

**규약 7.2.2**: atomic check = `"<type>" === typeof <ve>`. 리터럴 constant = `<literal> === <ve>`. 순서 고정 (sort alphabetic) for 결정성.

**규약 7.2.3**: nullable/optional 은 **alternative 로 OR 첨가**:
- nullable → `null === ve || <rest>`
- optional → `undefined === ve || <rest>`

**규약 7.2.4**: Array check = `Array.isArray(ve) && ve.every((elem) => <inner>)`. Tuple = length 고정 + 각 인덱스 check `&&` AND.

**규약 7.2.5**: Object check = `"object" === typeof ve && null !== ve && false === Array.isArray(ve) && <prop1> && <prop2> && ...`. 프로퍼티는 **정렬된 순서**.

**규약 7.2.6**: Native = `ve instanceof <ClassName>`. Date / Uint8Array / Buffer / URL / RegExp / Set / Map 등.

**규약 7.2.7**: 다중 alternative 는 `(alt1 || alt2 || ...)` 로 묶고 단일 alt 는 괄호 없이 그대로. `sort.Strings(alternatives)` 로 순서 고정.

### 7.3 `assert.go` — AssertProgrammer

**출력 shape**: `(input) => (<check>) ? input : (() => { const __err = new Error("typia.assert: expected <type>, got " + ...); __err.name = "TypeGuardError"; throw __err; })()`.

**규약 7.3.1**: error.name = `"TypeGuardError"` 고정 (typia v12 의 `TypeGuardError` 클래스와 호환).

**규약 7.3.2**: Phase 0 에서는 **경로(path)** 가 최상위 `$input` 고정. Phase 1 에서 per-property path threading 추가 예정 (18-progress-report.md 우선순위 1).

**규약 7.3.3**: `EmitCreateValidateWithStandardSchema` 는 validate factory 결과에 `"~standard"` 프로퍼티 **인라인 주입**. 외부 런타임 의존 없음 (regex 6.1 `typia/src/internal/_createStandardSchema.ts` 동등 로직 복제).

### 7.4 `tags.go` (183줄) — TypeTag 처리

**출력 shape**: atomic base check 뒤에 `&&` 로 붙는 condition 조각.

**규약 7.4.1**: tag 종류별 분기 (format / pattern / type / uniqueItems / 수치/길이):
- **format** → `formatRegexps` 맵 lookup 후 `new RegExp(<pat>).test(<ve>)`. 특수: `password` → `true` (허용 전부), `regex` → try/catch `new RegExp(ve)`.
- **pattern** → `new RegExp(<user-pat>).test(<ve>)`.
- **type** → integer bounds (`int8/16/32/64`, `uint8/16/32/64`) + `Number.isInteger`. float → single-precision IEEE-754 bound. double → `Number.isFinite`.
- **uniqueItems** → `new Set(ve).size === ve.length`.
- **minimum/maximum/exclusiveMinimum/exclusiveMaximum/multipleOf/minLength/maxLength/minItems/maxItems** → `tag.Validate` template 우선 `expandValidate` 로 `$input` → `ve` 치환. Validate 없으면 수치/길이 fallback.

**규약 7.4.2**: `formatRegexps` 는 **21개** (byte, date, date-time, duration, email, hostname, idn-email, idn-hostname, ipv4, ipv6, iri, iri-reference, json-pointer, relative-json-pointer, time, url, uri, uri-reference, uri-template, uuid, 그리고 password/regex 특수). typia v12 의 FormatCheatSheet 와 1:1.

**규약 7.4.3**: `expandValidate` 가 `$importInternal(...)` 포함 시 **skip** (Phase 0 에서 이식 미완). Phase 1 에서 importer 헬퍼 주입 지원.

### 7.5 `tag_compose.go` — TagMatrix 합성

**규약 7.5.1**: TagMatrix = `[][]TypeTag` (row = AND, 전체 = OR). 한 atomic 의 태그 묶음을 product-of-sums 로 방출.

**규약 7.5.2**: 빈 matrix 는 base 그대로 통과. 단일 row 는 `(base && tag1 && tag2 ...)`. 여러 row 는 `(row1 || row2 || ...)` 형태.

### 7.6 `json_stringify.go` (206줄)

**출력 shape**: `(input) => <string-expr>`.

**규약 7.6.1**: 성능 최적화 핵심 = **상수 JSON fragment 인라인** + 값 slot 만 runtime stringify. typia v12 의 "JSON.stringify 대비 10~200× 빠름" 의 원천.

**규약 7.6.2**: 분기:
- atomic sole (string/number/boolean/bigint) → 맞춤 serializer
- object sole → `"{" + "\"k1\":" + stringify(v1) + ",\"k2\":" + ... + "}"`  (required + optional 각각 sort)
- array sole → `"[" + ve.map((elem) => inner).join(",") + "]"`
- constant sole → literal JSON text
- 기타(union/nullable/optional) → `JSON.stringify(ve)` fallback

**규약 7.6.3**: optional property 는 `(ve.k === undefined ? "" : ",\"k\":" + stringify)` 로 조건부. leading comma 회피 위해 `first` flag 를 요구.

**규약 7.6.4**: `index signature` (`[K]: V`) 는 Phase 0 **미지원**. 호출자가 fallback `JSON.stringify` 로 빠지게 함. Phase 1 대응.

**규약 7.6.5**: Float stringify = `(Number.isFinite(ve) ? String(ve) : "null")`. BigInt = `ve.toString()`. JSON 문법 준수.

**규약 7.6.6**: `%expr` placeholder 치환은 **금지** (사용자 property 이름이 `%expr` 포함 시 miscompile). 직접 문자열 concat 사용 (5-Cycle 3 에서 수정됨).

### 7.7 `json_parse.go`

**출력 shape**: method 별 다름.
- `json.parse<T>` → `(input) => JSON.parse(input)` (validation 없음, typia v12 와 동일)
- `json.assertParse<T>` → `(input) => assert(JSON.parse(input))`
- `json.isParse<T>` → `(input) => { const __parsed = JSON.parse(input); return is(__parsed) ? __parsed : null; }`
- `json.validateParse<T>` → `(input) => validate(JSON.parse(input))`

**규약 7.7.1**: 각 variant 는 대응 IS/Assert/Validate emitter 결과를 **composition** 으로 합성. emitter 중복 금지.

### 7.8 `json_schema.go` (259줄) — OpenAPI 3.1 JSON Schema

**출력 shape**: `({ version: "3.1", components: {}, schema: <schema-obj> })` — plain JS literal.

**규약 7.8.1**: `encoding/json.Marshal` 로 Go map → JSON. 결과는 JS 에서도 유효한 object literal 이므로 `(` ~ `)` 로 감싸 expression position 유지.

**규약 7.8.2**: OpenAPI 3.1 / JSON Schema Draft 2020-12 subset:
- atomic → `{type: "<kind>"}`
- constant → `{type, const}`
- array → `{type: "array", items}`
- tuple → `{type: "array", prefixItems, minItems, maxItems}`
- object → `{type: "object", properties, required, additionalProperties: false}`
- union (≥2) → `{oneOf: [...]}`
- nullable → `{type: "null"}` 를 alternatives 에 추가
- native → `nativeToJSONSchema` 헬퍼 (Date→date-time, Uint8Array→byte, URL→uri, Set→array+uniqueItems, 11 TypedArray→array+number 등)

**규약 7.8.3**: `applyTagsToAtomic` 가 태그 row[0] 를 flatten → `format`, `pattern`, `minimum/maximum`, `exclusive*`, `multipleOf`, `min/maxLength`, `min/maxItems`, `uniqueItems` 변환. 다중 row(oneOf 확장) 는 Phase 1 으로 defer.

**규약 7.8.4**: 재귀 타입의 `$defs` 확장은 Phase 1. 현재는 inline only — 순환 구조 발생 시 무한 루프 가능성 있으므로 **analyzer 단계에서 먼저 cycle 감지** 필요 (B 역할 책임).

### 7.9 `misc.go`

**규약 7.9.1**: `typia.misc.literals<"a"|"b">()` → `(["a","b"])` array expression (정렬된 순서).

**규약 7.9.2**: `typia.misc.clone<T>()` → `(input) => JSON.parse(JSON.stringify(input))`. Phase 0 은 JSON round-trip 단순화. Phase 1 에서 schema-driven 고속 clone 으로 업그레이드.

**규약 7.9.3**: `typia.misc.prune<T>()` → Set 기반 allow-list 로 non-declared property 삭제. 객체 1개 한정; multi-object / union 은 no-op fallback.

### 7.10 `notations.go`

**규약 7.10.1**: `typia.notations.{camel|pascal|snake}<T>()` → 런타임 재귀 key-renamer. 헬퍼 `__walk(v)` 가 array/object 재귀. 사이즈 최소화 위해 one-liner.

**규약 7.10.2**: rename 함수는 regex 기반:
- camel: `s/[_\-\s]+(.)/(uppercase of cap)/g` + 첫글자 lower
- pascal: camel 후 첫글자 upper
- snake: `[A-Z]` → `_$1`, `[-\s]+` → `_`, trim `_`, lower

**규약 7.10.3**: Phase 1 에서 schema-driven (키 이름을 compile-time 에 계산) 로 업그레이드 예정.

### 7.11 `reflect.go`

**규약 7.11.1**: `typia.reflect.schema<T>()` → `encoding/json.Marshal(schema)` 결과를 JS expression 으로. MetadataSchema 전체 구조 노출.

**규약 7.11.2**: `typia.reflect.name<T>()` → `jsonQuote(schema.Name())` — 사람이 읽는 이름. 디버깅 용.

### 7.12 `http.go` (111줄)

**규약 7.12.1**: `typia.http.parameter<T>(input)` — 단일 값 파싱.
- string → `String(input)`
- number → `Number(input)`
- boolean → `(input === "true" || input === true)`
- bigint → `BigInt(input)`
- literal → `(input === "<lit>" ? input : throw)`

**규약 7.12.2**: `typia.http.query<T>(input)` / `queryObject` / `headers` / `formData` — `URLSearchParams`-like 객체(=`get`/`getAll` 메서드 포함) 또는 plain object 양쪽 지원.
- array property → `__getAll(k).map((v) => coerce)`
- required scalar → throw if missing
- optional scalar → omit if missing

**규약 7.12.3**: headers/formData 는 `queryObject` 재사용. 형태 (string → structured) 가 동일하므로 중복 방지.

### 7.13 `format.go` (7줄)

**규약 7.13.1**: `formatFloatG(f float64) string = strconv.FormatFloat(f, 'g', -1, 64)`. ECMAScript Number-to-string 과 일치.

### 7.14 공통 헬퍼 정의 위치

`is.go` 하단에 정의된 공통 헬퍼는 **다른 emitter 파일도 사용**:
- `accessProperty(ve, name)` — `ve.name` 또는 `ve["name"]`
- `isIdentifier(s)`, `isAlpha(r)`, `isDigit(r)` — JS identifier 판정
- `jsonQuote(s)` — JSON 문자열 리터럴
- `numberLiteral(v)`, `intString(n)` — 숫자 리터럴

**규약 7.14.1**: 이들은 Phase 1 에서 `emitter/helpers.go` 로 분리 예정. 현재는 `is.go` 하단에 위치해도 정상.

### 7.15 Phase 1 Emitter 확장 계획

Phase 0 에서 커버 못 한 요소 (§6.3 미커버 + §1.4 non-goals) 를 Phase 1 에 이식할 때 준수 사항:

**규약 7.15.1 (functional)**: `assertFunction` / `isFunction` / `validateFunction` 와 `*Parameters` / `*Return` 변형 총 18 method. 함수 타입을 MetadataSchema 로 받으려면 B 역할 IR 에 function schema 확장 필요 — Q-C2B-3 참조.

**규약 7.15.2 (protobuf)**: `encode` / `decode` / `message` 및 variants 총 22 method. wire format (varint, fixed32/64, length-delimited) 이 schema 에 없음 → 필드번호 annotation 을 `tags.Protobuf.Tag<N>` 로 받는 방식 유지 (typia v12 와 동일).

**규약 7.15.3 (llm)**: 6 provider (openai, chatgpt, claude, gemini, llama, deepseek) 별 JSON Schema 방언 차이 — emitter 가 provider string 을 runtime 파라미터로 받아 분기.

**규약 7.15.4 (random)**: RandExp 의존. Phase 2 이후 — RandExp JS 라이브러리를 emit 된 코드에 **번들링 포함** 해야 함 → Edge runtime 호환 지키며 크기 증가 수용 논의 (Cycle 2 Q-C2A).

**규약 7.15.5**: 각 Phase 1 emitter 신규 추가 시 **typia v12 의 동명 Programmer TS 파일** 을 Go 파일명으로 1:1 미러. 예: `IsProgrammer.ts` → `is.go`, `JsonStringifyProgrammer.ts` → `json_stringify.go`. 이름 매핑이 diff-friendly 유지의 핵심.

### 7.16 Emitter 테스트 전략 (C 역할 관점에서 본 요구사항)

E 역할 주도지만 C 가 요구하는 최소 보장:

**규약 7.16.1**: 각 emitter 함수마다 Go unit test (`<emitter>_test.go`) 필수. 입력 MetadataSchema + 기대 JS 문자열 snapshot.

**규약 7.16.2**: 각 emitter 마다 TS integration test fixture (`test/fixtures/<area>/*.ts`) + `test_emit_<area>.ts`. end-to-end `tsgo → ttsc → node` 실행 검증.

**규약 7.16.3**: edge case fixture 우선 순위:
1. empty object
2. primitive
3. optional property
4. nullable property
5. recursive type (§E3 안티패턴 방어)
6. union of objects (discriminated)
7. tuple
8. array of union
9. tagged atomic (format/pattern/range)
10. stress (wide/deep/many-union)

Phase 0 에서 14 fixture 로 위 10개 케이스 모두 커버 중 (18-progress-report.md).

**규약 7.16.4**: sourcemap 이 추가되는 Phase 1 에는 **stack trace breakpoint** 검증 fixture 추가 필수.

---

## 8. JS rewrite 규약 (IIFE 치환, unused import, sourcemap)

### 8.1 Rewrite 순서 (Single-file pipeline)

하나의 `.js` 파일에 대해 WriteFile 콜백이 수행하는 순서:

1. **sentinel 검사** — `strings.Contains(text, RewriteSentinel)` 가 true 면 passthrough (§5.6 규약 5.6.2).
2. **applyRewrites** — 해당 파일의 Rewrite 배열을 source order 로 splice (§5.6 규약 5.6.4).
3. **dropUnusedTypiaImports** — `require("typia")` / `import typia` 중 사용처 없는 것 제거 (§5.5).
4. **insertSentinel** — 파일이 변경됐을 때만 sentinel stamp.
5. **WriteFile 호출** — custom writeFile 이면 그쪽, 없으면 `os.WriteFile` + `os.MkdirAll`.

### 8.2 IIFE 치환 규칙

**규약 8.2.1**: 일반 call (`typia.is<T>(arg)`) 은 `((input) => ...)(arg)` 형태. 괄호 포함된 arrow function 을 그대로 call site 에 삽입하면 tsgo 가 emit 한 `(arg)` 가 자연스럽게 이어붙음.

**규약 8.2.2**: Factory call (`typia.createIs<T>()`) 는 `ConsumeParens=true`. rewrite 가 뒤따르는 `()` 까지 통째로 먹고 naked arrow 만 남긴다. 그래야 `const fn = typia.createIs<T>()` 가 `const fn = (input) => ...` 로 변환됨.

**규약 8.2.3**: JSON schema 처럼 **파라미터 없이 객체 값만 반환** 하는 호출은 `ConsumeParens=true` + expression 은 이미 `({...})` 형태. `const schema = typia.json.schema<T>()` → `const schema = ({...})`.

### 8.3 needle 매칭 규칙

**규약 8.3.1**: `candidateRoots(root)` 가 반환하는 6 alias 중 **첫 매치** 만 사용:
1. `typia` (esm)
2. `typia_1.default` (commonjs + esModuleInterop)
3. `typia_2.default`
4. `typia.default`
5. `typia_1` (commonjs without interop)
6. `typia_2`

**규약 8.3.2**: `indexAtCallStart(text, needle)` 가 identifier-boundary 를 확인: needle 앞 글자가 `_`, `$`, letter, digit 이면 skip (longer identifier).

**규약 8.3.3**: `matchParen` 은 **naïve** string-aware paren matcher. 문자열/regex/주석 안의 괄호 무시. Phase 1 에서 정식 JS 토크나이저로 업그레이드 예정. 현재 한계:
- template literal 안의 `${...}` 내 괄호 오인식 가능성
- 주석 안의 괄호 오인식 가능성

**규약 8.3.4**: 매칭 실패 시 **silently skip 금지** — `applyRewrites` 는 첫 miss 에서 에러 반환. corrupted output 방지.

### 8.4 unused import cleanup 경계

**규약 8.4.1**: typia default import 만 제거 대상. **named import (`{ tags }`) 는 보존**. 규약 5.5.3 근거.

**규약 8.4.2**: alias 가 그 파일의 다른 부분에서 참조되는 경우는 제거 금지. regex `\b<alias>\b` 로 검사.

**규약 8.4.3**: 2-pass 구조 원형(typia v12 `ImportTransformer`) 대비 단순화 — ttsc 는 emit 후 문자열 level 에서 작동하므로 AST 재생성 없이 line 기반 regex 3개.

### 8.5 sourcemap 정책 (Phase 0 → Phase 1)

**규약 8.5.1 (Phase 0)**: sourcemap 생성은 **미지원**. tsgo 가 emit 한 `.js.map` 은 ttsc rewrite 후 원본 소스와 어긋난다. 사용자 안내:
- VSCode debugger breakpoint 는 rewrite 된 줄에서만 정확
- 스택트레이스는 IIFE 내부를 가리킴 (`typia.assert: ...` 메시지로 보완)

**규약 8.5.2 (Phase 1 예정)**: sourcemap 생성 전략 결정 — 두 방안:
- A. 경로 A 재도입 (AST transform chain hook + position 보존) — patch 1~3 필요
- B. diff-match-patch-es 스타일 역매핑 — 문자열 위치 기반

어느 쪽이든 Phase 0 Week 4 측정(D5)에 따라 선택. 현재 초안은 양쪽 가능성 모두 열어둠.

**규약 8.5.3**: sourcemap 실패 시 `--source-map=false` fallback 허용 + 주석 경고. 빌드 자체는 성공해야 함.

### 8.6 Strict-mode 디렉티브 보존

**규약 8.6.1**: 파일 시작이 `"use strict";\n` 또는 `'use strict';\n` 이면 sentinel 을 그 **뒤** 에 삽입. V8 이 strict mode 를 인지하려면 디렉티브가 파일 최상단이어야 함.

### 8.7 Anti-pattern — Rewrite 에서 하면 안 되는 것들

**금지 1**: rewrite 결과에 `eval`, `new Function(code)`, dynamic `require()` 포함. Edge runtime (Cloudflare Workers, Vercel Edge, Deno Edge) 호환성 위반. (원칙 3)

**금지 2**: 생성된 JS 에서 `typia/lib/...` 모듈 import. 자기완결 emit. (원칙 2)

**금지 3**: whitespace-only 변경으로 sentinel stamp (rewrite 없는데 파일 수정). §8.1 단계 4 의 `patched != text` 체크 필수.

**금지 4**: `findSourceForOutput` 에서 basename stem 단독 매칭 (5-Cycle 에서 이미 수정됨).

### 8.8 Rewrite 단계별 failure modes

Rewrite 파이프라인 각 단계에서 발생 가능한 실패 + 적절한 대응:

| 단계 | 실패 시나리오 | 대응 | 사용자 증상 |
|---|---|---|---|
| sentinel 검사 | 파일 읽기 실패 | tsgo Emit 결과에 의존, 자체 읽기 없음 | N/A |
| applyRewrites | needle 미매칭 | error 반환, 빌드 중단 | `driver: could not locate …` |
| applyRewrites | matchParen 불균형 | error, 중단 | `driver: unbalanced parens …` |
| dropUnusedTypiaImports | alias 여전히 참조됨 | import 라인 유지 | runtime `require("typia")` 잔존 (무해) |
| insertSentinel | 파일 내용 변화 없음 | sentinel 삽입 skip | 다음 빌드에 재검사 |
| writeOutput | 디렉토리 생성 실패 | error 반환 | `ttsc build: emit failed: mkdir…` |
| writeOutput | 파일 쓰기 실패 | error 반환 | 디스크 full / 권한 문제 |

**규약 8.8.1**: 각 실패는 **진단 메시지에 원본 컨텍스트 포함**. 400자 preview 가 표준.

**규약 8.8.2**: rewrite 실패 시 **해당 파일의 WriteFile 만** 에러 반환. 다른 파일은 계속 emit. 부분 실패 허용 — 20개 파일 중 1개 실패로 전체 빌드 fail 금지. (단 분석 실패는 전체 빌드 fail)

### 8.9 Watch mode 호환성 (Phase 1 예고)

Phase 0 은 one-shot 빌드만. Phase 1 에서 watch mode (`ttsc build --watch`) 추가 시 준수:

**규약 8.9.1**: Sentinel + `.ttsc-cache/` hash 조합으로 **file-level incremental**. 파일 내용 + plugin 버전 + MetadataSchema hash 가 cache 와 동일하면 skip.

**규약 8.9.2**: Watch mode 에서 파일 변경 이벤트 debounce 100ms. tsgo 는 내부 incremental compile 을 활용 가능 (`ts.createWatchProgram` 등가).

**규약 8.9.3**: Watch mode 에서 에러 복구 — 한 파일 에러가 전체 watch 세션 종료 금지. 해당 파일을 "에러 상태" 로 표시하고 다음 변경 기다림.

---

## 9. 코드 근거 (파일:라인 인용)

본 절은 규약이 실제 코드와 일치함을 검증할 수 있도록 주요 앵커를 명시한다.

### 9.1 Driver 계층

- `packages/ttsc/internal/driver/program.go:39-55` — `Program` struct + Close
- `packages/ttsc/internal/driver/program.go:101-131` — `LoadProgram` 3-tuple 반환
- `packages/ttsc/internal/driver/program.go:149-169` — `convertDiagnostics` 1-base 변환
- `packages/ttsc/internal/driver/host.go:23-31` — `DefaultFS` / `DefaultHost` 고정 조합
- `packages/ttsc/internal/driver/visit.go:11-41` — `CallSite` struct + `CollectCallSites`
- `packages/ttsc/internal/driver/visit.go:58-106` — `tryCallSite` (sig.Declaration → matchTypiaModule → methodName → extractRootAndNamespaces)
- `packages/ttsc/internal/driver/visit.go:109-129` — `matchTypiaModule` 3 path 패턴
- `packages/ttsc/internal/driver/visit.go:164-201` — `extractRootAndNamespaces` + method 이름 일치 검증
- `packages/ttsc/internal/driver/cleanup.go:51-85` — 3 import pattern
- `packages/ttsc/internal/driver/cleanup.go:90-95` — `aliasStillReferenced` 단어경계
- `packages/ttsc/internal/driver/rewrite.go:32-51` — `Rewrite` struct (ConsumeParens 포함)
- `packages/ttsc/internal/driver/rewrite.go:83` — `RewriteSentinel` 상수
- `packages/ttsc/internal/driver/rewrite.go:89-132` — `EmitAll` 순서
- `packages/ttsc/internal/driver/rewrite.go:150-157` — `insertSentinel` use-strict 보존
- `packages/ttsc/internal/driver/rewrite.go:198-212` — `findSourceForOutput` suffix segment 매칭
- `packages/ttsc/internal/driver/rewrite.go:243-274` — `spliceCall` + ConsumeParens 분기
- `packages/ttsc/internal/driver/rewrite.go:282-294` — `candidateRoots` 6 alias
- `packages/ttsc/internal/driver/rewrite.go:317-335` — `indexAtCallStart` identifier boundary

### 9.2 Emitter 계층

- `packages/ttsc/internal/engine/emitter/is.go:28-41` — `EmitIs`
- `packages/ttsc/internal/engine/emitter/is.go:45-52` — `EmitIsArrowFunction`
- `packages/ttsc/internal/engine/emitter/is.go:56-77` — `isState` (재귀 hoist)
- `packages/ttsc/internal/engine/emitter/is.go:81-98` — `wrap` IIFE 형태
- `packages/ttsc/internal/engine/emitter/is.go:113-187` — `buildIs` 분기 (nullable/atomic/constant/array/tuple/object/native)
- `packages/ttsc/internal/engine/emitter/is.go:265-295` — `emitObjectCheck` 재귀 감지
- `packages/ttsc/internal/engine/emitter/assert.go:13-27` — `EmitAssertArrowFunction`
- `packages/ttsc/internal/engine/emitter/assert.go:58-64` — `EmitCreateValidateWithStandardSchema`
- `packages/ttsc/internal/engine/emitter/tags.go:23-78` — `tagCheck` 분기
- `packages/ttsc/internal/engine/emitter/tags.go:88-103` — `formatCheck` + password/regex 특수
- `packages/ttsc/internal/engine/emitter/tags.go:106-122` — `typeTagCheck` integer/float
- `packages/ttsc/internal/engine/emitter/tags.go:144-170` — `formatRegexps` 21종
- `packages/ttsc/internal/engine/emitter/tags.go:174-183` — `integerBounds`
- `packages/ttsc/internal/engine/emitter/tag_compose.go:14-34` — `atomicWithTags` product-of-sums
- `packages/ttsc/internal/engine/emitter/json_stringify.go:36-71` — `buildJsonStringify` 분기
- `packages/ttsc/internal/engine/emitter/json_stringify.go:96-172` — `objectStringify` required/optional
- `packages/ttsc/internal/engine/emitter/json_parse.go:35-62` — `EmitJsonParseArrowFunction` 4 variants
- `packages/ttsc/internal/engine/emitter/json_schema.go:58-153` — `convertToJSONSchema`
- `packages/ttsc/internal/engine/emitter/json_schema.go:205-224` — `nativeToJSONSchema`
- `packages/ttsc/internal/engine/emitter/misc.go:15-27` — `EmitMiscLiteralsExpression`
- `packages/ttsc/internal/engine/emitter/misc.go:57-59` — `EmitMiscCloneArrowFunction` JSON round-trip
- `packages/ttsc/internal/engine/emitter/misc.go:64-87` — `EmitMiscPruneArrowFunction` Set allow-list
- `packages/ttsc/internal/engine/emitter/notations.go:19-25` — `EmitNotationArrowFunction`
- `packages/ttsc/internal/engine/emitter/reflect.go:15-33` — reflect.schema / reflect.name
- `packages/ttsc/internal/engine/emitter/http.go:15-29` — `EmitHttpParameterArrowFunction`
- `packages/ttsc/internal/engine/emitter/http.go:37-69` — `EmitHttpQueryObjectArrowFunction`

### 9.3 CLI / Dispatch

- `packages/ttsc/cmd/ttsc/main.go:45-85` — `run` 서브커맨드 switch
- `packages/ttsc/cmd/ttsc/dispatch.go:17-88` — 단일 switch (7 module × 다수 method)
- `packages/ttsc/cmd/ttsc/build.go:39-125` — build 파이프라인 (LoadProgram → CollectCallSites → dispatchEmit → EmitAll)
- `packages/ttsc/cmd/ttsc/transform.go:55-145` — 단일 파일 transform (번들러 훅용)

### 9.4 Shim 생성

- `packages/ttsc/tools/gen_shims/main.go:44-57` — `packagesToShim` 12개
- `packages/ttsc/tools/gen_shims/main.go:59-64` — `ExtraShim` 구조
- `packages/ttsc/tools/gen_shims/main.go:146-181` — `emitGoLinknameDirective` + `emitLinkedFunction`
- `packages/ttsc/tools/gen_shims/main.go:295-379` — `ExtraFields` unsafe.Pointer 레이아웃 복사
- `packages/ttsc/shim/checker/extra-shim.json` — 17 methods, 2 fields
- `packages/ttsc/go.mod:7-26` — replace block (12 shim)
- `packages/ttsc/go.work:1-22` — use block

### 9.5 typia v12 원본 대응

- `packages/transform/src/transform.ts:41-68` — typia v12 transformer factory. Go 포팅: `driver/program.go` + `driver/visit.go`
- `packages/transform/src/FileTransformer.ts:17-58` — v12 iterate_node. Go 포팅: `driver/visit.go` `walk` + `tryCallSite`
- `packages/transform/src/CallExpressionTransformer.ts:136-182` — `CallExpressionTransformer.transform` + `FUNCTORS` 147. Go 포팅: `cmd/ttsc/dispatch.go`
- `packages/transform/src/ImportTransformer.ts:99-200` — 2-pass import cleanup. Go 포팅: `driver/cleanup.go` (1-pass 문자열 버전)

---

## 10. 안티패턴

Phase 0 실구현 + 5-Cycle 자기 감수 과정에서 발견된 안티패턴을 **금지 사례** 로 기록한다. 향후 기여자가 실수를 반복하지 않도록.

### 10.1 Driver 안티패턴

**A1. basename stem 단독 매칭**
```go
// 금지 — 같은 파일명 다른 디렉토리에서 오작동
for path := range rs.byPath {
    if filepath.Base(path) == filepath.Base(outputName) { ... }
}
```
**올바름**: `commonSuffixSegments` 로 슬래시 기준 suffix segment 카운트.

**A2. strings.Contains 기반 alias 검사**
```go
// 금지 — "typia" 가 다른 식별자 부분 문자열일 수 있음
if strings.Contains(text, alias) { ... }
```
**올바름**: `regexp.MustCompile(\b + alias + \b)`.

**A3. method 검증 없는 namespace 추출**
```go
// 금지 — typia.foo.bar 에서 bar 가 method 인지 확인 안 함
segments := []string{...}
return root, segments, true
```
**올바름**: `segments[last] == method` 확인 후 `namespaces = segments[:last]`.

**A4. Checker release 누락**
```go
// 금지 — pool 고갈
checker, _ := tsProgram.GetTypeChecker(ctx)
```
**올바름**: `checker, done := ...; defer done()` 또는 `Program.Close` 에서 호출.

### 10.2 Emitter 안티패턴

**E1. `%expr` placeholder 치환 의존**
```go
// 금지 — 사용자 property 이름에 %expr 포함 시 miscompile
result := strings.ReplaceAll(template, "%expr", innerExpr)
```
**올바름**: `strings.Builder` 로 직접 concat.

**E2. 포인터 키 map 으로 재귀 가드**
```go
// 금지 — tsgo 가 동일 타입에 대해 distinct 포인터 반환 경로 존재 → 무한 재귀
visiting := map[*Type]bool{}
```
**올바름**: `map[string]bool` + `typeKey(t) = Type.Id() 기반 문자열`. (Analyzer 쪽 규약이지만 emitter 도 동일 원칙)

**E3. 재귀 ObjectType 가드 누락**
```go
// 금지 — 재귀 타입에서 goroutine stack overflow
func emitObjectBody(ve string, obj *ObjectType) string {
    for _, p := range obj.Properties {
        check := emitObjectBody(ve+"."+p.Name, p.Type)  // 무한 재귀
        ...
    }
}
```
**올바름**: `isState.visiting` + `reserveHelper` → `__is_N` hoist.

**E4. Go map 순회 순서 의존**
```go
// 금지 — 테스트가 플레이키
for key, value := range propMap { ... }
```
**올바름**: `sort.Slice` 또는 `sort.Strings` 로 순서 고정.

**E5. silent wrong output**
```go
// 금지 — 잘못된 JS 를 조용히 방출
if !matched { return defaultJunk, nil }
```
**올바름**: `ErrUnsupportedSchema` wrap 반환 → 호출자 skip + 로그.

### 10.3 Shim 안티패턴

**S1. 수동 `shim.go` 편집**
- `DO NOT EDIT` 주석 무시하고 직접 수정. `gen_shims` 재실행 시 사라짐.
- **올바름**: `extra-shim.json` 수정 → `go run ./tools/gen_shims`.

**S2. `extra-shim.json` 에 미사용 심볼 추가**
- 공격 표면 증가, upstream 변경 시 회귀 리스크 상승.
- **올바름**: typia 가 실제 사용하는 것만. 사용 중지 시 제거.

**S3. `engine/` 에서 shim 직접 import**
- 경계 위반 (§3.4). typia-go 엔진이 ttsc 바이너리 밖으로 재사용 불가.
- **올바름**: driver 가 shim 타입을 순수 Go 타입(`*metadata.Schema` 등)으로 번역해 전달.

### 10.4 Rewrite 안티패턴

**R1. sentinel 없이 idempotency 보장 시도**
- watch-mode 에서 sentinel 없으면 매 빌드마다 rewrite 중복 적용.
- **올바름**: `RewriteSentinel` + `strings.Contains` 체크.

**R2. use-strict 앞에 sentinel 삽입**
- `/* @typia-ttsc-rewritten */\n"use strict";\n...` → V8 이 strict mode 미인식.
- **올바름**: use-strict 다음 줄에 sentinel.

**R3. 누락된 parent 디렉토리**
```go
// 금지 — outDir 이 존재 안 할 때 쓰기 실패
os.WriteFile(path, data, 0o644)
```
**올바름**: `writeOutput` 헬퍼가 `os.MkdirAll(filepath.Dir(path), 0o755)` 선호출.

---

## 11. 검증 체크리스트

향후 코드 변경 / 신규 기능 추가 시 본 체크리스트를 통과해야 규약 준수로 인정.

### 11.1 일반

- [ ] `cd packages/ttsc && go build ./...` 성공
- [ ] `cd packages/ttsc && go test ./...` 4 패키지 전부 PASS
- [ ] `cd packages/ttsc && npm test` 21/21 PASS
- [ ] `cd packages/ttsc && go run ./tools/gen_shims` 실행 후 diff 의도된 것만
- [ ] `.gitignore` 준수 (`third_party/typescript-go`, `go.work`, `go.work.sum` 커밋 금지)

### 11.2 신규 emitter 추가 시

- [ ] typia v12 원본 Transformer 파일 경로 주석으로 명시
- [ ] `Emit<Method>ArrowFunction` 또는 `Emit<Method>Expression` 네이밍
- [ ] 입력은 `*metadata.Schema` 만
- [ ] `shim/*` import 없음
- [ ] `ErrUnsupportedSchema` 로 실패 표현
- [ ] `sort.*` 로 순서 고정
- [ ] test fixture + `test_emit_<area>.ts` 추가
- [ ] `dispatch.go` switch 에 case 추가
- [ ] §6.3 표 업데이트

### 11.3 신규 shim 심볼 추가 시

- [ ] `extra-shim.json` 에만 추가 (수동 shim.go 편집 금지)
- [ ] `go run ./tools/gen_shims` 재실행
- [ ] 사용처 있음 (유령 심볼 아님)
- [ ] `go.sum` diff 확인

### 11.4 patch 추가 시

- [ ] shim 으로 대체 불가 논증
- [ ] 외부 훅으로 대체 불가 논증
- [ ] 문자열 rewrite 로 대체 불가 논증
- [ ] patch 파일 ≤ 6줄 (1 파일) / 총 ≤ 3 파일
- [ ] 상단 주석: (a) 이유, (b) upstream PR 링크, (c) 제거 조건
- [ ] `bootstrap.sh` + CI 해시 검증 업데이트

### 11.5 rewrite 로직 변경 시

- [ ] idempotency sentinel 동작 보존
- [ ] use-strict 디렉티브 보존
- [ ] edge runtime 금지 패턴(`eval`, `new Function`) 회피
- [ ] unused import cleanup 회귀 없음
- [ ] `test_rewrite_idempotent` 통과

### 11.6 Breaking change (규약 변경) 시

- [ ] Cycle 2 교차 리뷰에 초안으로 제출
- [ ] Cycle 3 개정에 반영
- [ ] Cycle 4 integration audit 로 모순 검사
- [ ] Cycle 5 최종 확정
- [ ] `conventions/03-ttsc-driver.md` 반영 (최종 문서)

---

## 12. 미해결 질문 (Cycle 2 교차 리뷰 대상)

### 12.1 B 역할에게 (Go Engine Lead)

**Q-C2B-1**: `analyzer.New(checker, DefaultOptions(), nil).Walk(site.TypeArgument)` 에서 `*shimchecker.Type` 을 받는 설계 — driver 가 shim 타입을 analyzer 에 넘기는 유일 지점이다. B 역할은 이것이 허용 가능한 경계 침범인가? 또는 `Type.Id()` 같은 shim-agnostic handle 을 driver 가 먼저 추출해 전달해야 하는가?

**Q-C2B-2**: Recursive type 의 `typeKey(t)` 가 `Type.Id()` 기반 문자열을 사용하는데, `Type` shim 에 `Id()` 메서드가 노출되는지 `extra-shim.json` 에 명시돼야 하는가?

**Q-C2B-3**: MetadataSchema 의 `Name()` 메서드가 emitter 에서 쓰이는 error/diagnostic 메시지의 이름인데, 이 이름 계산 정책(Phase 0 `safeName` 헬퍼)은 B 역할 영역인가 C 역할인가?

### 12.2 A 역할에게 (Boundary Architect)

**Q-C2A-1**: `packages/ttsc/cmd/ttsc/` 는 CLI 진입부라 사용자 API 에 속하지만, 번들러 plugin 에서 호출되는 `src/api.ts` 는 TS facade (D 역할) 도 관련. CLI 경계 vs. 프로그래매틱 API 경계의 주관리자는 A 인가 C 인가?

**Q-C2A-2**: 원칙 "edge runtime 호환" 은 emit 결과에만 적용되는가, ttsc 바이너리 자체에도 적용되는가 (바이너리가 Node spawn 하는 것은 edge 런타임에서 못 돌아감)?

### 12.3 D 역할에게 (TS Facade Keeper)

**Q-C2D-1**: `src/api.ts` 의 `transform / build / check / version` 시그니처는 unplugin / vite / webpack / rollup 어댑터가 공통으로 쓴다. 어댑터별 shape 차이가 생기면 누가 조정하는가 (C 의 CLI vs. D 의 어댑터)?

**Q-C2D-2**: 사용자가 `typia.createValidate<T>()` 결과에 `~standard` 속성을 기대하는 경우, emit 된 JS 가 standard schema spec 과 차이 날 때 spec 의 유지 책임은 어느 역할인가?

### 12.4 E 역할에게 (QA/Test Lead)

**Q-C2E-1**: `test/fixtures/*` 디렉토리 구성은 E 역할 규약에 속하나, 각 fixture 가 검증하는 emitter behavior 의 **최소 셋** (spec 차원) 은 C 가 정의해야 하는가 E 가 정의해야 하는가?

**Q-C2E-2**: Performance benchmark 기준 (tsc+ts-patch 대비 2× 이상, wiki/08/17 성공 기준) 의 측정 방식은 누가 설계하는가? 측정 결과 리포팅 형식은?

### 12.5 F 역할에게 (Release/DX Lead)

**Q-C2F-1**: `third_party/typescript-go` 는 submodule 아니고 symlink + bootstrap.sh 전제. 7 플랫폼 CI cross-compile 에서도 bootstrap 이 같은 방식으로 동작하는가? 아니면 submodule 전환이 필요한가?

**Q-C2F-2**: sourcemap 지원 시점 (Phase 0 미지원 → Phase 1) 을 사용자 안내 문서에 어떻게 기재할지. Setup wizard 가 `--runtime=ttsc` 로 전환 시 sourcemap 제약 경고를 포함해야 하는가?

### 12.6 자체 미해결

**Q-C-self-1**: Phase 1 sourcemap 경로 A(AST transform chain) 재도입 시 patch 수가 1~3 늘 것. 원칙 §1.2.1 "patch ≤ 3" 에 근접. 더 늘어나면 양자택일 (sourcemap 포기 vs patch ≤ 5 허용) 의 threshold 를 어디에 둘 것인가?

**Q-C-self-2**: typia v12 의 functional/protobuf/llm/random module 포팅은 Phase 1~2. 각 module 의 emitter 가 MetadataSchema 로는 표현 어려운 정보(함수 타입, wire format, LLM provider 6종) 를 요구. 현재 B 역할 IR 설계로 충분한가, 새 IR 확장이 필요한가?

**Q-C-self-3**: typescript-go upstream 이 `Emit` 의 WriteFile 인터페이스를 breaking change 로 바꾸면 (현 ttsc 의 중심 hook), Phase 0 전 구조가 흔들림. upstream PR 로 stable API guarantee 를 요청할 것인가 (RFC 경로)?

**Q-C-self-4**: Anti-pattern §10 에서 "`matchParen` 은 naïve" 라고 인정한 부분의 Phase 1 해소 — 완전한 JS 토크나이저 이식(수백 LOC)은 과잉일 수 있음. 중간안(template literal + 주석만 처리)이 합리적인가?

**Q-C-self-5**: `dropUnusedTypiaImports` 가 현재 regex 3종으로 작동하나, TypeScript 이 새 module format(예: `require.resolve` 형태) 을 생성하면 miss 가능. 확장 전략 (regex 추가 vs. parser 도입) 중 무엇?

---

## 부록 A. Phase 0 → 향후 Phase 전환 요약

| Phase | 기간 | C 역할 주요 작업 |
|---|---|---|
| Phase 0 | 2026 Q1~Q2 | 실구현 완료 (9,947 LOC + 21/21 PASS). 본 규약 초안. |
| Phase 1 | 2026 Q3~Q4 | sourcemap, assert path threading, validate per-property errors, index signature, functional module |
| Phase 2 | 2027 Q1~Q2 | typia v13 preview, ttsc 로 typia validators 빌드 가능 (opt-in dogfooding) |
| Phase 3 | 2027 Q3+ | protobuf, llm namespace 포팅. random generator. |
| Phase 4 | 2028 Q1+ | typia 자체 ttsc 빌드 전환 (dogfooding default) |
| Phase 5+ | 2028 Q3+ | typescript-go 공식 IPC API (PR #711) 사용 평가 |
| Phase 6 | 2029 Q2 | typia v14 — 100% ttsc, ts-patch 제거 |

## 부록 B. 숫자 요약 (2026-04-19 기준)

| 항목 | 값 | 근거 |
|---|---|---|
| Go non-test LOC | 4,459 | `18-phase0-progress-report.md` |
| Go test LOC | 965 | 상동 |
| Shim 자동생성 LOC | 4,523 | `wc -l shim/*/shim.go` |
| TS test LOC | 1,769 | 18-report |
| Go test 패키지 | 4 (전부 PASS) | `go test ./...` |
| TS integration test | 21/21 PASS | `npm test` |
| Shim 패키지 | 12 | §3.2 표 |
| ExtraShim 항목 | 17 methods + 2 fields (checker 만), + scanner 1 | §3.6 |
| Dispatch module | 7 (module/json/misc/notations/reflect/http) | §6.3 |
| patches | **0** (Phase 0) | `packages/ttsc/patches/` 비어있음 |
| formatRegexps | 21 | `tags.go:144-170` |
| integerBounds | 8 | `tags.go:174-183` |
| candidateRoots | 6 alias | `rewrite.go:282-294` |
| unusedImportPatterns | 3 | `cleanup.go:51-85` |

## 부록 B.1. 성능 측정 기준선 (Phase 0 실측)

| 지표 | Phase 0 현재값 | Phase 1 목표 |
|---|---|---|
| `ttsc build` 21 fixture 처리 시간 | 측정 대상 (Week 4 KPI) | tsc+ts-patch 대비 ≥ 2× |
| 메모리 사용량 | 측정 대상 | 동일 분석 범위에서 ≤ 150% tsc |
| shim `go:linkname` 호출 수 | 측정 대상 | Phase 1 에서 pprof 기반 감소 목표 |
| emit 된 JS 크기 | 측정 대상 | typia v12 대비 ±10% |
| 재빌드 cache hit | 0% (cache 없음) | ≥ 80% (Phase 1 `.ttsc-cache/`) |

**규약 B.1.1**: 성능 리포트는 F 역할 (Release/DX) 주도. C 역할은 측정 가능한 hook (`--benchmark` 플래그 등) 을 driver/emitter 에 제공.

## 부록 B.2. 환경 변수 및 플래그 매트릭스

ttsc 바이너리가 인식하는 환경/플래그 (Phase 0 기준):

| 종류 | 이름 | 역할 | 기본값 |
|---|---|---|---|
| flag | `--tsconfig=PATH` | tsconfig.json 경로 | `tsconfig.json` |
| flag | `--cwd=DIR` | 작업 디렉토리 오버라이드 | `os.Getwd()` |
| flag | `--emit` | `.js` 쓰기 활성화 | off (`build`), on (`-p`) |
| flag | `--quiet` | 요약 배너 억제 | off |
| flag | `--file=PATH` | transform 대상 파일 | 필수 (transform) |
| flag | `--out=PATH` | transform 출력 경로 | stdout |
| flag | `--type=T` | demo 대상 atomic | `string` |
| flag | `-p`, `--project` | tsc 호환 alias | N/A |
| env | (향후 Phase 1) `TTSC_CACHE_DIR` | cache 위치 | `.ttsc-cache` |
| env | (향후 Phase 1) `TTSC_LOG_LEVEL` | 진단 verbosity | `info` |

**규약 B.2.1**: 플래그 추가 시 `cmd/ttsc/main.go` 의 `printHelp()` 에 반드시 기재. 숨김 플래그 금지 (테스트 전용은 `_test` 빌드태그로 분리).

## 부록 C. 외부 참조 정합성

| 참조 | ttsc 가 차용한 것 | LICENSE | ttsc 의 attribution 위치 |
|---|---|---|---|
| tsgolint | `gen_shims/main.go` 알고리즘 | MIT | `tools/gen_shims/main.go:1-11` |
| tsgonest | rewrite 패턴, sentinel 아이디어, `host.go` 구조 | MIT | `driver/host.go:6-10` |
| effect-tsgo | (참조만, 코드 차용 없음) | TBD | N/A |
| typescript-go | shim 자동생성 대상 | Apache 2.0 | `THIRD-PARTY-LICENSES.md` |
| typia v12 | `transform.ts` / `FileTransformer.ts` / `CallExpressionTransformer.ts` / `ImportTransformer.ts` 이식 | MIT (자기 코드) | 각 Go 파일 상단 주석 |

## 부록 D. 예시 시나리오로 보는 rewrite 파이프라인

Cycle 2 독자가 본 문서의 규약을 구체 예로 이해하도록 시나리오 3개.

### D.1 시나리오 1 — primitive is 체크

**입력 TS** (`src/main.ts`):
```ts
import typia from "typia";

const value: unknown = 42;
if (typia.is<number>(value)) {
  console.log(value + 1);
}
```

**tsgo emit (pre-rewrite)** (`dist/main.js`):
```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typia_1 = __importDefault(require("typia"));
const value = 42;
if (typia_1.default.is(value)) {
    console.log(value + 1);
}
```

**ttsc 흐름**:
1. `CollectCallSites` → `{Module: "module", Method: "is", RootName: "typia", Namespaces: []}`, `TypeArgument = number`.
2. `analyzer.Walk(numberType)` → `Schema{Atomics: [{Type: "number"}]}`.
3. `dispatchEmit("module", "is", schema)` → `"(input) => \"number\" === typeof input"`, factory=false, handled=true.
4. `Rewrite{RootName: "typia", Method: "is", Replacement: "((input) => \"number\" === typeof input)", ConsumeParens: false}`.
5. WriteFile 콜백:
   - sentinel 없음 → proceed
   - `applyRewrites` → `typia_1.default.is(` 매칭 (candidate `typia_1.default`) → splice
   - `dropUnusedTypiaImports` → `typia_1` 미사용 → 제거
   - `insertSentinel` → `"use strict";\n/* @typia-ttsc-rewritten */\n...`

**최종 JS**:
```js
"use strict";
/* @typia-ttsc-rewritten */
Object.defineProperty(exports, "__esModule", { value: true });
const value = 42;
if (((input) => "number" === typeof input)(value)) {
    console.log(value + 1);
}
```

### D.2 시나리오 2 — createValidate with Standard Schema

**입력 TS** (`src/v.ts`):
```ts
import typia from "typia";

interface User { id: number; name: string; }
export const validateUser = typia.createValidate<User>();
```

**tsgo emit**:
```js
"use strict";
const typia_1 = __importDefault(require("typia"));
exports.validateUser = typia_1.default.createValidate();
```

**ttsc 흐름**:
1. CallSite `{Method: "createValidate", ...}`.
2. `dispatchEmit` → `EmitCreateValidateWithStandardSchema(schema)` → factory=true, expression = `(() => { const __fn = (input) => {...}; __fn["~standard"] = {...}; return __fn; })()`.
3. Rewrite `ConsumeParens=true` → 뒤따르는 `()` 도 흡수.

**최종 JS** (sentinel, strict 유지):
```js
"use strict";
/* @typia-ttsc-rewritten */
exports.validateUser = ((() => { const __fn = (input) => { const __ok = (...); return __ok ? { success: true, data: input, errors: [] } : {...}; }; __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => {...} }; return __fn; })());
```

**검증**: MCP / Next.js Server Actions / Hono 가 `validateUser["~standard"].validate(obj)` 를 호출하면 Standard Schema v1 계약 충족. 추가 런타임 dependency 없음.

### D.3 시나리오 3 — 재귀 트리 타입 (§E3 방어)

**입력 TS**:
```ts
import typia from "typia";

interface TreeNode { value: string; children: TreeNode[]; }
const check = typia.createIs<TreeNode>();
```

**emitter 흐름** (`is.go` 재귀 감지):
1. `emitObjectCheck` 시작, `visiting[tree] = true`.
2. 프로퍼티 `children` 의 Array element 가 다시 `tree` 참조.
3. `emitObjectCheck(tree)` 재진입 → `visiting[tree]==true` 이므로 `reserveHelper(tree)` → `__is_0` 이름 예약 + `"__is_0(ve)"` 반환.
4. 외부 `emitObjectCheck` 종료 시 `helperName[tree]` 가 설정돼 있음 → body 를 `helpers[tree]` 에 저장, `"__is_0(ve)"` 반환.
5. `wrap()` 이 IIFE 로 helper 들을 외곽에 hoist.

**출력**:
```js
(() => {
  const __is_0 = (v) => ("object" === typeof v && null !== v && false === Array.isArray(v)
    && Array.isArray(v.children) && v.children.every((elem) => __is_0(elem))
    && "string" === typeof v.value);
  return __is_0;
})()
```

**규약 D.3.1**: 이 형태가 stack overflow 없이 임의 깊이 트리를 처리함을 보장. 추가로 analyzer 쪽 `typeKey(t)` 기반 visit set 이 무한 분석 방지 (§E2).

## 부록 E. Rewrite 매칭 엣지케이스

문자열 기반 rewrite 의 naïve 한계. Phase 0 에서 알려진 우려 + 현재 대응:

| 엣지 케이스 | Phase 0 현재 | Phase 1 대응 |
|---|---|---|
| `" typia.is("` 를 주석에 작성 | `indexAtCallStart` 가 매칭 시도, call paren 없으면 bail | JS 토크나이저로 주석/문자열 제외 |
| template literal `${typia.is(x)}` | 매칭 시도, `${}` 안은 표현식이므로 정상 작동 (우연) | 토크나이저로 `${}` 경계 인식 |
| 분할 라인 `typia\n.is(x)` | `candNeedle` 에 `\n` 없음 → 미매칭, 오류 | AST 앵커 필요 → 경로 A 혼합 |
| `typia.is(x as any)` — as 타입 캐스트 | tsgo emit 이 `typia.is(x)` 로 단순화 → OK | 동일 |
| JSX 내부 `{typia.is(x)}` | 매칭, `{}` 는 표현식 범위 → OK | 동일 |
| 체인 `typia.is<T>(x).toString()` | tsgo 가 `.toString()` 를 보존 → rewrite `(arrow)(x).toString()` OK | 동일 |
| spread `typia.is(...args)` | tsgo 가 정상 emit, matchParen 도 정상 → OK | 동일 |

**규약 E.1**: 발견된 miss 케이스는 반드시 test fixture 로 추가 후 fix. "재현 가능한 버그 리포트 → 실패하는 테스트 먼저 → 픽스" 순서.

## 부록 F. 파일 크기 관리 — samchon 스타일

typia v12 의 파일 분해 원칙 "한 파일 = 한 개념" 을 Go 로 이식할 때 구체 기준:

**규약 F.1**: 한 `.go` 파일 ≤ **400 LOC** 목표 (is.go 427 는 예외, 재귀 hoist 로직의 일관성 위해 유지).

**규약 F.2**: 거대 파일이 생기면 분해 대상:
- 상태 struct + 생성자 + 주 메서드 → 원본 파일 유지
- 보조 함수 → `<original>_helpers.go`
- 서브 로직이 독립 개념 → 별도 파일 (typia v12 의 iterate_metadata_* 패턴)

**규약 F.3**: Phase 0 Cycle D 에서 실행된 분해 예:
- `analyzer.go` 634 → 95 LOC + 9 sub 파일
- `metadata.go` 547 → 24 LOC + 8 sub 파일

Emitter 쪽은 현재 13 파일로 이미 분해됨. 향후 각 파일이 400 을 초과하면 F.2 원칙으로 재분해.

**규약 F.4**: 파일 분해 PR 은 **순수 refactor** 여야 함. 분해와 함께 로직 변경 금지 — review 비용 폭증.

## 부록 G. Cycle 2 교차 리뷰용 self-critique

Cycle 1 초안 작성자로서 스스로 공격하는 취약점 5개 (Cycle 2 에서 타 역할이 비슷한 각도로 비판할 것 예상):

**Critique-1: shim 자동생성 실패 대비 미흡**. `gen_shims` 가 upstream API 변화로 실패하면 즉시 빌드 불가. Phase 1 에 "실패 시 이전 shim 버전 유지 + 경고" 메커니즘 필요. 현 초안은 그냥 "bump 실패 rollback" 만 언급 — 부족.

**Critique-2: 문자열 rewrite 의 근본 취약성 과소평가**. `matchParen` naïve 하다고 인정했지만 이는 감지되는 버그만. 감지 안 되는 silent miscompile (예: template literal 안의 `typia.is(` 매칭) 위험은 본 초안이 충분히 강조 못 함. Phase 1 에서 사용자 설문조사 권고.

**Critique-3: B 역할 IR 경계에 대한 실효적 테스트 없음**. §3.4 규약 "engine 에서 shim 금지" 가 CI 로 검증되지 않음. `go vet` / `go-arch-lint` 등으로 경계 자동 검증 필요. 현 초안은 원칙만 선언.

**Critique-4: typia v12 FUNCTORS 147 중 현재 커버 ~30개**. §6.3 표가 솔직하지만 "언제 147 전체 완료?" 에 대한 타임라인은 부록 A 만 소략 — Phase 1~2 로 뭉뚱그림. Cycle 2 에서 D 역할이 "사용자에게 어떤 method 가 언제 가능한가" 를 더 구체적으로 요구할 것.

**Critique-5: Edge runtime 호환 검증의 실제 방법**. §10 R1 에서 "`eval`/`new Function` 금지" 원칙만 기술. 실제로 Cloudflare Workers 에 emit 결과를 넣어 돌려보는 CI 테스트 부재. 원칙과 검증이 분리됨.

각 critique 는 Cycle 2 교차 리뷰에서 다른 역할이 제기하면 Cycle 3 개정에 반영된다.

---

본 초안은 **Cycle 2 교차 리뷰** 에서 다른 5 역할의 비판을 받아 개정된다. 특히 §12 의 미해결 질문은 각 대응 역할이 명시적으로 답해야 Cycle 3 개정이 성립한다.

— 끝 —
