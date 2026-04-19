# E. QA/Test Lead — Cycle 3 Sub-3 개정

> 역할 E. QA/Test Lead — Mega-1 Sub-3 개정판
> 대상 독자: 역할 A(경계), B(Go engine), C(ttsc driver), D(TS facade), F(Release/DX)
> 목적: Cycle 1 초안(933 줄) 을 A·B·C·D·F 5 명의 교차 비판(cycle-02-*-review.md) 을 반영해 Sub-3 합의본으로 개정.
> 개정 원칙: **(1) 규약 ID 체계 명문화, (2) 검증 수단 없는 규약 금지, (3) skip/TODO lint 실행 가능 단계로, (4) 9-job CI matrix 확정, (5) 4 컴파일러 벤치 축(A/B/C/D) 유지, (6) R-0003/0004/0005 + parity fixture 표 명시**.
> 스냅샷(2026-04-19): Phase 0 Go `go test ./...` 4 패키지 PASS + TS `npm test` 21/21 PASS (18번 progress-report). Sub-3 진입 조건 확정.

---

## 0. 개정 요약 (Sub-2 → Sub-3 변경 맵)

| 섹션 | Cycle 1 상태 | Sub-2 비판 요약 | Cycle 3 개정 |
|---|---|---|---|
| §1.2 핵심 원칙 | "항상 PASS" + "skip 금지" | E 자체가 §2.1 analyzer placeholder 를 남겨 위반 (B-3, D-Q-E1) | 원칙 1 에 "placeholder 도 skip 으로 간주" 를 추가. §3.3 lint 로 자동 차단 |
| §1.3 용어 | Go 단위 / TS 통합 / fixture | "중간 층 없음" (B E-2, D 5.1) | 층 2.5 "parity oracle" 추가 (§3.4 신설) |
| §2.1 analyzer placeholder | "Phase 1 에서 fake checker 로 해소" 잠정 | C-3 driver→analyzer adapter 제안으로 불요 (B E-2) | **Phase 1 Week 1 제거** 명문화. adapter 기반 10 case 이상 테이블 드리븐 |
| §5 Regression guard | R-0001/0002 두 건만 | B S-5 R-0003/0004/0005, D 5.2.1 R-0003/0004 | **R-0003/0004/0005 표 신설** + **regression ID 체계 R-{mega}.{sub}-{role}-{seq}** |
| §5 ID 체계 | 순차 NNNN | Sub-2 §1.5 합의 요청 `R-{mega}.{sub}-{role}-{seq}` | **규약 TST-REG-01 로 격상** |
| §4 fixture category | 14 카테고리 | D 5.3 LLM/functional/protobuf 누락, F 6.3 standard-schema 누락 | 3 신규 카테고리 + `standard-schema-parity` (TST-FIX-CAT 개정) |
| §6 벤치 축 | validator × compiler × … | B E-3 "동일 signature 검증 로직 부재" | **컴파일러 4 축(A=generate, B=transform/v12, C=ttsc, D=typia-go) + Schema deep-equal pre-gate** |
| §7 CI matrix | 2 job (Go/TS) | F 6.1 PR/release/nightly 예산 불일치 · Sub-2 §8.4 9-job | **9-job matrix 확정 + OS×Node 행렬 PR 3/Release 6/Nightly 9** |
| §10 안티패턴 | 10 개 | Sub-2 §1.2.3 "X 금지 grep lint 부재" | **5 ESLint/grep lint 를 TST-LINT-01..05 규약화** |
| §11 체크리스트 | 20 개 | 체크만 있고 자동화 없음 | 각 항목에 CI job 매핑 열 추가 |
| §12 미해결 Q | 10 개 Q | 미결 다수 | Q-E1/E3/E6/E9 **Sub-3 에서 종결**, 잔여 6 개 Phase 1 로 이관 |

Cycle 1 의 골격과 TST-* 규약 ID 체계는 **유지**한다. "항상 PASS" + "skip 금지" 3 중 강조도 유지 — §1.2·§4.5·§10.1·§11 네 곳. 단, **집행 수단** 을 모두 CI 게이트 또는 lint rule 로 내린다.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 범위 매트릭스 (역할 간 경계)

| 축 | 질문 | 누가 | 본 문서 |
|---|---|---|---|
| **내용** | 이 테스트는 무엇을 단언해야 하는가? | B(engine) / C(driver) / D(facade) | 언급만, 결정 않음 |
| **조직** | 파일명·디렉터리·네이밍 규약은? | **E** | ◎ |
| **실행** | 어떤 순서·환경·바이너리로 돌리는가? | **E** | ◎ |
| **방어** | 회귀를 어떻게 고정(guard)하는가? | **E** | ◎ |
| **성능** | 벤치마크는 어떤 카테고리/머신/비교대상? | **E**(축) + B/C(수치) | ◎ 축만 |
| **CI** | workflow matrix, 실패 시 게이트는? | **E** | ◎ |
| **커버리지** | 정량 목표는? | **E** | ◎ |
| **동치성 레벨** | 런타임 값 / 에러 문자열 / 바이트 | **A**(스펙) + E(fixture 셋) | A 소유, E 조직 (Sub-3 개정) |
| **capability matrix** | 사용자 가시 누락 기능 공시 | **A**(양식) + F(공개) + E(소스) | A 양식, E 자동 생성 (Sub-3 개정) |
| **릴리스 전 smoke** | 배포 전 무엇을 돌리는가? | F(Release/DX) + E | 공동 |

> **변경점**: Sub-2 A-5.1 비판 — "BND-API-04 동치성 레벨 결정권 공백" 반영. 동치성 레벨 자체는 **A 소유**, E 는 레벨별 fixture 셋만 조직. Sub-2 A-5.4 반영 — "지원 안 함 주석 = `conventions/capability-matrix.md` 자동 생성 소스" (§4.5 상세).

### 1.2 핵심 원칙 11 가지 (원칙 1 에 placeholder 조항 추가)

1. **항상 PASS (3 중 강조 — 조문 1)** — main/feat 브랜치에 머지되는 모든 커밋은 `pnpm test` 가 로컬·CI 양쪽에서 PASS 여야 한다. **skip/TODO/`.skip`/`t.Skip()`/빈 `_test.go` (placeholder) 금지**. 회귀 발견 시 **먼저 테스트를 빨갛게 만든 커밋** 을 올리고, 그 다음 커밋에서 픽스 + 초록. 중간 상태가 main 에 들어가서는 안 된다. Cycle 1 의 §2.1 analyzer_test.go placeholder 는 Sub-2 B-3 / D-Q-E1 비판을 수용해 **Phase 1 Week 1 에 adapter 기반 테이블로 교체** (§2.1 개정).
2. **두 층 + 하나의 oracle (Sub-3 신설)**. Go 단위 `go test ./...` 는 "함수가 올바른 문자열/구조체를 생산하는가" 를, TS 통합 `npm test` → `DynamicExecutor` 는 "컴파일된 바이너리가 fixture 를 실제로 다시 쓰고 Node 가 실행할 수 있는가" 를, 층 **2.5 parity oracle** 은 "TS 정본 구현과 Go emit 결과가 외부 관측 동치인가" 를 본다 (§3.4 신설, D 5.1 반영).
3. **Fixture 는 사람이 읽는 진실원**. 모든 TS 통합 테스트는 `tests/test-typia-ttsc/fixtures/<category>/src/main.ts` 하나의 파일로부터 출발. main.ts 만 보면 "이 fixture 가 어떤 typia 호출을 검증하는가" 가 3 초 안에 이해돼야 한다.
4. **Regression guard 는 fixture 레벨에서** (ID 체계 정식화). 과거 버그가 실재했다는 증거를 남기기 위해 재현 입력을 fixture 에 영구 보존. 주석에 `// regression: R-{mega}.{sub}-{role}-{seq}` 태그 (§5.2 TST-REG-01). 삭제 금지.
5. **Fixture 는 실증된 기능만 담는다**. "언젠가 지원" 기능을 `test.todo`/`skip` 으로 두는 패턴 금지. 미지원은 negative guard (반드시 throw 하거나 에러 코드 N 종료) + `conventions/capability-matrix.md` (A 양식) 항목 동시 추가로 기록.
6. **Go 단위는 테이블 드리븐**. is_test.go, tags_test.go, metadata_test.go 기존 형식 유지.
7. **TS 통합은 바이너리 spawn**. 내부 함수 직접 import 금지. `runTtsc` 단일 진입점 (§3.2).
8. **벤치마크는 회귀 도구, 절대치 자랑이 아님**. 커밋 단위로 "느려졌는가" 를 잰다. v12 비교는 **동일 머신·동일 시각** 에서만. 컴파일러 비교 4 축 (A/B/C/D) 은 §6.3 에서 고정.
9. **CI 는 Go 먼저 → TS 나중 → parity 병행**. Go 유닛이 빨강이면 TS 통합도 반드시 빨강이므로 순서 고정. parity oracle 은 TS 통합과 병렬.
10. **Coverage 는 지표이지 목표가 아님**. 숫자를 위한 더미 테스트 금지. 목표 미달 시 *"fixture 가 비는가 / regression guard 가 부족한가"* 를 먼저 묻는다.
11. **검증 수단 없는 규약 금지 (Sub-3 신설 — 조문 2)**. Sub-3 이후 본 문서 및 타 역할 개정 규약에 새로 추가되는 모든 규약은 **실행 가능한 CI step 또는 lint rule** 과 함께 제출. reviewer 는 CI step 없는 규약 PR 을 자동 거절한다 (Sub-2 §1.5 (b) 반영).

### 1.3 "항상 PASS" + "skip 금지" 3 중 강조 (원칙 보강)

Cycle 1 의 3 중 강조를 Sub-3 에서도 **유지**. 추가로 집행 수단을 규정:

- **강조 (1) — §1.2 원칙 1**: 본 문서 최상위 원칙.
- **강조 (2) — §4.5**: fixture 설계 규약. "지원 안 함 = skip 아니라 negative guard + capability-matrix".
- **강조 (3) — §10.1 + §11 체크리스트 1**: 안티패턴 + PR 머지 전 체크. 위반 시 자동 거절.

**Sub-3 집행 수단** (Cycle 1 에서 누락 → Sub-2 B-3 비판):

- **TST-LINT-01** skip/TODO grep lint. CI job `lint-no-skip`.
- **TST-LINT-02** 빈 `_test.go` placeholder 감지. CI job `lint-no-placeholder`.
- **TST-LINT-03** `t.Skip()` / `it.skip` / `describe.skip` / `xdescribe` / `xit` Go+TS 5 종 grep lint.
- 세부 구현은 §10.2·§10.3 (TST-LINT-01..05 규약).

