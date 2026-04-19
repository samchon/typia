# C. ttsc Driver Lead — Cycle 3 개정본 (Sub-3 Revision)

> 작성: 2026-04-19 (Mega-1 Sub-3, Cycle 3)
> 전신 문서: `cycle-01-C-ttsc-driver.md` (1,357 LOC Cycle 1 초안)
> 반영: `cycle-02-A/B/D/E/F-review.md` 의 "C 초안 비판" + Sub-3 합의 요청
> 역할: ttsc Driver Lead (역할 C)
> 관장 범위: typescript-go 통합, shim 자동생성, 최소 patch 정책, Go driver 계층
> (program/visit/rewrite/cleanup), CallExpressionTransformer 이식, 13 Emitter,
> JS rewrite (IIFE 치환 / unused import / sentinel / sourcemap Phase 1).
> 상위 문서: [wiki/08-tsgo-master-plan/](../../wiki/08-tsgo-master-plan/) — 실행 규약
> 형제 문서(개정판): `cycle-03-A-revision.md`, `cycle-03-B-revision.md`,
> `cycle-03-D-revision.md`, `cycle-03-E-revision.md`, `cycle-03-F-revision.md`
> (Sub-3 시점 병행 작성)

본 개정본은 Cycle 1 C 초안을 유지하되, Cycle 2 의 5 인 교차 리뷰(A/B/D/E/F) 에서
C 초안에 제기된 비판 20 여 건과 **Sub-3 합의 요청** (C ↔ A/B/D/E/F 5 쌍 계약) 을
반영한 것이다. 본 개정에서는 다음 7 축을 중심으로 손댄다.

1. **Standard Schema emit 인라인 폐지** (§7.3.3) — TS `_createStandardSchema(__fn)`
   한 줄 호출로 축소. D §5.3 + B §S-3 + A §4.2 + F §5.2 + E §4.7 일치 합의.
2. **IR → emitter 경계 명문화** (§7.0 新, §6.2) — `EmitProgrammer(kind, valueExpr,
   schema, options)` 단일 entry + B 12 bucket dispatch. C ↔ B Sub-3 계약.
3. **재귀 방문 guard 일반화** (§7.1.7 新) — 모든 재귀 emitter 가 `map[*ObjectType]bool`
   visiting set 을 상태로 소유. B §S-2 합의 사항 (R-0002 재발 방지).
4. **Phase 0 미지원 kill-gate 표** (§1.4.1 新) — sourcemap/watch/Bun/Edge/linux-arm/
   StdSchema v2 각 항목 해제 조건을 정량 기준 1 개 이상으로 고정.
5. **tsgo 저장소 형태 전환** (§2.1 개정) — F §4.3 Windows runner symlink 문제 반영.
   **Phase 1 Week 1 에 submodule 로 확정**, `go.work` 는 local-only 유지.
6. **shim 재생성 CI 정책** (§3.1.2 新) — F §2.4 의 "자동 PR" 을 **CI fail + 수동
   commit** 로 교정. 공격 표면 축소.
7. **go.work `replace directive` 제거 시점** (§2.2 개정) — Phase 1 말 (ttsc 1.0 GA)
   로 고정. F §3.1 Phase 2 안 대비 한 Phase 앞당김.

아래 개정 이력 표 (§0.1) 가 원 §번호 → 개정 내용을 1:1 매핑한다.

---

## 0.1 개정 이력 표 (원 §번호 ↔ 변경 내용)

| 원 § | 개정 내용 | 근거 (Cycle 2 리뷰 위치) | 종류 |
|---|---|---|---|
| §0 | 맥락 요약 5 항목 중 **3(shim) / 4(IR 경계)** 문구 조정 | B §S-4, F §4.1 | 조정 |
| §1.1 | "비소유 경계" 표에 B ↔ C **IR handle 변환 지점** 한 줄 추가 | A §7.3, B Q-B2 | 추가 |
| §1.2 | 핵심 원칙 2 ("emit 결과에 runtime dependency 없음") 정의를 **"`typia/lib/internal/*` 외 external"** 로 한정 | D §4.1, B §D-1(d), A §3.2 | 정정 |
| §1.4 | Phase 0 Non-goals 에 **kill-gate 표** (§1.4.1) 부착 | C-self §8.1, A Q7, E §6.4 | 추가 |
| §2.1 | **symlink → submodule 전환** (Phase 1 Week 1) | F §4.3, §7.4 | 개정 |
| §2.2 | `replace directive` 제거 시점 = **Phase 1 말** (v13.0 GA) | F §3.1, C §6.2 | 정정 |
| §2.3 | Go 1.27 linkname 리스크 대응 절 확장 (Phase 0 Week 3 spike) | B §2.3, F §3.1 | 확장 |
| §3.1 | **CI diff-guard (shim-drift-check)** 규약 신설 (§3.1.2) | F §4.1, C §6.1 | 추가 |
| §3.1 | **자동 PR 금지, CI fail + 수동 commit** 정책 (§3.1.3) | F §4.1 반박, C §6.1 | 추가 |
| §3.4 | engine 에서 shim 금지 예외 (`analyzer/shim_type_string.go`) 의 **driver 이동 계획** 명시 | B §C-3, E §3.3 | 계획 |
| §4.1 | "patch ≤ 3" 상한에 **cross-compile 플랫폼 패치 별도 카운트** | F §4.2(d) | 정정 |
| §4.3 | patch 0 유지 (ttsc 1.0 GA 까지) — 자체 기준 **tsgonest 보다 엄격** | C-self §8.2 | 강화 |
| §6.2 | `EmitProgrammer(kind, ...)` **단일 entry** 명문화 + 12 bucket dispatch | B §S-2(경계), C-self §3 | 개정 |
| §6.3 | 커버리지 표 + 각 row 에 **Phase 1 완성 기한** 명시 | D §4.3, E §4.5 | 확장 |
| §7.0 (新) | IR→emitter 경계 + `EmitProgrammer` 단일 entry 절 신설 | B §C-1, C-self §3.2 | 신설 |
| §7.1.7 (新) | 재귀 방문 emitter 의 `map[*ObjectType]bool` visiting set 소유 규약 | B §S-2 | 신설 |
| §7.3.3 | **Standard Schema emit 인라인 폐지 → `_createStandardSchema(__fn)` 호출** | D §4.1, B §S-3, A §4.2, F §5.2 | **대폭 개정** |
| §8.5 | sourcemap Phase 1 kill-gate 2 안 유지 + **Week 4 정량 지표** 명시 | E §6.4, A §3.2 | 확장 |
| §9 | 코드 근거 표 일부 갱신 (assert.go:63 new LOC, rewrite.go 스키마 주입) | D §4.4 | 갱신 |
| §10 | 안티패턴에 **A7 (자동 PR 봇 main 접근) / E6 (Standard Schema inline 복제)** 추가 | F §4.1, D §4.1 | 추가 |
| §11 | 검증 체크리스트에 **§11.7 shim drift / §11.8 Standard Schema parity** 추가 | F §4.1, E §4.7 | 추가 |
| §12 | 미해결 질문 중 **Q-C2B-1/2/3, Q-C2D-2, Q-C2F-1/2 해결됨** 표기 | B, D, F 답 수신 | 클로즈 |
| §부록 B | 숫자 요약에 **4 축 용어 표** (namespace 9 / emitter 13 / FUNCTORS 147 / bucket 12) 추가 | C-self §2.1, A §7.2, B §M-1 | 추가 |
| §부록 G | self-critique 5 → **7** (Critique-6: 자동 PR 보안 공격면, Critique-7: 자체 IR drift 감지 CI 없음) | F §4.1, B §D-1 | 확장 |

---

## 0. 맥락 요약 (개정판 — 5 항목 중 3·4·5 문구 조정)

본 문서는 `conventions/mega-cycle-1/cycles/` 의 **Sub-3 (Cycle 3) 개정본** 중
역할 C 의 것이다. Cycle 1 초안이 성문화한 행동 양식을 **유지** 하되, Cycle 2
교차 리뷰에서 제기된 20 여 비판 + C ↔ 5 타 역할 계약 요구사항을 통합한다.

핵심 맥락 5 개 (개정 반영):

1. **ttsc 는 typescript-go(tsgo) 위에 얹힌 Go 네이티브 driver**. Node bridge 없음,
   단일 Go 바이너리. 사용자 명령은 `ttsc --build` / `ttsc transform --file=...`
   / `ttsc -p tsconfig.json`. (Cycle 1 과 동일)
2. **emit 전략은 경로 B (tsgonest 모델)** 채택. tsgo 의 public Emit + WriteFile
   콜백으로 `.js` 텍스트를 가로채 문자열 수준 patch. `patches/` **0 개** 유지.
   (Cycle 1 과 동일; C-self §8.2 에서 ttsc 1.0 GA 까지 불변으로 승격)
3. **shim 12 패키지 (4,523 LOC 자동생성)** 가 typescript-go internal 에 대한
   `go:linkname` 게이트웨이. `tools/gen_shims/main.go` 가 `extra-shim.json` 을
   읽어 재노출. **Sub-3 개정: CI diff-guard `shim-drift-check` job 신설**
   (§3.1.2). 자동 PR 이 아니라 **CI fail** 로 경보 (§3.1.3).
4. **IR 은 B 역할 소유** (`internal/engine/metadata/`, `internal/engine/analyzer/`).
   C 는 이를 소비하는 **emitter 13 파일** 과 **driver 5 파일** 만 담당.
   **Sub-3 개정: 경계 통과 단일 entry = `EmitProgrammer(kind, valueExpr, schema,
   options)`** (§7.0, C ↔ B 계약).
5. **사용자 관점 비대칭 안정성**: typia v12 사용자 API (`typia.is<T>(input)` 등
   FUNCTORS **147**) 가 한 글자도 바뀌지 않도록 보장 + tsconfig `plugins[]`
   스키마 호환. 빌드 명령만 `tsc` → `ttsc` 전환. **Sub-3 개정: Standard Schema
   emit 은 v12 와 동일하게 `_createStandardSchema(__fn)` functor 호출 방식**
   (§7.3.3). v12 부터의 소비자가 `"~standard"` 계약에서 관측 가능한 차이를
   발견하지 않도록.

