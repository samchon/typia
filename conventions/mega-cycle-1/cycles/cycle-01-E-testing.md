# E. QA/Test Lead — Cycle 1 초안

> 역할 E. QA/Test Lead
> 대상 독자: 역할 A(경계), B(Go engine), C(ttsc driver), D(TS facade), F(Release/DX)
> 목적: ttsc + typia-go 통합 체제에서 **테스트·fixture·벤치마크·CI 를 "어떻게 조직하고 실행하는가"** 의 규약 합의 초안.
> 전제: "무엇을 테스트하는가"(어떤 단언, 어떤 시나리오, 어떤 에지 케이스) 는 B/C 의 관장 범위이다. 본 문서는 그 테스트들을 **어떤 디렉터리·파일·네이밍·실행 순서로 조직**하며, **회귀가 다시 나지 않도록 어떻게 고정**하고, **CI 에서 어떤 순서로 돌리는가** 만 다룬다.
> 현 상태(2026-04-19 기준): Phase 0 에서 Go `go test ./...` 4 패키지 PASS + TS `npm test` 21/21 PASS (18번 progress-report 확인). 본 규약은 이 구조를 "정식 규약" 으로 굳히고 Phase 1+ 에 확장 가능한 형태로 다듬는다.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 범위 매트릭스 (역할 간 경계)

| 축 | 질문 | 누가 | 본 문서 |
|---|---|---|---|
| **내용** | 이 테스트는 무엇을 단언해야 하는가? | B(engine) / C(driver) / D(facade) | 언급만, 결정 않음 |
| **조직** | 파일명·디렉터리·네이밍 규약은? | **E** | ◎ |
| **실행** | 어떤 순서·환경·바이너리로 돌리는가? | **E** | ◎ |
| **방어** | 회귀를 어떻게 고정(guard)하는가? | **E** | ◎ |
| **성능** | 벤치마크는 어떤 카테고리/머신/비교대상? | **E** (축) + B/C (수치) | ◎ 축만 |
| **CI** | workflow matrix, 실패 시 게이트는? | **E** | ◎ |
| **커버리지** | 정량 목표는? | **E** | ◎ |
| **릴리스 전 smoke** | 배포 전 무엇을 돌리는가? | F(Release/DX) + E | ◎ 공동 |

> 경계선 운영 원칙. "이 조건을 만족하는 입력이 이 출력을 내야 한다" 는 **내용** 이다. B/C 가 테스트 본문을 쓴다. E 는 *"그 테스트가 test_emit_xxx.ts 라는 이름으로 fixtures/xxx/src/main.ts 를 컴파일·실행하고 결과를 deep-equal 로 비교해야 한다"* 를 못박는다.

### 1.2 핵심 원칙 10 가지

1. **항상 PASS** — main/feat 브랜치에 머지되는 모든 커밋은 `pnpm test` 가 로컬·CI 양쪽에서 PASS 여야 한다. Skip/TODO/`.skip` 금지. 회귀 발견 시 **먼저 테스트를 빨갛게 만든 커밋** 을 올리고, 그 다음 커밋에서 픽스 + 초록. 중간 상태가 main 에 들어가서는 안 된다.
2. **두 층**. Go 단위 테스트 (`go test ./...`) 는 "함수가 올바른 문자열/구조체를 생산하는가" 를 본다. TS 통합 테스트 (`npm test` → `DynamicExecutor`) 는 "컴파일된 바이너리가 fixture 를 실제로 다시 쓰고 Node 가 실행할 수 있는가" 를 본다. 두 층 모두 실패 시 머지 불가.
3. **Fixture 는 사람이 읽는 진실원**. 모든 TS 통합 테스트는 `tests/test-typia-ttsc/fixtures/<category>/src/main.ts` 하나의 파일로부터 출발한다. main.ts 만 보면 "이 fixture 가 어떤 typia 호출을 검증하는가" 가 3 초 안에 이해돼야 한다.
4. **Regression guard 는 fixture 레벨에서**. 과거에 버그가 실재했다는 증거를 남기기 위해, 해당 버그를 **재현하는 입력** 을 fixture 에 영구 보존한다. 주석에 `// regression: <cycle>-<bug-id>` 태그를 붙인다. 삭제 금지.
5. **Fixture 는 실증된 기능만 담는다**. "언젠가 지원" 기능을 fixture 에 미리 넣어 `test.todo` 나 `skip` 으로 두는 패턴 금지. 지원하지 않는 기능은 regression guard (반드시 `throws` 하거나 에러 코드 N 으로 종료) 로만 기록한다.
6. **Go 단위는 테이블 드리븐**. Go `_test.go` 는 `cases := []struct{ name; ...; want }{...}; for _, tc := range cases { t.Run(tc.name, ...) }` 패턴을 기본 형식으로 한다. is_test.go, tags_test.go, metadata_test.go 가 이미 이 형식이다.
7. **TS 통합은 바이너리 spawn**. 내부 함수를 직접 import 하지 않는다. `runTtsc(args, fixtureDir)` 한 진입점으로만 ttsc 프로세스를 돌린 뒤 stdout/stderr/status 와 `dist/main.js` 를 검사한다.
8. **벤치마크는 회귀 도구, 절대치 자랑이 아님**. 커밋 단위로 "느려졌는가" 를 재는 도구. 머신 간 비교는 참고치일 뿐. v12 는 **동일 머신에서 동일 시각** 에 함께 돌렸을 때만 비교 가능하다.
9. **CI 는 Go 먼저 → TS 나중**. Go 유닛이 빨강이면 TS 통합도 반드시 빨강이므로, 빠른 신호를 먼저 받기 위해 순서 고정.
10. **Coverage 는 지표이지 목표가 아님**. 숫자를 올리기 위한 더미 테스트 금지. 목표 미달 시 먼저 *"fixture 가 비는가 / regression guard 가 부족한가"* 를 묻고, 그 뒤에만 단위 테스트를 추가.

### 1.3 용어 고정

| 용어 | 정의 |
|---|---|
| **Go 단위 테스트** | `packages/ttsc/**/*_test.go` 파일. `go test ./...` 로 실행. |
| **TS 통합 테스트** | `tests/test-typia-ttsc/src/features/test_*.ts` 파일. `DynamicExecutor` 가 `prefix: "test_"` 로 수집. |
| **fixture** | `tests/test-typia-ttsc/fixtures/<category>/` 아래 tsconfig.json + src/main.ts (+ 필요시 dist/ 빌드 산출물) |
| **category** | fixture 의 최상위 분류 (primitives, objects, formats, advanced, stress, tagged, assert-validate, combined, factory, schema, misc, http, native, json) |
| **regression guard** | 과거 버그를 재현하는 최소 fixture + 단언 쌍. 삭제 금지 표식 주석 필수. |
| **ttsc 바이너리** | `packages/ttsc/bin/ttsc-native` (Linux/macOS) / `ttsc-native.exe` (Windows). TS 통합이 spawn. |

---

## 2. Go unit test 규약

### 2.1 패키지 ↔ 테스트 파일 1:1

Go 파일 `foo.go` 의 공개 함수를 검증하는 테스트는 **동일 디렉터리** 의 `foo_test.go` 에 둔다. 타 패키지가 쓴다고 `internal/<other>/foo_test.go` 로 떨어뜨리지 않는다. 현 상태:

| 소스 | 단위 테스트 |
|---|---|
| `internal/engine/metadata/*.go` | `metadata/metadata_test.go` |
| `internal/engine/emitter/is.go` | `emitter/is_test.go` |
| `internal/engine/emitter/assert.go` | `emitter/assert_test.go` |
| `internal/engine/emitter/tags.go` | `emitter/tags_test.go` |
| `internal/engine/emitter/json_schema.go` | `emitter/json_schema_test.go` |
| `internal/engine/emitter/json_stringify.go` | `emitter/json_stringify_test.go` |
| `internal/engine/analyzer/*.go` | `analyzer/analyzer_test.go` (placeholder) |
| `cmd/ttsc/main.go` | `cmd/ttsc/main_test.go` |

> `analyzer` 가 placeholder 인 이유는 FromType 이 live tsgo Checker 를 요구하기 때문이다 (analyzer_test.go:1-7 주석 참조). 이 의존성은 Phase 1 에서 **fake checker** 를 shim 서브패키지에 추가해 해소한다 (§12 미해결 질문 Q-E3).

### 2.2 네이밍

