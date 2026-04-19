# E — Mega-1 Sub-2 교차 리뷰 (QA/Test Lead 관점)

> 작성: 2026-04-19 · Sub-2 재시도 (압축)
> 5 초안 (A / B / C / D / F) 교차 리뷰. E 관점은 **검증 가능성·regression fixture·CI 게이트·"항상 PASS"·skip 금지**.
> 원칙: "검증 수단 없는 규약" = 사실상 부재. "PASS 되게 만든 무의미 테스트" = 역효과. 모든 규약은 **실행 가능한 CI 단계**로 떨어져야 한다.
> 근거 스냅샷: Phase 0 `go test ./...` 4 패키지 PASS + `npm test` 21/21 PASS (`wiki/08-tsgo-master-plan/18-phase0-progress-report.md`).

---

## 1. 총평 (검증 가능성)

### 1.1 5 초안 공통 강점

5 초안 모두 wiki 08 단일 진실원에 정박하고, 파일:라인 근거를 성실히 인용한다. 특히 B·C 는 실구현 기준이라 QA 에서 **fixture 로 그대로 변환 가능**한 규약 밀도가 높다. A 는 언어 결정 자동화(BND-LNG-01) 로 "새 PR 에서 언어 토론 재발" 을 차단한다 — 이는 리뷰어 피로도 관리 차원의 훌륭한 예방적 QA. F 는 재현 빌드(`-trimpath` + `-buildid=` + `CGO_ENABLED=0`) 를 못박아 **Supply-chain 관점의 검증 가능성**까지 확보했다.

### 1.2 5 초안 공통 약점 — 검증 수단의 부재

그러나 **40+ 개 규약 중 다수가 "검증 수단 = 없음"** 으로 남아 있다. 대표 유형 4 개:

1. **정량 목표에 측정 스크립트 부재** (D §3.7 LOC ≤ 3,500, A BND-PKG-10 LOC 표, F §3.5 binary ≤ 40MB) — 실행 가능한 `lint-loc.sh` / `check-binary-size.sh` 가 함께 선언돼야 한다.
2. **"emit 동치" 규약에 golden fixture 부재** (A BND-API-04 런타임 동작 불변, D §5.3 Standard Schema 동치). **R-0001/R-0002 확장**으로 Phase 1 진입 전 최소 50 fixture 확보 필요.
3. **"X 금지" 규약에 grep 기반 CI lint 부재** (C §7.1.3 silent wrong output 금지, D §9 10 anti-pattern). 단순 grep 으로 잡히는 금지선은 즉시 CI 단계로 변환 가능한데 누락.
4. **"호환 기간" 규약에 deprecation smoke 부재** (D §3.6 transform.ts stub throw, A BND-API-03 deprecated throw) — v13.0 → v13.2 → v13.3 구간의 각 stage 별 behavior 검증 fixture 가 없다.

### 1.3 "PASS 되게 만든 무의미 테스트" 위험 신호

이미 B §4.1 (analyzer_test.go placeholder), B §6.3 thread-safety "가정(측정 없음)", B §3.3 Template "가정(측정 없음)" 가 **skip/TODO 의 사전 단계**로 존재. E 초안 핵심 원칙 1 "skip 금지" 가 실제로 위반되는 중. Phase 1 에서 "analyzer placeholder 를 채우려다 fake checker 가 어려우면 t.Skip(...) 하는 유혹" 이 예상된다. 본 리뷰는 각 draft 에 **"skip 을 쓰지 말고 먼저 fixture 레벨 guard 로 내려라"** 를 반복 요구한다.

### 1.4 교차 CI 게이트 제안 총괄

모든 draft 의 "위반 시 결과" 는 **"PR 거절"** 로 끝나지만 실제 게이트 구현 방법이 명시 안 됨. 본 리뷰 §2~§6 에서 각 draft 당 **실행 가능 CI 단계 2~3 개** 를 제시한다. 종합 9 CI job (§8).

### 1.5 Sub-3 핵심 합의 요청

(a) regression fixture ID 체계 `R-{cycle}-{role}-{seq}` 표준화. (b) "검증 수단 없는 규약" 을 Sub-3 에서 **금지** — 모든 신규 규약은 PR 내 CI step 수록 의무. (c) skip/TODO/.skip 감지 lint 는 E 관장, 전 draft 에 선적용.

---

## 2. A 초안 비판 (Boundary)

### 2.1 쟁점 A-1 — "사용자 API 불변"(P1) 의 golden fixture 부재

**증상**: BND-API-01 (함수 이름 불변), BND-API-04 (결과값 동치) 는 "v12 와 v14 동일" 을 규정하면서도 **동일성을 검증하는 fixture 세트** 를 지정하지 않음. A 가 "E 가 golden fixture 대상" 이라고 위임했지만 위임만으로는 게이트가 생기지 않는다.

**해결 제안 (fixture R-A1-*)**:
- `tests/test-typia-ttsc/fixtures/api-signature/` — 공개 API 30+ 함수의 시그니처만 호출하는 최소 파일. `typia.is<T>`, `typia.json.stringify<T>`, `typia.llm.application<C>()` 등. v12 `typia@12.x` 와 v13/v14 의 **컴파일 산출물 diff 가 0** 임을 Go 단위 테스트 `api_parity_test.go` 에서 자동 검증.
- `tests/test-typia-ttsc/fixtures/behavior-parity/` — R-0001 의 확장. 한 입력에 대해 v12 TypeScript transformer 산출물과 v13 ttsc 산출물을 각각 `node --eval` 로 실행, 결과를 deep-equal. 최소 50 fixture (namespace 9 × 평균 5 method).