이 5 개에 대한 추가 반대/수정 의견은 Cycle 4 integration audit 에서 수렴.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 관장 범위 (C 역할 소유 경계) — Sub-3 개정

Cycle 1 표 유지. **추가**: 경계 통과 지점(IR ↔ shim) 한 줄 명시.

| 영역 | 위치 | 파일 |
|---|---|---|
| typescript-go 통합 | `packages/ttsc/go.work`, `go.mod`, `third_party/typescript-go` (submodule; §2.1 개정) | 5 |
| shim 자동생성 | `packages/ttsc/tools/gen_shims/`, `packages/ttsc/shim/*/` | 1 + 12 |
| Driver — Program 로드 | `packages/ttsc/internal/driver/program.go`, `host.go` | 2 |
| Driver — 방문/매칭 | `packages/ttsc/internal/driver/visit.go` | 1 |
| Driver — Rewrite | `packages/ttsc/internal/driver/rewrite.go`, `cleanup.go` | 2 |
| CallExpressionTransformer 이식 | `packages/ttsc/cmd/ttsc/dispatch.go` | 1 |
| Emitter (13 분야) | `packages/ttsc/internal/engine/emitter/*.go` | 13 |
| CLI 진입 | `packages/ttsc/cmd/ttsc/{main,build,transform}.go` | 3 |
| **IR→shim handle 변환 (Sub-3 추가)** | `packages/ttsc/internal/driver/type_adapter.go` (Phase 1 이동 예정) | 1 |

**비소유 경계 (다른 역할)** — Cycle 1 유지:

- MetadataSchema IR, Analyzer, Collection → **B** (Go Engine Lead)
- `@typia/typia` TS facade · 13 namespace declaration → **D** (TS Facade Keeper)
- Go unit test / TS integration test 전략 → **E** (QA/Test Lead)
- pnpm workspace, 7 플랫폼 optionalDependencies, 배포 → **F** (Release/DX Lead)
- 경계 원칙(사용자 API 불변, edge runtime 호환) 자체의 정의 → **A** (Boundary Architect)

**Sub-3 추가** — C ↔ B 경계: analyzer 는 `driver/type_adapter.go` 가 `*shimchecker.Type`
→ `TypeKey` 로 변환한 후에만 engine 호출 허용. `analyzer/shim_type_string.go` 의
shim 의존은 Phase 1 에서 driver 로 이동 (B §C-3 합의).

### 1.2 핵심 원칙 (C 역할 자체 원칙 6 조) — 1 문구 조정

1. **shim 우선, patch 최후** — (Cycle 1 동일)
2. **emit 결과에 runtime dependency 없음** — **Sub-3 개정**: "없음" 의 정의를
   **"`typia/lib/internal/*` 외 external 없음"** 으로 한정. `_createStandardSchema`
   처럼 typia 자체 public export 경로는 허용 (D §3.4 규약 5 exports 계약).
   근거: D §4.1, B §D-1(d), A §4.2.
3. **Edge runtime 호환** — (Cycle 1 동일)
4. **문자열 rewrite + marker 기반** — (Cycle 1 동일)
5. **idempotent rewrite** — (Cycle 1 동일)
6. **typia v12 파일명 1:1 대응** — (Cycle 1 동일)

### 1.3 원칙 간 충돌 해결 우선순위 — (Cycle 1 동일)

### 1.4 Non-goals (Phase 0 범위 밖) — Sub-3 정리