- 함수명: `TestXxx` 는 Go 표준 그대로. **동사 없이** `Test<대상>[<시나리오>]` 형식. 예: `TestEmitIsAtomic`, `TestTagCheckMinimumMaximum`.
- 서브케이스 (`t.Run`) 의 `name` 필드: **사람이 읽는 영소문자 단구** ("string", "nested path", "literal union"). Go 가 자동으로 `/` 로 경로를 만들어 `go test -run TestEmitIsAtomic/nested_path` 가 동작하도록 공백을 유지.
- 실패 메시지 형식: `t.Errorf("got %q, want %q", got, tc.want)`. "%q" 를 기본으로 고정 — 공백·이스케이프가 그대로 보여야 문자열 버그를 잡는다. is_test.go:31 이 이 형태.

### 2.3 테이블 드리븐 기본 형식

```go
func TestX(t *testing.T) {
    cases := []struct {
        name string
        // 입력 필드들
        want string // 또는 wantErr bool, wantFragments []string 등
    }{
        {"atomic string", ..., `"string" === typeof input`},
        {"nested path",   ..., `"string" === typeof $input.user.name`},
    }
    for _, tc := range cases {
        t.Run(tc.name, func(t *testing.T) {
            got, err := CallUnderTest(...)
            if err != nil {
                t.Fatalf("unexpected error: %v", err)
            }
            if got != tc.want {
                t.Errorf("got %q, want %q", got, tc.want)
            }
        })
    }
}
```

예외는 두 가지.

1. **에러 경로 테스트** — `TestEmitIsRejectsInvalidInput` (is_test.go:165-172) 처럼 nil/empty 입력이 err 를 반환하는지만 확인하는 경우 테이블 없이 3-5 줄로 직접 기술. 케이스 수가 적으면 테이블이 오히려 소음.
2. **Fragment 매칭** — 생성된 코드에 *반드시 포함되어야 하는 문자열* 을 검사할 때. `TestEmitIsObject` (is_test.go:152-162) 와 `TestEmitAssert` (assert_test.go:16-27) 가 `for _, fragment := range []string{...}` 형식을 사용한다. 완전 일치 대신 strings.Contains 를 쓰는 이유는 객체 프로퍼티 순서·공백이 안정적이지 않은 영역이기 때문.

### 2.4 실패 메시지 규약

- **한 테스트 = 한 단언**: 여러 단언을 모은 경우 각각에 고유한 메시지를 붙인다. test_emit_objects.ts:41 의 `"point ok"`, `"missing y"`, `"wrong y type"`, `"null point"`, `"array is not a point"` 가 모범. 어떤 케이스가 깨졌는지 stderr 한 줄만 보면 알도록.
- **원문 포함**: 문자열 비교 실패 시 got/want 둘 다 전량 출력. 비교가 긴 JSON 이면 `json.Unmarshal` 후 구조체 필드 단위 비교 (json_schema_test.go:55-72 가 예).
- **Fatal vs Error**: 후속 단언이 의미 없어지면 (e.g. err 가 nil 이어야 하는데 non-nil) `t.Fatalf`. 나란히 독립 단언이면 `t.Errorf` 여러 개.

### 2.5 stdout/stderr 가로채기

`cmd/ttsc/main_test.go:13-24` 의 `withCapture(fn func()) (out, errOut string)` 헬퍼를 **모든** CLI 테스트가 재사용. 전역 `stdout`/`stderr` 를 `bytes.Buffer` 로 바꿨다가 defer 에서 복구. 테스트 병렬화(`t.Parallel()`) 를 쓰고 싶다면 이 헬퍼가 먼저 mutex 화되어야 하므로 현재는 **병렬화 금지** (§10 안티패턴 6 번).

### 2.6 Fixture 참조 (Go 쪽은 없음)

Go 단위 테스트는 **fixture 를 읽지 않는다**. 모든 입력을 테스트 함수 안에서 `metadata.NewSchema().AddAtomic(...)` 으로 구성. 이유는 (1) fixture 는 TS 영역의 진실원이어서 Go 에서 읽기 시작하면 경로 해석 복잡도 ↑, (2) Go 테스트는 tsgo Checker 없이도 돌아야 하므로 ast 로부터 Schema 를 만들면 circular 의존.

예외: `cmd/ttsc/main_test.go:84-97` 의 `TestRunDemoString` 은 **fixture 없이** `ttsc demo --type=string` 서브커맨드의 출력만 확인. 이 패턴은 정당 — demo 는 fixture 가 아니라 CLI 표면의 스모크이다.

### 2.7 race detector 와 vet

- `go test -race ./...` 는 CI matrix 에 포함 (§7.3). tsgo shim 이 goroutine 을 쓰므로 레이스 감시 필수.
- `go vet ./...` 는 PR 게이트. `pnpm run go:vet` 이 이미 래퍼.
- `go fmt` 는 pre-commit 훅이 아니라 CI 에서 `gofmt -l .` diff 가 비어 있는지 확인 (F 의 DX 영역과 공동 — §11 체크리스트 10).

### 2.8 테스트 헬퍼의 위치

패키지 간 공유되는 헬퍼 (e.g. `makeSchema(t, kind AtomicKind)`) 가 생기면 **같은 패키지의 `helpers_test.go`** 에 둔다. `internal/testutil` 같은 글로벌 헬퍼 패키지는 만들지 않는다 — Go 의 `_test.go` 가 컴파일 경계를 갖기 때문에 외부에서 재사용 시 `export_test.go` 패턴이 필요해지고, 그 순간 "테스트만을 위한 공개 API" 가 생겨 소스 설계가 오염된다.

예외: 향후 fake Checker (§Q-E3) 는 shim 하부 디렉터리 (`packages/ttsc/shim/fakechecker/`) 에 정식 패키지로 두되 **빌드 태그 `//go:build test`** 로 프로덕션 바이너리에서 제외.

### 2.9 Benchmark-style Go 테스트 (Phase 1+)

`go test -bench` 는 별도 회귀 축 (§6). 본 규약은 단위 테스트 파일에 `Benchmark<Name>` 함수를 혼재시키지 않는다. Go 벤치마크가 필요하면 동일 디렉터리에 `*_bench_test.go` 를 분리 생성.

```go
// packages/ttsc/internal/engine/emitter/is_bench_test.go (예시 — Phase 1)
func BenchmarkEmitIsObjectDeep(b *testing.B) {
    schema := buildDeep5Object()
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
        _, _ = EmitIs("input", schema)
    }
}
```

벤치마크 결과는 `benchmark/results/<machine>/go/<category>.txt` 로 수집 (§6.4 timeseries CSV 와 병행).

---

## 3. TS integration test 규약

### 3.1 DynamicExecutor 로만 수집

현 `tests/test-typia-ttsc/src/index.ts` 는 `DynamicExecutor.validate({ prefix: "test_", location: __dirname + "/features", extension: "ts" })` 를 써서 **파일명이 `test_` 로 시작하면 자동 수집** 한다. 이 규칙은 고정. 테스트를 추가하려면 `features/` 에 `test_*.ts` 를 떨어뜨리고 함수를 export 하면 된다.

```ts
// tests/test-typia-ttsc/src/features/test_emit_<category>.ts
export async function test_emit_<category>(): Promise<void> {
  ...
}
```

함수명 ≠ 파일명 규약: **동일해야 한다**. Executor 가 경로만 알고 함수명은 호출 시 wildcard 로 집어오므로, 컨벤션 위반은 런타임 에러가 아니라 "조용히 스킵" 되는 최악의 형태가 된다. 이름을 일치시키면 grep 한 번에 양쪽이 잡힌다.

### 3.2 runTtsc 가 **유일한** 바이너리 진입점

`src/utils/runTtsc.ts:19-37` 이 `spawnSync(TestGlobal.TTSC_BINARY, args, { cwd: fixtureDir, encoding: "utf8", windowsHide: true })` 로 감싸고, 바이너리 미존재 시 **사전 실패** 메시지를 던진다. 테스트에서 `child_process.spawn*` 을 직접 호출 금지.

**이유**:

1. 바이너리 경로 (Win/Linux/mac `.exe` 차이) 가 한 곳에만.
2. 모든 테스트가 동일한 인코딩·windowsHide 를 쓰도록 강제.
3. 훗날 test instrumentation (e.g. elapsed time 기록, stdout prefix 로 테스트 이름 주입) 을 한 곳에서 끼울 수 있음.

### 3.3 TestGlobal 상수

`src/TestGlobal.ts` 가 `ROOT`, `TTSC_BINARY`, `getArguments(type)` 을 제공. 새 경로 상수가 필요하면 여기 추가. 테스트 파일 안에서 `path.resolve(__dirname, ...)` 로 직접 계산 금지.