**CI 단계 (실행 가능)**:
```yaml
# .github/workflows/test.yml — 신규 job
api-parity:
  needs: [test]
  steps:
    - uses: actions/checkout@v4
    - run: npm i -D typia@12 typescript@5.9  # v12 reference
    - run: node scripts/render-v12.js fixtures/behavior-parity > v12-out/
    - run: ./packages/ttsc/bin/ttsc-native build fixtures/behavior-parity
    - run: node scripts/diff-behavior.js v12-out/ fixtures/behavior-parity/dist/
```

### 2.2 쟁점 A-2 — 13 namespace 실체가 9 인데 이름이 13 (본인도 Q2 로 인정)

**증상**: BND-NS-01 표는 root + 8 = 9 import 지점 명시. 그러나 wiki 15 는 여전히 "13 namespace 유지" 로 서술. **QA 관점에서는 "무엇을 세는가"가 fixture 개수 판정에 직결**. 9 이면 9 fixture 디렉터리, 13 이면 13. 혼란 방지 regulation 필요.

**해결 제안**: Sub-3 에서 "NS-9" / "NS-13" 이름 고정 후 E 가 `tests/test-typia-ttsc/fixtures/namespace-coverage/` 를 9 디렉터리로 재정렬. wiki 15 의 13 은 "**기능 영역 13** (namespace 9 + 4 cross-cutting: Standard Schema 어댑터, factory, error, runtime-helper)" 로 보정. 보정 전에는 모든 규약 문서에서 "13" 사용 **잠정 중단** (linter 경고).

**CI 단계**:
```bash
# scripts/check-namespace-count.sh
actual=$(ls -d packages/typia/src/*.ts | grep -E '(json|llm|http|protobuf|misc|notations|reflect|functional)' | wc -l)
[ "$actual" = "8" ] || { echo "namespace drift: $actual"; exit 1; }
```

### 2.3 쟁점 A-3 — BND-TSC-01 "tsconfig plugins 호환" 의 smoke 부재

**증상**: v13 ttsc 가 v12 tsconfig (`{ "transform": "typia/lib/transform" }`) 를 읽어들인다고 **규약** 하지만 CI 가 이를 재현하는 fixture 없음. P4 위반은 "사용자 수만 프로젝트 강제 수정" 이라는 최악 결과인데 E 는 매 릴리스마다 자동 검증해야 한다.

**해결 제안 (R-A3-*)**:
- `fixtures/tsconfig-compat/v12-style/` — v12 원형 tsconfig + 한 파일 `typia.is<T>(x)`. ttsc 가 **수정 없이** build 성공해야 함.
- `fixtures/tsconfig-compat/v12-with-options/` — `strict: true` 등 레거시 옵션 포함. BND-TSC-02 "graceful ignore" 검증.
- `fixtures/tsconfig-compat/v12-jsonc-comments/` — tsconfig 에 `//` 와 `/* */` 주석 포함. `comment-json` (F §6.3) 의존을 Go 쪽이 삼킬 때도 comment 존치 보장 (D Q5).
- `fixtures/tsconfig-compat/plugin-noop-resolve/` — `plugins: [{ "transform": "typia/lib/transform" }]` 가 v13 에서 resolve 가능해야 함 (A BND-API-03 "`typia/lib/transform` 경로 유지"). D §3.6 의 stub 은 이 fixture 를 RED 로 만들 위험 있음 — 상충 검출 fixture 역할 겸함.

**CI 단계**: 매 release PR 에서 `pnpm test:tsconfig-compat` 필수 (9+ config variation × pass). Regression 발견 시 E 가 `R-1.3-A-0002` ID 로 fixture 영구 보존.

---

## 3. B 초안 비판 (Go Engine — IR 불변식 검증)

### 3.1 쟁점 B-1 — IR 불변식이 property-based test 없이 코드 주석뿐

**증상**: B §3.2 에 8+ 개 불변식 나열 ("같은 ArrayType 을 가리키는 ArrayRef 는 같은 Type 포인터 공유", "같은 key 의 Property 두 개면 버그" 등). B §3.7 "세 층 identity 항상 일관". 모두 **코드 주석 수준**이며 테스트로 가드되지 않는다. Collection 이 pointer 동일성을 깨도 현재 테스트로 잡히지 않는다.

**해결 제안**:
- `packages/ttsc/internal/engine/metadata/invariants_test.go` 신설. 각 불변식을 **fuzzing + table-driven** 으로 검증:
  - `TestInvariantCollectionPointerIdentity` — 무작위 50 타입을 두 번 Emplace 해 첫 pointer == 둘째 pointer.
  - `TestInvariantAtomicNoDuplicates` — `AddAtomic` 를 같은 kind 10 번 호출 후 `len(Atomics) == 1`.
  - `TestInvariantThreeLayerIdentity` — (pointer, collection key, Name()) 트리플이 일관.
- `go test -run TestInvariant -count=100` 를 CI 에서 돌려 **플레이키 검출**.

**CI 단계**:
```yaml
- name: IR invariants (fuzzing)
  working-directory: packages/ttsc
  run: go test ./internal/engine/metadata/ -run TestInvariant -count=100
```