- **sourcemap 생성** — Phase 1 Week 4 측정 (§1.4.1 kill-gate D5)
- **incremental build cache** (`.ttsc-cache/`) — Phase 1
- **watch mode 최적화** — Phase 1
- **functional/protobuf/llm/random namespace** — Phase 1~2
- **assert path threading per-property** — Phase 1
- **validate per-property errors array** — Phase 1
- **sourcemap-aware matchParen** — Phase 1
- **upstream typescript-go 공식 IPC** (PR #711) — Phase 5+

#### 1.4.1 Phase 0 미지원 kill-gate 표 (Sub-3 추가)

| 미지원 항목 | Phase 0 상태 | Phase 1 해제 조건 (정량) | 결정 주체 |
|---|---|---|---|
| sourcemap | 없음 (§8.5.1) | Week 4 측정 D5: 평균 위치 오차 ≤ 1 줄 ∧ breakpoint 적중률 ≥ 90% | C + E |
| watch mode | 없음 (§8.9) | Week 2 시연: 10-file repo 에서 평균 rebuild < 500 ms | C + E |
| Bun runtime | 없음 (E Q-E4) | Phase 1 fixture 카테고리 1 개 + Node 병행 pass | E + F |
| Edge runtime smoke | 없음 | Cloudflare Workers 1 fixture 통과 | E + A |
| linux-arm (32bit) | 없음 (F §3.1) | 커뮤니티 설문 응답 ≥ 20, 자원 제공 확인 | F |
| Standard Schema v2 | 없음 (D §5.4) | 스펙 정식 릴리스 후 3 개월 | D |
| typia.functional.* | skip 에러 (§6.3) | Go IR function schema 활성 + fixture 11-13 통과 | B + C + E |
| typia.protobuf.* | skip 에러 | wire format fixture + Google protobuf-js 상호 검증 | C + E |
| typia.llm.* | skip 에러 | 6 provider 중 openai + anthropic 2 개 통과 | C + E |

**규약 1.4.1**: kill-gate 는 **정량 기준 1 개 이상** 필요. "필요할 것 같아서"
추가 금지. Phase 1 Week 0 (= Phase 0 종료 직후) 에 본 표를 `wiki/08-tsgo-master-plan/`
에 복사하여 Phase 1 sprint planning 의 진입/퇴출 기준으로 사용.

---

## 2. typescript-go 통합 규약 (Sub-3 개정 — F §4.3 반영)

### 2.1 저장소 형태 — **Phase 1 Week 1 에 submodule 전환** (개정)

**Cycle 1 초안**: symlink + `third_party/` + `.gitignore` + `bootstrap.sh`.

**Cycle 3 개정**: F §4.3 의 Windows runner symlink 제약(`mklink` 가 Developer Mode
필요, release runner 의 `windows-latest` 에서 resolve 실패) 근거로 **submodule**
로 확정. 전환 시점은 **Phase 1 Week 1**.

```
<repo-root>/
├─ packages/ttsc/
│  ├─ go.work          (Phase 0: 로컬 use; Phase 1+: 선택)
│  ├─ go.mod           (replace directives → Phase 1 말 제거)
│  └─ shim/…
└─ third_party/
   └─ typescript-go/   (git submodule, shallow clone)
```

**Phase 0 유예 (현재)**: 기존 symlink 로컬 환경은 그대로 동작. 개발자가 수동으로
clone 해 둔 경로를 `.gitignore` 가 숨김. `bootstrap.sh` 는 **Phase 1 Week 0 까지만**
존재하다가 submodule 전환 후 삭제.

**근거**:
- **Windows runner 지원 의무** (F §4.3(a)): `windows-latest` 의 `win32-x64` /
  `win32-arm64` cross-compile 빌드가 symlink resolve 실패 시 7 플랫폼 matrix 붕괴.
- **CI 신뢰성 > bump 유연성**: `actions/checkout@v4 submodules: true` shallow clone
  추가 부하 < 30 초. 로컬 개발 시 `git submodule update --init` 한 줄.
- **bootstrap.sh PowerShell 비호환 리스크 제거**.

**규약 2.1.1 (Sub-3 신설)**: Phase 1 Week 1 에 다음을 병행 실행한다.
1. `.gitmodules` 에 `third_party/typescript-go` 등재 (shallow)
2. `packages/ttsc/go.work` 의 `use ../../third_party/typescript-go` 는 **로컬
   전용** 명시 주석 추가. CI 는 `go.work` 없이 `go build` 가 동작하도록 한다.
3. `.github/workflows/build.yml` / `release.yml` / `test.yml` 의 `actions/checkout@v4`
   에 `submodules: true`, `fetch-depth: 1` 추가
4. `bootstrap.sh` 삭제

**규약 2.1.2**: Cycle 1 초안의 "반대의견 수용 여지: F 가 submodule 이 CI 에 더
낫다고 판단 시 전환 가능" 조항은 F §4.3 의 판단 기록으로 **이행 완료** 로 표기한다.

### 2.2 go.work / go.mod 정책 (Sub-3 개정)

- **`go.work`** (Phase 0~1):
  - Phase 0: 로컬 개발 파일. `.gitignore`.
  - Phase 1 Week 1 이후: 로컬 전용 주석 + `.gitignore` 유지.
  - CI 는 `GOFLAGS='-workfile=off'` 또는 `go.work` 없는 clean checkout 으로 빌드.
- **`go.mod`** (Phase 0~1):
  - Phase 0~1 중: 모든 `github.com/microsoft/typescript-go/shim/<pkg>` 에 대해
    `replace` directive 로 `./shim/<pkg>` 지정.
  - **Phase 1 말 (= ttsc 1.0 GA, v13.0 release)**: upstream typescript-go 정식
    tagged release 대기. 나오면 **`replace` 제거** 하고 `require github.com/microsoft/typescript-go vX.Y.Z`
    로 전환. shim 서브모듈도 publish 또는 main module 내부로 통합.
- **Production mode 조건 (Sub-3 명시)**:
  - (a) upstream typescript-go 가 tagged release 를 발행 — **F §3.1 의 Phase 2 안
    에서 Phase 1 말로 앞당김**. 근거: v13 GA 시점까지 replace 가 남으면 F §2.3
    의 `-mod=vendor` 재현 빌드와 구조적으로 충돌.
  - (b) 충족 안 되면 GA 1 분기 연기 또는 "beta 지속" 상태로 Phase 1 말 유지 후
    release 재평가.

**규약 2.2.1 (Sub-3)**: `replace directive` 의 수명은 v13.0-beta 기간으로 한정한다.
GA 시점에 제거되지 않으면 F §2.3 의 재현성 규약 `F2` 를 정면 위반하므로 **release
차단 사유**.

### 2.3 Go 버전 정책 (Sub-3 확장)

- **Go 1.26** 유지.
- **Go 1.27 linkname handshake 리스크** — Cycle 1 의 spike 계획 유지 + **Phase 0
  Week 3 spike 결과는 wiki/08/09-risk-register.md R1 에 기재 의무**.
- spike 결과 `go:linkname` 제한 도입 감지 시 대안:
  - (i) Go build flag 동결 (`-buildvcs=false`, `-ldflags '-checklinkname=0'`)
  - (ii) 대안 shim 전략 (effect-ts 스타일 직접 patch) 실증 — Phase 0 spike
  - (iii) upstream typescript-go 에 public API export 요청 (`shim/checker` 17 개
    symbol 을 1 년 이내 export 목표)

### 2.4 바이너리 빌드 — 용어 구분 (Cycle 1 동일)

### 2.5 upstream bump 정책 — Sub-3 개정

| 빈도 | 이벤트 |
|---|---|
| PR 마다 | **shim-drift-check** job (§3.1.2) — drift 시 CI fail |
| 주간 | upstream HEAD commit 확인 (자동 스크립트) |
| 월간 | 안정 commit 으로 `third_party/typescript-go` submodule pointer 이동 + `go run ./tools/gen_shims` 재실행 |
| 이벤트-드리븐 | typescript-go major PR (특히 ast.Node 구조 변화) 발생 시 즉시 대응 |

**규약 2.5.1 (Sub-3 보강)**: bump 워크플로우 표준 — submodule 전환 반영:
1. `cd third_party/typescript-go && git fetch && git checkout <new-commit>`
2. 루트로 복귀 후 `git add third_party/typescript-go` (submodule pointer commit)
3. `cd packages/ttsc && go run ./tools/gen_shims`
4. `go build ./...` 로 컴파일 에러 확인
5. 에러 발생 시 첫번째 에러만 분석 — shim 재노출 부족일 확률 높음 → `extra-shim.json` 추가
6. `go test ./...` 전체 실행
7. `npm test` 로 end-to-end 회귀 검증
8. `docs/bump-YYYY-MM.md` 에 bump 사유 + 수정 사항 기록

**규약 2.5.2**: 실패 시 rollback 정책 — **단독 commit** 로 유지. 단일 revert.
다른 변경과 혼합 금지.

---

## 3. shim 규약 (Sub-3 개정 — F §4.1 CI 정책 반영)

### 3.1 자동생성이 기본 — `gen_shims` 유일 관문 (Cycle 1 유지)

(기존 규약 3.1.1 유지)

#### 3.1.1 절차 (Cycle 1 동일)

1. `packages/ttsc/shim/<pkg>/extra-shim.json` 에 symbol 추가.
2. `cd packages/ttsc && go run ./tools/gen_shims` 실행.
3. `go.sum` 갱신 확인 + `go test ./...` 로 회귀 검증.
4. 자동생성된 `shim/<pkg>/shim.go` 는 **수동 편집 금지**.

#### 3.1.2 CI diff-guard `shim-drift-check` job (Sub-3 신설)

F §4.1(d) + C §6.1 합의.

**규약 3.1.2**: 다음 CI job 을 `.github/workflows/build.yml` 의 PR gate 및
`release.yml` test job 앞에 삽입한다.

```yaml
shim-drift-check:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
      with: { submodules: true }
    - uses: actions/setup-go@v5
      with: { go-version: '1.26' }
    - name: Regenerate shims
      working-directory: packages/ttsc
      run: go run ./tools/gen_shims
    - name: Check for drift
      run: git diff --exit-code packages/ttsc/shim/
```

**동작**: 자동생성 결과가 커밋된 shim 과 다르면 CI fail. 개발자는 `go run ./tools/gen_shims`
를 로컬에서 실행하고 diff 를 커밋해야 한다.

**근거**:
- PR 마다 drift 검사 없으면 릴리스까지 누적 (F §4.1(c)).
- tsgolint 의 `update-typescript-go.yml` 이 동일 패턴 (자동 PR 대신 drift 검사).

#### 3.1.3 자동 PR 금지 정책 (Sub-3 신설)

F §2.4 는 `shim-regenerate.yml monthly cron → 자동 PR` 을 제안했으나 C 는 **반대**.

**규약 3.1.3**: shim drift 해소는 **사람이 수동 commit** 한다. 자동 PR 봇은
다음 이유로 금지.

1. **보안 공격면 증가**: PR 자동 생성 봇은 main branch write 권한 필요. 봇 token
   유출 시 arbitrary commit 가능. 금지.
2. **리뷰 공백**: 자동 PR 은 reviewer 가 습관적으로 merge 하게 됨 (rubber-stamp).
   shim drift 는 upstream struct layout 변화를 의미하며 **반드시** 사람이 읽고
   판단해야 한다.
3. **대안**: monthly cron job 은 **`shim-drift-report.yml`** (Issue 생성 only) 로
   대체. 봇은 issue 만 열고, 담당자(C) 가 수동으로 bump commit 수행.

**근거**: C §6.1 + B §S-5 + F §4.1 재검토 합의.

### 3.2 shim 12 패키지 — 도메인별 분할 (Cycle 1 동일)

(표, 규약 3.2.1 유지)

### 3.3 linkname 대상 선정 기준 (Cycle 1 동일)

(규약 3.3.1~3.3.2 유지. 단 **3.3.3 신설**: 32-bit / 64-bit 환경 검증 의무.)

**규약 3.3.3 (Sub-3 신설)**: `ExtraFields` 가 `unsafe.Pointer` 로 struct 레이아웃을
복사하므로 **32-bit (linux-arm) 플랫폼에서 field offset 이 다를 수 있다**. F §3.1(b)
근거. 새 필드 추가 시 PR 코멘트에 `verified on: linux-amd64, linux-arm64, darwin-arm64,
windows-amd64` 명시 + **Phase 1 Week 2 에 linux-arm32 smoke test** 추가 예정.
smoke 실패 시 해당 필드는 `extra-shim.json` 에서 롤백하고 driver 로직으로 우회.

### 3.4 shim 경계 — driver 외부는 shim 금지 (Sub-3 보강)

**규약 3.4.1**: `shim/*` 은 **오직** `packages/ttsc/internal/driver/` 와
`packages/ttsc/cmd/ttsc/` 만 import 할 수 있다. `internal/engine/` (metadata /
analyzer / emitter) 은 shim 금지.

**규약 3.4.2 (Sub-3 보강)**: 현재 예외인 `analyzer/shim_type_string.go` 는
**Phase 1 Week 2 에 `driver/type_adapter.go` 로 이동**. 이후 `internal/engine/`
전체가 shim-free 가 된다. B §C-3 합의.

**규약 3.4.3 (Sub-3 신설)**: CI linter 로 경계 강제 — `.github/workflows/build.yml`
에 `depguard` 또는 `go-arch-lint` 단계 추가. `internal/engine/` 에서 `shim/` import
시 fail. 구성은 E §3.3 에 위임.

### 3.5 수동 shim 작성 금지선 (Cycle 1 동일)

### 3.6 현재 `extra-shim.json` 인벤토리 (Cycle 1 동일)

### 3.7 shim 자동생성 알고리즘 (gen_shims 독해) — Cycle 1 동일

---

## 4. 최소 patch 정책 (Sub-3 미세 개정)

### 4.1 목표 수치 — **patches ≤ 3 핵심 로직**, cross-compile 별도 카운트

**Sub-3 개정** (F §4.2(d) 반영):

- **핵심 로직 patches ≤ 3** — Cycle 1 목표 유지. tsgonest 3 patches 상한 참조.
- **플랫폼 특화 patches (cross-compile 용)** — 별도 카운트. linux-arm 32-bit 등
  tsgo 자체 matrix 가 없는 플랫폼에서 필요한 build flag patch 는 최대 2 추가 허용.
- **ttsc 1.0 GA 시점** 까지 **patch 0 유지** (C-self §8.2 의 자체 공언).
  tsgonest 3 은 상한, typia 는 **더 엄격**.

### 4.2 언제 patch 가 허용되는가 (판단 순서) — Cycle 1 유지 + 5 번째 사유 추가

1. shim 으로 필요 API 노출 가능? → **YES 면 patch 금지**.
2. 외부 훅(WriteFile, Emit 콜백, stdin/stdout)으로 해결 가능? → **YES 면 patch 금지**.
3. 문자열 rewrite 후처리로 해결 가능? → **YES 면 patch 금지** (Phase 0 전략).
4. 위 셋 모두 안 되고, upstream PR 로 받아들여질 합리적 근거 있으면 **patch 허용**.
5. **(Sub-3 신설) cross-compile 비빌드 해소** — tsgo matrix 에 없는 플랫폼 (예:
   linux-arm 32-bit) 에서 빌드 실패 시 **플랫폼 특화 patch** 허용. §4.1 의 별도
   카운트 대상.

### 4.3 patch 관리 구조 (Cycle 1 유지)

Phase 0 현재는 **patch 0 개** 로 동작 중.

```
packages/ttsc/patches/
├─ core-NNN-<짧은이름>.patch         (핵심 로직 patch)
├─ platform-NNN-<짧은이름>.patch     (cross-compile patch, §4.1 별도 카운트)
└─ apply.sh                          (typescript-go 경로에 적용)
```

**규약 4.3.1 (Sub-3 보강)**: 각 patch 파일은 상단 주석으로 (a) 왜 필요한가,
(b) upstream PR 링크, (c) 제거 조건 (upstream merge 등), (d) **category: core |
platform** 를 명시.

**규약 4.3.2**: patch 적용은 `bootstrap.sh` (Phase 0) / submodule post-checkout hook
(Phase 1+) 의 일부로만 실행. CI 는 적용 상태를 해시로 검증. 해시 불일치 시 release
runner 가 자동 reject (F §4.2(c) 해결).

### 4.4 rewrite 모델 우선 — Emit-time 문자열 치환 (Cycle 1 동일)

### 4.5 대안 평가 매트릭스 (경로 A vs B vs C) — Cycle 1 유지 + 추가 판정

**규약 4.5.1** (유지) — 사용 데이터로만 결정.

**규약 4.5.2 (Sub-3 신설)**: **경로 C (Go AST 직조) 는 Phase 1 에 영구 봉인**.
2,111 ts.factory 호출 이식 비용 + sourcemap 없이도 경로 B 로 충분한 것이 Phase 0
에 실증됨. C-self §8.2 공언.

### 4.6 patch 최소화 체크리스트 (Cycle 1 동일)

---

## 5. Driver 계층 규약 (Cycle 1 대부분 유지 + Sub-3 부분 보강)

Driver = `internal/driver/` 5 파일 + `cmd/ttsc/` 진입부. Cycle 1 §5 본문을 Sub-3
에서 그대로 유지하되, 아래 특정 조항에만 보강이 발생했다. 변경 없는 조항은 원
§번호로 참조만 한다.

### 5.1 Program 로드 — `program.go` (Cycle 1 동일)

책임·규약 5.1.1~5.1.3 은 Cycle 1 초안 그대로. 개정 이력 없음.

### 5.2 CompilerHost — `host.go` (Cycle 1 동일)

규약 5.2.1 유지. `DefaultFS() + DefaultHost(cwd, fs)` 조합.

### 5.3 방문/CallSite 수집 — `visit.go` (Cycle 1 동일)

책임·규약 5.3.1~5.3.4 유지. `CallSite` struct 와 `matchTypiaModule` 3 path 패턴은
Cycle 1 그대로.

### 5.4 Rewrite 집합 관리 — `rewrite.go` 상단 (Cycle 1 동일)

`RewriteSet = map[srcPath][]Rewrite` 유지. `Rewrite` struct 필드 (File / RootName
/ Namespaces / Method / Replacement / ConsumeParens) 유지.

### 5.5 Cleanup — `cleanup.go` (Sub-3 미세 보강)

Cycle 1 규약 5.5.1~5.5.4 유지 + **5.5.5 신설**:

**규약 5.5.5 (Sub-3 신설)**: `typia/lib/internal/*` 경로로 driver 가 자동 주입한
`_createStandardSchema` 등의 named import 는 **cleanup 대상 외** (whitelist). 이는
§8.4.1 개정과 쌍을 이룬다. 근거: §7.3.3 Standard Schema 단일화 개정으로 emit JS
가 `typia/lib/internal/_createStandardSchema` 경로 static import 에 **의존**
하므로 cleanup 이 이를 제거하면 런타임 ReferenceError.

### 5.6 Rewrite 실행 — `rewrite.go` 본체 (Sub-3 부분 보강)

Cycle 1 규약 5.6.1~5.6.5 유지 + **5.6.6 신설**:

**규약 5.6.6 (Sub-3 신설)**: Sub-3 에서 rewrite 파이프라인에 `injectInternalImports`
단계가 새로 삽입된다 (§8.1 신 순서). 구현 위치는 `rewrite.go` 의 `applyRewrites`
직후, `dropUnusedTypiaImports` 직전. 주입 대상 import 는 파일 당 **한 번만**, 이미
존재하면 skip. 중복 주입 방지는 단순 `strings.Contains(text, importLine)` 로 충분.

### 5.7 Diagnostic 변환 (Cycle 1 동일)

규약 5.7.1~5.7.3 유지 (1-base 변환, shim 타입 미포함, `path:line:col: message` 포맷).

### 5.8 Driver 계층 의존 그래프 (Sub-3 보강)

Cycle 1 의존 그래프 (`cmd → driver → shim` / `engine ← driver`) 유지.

**규약 5.8.1~5.8.2** Cycle 1 동일.

**규약 5.8.3 (Sub-3 신설)**: §3.4.2 에 따라 **Phase 1 Week 2** 에
`internal/driver/type_adapter.go` 신설. 기존 `internal/engine/analyzer/shim_type_string.go`
의 shim 의존 코드를 그대로 이동한다. 이후 `internal/engine/` 전체가 shim-free
불변식을 갖는다.

이동 전후 의존 그래프:

```
# Cycle 1 / Phase 0 (현재)
internal/engine/analyzer/shim_type_string.go  ──┐
                                                ├─→ shim/checker  (예외 1 지점)
internal/engine/metadata/* (shim-free)          │
internal/engine/emitter/*  (shim-free)          │

# Phase 1 Week 2 이후
internal/driver/type_adapter.go  ──→ shim/checker  (유일)
internal/engine/*  (완전 shim-free)
```

**규약 5.8.4 (Sub-3 신설)**: `type_adapter.go` 는 `*shimchecker.Type` 을 받아
B 가 정의한 `metadata.TypeKey` 문자열을 반환하는 단일 함수 `TypeKeyOf(t *shimchecker.Type)
metadata.TypeKey` 를 export 한다. analyzer 는 `TypeKey` 만 받는다. 이 규약이 완료
되면 C-self §Q-C2B-1 이 최종 클로즈된다.

---

## 6. CallExpressionTransformer 이식 규약 — FUNCTORS 147 dispatch (Sub-3 개정)

### 6.1 typia v12 대응 표 (Cycle 1 유지)

FUNCTORS = **147 entry** (9 module × 평균 16 method).

### 6.2 Dispatch 단일 진실원 — `dispatch.go` (Sub-3 보강)

**규약 6.2.1** (유지): `build` / `transform` 두 서브커맨드는 **동일한
`dispatchEmit`** 를 호출.

**규약 6.2.2** (유지): 한 개 파일 한 개 switch.

**규약 6.2.3 (Sub-3 개정)**: `dispatchEmit` 의 리턴 타입 — 자체 §8.4 재검토.

Cycle 1 의 4-tuple `(expression string, factory bool, err error, handled bool)` 은
Go 관용 `(T, error)` 2-tuple 에서 벗어남. **Sub-3 에서 `DispatchResult` struct
로 전환**:

```go
type DispatchResult struct {
    Expression     string  // emit 할 JS expression
    ConsumeParens  bool    // factory call (createIs 등) 여부
    Handled        bool    // switch 매칭 여부; false 면 skip + 로그
}

func dispatchEmit(site driver.CallSite, schema *metadata.Schema) (DispatchResult, error)
```

기존 semantics 유지 (handled=false → skip; err!=nil → 진단). 호출자 `applyRewrites`
는 `res.Handled` 체크 후 `res.Expression` 사용.

**규약 6.2.4 (Sub-3 신설)**: dispatch switch 는 **B 12 bucket 과의 cross product**
테이블을 반환값으로 구성. 각 case 는 B §3.2 의 bucket (Atomic / Constant / Template
/ Array / Tuple / Object / Alias / Native / Escaped / Function / Record / Tag) 를
`schema.Kind` 로 분기 가능. C ↔ B Sub-3 계약 (C §6 review).

### 6.3 Phase 0 커버리지 현황 + Phase 1 완성 기한 (Sub-3 확장)

| module | methods | Phase 0 상태 | Phase 1 완성 기한 |
|---|---|---|---|
| `module` (basic: is/assert/validate/equals 및 factory) | 18 | ✅ | — |
| `json` (stringify/parse/schema 및 variants) | 17 | ✅ | — |
| `misc` (literals/clone/prune 기본) | 7 | ✅ 일부 | Phase 1 Week 3: {assert,is,validate}Clone/Prune |
| `notations` (camel/pascal/snake 기본) | 7 | ✅ | Phase 1 Week 3: {assert,is,validate} 변형 추가 |
| `reflect` (schema/name) | 2 | ✅ | — |
| `http` (parameter/query/queryObject/headers/formData 기본) | 12 | ✅ | Phase 1 Week 4: {assert,is,validate} 변형 |
| **`functional`** (assertFunction 외) | 18 | ❌ (skip) | **Phase 1 Week 5~6** — B IR function schema 활성 필요 (B §D-3) |
| **`protobuf`** (encode/decode/message) | 22 | ❌ | **Phase 1 Week 7** — wire format fixture 기반 |
| **`llm`** (application 외, 6 provider) | 6+ | ❌ | **Phase 1 Week 8** — openai+anthropic 2 provider 먼저 |
| **`random`** | 6+ | ❌ | **Phase 2 Q1** — RandExp JS 번들 정책 확정 후 |

**규약 6.3.1 (Sub-3 신설)**: 각 row 의 "Phase 1 완성 기한" 은 kill-gate (§1.4.1)
와 교차 검증 대상. 미완성 상태로 v13 GA 시 **`ttsc build` 가 해당 method 에 대해
명시적 에러** ("not yet supported in v13.x, coming in v13.Y") 를 반환해야 한다.
silent skip 금지 (§7.1.3).

### 6.4 신규 method 추가 절차 (Sub-3 보강)

Cycle 1 절차 유지 + **0 단계 추가**:

- **0 단계 (Sub-3 신설)**: 필요한 IR 정보가 `*metadata.Schema` 에 있는지 B 와 합의.
  부족 시 IR 확장 PR 을 emitter PR 과 **동일 commit** 에 포함. A §3.3 합의.
- 1 단계: typia v12 의 해당 Transformer 찾기.
- 2 단계: emitter 함수 작성.
- 3 단계: dispatch switch 에 case 추가 (알파벳 순 권장).
- 4 단계: test fixture 추가.
- 5 단계: 문서 갱신 (본 §6.3 표 + wiki/08/18 체크리스트).

### 6.5 Anti-pattern — 분산 dispatch (Cycle 1 동일)

---

## 7. Emitter 규약 — 13 분야별 (Sub-3 대폭 개정)

각 emitter 파일은 `packages/ttsc/internal/engine/emitter/<area>.go`.

### 7.0 IR → Emitter 경계: `EmitProgrammer` 단일 entry (Sub-3 신설)

C ↔ B Sub-3 계약 (B §C-1, C §3).

`cmd/ttsc/dispatch.go` 는 B 12 bucket 을 알지 못하고, `internal/engine/emitter/`
는 shim 을 알지 못한다. 둘 사이의 경계는 **단일 entry** 에서 교차한다:

```go
// packages/ttsc/internal/engine/emitter/entry.go (Sub-3 신설)
package emitter

type ProgrammerKind int

const (
    KindIs ProgrammerKind = iota
    KindAssert
    KindValidate
    KindEquals
    KindJsonStringify
    KindJsonParse
    KindJsonSchema
    KindMiscLiterals
    KindMiscClone
    KindMiscPrune
    KindNotation         // camel / pascal / snake 는 runtime param
    KindReflectSchema
    KindReflectName
    KindHttpParameter
    KindHttpQuery
    // Phase 1+: functional / protobuf / llm / random
)

type Options struct {
    Notation    string  // "camel" | "pascal" | "snake" — only for KindNotation
    LlmProvider string  // "openai" | "anthropic" | ... — only for Phase 1+ llm
}

// EmitProgrammer 는 driver 가 최종 출력 JS 를 얻는 단일 진입점.
// - kind: Programmer 식별자 (13+ enum)
// - valueExpr: runtime 값 표현식 이름 ("input" 등)
// - schema: B 가 제공한 *metadata.Schema (12 bucket 중 하나)
// - options: kind 별 runtime 파라미터
func EmitProgrammer(kind ProgrammerKind, valueExpr string, schema *metadata.Schema, options Options) (string, error) {
    switch kind {
    case KindIs:             return EmitIsArrowFunction(schema)
    case KindAssert:         return EmitAssertArrowFunction(schema)
    case KindValidate:       return EmitValidateArrowFunction(schema)
    // ... 13 개 bucket dispatch ...
    }
    return "", fmt.Errorf("emitter: unsupported kind %v", kind)
}
```

**규약 7.0.1 (Sub-3 신설)**: `cmd/ttsc/dispatch.go` 는 `EmitProgrammer` 를 **직접
호출** 한다. 개별 `Emit<Method>ArrowFunction` 을 cmd 에서 직접 호출하지 않는다.
이것으로 "13+ kind" 이외의 추가 emitter 가 cmd 에 노출되지 않는다 (B 경계 보호).

**규약 7.0.2**: `ProgrammerKind` enum 은 emitter 패키지가 소유. 추가 시
`cmd/ttsc/dispatch.go` 의 switch case 와 `internal/engine/emitter/entry.go` 의
switch case 를 **같은 PR** 에서 수정. 한쪽만 추가되면 vet fail (아래 규약 7.0.3).

**규약 7.0.3 (Sub-3 신설)**: `tools/check_dispatch_parity.go` 유틸 (Phase 1 Week 1
추가) 이 두 switch 의 case 집합을 교차 검증. 차집합 존재 시 exit 1. `build.yml`
CI 단계에 등재.

### 7.1 공통 원칙 (Sub-3 확장 — 규약 7.1.7 신설)

**규약 7.1.1~7.1.6** (Cycle 1 동일):
- 7.1.1 `*metadata.Schema` 만 입력
- 7.1.2 expression 반환
- 7.1.3 `ErrUnsupportedSchema` wrap; silent wrong output 금지
- 7.1.4 공백·줄바꿈 최소화
- 7.1.5 deterministic ordering (`sort.*`)
- 7.1.6 `__` 접두사 식별자

**규약 7.1.7 (Sub-3 신설)**: **재귀 Schema 를 방문하는 모든 emitter 는
`map[*ObjectType]bool` visiting set 을 상태로 갖는다**. pointer identity 는
B Collection 의 deduplication 으로 보장됨 (B §3.7). map key 로 안전.

- 적용 대상: `is.go`, `assert.go`, `validate.go`, `equals.go`, `json_stringify.go`,
  `json_parse.go`, `json_schema.go`, `misc.go` (clone/prune), `notations.go`.
- 실구현 예 (`is.go` 의 `isState`): §7.2.1 참조.
- **guard 소비자가 들고 다닌다** (B §3.8 의 불변식). IR 자체는 guard 책임을
  지지 않음.

**근거**: R-0002 (visitingObjects 누락 → stack overflow) 재발 방지. B §S-2 합의.

**규약 7.1.8 (Sub-3 신설)**: 각 재귀 emitter 의 visiting set 은 Go unit test 로
검증한다. `internal/engine/emitter/<area>_recurse_test.go` 에서 재귀 fixture
(e.g. `TreeNode { children: TreeNode[] }`) 가 stack overflow 없이 완료되고,
emitter 종료 후 visiting set 이 비어있는지 assert. E §3.5 쟁점 해소.

### 7.2 `is.go` (427줄) — IsProgrammer (Cycle 1 유지)

(규약 7.2.1~7.2.7 그대로. 단 §7.1.7 의 일반 원칙이 is.go 의 `isState.visiting`
을 포섭함을 주석으로 추가.)

**Sub-3 보강**: Phase 1 Week 6 에 `is/primitive.go`, `is/object.go`, `is/recurse.go`
3-파일 분할 예정 (C-self §8.4.2 공언).

### 7.3 `assert.go` — AssertProgrammer (Sub-3 대폭 개정 — §7.3.3)

**출력 shape**: `(input) => (<check>) ? input : (() => { const __err = new Error("typia.assert: expected <type>, got " + ...); __err.name = "TypeGuardError"; throw __err; })()`.

**규약 7.3.1** (Cycle 1 동일): error.name = `"TypeGuardError"` 고정.

**규약 7.3.2** (Cycle 1 동일): Phase 0 에서 path = `$input` 고정. Phase 1 per-property.

#### 7.3.3 Standard Schema emit — **인라인 폐지 → functor 호출** (Sub-3 대폭 개정)

**Cycle 1 초안 (폐기)**: "`EmitCreateValidateWithStandardSchema` 는 validate factory
결과에 `~standard` 프로퍼티 **인라인 주입**. 외부 런타임 의존 없음 (regex 6.1
`typia/src/internal/_createStandardSchema.ts` 동등 로직 복제)."

→ **개정 근거**:
- D §4.1 쟁점 ①: TS `_createStandardSchema` (134 LOC 정교한 path parser) 와 Go
  `assert.go:63` inline emit 이 **path segment / message 포맷에서 관측 가능한
  차이**. BND-API-04 "런타임 동작 동치" 위반 실증.
- B §S-3: "Go emitter 는 inline 주입 제거하고 functor 호출 한 줄만 emit".
- A §4.2: BND-API-04 서브원칙 "런타임 헬퍼는 TS functor 정본, Go emitter 는
  import + 호출만" 신설 요구.
- F §5.2: Standard Schema 커뮤니티 conformance 리스크 (`issues[].path` 비교).
- E §4.7: `test_standard_schema_parity.ts` fixture 즉시 도입.

**Cycle 3 개정 규약 7.3.3**:

`EmitCreateValidateWithStandardSchema` 는 다음과 같이 축소된다.

- validate functor 본체 (`__fn`) 는 Go 에서 기존처럼 emit (AssertProgrammer /
  ValidateProgrammer 의 결과).
- `~standard` 프로퍼티는 **인라인 주입 금지**. 대신 TS 정본 헬퍼
  `_createStandardSchema` 를 **한 줄 호출** 로 감싼다.
- import 는 driver (`rewrite.go`) 가 파일 수준에서 `import { _createStandardSchema }
  from "typia/lib/internal/_createStandardSchema";` 를 자동 주입.
- `dropUnusedTypiaImports` 는 이 import 를 whitelist (§8.4.1 개정).

**신 코드 샘플** (assert.go:63 개정 후):

```go
// packages/ttsc/internal/engine/emitter/assert.go
//
// 목표: TS _createStandardSchema 를 한 줄 호출로 emit. inline 복제 금지.
// Cycle 3 개정: BND-API-04-a ("런타임 헬퍼는 TS functor 정본") 준수.

func EmitCreateValidateWithStandardSchema(schema *metadata.Schema) (string, error) {
    validateImpl, err := EmitValidateArrowFunction(schema) // 기존 validate functor 재사용
    if err != nil {
        return "", err
    }
    // driver/rewrite.go 가 파일 상단에
    //   import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema";
    // 를 자동 주입.
    return fmt.Sprintf("_createStandardSchema(%s)", validateImpl), nil
}
```

**예 emit** (기존 inline 30+ LOC → 1 줄 호출):

```js
// Before (Cycle 1 초안):
exports.validateUser = ((() => {
  const __fn = (input) => { /* validate body */ };
  __fn["~standard"] = {
    version: 1,
    vendor: "typia",
    validate: (input) => { /* 인라인 복제된 path parser + message 포맷 */ }
  };
  return __fn;
})());

// After (Cycle 3 개정):
exports.validateUser = _createStandardSchema((input) => { /* validate body */ });
```

**파급**:
- Phase 0 assert.go:63 의 약 30 LOC 가 약 3 LOC 로 감소.
- path parser / message 포맷 drift 영구 제거 — TS functor 한 곳만 수정.
- Standard Schema v2 대응도 TS 한 곳에서 해소.
- E 의 regression fixture `test_standard_schema_parity.ts` 가 Go emit 결과와
  TS functor 직접 호출 결과의 **byte-identical** 을 assert (D §4.4 제안 수용).

**규약 7.3.3-a (Sub-3 신설)**: `_createStandardSchema` 의 정본은 TS
(`packages/typia/src/internal/_createStandardSchema.ts`). 정본이 변경되면 Go emitter
는 **수정 불필요** (단일 출처 원칙).

**규약 7.3.3-b**: driver 의 import 주입 (`rewrite.go` 확장) 은 파일 단위 1 회만.
같은 파일 내 `createValidate` 가 여러 번이어도 import 는 중복 삽입 금지.

**규약 7.3.3-c**: Edge runtime 호환 유지 — `_createStandardSchema` 는 static import
이므로 Cloudflare Workers / Vercel Edge / Deno 에서 로드됨. `eval` / `new Function`
없음. 원칙 2 (§1.2) 와 정합 (external 정의를 `typia/lib/internal/*` 외로 한정).

**규약 7.3.3-d**: 구현 PR 은 **Cycle 3 종료 전** 머지. 문서만으로는 drift 해소
되지 않음. D §4.1 + A §4.2 + E §4.7 합의.

### 7.4 `tags.go` — TypeTag 처리 (Cycle 1 동일)

규약 7.4.1~7.4.3 유지. 21 종 formatRegexps + integerBounds 8 + `expandValidate`
의 `$importInternal(...)` skip 규칙.

### 7.5 `tag_compose.go` — TagMatrix 합성 (Cycle 1 동일)

규약 7.5.1~7.5.2 유지. product-of-sums.

### 7.6 `json_stringify.go` (Sub-3 미세 보강)

Cycle 1 규약 7.6.1~7.6.6 유지 + **§7.1.7 재귀 visiting 규약 적용**:

**규약 7.6.7 (Sub-3 신설)**: `buildJsonStringify` 가 object 재귀 분기를 탈 때
`map[*ObjectType]bool` visiting set 을 사용. 재진입 시 helper hoist 로 치환. is.go
의 `isState.visiting` 과 동일 패턴. 구체 파일/헬퍼 네이밍은 Phase 1 Week 2 확장
PR 에서 `jsonStringifyState` 로 확정.

### 7.7 `json_parse.go` (Cycle 1 동일)

규약 7.7.1 유지. `assertParse` / `isParse` / `validateParse` 가 대응 emitter 의
composition 으로 합성.

### 7.8 `json_schema.go` (Sub-3 미세 보강)

Cycle 1 규약 7.8.1~7.8.4 유지 + **§7.1.7 적용**:

**규약 7.8.5 (Sub-3 신설)**: 재귀 타입의 `$defs` 확장 (Phase 1) 구현 시 반드시
§7.1.7 규약에 따라 `map[*ObjectType]bool` visiting set 을 상태로 소유. 순환 구조
에서 무한 루프 방지. Cycle 1 §7.8.4 가 "analyzer 단계에서 cycle 감지" 로 위임했던
부분을 emitter 자체에서도 방어한다 (이중 방어).

### 7.9 `misc.go` (Cycle 1 동일 + §7.1.7 적용)

규약 7.9.1~7.9.3 유지. clone / prune 의 재귀 구조는 §7.1.7 패턴 준수.

### 7.10 `notations.go` (Cycle 1 동일)

규약 7.10.1~7.10.3 유지. camel/pascal/snake 런타임 재귀 key-renamer.

### 7.11 `reflect.go` (Cycle 1 동일)

규약 7.11.1~7.11.2 유지. `reflect.schema` / `reflect.name`.

### 7.12 `http.go` (Cycle 1 동일)

규약 7.12.1~7.12.3 유지. parameter / query / queryObject / headers / formData.

### 7.13 `format.go` (Cycle 1 동일)

규약 7.13.1 유지. `formatFloatG`.

### 7.14 공통 헬퍼 정의 위치 (Cycle 1 동일)

`is.go` 하단에 정의된 공통 헬퍼 (accessProperty / isIdentifier / jsonQuote /
numberLiteral / intString) 는 Phase 1 에 `emitter/helpers.go` 로 분리 예정.

### 7.15 Phase 1 Emitter 확장 계획 (Sub-3 보강)

(Cycle 1 §7.15 유지 + §6.3 의 완성 기한 표와 교차 참조.)

**규약 7.15.1 (functional)**: B §D-3(a) 답 — Function sum-type 이미 B §3.2 (10)
에 존재. Phase 1 Week 5 에 Analyzer `iterate_function` 활성화만 필요.
**규약 7.15.2 (protobuf)**: B §D-3(b) 답 — 필드번호 `tags.Protobuf.Tag<N>` 로
표현. IR 확장 불필요. Phase 1 Week 7.
**규약 7.15.3 (llm)**: B §D-3(c) 답 — 6 provider 분기는 emitter runtime 파라미터
(`Options.LlmProvider`) 로 격리. IR 확장 금지. Phase 1 Week 8.
**규약 7.15.4 (random)**: RandExp JS 번들 포함 vs import — **Phase 2 Q1 에 결정**
(A Q-C2A 응답 필요).
**규약 7.15.5**: typia v12 의 동명 Programmer TS 파일 을 Go 파일명으로 1:1 미러
(Cycle 1 유지).

### 7.16 Emitter 테스트 전략 (Sub-3 확장)

**규약 7.16.1~7.16.4** Cycle 1 유지.

**규약 7.16.5 (Sub-3 신설)**: fixture 카테고리에 **#11 functional / #12 protobuf /
#13 llm / #14 standard-schema-parity** 추가. D §4.3 + E §4.7 합의. Phase 1 완성
기한 (§6.3) 와 연동.

**규약 7.16.6 (Sub-3 신설)**: `test_rewrite_idempotent` 는 **바이트 일치** 를
엄밀 검증. `dist/` 유지한 채 두 번째 `ttsc build` 후 git diff 비어야 함. BOM /
CRLF / 첫 줄 주석 엣지 케이스 fixture 포함. E §3.1 쟁점 해소.

---

## 8. JS rewrite 규약 (Sub-3 소폭 개정)

### 8.1 Rewrite 순서 (Cycle 1 유지 + 한 단계 추가)

1. sentinel 검사
2. applyRewrites
3. **(Sub-3 추가) injectInternalImports** — `_createStandardSchema` 등 `typia/lib/internal/*`
   헬퍼 사용 시 파일 상단에 import 주입 (§7.3.3-b)
4. dropUnusedTypiaImports
5. insertSentinel
6. WriteFile 호출

### 8.2 IIFE 치환 규칙 (Cycle 1 동일)

규약 8.2.1~8.2.3 유지. 일반 call 은 `((input) => ...)(arg)`, factory 는 `ConsumeParens=true`,
JSON schema 는 `({...})`.

### 8.3 needle 매칭 규칙 (Cycle 1 동일)

**규약 8.3.3 (Sub-3 확장)**: `matchParen` naïve 한계는 Phase 1 에 중간안으로 해소
— "template literal + 주석 토크나이저" 만 추가 (C-self Q-C-self-4 의 중간안).
완전한 JS 토크나이저 이식은 과잉. fixture 증상 나타나면 순차 해결.

### 8.4 unused import cleanup 경계 (Sub-3 개정)

**규약 8.4.1 (Sub-3 개정)**: typia default import 만 제거 대상. **named import
(`{ tags }`) 및 `typia/lib/internal/*` 경로 import 는 보존 (whitelist)**. 특히
`_createStandardSchema` 가 driver 주입된 경우 cleanup 에서 건드리지 않음.

**규약 8.4.2** (Cycle 1 동일): alias 단어경계 매칭.

**규약 8.4.3 (Sub-3 확장)**: 2-pass 구조 원형 대비 단순화 유지 + 새 module
format 등장 시 regex 추가 (C-self Q-C-self-5 의 "regex 추가" 방향).

### 8.5 sourcemap 정책 (Sub-3 확장)

**규약 8.5.1 (Phase 0, Cycle 1 유지)**: 미지원.

**규약 8.5.2 (Phase 1 예정, Sub-3 정량화)**: kill-gate §1.4.1 의 D5 지표:
- 평균 위치 오차 ≤ 1 줄
- breakpoint 적중률 ≥ 90%
- 달성 경로: (A) AST transform chain hook — patch 1~3 추가 허용 / (B) diff-match-patch-es
  역매핑 — patch 0.
- 두 안 중 측정 결과 우세한 쪽 채택.

**규약 8.5.3** (Cycle 1 유지): `--source-map=false` fallback 허용.

**규약 8.5.4 (Sub-3 신설)**: sourcemap 경로 A 채택 시 §4.1 의 "patches ≤ 3"
상한에 **1~2 patch 추가**. 한도 도달 시 C 가 먼저 경보 + 사용자 capability matrix
공지.

### 8.6 Strict-mode 디렉티브 보존 (Cycle 1 동일)

규약 8.6.1 유지. `"use strict";` 뒤에 sentinel 삽입으로 V8 strict mode 인지.

### 8.7 Anti-pattern (Cycle 1 유지 + E6 추가)

**금지 1~4** Cycle 1 동일.

**금지 5 (Sub-3 신설)**: Standard Schema 의 `~standard.validate` 로직을 **Go emitter
에서 인라인 복제**. §7.3.3 개정 근거. TS `_createStandardSchema` functor 호출로만.

### 8.8 Rewrite 단계별 failure modes (Sub-3 보강)

Cycle 1 failure mode 표 유지 + **import 주입 실패 행 추가**:

| 단계 | 실패 시나리오 | 대응 | 사용자 증상 |
|---|---|---|---|
| sentinel 검사 | 파일 읽기 실패 | tsgo Emit 결과 사용, 자체 읽기 없음 | N/A |
| applyRewrites | needle 미매칭 | error 반환, 빌드 중단 | `driver: could not locate …` |
| applyRewrites | matchParen 불균형 | error, 중단 | `driver: unbalanced parens …` |
| **injectInternalImports** (Sub-3) | import line 주입 지점 찾기 실패 | 파일 최상단에 주입 | 경고 없음 (정상) |
| **injectInternalImports** (Sub-3) | 이미 동일 import 존재 | skip (중복 방지) | 경고 없음 |
| dropUnusedTypiaImports | alias 여전히 참조됨 | import 라인 유지 | 무해 |
| dropUnusedTypiaImports | whitelist (`typia/lib/internal/*`) 매칭 | 무조건 유지 (§8.4.1) | `_createStandardSchema` 유지 |
| insertSentinel | 파일 내용 변화 없음 | sentinel 삽입 skip | 다음 빌드에 재검사 |
| writeOutput | 디렉토리 생성 실패 | error 반환 | `ttsc build: emit failed: mkdir…` |
| writeOutput | 파일 쓰기 실패 | error 반환 | 디스크 full / 권한 문제 |

**규약 8.8.1** (Cycle 1 유지): 각 실패는 진단 메시지에 원본 컨텍스트 400자 preview 포함.
**규약 8.8.2** (Cycle 1 유지): 부분 실패 허용. 단 분석 실패는 전체 빌드 fail.

### 8.9 Watch mode 호환성 (Cycle 1 동일)

규약 8.9.1~8.9.3 유지. Sentinel + `.ttsc-cache/` hash 조합. 100 ms debounce. 단일
파일 에러가 watch 세션 종료하지 않음.

---

## 9. 코드 근거 (파일:라인 인용) — Sub-3 업데이트

### 9.1 Driver 계층 (Cycle 1 유지 + 추가)

- `packages/ttsc/internal/driver/rewrite.go:89-132` — `EmitAll` 순서 (Sub-3 에
  `injectInternalImports` 단계 추가 예정, §8.1)
- `packages/ttsc/internal/driver/type_adapter.go` (Phase 1 Week 2 신설 예정) —
  `*shimchecker.Type` → `TypeKey` 변환 유일 지점 (§3.4.2)

(기타 anchor 는 Cycle 1 §9.1 유지.)

### 9.2 Emitter 계층 (Sub-3 대폭 갱신)

- `packages/ttsc/internal/engine/emitter/entry.go` (Sub-3 신설 예정) —
  `EmitProgrammer(kind, valueExpr, schema, options)` 단일 entry (§7.0)
- `packages/ttsc/internal/engine/emitter/assert.go:63` — **Cycle 3 개정 후 약 3 LOC**
  (`_createStandardSchema(__fn)` 한 줄 호출) (§7.3.3)
- 기타 anchor (is.go / tags.go / json_*.go / misc.go / notations.go / reflect.go
  / http.go) 는 Cycle 1 §9.2 유지.

### 9.3 CLI / Dispatch (Cycle 1 유지 + Sub-3 추가)

- `packages/ttsc/cmd/ttsc/dispatch.go:17-88` — 단일 switch. Sub-3 에서
  `DispatchResult` struct 로 리턴 타입 변경 예정 (§6.2.3).
- `packages/ttsc/tools/check_dispatch_parity.go` (Phase 1 Week 1 신설 예정) — cmd
  switch ↔ emitter entry switch 의 case 집합 교차 검증 (§7.0.3).

### 9.4 Shim 생성 (Cycle 1 유지 + Sub-3 추가)

- `.github/workflows/build.yml` — Sub-3 에 `shim-drift-check` job 추가 (§3.1.2)

### 9.5 typia v12 원본 대응 (Cycle 1 유지)

---

## 10. 안티패턴 (Sub-3 보강 — A7 / E6 추가)

### 10.1~10.4 — Cycle 1 유지

### 10.5 Sub-3 추가 안티패턴

**A7. shim drift 해소를 자동 PR 봇에 위임**
- 봇이 main branch write 권한을 가지면 공격 표면 증가. rubber-stamp 리뷰 위험.
- **올바름**: `shim-drift-check` job 으로 CI fail (§3.1.2) + 사람이 수동 commit.

**E6. Standard Schema `~standard.validate` 로직을 Go emitter 에 인라인 복제**
- TS `_createStandardSchema` (134 LOC) 와 drift 발생. BND-API-04 위반.
- **올바름**: TS functor 호출 emit (§7.3.3).

---

## 11. 검증 체크리스트 (Sub-3 확장)

### 11.1~11.6 — Cycle 1 유지 (단 §11.2 의 emitter 체크에 `EmitProgrammer` 경계
통과 검증 추가)