### 3.4 TS 통합 테스트의 골격

모든 `test_emit_*.ts` 는 다음 4 단계를 지킨다:

```ts
export async function test_emit_<category>(): Promise<void> {
  // 1. 경로 해석 (TestGlobal 경유)
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "<category>");
  const dist    = path.join(fixture, "dist");

  // 2. 이전 빌드 잔해 제거 (hermetic 보장)
  fs.rmSync(dist, { recursive: true, force: true });

  // 3. ttsc 바이너리 spawn
  const result = runTtsc(
    ["build", "--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  // 4. dist/main.js 로드 + 단언
  const mainPath = path.join(dist, "main.js");
  assert.ok(fs.existsSync(mainPath), "dist/main.js must exist");
  delete require.cache[require.resolve(mainPath)];  // 반복 실행 대응
  const mod = require(mainPath) as { /* 예상 export */ };

  // 단언 ... (B/C 의 영역)
}
```

네 단계의 각 호출 순서는 **고정**. 특히 `require.cache` 비우기를 빼먹으면 같은 프로세스에서 다른 테스트가 먼저 로드한 이전 버전이 섞여 들어온다 (test_emit_primitives.ts:59 가 예).

### 3.5 CLI 서브커맨드 테스트

`test_version_banner.ts`, `test_unknown_command.ts`, `test_missing_tsconfig.ts`, `test_transform_subcommand.ts` 등은 위 골격의 **짧은 변형**이다:

- `runTtsc([...])` 로 돌린 뒤 status/stdout/stderr 만 확인
- fixture 가 필요 없거나 (버전 배너), 필요해도 dist 를 만들지 않는 경우.

네이밍: `test_<동사>_<대상>.ts`. 빌드가 아니라 CLI 동작 자체를 검증하므로 `test_emit_*` 접두어는 쓰지 않는다.

### 3.6 JS API 테스트

`test_js_api.ts` 는 **bundler plugin** 시나리오용. `@typia/ttsc` 의 `lib/api.js` 를 require 해서 `transform`, `transformAsync`, `build`, `version` 네 엔드포인트가 바이너리 spawn 없이도 호출 가능한지 검증. 이 테스트의 **전제** 는 미리 `pnpm run build` 가 돌아 `lib/` 가 생성된 상태. `package.json` 의 `test` 스크립트는 `build:go` 를 pre-run 으로 두지만 `build` (TS 컴파일) 는 상위 workspace 의 `pnpm run build` 가 책임진다 (§7 CI 순서 참조).

### 3.7 멱등성 테스트

`test_rewrite_idempotent.ts` 는 tsgonest 의 sentinel 패턴을 우리도 따른다는 것 (`/* @typia-ttsc-rewritten */`) 을 증명하는 회귀 가드. **규약**: 두 번째 emit 이 첫 번째와 **byte-for-byte** 동일해야 한다. 이 단언은 완화하지 않는다 (공백·개행 하나라도 달라지면 watch-mode 에서 diff 폭발).

### 3.8 Assert vs Async

- 실제로 비동기가 필요한 유일한 테스트는 `test_js_api.ts` (transformAsync 검증 때문). 그 외에는 `async` 를 붙이되 내부에서 `await` 를 쓰지 않는다. DynamicExecutor 가 Promise 를 받도록 시그니처를 통일한 것뿐.
- `assert` 모듈은 Node 표준 `assert` (not strict). deep-equal 비교는 `assert.deepEqual`, string 부분일치는 `assert.ok(s.includes(...))`.

### 3.9 실패 진단

`DynamicExecutor` 는 각 테스트의 `exec.error` 를 수집해 모두 끝난 뒤 한꺼번에 출력 (index.ts:30-39). 따라서 한 테스트가 깨져도 나머지 모두 돌아간 뒤에야 리포트가 나옴. **CI 에서 단일 실패 시 어떤 테스트가 깨졌는지** 는 출력 맨 위의 `Error name` 과 stacktrace 로 추적. 테스트 본문의 `assert.equal(..., "<message>")` 세 번째 인자를 반드시 쓴다 (test_emit_objects.ts:41 이 모범).

### 3.10 테스트 간 순서 독립성

`DynamicExecutor` 는 파일 알파벳 순 실행을 보장하지 **않는다** (index.ts:9-14). 따라서 테스트 A 가 테스트 B 의 부수효과에 의존하면 CI/로컬에서 간헐적으로 깨진다. **모든 테스트는 독립적**이어야 한다:

- fixture 는 §3.4 단계 2 의 `fs.rmSync(dist, ...)` 로 매번 초기화.
- 전역 상태 금지. `TestGlobal` 의 필드는 전부 `readonly`.
- `require.cache` 를 각 테스트가 자기 필요분만 비운다 — 다른 테스트가 로드한 엉뚱한 모듈은 건드리지 않는다.

### 3.11 `--include` / `--exclude` 필터

`index.ts:7-8` 이 `TestGlobal.getArguments("include")` / `exclude` 를 읽어 부분집합 실행을 지원. 로컬 디버깅 시:

```bash
pnpm --filter @typia/test-typia-ttsc test -- --include test_emit_formats
pnpm --filter @typia/test-typia-ttsc test -- --exclude test_emit_stress
```

규약: CI 에서는 필터를 쓰지 않는다. 필터 사용은 로컬 개발·디버깅 전용이며, PR 의 실패 재현에도 필터 유무가 결과를 바꾸지 않아야 한다 (즉 §3.10 독립성이 실제로 지켜져야 한다).

### 3.12 바이너리 재빌드 트리거

현 `tests/test-typia-ttsc/package.json:9-11` 은 `test` 스크립트가 `build:go && start` 로 **항상 Go 바이너리를 재빌드**한다. 이는 "소스와 바이너리가 어긋나 발생하는 위양성" 을 원천 차단. 지역 개발 시 빠른 반복을 원한다면:

```bash
pnpm --filter @typia/test-typia-ttsc run start  # 바이너리 재빌드 생략
```

규약: `test` 스크립트의 `build:go &&` 전치는 **삭제 금지**. 속도 최적화보다 정확성이 우선.

---

## 4. Fixture 카테고리 규약

### 4.1 현 상태 (14 카테고리)

```
tests/test-typia-ttsc/fixtures/
├── advanced/          ← discriminated union, Partial<T>, Pick<T, K>, readonly array, optional chain 3단
├── assert-validate/   ← typia.assert<T> / typia.validate<T> shape
├── combined/          ← is + assert + validate 한 모듈에서 동시에
├── factory/           ← createIs / createAssert / createValidate + Standard Schema ~standard 주입
├── formats/           ← 22 format validator 전수 (email/uuid/url/date-time/json-pointer/...)
├── http/              ← typia.http.* 네임스페이스 (query/headers/formdata 초기 서브셋)
├── json/              ← typia.json.stringify / parse / schema
├── misc/              ← typia.misc.* (clone/prune/assertClone 등)
├── native/            ← Date, Uint8Array, Set, Map, Buffer, URL, TypedArray 11 종
├── objects/           ← Point / Member / Nested / Array / Union / Nullable / Tuple / recursive TreeNode
├── primitives/        ← string/number/boolean/bigint/any
├── schema/            ← typia.json.schemas<T>() OpenAPI 3.1 방출
├── stress/            ← 50-field wide object, 5-level deep, 20-alternative union
└── tagged/            ← typia.tags.Format / Pattern / Minimum / Maximum / MinLength / ...
```

### 4.2 카테고리 추가 기준 (Category Addition Rule — CAR)

새 카테고리는 **다음 다섯 중 ≥ 1 을 만족할 때만** 추가한다.