### 3.2 쟁점 B-2 — "가정(측정 없음)" 3 곳의 회귀 노출

**증상**: B §3.2 Template ("패턴 생성 cost 는 emit 시점이 낮다 — 측정 없음"), B §4.9 `Type.Id()` collision ("측정 없음"), B §5.3 exclusive 위반 ("fixture 에서 사용자 실수 없다고 가정"). 이 세 "가정" 은 **Phase 1 에서 실사용자에게 터질 때까지 잠복**. "skip 금지" 원칙의 준-위반.

**해결 제안**:
- Template: regression fixture `fixtures/template-literals/` 에 `` `user-${number}` `` `` `id-${"a"|"b"}` `` 등 8 패턴. Phase 0 에서 **emit 결과 비교** 대신 최소한 "analyzer 가 panic 하지 않음" guard.
- Type.Id() collision: "같은 structural type 이 다른 Id 반환" 시나리오를 `analyzer/type_key_test.go` 에 reproducer fixture 로. 현재 건강한 tsgo 에서는 PASS, 회귀 시 첫 잡힘.
- exclusive 위반: `fixtures/tag-exclusive-conflict/` — `string & Minimum<0> & ExclusiveMinimum<0>` (모순). "Phase 0 은 통과, Phase 1 은 diagnostic" 을 **두 stage** 로 fixture 에 기록.

### 3.3 쟁점 B-3 — analyzer_test.go placeholder 는 skip 과 동치

**증상**: B §7.2 analyzer 641 LOC 에 "analyzer_test.go (placeholder)" — 실제로는 검증 0. E 초안 원칙 1 "skip 금지" 의 **테스트 파일 레벨 위반**. 현재 감춰져 있을 뿐 PASS 되게 만든 무의미 테스트 패턴 직전.

**해결 제안**:
- Fake `*shimchecker.Checker` 를 `shim/fakechecker/` 서브패키지로. tsgo 라이브 의존 없이 타입 fixture 주입 가능.
- 먼저 **3 개 시나리오** 만 구현: atomic dispatch, union flatten, recursive object. 이후 Phase 1 에서 점진 확장.
- placeholder 파일은 실제 테스트 최소 1 개 추가 전까지 **삭제** (빈 `_test.go` 금지 lint).

**CI 단계**:
```bash
# scripts/check-empty-tests.sh
find packages/ttsc -name "*_test.go" -exec awk 'NF{f=1} END{exit !f}' {} \; -print \
  | xargs -I{} sh -c 'grep -qE "^func Test" "{}" || { echo "empty test: {}"; exit 1; }'
```

### 3.4 쟁점 B-4 — JSON 직렬화 v12 호환 주장이 diff 도구 없이 방치됨

**증상**: B §3.1 "`omitempty` 는 v12 와 정확한 JSON 호환을 위한 것 ... Phase 1 에서 v12 JSON 과 diff 도구를 만들어 회귀 검증". "만들어 검증" 이 Phase 1 로 밀려 있어 지금 당장 **호환성 주장이 거짓이어도 알 수 없다**. B §1.3 원칙 3 "JSON-serialisable, trivially inspectable" 의 직접적 gap.

**해결 제안**:
- **Phase 0 마감 전** 에 `scripts/ir-json-diff.ts` 구현. 동일 TS fixture 를 (a) typia v12 `MetadataFactory.analyze` JSON 과 (b) Go `Schema.MarshalJSON` 결과로 비교. 차이 발견 시 즉시 issue.
- `fixtures/ir-v12-parity/` — primitives / objects / unions / recursive 등 10 fixture. 각 fixture 에 `expected-v12.json` 커밋. Go 산출과 deep-equal.
- 이는 B 가 "Phase 1 미룸" 이라고 썼지만 E 는 **밀 수 없는 항목**으로 본다. 호환성은 선언 아니라 검증이다.

### 3.5 쟁점 B-5 — `visitingObjects` stack delete 누락 감지 부재

**증상**: B §4.1 "하나의 Walk 가 끝나면 모든 key 는 delete 되어야 한다(`defer delete(...)` 로 보장)". 그러나 "실제로 defer 누락 시 detect" 하는 테스트 없음. stack overflow 가 prod 에서야 드러난 Cycle 4 버그 재발 가능.

**해결 제안**:
- `analyzer/analyzer_stack_test.go` — 재귀적 타입 100개를 순차 분석 후 `len(analyzer.visitingObjects) == 0` assert. 누락 시 fail.
- Test 이름 `TestAnalyzerVisitingStackEmpty_AfterWalk` 로 의도 명시.
- `t.Parallel()` 금지 (B §6.3 thread-unsafe 명시와 일치).

---

## 4. C 초안 비판 (ttsc Driver — rewrite/sentinel fixture)

### 4.1 쟁점 C-1 — "idempotent rewrite" sentinel 의 fuzz 검증 부재

**증상**: C §5.6.1~5.6.2 sentinel `/* @typia-ttsc-rewritten */` 로 watch-mode 중복 patch 방지. 그러나 **"두 번 실행해도 바이트 일치"** 를 Go 단위 또는 TS 통합 어디서도 검증 안 함. BOM · CRLF · `"use strict"` 미존재 · 첫 줄 주석 포함 등 엣지 케이스에서 깨지기 쉽다.