### 11.2 신규 emitter 추가 시 (Sub-3 보강)

- [ ] typia v12 원본 Transformer 파일 경로 주석으로 명시
- [ ] `Emit<Method>ArrowFunction` 또는 `Emit<Method>Expression` 네이밍
- [ ] 입력은 `*metadata.Schema` 만
- [ ] `shim/*` import 없음
- [ ] `ErrUnsupportedSchema` 로 실패 표현
- [ ] `sort.*` 로 순서 고정
- [ ] **(Sub-3) `EmitProgrammer` entry switch 에 case 추가** (§7.0)
- [ ] **(Sub-3) 재귀 Schema 포함 시 `map[*ObjectType]bool` visiting set 사용** (§7.1.7)
- [ ] test fixture + `test_emit_<area>.ts` 추가
- [ ] `dispatch.go` switch 에 case 추가
- [ ] §6.3 표 업데이트 (Phase 1 완성 기한 포함)

### 11.7 shim drift 검증 (Sub-3 신설)

- [ ] 로컬에서 `go run ./tools/gen_shims` 재실행 후 git diff 없음
- [ ] PR CI 의 `shim-drift-check` job 통과
- [ ] drift 발견 시 **자동 PR 이 아닌** 수동 commit

### 11.8 Standard Schema parity 검증 (Sub-3 신설)