| # | 기준 | 예 |
|---|---|---|
| CAR-1 | 새 **네임스페이스** 가 생긴다 | typia.random.* → `random/` |
| CAR-2 | 새 **프로그래머** (programmer) 가 생긴다 | typia.protobuf.encode/decode → `protobuf/` |
| CAR-3 | 새 **Tag 계열** 이 생긴다 | typia.tags.Matches / SameAs 등 |
| CAR-4 | 기존 카테고리가 **50 LOC 초과** 로 커져 관심사 분리 필요 | objects/ 가 200+ LOC → objects-union/, objects-recursive/ 분할 |
| CAR-5 | **회귀** 가 특정 구조 조합에서만 발생해 guard 파일이 필요 | recursive TreeNode → objects/main.ts 말미에 추가 (#4.4) |

위 다섯 중 어느 것도 아닌데 "테스트를 늘리고 싶어서" 만든 카테고리는 리뷰에서 리젝. 기존 fixture 의 main.ts 에 추가로 export 를 붙이는 것이 첫 번째 선택지.

### 4.3 fixture 내부 구조

```
fixtures/<category>/
├── tsconfig.json    ← include: ["src"], rootDir: src, outDir: dist, target: ES2022, module: commonjs
├── src/
│   └── main.ts      ← typia.<fn><T>(...) 호출을 담은 **단일 파일**
└── dist/            ← ttsc build --emit 산출물 (gitignore)
    └── main.js
```

**규약**:

- `tsconfig.json` 은 Phase 0 의 현 14 개 fixture 전부 동일 내용 (primitives/tsconfig.json:1-14 참조). 이 "copy-paste tsconfig" 는 의도적이며, 공통 base 를 만들어 `extends` 로 뽑는 것을 **금지**. 이유: tsconfig 해석 자체를 ttsc 가 한다 — 테스트가 "현실적으로 사용자가 쓰는 평범한 tsconfig" 를 재현해야 하므로 특별함이 없어야 한다.
- `src/` 는 **복수 파일 금지** (main.ts 한 장). 멀티파일 시나리오가 필요하면 새 카테고리를 판다 (CAR-4).
- `dist/` 는 git 추적 안 함. `.gitignore` 에 fixture dist 패턴이 이미 있어야 한다 (F 의 영역 — §11 체크리스트 8 에 확인 포함).

### 4.4 `main.ts` 내 export 규약

- `export const check_<name> = (input: unknown): boolean => typia.is<T>(input);` — is 검증 함수는 **check_ 접두어**.
- `export const assert_<name> = (input: unknown): T => typia.assert<T>(input);` — assert 반환은 T.
- `export const validate_<name> = (input: unknown) => typia.validate<T>(input);` — validate 반환은 `{ success, data, errors }`.
- factory 계열: `export const is_<name> = typia.createIs<T>();` — **createX 는 바인딩을 직접 노출**.
- 타입 정의는 **export 하지 않는다**. fixture 는 검증 함수의 결과만 테스트하므로 타입 자체는 구현 상세.

### 4.5 "지원 안 함" 을 fixture 가 표현하는 방법

지원하지 않는 기능은 `skip` 이 아니라 **negative guard** 로 표현한다:

```ts
// fixtures/<cat>/src/main.ts — 아직 지원 안 함 구간
// regression guard: Phase 1 에서 지원 예정. 현재는 status != 0 으로 실패해야 함
// export const check_bigint_format = ... // TODO Phase 1
```

즉 "아직 안 됨" 은 fixture 에서 **주석** 으로만 표현. 테스트 파일에서 `assert.equal(result.status, 0)` 를 만족할 수 있는 것만 fixture 에 들어간다. 이렇게 해야 "주석을 지우고 export 주석 해제" 한 순간 Phase 1 테스트가 바로 돌아간다.

### 4.6 fixture 경로를 테스트 코드에 하드코드하지 말 것

항상 `path.join(TestGlobal.ROOT, "fixtures", "<category>")`. 문자열 리터럴로 `"../../../fixtures/..."` 쓰지 않는다 — 워크스페이스 루트 이동 시 전수 수정해야 한다.

### 4.7 카테고리 사이즈 가이드

한 카테고리 main.ts 가 **100 LOC 를 넘기면** 리뷰에서 경고. 150 LOC 초과 시 분리 (CAR-4). 현 상태 (Phase 0 종료 시점) 대략의 분포:

| 카테고리 | main.ts LOC (추정) | 상태 |
|---|---|---|
| primitives | ~20 | 안전 |
| objects | ~50 | 안전, TreeNode 포함 후에도 여유 |
| formats | ~70 (22 export) | 안전, 더 이상 늘리지 말 것 |
| tagged | ~80 | 경계선. Phase 1 에서 분리 후보 |
| stress | ~120 | 경계. 50-field wide + 20-alt union 이 주범 |
| advanced | ~40 | 안전 |

### 4.8 fixture 의 `node_modules`

fixture 는 상위 workspace 의 hoisted `node_modules` 에서 `typia` 를 import (main.ts 의 `import typia from "typia"`). 각 fixture 에 개별 `node_modules` 를 두지 않는다. 단, 독립 버전 검증이 필요한 경우 Phase 1+ 에서 `fixtures/<category>/package.json` 을 추가할 수 있음 (그때 별도 cycle 로 확장 규약 결정).

### 4.9 fixture 의 runtime 검증 vs shape 검증

본 규약에서 "fixture 기반 테스트" 는 **두 층**을 동시에 검증한다:

1. **Shape**: `dist/main.js` 의 텍스트에 특정 fragment 가 포함되는가 (`src.includes(...)`).
2. **Runtime**: `dist/main.js` 를 `require` 한 뒤 함수를 호출해 기대값이 반환되는가.

`test_emit_primitives.ts` 는 양쪽 다 (shape 40-55 줄 + runtime 68-77 줄), `test_emit_objects.ts` 는 runtime 중심. 규약: **최소 runtime 검증 1 개**는 반드시 포함. shape 단독 검증은 sentinel 같은 "의도적으로 텍스트 수준" 인 경우에만.

---

## 5. Regression test 규약 — Phase 0 발견된 버그 2 재발 방지

### 5.1 발견 내역 재확인

18번 progress-report.md:93-98 (Cycle 4) 에 기록된 **치명 버그 2 개**:

#### Bug R-0001 — analyzer 무한 재귀

- **증상**: 재귀 타입 `TreeNode { value: number; children: TreeNode[] }` 를 iterate 할 때 `visitingObjects` / `visitingArrays` / `visitingTuples` 가 `*shimchecker.Type` 포인터를 키로 사용 → tsgo 가 의미적으로 동일한 타입에 대해 distinct 포인터를 반환하는 경로가 존재 → 재귀 탈출 못 함.
- **수정**: `analyzer/type_key.go` 의 `typeKey(t)` 가 `Type.Id()` 기반 **문자열 키** 를 반환하도록 교체.
- **Guard**: `fixtures/objects/src/main.ts:44-49` 의 `interface TreeNode` + `check_tree` export. 테스트 `test_emit_objects.ts:97-119` 가 4 케이스 (leaf, 3-level deep, wrong value type, bad grandchild) 로 고정.

#### Bug R-0002 — emitter goroutine 스택오버플로

- **증상**: 재귀 Schema 를 emit 할 때 ObjectType 본문을 순회 중 동일 ObjectType 을 다시 만나면 inline expansion 이 goroutine stack 을 터뜨림.
- **수정**: `emitter/is.go` 의 `isState` 구조체 도입 + 재방문 시 `__is_N` 헬퍼 이름 예약 → 본문 한 번만 emit, 자기참조는 헬퍼 호출.
- **Guard**: 동일 fixture `objects/check_tree`. R-0001 을 방어하면서 R-0002 도 함께 방어 (둘 다 재귀를 건드리므로).

### 5.2 Regression guard 규약 (R-rule)

1. **버그 발생 시 즉시 fixture 에 재현 최소 케이스를 추가.** 커밋 순서: (a) fixture + 테스트를 빨갛게, (b) 픽스를 초록으로.
2. **주석에 ID 태그**. `// regression: R-NNNN — <한 줄 요약>` 를 fixture 소스의 해당 export 윗줄에 붙인다.
3. **ID 는 순차**. `conventions/regressions.md` (차후 생성) 에 `R-NNNN | cycle | 파일:라인 | 한 줄 원인` 표를 관리. 현재 R-0001, R-0002 를 **초기 두 건** 으로 기록.
4. **삭제 금지 표식**. 해당 export 와 테스트 블록은 삭제 금지. 이름이 "더 좋은 이름" 으로 바뀌면 git history 에 회귀 이력이 남도록 rename PR 이 단일 책임.
5. **같은 버그가 재발하면 새 R-번호**. R-0001 이 수정됐다가 리팩터로 다시 터지면 R-00XX 를 새로 부여 (원인 분석 위해). 원본 R-0001 가드는 그대로 둠.
6. **파이프라인 가로지르는 회귀는 양쪽에 guard**. R-0001 은 analyzer 버그지만 Go 단위에서 잡히지 않고 TS 통합에서만 재현됐다. 이런 경우 **가능하면** Go 단위 (`analyzer_test.go`) 에도 최소 재현을 추가하되, tsgo Checker 가 필요한 케이스는 TS 통합만으로 충분 (§2.1 예외와 일치).

### 5.3 Regression 레지스터 (`conventions/regressions.md` 초안)

R-NNNN ID 의 중앙 레지스터는 다음 형식의 표 하나로 유지:

```markdown
| ID | 발견일 | Phase/Cycle | 파일:라인 (원인) | Guard fixture/테스트 | 한 줄 요약 |
|---|---|---|---|---|---|
| R-0001 | 2026-04-19 | Phase 0 / Cycle 4 | analyzer/analyzer.go (visitingObjects 포인터 키) | fixtures/objects + test_emit_objects.ts | 재귀 타입 무한 루프 |
| R-0002 | 2026-04-19 | Phase 0 / Cycle 4 | emitter/is.go (guard 없는 재귀 방출) | fixtures/objects + test_emit_objects.ts | 재귀 Schema 방출 시 stack overflow |
```

본 cycle 문서와 regressions.md 의 단일 진실원 관계: **regressions.md 가 마스터**, 본 §5 는 요약. 양쪽이 어긋나면 regressions.md 가 우선.

### 5.4 Phase 0 이후 발견이 예상되는 회귀 카테고리

B/C 와 합의하여 아래 카테고리가 발견되면 각각 guard 를 추가:

| 카테고리 | 예상 트리거 | guard 대상 fixture |
|---|---|---|
| 상호 재귀 (`A → B → A`) | 두 객체 타입이 서로 참조 | `objects/` 에 `Author/Book` 추가 |
| dynamic key (`{ [k: string]: T }`) | index signature | 신규 `dynamic/` 카테고리 (CAR-1) |
| 깊은 union (`A \| B \| C \| ... \| Z`) | 코드 크기 폭발 / 순서 의존 | `stress/` 에 20-alternative 이미 존재, 확장 |
| tsconfig `paths` alias | 경로 재작성 | 신규 `paths/` 카테고리 |
| ESM target | `module: nodenext` | 신규 `esm/` 카테고리 |
| Bun runtime | Bun 의 `require` 차이 | 신규 `bun/` 카테고리 (Phase 1+) |
| 소스맵 | `.js.map` 동반 방출 | 기존 primitives 에 `sourceMap: true` 추가 |

---

## 6. Benchmark 규약

### 6.1 benchmark/ 가 상위 워크스페이스의 자리

v12 benchmark 는 `benchmark/src/` 하에 `programs/is`, `programs/assert`, `programs/validate`, `programs/stringify`, `programs/optimizer`, `programs/server-*` 로 이미 폴더가 나뉘어 있고 `internal/BenchmarkServer.ts`, `internal/BenchmarktReporter.ts` (오탈자 유지, 규약 아님 — 단순 기존 파일명) 가 런너/리포터 역할을 한다. 이 구조는 **유지**. ttsc 는 기존 benchmark 의 **하나의 비교 대상 (컴파일러)** 으로 들어간다.

### 6.2 측정 축 (Axis)

| 축 | 값의 종류 | 목적 |
|---|---|---|
| **validator** | typia(v12) / typia-ttsc / typebox / zod / ajv / class-validator | 다중 라이브러리 비교 (기존) |
| **compiler** | tsc+ts-patch / tsc+@typia/generate / **ttsc** / (Phase 2+) **typia-go** | 본 문서가 추가하는 축 |
| **category** | is / assert / validate / assert-error / validate-error / stringify / optimizer | 기존 |
| **structure** | ArraySimple / ObjectHierarchical / UltimateUnion / ... (168 structures) | 기존 |
| **machine** | `<arch>/<model>` (i9-13900HX, EPYC 7763, M1 Pro, ...) | 기존 — 머신별 폴더 유지 |
| **runtime** | Node / Bun | 기존 (`benchmark/src/bun.ts` 존재) |

### 6.3 컴파일러 비교 케이스

핵심 비교: **동일 fixture를 네 가지로 컴파일했을 때 런타임 throughput**.

```
fixture  →  [tsc + @typia/generate]   →  dist.A.js   →  benchmark A
         →  [tsc + @typia/transform]  →  dist.B.js   →  benchmark B  (= 구 v12)
         →  [ttsc]                    →  dist.C.js   →  benchmark C  (= Phase 0+)
         →  [typia-go]                →  dist.D.js   →  benchmark D  (= Phase 2+)
```

**원칙**:

1. **동일 머신 · 동일 시각 · 동일 Node 버전** 에서 A/B/C/D 를 연이어 돌린다. 교차 시각 비교 절대 금지 (§1.2 원칙 8).
2. 비교는 **A 를 기준선 (100 %)** 으로 두고 B/C/D 가 얼마나 빠른가를 본다. "몇 MB/sec" 절대값보다 "v12 대비 비율" 이 더 안정적.
3. 같은 category·structure 에 대해 **세 컴파일러 모두 동일한 validator function signature** 가 생성되는지 먼저 확인 (shape equality). 모양이 다르면 비교 무의미 — 따로 표기.
4. Reporter 출력에 "ttsc vs v12: -2 %" 와 같이 **delta 컬럼** 을 명시. Regression 인지 improvement 인지 한 눈에.

### 6.4 커밋별 regression 벤치

Master 에 머지될 때마다 `benchmark/results/<machine>/timeseries.csv` 에 한 줄 추가 (기존 README.md 에 없는 **시계열** 을 본 규약이 요구):

```
<iso-timestamp>,<commit>,<category>,<structure>,<compiler>,<MB/sec>,<delta-from-prev>
```

- 최소 measurement: is / assert / validate / assert-error / stringify 5 카테고리 × primitives·ArraySimple·ObjectHierarchical·UltimateUnion 4 structure × (v12, ttsc) 2 컴파일러 = **40 줄**.
- 실행은 nightly CI (§7.4) 에서. PR CI 에서는 돌리지 않는다 — 벤치마크 flakiness 가 PR 게이트를 죽이면 안 된다.

### 6.5 ttsc vs v12 Phase 0 목표치

18번 progress-report.md 및 10번 success-criteria.md 기준으로 본 규약이 확정하는 **벤치마크 게이트**:

| Phase | 게이트 | 측정 |
|---|---|---|
| Phase 0 walking skeleton | v12 대비 0.8× ~ 1.2× 허용 | is / primitives / ObjectHierarchical |
| Phase 1 feature parity | v12 대비 ≥ 1.0× | 전 카테고리 평균 |
| Phase 2 (typia-go) | v12 대비 ≥ 1.0×, tsc+ts-patch 대비 ≥ 3× | 10번 success-criteria §Year1 목표와 일치 |

"ttsc 가 v12 보다 느리다" 는 수용 가능 (Phase 0 목표가 기능 동등성이지 성능 우위가 아니므로). 그러나 **점점 더 느려지는 추이** 는 회귀로 취급 — timeseries.csv 의 delta 가 3 연속 음수면 이슈 자동 생성 (F 의 DX 영역).

### 6.6 Optimizer 벤치는 "코드 크기 감소율"

기존 `programs/optimizer` 는 MB/sec 이 아니라 "압축률" 을 잰다. ttsc 도 동일 metric 유지. 여기서 회귀는 "생성 코드가 갑자기 커졌다" — R-NNNN 번호를 부여하고 fixture 추가 (stress/ 카테고리가 후보).

### 6.7 컴파일 시간 벤치 (Build-time)

ttsc 의 핵심 주장 중 하나는 "tsc+ts-patch 대비 3× 이상 빠른 **컴파일 시간**" (10번 success-criteria §Year1). 따라서 validator 성능과 **별개로** 컴파일 자체의 시간을 잰다:

```
fixture_name, compiler, cold_sec, warm_sec
stress,       tsc+ts-patch, 8.42, 7.91
stress,       ttsc,         2.10, 1.88
stress,       ratio,        4.01×, 4.20×
```

- Cold = 깨끗한 디렉터리에서. Warm = `dist/` 유지한 상태에서 동일 명령 2회.
- 측정 대상 fixture: **stress, objects, formats, tagged** (비교적 큰 구조).
- 머신/러너 조건은 §6.4 와 동일 (self-hosted 고정).

### 6.8 벤치마크 런타임 격리

벤치마크 시 시스템 noise 를 줄이기 위한 절차:

1. 실행 전 `sync && echo 3 > /proc/sys/vm/drop_caches` (Linux self-hosted 러너).
2. CPU governor 고정 (`cpupower frequency-set -g performance`).
3. 백그라운드 daemon 최소화 (cron, unattended-upgrades 일시 중지).
4. 벤치 세션 사이에 최소 3 회의 warm-up iteration 후 측정 시작 (기존 `createSuccessBenchmarkProgram.ts` 규약 그대로).

이 절차는 규약이지만 **강제할 방법이 없는 수준의 운영 규약** — self-hosted 러너 세팅 문서에 포함해 F(Release/DX) 가 관리.

---

## 7. CI 워크플로 규약

### 7.1 기존 workflow 와 경계

- `.github/workflows/test.yml` — PR 게이트. `pnpm run test`. 현재 node 24.x 단일, Ubuntu only.
- `.github/workflows/build.yml` — PR 게이트. `pnpm run build`.
- `.github/workflows/experiments.yml` — 실험용. ttsc Phase 0 는 여기에 두지 않고 **test.yml 에 직접 통합**.

### 7.2 test.yml 확장 (규약안)

현 test.yml 은 13-27 줄짜리 단일 job. 본 규약이 제안하는 구조:

```yaml
jobs:
  go-unit:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup-go (stable)
      - go test -race ./packages/ttsc/...
      - go vet ./packages/ttsc/...

  ts-integration:
    needs: go-unit          # Go unit 이 빨강이면 TS 가 돌 필요 없음 (§1.2 원칙 9)
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        node: [20.x, 22.x, 24.x]
    runs-on: ${{ matrix.os }}
    steps:
      - checkout
      - setup-go
      - setup-node
      - pnpm install
      - pnpm --filter @typia/ttsc run go:build
      - pnpm --filter @typia/test-typia-ttsc test
```

**규약**:

- Go unit → TS integration **순서 고정** (needs 사용). 빠른 피드백.
- OS matrix: ubuntu (필수) + macos + windows (ttsc 바이너리 확장자 `.exe` 처리 검증).
- Node matrix: 현재 24.x 단일. Phase 1 에서 20/22/24 triple 로 확장 (최소 LTS + 현재).
- Go 버전: 현 `~/go-sdk/go/bin` hard-coded 경로는 CI 에서 `setup-go@v5` 액션으로 교체. 버전은 `packages/ttsc/go.mod` 의 `go 1.NN` 에 맞춰 자동.
- concurrency: `group: ${{ github.workflow }}-${{ github.ref }}` + `cancel-in-progress: true`. 같은 PR 의 이전 run 자동 취소.

### 7.3 Race detector + Windows

`go test -race` 는 Windows 에서 CGO 가 필요 — `setup-go@v5` 가 이미 mingw 를 포함하므로 추가 설정 없이 동작. 만일 실패 시 Windows 만 race 제외 (`-race` 미지정) 허용.

### 7.4 Nightly benchmark workflow (신규)

신규 `.github/workflows/benchmark-nightly.yml`:

```yaml
on:
  schedule:
    - cron: '0 17 * * *'   # 매일 02:00 KST
  workflow_dispatch:
jobs:
  bench:
    runs-on: [self-hosted, benchmark]   # 고정 머신 (flakiness 방지)
    timeout-minutes: 60
    steps:
      - checkout
      - pnpm install
      - pnpm --filter ttsc run go:build
      - pnpm --filter benchmark run start        # Node
      - pnpm --filter benchmark run start:bun    # Bun
      - append timeseries.csv + commit          # on benchmark-results branch
```

- `self-hosted` 러너 하나를 고정해 measurement noise 최소화 (§6.4).
- 머지 커밋 해시를 CSV 에 기록.
- 결과는 별도 브랜치 `benchmark-results` 에 자동 커밋. main 에는 영향 없음.

### 7.5 Release pre-check

F(Release/DX) 의 영역이지만 **E 쪽 요구사항**: `release.yml` 은 tag push 시점에 **PR CI 와 동일한 게이트 + nightly bench 1 회** 를 돌린 뒤에만 publish. 과거 Phase 0 에서 통과했더라도 태그 시점에 재검증.

### 7.6 캐싱

- Go modules: `~/go/pkg/mod` 캐시. `actions/setup-go@v5` 가 기본.
- pnpm store: `actions/setup-pnpm@v4` 가 기본.
- ttsc 바이너리는 **캐시 금지** — 매 CI 에서 새로 빌드. 캐시 타임스탬프 버그로 오래된 바이너리가 섞이는 사고가 역사적으로 잦다.

---

## 8. 커버리지 목표

### 8.1 원칙 재확인

"목표가 아니라 지표" (§1.2 원칙 10). 숫자를 맞추기 위해 fixture 를 늘리지 않는다. 대신 *"어느 파일이 커버리지가 낮은가 → 왜인가 → fixture 구멍인가 단위 테스트 구멍인가"* 의 방향으로 진단 도구로 쓴다.

### 8.2 정량 목표 (Phase 0 종료 시점)

| 영역 | 측정 | 목표 | 실측 (본 규약 확정 시점) |
|---|---|---|---|
| Go line coverage (`go test -cover ./...`) | emitter / metadata 패키지 | ≥ 80 % | TBD (측정 필요) |
| Go line coverage | analyzer 패키지 | ≥ 40 % (Checker 의존) | TBD |
| Go line coverage | driver 패키지 | ≥ 60 % (상당부분 TS 통합으로 간접 커버) | TBD |
| Go line coverage | cmd/ttsc | ≥ 90 % | TBD |
| TS 통합 fixture 카테고리 | 존재 여부 | 14 카테고리 전부 PASS | 15/15 PASS (18번 §Phase 0) — Phase 0 만족 |
| Regression guard | R-NNNN 번호 커버 | R-0001, R-0002 지속 PASS | 2/2 |

### 8.3 Phase 1 목표

- Go line coverage 전 패키지 ≥ 75 %.
- analyzer 패키지는 **fake checker** 도입 후 ≥ 70 % (§12 Q-E3).
- Fixture 카테고리: Phase 1 추가 네임스페이스마다 (random / protobuf / llm) 최소 1 카테고리.
- Branch coverage (`go test -covermode=count`) 보조 지표로 도입.

### 8.4 목표 미달 시 프로토콜

1. `go test -cover -coverprofile=coverage.out ./... && go tool cover -html=coverage.out` 로 **파일 단위 미커버 라인 식별**.
2. 미커버 라인이 **에러 경로** 인가 **정상 경로** 인가 판별.
3. 정상 경로라면 fixture 가 비는 것 — 카테고리 검토 (§4.2).
4. 에러 경로라면 단위 테스트가 비는 것 — `_test.go` 에 테이블 추가.
5. 의도적으로 테스트 안 하는 구간 (e.g. `panic` 가드) 은 `//nolint:staticcheck` 또는 주석 `// uncovered: intentional — defense-in-depth` 로 표시.

---

## 9. 코드 근거 (파일:라인 인용)

본 규약의 모든 규칙은 현존 코드에서 뽑았다. "이렇게 하자" 가 아니라 "이미 이렇게 하고 있으니 명시하자". 핵심 인용:

### 9.1 Go 단위 테스트

| 규약 | 근거 |
|---|---|
| 테이블 드리븐 기본 형식 | `packages/ttsc/internal/engine/emitter/is_test.go:10-35` (TestEmitIsAtomic) |
| Fragment 매칭 패턴 | `packages/ttsc/internal/engine/emitter/is_test.go:152-162` (TestEmitIsObject) |
| 실패 메시지 `%q` | `packages/ttsc/internal/engine/emitter/is_test.go:31` |
| analyzer placeholder 근거 | `packages/ttsc/internal/engine/analyzer/analyzer_test.go:1-16` |
| withCapture helper | `packages/ttsc/cmd/ttsc/main_test.go:13-24` |
| Help/version/unknown 3-variant 테스트 | `packages/ttsc/cmd/ttsc/main_test.go:37-82` |
| JSON roundtrip 테스트 | `packages/ttsc/internal/engine/metadata/metadata_test.go:235-260` |
| AtomicKind validity 가드 | `packages/ttsc/internal/engine/metadata/metadata_test.go:8-19` |
| Collection emplace dedup | `packages/ttsc/internal/engine/metadata/metadata_test.go:262-285` |

### 9.2 TS 통합 테스트

| 규약 | 근거 |
|---|---|
| DynamicExecutor 수집 | `tests/test-typia-ttsc/src/index.ts:7-14` |
| TestGlobal 상수 | `tests/test-typia-ttsc/src/TestGlobal.ts:1-24` |
| runTtsc 단일 진입점 | `tests/test-typia-ttsc/src/utils/runTtsc.ts:19-37` |
| 바이너리 사전 확인 | `tests/test-typia-ttsc/src/utils/runTtsc.ts:20-25` |
| 4 단계 골격 | `tests/test-typia-ttsc/src/features/test_emit_primitives.ts:15-78` |
| require.cache 비우기 | `tests/test-typia-ttsc/src/features/test_emit_primitives.ts:59` |
| Sentinel idempotency | `tests/test-typia-ttsc/src/features/test_rewrite_idempotent.ts:14-49` |
| JS API round-trip | `tests/test-typia-ttsc/src/features/test_js_api.ts:13-65` |
| Recursive TreeNode guard (R-0001/R-0002) | `tests/test-typia-ttsc/fixtures/objects/src/main.ts:42-49` + `test_emit_objects.ts:97-119` |
| Format 22 종 전수 | `tests/test-typia-ttsc/src/features/test_emit_formats.ts:26-111` |

### 9.3 Fixture 구조

| 규약 | 근거 |
|---|---|
| tsconfig 표준 내용 | `tests/test-typia-ttsc/fixtures/primitives/tsconfig.json:1-14` |
| 단일 main.ts | 모든 `fixtures/<category>/src/main.ts` — 복수 파일 부재 |
| export 네이밍 `check_/assert_/validate_` | `tests/test-typia-ttsc/fixtures/objects/src/main.ts:20-49` |
| `typia` default import 제거 검증 | `tests/test-typia-ttsc/src/features/test_emit_primitives.ts:40-43` |
| Sentinel 문자열 | `tests/test-typia-ttsc/src/features/test_rewrite_idempotent.ts:28` |

### 9.4 Phase 0 회귀 근거

| ID | 문서 | 라인 |
|---|---|---|
| R-0001 analyzer 무한 재귀 | `wiki/08-tsgo-master-plan/18-phase0-progress-report.md:95` | Cycle 4 bullet 1 |
| R-0002 emitter stackoverflow | `wiki/08-tsgo-master-plan/18-phase0-progress-report.md:96-97` | Cycle 4 bullet 2 |

### 9.5 CI 근거

| 규약 | 근거 |
|---|---|
| 단일 Ubuntu job 현 상태 | `.github/workflows/test.yml:13-27` |
| node 24.x 현 상태 | `.github/workflows/test.yml:20` |
| pnpm action-setup | `.github/workflows/test.yml:21` |
| build.yml 대칭 구조 | `.github/workflows/build.yml:1-27` |

### 9.6 기존 benchmark 근거

| 규약 | 근거 |
|---|---|
| MB/sec metric | `wiki/05-research/01-tests-and-benchmark.md:43-47` |
| 카테고리 목록 | `benchmark/src/programs/` 하위 (is/assert/validate/assert-error/validate-error/optimizer/stringify/server-*) |
| 머신별 폴더 | `benchmark/results/<cpu-name>/README.md` — 9개 머신 |
| Bun 지원 | `benchmark/src/bun.ts` |
| 약점: 시계열 없음 | `wiki/05-research/01-tests-and-benchmark.md:80` |

---

## 10. 안티패턴

### 10.1 테스트 작성 시

1. **skip / todo / xit / xtest / `t.Skip()` 사용 금지**. 기능이 아직이면 fixture 에 아예 넣지 않는다 (§4.5).
2. **테스트 안에서 소스 파일 수정 금지**. fixture 의 main.ts 를 테스트가 rewrite 하는 패턴은 분리된 디렉터리 상태를 유지해야 한다. write 가 필요하면 tmpdir 사용 (Phase 1 에서 ESM 테스트 등이 쓰게 될 것).
3. **여러 fixture 공유 금지**. 한 테스트가 여러 카테고리의 dist 를 동시에 읽지 않는다. test_emit_objects 는 objects 만, test_emit_formats 는 formats 만.
4. **`child_process.spawn*` 직호출 금지**. 반드시 `runTtsc` 경유 (§3.2).
5. **직접 import 금지**. TS 통합이 `require("../../packages/ttsc/lib/api")` 를 쓰는 예외는 `test_js_api.ts` **하나뿐** 이며, 그것도 `lib/` 컴파일 산출물을 읽지 `src/` TS 를 읽지 않는다 (test_js_api.ts:15-19).
6. **Go 테스트에서 `t.Parallel()` 금지** (현재). withCapture 가 전역 stdout 을 바꾸므로 병렬 시 레이스. 병렬화는 withCapture 가 thread-safe 해진 뒤.
7. **hard-coded 경로 금지**. 항상 `TestGlobal.ROOT` / `TestGlobal.TTSC_BINARY` / `path.join`.
8. **실패 시 성공하는 테스트 (flaky)**. 설계상 flaky 면 테스트가 잘못 설계된 것. retry loop 로 덮으려 하지 않는다 — 원인 제거.
9. **벤치마크 수치를 단위 테스트에서 비교 금지**. "이 함수는 100 ns 이내여야 한다" 같은 단언은 환경 의존 → benchmark 폴더 전용.
10. **fixture main.ts 에 `console.log` 금지**. 테스트가 dist/main.js 를 require 한 순간 stdout 에 쓰레기가 찍혀 DynamicExecutor 리포트 가독성 파괴.

### 10.2 Fixture 설계 시

1. **"나중에 쓸" 타입 선언 금지**. 사용되지 않는 interface/type 을 미리 박아두면 tsgo 의 deadcode analysis 동작 변경 시 문제 진단 난해.
2. **관심사 혼합 금지**. formats/ 에 object validation 이 섞이지 않음. 혼합하려면 combined/ 카테고리 사용.
3. **랜덤 입력 금지**. 테스트 입력은 결정적 리터럴. Random generator 는 벤치마크 영역.
4. **외부 네트워크 의존 금지**. `typia.http` fixture 도 실제 HTTP 콜 없이 스키마 방출만 검증.
5. **파일 시스템 상태 의존 금지** (fixture 자신의 dist/ 제외). 다른 카테고리의 dist 를 읽지 않는다.

### 10.3 CI 설계 시

1. **`continue-on-error: true` 금지**. 실패를 감추는 게이트는 무의미.
2. **main 브랜치 강제 푸시 금지**. release.yml 에서도 아님.
3. **secrets 를 테스트 로그에 노출 금지**. 현재 ttsc 테스트는 secrets 를 쓰지 않음 — 이 상태 유지.
4. **캐시 키에 커밋 해시 누락 금지** — pnpm store 캐시는 pnpm-lock.yaml 해시 기반.

---

## 11. 검증 체크리스트

**PR reviewer 가 머지 전 확인할 항목**:

- [ ] 1. `packages/ttsc/` 하위 새 `.go` 파일마다 `*_test.go` 가 동반되는가? (§2.1 1:1)
- [ ] 2. 새 Go 테스트가 **테이블 드리븐** 또는 **명시적 에러 경로** 패턴 중 하나를 따르는가? (§2.3)
- [ ] 3. 새 TS 통합 테스트 파일명이 `test_*.ts` 이며 함수명과 **동일**한가? (§3.1)
- [ ] 4. 새 TS 통합 테스트가 `runTtsc` 만 써서 바이너리를 부르는가? (§3.2)
- [ ] 5. 새 fixture 가 **카테고리 추가 기준 CAR-1~CAR-5** 중 ≥ 1 을 만족하는가? (§4.2)
- [ ] 6. 새 fixture 의 `tsconfig.json` 이 기존과 동일한 형식인가? (§4.3)
- [ ] 7. 새 fixture 의 `src/` 가 main.ts **하나** 인가? (§4.3)
- [ ] 8. 새 fixture 의 `dist/` 가 `.gitignore` 에 포함되는가? (§4.3)
- [ ] 9. "지원 안 함" 기능이 `skip`/`todo` 없이 주석 또는 negative guard 로만 기록되는가? (§4.5)
- [ ] 10. 버그 픽스 PR 에 **regression fixture** + **R-NNNN 주석 태그** 가 동봉되는가? (§5.2)
- [ ] 11. R-0001, R-0002 가드 (`fixtures/objects/src/main.ts:42-49` + `test_emit_objects.ts:97-119`) 가 **수정되지 않았는가**? (§5.2 rule 4)
- [ ] 12. 새 네임스페이스/프로그래머 추가 시 **fixture 카테고리 + 통합 테스트 + Go 단위 테스트** 삼종세트가 모두 있는가?
- [ ] 13. `pnpm test` (= `pnpm run test:ts && pnpm run test:go`) 가 로컬에서 PASS? (package.json:20)
- [ ] 14. `go test -race ./packages/ttsc/...` 가 PASS?
- [ ] 15. `go vet ./packages/ttsc/...` 가 clean?
- [ ] 16. `gofmt -l packages/ttsc/` 출력이 비어있는가?
- [ ] 17. 벤치마크 regression 의심 시 (nightly CSV delta 3연속 음수) 이슈가 열렸는가?
- [ ] 18. OS matrix (linux/mac/win) 전부 PASS? (Phase 1 이후)
- [ ] 19. Node matrix (20/22/24) 전부 PASS? (Phase 1 이후)
- [ ] 20. 추가된 테스트가 **2 초 이내** 에 끝나는가? (ttsc 바이너리 cold spawn 포함). 3 초 초과 시 카테고리 분리 검토.

---

## 12. 미해결 질문 (B/C/D/F 와 합의 필요)

### Q-E1 — Go 단위와 TS 통합 사이의 "중간 층"

현재 두 층뿐. Go 단위는 in-memory Schema, TS 통합은 바이너리 spawn. 중간 ("Go 에서 tsgo Checker 를 mock 한 상태에서 analyzer 만 돌리는 테스트") 을 둘지?

- **B 에 묻는다**: fake Checker 구현 비용 vs 진단 가치?
- 본 규약은 **"없음"** 으로 잠정 결정 (§2.1 예외 주석). 필요가 생기면 후속 cycle 에서 추가.

### Q-E2 — TS 통합의 Vitest/Jest 도입 여부

현재 `DynamicExecutor` (from `@nestia/e2e`). typia 의 다른 테스트 패키지와 동일한 도구. 장점: 구조가 평이, 진단이 선형. 단점: fixtures, snapshot, parallel isolation 같은 modern tester 의 기능 없음.

- **F(Release/DX) 에 묻는다**: Vitest 로 이주하면 배포 검증에서 얻는 것이 있는가?
- 본 규약은 **DynamicExecutor 유지** 를 잠정 추천 (ttsc 가 "가볍고 빠른 바이너리 spawn 확인" 가치가 큰데 Vitest 는 worker 모델이 오히려 오버헤드).

### Q-E3 — analyzer fake Checker

analyzer_test.go 가 placeholder. Phase 1 에서 **tsgo shim 서브패키지에 FakeChecker 인터페이스** 를 두고 analyzer 를 그 위에서 단위 테스트한다는 제안.

- **B 와 합의 필요**. 구현 비용은 shim 에 이미 있는 20+ 메소드 인터페이스를 mock 화하는 것.

### Q-E4 — Bun 통합 테스트

`tests/test-typia-ttsc` 는 현재 Node 만 타깃. Bun 사용자 대응을 위해 `npm run test:bun` 을 추가할지?

- **F 에 묻는다**: Bun 지원의 공식도 (Phase 1 공식 타깃인가, best-effort 인가)?
- 본 규약은 **Phase 1 에서 Bun fixture 카테고리 1 개 + 통합 런타임 확인 1 개** 를 추가하는 안을 선호. matrix 확대는 Phase 2.

### Q-E5 — Self-hosted 러너의 가용성

nightly benchmark (§7.4) 는 self-hosted 러너를 전제. samchon 개인 머신? GitHub self-hosted 는 유지 비용 존재.

- **F 와 합의**. 대안: GitHub-hosted 러너에서 **상대 비율만** 측정 (머신 noise 를 `delta ≥ 10 %` 임계값으로 흡수).

### Q-E6 — `test-typia-ttsc` vs `test-ttsc` 네이밍

현 이름 `tests/test-typia-ttsc`. 다른 테스트 패키지는 `test-typia-automated`, `test-typia-generate`, `test-typia-schema` 로 `test-typia-*` 접두어. ttsc 는 **컴파일러** 이지 typia 기능이 아니므로 `test-ttsc` 가 더 정확한가?

- **D(TS facade) 와 F 에 묻는다**. 바꾼다면 Phase 0 → Phase 1 경계에서 한 번에.
- 본 규약은 **현재 이름 유지** 를 잠정. 이주 비용 ≥ 이점.

### Q-E7 — 벤치마크의 "regression cutoff" 자동화

timeseries.csv 의 delta 가 연속 N 회 음수일 때 자동으로 이슈 열기. 문턱값 N, 카테고리, delta 임계 (%) 를 어떻게 정할지?

- 잠정: `N = 3`, `delta < -5 %`, 카테고리 전체 평균 기준.
- **B/C 와 수치 검증 뒤 확정**.

### Q-E8 — typia-go 테스트 (Phase 2+)

현재 규약은 ttsc 에 집중. Phase 2 typia-go 는 Go 바이너리 하나가 validator 본체 — 이때 "컴파일 결과물 (없음, runtime 이다)" 의 테스트는 구조가 완전히 다르다.

- Phase 1 종료 전 별도 cycle (`cycle-0X-E-typia-go-testing.md`) 가 필요.
- 본 규약은 **ttsc 범위** 로 한정하며, typia-go 진입 시 본 문서의 §4~§6 을 전면 재검토.

### Q-E9 — Fixture 에 TypeScript 버전 메타

ttsc 는 tsgo (TS 7 타깃) 를 감싼다. 기존 v12 는 TS 5.x. 두 컴파일러 결과를 동일 fixture 에서 비교할 때 `target: ES2022` 가 양쪽에서 동일하게 해석되는가는 검증 필요.

- **C(ttsc driver) 에 묻는다**. 현 tsconfig.json 이 충분한가, fixture 별 `target` override 가 필요한 케이스가 있는가?
- 잠정: 동일 tsconfig 로 양쪽 모두 돌린 뒤 diff 나는 구간이 있으면 그 fixture 만 split.

### Q-E10 — Regression 파일 (`conventions/regressions.md`)

§5.2 rule 3 에서 언급한 R-NNNN 중앙 레지스터. 본 문서가 요구하고 있으나 아직 생성되지 않음.

- **본 문서 후속 PR** 에서 E 가 초안 작성. A (boundary) 와 협의하여 regressions.md 가 conventions/ 아래의 "별도 챕터" 인지, 본 cycle 문서의 §5 에 통합인지 결정.

---

## 부록 A. 테스트 실행 한눈에

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

# 전체
pnpm --filter @typia/ttsc test   # = test:ts && test:go
```

### CI 내부 (제안)

```bash
# Job 1: go-unit
go test -race ./packages/ttsc/...
go vet ./packages/ttsc/...

# Job 2: ts-integration (needs: go-unit)
pnpm install
pnpm --filter @typia/ttsc run go:build
pnpm --filter @typia/test-typia-ttsc test
pnpm --filter @typia/test-typia-ttsc test -- --include test_emit_formats  # 단일 카테고리 리런
```

### 단일 테스트만

```bash
# Go
go test -run TestEmitIsAtomic ./packages/ttsc/internal/engine/emitter
go test -run TestEmitIsAtomic/nested_path ./packages/ttsc/internal/engine/emitter

# TS
cd tests/test-typia-ttsc
pnpm run start -- --include test_emit_formats
pnpm run start -- --exclude test_emit_stress   # stress 빼고
```

---

## 부록 B. 체크리스트 요약 카드 (1 페이지)

```
[테스트 추가]
□ Go 함수 추가 → 동일 디렉터리 *_test.go
□ TS 시나리오 추가 → tests/test-typia-ttsc/src/features/test_<name>.ts
□ 파일명 == export 함수명
□ runTtsc 로만 spawn, TestGlobal 로만 경로
□ 4단계 골격 (cleanup → spawn → exist → require)
□ require.cache 비우기

[Fixture 추가]
□ CAR-1~5 중 1개 이상 만족?
□ tsconfig 표준 내용 복사
□ src/main.ts 하나만
□ check_ / assert_ / validate_ 네이밍
□ "지원 안함" 은 주석 + negative guard 로만

[버그 픽스]
□ (1) 깨지는 fixture/테스트 커밋
□ (2) 픽스 + 초록 커밋
□ regression: R-NNNN — <한 줄> 주석
□ regressions.md 에 ID 등록

[PR 머지 전]
□ pnpm test PASS (로컬)
□ go test -race PASS
□ gofmt/go vet clean
□ OS/Node matrix PASS (Phase 1+)
□ benchmark delta 확인 (nightly)
```

---

> **끝.** 본 규약은 "현재 Phase 0 구현이 사실상 따르고 있는 규칙" 을 명시화했다. Phase 1 에서 새 네임스페이스·OS matrix·Bun·typia-go 가 들어올 때 §12 의 미해결 질문 10 건을 순차 해소하면서 개정한다.