### 1.4 용어 고정

| 용어 | 정의 |
|---|---|
| **Go 단위 테스트** (**Layer 2 Go**) | `packages/ttsc/**/*_test.go` 파일. `go test ./...` 로 실행 |
| **TS 통합 테스트** (**Layer 3 TS**) | `tests/test-typia-ttsc/src/features/test_*.ts` 파일. `DynamicExecutor` prefix `test_` 수집 |
| **Parity oracle** (**Layer 2.5** — Sub-3 신설) | TS 정본 (`_createStandardSchema(__fn)` 등) 과 Go emit 결과의 외부 관측 동치. 구현: `tests/test-typia-ttsc/src/features/test_standard_schema_parity.ts` 계열 |
| **fixture** | `tests/test-typia-ttsc/fixtures/<category>/` 이하 tsconfig + src/main.ts (+ dist) |
| **category** | fixture 최상위 분류. Sub-3 에서 **17 종** (기존 14 + standard-schema-parity + llm-adapter + functional) |
| **regression guard** | 과거 버그 재현 최소 fixture + 단언 쌍. **ID: R-{mega}.{sub}-{role}-{seq}** |
| **ttsc 바이너리** | `packages/ttsc/bin/ttsc-native` (Linux/macOS) / `ttsc-native.exe` (Windows) |
| **capability matrix** | `conventions/capability-matrix.md`. 3 열 `v12-supported / ttsc-phase0-gap / phase1-planned`. A 양식, E fixture 주석 자동 생성 |

---

## 2. Go unit test 규약 (개정)

### 2.1 패키지 ↔ 테스트 파일 1:1 (개정 — analyzer placeholder 제거)

Go 파일 `foo.go` 의 공개 함수 검증은 동일 디렉터리의 `foo_test.go` 에 둔다. Sub-3 현 상태:

| 소스 | 단위 테스트 | Sub-3 Phase 1 Week 1 상태 |
|---|---|---|
| `internal/engine/metadata/*.go` | `metadata/metadata_test.go` | 유지 + **`name_test.go`** 신설 (R-1.3-E-0005) |
| `internal/engine/emitter/is.go` | `emitter/is_test.go` | 유지 + **`isState` 구조체 존재 검증** (C 5.2 제안) |
| `internal/engine/emitter/assert.go` | `emitter/assert_test.go` | 유지 |
| `internal/engine/emitter/tags.go` | `emitter/tags_test.go` | 유지 |
| `internal/engine/emitter/json_schema.go` | `emitter/json_schema_test.go` | 유지 |
| `internal/engine/emitter/json_stringify.go` | `emitter/json_stringify_test.go` | 유지 |
| `internal/engine/analyzer/*.go` | `analyzer/analyzer_test.go` | **placeholder 제거** + `analyzer/typekey_test.go` (R-1.3-E-0003), `analyzer/type_adapter_test.go` (10+ case) |
| `internal/engine/analyzer/collection.go` (신규) | `analyzer/collection_test.go` | **신설** (R-1.3-E-0004 Emplace identity) |
| `cmd/ttsc/main.go` | `cmd/ttsc/main_test.go` | 유지 |

> Cycle 1 §2.1 의 "analyzer placeholder" 면책 조항은 **삭제**. B E-2 / D 5.1 / B S-5 를 수용해 C-3 의 `driver→analyzer adapter` 패턴 (TypeKey + TypeResolver primitive 만 주입) 을 전제. FakeChecker 구현 비용 약 500 LOC 절약. Phase 1 Week 1 에 완료.

### 2.2 네이밍 (변경 없음)

- 함수명: `Test<대상>[<시나리오>]`. 예: `TestEmitIsAtomic`, `TestTagCheckMinimumMaximum`.
- 서브케이스 name: 영소문자 단구. `go test -run TestEmitIsAtomic/nested_path` 동작.
- 실패 메시지: `t.Errorf("got %q, want %q", got, tc.want)`. `%q` 고정.

### 2.3 테이블 드리븐 기본 형식 (변경 없음)

```go
func TestX(t *testing.T) {
    cases := []struct {
        name string
        want string
    }{
        {"atomic string", `"string" === typeof input`},
        {"nested path",   `"string" === typeof $input.user.name`},
    }
    for _, tc := range cases {
        t.Run(tc.name, func(t *testing.T) {
            got, err := CallUnderTest(...)
            if err != nil { t.Fatalf("unexpected error: %v", err) }
            if got != tc.want { t.Errorf("got %q, want %q", got, tc.want) }
        })
    }
}
```

예외 2 가지: (1) 에러 경로 테스트, (2) fragment 매칭. Cycle 1 과 동일.

### 2.4 실패 메시지 규약 (변경 없음)

한 테스트 = 한 단언, 원문 포함, Fatal vs Error 구분.

### 2.5 stdout/stderr 가로채기 (변경 없음)

`withCapture` 헬퍼 재사용. `t.Parallel()` 금지 (§10.1 안티패턴 6).

### 2.6 Fixture 참조 (개정 — analyzer 예외 삭제)

Go 단위 테스트는 fixture 를 읽지 않는다. `metadata.NewSchema().AddAtomic(...)` 으로 직접 구성. **analyzer 도 동일 규칙 적용** (Sub-3 개정). adapter 가 `TypeKey + TypeResolver` primitive 를 받으므로 Go 단위에서 in-memory type sequence 로 Walk 가능.

예외: `cmd/ttsc/main_test.go` 의 `TestRunDemoString` — fixture 없이 `ttsc demo --type=string` CLI 출력만 확인. 유지.

### 2.7 race detector 와 vet (변경 없음 + CI 게이트 명시)

- `go test -race ./...` CI matrix 포함 (§7.3). → **CI job `test-go`** (§7.4).
- `go vet ./...` PR gate. `pnpm run go:vet`.
- `gofmt -l .` diff 비어 있음. → **CI job `lint-gofmt`** (§7.4).

### 2.8 테스트 헬퍼의 위치 (변경 없음)

`helpers_test.go` 동일 패키지. 글로벌 헬퍼 패키지 금지.

### 2.9 Benchmark-style Go 테스트 (개정 — F-2 infra 통합)

Cycle 1 은 `*_bench_test.go` 분리만 규정. Sub-3 는 F-2 비판 (B 관점 "bench infra 중복") 수용:

- `go test -bench -benchmem ./packages/ttsc/...` 를 **nightly CI** `benchmark-nightly.yml` 에 포함.
- `alloc/op` 를 timeseries CSV 에 병기 (§6.4 확장).
- B Q-B9 "per-type allocation, Name() cache hit" 측정도 이 infra 하나로 해결.

### 2.10 analyzer adapter 테스트 (Sub-3 신설)

Phase 1 Week 1 에 신설. B S-5 / B E-2 합의. `analyzer/type_adapter_test.go`:

```go
func TestAnalyzerAdapterWalk(t *testing.T) {
    cases := []struct {
        name string
        keys []string              // TypeKey sequence
        props map[string][]string  // TypeResolver.properties
        wantSchemaJSON string      // Schema -> JSON
    }{
        {"primitive string", []string{"string"}, nil, `{"atomic":"string"}`},
        {"simple object", []string{"O1"}, map[string][]string{"O1": {"x:number"}}, `...`},
        {"recursive TreeNode (R-1.3-E-0001 guard)", []string{"T", "T"}, map[string][]string{"T": {"children:T[]"}}, `...`},
        {"mutual recursion A↔B (R-1.3-E-0004 guard)", []string{"A", "B", "A"}, ..., `...`},
        // 총 10+ 케이스
    }
    ...
}
```

B 구현, E 조직 규약.

---

## 3. TS integration test 규약 (개정)

### 3.1 DynamicExecutor 로만 수집 (변경 없음)

`tests/test-typia-ttsc/src/index.ts` 의 `DynamicExecutor.validate({ prefix: "test_", location: __dirname + "/features", extension: "ts" })` 유지.

함수명 = 파일명 규약. 불일치 시 조용히 스킵 — **TST-LINT-04** 로 자동 감지 (§10.2).

### 3.2 runTtsc 가 **유일한** 바이너리 진입점 (변경 없음)

`src/utils/runTtsc.ts:19-37`. `child_process.spawn*` 직호출 금지. → **TST-LINT-05** grep lint (§10.2).

### 3.3 TestGlobal 상수 (변경 없음)

`src/TestGlobal.ts`. 하드코드 경로 금지.

### 3.4 Parity oracle 층 (Sub-3 신설 — Layer 2.5)

D 5.1 비판 수용. Cycle 1 §3 에서는 "Go 단위 + TS 통합 2 층" 만 규정했으나, Sub-3 에서 **층 2.5 parity oracle** 추가.

**목적**: 같은 Schema 에 대해 **(a) Go emit → Node eval → 결과 A** 와 **(b) TS 정본 functor → 결과 B** 가 외부 관측 동치인지 검증. C §1.2 "emit 결과에 runtime dep 없음" 원칙이 `typia/lib/internal/*` functor 예외를 인정한 이후 (B M-2 합의) 필수가 된 층.

**구현 위치**: `tests/test-typia-ttsc/src/features/test_<feature>_parity.ts`.

**골격**:

```ts
export async function test_standard_schema_parity(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "standard-schema-parity");
  const dist    = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  // 1) ttsc emit
  const result = runTtsc(["build", "--tsconfig=tsconfig.json", "--emit", "--quiet"], fixture);
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  // 2) Go-emitted path
  const emitted = require(path.join(dist, "main.js")) as { valid: (i: unknown) => StandardSchemaV1.Result<unknown> };
  const goResult = emitted.valid({ a: 1, b: "oops" });

  // 3) TS canonical path (functor 직접 호출)
  const { _createStandardSchema } = require("typia/lib/internal/_createStandardSchema");
  const tsResult = _createStandardSchema((i: unknown) => { /* 동일 validate 로직 */ })({ a: 1, b: "oops" });

  // 4) Deep-equal
  assert.deepEqual(goResult, tsResult, "standard-schema parity failed");
}
```

**규약 TST-ORA-01**: parity oracle fixture 는 `standard-schema-parity/`, `llm-adapter-parity/`, `json-stringify-parity/` 3 개 이상을 Phase 1 Week 2 까지 도입. 각 oracle 은 **최소 bracket path + quoted key + 숫자 key** 3 경로를 포함 (D 4.1 쟁점 반영).

### 3.5 TS 통합 테스트의 골격 (변경 없음)

```ts
export async function test_emit_<category>(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "<category>");
  const dist    = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });
  const result = runTtsc(["build", "--tsconfig=tsconfig.json", "--emit", "--quiet"], fixture);
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);
  const mainPath = path.join(dist, "main.js");
  assert.ok(fs.existsSync(mainPath), "dist/main.js must exist");
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath);
  // 단언 ...
}
```