- [ ] `test_standard_schema_parity.ts` fixture 통과
- [ ] Go emit 결과와 TS `_createStandardSchema(validateImpl)` 직접 호출 결과가
  **byte-identical** (E §4.7)
- [ ] `~standard.validate(x).issues[i].path` 가 TS/Go 간 동일
- [ ] static import `typia/lib/internal/_createStandardSchema` 가 `dropUnusedTypiaImports`
  에 보존됨

---

## 12. 미해결 질문 (Cycle 2 교차 리뷰 대상) — Sub-3 클로즈 표기

### 12.1 B 역할에게

**Q-C2B-1 [CLOSED, Sub-3]**: `analyzer.New(checker, ...).Walk(site.TypeArgument)`
가 shim 타입을 analyzer 에 넘기는 유일 지점 — 허용 가능한가?
→ B 답 (B §S-4): `internal/driver/type_adapter.go` 가 `TypeKey` 로 변환한 후에만
analyzer 호출. Phase 1 Week 2 에 `shim_type_string.go` 를 driver 로 이동 (§3.4.2).

**Q-C2B-2 [CLOSED, Sub-3]**: `Type.Id()` 메서드 `extra-shim.json` 명시 필요?
→ B 답: `Id()` 는 이미 exported. 추가 `extra-shim.json` 항목 불필요. 현 checker
17 + 2 인벤토리 유지.