**해결 제안 (R-C1-*)**:
- Go 단위 `driver/rewrite_idempotent_test.go` — 한 JS 문자열에 `runRewrite` 를 2회 호출 후 결과 바이트 동일 assert.
- TS 통합 `fixtures/idempotent-rebuild/` — `ttsc build` 를 **3회 연속** 실행, `dist/main.js` 바이트 동일. 3회인 이유: 1→2 에서 sentinel 추가, 2→3 에서 추가된 sentinel 중복 방지 두 경로 모두 검증.
- Fuzz: `scripts/fuzz-sentinel.go` — BOM/CRLF/lead-comment 조합 16 variant 에 대해 2회 rewrite 결과 일치.

**CI 단계**:
```yaml
- name: rewrite idempotency (3x)
  run: |
    cd fixtures/idempotent-rebuild
    ../../bin/ttsc-native build && cp dist/main.js /tmp/a.js
    ../../bin/ttsc-native build && cp dist/main.js /tmp/b.js
    ../../bin/ttsc-native build && cp dist/main.js /tmp/c.js
    cmp /tmp/a.js /tmp/b.js && cmp /tmp/b.js /tmp/c.js
```

### 4.2 쟁점 C-2 — FUNCTORS 147 dispatch 의 coverage 게이트 부재

**증상**: C §6.3 현재 dispatch 커버 표 (`module / json / misc / notations / reflect / http` 부분) 에 "❌ Phase 1 이후" 가 대량. **커버 안 된 method 를 사용자가 호출하면 어떻게 되는가** 가 규약에 없음. C §7.1.3 "silent wrong output 금지" 는 있지만 테스트 없음. 특히 `typia.functional.*`, `typia.protobuf.*` 는 v12 에 이미 있는데 v13 preview 초기 사용자가 시도 시 **조용한 skip 으로 런타임 crash**.

**해결 제안 (R-C2-*)**:
- `fixtures/unimplemented-dispatch/` — Phase 0 미지원 method 각 1 호출. `ttsc build` 가 **명시적 diagnostic** 출력 + exit code ≠ 0 임을 TS 통합에서 검증.
- 현재 skip 전략이라면 **최소 warning** 이라도 내야 함. "skip" 은 CI 가 감지 못 하니 regulation 위반 1 순위.
- FUNCTORS 147 대비 현재 dispatched 개수를 `scripts/count-dispatch.sh` 가 print → README badge (`dispatch coverage: 52/147`).

**CI 단계**:
```yaml
- name: dispatch coverage regress
  run: |
    prev=$(cat .dispatch-coverage)  # committed 이전 값
    curr=$(./scripts/count-dispatch.sh)
    [ "$curr" -ge "$prev" ] || { echo "dispatch regressed: $prev -> $curr"; exit 1; }
```

### 4.3 쟁점 C-3 — Path-threading Phase 1 연기의 regression fixture 선행

**증상**: C §7.3.2 "Phase 0 에서는 경로(path) 가 최상위 `$input` 고정. Phase 1 에서 per-property path threading 추가". typia v12 는 이미 `$input.user.name` 식으로 정확한 path 반환. Phase 0 사용자가 `typia.validate<T>(x).errors[0].path` 를 보고 v12 와 다르다고 보고하기 전에 **guard fixture** 먼저.

**해결 제안 (R-C3-*)**:
- `fixtures/path-threading-guard/` — 중첩 객체 에러 시 `path === "$input"` 인 "v12 와 다름" 을 **명시적으로** 단언. Phase 1 구현 시 이 fixture 의 assert 를 `$input.user.name` 로 바꾸고 commit. "언제 v12 동치가 됐는가" 가 git blame 에서 즉시 확인.
- R-0002 확장: 현재 R-0001/R-0002 는 emit 회귀 고정용. **R-0003-path-phase0** 을 공식 ID 로 예약.

### 4.4 쟁점 C-4 — shim 자동생성이 매 bump 마다 silent drift 할 위험

**증상**: C §3.7 `gen_shims` 가 443 LOC. `unsafe.Pointer` 로 layout mirror (C §3.3.2) → "upstream struct 필드 추가/삭제 시 **런타임에만** 실패". 이는 QA 의 최악 시나리오 (컴파일 통과 + 배포 통과 + 사용자 실행 시 crash). C §2.5.1 bump 워크플로는 있으나 **layout drift 자동 검증** 없음.

**해결 제안 (R-C4-*)**:
- `scripts/shim-layout-sanity.go` — 각 shim 이 노출하는 `ExtraFields` 의 `unsafe.Offsetof` 값을 고정 json 으로 commit. bump 후 offset 값 변화 시 명시적 diagnostic ("`checker.Checker.globalRegExpType` offset 168 → 184").
- `fixtures/shim-runtime-smoke/` — 모든 `ExtraMethods` / `ExtraFields` 를 **최소 1회 호출**. 런타임 단계에서 nil segfault 감지. Phase 0 17 ExtraMethods + 2 ExtraFields 모두 커버.

**CI 단계**:
```yaml
shim-layout-sanity:
  needs: [test-go]
  run: |
    go run scripts/shim-layout-sanity.go > shim-layout.new.json
    diff shim-layout.committed.json shim-layout.new.json || {
      echo "upstream struct layout drifted. review required."
      exit 1
    }
```

---

## 5. D 초안 비판 (TS Facade — 외부 동치 fixture)

### 5.1 쟁점 D-1 — `~standard` 두 경로 비동치 (Q1) 는 당장 fixture 화 가능