### 3.6 CLI 서브커맨드 테스트 (변경 없음)

`test_version_banner.ts`, `test_unknown_command.ts`, `test_missing_tsconfig.ts`, `test_transform_subcommand.ts`.

### 3.7 JS API 테스트 (변경 없음)

`test_js_api.ts` bundler plugin 시나리오.

### 3.8 멱등성 테스트 (개정 — C 5.1 반영)

`test_rewrite_idempotent.ts` 는 sentinel `/* @typia-ttsc-rewritten */` 검증. **byte-for-byte** 단언 유지.

**Sub-3 추가** (C 5.1 제안 수용): `test_rewrite_idempotent_noreset.ts` 신규 — `fs.rmSync(dist)` **없이** 두 번째 emit 을 돌렸을 때의 byte 동일성. 즉 "두 번째 ttsc 수행" 기준 idempotence 를 분리 검증.

### 3.9 Assert vs Async (변경 없음)

### 3.10 실패 진단 (변경 없음)

### 3.11 테스트 간 순서 독립성 (변경 없음)

### 3.12 `--include` / `--exclude` 필터 (변경 없음)

### 3.13 바이너리 재빌드 트리거 (변경 없음)

`test` 스크립트의 `build:go &&` 전치 삭제 금지. 속도 < 정확성.

---

## 4. Fixture 카테고리 규약 (개정)

### 4.1 현 상태 + Sub-3 추가 (17 카테고리)

```
tests/test-typia-ttsc/fixtures/
├── advanced/                 ← 기존
├── assert-validate/          ← 기존
├── combined/                 ← 기존
├── factory/                  ← 기존
├── formats/                  ← 기존 (22 format)
├── http/                     ← 기존
├── json/                     ← 기존
├── misc/                     ← 기존
├── native/                   ← 기존 (11 종)
├── objects/                  ← 기존 (+ R-1.3-E-0001 TreeNode + R-1.3-E-0004 Author↔Book)
├── primitives/               ← 기존
├── schema/                   ← 기존
├── stress/                   ← 기존
├── tagged/                   ← 기존
├── standard-schema-parity/   ← Sub-3 신설 (F 6.3, D 5.1)
├── llm-adapter/              ← Sub-3 신설 (D 5.3)
└── functional/               ← Sub-3 신설 (D 5.3)
```

Sub-3 신설 3 카테고리 근거:

- `standard-schema-parity/` — F 6.3 + D 5.1 + B M-2. TS `_createStandardSchema` ↔ Go emit 외부 관측 동치 fixture. 내부 파일 4~6: primitive / nested object / array / union / **bracket notation path** / **quoted key path** / **숫자 key path**.
- `llm-adapter/` — D 5.3. mcp/langchain/vercel 세 adapter 의 `application<C>()` smoke. Phase 1 필수.
- `functional/` — D 5.3. `typia.functional.*` namespace (iterate_metadata_function / _template / _alias). B 가 Phase 1 에 포팅. 포팅 전까지는 guard 2 개 (skip 아님, 실제 throw 확인).

`protobuf/` 는 Phase 2 로 이관 (B 포팅 우선순위 낮음). `random/` 도 Phase 2.

### 4.2 카테고리 추가 기준 (CAR — 변경 없음)

| # | 기준 | 예 |
|---|---|---|
| CAR-1 | 새 네임스페이스 | typia.random.* → `random/` |
| CAR-2 | 새 programmer | typia.protobuf.encode/decode → `protobuf/` |
| CAR-3 | 새 Tag 계열 | typia.tags.Matches / SameAs |
| CAR-4 | 50+ LOC 초과 분리 | objects/ → objects-union/ |
| CAR-5 | 특정 구조 조합에서만 재발 회귀 | recursive TreeNode |

### 4.3 fixture 내부 구조 (개정 — C 5.4 tsconfig 5 옵션 고정)

```
fixtures/<category>/
├── tsconfig.json
├── src/
│   └── main.ts
└── dist/ (gitignore)
    └── main.js
```

**Sub-3 개정 — tsconfig.json 5 옵션 고정** (C 5.4 반영):

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "useDefineForClassFields": true,
    "verbatimModuleSyntax": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
```

5 옵션이 다른 fixture 는 `fixtures/<category>-v12/` / `<category>-v13/` 로 split (C 5.4 권고). Cycle 1 의 "기존 14 개 fixture tsconfig 동일" 원칙 유지, "base 를 `extends` 로 뽑는 것 금지" 도 유지.

`src/` 복수 파일 금지 (main.ts 하나). `dist/` gitignore.

### 4.4 `main.ts` 내 export 규약 (변경 없음)

- `check_<name>` — is
- `assert_<name>` — assert
- `validate_<name>` — validate
- `is_<name>` factory
- 타입 정의는 export 하지 않음

### 4.5 "지원 안 함" 을 fixture 가 표현하는 방법 (개정 — A-5.4 capability matrix 연동)

**강조 (2) — "항상 PASS + skip 금지"**. 지원하지 않는 기능은 skip/TODO 가 아니라 **3 중 기록**:

1. fixture main.ts 주석: `// regression: R-{mega}.{sub}-{role}-{seq} — <한 줄>` 또는 `// capability: <gap-id>`.
2. `conventions/capability-matrix.md` 항목 추가 (A 양식, E 자동 생성 대상).
3. negative guard — 테스트 파일에서 `assert.notEqual(result.status, 0)` 또는 `assert.ok(result.stderr.includes("not supported: ..."))`.

**자동 생성 (Sub-3 신설)**: `scripts/generate-capability-matrix.sh` 가 fixture 주석의 `// capability: <gap-id>` 를 수집 → matrix.md 갱신. CI job `capability-matrix-sync` 가 매 PR 에서 갱신 일치 확인. 불일치 시 reviewer 자동 거절.

### 4.6 fixture 경로 하드코드 금지 (변경 없음)

`path.join(TestGlobal.ROOT, "fixtures", "<category>")`.

### 4.7 카테고리 사이즈 가이드 (변경 없음)

100 LOC 초과 경고, 150 초과 분리.

### 4.8 fixture 의 `node_modules` (변경 없음)

### 4.9 fixture 의 runtime 검증 vs shape 검증 (변경 없음)

최소 runtime 검증 1 개 포함.

### 4.10 Parity fixture 고정 규약 (Sub-3 신설 — TST-FIX-PARITY)

**TST-FIX-PARITY-01**: `standard-schema-parity/` fixture 는 아래 구조를 **필수**로 포함 (D 5.1 / F 6.3):

| Fixture 파일 | 경로 표현 | 목적 |
|---|---|---|
| `src/main.ts` export `nested_object` | `input.user.name` | 기본 dot path |
| export `bracket_key` | `input["weird key"]` | quoted key path |
| export `number_key` | `input[0].value` | 숫자 index path |
| export `bracket_notation` | `input["complex"]["path"][2]` | 혼합 path |
| export `union_disc` | `(input as A \| B).type` | discriminated union |

**TST-FIX-PARITY-02**: TS ↔ Go 외부 관측 동치 파라미터:

| 관측 | 단언 방식 | 허용 오차 |
|---|---|---|
| `success: boolean` | deep-equal | 0 |
| `issues[].path` | JSON stringify + ===. bracket `['k']` vs dot `.k` 는 **TS 정본에 통일** | 0 (Sub-3 합의) |
| `issues[].message` | 문자열 prefix 일치 | TS prefix 가 Go prefix 의 substring |
| 실행 순서 | 첫 fail 인덱스 | 동일 |

**TST-FIX-PARITY-03**: parity fixture 실패 시 Cycle 3 에 기록된 R-1.3-B-0002 / R-1.3-D-0001 의 재현이므로 즉시 regression register 갱신.

---

## 5. Regression test 규약 — ID 체계 명문화

### 5.1 발견 내역 재확인 (확장 — Sub-3 기준 5 건)

18번 progress-report.md 기록 Phase 0 치명 버그 2 건 + Sub-2 교차 검토에서 확인된 3 건 = **5 건**.

#### R-1.3-E-0001 — analyzer 무한 재귀 (구 R-0001)

- **증상**: 재귀 타입 `TreeNode { value: number; children: TreeNode[] }` iterate 중 `visitingObjects/Arrays/Tuples` 가 `*shimchecker.Type` 포인터를 키로 사용 → tsgo 가 의미상 동일한 타입에 distinct 포인터 반환 → 재귀 탈출 실패.
- **수정**: `analyzer/type_key.go` 의 `typeKey(t)` 가 `Type.Id()` 기반 문자열 키 반환.
- **Guard**: `fixtures/objects/src/main.ts:44-49` `interface TreeNode` + `check_tree`. `test_emit_objects.ts:97-119` 4 케이스.

#### R-1.3-E-0002 — emitter goroutine 스택오버플로 (구 R-0002)

- **증상**: 재귀 Schema emit 중 ObjectType 재방문 시 inline expansion goroutine stack overflow.
- **수정**: `emitter/is.go` `isState` 구조체 + `__is_N` 헬퍼 이름 예약 → 본문 1 회 emit, 자기참조는 헬퍼 호출.
- **Guard**: 동일 `objects/check_tree`. **추가 Go 단위** (C 5.2 반영): `emitter/is_test.go` 에 `isState` 구조체 존재 + `visitingObjects` field 존재 검증. 이중 방어.

#### R-1.3-E-0003 — typeKey 문자열 반환 invariant (신규 — B S-5)

- **증상**: 리팩터 중 `typeKey` 가 다시 포인터 기반으로 돌아가면 R-1.3-E-0001 재발. fixture 는 통과해도 CI 마지막 단계에서만 회귀 발견.
- **Guard**: `analyzer/typekey_test.go` — `typeKey(t)` 반환이 `string` 타입 (reflect 검증) + 두 번 호출 시 동일 문자열. B §3.8 [analyzer.go L66-69] 의 영구 고정.
- **구현 주체**: B (Cycle 3). E 는 규약 명문화.

#### R-1.3-E-0004 — Collection.Emplace pointer identity (신규 — B S-5 + B E-4)

- **증상**: 상호 재귀 `A → B → A` 처리의 핵심 불변식 깨짐 — `Emplace(key, name)` 가 같은 key 로 두 번 호출되었을 때 두 번째가 새 pointer 를 반환하면 재진입 무한 루프.
- **Guard**: `metadata/collection_test.go` — `TestCollectionMutualEmplace`. 두 ObjectType 이 서로의 Property 로 재진입할 때 두 번째 Emplace 가 첫 pointer 를 반환 (B §3.6 [collection.go L118-126]).
- **fixture 동반**: `fixtures/objects/src/main.ts` 에 `interface Author { books: Book[] }; interface Book { author: Author }` + `check_author_book` export.