**Q-C2B-3 [CLOSED, Sub-3]**: MetadataSchema `Name()` 정책 — B vs C?
→ B 답: `Name()` 은 B 영역. C 는 결과 문자열 소비만. emit 진단 메시지 포맷
(prefix `"typia.assert: "` 등) 은 C 소유.

### 12.2 A 역할에게

**Q-C2A-1 [PENDING]**: `src/api.ts` 경계 주관리자. → A Sub-3 결정 대기.
권고 (A §3.4): C 소유 (driver 표면), D 는 소비자, F 는 패키징.

**Q-C2A-2 [CLOSED, Sub-3]**: edge runtime 호환 범위 — emit 결과만? 바이너리도?
→ A 답 (F §6.3 을 통해): emit 산출물만. launcher 바이너리는 Node/OS 프로세스
이므로 edge runtime 제약 적용 안 됨.

### 12.3 D 역할에게

**Q-C2D-1 [PENDING]**: `src/api.ts` shape 차이 조정. → C + F 합동. D 는 breaking
vet 만. A Sub-3 결정 대기.

**Q-C2D-2 [CLOSED, Sub-3]**: Standard Schema spec 유지 책임?
→ D 답 (§4.1): TS `_createStandardSchema` 가 정본. D 소유. Go emitter 는 functor
호출만 (§7.3.3 개정).