**증상**: D §5.3 에서 TS `_createStandardSchema` 와 Go `assert.go:63` emit 이 **다른 결과**를 낸다고 자백. `"~standard.validate(badInput).issues[0].path"` 가 두 경로에서 상이. 그런데 해결은 Q1 미해결로 미루기만 함. 이는 **검증 수단 있는데 안 쓰는 중**의 전형.

**해결 제안 (R-D1-*)**:
- `fixtures/standard-schema-parity/` — 10 입력 × 각각 (a) ttsc-emit validator (b) `createValidate<T>(input)` TS functor 두 경로의 `"~standard"` 결과를 deep-equal.
- **지금 당장** 적색 상태로 두는 것이 규약. 이 fixture 가 RED 인 채로 Phase 1 마일스톤 진입 금지. C 의 emit 을 `_createStandardSchema(__fn)` 한 줄로 축소하는 Q1 결정을 강제하는 game-theoretic tool.

**CI 단계**:
```yaml
- name: standard-schema parity
  run: pnpm test:fixture fixtures/standard-schema-parity
  # 현재는 RED — Phase 0 exit 0 허용 (allow-failure), Phase 1 부터 차단
  continue-on-error: ${{ github.ref == 'refs/heads/feat/ttsc' }}
```

### 5.2 쟁점 D-2 — `~standard` vendor/version 변이 검증 부재

**증상**: D §9.6 anti-pattern "vendor 를 패키지 이름으로" / "자체 필드 추가" 금지. 그러나 이를 **grep 으로 잡는 lint 없음**. 사용자(또는 contributor) 가 무심코 `vendor: "typia-nestia"` 로 바꾸면 모든 Standard Schema consumer 호환성이 깨진다.

**해결 제안**:
```bash
# scripts/lint-standard-schema-invariant.sh
set -e
# TS 코드에 vendor: "typia" 이외 금지
! grep -rE 'vendor:\s*"(?!typia")[^"]+"' packages/typia/src packages/ttsc/internal | grep -v test
# version: 1 이외 금지
! grep -rE 'version:\s*[^1]' packages/typia/src/internal/_createStandardSchema.ts
```

### 5.3 쟁점 D-3 — facade marker 3줄 패턴의 구조 lint 부재

**증상**: D §3.1 "세 줄 골격 불변" (오버로드 + 오버로드 + `() => never` throw). D §9.1 "facade 층에 로직 심기 금지". 그러나 검증 수단은 **수동 코드 리뷰** 뿐. contributor 가 "편의상" 구현을 조금만 넣으면 탐지 불가.

**해결 제안 (ESLint custom rule)**:
- D §13.1 `facade-marker-pattern` 를 ESLint custom rule 로 실구현. 예시:
```js
// eslint-rules/facade-marker-pattern.js
module.exports = {
  meta: { type: "problem" },
  create(ctx) {
    if (!/packages\/typia\/src\/(module|json|llm|http|protobuf|misc|notations|reflect|functional)\.ts$/.test(ctx.filename))
      return {};
    return {
      FunctionDeclaration(node) {
        if (!node.body || node.body.body.length === 0) return;
        const hasThrow = node.body.body.some(s => /NoTransformConfigurationError/.test(ctx.sourceCode.getText(s)));
        if (!hasThrow) ctx.report({ node, message: "facade marker must end with NoTransformConfigurationError()" });
      },
    };
  },
};
```
- CI step: `pnpm lint:facade` 독립 job.

### 5.4 쟁점 D-4 — `~standard` path 변환 두 구현의 state-machine 동치 guard 부재

**증상**: D §5.2 `typiaPathToStandardSchemaPath` 4-state parser (Start/Property/StringKey/NumberKey, 134 LOC 의 절반). Go emit 은 `String(e.path).split(".").slice(1)` 로 단순화. D §5.3 에 "두 구현이 동일해야 한다" 는 규약만 있고, **state-machine 단위 테스트** 없음. 이는 parser 인데 parser 테스트가 없다.

**해결 제안**:
- `packages/typia/test/path-parser.test.ts` — 30 입력 케이스 (`"$input"`, `"$input.foo"`, `"$input.foo[0]"`, `"$input[\"bar\"]"`, `"$input.foo[0][\"bar\"].baz"`, 공백 포함 key, bracket escape, 숫자 키, 혼합 깊이 등) × 기대 `PathSegment[]`.
- `packages/ttsc/internal/engine/emitter/path_parse_test.go` — 동일 입력 × 동일 기대값. 두 implementation 을 **같은 fixture 데이터**로 구속.
- Parser fuzz: `scripts/fuzz-path.go` — random path 생성 → 두 구현 결과 deep-equal. 발견된 discrepancy 는 R-1.3-D-0003 fixture 로 승격.

### 5.5 쟁점 D-5 — LOC 목표 7,544 → 3,500 의 측정 스크립트 부재

**증상**: D §3.7 표 (v12 7,544 / v13 ≤3,500 / v14 ≤3,000). "LOC" 정의 모호 (주석 포함? test 제외?). 실제 측정 스크립트가 없어 매 PR 에서 drift 감지 불가.

**해결 제안**:
```bash
# scripts/measure-loc.sh
set -e
target=3500
actual=$(find packages/typia/src -name '*.ts' -not -path '*/node_modules/*' \
  | xargs wc -l | tail -1 | awk '{print $1}')
echo "typia LOC: $actual (target ≤ $target)"
[ "$actual" -le "$target" ] || { echo "LOC budget exceeded"; exit 1; }
```
- CI 에 `loc-budget` job 추가. 현재 v12 기준 7,544 를 base 로, PR 단위로 **음의 방향 drift 강제**.
- 147 functors (D §3.4) 수도 `count-functors.sh` 로 측정. 줄어드는 방향 허용, 늘 때만 explicit approval.