#### R-1.3-E-0005 — Name() 캐시 불변 (신규 — B S-5)

- **증상**: `Name()` 최초 호출 후 Schema 변형이 일어나도 이전 값 반환해야 함. 캐시 무효화 API 는 존재하지 않음을 보장.
- **Guard**: `metadata/name_test.go` — `TestNameCacheInvariant`. Schema.AddAtomic 후 Name() 호출 → 이어서 AddAtomic(추가) 해도 Name() 은 첫 결과 반환. B §3.4 [name.go L12-95].
- **구현 주체**: B. 추후 무효화 API 도입 시 **별도 regression ID** 부여 (기존 ID 건드리지 않음).

### 5.2 Regression ID 체계 (TST-REG-01 신설)

Sub-2 §1.5 (a) 합의 수용. Cycle 1 의 `R-NNNN` 순차 번호는 폐기, 아래 체계로 전환:

**형식**: `R-{mega}.{sub}-{role}-{seq}`

| 필드 | 의미 | 범위 |
|---|---|---|
| `mega` | 메가 사이클 번호 | 1, 2, ... |
| `sub` | 서브 사이클 번호 | 1..N (각 mega 내) |
| `role` | 도입 역할 | A/B/C/D/E/F |
| `seq` | 해당 role 의 순차 | 0001, 0002, ... |

**예**:
- `R-1.3-E-0001` → Mega-1 Sub-3 에 E 가 도입한 첫 번째 regression
- `R-1.3-B-0003` → Mega-1 Sub-3 에 B 가 도입한 세 번째
- `R-2.1-C-0001` → Mega-2 Sub-1 에 C 가 도입한 첫 번째

**마이그레이션 (기존 R-0001/0002)**:
- `R-0001` → `R-1.3-E-0001` (재발견 시점은 Phase 0 Cycle 4 이나, 규약 명문화는 Mega-1 Sub-3 이므로 도입 역할 E)
- `R-0002` → `R-1.3-E-0002`
- 기존 주석 `// regression: R-0001 — ...` 은 **마이그레이션 커밋** 한 건으로 일괄 교체. git blame 에 이력 보존.

### 5.3 Regression guard 규약 (R-rule — 개정)

1. **버그 발생 시 즉시 fixture 에 재현 최소 케이스**. 커밋 순서: (a) 빨강, (b) 픽스로 초록.
2. **주석 ID 태그** — `// regression: R-{mega}.{sub}-{role}-{seq} — <한 줄>` 를 fixture 소스의 해당 export 윗줄.
3. **ID 중앙 레지스터** — `conventions/regressions.md` 가 마스터. 본 §5 는 요약.
4. **삭제 금지 표식** — 해당 export 와 테스트 블록 삭제 금지. rename PR 은 단일 책임.
5. **같은 버그 재발 시 새 번호** — 기존 가드는 그대로.
6. **파이프라인 가로지르는 회귀는 양쪽 guard 강제** (Cycle 1 rule 6 격상 — B E-1 수용). fixture + Go 단위 **양쪽 필수**. Adapter 도입으로 analyzer 도 Go 단위 guard 가능하므로 "가능하면" → "강제".
7. **Rule 7 신설 (C 5.2 반영)** — Go 레벨 원인 버그는 Go unit 에서 구조체/함수/필드 존재 여부까지 검증. 문자열 매칭 금지.
8. **Rule 8 신설 (Sub-3 §1.2 원칙 11 연동)** — 새 regression 등록 PR 은 `regressions.md` 갱신 + fixture 주석 + `_test.go` guard **3 파일 동시 수정** 없이 머지 금지. CI job `regression-register-sync` 가 3 파일 동기화 검증.

### 5.4 Regression 레지스터 (`conventions/regressions.md` 표 — Sub-3 확정)

```markdown
| ID | 발견일 | Phase/Cycle | 파일:라인 (원인) | Guard (fixture / Go unit / parity) | 한 줄 요약 |
|---|---|---|---|---|---|
| R-1.3-E-0001 | 2026-04-19 | Phase 0 / Cycle 4 | analyzer/analyzer.go (visitingObjects 포인터 키) | fixtures/objects/main.ts:44-49 · test_emit_objects.ts:97-119 | 재귀 타입 무한 루프 |
| R-1.3-E-0002 | 2026-04-19 | Phase 0 / Cycle 4 | emitter/is.go (guard 없는 재귀 방출) | fixtures/objects + emitter/is_test.go isState 존재 검증 | 재귀 Schema 방출 시 stack overflow |
| R-1.3-E-0003 | 2026-04-19 (규약화 시점) | Mega-1 / Sub-3 | analyzer.go:L66-69 (typeKey 반환 타입) | analyzer/typekey_test.go | typeKey string 반환 invariant |
| R-1.3-E-0004 | 2026-04-19 | Mega-1 / Sub-3 | collection.go:L118-126 (Emplace 동일 key) | metadata/collection_test.go · fixtures/objects Author↔Book | Collection Emplace pointer identity |
| R-1.3-E-0005 | 2026-04-19 | Mega-1 / Sub-3 | name.go:L12-95 (Name 캐시) | metadata/name_test.go | Name() 캐시 후 Schema 변형 시 이전 값 반환 |
```

**레지스터 마스터**: `conventions/regressions.md`. 본 §5 는 요약.

### 5.5 Phase 1+ 발견 예상 회귀 카테고리 (개정 — 구체 ID 예약)

| 카테고리 | 예상 트리거 | guard fixture | 예약 ID |
|---|---|---|---|
| 상호 재귀 `A↔B` | 두 객체 상호 참조 | objects/Author↔Book (이미 R-1.3-E-0004) | R-1.3-E-0004 |
| dynamic key `{[k]: T}` | index signature | 신규 `dynamic/` (CAR-1) | R-1.4-B-000x |
| 깊은 union `A\|...\|Z` | 코드 폭발 | stress/ 확장 | R-1.4-C-000x |
| tsconfig `paths` alias | 경로 재작성 | 신규 `paths/` | R-1.4-C-000x |
| ESM target | `module: nodenext` | 신규 `esm/` | R-1.4-F-000x |
| Bun runtime | Bun `require` 차이 | 신규 `bun/` (Phase 1+) | R-2.1-F-000x |
| 소스맵 | `.js.map` 동반 방출 | primitives `sourceMap: true` | R-1.4-C-000x |
| Standard Schema path drift (bracket vs dot) | TS vs Go emit | standard-schema-parity | **R-1.3-D-0001** (D 5.2.1) |
| `%expr` miscompile (user prop name 에 `%expr`) | C §7.6.6 | json-stringify-percent-expr | **R-1.3-C-0003** (D 5.2.1) |

### 5.6 Parity fixture ↔ Regression 맵 (Sub-3 신설)

TS ↔ Go 외부 관측 동치 fixture 와 regression ID 의 매핑:

| Parity fixture | 검증 대상 | 커버 Regression ID | Owner |
|---|---|---|---|
| `standard-schema-parity/src/main.ts` | `~standard.validate()` 결과 | R-1.3-D-0001 | D emit, E 조직 |
| `standard-schema-parity/bracket_key` export | bracket notation path | R-1.3-D-0001 | D |
| `llm-adapter-parity/src/main.ts` | mcp/langchain/vercel smoke | R-1.3-D-0002 | D |
| `json-stringify-parity/main.ts` | `%expr` placeholder safe | R-1.3-C-0003 | C emit |
| `objects/check_tree` (R-1.3-E-0001/0002 guard) | 재귀 Schema 멱등 | R-1.3-E-0001 / 0002 | B 엔진, E 조직 |
| `objects/check_author_book` (신규) | 상호 재귀 | R-1.3-E-0004 | B 엔진 |

---

## 6. Benchmark 규약 (개정 — 4 컴파일러 축 유지)

### 6.1 benchmark/ 가 상위 워크스페이스의 자리 (변경 없음)

v12 benchmark 구조 유지. ttsc 는 "하나의 비교 대상 compiler" 로 들어감.

### 6.2 측정 축 (개정 — compiler 축 4 분리 명시)

| 축 | 값 | 목적 |
|---|---|---|
| **validator** | typia(v12) / typia-ttsc / typebox / zod / ajv / class-validator | 기존 |
| **compiler** | **A=tsc+@typia/generate, B=tsc+@typia/transform (v12), C=ttsc (Phase 0+), D=typia-go (Phase 2+)** | Sub-3 4 축 고정 |
| **category** | is / assert / validate / assert-error / validate-error / stringify / optimizer | 기존 |
| **structure** | ArraySimple / ObjectHierarchical / UltimateUnion / ... (168) | 기존 |
| **machine** | `<arch>/<model>` | 기존 |
| **runtime** | Node / Bun | 기존 |

**Sub-3 핵심 명시**: compiler 축 A/B/C/D 4 값은 고정. Cycle 1 §6.3 의 "네 가지로 컴파일" 이미 시사. Sub-3 에서 **용어 표** 로 못박음 (B E-3 비판 수용).

### 6.3 컴파일러 비교 케이스 (개정 — shape equality pre-gate)

```
fixture  →  [A: tsc + @typia/generate]   →  dist.A.js   →  benchmark A
         →  [B: tsc + @typia/transform]  →  dist.B.js   →  benchmark B  (= v12 baseline)
         →  [C: ttsc]                    →  dist.C.js   →  benchmark C  (= Phase 0+)
         →  [D: typia-go]                →  dist.D.js   →  benchmark D  (= Phase 2+)
```

**원칙**:

1. **동일 머신 · 동일 시각 · 동일 Node** 에서 A/B/C/D 연이어 실행. 교차 시각 비교 금지.
2. 비교 기준선 — **B (v12) = 100%**. A/C/D 의 delta 로 표현.
3. **Shape equality pre-gate** (B E-3 반영) — 같은 category·structure 에 대해 네 컴파일러 모두 `typia.reflect.schema<T>()` JSON deep-equal. **B 가 `dumpSchema` hook 제공**, benchmark runner 가 throughput 측정 전 Schema JSON 을 4 컴파일러에서 추출 → deep-equal 검증. 차이 있으면 throughput 비교 **무효** 처리 + `R-{mega}.{sub}-B-000x` 신설.
4. **Wall-clock 기준** (C 5.3 반영). CPU time 비교 무의미 (tsgo native Go → v12 대비 당연 우위).
5. **Delta 컬럼 리포터** — "C vs B: -2%" 명시. 회귀/개선 1 눈에.