### 12.4 E 역할에게

**Q-C2E-1 [CLOSED, Sub-3]**: fixture 의 "spec 차원 최소 셋" 정의 주체?
→ E 답 (§4.3): 분담. spec 차원은 C (emitter 기능 매트릭스), 조직/실행은 E.
C §7.16.3 + §6.3 가 spec 차원 단일 출처.

**Q-C2E-2 [PENDING]**: Performance benchmark 설계? → F 주도 + E 측정. C 는 `--benchmark`
hook 제공.

### 12.5 F 역할에게

**Q-C2F-1 [CLOSED, Sub-3]**: `third_party/typescript-go` symlink vs submodule?
→ F 답 (§4.3 + §7.4): **submodule 로 확정**. Phase 1 Week 1 전환 (§2.1 개정).

**Q-C2F-2 [CLOSED, Sub-3]**: sourcemap 제약 사용자 안내?
→ F 답: Setup wizard 가 `--runtime=ttsc` 전환 시 capability matrix 경고 표시.
A capability-matrix.md 규약 (E §4.5) 에 따라 자동 생성.

### 12.6 자체 미해결 (Cycle 3 시점)

**Q-C-self-1 [OPEN]**: sourcemap Phase 1 patch 수 threshold — 현재 ≤ 3 + 1~2
(cross-compile 별도). 경로 A 채택 시 한도 도달. Cycle 4 재평가.

**Q-C-self-2 [CLOSED, Sub-3]**: functional/protobuf/llm IR 충분?
→ B §D-3 답 (§7.15): (a) Function sum-type 이미 존재, (b) protobuf tag 로 충분,
(c) LLM provider 는 emitter runtime 파라미터. **IR 확장 불필요**.

**Q-C-self-3 [OPEN]**: tsgo Emit/WriteFile breaking change 대응 — upstream RFC
경로. Phase 1 Week 6 에 PR #711 (공식 IPC) 검토.