---

## 6. F 초안 비판 (Release/DX — CI matrix, 재현 빌드)

### 6.1 쟁점 F-1 — 재현 빌드 shasum 검증이 규약뿐, CI 에 부재

**증상**: F §2.3 "동일 커밋에서 두 번 빌드한 바이너리가 `shasum -a 256` 일치" 를 규약화. 그러나 `.github/workflows/release.yml` 개정 예시 (F §5.4) 에서 **두 번 빌드 + diff** 가 없다. 즉 재현성은 선언적 규약일 뿐 집행되지 않는다.

**해결 제안**:
```yaml
# release.yml build job 에 추가
- name: reproducibility check
  run: |
    go build -trimpath -ldflags "$FLAGS" -o /tmp/ttsc-a ./cmd/ttsc
    go build -trimpath -ldflags "$FLAGS" -o /tmp/ttsc-b ./cmd/ttsc
    shasum -a 256 /tmp/ttsc-a /tmp/ttsc-b
    cmp /tmp/ttsc-a /tmp/ttsc-b  # 다르면 fail
```
- 모든 릴리스에 `provenance.json` + `SHASUMS256.txt` 의 2 회 빌드 일치 기록 첨부.

### 6.2 쟁점 F-2 — 5.3 의 3 OS × 3 Node matrix 가 Phase 1 으로 연기됨

**증상**: F §5.3 "Phase 0 은 Linux 단일 허용, Phase 1 Week 1 에 Windows·macOS 추가". C §5.6.3 `findSourceForOutput` 이 slash-delimited suffix 매칭 → **Windows path** 에서 이미 5-Cycle 에서 터진 이력 있음. Phase 0 Linux-only 는 회귀 재발을 유예하는 것.

**해결 제안**:
- Phase 0 마지막 주 (= 지금) 부터 **matrix 축소판 도입**: `ubuntu-latest + windows-latest` 2 OS, Node 24 단일. 비용 증가 최소화 + Windows path 회귀 감시.
- F §5.8 월 $50 상한은 matrix 축소판 9→6 조합으로 유지 가능.

**CI 단계**: 지금 즉시 `.github/workflows/test.yml` 에 Windows job 추가 (Node 24 만). macOS 는 Phase 1 로 유지 OK.

### 6.3 쟁점 F-3 — Setup wizard idempotency 검증 fixture 부재

**증상**: F §6.2 "setup 은 N 번 실행해도 같은 결과". F §6.4 dry-run. 그러나 idempotency 를 실제 반복 호출로 검증하는 fixture 가 F §5 CI job 에 없음. 현재 `@typia/typia/src/executable/TypiaSetupWizard.ts` 는 복잡한 분기 + 파일 시스템 mutation 이라 "재실행 동치" 가 쉽게 깨진다.

**해결 제안 (R-F3-*)**:
- `fixtures/setup-wizard-idempotent/` — 빈 프로젝트 + `package.json` + `tsconfig.json` 기본. `npx typia setup --runtime=ttsc` 2회 실행 후 `package.json` + `tsconfig.json` 바이트 동일.
- `fixtures/setup-wizard-migrate-v12/` — v12 구성 (ts-patch + `prepare` 스크립트) 시작 → 1회 setup 후 ttsc 구성 → 2회 setup 에서 no-op.

**CI 단계**:
```yaml
setup-wizard-idempotency:
  needs: [build]
  runs-on: ubuntu-latest
  steps:
    - run: cp -r fixtures/setup-wizard-idempotent /tmp/proj
    - run: cd /tmp/proj && npx typia setup --runtime=ttsc
    - run: cd /tmp/proj && cp package.json package.json.1 && cp tsconfig.json tsconfig.json.1
    - run: cd /tmp/proj && npx typia setup --runtime=ttsc
    - run: cd /tmp/proj && cmp package.json package.json.1 && cmp tsconfig.json tsconfig.json.1
```

### 6.4 쟁점 F-4 — 7 platform optionalDependencies 플랫폼-당 1 회 설치 검증 부재

**증상**: F §3.3~3.4 optionalDependencies 모델 + launcher resolution 우선순위. 그러나 **실제 Linux → macOS → Windows 세 OS 에서 `@typia/ttsc` 를 fresh install 후 `ttsc --version` 이 성공**하는 smoke 가 규정되지 않음. `os`/`cpu` filter + optional fail-tolerant 동작은 npm 버전/pnpm 버전/yarn 버전마다 미묘한 차이가 있어 **패키지 매니저 3 × OS 3 = 9 조합** smoke 필요.

**해결 제안 (R-F4-*)**:
- `fixtures/install-smoke/` — 매트릭스 CI: `{ubuntu, macos, windows} × {npm, pnpm, yarn}` 9 조합. 각 조합에서 `init project → install @typia/ttsc@next → ttsc --version` 이 exit 0.
- GitHub Actions `matrix` 로 구현 (release.yml 에 post-publish step). 실패 시 npm publish rollback 은 불가하지만 **Discord 긴급 알림 + README 경고 배지** 트리거.