### 6.4 커밋별 regression 벤치 (개정 — infra 통합)

Master 머지 시 `benchmark/results/<machine>/timeseries.csv`:

```
<iso-timestamp>,<commit>,<category>,<structure>,<compiler>,<MB/sec>,<alloc-per-op>,<delta-from-prev>
```

- **alloc-per-op 열 추가** (F-2 반영, B Q-B9 해결). Go bench `-benchmem` 결과 포함.
- 최소 40 줄 → **80 줄** (compiler 4 × category 5 × structure 4). A 는 Phase 2 이후, 그 전엔 N/A.
- 실행: nightly CI (§7.5). PR CI 제외.

### 6.5 벤치 게이트 (Phase 별)

| Phase | 게이트 | 측정 |
|---|---|---|
| Phase 0 walking skeleton | v12(B) 대비 0.8×~1.2× | is / primitives / ObjectHierarchical |
| Phase 1 feature parity | v12(B) 대비 ≥ 1.0× | 전 카테고리 평균 |
| Phase 2 typia-go (D) | v12(B) 대비 ≥ 1.0×, tsc+ts-patch 대비 ≥ 3× | 10번 success-criteria §Year1 |
| Phase 1+ wall-clock 빌드 | tsc+ts-patch 대비 ≥ 1.5× (C 5.3 권장) | stress, objects, formats, tagged |

"ttsc 가 v12 보다 느리다" 는 허용 (Phase 0). **연속 3 회 음 delta** → F 의 DX workflow 가 이슈 자동 생성 (§7.5).

### 6.6 Optimizer 벤치 (변경 없음)

압축률 metric. 회귀 시 R-ID 부여 + fixture 추가.

### 6.7 컴파일 시간 벤치 (개정 — stress/objects/formats/tagged)

```
fixture_name, compiler, cold_sec, warm_sec
stress,       tsc+ts-patch, 8.42, 7.91
stress,       ttsc,         2.10, 1.88
stress,       ratio,        4.01×, 4.20×
```

- Cold = 빈 디렉터리. Warm = dist 유지 후 재실행.
- 대상: stress, objects, formats, tagged.
- 머신: §6.4 와 동일 self-hosted 고정.

### 6.8 벤치마크 런타임 격리 (변경 없음)

drop_caches / cpupower performance / daemon 최소화 / 3 iter warm-up. self-hosted 세팅은 F 관리.

### 6.9 벤치 infra 단일화 (Sub-3 신설 — F-2 수용)

B 측정 요청(Q-B9) + F nightly bench + E `_bench_test.go` 3 출처를 **하나의 infra** 로 통합:

- Go bench: `go test -bench -benchmem -count=5 ./packages/ttsc/...` → `benchmark/results/<machine>/go/<category>.csv`.
- validator throughput: 기존 `benchmark/src/programs/` → `benchmark/results/<machine>/node/<category>.csv`.
- 두 CSV 를 동일 timestamp + commit 으로 합쳐 `timeseries.csv` 생성.
- 실행: `benchmark-nightly.yml` 단일 workflow (§7.5).

---

## 7. CI 워크플로 규약 (개정 — 9 job 확정)

### 7.1 기존 workflow 와 경계 (변경 없음)

- `.github/workflows/test.yml` — PR 게이트.
- `.github/workflows/build.yml` — PR 게이트.
- `.github/workflows/experiments.yml` — 실험. ttsc 는 여기 두지 않음.

### 7.2 9-job matrix 확정 (Sub-3 — Sub-2 §8.4 수용)

Sub-2 §8.4 의 "기존 6 + 신규 3 = 9 job" 을 Sub-3 정본화:

```yaml
jobs:
  # 기존 6
  build:                 # TS + Go native build
  test-go:               # go test -race ./... + regression fuzzing (-count=5)
  test-ts:               # pnpm test (matrix 참조 §7.3)
  release:               # tag-triggered
  website:               # docs
  spell-check:           # docs

  # 신규 3 (E 관장)
  api-parity:            # R-1.3-A-0001 v12 vs v13 emit diff + Schema deep-equal pre-gate
  regression-fixtures:   # R-1.3-{A..F}-* 전체 + parity oracle
  repro-build:           # F §2.3 shasum 2 회 일치 + lint-gofmt + TST-LINT-01..05 통합

  # Sub-3 보강 (TST-LINT 통합)
  lint-ci:               # skip/TODO/placeholder/runTtsc 직호출 5 lint (TST-LINT-01..05)
  capability-matrix-sync: # §4.5 자동 생성 drift 검증
  regression-register-sync: # §5.3 rule 8
```

Sub-2 `lint-ci` / `capability-matrix-sync` / `regression-register-sync` 3 개는 **`lint-ci` 집합 job 하나로 통합** (CI cost 절약). 실질 9 job.

### 7.3 OS × Node matrix (F 6.1 수용)

F 6.1 의 비용 분석 수용:

| Gate | OS | Node | 조합 | 배포 |
|---|---|---|---|---|
| **PR gate** (`test.yml`) | 3 (ubuntu/macos/windows) | 1 (24.x) | 3 | 매 PR |
| **Release gate** (`release.yml`) | 3 | 2 (22/24) | 6 | tag push |
| **Nightly full** (`benchmark-nightly.yml` + full matrix) | 3 | 3 (20/22/24) | 9 | 매일 17:00 UTC |

`fail-fast: false` + `cancel-in-progress: true`. 20.x 는 2028 Q2 EOL 로 long-term matrix 에서만 유지.

### 7.4 test.yml 확장 (개정)

```yaml
name: test
on: [pull_request, push]
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
jobs:
  test-go:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
      - run: go test -race -count=5 ./packages/ttsc/...
      - run: go vet ./packages/ttsc/...
      - run: diff <(gofmt -l packages/ttsc/) /dev/null
  test-ts:
    needs: test-go
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        node: [24.x]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
      - uses: actions/setup-node@v4
        with: { node-version: ${{ matrix.node }} }
      - uses: pnpm/action-setup@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @typia/ttsc run go:build
      - run: pnpm --filter @typia/test-typia-ttsc test
  lint-ci:
    needs: test-go
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: bash scripts/lint-no-skip.sh        # TST-LINT-01
      - run: bash scripts/lint-no-placeholder.sh # TST-LINT-02
      - run: bash scripts/lint-runtts-only.sh    # TST-LINT-05
      - run: bash scripts/lint-facade-marker.sh  # TST-LINT-03 (D)
      - run: bash scripts/lint-standard-schema.sh # TST-LINT-04 (D vendor/version)
      - run: bash scripts/check-capability-matrix-sync.sh
      - run: bash scripts/check-regression-register-sync.sh
  api-parity:
    needs: [test-go, test-ts]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm i -D typia@12 typescript@5.9
      - run: node scripts/render-v12.js fixtures/behavior-parity > v12-out/
      - run: ./packages/ttsc/bin/ttsc-native build fixtures/behavior-parity
      - run: node scripts/diff-behavior.js v12-out/ fixtures/behavior-parity/dist/
  regression-fixtures:
    needs: test-ts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm --filter @typia/test-typia-ttsc test -- --include test_standard_schema_parity
      - run: pnpm --filter @typia/test-typia-ttsc test -- --include test_emit_objects  # R-*-E-0001/0002/0004
      - run: pnpm --filter @typia/test-typia-ttsc test -- --include test_llm_parity
  repro-build:
    needs: test-go
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
      - run: bash scripts/repro-build.sh  # -trimpath -buildid= 2 회 실행 shasum 동일
```

**규약 TST-CI-01**: Go unit → TS integration **순서 고정** (`needs`). 빠른 피드백.
**규약 TST-CI-02**: PR gate matrix 는 3×1 = 3 조합으로 고정 (§7.3).
**규약 TST-CI-03**: concurrency group + cancel-in-progress.
**규약 TST-CI-04**: `continue-on-error: true` 금지 (§10.3).
**규약 TST-CI-05**: Go 버전은 `actions/setup-go@v5` 가 `packages/ttsc/go.mod` `go 1.NN` 라인 기준 auto-pin. F B 쟁점 (§3.1 Go 1.26 pin) 합의는 A + F 의 F-Q1 를 참조.

### 7.5 Nightly benchmark workflow (개정)

`.github/workflows/benchmark-nightly.yml`:

```yaml
name: benchmark-nightly
on:
  schedule: [{ cron: '0 17 * * *' }]
  workflow_dispatch:
jobs:
  bench:
    runs-on: [self-hosted, benchmark]
    timeout-minutes: 90
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
      - uses: pnpm/action-setup@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @typia/ttsc run go:build
      - run: go test -bench -benchmem -count=5 ./packages/ttsc/...
      - run: pnpm --filter benchmark run start         # Node
      - run: pnpm --filter benchmark run start:bun     # Bun
      - run: node scripts/merge-bench-csv.js           # alloc/op + MB/sec 병합
      - run: bash scripts/append-timeseries.sh
      - run: node scripts/detect-regression.js         # 3 연속 음 delta → issue
  full-matrix-smoke:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        node: [20.x, 22.x, 24.x]
    steps: [ ... § 7.4 test-ts 동일 ... ]
```

- self-hosted 는 **벤치 전용**. 일반 matrix smoke 는 GitHub-hosted (F 6.4 반영).
- self-hosted 중단 시 벤치만 fallback — F §5.5 canary 와 일치.

### 7.6 Race detector + Windows (변경 없음)

`go test -race` Windows mingw. 실패 시 Windows 만 제외 허용.

### 7.7 Release pre-check (개정 — F 6.1 gate 일치)

`release.yml` 은 tag push 시 **release gate matrix** (3 OS × 2 Node = 6 조합) + **`api-parity` + `regression-fixtures` + `repro-build`** + **nightly bench 1 회** 실행 후 publish. F 의 release workflow 와 **matrix 수치 일치**.

### 7.8 캐싱 (개정 — F 6.2 3 층 분리)

Sub-2 F 6.2 수용. 3 층 명시:

| 층 | 캐시 여부 | 이유 |
|---|---|---|
| pnpm store (`~/.pnpm-store`) | O (lockfile 해시 기반) | 안전. `installHint()` fail 은 `check-capability-matrix-sync` 로 별도 검증 |
| Go module (`~/go/pkg/mod`) | O (`setup-go cache: true`) | 재현 빌드에 무관 |
| Go build cache | O | 성능용, 재현성용 아님. `-trimpath -buildid=` 로 결과 동일 |
| **최종 ttsc 바이너리 산출물** | **X (절대 금지)** | 타임스탬프 버그 회귀 방지 |
| release artifact (`actions/upload-artifact`) | N/A (artifact ≠ cache) | 구분 명시 |