**Q-C-self-4 [CLOSED, Sub-3]**: `matchParen` Phase 1 해소 — 중간안 (template/주석)
채택 (§8.3.3).

**Q-C-self-5 [OPEN]**: `dropUnusedTypiaImports` 확장 — regex 추가 유지. 새 module
format 등장 시 parser 도입 재평가.

---

## 부록 A. Phase 0 → 향후 Phase 전환 요약 (Cycle 1 유지)

| Phase | 기간 | C 역할 주요 작업 |
|---|---|---|
| Phase 0 | 2026 Q1~Q2 | 실구현 완료. 본 규약 초안 + Sub-3 개정 (현재). |
| Phase 1 | 2026 Q3~Q4 | submodule 전환 (Week 1), type_adapter 이동 (Week 2), sourcemap kill-gate (Week 4), functional (Week 5~6), protobuf (Week 7), llm (Week 8), is.go 분할 (Week 6) |
| Phase 2 | 2027 Q1~Q2 | `replace directive` 제거 (= v13.0 GA, Phase 1 말 실제로는 Phase 1 종료 직전) |
| Phase 3 | 2027 Q3+ | random, RandExp 번들 정책 |
| Phase 4 | 2028 Q1+ | typia 자체 ttsc 빌드 전환 |
| Phase 5+ | 2028 Q3+ | typescript-go 공식 IPC 평가 |
| Phase 6 | 2029 Q2 | typia v14 |

## 부록 B. 숫자 요약 (Sub-3 업데이트 + 4 축 용어 표)

### 부록 B.0 4 축 용어 표 (Sub-3 신설 — C-self §2.1 합의)

| 축 | 값 | 근거 문서 |
|---|---|---|
| **사용자 공개 namespace** | 9 (root + 8 sub) | A BND-NS-01 |
| **emitter 분야 (programmer 파일)** | ~13 | C §7 (본 문서) |
| **FUNCTORS 엔트리** | 147 (9 module × 평균 16) | C §6.1 |
| **IR bucket (MetadataSchema sum-type)** | 12 | B §3.2 |

Cycle 2 에서 "13" 이 4 의미로 혼용되던 문제를 Sub-3 에서 **4 축 분리** 로 해소.
각 역할 규약은 자기 축의 수치만 사용.

### 부록 B.1 Phase 0 현재값 (Cycle 1 부록 B 유지)

| 항목 | 값 | 근거 |
|---|---|---|
| Go non-test LOC | 4,459 | `18-phase0-progress-report.md` |
| Go test LOC | 965 | 상동 |
| Shim 자동생성 LOC | 4,523 | `wc -l shim/*/shim.go` |
| TS test LOC | 1,769 | 18-report |
| Go test 패키지 | 4 (전부 PASS) | `go test ./...` |
| TS integration test | 21/21 PASS | `npm test` |
| Shim 패키지 | 12 | §3.2 |
| ExtraShim 항목 | 17 methods + 2 fields (checker), + scanner 1 | §3.6 |
| Dispatch module (Phase 0 active) | 7 | §6.3 |
| patches (Phase 0) | **0** | §4.3 |
| formatRegexps | 21 | `tags.go:144-170` |
| integerBounds | 8 | `tags.go:174-183` |
| candidateRoots | 6 alias | `rewrite.go:282-294` |
| unusedImportPatterns | 3 | `cleanup.go:51-85` |

### 부록 B.2 성능 측정 기준선 (Cycle 1 동일)

### 부록 B.3 환경 변수 및 플래그 매트릭스 (Cycle 1 동일)

---

### 부록 B.4 Cycle 3 개정으로 인한 수치 변화

| 항목 | Cycle 1 값 | Cycle 3 목표값 | 변화 근거 |
|---|---|---|---|
| `assert.go` Standard Schema 관련 LOC | ~30 (inline) | ~3 (functor 호출) | §7.3.3 개정 |
| rewrite 파이프라인 단계 수 | 5 (§8.1) | 6 (inject 추가) | §5.6.6 / §8.1 |
| `engine/` 에서 `shim/` import 예외 | 1 (analyzer) | 0 (Phase 1 Week 2 후) | §3.4.2 / §5.8.3 |
| patches (Phase 0 종료 시점) | 0 | 0 (유지) | §4.1 / §4.3 |
| Fixture 카테고리 | 10 (§7.16.3) | 14 (+functional/protobuf/llm/std-schema-parity) | §7.16.5 |
| CI job 수 (build.yml PR gate) | 기존 | +2 (shim-drift-check, depguard) | §3.1.2 / §3.4.3 |
| Cycle 2 미해결 Q (C 발) | 10 (Q-C2*-*) | 4 (PENDING) + 6 (CLOSED) | §12 |

이 표는 Sub-3 개정 완료 기준으로 Cycle 4 integration audit 에 전달된다.

## 부록 C. 외부 참조 정합성 (Cycle 1 동일)

## 부록 D. 예시 시나리오로 보는 rewrite 파이프라인 — Sub-3 §D.2 개정

### D.1 시나리오 1 — primitive is 체크 (Cycle 1 동일)

### D.2 시나리오 2 — createValidate with Standard Schema (Sub-3 대폭 개정)

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

**ttsc 흐름 (개정 §7.3.3 반영)**:
1. CallSite `{Method: "createValidate", ...}`.
2. `dispatchEmit` → `EmitProgrammer(KindCreateValidate, "input", schema, Options{})`
   → `EmitCreateValidateWithStandardSchema(schema)` → validate functor emit.
3. 결과 expression: `_createStandardSchema((input) => { /* validate body */ })`.
4. `driver/rewrite.go` 의 `injectInternalImports` 가 파일 상단에
   `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema";`
   주입.
5. Rewrite `ConsumeParens=true` → 뒤따르는 `()` 흡수.

**최종 JS** (sentinel, strict 유지):
```js
"use strict";
/* @typia-ttsc-rewritten */
import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema";
exports.validateUser = (_createStandardSchema((input) => { /* validate body */ }));
```

**검증**:
- MCP / Next.js Server Actions / Hono 가 `validateUser["~standard"].validate(obj)`
  호출 → Standard Schema v1 계약 충족.
- TS `_createStandardSchema` (134 LOC) 가 `issues[].path` 파싱 담당 → Go 인라인
  복제 없음. BND-API-04 위반 제거.
- Edge runtime 호환 — static import 이므로 Cloudflare Workers 로드됨.

### D.3 시나리오 3 — 재귀 트리 타입 (Cycle 1 동일 + §7.1.7 참조)

(Cycle 1 §D.3 유지. `isState.visiting` 이 §7.1.7 일반 규약의 실구현 예임을 주석.)

---

## 부록 E. Rewrite 매칭 엣지케이스 (Cycle 1 유지)

## 부록 F. 파일 크기 관리 (Cycle 1 유지)

## 부록 G. Cycle 3 self-critique (5 → 7 로 확장)

**Critique-1 [Cycle 1 유지, 부분 해소]**: shim 자동생성 실패 대비.
→ Sub-3 에서 `shim-drift-check` CI job (§3.1.2) + `shim-drift-report.yml` issue
봇 (§3.1.3) 로 대비 강화. 단 "이전 shim 버전 롤백" 자동화는 Phase 1 이월.

**Critique-2 [Cycle 1 유지]**: 문자열 rewrite 근본 취약성. silent miscompile
우려는 여전. Phase 1 사용자 설문 권고.

**Critique-3 [부분 해소, Sub-3]**: IR 경계 CI 검증 부재.
→ §3.4.3 에 `depguard` / `go-arch-lint` 도입 규약 추가. E §3.3 협력.

**Critique-4 [Cycle 1 유지]**: FUNCTORS 147 중 Phase 0 ~30 커버.
→ §6.3 확장 표가 Phase 1 Week 별 완성 기한 명시 — 타임라인 구체화.

**Critique-5 [Cycle 1 유지]**: Edge runtime 검증 실제 방법 부재. kill-gate
§1.4.1 에 Cloudflare Workers 1 fixture 조건 명시 — Phase 1 이관.

**Critique-6 [Sub-3 신설]**: shim drift 대응을 **자동 PR** 로 만들 뻔 했던 설계.
F §2.4 의 자동 PR 제안을 **반박** (§3.1.3) — 공격 표면 감지. 그러나 **자동화
편의성을 완전히 포기한 대가**로 수동 bump 부담 증가. 담당자(C) 번아웃 리스크
존재 — 월 1 회 수동 실행을 감당 가능한지 Phase 1 말 재평가.

**Critique-7 [Sub-3 신설]**: IR drift 감지 CI 없음. `EmitProgrammer` switch 와
`cmd/ttsc/dispatch.go` switch 의 case 집합 교차 검증 (`tools/check_dispatch_parity.go`,
§7.0.3) 은 Phase 1 Week 1 에 작성 예정 — Phase 0 에서는 없음. 그 사이 두 switch
한쪽만 수정되는 리팩터 PR 은 런타임에서만 skip + 로그로 노출. Phase 1 전환 기간
동안 Go unit test 로 선검증 의무.

각 critique 는 Cycle 4 integration audit 에서 재검토 후 `conventions/03-ttsc-driver.md`
최종 문서로 승격된다.

---

본 개정본은 Cycle 3 교차 합의를 반영하여 Cycle 4 integration audit (모순 검사)
로 넘긴다. §12 의 PENDING 3 건 (Q-C2A-1, Q-C2D-1, Q-C2E-2) 은 Cycle 4 에서 해소.
§1.4.1 kill-gate 표는 Phase 1 진입 시 wiki/08 로 승격된다.

특히 §7.3.3 Standard Schema emit 개정은 **문서 변경만으로는 경계 무결성이 회복
되지 않으므로** (A §4.2 명시), Cycle 3 종료 전 구현 PR (`assert.go:63` 교체 +
`driver/rewrite.go` import 주입 + `test_standard_schema_parity.ts` fixture) 머지
가 Sub-3 수렴 조건이다.

— 끝 —