### 6.5 쟁점 F-5 — `canary` 파이프라인 매일 auto-publish 의 skip 행동 명시 부재

**증상**: F §5.5 "실패해도 release 차단하지 않음". 그러나 "실패" 판단 기준 (test red? build red? publish red?) 이 없음. 사실상 **skip-by-default** 의 위험 있음 — canary 가 매일 "소리 없이" 실패하고 아무도 모른다.

**해결 제안**:
- canary job 에 `if: failure()` 로 Discord webhook 알림 (E/F 공동 관리 채널).
- 연속 3 일 실패 시 `canary` dist-tag 를 **직전 성공 버전으로 rollback** 하는 자동 보정 step.
- 실패 이력을 `metrics/canary-history.json` 에 주간 append — 투명성 원칙 (F 원칙 F5 "공개 가능한 실측").

---

## 7. 초안 간 모순 (검증 공백)

### 7.1 `~standard` emit 단일 출처 (A vs C vs D)

- **D Q1**: Go emit 을 `_createStandardSchema(__fn)` 한 줄로 축소 제안.
- **C §7.3.3**: "외부 런타임 의존 없음 (regex 6.1 `_createStandardSchema.ts` 동등 로직 복제)" — 인라인 유지 입장.
- **A BND-API-04**: "결과값 동치" 요구 — 두 경로 동치만 보장되면 구현 자유.

**QA 입장**: 동치 검증은 fixture (§5.1 R-D1-*) 로 가능하지만, **인라인 복제 유지 시 두 곳의 drift 가 영구 리스크**. D 제안 채택을 Sub-3 에서 확정, C 가 emit 재작성, E 는 R-D1 fixture 로 guard.

### 7.2 13 vs 9 namespace (A Q2 vs D §1.2 ·4 vs F §4.6)

- **A BND-NS-01**: 실체 9 (root + 8)
- **D §1.2 원칙 4**: "13 namespace 유지"
- **F §4.6**: "9 typia 패키지 + @typia/ttsc + 7 platform = 17"

숫자 3 개가 서로 다른 축으로 혼재. Sub-3 에서 **축 3 개 각각 이름 부여**:
- `NS-9` (typia import namespace)
- `FEAT-13` (기능 영역, wiki 15 방식)
- `PKG-17` (npm 배포 단위)

### 7.3 `@typia/core` v13 상태 (A vs B vs F)

- **A BND-PKG-04**: "v13 alpha 까지 TS 유지, v13 stable 에 Go 포팅 완료, deprecated shell 유지"
- **B §1.1**: "Phase 0 Go LOC 4,459 / typia v12 core 30,307 LOC" — Phase 0 는 아직 **6.8%**.
- **F §4.1**: v13.0 GA = 2027 Q2 말.

**모순**: 14개월 안에 30K LOC 포팅 완료 가능성이 B §1.1 의 현재 속도로는 불명. A 가 "v13 stable 까지 완료" 라고 쓴 것은 **Phase 0 에서 검증된 속도(24 주)** 기준으로 E 가 재검토 요구.

**QA 제안 (fixture-driven)**: `metrics/` 디렉터리에 주간 "포팅 LOC" `ported-loc.json` 를 자동 commit, 이를 plot → **선형 외삽으로 마감일 예측**. 예측이 v13 stable 을 넘으면 자동 issue 생성 (월간 alert).

### 7.4 unplugin 의 운명 (A vs C vs F)

- **A BND-PKG-08**: unplugin TS 유지, 내부를 ttsc 바이너리 spawn.
- **C**: unplugin 언급 없음 (관장 밖).
- **F**: 번들러 어댑터 plugin 관련 CI 가 `experiments.yml` 뿐.

**공백**: unplugin 이 ttsc spawn 하는 **cross-language boundary** 는 IPC 오버헤드 재등장 위험인데 C 가 책임 안 지는 중. E 제안: `fixtures/unplugin-vite-smoke/` 등 8 번들러 × 최소 1 fixture (`typia.is<T>(x)`) → `pnpm test:unplugin` matrix.

### 7.5 deprecation throw 시점 (A vs D)

- **A BND-API-03**: `"typia/lib/transform"` v13 에서 "throw 또는 noop + 안내"
- **D §3.6**: "v13.0 → v13.2 stub throw, v13.3 완전 제거"

**미묘한 불일치**: A 는 "noop or throw" 선택지 열어둠, D 는 throw 확정. QA 관점: **throw 가 행동 검증 가능**, noop 은 사용자가 "왜 아무 일도 안 일어나는가" 혼란. Sub-3 에서 throw 확정 + `fixtures/deprecated-transform-import/` 로 guard.

### 7.6 Go 버전 1.26 vs linkname 제한 리스크 (C vs F)

- **C §2.3**: "Go 1.26 확정. Go 1.27 linkname handshake 리스크 R1 ... Phase 0 Week 3 spike 가 이것"
- **F §5.2**: `go-version: '1.26'` 하드코딩.
- **C §3.3.2**: "`ExtraFields` 는 unsafe.Pointer 로 struct 레이아웃 복사 ... 런타임에만 실패".

**공백**: Go 1.27 이 2026 말 출시되면 shim 전략 붕괴 가능성. 현재 "spike" 만 있고 **"1.27 환경에서 동작 검증 fixture"** 가 없다. F §5.2 이 "1.26" 으로 고정해버려 1.27 실험 환경이 주기적으로 돌지 않는다.