Cycle 1 의 "ttsc 바이너리 캐시 금지" 는 **최종 산출물 레이어** 에만 적용. module/build cache 는 허용. F 의 `cache: true` 와 상충 아님.

---

## 8. 커버리지 목표 (변경 없음 + 스크립트 정식화)

### 8.1 원칙 재확인

"목표가 아니라 지표". 숫자 위한 fixture 증식 금지.

### 8.2 정량 목표 (Phase 0 종료)

| 영역 | 측정 | 목표 | 실측 |
|---|---|---|---|
| Go line coverage | emitter / metadata | ≥ 80% | TBD |
| Go line coverage | analyzer | ≥ 70% (adapter 도입 후, Sub-3 상향) | Phase 1 Week 2 측정 |
| Go line coverage | driver | ≥ 60% | TBD |
| Go line coverage | cmd/ttsc | ≥ 90% | TBD |
| TS 통합 카테고리 | 존재 여부 | 17/17 PASS | Phase 0 기준 14/14 (Sub-3 +3) |
| Regression guard | R-1.3-E-0001..0005 | 5/5 지속 PASS | 2/5 (Phase 0) → Phase 1 Week 1 5/5 |

### 8.3 Phase 1 목표

- Go line coverage 전 패키지 ≥ 75%.
- analyzer ≥ 70% (adapter 도입 후 — §2.1).
- Fixture 카테고리: Phase 1 신규 네임스페이스마다 +1.
- Branch coverage 보조 도입.

### 8.4 목표 미달 시 프로토콜

1. `go test -cover -coverprofile=coverage.out ./... && go tool cover -html=coverage.out` 로 식별.
2. 에러 경로인지 정상 경로인지 판별.
3. 정상 경로 → fixture 구멍 (§4.2).
4. 에러 경로 → 단위 테스트 구멍.
5. 의도적 미커버 → 주석 `// uncovered: intentional — defense-in-depth`.

### 8.5 정량 목표 측정 스크립트 (Sub-3 신설 — Sub-2 §7 공통 공백 대응)

`scripts/metrics/` 하에 아래 10 스크립트 (Sub-2 §7 의 "측정 스크립트 0" 공백 해소):

| 스크립트 | 규약 | Owner |
|---|---|---|
| `check-loc-typia-src.sh` | D §3.7 ≤ 3,500 | D |
| `check-loc-ttsc-go.sh` | A BND-PKG-10 | A |
| `check-binary-size.sh` | F §3.5 ≤ 40MB | F |
| `check-patches-count.sh` | C patches ≤ 3 | C |
| `check-functor-count.sh` | D §3.4 147 functors | D |
| `check-dispatch-coverage.sh` | C §6.3 | C |
| `check-go-coverage.sh` | §8.2 | E |
| `check-regression-count.sh` | §5.4 레지스터 | E |
| `check-fixture-category.sh` | §4.1 (17 카테고리) | E |
| `check-namespace-count.sh` | A NS-9 / FEAT-13 / PKG-17 | A |

매주 `metrics/YYYY-Wnn.json` 자동 커밋. nightly CI 에서 실행.

---

## 9. 코드 근거 (파일:라인 인용 — Cycle 1 유지 + Sub-3 신규 근거)

### 9.1 Go 단위 테스트 (Cycle 1 유지)

| 규약 | 근거 |
|---|---|
| 테이블 드리븐 기본 | `packages/ttsc/internal/engine/emitter/is_test.go:10-35` |
| Fragment 매칭 | `is_test.go:152-162` |
| 실패 메시지 %q | `is_test.go:31` |
| ~~analyzer placeholder~~ Sub-3 제거 | (adapter 로 교체) |
| withCapture helper | `cmd/ttsc/main_test.go:13-24` |
| Help/version/unknown | `main_test.go:37-82` |
| JSON roundtrip | `metadata_test.go:235-260` |
| AtomicKind guard | `metadata_test.go:8-19` |
| Collection emplace dedup | `metadata_test.go:262-285` (R-1.3-E-0004 확장 기반) |

### 9.2 TS 통합 테스트 (Cycle 1 유지)

| 규약 | 근거 |
|---|---|
| DynamicExecutor | `tests/test-typia-ttsc/src/index.ts:7-14` |
| TestGlobal | `TestGlobal.ts:1-24` |
| runTtsc 단일 진입점 | `src/utils/runTtsc.ts:19-37` |
| 바이너리 사전 확인 | `runTtsc.ts:20-25` |
| 4 단계 골격 | `features/test_emit_primitives.ts:15-78` |
| require.cache | `test_emit_primitives.ts:59` |
| Sentinel idempotency | `test_rewrite_idempotent.ts:14-49` |
| JS API round-trip | `test_js_api.ts:13-65` |
| Recursive TreeNode guard | `fixtures/objects/src/main.ts:42-49` + `test_emit_objects.ts:97-119` |
| Format 22 종 | `test_emit_formats.ts:26-111` |

### 9.3 Fixture 구조 (Cycle 1 유지 + Sub-3 5 옵션)

| 규약 | 근거 |
|---|---|
| tsconfig 표준 내용 | `fixtures/primitives/tsconfig.json:1-14` |
| 단일 main.ts | 모든 `fixtures/<c>/src/main.ts` |
| export 네이밍 check_/assert_/validate_ | `fixtures/objects/src/main.ts:20-49` |
| typia default import 제거 | `test_emit_primitives.ts:40-43` |
| Sentinel 문자열 | `test_rewrite_idempotent.ts:28` |
| Sub-3 tsconfig 5 옵션 | cycle-02-C-review.md:268-272 |

### 9.4 Phase 0 회귀 근거 (개정 — Sub-3 ID)

| ID | 문서 | 라인 |
|---|---|---|
| R-1.3-E-0001 (구 R-0001) analyzer 재귀 | `wiki/08-tsgo-master-plan/18-phase0-progress-report.md:95` | Cycle 4 |
| R-1.3-E-0002 (구 R-0002) emitter stack | `18-phase0-progress-report.md:96-97` | Cycle 4 |
| R-1.3-E-0003 typeKey invariant | cycle-02-B-review.md:242 (B S-5) | Cycle 2 |
| R-1.3-E-0004 Collection.Emplace | cycle-02-B-review.md:163, 243 (B E-4 / S-5) | Cycle 2 |
| R-1.3-E-0005 Name() cache | cycle-02-B-review.md:244 (B S-5) | Cycle 2 |

### 9.5 CI 근거

| 규약 | 근거 |
|---|---|
| 단일 Ubuntu job 현 상태 | `.github/workflows/test.yml:13-27` |
| node 24.x 현 상태 | `test.yml:20` |
| pnpm action-setup | `test.yml:21` |
| build.yml 대칭 | `build.yml:1-27` |
| 9-job matrix 합의 | cycle-02-E-review.md:478-494 |
| PR/Release/Nightly 수치 | cycle-02-F-review.md:200-208 (F 6.1) |
| 캐시 3 층 분리 | cycle-02-F-review.md:210-220 (F 6.2) |

### 9.6 기존 benchmark 근거 (Cycle 1 유지)

| 규약 | 근거 |
|---|---|
| MB/sec metric | `wiki/05-research/01-tests-and-benchmark.md:43-47` |
| 카테고리 목록 | `benchmark/src/programs/` |
| 머신별 폴더 | `benchmark/results/<cpu>/README.md` |
| Bun 지원 | `benchmark/src/bun.ts` |
| 시계열 없음 (약점) | `01-tests-and-benchmark.md:80` |

### 9.7 Sub-3 합의 근거 (신설)

| 규약 | 근거 |
|---|---|
| R-ID 체계 R-{mega}.{sub}-{role}-{seq} | cycle-02-E-review.md:35, 455 |
| 검증 수단 없는 규약 금지 | cycle-02-E-review.md:5, 456 |
| skip/TODO/placeholder lint | cycle-02-E-review.md:457 |
| analyzer adapter 대체 | cycle-02-B-review.md:145-150 (B E-2), cycle-02-C-review.md S-4 |
| capability matrix 자동 생성 | cycle-02-A-review.md:140 (A-5.4) |
| Standard Schema parity oracle | cycle-02-D-review.md:274-278 (D 5.1) |
| isState 구조 존재 검증 | cycle-02-C-review.md:240-242 (C 5.2) |
| tsconfig 5 옵션 고정 | cycle-02-C-review.md:268-272 (C 5.4) |
| idempotent noreset 별도 test | cycle-02-C-review.md:230-232 (C 5.1) |
| 동일 Schema JSON deep-equal pre-gate | cycle-02-B-review.md:155-157 (B E-3) |
| Collection mutual recursion Go 단위 | cycle-02-B-review.md:162-164 (B E-4) |
| LLM/functional/protobuf 누락 | cycle-02-D-review.md:301-307 (D 5.3) |
| standard-schema fixture 부재 | cycle-02-F-review.md:222-232 (F 6.3) |
| self-hosted vs GitHub runner 분리 | cycle-02-F-review.md:234-242 (F 6.4) |
| 캐시 3 층 분리 | cycle-02-F-review.md:210-220 (F 6.2) |

---

## 10. 안티패턴 (개정 — lint rule 매핑 추가)

### 10.1 테스트 작성 시

1. **skip / todo / xit / xtest / `t.Skip()` 사용 금지** — fixture 에 아예 넣지 않는다 (§4.5). → **TST-LINT-01 차단**.
2. **테스트 안에서 소스 파일 수정 금지** — fixture main.ts rewrite 금지. 필요하면 tmpdir.
3. **여러 fixture 공유 금지** — 한 테스트가 두 카테고리 dist 를 읽지 않는다.
4. **`child_process.spawn*` 직호출 금지** — 반드시 `runTtsc` 경유. → **TST-LINT-05 차단**.
5. **직접 import 금지** — `test_js_api.ts` 하나 예외.
6. **Go 테스트에서 `t.Parallel()` 금지** (현재) — withCapture 전역 stdout 이슈.
7. **hard-coded 경로 금지** — `TestGlobal.ROOT` / `TTSC_BINARY` / `path.join`.
8. **flaky 테스트 금지** — retry 로 덮지 않는다.
9. **벤치마크 수치 단위 테스트 비교 금지**.
10. **fixture main.ts `console.log` 금지** — stdout 오염.
11. **Sub-3 신설 — 빈 `_test.go` placeholder 금지** — `func Test...` 없이 import 만 있는 파일 금지. → **TST-LINT-02 차단**.

### 10.2 Lint 규약 (TST-LINT-01..05 — Sub-3 신설 · 규약)

Sub-2 §1.2.3 "X 금지 규약에 grep lint 부재" 비판 수용. Cycle 1 §10 의 10 금지 항목을 **집행 가능 lint** 로 전환.

**TST-LINT-01 — skip/TODO 감지** (§1.2 원칙 1 강조 (1) 집행)

```bash
#!/usr/bin/env bash
# scripts/lint-no-skip.sh
set -euo pipefail
PATTERNS='\b(t\.Skip|it\.skip|describe\.skip|xdescribe|xit|test\.todo|test\.skip|\.only)\b|// *TODO:? skip|// *FIXME:? skip'
if grep -rnEI "$PATTERNS" --include='*.ts' --include='*.go' \
    packages/ tests/ benchmark/src/ \
    | grep -vE '(^|/)(node_modules|dist|lib)/'; then
  echo "::error::skip/TODO found. Use regression guard (§4.5) instead."
  exit 1
fi
```

**TST-LINT-02 — 빈 `_test.go` placeholder 감지**

```bash
#!/usr/bin/env bash
# scripts/lint-no-placeholder.sh
set -euo pipefail
find packages/ttsc -name '*_test.go' | while read -r f; do
  if ! grep -qE '^func Test[A-Z]' "$f"; then
    echo "::error file=$f::placeholder test (no func Test...). §10.1 rule 11."
    exit 1
  fi
done
```

**TST-LINT-03 — Facade marker 3 줄 골격 (D §13.1 — ESLint custom rule)**

```js
// eslint-rules/facade-marker-pattern.js
module.exports = {
  meta: { type: "problem" },
  create(ctx) {
    return {
      ExportNamedDeclaration(node) {
        // typia namespace functions must be:
        //   export function f<T>(...): ... ;
        //   export function f<T>(...): ... ;
        //   export function f<T>(): never { throw ... }
        // 이외 본문은 facade 침범.
        // (세부 AST 검사 로직은 D 관장)
      },
    };
  },
};
```

D §13.1 실구현. CI step `pnpm lint:facade`.

**TST-LINT-04 — Standard Schema vendor/version invariant (D)**

```bash
#!/usr/bin/env bash
# scripts/lint-standard-schema.sh
set -euo pipefail
# vendor 가 "typia" 가 아니면 실패 (자체 필드 추가 금지 포함)
if grep -rnEI 'vendor:\s*"(?!typia")[^"]+"' packages/typia/src packages/ttsc/internal \
    | grep -vE '_test\.(ts|go)$'; then
  exit 1
fi
# version 은 반드시 1
if grep -rnEI 'version:\s*[^1]' packages/typia/src/internal/_createStandardSchema.ts; then
  exit 1
fi
# 함수명 = 파일명 규약 (§3.1) 별도 검증
```

D 소유 (Sub-2 §5.2).

**TST-LINT-05 — `runTtsc` 유일 진입점 강제 (§3.2 집행)**

```bash
#!/usr/bin/env bash
# scripts/lint-runtts-only.sh
set -euo pipefail
# spawn/spawnSync/exec/execSync child_process 직호출 금지 (tests/test-typia-ttsc/src/)
# 예외: src/utils/runTtsc.ts
if grep -rnEI "require\(['\"]child_process['\"]\)|from ['\"]child_process['\"]" \
    tests/test-typia-ttsc/src \
    | grep -v "src/utils/runTtsc.ts"; then
  echo "::error::Direct child_process usage. Use runTtsc (§3.2)."
  exit 1
fi
```

**규약 TST-LINT-06 (Sub-3 보강 — 함수명 ≠ 파일명 감지)**:

```bash
#!/usr/bin/env bash
# scripts/lint-testname-match.sh
set -euo pipefail
find tests/test-typia-ttsc/src/features -name 'test_*.ts' | while read -r f; do
  base=$(basename "$f" .ts)
  if ! grep -qE "export (async )?function $base\\b" "$f"; then
    echo "::error file=$f::function name must match file name $base"
    exit 1
  fi
done
```

### 10.3 Fixture 설계 시 (변경 없음)

1. "나중에 쓸" 타입 선언 금지.
2. 관심사 혼합 금지.
3. 랜덤 입력 금지.
4. 외부 네트워크 의존 금지.
5. 파일 시스템 상태 의존 금지 (자기 dist/ 제외).

### 10.4 CI 설계 시

1. **`continue-on-error: true` 금지** — 실패 은폐.
2. **main 브랜치 강제 푸시 금지**.
3. **secrets 테스트 로그 노출 금지**.
4. **캐시 키 커밋 해시 누락 금지** — pnpm store 는 lockfile 해시 기반.
5. **Sub-3 신설 — PR gate matrix 과다 금지** — 3 OS × 1 Node = 3 조합 상한 (§7.3, F 6.1).

---

## 11. 검증 체크리스트 (개정 — CI job 매핑 열 추가)

PR reviewer 가 머지 전 확인. 각 항목에 **집행 CI job** 또는 **수동** 을 명시:

| # | 체크 | 집행 |
|---|---|---|
| 1 | 새 `.go` 파일에 `*_test.go` 동반 (§2.1) | `test-go` |
| 2 | 새 Go 테스트가 테이블 드리븐 또는 명시적 에러 경로 (§2.3) | 수동 |
| 3 | 새 TS 테스트 파일명 `test_*.ts` + 함수명 동일 (§3.1) | `lint-ci` (TST-LINT-06) |
| 4 | `runTtsc` 만 사용 (§3.2) | `lint-ci` (TST-LINT-05) |
| 5 | 새 fixture CAR-1~5 중 ≥ 1 만족 (§4.2) | 수동 |
| 6 | 새 fixture tsconfig 5 옵션 (§4.3) | `lint-ci` (scripts/check-fixture-tsconfig.sh) |
| 7 | fixture `src/` main.ts 하나 (§4.3) | `lint-ci` |
| 8 | fixture dist/ gitignore (§4.3) | `lint-ci` |
| 9 | "지원 안 함" = 주석 + negative guard + capability-matrix (§4.5) | `lint-ci` (capability-matrix-sync) |
| 10 | 버그 픽스 PR 에 regression fixture + R-{mega}.{sub}-{role}-{seq} 주석 (§5.3) | `lint-ci` (regression-register-sync) |
| 11 | R-1.3-E-0001..0005 가드 수정 금지 (§5.3 rule 4) | `regression-fixtures` |
| 12 | 새 네임스페이스 추가 시 fixture + 통합 + Go 단위 삼종 세트 | 수동 |
| 13 | `pnpm test` 로컬 PASS | `test-ts` |
| 14 | `go test -race` PASS | `test-go` |
| 15 | `go vet` clean | `test-go` |
| 16 | `gofmt -l` 비어 있음 | `test-go` |
| 17 | 벤치 delta 3 연속 음수 시 이슈 (§6.4) | `benchmark-nightly` |
| 18 | OS matrix 전부 PASS (Phase 1+) | `test-ts` matrix |
| 19 | Node matrix 전부 PASS (Phase 1+) | `test-ts` matrix |
| 20 | 추가 테스트 2 초 이내 | 수동 + CI 통계 |
| 21 | **신설** — skip/TODO/placeholder 미존재 | `lint-ci` (TST-LINT-01/02) |
| 22 | **신설** — parity oracle fixture 동반 (Standard Schema 등 변경 시) | `regression-fixtures` |
| 23 | **신설** — Schema JSON deep-equal pre-gate PASS (benchmark) | `api-parity` |
| 24 | **신설** — 재현 빌드 shasum 일치 | `repro-build` |

**"강조 (3) — 항상 PASS + skip 금지 집행"**: 체크 1 / 13 / 14 / 21 이 동시 PASS 하지 않으면 reviewer 자동 거절.

---

## 12. 미해결 질문 (Sub-3 종결 현황)

Cycle 1 의 Q-E1..E10 중 **Sub-3 에서 종결된 것** 과 **Phase 1 이관** 구분:

### 종결된 질문 (Sub-3 합의)

- **Q-E1 중간 층 없음** — **종결**. §3.4 Layer 2.5 parity oracle 신설 (D 5.1 수용).
- **Q-E3 analyzer fake Checker** — **종결**. FakeChecker 불필요, C-3 driver→analyzer adapter 채택 (B E-2 / S-4). §2.1 개정.
- **Q-E6 `test-typia-ttsc` vs `test-ttsc` 네이밍** — **종결**. A 5.2 합의: v13 preview 전 `test-@typia/ttsc` 로 개명. F 와 공동 PR.
- **Q-E9 tsconfig target diff** — **종결**. §4.3 에 5 옵션 고정 (C 5.4).
- **Q-E10 `conventions/regressions.md`** — **종결**. 본 Sub-3 PR 과 동시 초안 (§5.4).

### Phase 1 이관 (잔여 5)

- **Q-E2 Vitest/Jest 도입** — Phase 1 말 재검토. DynamicExecutor 유지 잠정.
- **Q-E4 Bun 통합 테스트** — Phase 1 에 `bun/` 카테고리 1 개 + runtime smoke 1 개. matrix 확대는 Phase 2.
- **Q-E5 Self-hosted 러너** — F 6.4 명시. self-hosted 는 벤치 전용, 일반 CI 는 GitHub-hosted. 중단 시 벤치만 fallback.
- **Q-E7 regression cutoff 자동화** — 잠정 `N=3`, `delta < -5%`, 카테고리 전체 평균. B/C 수치 검증 뒤 Phase 1 에서 확정.
- **Q-E8 typia-go 테스트 (Phase 2)** — 본 규약은 ttsc 범위. typia-go 진입 시 별도 cycle.

### Sub-3 신설 미해결

- **Q-E11 (신설)** — `capability-matrix.md` 형식 최종화. A 양식 초안 요청 (A 5.4 반영). Sub-3 PR 이후 즉시.
- **Q-E12 (신설)** — `scripts/metrics/*.sh` 10 개 위치 (§8.5). typia 레포 루트 `scripts/metrics/` 로 집중 vs 각 패키지 분산. F 와 합의.

---

## 13. Sub-3 합의 요청 수렴 상태

본 Cycle 3 개정본이 타 역할 Sub-2 리뷰에 응답하는 방식:

### 13.1 A Sub-2 합의 요청

- **Q3 BND-API-04 3 단 스펙** — A 소유. E §1.1 매트릭스에 "동치성 레벨 = A 소유, E fixture 셋 조직" 추가 완료.
- **Q1 공식 용어 표** — A 선작성 대기. E §1.4 용어표는 Layer 2/2.5/3 및 category 17 을 명시해 A 와 교차 검증 대상.

### 13.2 B Sub-2 합의 요청