**QA 제안**:
- `.github/workflows/test-go-canary.yml` — 주간 cron 으로 **Go tip (nightly) / Go 1.27-rc / Go 1.26 stable** 3 버전 smoke. PASS 는 informational, FAIL 은 Discord 알림. 리스크 선감지 메커니즘.
- 이는 C 의 spike 를 항시 돌아가는 canary 로 승격한 것. E 소관.

### 7.7 규약-수치 실제값 누락 패턴 (전 draft)

검증할 값이 선언돼 있으나 "실제 측정 방법" 이 없는 항목 수 (본 리뷰에서 발견):

| draft | 수치 규약 | 측정 스크립트 여부 |
|---|---|---|
| A | LOC 표 (v14 TS 20K / Go 150K) | 없음 |
| B | Phase 0 Go 4,459 LOC / test 965 | 없음 (실측 스냅샷 수동) |
| C | patches ≤ 3 / 파일당 6줄 이하 | 없음 |
| D | typia src ≤ 3,500 LOC / deps ≤ 4 | 없음 |
| F | binary ≤ 40MB / runner $50/월 | 없음 |

합계 10 개 수치 규약 중 **측정 스크립트 0** — 이는 Sub-2 수준의 공통 공백. Sub-3 진입 시 E 가 `scripts/metrics/*.sh` 10 개를 일괄 도입해 주간 `metrics/YYYY-Wnn.json` commit 으로 자동화.

---

## 8. Sub-3 개정 합의 요청

### 8.1 신규 표준 합의 (QA 공통)

1. **Regression fixture ID 체계 표준화**: `R-{mega}.{sub}-{role}-{seq}`. 예: `R-1.3-E-0001`. wiki 본 index 에 등록.
2. **"검증 수단 없는 규약" 금지**: Sub-3 이후 신규 규약은 PR 내 **실행 가능 CI step** 수록 의무. step 없으면 reviewer 거절 권한.
3. **skip/TODO/.skip/placeholder_test.go 감지 lint** 를 E 관장 하에 전 draft 적용 (§3.3 B-3 해결책).
4. **LOC / binary size / dispatch coverage 정량 목표 모두 스크립트화** (§2, §4, §6).

### 8.2 draft 별 필수 수정

| draft | 최소 수정 | 신규 fixture ID |
|---|---|---|
| A | Q2 (13 vs 9) 해소, API parity fixture 규약 추가 | R-1.3-A-0001 (behavior-parity 50), R-1.3-A-0002 (tsconfig-compat) |
| B | analyzer placeholder → fake checker, 가정 3곳 fixture 화 | R-1.3-B-0001 (IR invariants), R-1.3-B-0002 (template-literals), R-1.3-B-0003 (type-key-collision) |
| C | idempotent rebuild 3x, dispatch coverage badge, path Phase0 guard | R-1.3-C-0001 (idempotent-rebuild), R-1.3-C-0002 (unimplemented-dispatch), R-1.3-C-0003 (path-threading-guard) |
| D | Standard Schema parity RED fixture 즉시 도입, facade-marker ESLint rule, vendor/version grep lint | R-1.3-D-0001 (standard-schema-parity), R-1.3-D-0002 (facade-marker) |
| F | reproducibility check CI step, Windows matrix 즉시, setup idempotency fixture | R-1.3-F-0001 (reproducibility), R-1.3-F-0002 (setup-wizard-idempotent) |

### 8.3 교차 모순 우선순위 (Sub-3 의제)

1. `~standard` emit 단일화 → D 안 채택, C emit 재작성, R-1.3-D-0001 로 guard.
2. namespace 축 3 개 (NS-9 / FEAT-13 / PKG-17) 용어 분리 — **문서 linter** 로 강제.
3. `@typia/core` 포팅 속도 주간 metric — 자동 issue 생성.
4. unplugin × 8 번들러 smoke — `experiments.yml` 에 통합.
5. deprecated transform throw 확정 + fixture.

### 8.4 CI 종합 matrix (9 job 제안)

```yaml
jobs:
  # 기존 6
  build:        # TS + Go native build
  test-go:      # go test ./... + invariants fuzzing (-count=100)
  test-ts:      # pnpm test (Ubuntu + Windows Node24)
  release:
  website:
  spell-check:
  
  # 신규 3 (E 관장)
  api-parity:            # R-1.3-A-0001 v12 vs v13 emit diff
  regression-fixtures:   # R-1.3-{A..F}-* 전체
  repro-build:           # F §2.3 shasum 2회 일치
```

### 8.5 E 의 "항상 PASS" 공식 발표

Sub-3 합의 시점부터 main/feat 브랜치 모든 commit 에서:
- `pnpm test` 로컬 PASS 필수
- skip/TODO 코드 머지 금지 (lint 차단)
- 새 규약 PR 에 CI step 수록 없으면 reviewer 자동 거절 권한
- regression fixture 삭제 PR 은 wiki index commit 동시 수정 없으면 자동 거절

**끝맺음**: 본 E 리뷰는 5 초안의 방향성에 동의하되, **"규약을 실행하는 수단"** 이 전반적으로 부재함을 지적한다. Sub-3 에서 규약 추가보다 **기존 규약의 집행 수단(CI · fixture · lint) 충원** 이 우선. "PASS 되게 만든 무의미 테스트" 를 피하는 유일한 방법은 "regression fixture 가 먼저, 코드가 나중" 원칙을 Sub-3 에서 5 역할 전부 합의하는 것.