- **S-5 IR 불변식 Go 단위 regression guard** — **완전 수용**. R-1.3-E-0003/0004/0005 §5.1 등재. B 구현, E 조직.
- **E-1 R-0001/0002 양측 guard 강제** — §5.3 rule 6 격상.
- **E-2 FakeChecker 불필요** — §2.1 placeholder 제거, adapter 기반 전환. Q-E3 종결.
- **E-3 Schema deep-equal pre-gate** — §6.3 원칙 3 반영. benchmark runner 가 `typia.reflect.schema<T>()` 4 컴파일러 추출 후 deep-equal.
- **E-4 Collection mutual Go 단위** — R-1.3-E-0004 로 명시. fixture Author↔Book 동반.

### 13.3 C Sub-2 합의 요청

- **C 5.1 idempotent noreset** — `test_rewrite_idempotent_noreset.ts` 신설 (§3.8).
- **C 5.2 isState 구조 존재 검증** — §5.1 R-1.3-E-0002 guard 에 Go unit 이중 방어 추가.
- **C 5.3 벤치 축 wall-clock + 1.5× 임계** — §6.5 Phase 1+ 라인 반영.
- **C 5.4 tsconfig 5 옵션** — §4.3 고정.

### 13.4 D Sub-2 합의 요청

- **D 5.1 parity oracle (Layer 2.5)** — §3.4 신설.
- **D 5.2 regressions.md 동시 PR** — §5.4 Sub-3 PR 로 수행.
- **D 5.2.1 R-ID 제안** — 체계는 Sub-3 `R-{mega}.{sub}-{role}-{seq}` 로 변경. D 가 제안한 R-0001..0004 는 매핑 적용:
  - R-0001 (tsgo pointer) → **R-1.3-E-0001** (이미 존재)
  - R-0002 (tsgo bool widening) → **R-1.3-B-0002** (B 소유로 전환 — tsgo pointer 와 별개 사건)
  - R-0003 (`%expr` miscompile) → **R-1.3-C-0003** (C 소유)
  - R-0004 (Standard Schema path drift) → **R-1.3-D-0001** (D 소유)
- **D 5.3 LLM/functional/protobuf** — §4.1 에 `llm-adapter/` + `functional/` 신설. protobuf 는 Phase 2.

### 13.5 F Sub-2 합의 요청

- **F 6.1 matrix 수치** — §7.3 PR 3 / Release 6 / Nightly 9 수용.
- **F 6.2 캐시 3 층** — §7.8 반영.
- **F 6.3 Standard Schema fixture** — §4.1 + §4.10 TST-FIX-PARITY-01..03 수용.
- **F 6.4 self-hosted 벤치 전용** — §7.5 반영.

### 13.6 초안 간 모순 해소 (E 관장 부분)

- **M1 "13" 수치** — E 는 직접 당사자 아님. 본 문서 용어는 A 의 NS-9/FEAT-13/PKG-17 구분 확정 후 §1.4 에 반영 (Phase 1 Week 1).
- **M3 FakeChecker 필요성 E vs C** — E-2 수용으로 **해소**.
- **M5 `@typia/transform` 제거 시점** — E 가 capability-matrix 항목으로만 관여. A/D/F 단일화 대기.

---

## 부록 A. 테스트 실행 한눈에 (변경 없음 + parity oracle 추가)

### 로컬 개발

```bash
# Go 단위만
cd packages/ttsc && go test ./...

# Go 단위 + race
cd packages/ttsc && go test -race ./...

# Go 벤치마크 (Phase 1+)
cd packages/ttsc && go test -bench=. -benchmem ./...

# TS 통합 (바이너리 자동 빌드 포함)
cd tests/test-typia-ttsc && pnpm test

# Parity oracle (Sub-3 신설)
cd tests/test-typia-ttsc && pnpm run start -- --include test_standard_schema_parity

# 전체
pnpm --filter @typia/ttsc test
```

### CI 내부

```bash
# Job 1: test-go
go test -race -count=5 ./packages/ttsc/...
go vet ./packages/ttsc/...
diff <(gofmt -l packages/ttsc/) /dev/null

# Job 2: test-ts (needs: test-go)
pnpm install --frozen-lockfile
pnpm --filter @typia/ttsc run go:build
pnpm --filter @typia/test-typia-ttsc test

# Job 3: lint-ci (needs: test-go)
bash scripts/lint-no-skip.sh
bash scripts/lint-no-placeholder.sh
bash scripts/lint-runtts-only.sh
bash scripts/lint-facade-marker.sh
bash scripts/lint-standard-schema.sh
bash scripts/lint-testname-match.sh
bash scripts/check-capability-matrix-sync.sh
bash scripts/check-regression-register-sync.sh

# Job 4~6: api-parity / regression-fixtures / repro-build
# Job 7~9: build / release / website / spell-check
```

### 단일 테스트만

```bash
# Go
go test -run TestEmitIsAtomic ./packages/ttsc/internal/engine/emitter
go test -run TestEmitIsAtomic/nested_path ./packages/ttsc/internal/engine/emitter

# TS
cd tests/test-typia-ttsc
pnpm run start -- --include test_emit_formats
pnpm run start -- --exclude test_emit_stress
pnpm run start -- --include test_standard_schema_parity  # Sub-3 신설
```

---

## 부록 B. 체크리스트 요약 카드 (1 페이지 — Sub-3 개정)

```
[테스트 추가]
□ Go 함수 추가 → 동일 디렉터리 *_test.go (비어 있지 않음)
□ TS 시나리오 추가 → test_<name>.ts + export function <name>
□ 파일명 == export 함수명
□ runTtsc 로만 spawn, TestGlobal 로만 경로
□ 4 단계 골격 (cleanup → spawn → exist → require)
□ require.cache 비우기
□ Standard Schema / LLM 변경 시 parity oracle 동반

[Fixture 추가]
□ CAR-1~5 중 1 개 이상 만족?
□ tsconfig 5 옵션 (target/module/moduleResolution/useDefineForClassFields/verbatimModuleSyntax)
□ src/main.ts 하나만
□ check_ / assert_ / validate_ 네이밍
□ "지원 안함" = negative guard + capability-matrix.md 항목

[버그 픽스]
□ (1) 깨지는 fixture/테스트 커밋
□ (2) 픽스 + 초록 커밋
□ regression: R-{mega}.{sub}-{role}-{seq} — <한 줄> 주석
□ regressions.md 에 ID 등록 (3 파일 동시 수정)
□ 파이프라인 가로지르는 버그는 Go unit + fixture 양측 guard (rule 6)
□ Go 레벨 원인은 구조체/필드 존재 검증까지 (rule 7)

[PR 머지 전]
□ pnpm test PASS (로컬)
□ go test -race PASS
□ gofmt / go vet clean
□ OS matrix PASS (Phase 1+)
□ benchmark delta 확인 (nightly)
□ TST-LINT-01..06 전부 PASS
□ capability-matrix-sync / regression-register-sync PASS
□ Schema JSON deep-equal pre-gate PASS (벤치 변경 시)

[3 중 강조 — skip 금지]
□ fixture 에 .todo / .skip 없음
□ _test.go 에 t.Skip / 빈 placeholder 없음
□ "지원 안 함" 은 negative guard 로만 표현
```

---

## 부록 C. Sub-3 → Phase 1 Week 1 착수 목록

본 개정본 머지 직후 Phase 1 Week 1 에 E 가 수행할 작업:

1. `conventions/regressions.md` 초안 커밋 (§5.4 표 + 마이그레이션 `R-0001→R-1.3-E-0001` 주석 일괄 교체).
2. `scripts/lint-no-skip.sh` + `scripts/lint-no-placeholder.sh` + `scripts/lint-runtts-only.sh` + `scripts/lint-testname-match.sh` 4 lint 커밋.
3. `.github/workflows/test.yml` 9-job 확장 PR — `lint-ci` job 추가, `needs` 연결.
4. `tests/test-typia-ttsc/fixtures/standard-schema-parity/` 신규 디렉터리 + 5 export (§4.10 표).
5. `tests/test-typia-ttsc/src/features/test_standard_schema_parity.ts` 신규 (§3.4 골격).
6. `fixtures/objects/src/main.ts` 에 `Author↔Book` 추가 (R-1.3-E-0004 guard).
7. `packages/ttsc/internal/engine/analyzer/type_adapter_test.go` 신규 (10+ case 테이블). B 와 공동.
8. `scripts/metrics/*.sh` 10 개 스켈레톤 (§8.5, A/C/D/F 와 분담).
9. `scripts/check-capability-matrix-sync.sh` + `scripts/check-regression-register-sync.sh` 2 동기화 lint.
10. `capability-matrix.md` 초안 (A 양식 확정 대기, E 는 샘플 fixture 주석 수집 스크립트만 선행).

부담 분산:

| 역할 | Sub-3 직후 (Week 1) | Phase 1 Week 2 |
|---|---|---|
| A | BND-API-04 3 단 스펙, capability-matrix.md 양식 | NS/FEAT/PKG 용어 최종 |
| B | R-1.3-E-0003/0004/0005 Go 단위 test 3 건, dumpSchema hook | analyzer adapter 본체 완성 |
| C | §7.3.3 `_createStandardSchema` functor 호출 emit 전환, idempotent noreset fixture | dispatch coverage badge |
| D | Standard Schema functor 파이프, facade-marker ESLint rule | LLM/functional fixture guard |
| E | 본 부록 C 10 항 | 체크리스트 자동화 점검 |
| F | matrix 수치 release.yml 반영, 캐시 3 층 문서화 | benchmark-nightly 고정 |

Cycle 3 → Phase 1 Week 1 완료 기준: 9-job CI matrix 전부 green, R-1.3-E-0001..0005 5/5 PASS, `lint-ci` 전부 PASS.

---

> **끝.** Sub-3 개정본은 Cycle 1 의 골격 (TST-* 규약 ID · "항상 PASS" + "skip 금지" 3 중 강조) 을 유지하면서 Sub-2 의 5 교차 비판 전부에 응답한다. 핵심 변경: (1) R-ID 체계 `R-{mega}.{sub}-{role}-{seq}` 정식화, (2) §2.1 analyzer placeholder 제거 + adapter 기반 Go 단위 테스트, (3) §3.4 Layer 2.5 parity oracle 신설, (4) §4.1 17 카테고리 + parity fixture 3 개, (5) §5.1 R-1.3-E-0003/0004/0005 신규 regression, (6) §6.2 4 컴파일러 축 + Schema deep-equal pre-gate, (7) §7.2 9-job matrix, (8) §10.2 TST-LINT-01..06 실행 가능 lint, (9) §11 체크리스트 24 개 + CI job 매핑 열. Phase 1 진입 조건은 본 개정본 9-job CI matrix 전부 green.
