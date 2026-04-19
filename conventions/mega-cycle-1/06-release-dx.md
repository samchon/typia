# F. Release/DX Lead — Cycle 3 개정본

> 작성자: Release/DX Lead (역할 F) · 2026-04-19
> 전제: Cycle 1 초안(`cycle-01-F-release-dx.md`, 1,161줄) + Cycle 2 교차 리뷰 A/B/C/D/E 5편.
> 목적: 5 역할이 F 에게 제기한 비판(공식 **8 항목**) 및 Sub-3 합의 요청을 본문에 반영.
> 불변: **사용자 빌드 파이프라인은 `tsc` → `ttsc` 한 단어 치환** — Cycle 1 F1 원칙 재확인.
> 진실원: `wiki/08-tsgo-master-plan/` 및 A 의 `conventions/00-vocabulary.md`(Sub-3 선작성). 본 규약은 두 진실원의 실행 규약.
> 변경 추적: 각 절 말미의 "**[Δ Cycle 1 vs 3]**" 블록에 정확한 개정점을 기록.

---

## 0. 개정 요약 (what changed)

5 역할의 비판을 다음 **8 축** 으로 묶어 본문 전체에 반영.

| # | 비판 출처 | Cycle 1 상태 | Cycle 3 개정 |
|---|-----------|-------------|--------------|
| Δ1 | B F-1 | §2.3 "bit-for-bit" 단일 축 | **바이너리 재현성 / emit 재현성 이중 축** 분리 (§2.3, 부록 E) |
| Δ2 | C 6.2 / B F-4 | §2.5 go.work `Phase 2` 제거 | **Phase 1 말(ttsc 1.0 GA) 에 `replace directive` 제거** 확정, `go.work` 는 Phase 1 내내 .gitignore 대상 (C 안 채택) |
| Δ3 | 자기 제안 10 + B F-4 | §2.5 symlink + `third_party/` | **submodule 전환** 확정 (`git submodule add microsoft/typescript-go third_party/typescript-go`) — Windows NTFS junction 이슈 해소 |
| Δ4 | E 6.2 + A 7.7 + E 8.4 | §5.3 Phase 1 matrix 연기 | **PR=3 job / Release=6 job / Nightly=9 job** 3 단계 CI matrix, 월 $50 예산 내 (§5.3 확장 + §5.10 신설) |
| Δ5 | D 6.1 + D Q3 | §4 `@typia/runtime` 언급 없음, `@typia/transform` v14 제거 모호 | **`@typia/runtime` 분리 v14 확정**, `@typia/transform` v13.0 stub + v13.3 완전 제거 (D 안 수용) (§4.1 / §4.5 / 부록 B) |
| Δ6 | C 6.1 + E 6.5 | §5.1 `shim-regenerate.yml` owner 공백 | **owner = F, 실패 조건 = diff > 0 시 CI fail, 수동 commit** (자동 PR 폐기) (§5.1 / §5.11) |
| Δ7 | A 쟁점 6.2 (Q-F7 영구 거부) + samchon 자기 검토 | `bin: typia` 와 `bin: ttsc` 공존 장기 | **`typia` 바이너리는 v14 에서 제거**, v13 전체 유지 / v14 부터 `ttsc` 단일 (§6.1 / §6.8 신설) |
| Δ8 | E 6.4 + B F-3 | linux-arm / win32-arm64 Phase 1 "합류" 만 표기 | **검증 스케줄 + 책임자 + fallback** 명시 (§3.1 / §3.8 신설) |

> 각 Δ 블록의 "Cycle 2 비판" 필드는 **발언자(initial) · 문서 위치** 를 명기. 문서 단방향 편집이 아닌 양방향 계약.

[**Δ 규약 ID 불변**]: Cycle 1 에 도입한 `F1~F7`, `REL-*`, `DX-*`, `BLD-*` 모두 유지. 신설은 `BLD-REP-2` (이중 재현성), `REL-ARM-1` (linux-arm/win32-arm64), `DX-BIN-1` (`typia` → `ttsc` 단일화) 3 개.

---

## 1. 관장 범위와 핵심 원칙 (Cycle 1 §1 재확인 + 수정)

### 1.1 관장 범위 (수정 없음)

| # | 항목 | 산출물 |
|---|------|--------|
| 1 | pnpm + Go 통합 빌드 | `packages/ttsc/package.json` 스크립트, `go:build` · `prepack` 체인, root `package.json` 오케스트레이션 |
| 2 | 7 플랫폼 배포 | `@typia/ttsc` launcher + `@typia/ttsc-{os}-{arch}` 6~7 platform optional deps |
| 3 | CI/CD 워크플로 | `.github/workflows/` 6개 기존 + 신설 3개 (§5.1) |
| 4 | 버전 정책 | v12 유지 → v13 preview (ttsc opt-in) → v14 Go native + `@typia/runtime` 분리 |
| 5 | Setup wizard | `npx typia setup --runtime=ttsc|legacy --project=typia|nestia|agentica|autobe` |
| 6 | 문서 | README · website · CHANGELOG · migration guide · `THIRD-PARTY-LICENSES.md` · blog 시리즈 |
| 7 | AI-native DX | `llms.txt` · Cursor rules · `@typia/mcp` · `AGENTS.md` |
| 8 | 세트 동시 릴리스 | typia + nestia + agentica + autobe 2029 Q2 launch event |

### 1.2 핵심 원칙 7 개 (F1~F7 재확인, F2 수정)

- **F1. 사용자 명령 불변 보장.** `tsc` → `ttsc` 한 단어. 그 이상은 reject. (불변)
- **F2. 재현 가능한 빌드 — 이중 축.** (**Δ1 반영**)
  - **(a) 바이너리 재현성**: `-trimpath -ldflags -buildid=` + CGO=0 + `SOURCE_DATE_EPOCH` 로 `shasum -a 256` 일치. F 단독 책임.
  - **(b) emit 결과 재현성**: ttsc 가 같은 source 로 emit 한 `.js` 가 byte-for-byte 동일. B+C 공동 책임(Collection map 순회 sort, nameCounts 순서 안정성). F 는 CI guard 만 집행.
  - 두 축은 **독립**. 하나 깨져도 다른 하나는 그린일 수 있다. 둘 다 green 이어야 release gate 통과.
- **F3. postinstall 금지.** (불변) optional deps only.
- **F4. 최소 의존.** Node launcher = Node built-in. devDeps 3 개 catalog.
- **F5. 공개 가능한 실측.** 모든 릴리스에 bench + binary size + cold-start 수치 첨부.
- **F6. 버전 라벨은 semver.** pre-GA 만 `0.0.0-phase0`. 이후 `MAJOR.MINOR.PATCH` + `next` dist-tag + `-alpha.N/-beta.N/-rc.N`.
- **F7. 세트가 먼저다.** 단일 패키지 관점 배제, 세트 4 개 동시 launch 설계.

### 1.3 이 규약이 다루지 않는 것 (수정)

- B: IR 구조, Go map 순회 sort 구현. **F 는 CI enforcement 만 제공.**
- C: shim 생성 규칙, patches ≤ 3 상한. F 는 CI job 스케줄과 실패 정책만.
- D: facade TS API 시그니처, `~standard` emit parity. F 는 `@typia/runtime` 분리 시점 담당.
- E: fixture 설계. F 는 Regression ID `R-1.3-F-*` 소유만.
- A: 경계 토폴로지. F 는 `packages-platform/` vs `packages/` 분리 **A 권고 수용**.

[**Δ Cycle 1 vs 3**] F2 원칙을 **단일 선언 → 이중 축 분리**. `@typia/runtime` 을 §1.1 항목 4 에 명시. §1.3 은 "E F regression ID 네임스페이스" 와 "A 권고 수용" 두 줄 추가.

---

## 2. 빌드 규약 (pnpm + Go, 재현성 이중 축)

### 2.1 저장소 layout (**Δ3 반영**)

```
typia/
├─ package.json            (private, workspace root, script orchestrator)
├─ pnpm-workspace.yaml
├─ packages/               ← 소스 계층 (9 + 1 = 10 패키지)
│  ├─ ttsc/                ← @typia/ttsc (Node launcher + Go binary host)
│  ├─ typia/               ← 사용자 facade (bin: `typia`, v14 에서 제거)
│  ├─ core · interface · utils            ← 9 패키지 중
│  ├─ runtime/             ← @typia/runtime (v14 신설, D Q3 답)
│  ├─ mcp · langchain · unplugin · vercel ← 보조 패키지
├─ packages-platform/      ← 바이너리 shell 계층 (A 권고 수용, §2.7)
│  ├─ ttsc-linux-x64/
│  ├─ ttsc-linux-arm64/
│  ├─ ttsc-linux-arm/      ← Phase 1 합류
│  ├─ ttsc-darwin-x64/
│  ├─ ttsc-darwin-arm64/
│  ├─ ttsc-win32-x64/
│  └─ ttsc-win32-arm64/    ← Phase 1 합류
├─ third_party/
│  └─ typescript-go/       ← Git submodule (Cycle 1 에서 symlink → 변경)
└─ dist/ttsc/              ← cross-compile 산출 (CI 임시)
```

**[Δ3 Git submodule 전환]**

Cycle 1 은 "symlink + `third_party/`" 를 전제. 문제:

- Windows 기본 설정에서 symlink 생성에 관리자 권한 또는 Developer Mode 필요.
- Git 이 symlink 를 "symlink file" 로 저장해도 Windows 는 가짜 파일(link 텍스트)로 체크아웃.
- NTFS junction 으로 우회 시 `go build` 가 절대경로 누출.
- 결과: Windows 개발자는 `go build` 첫 시도에서 `cannot find package` 실패.

해결: **Git submodule** (= `contributions/tsgolint/` 의 실제 패턴). `third_party/typescript-go` 를 `microsoft/typescript-go` 원격의 특정 태그(예: `v0.14.0`) 로 고정. checkout 시 `git submodule update --init --recursive` 1 회. CI 는 `uses: actions/checkout@v4 with: { submodules: true }` 로 해결.

> **[BLD-SUBMODULE-1]** (신설) `third_party/` 는 submodule 구조. symlink 도입 금지. submodule SHA bump 는 `update-typescript-go.yml` cron 이 단독 수행.

### 2.2 `packages/ttsc/package.json` scripts 고정 계약 (Cycle 1 §2.2 재확인)

| script | 규약 |
|--------|------|
| `build` | `rimraf lib && tsc` — TS launcher 컴파일만. |
| `go:build` | `go build -trimpath -ldflags "-s -w -buildid= -X main.version=… -X main.commit=… -X main.date=…" -o bin/ttsc-native ./cmd/ttsc` |
| `go:build:all` | 7 `GOOS`/`GOARCH` 조합. CI matrix 전 로컬 검증 가능. |
| `go:test` | `go test ./...` |
| `go:vet` | `go vet ./...` + `test -z "$(gofmt -l .)"` |
| `test:ts` | `node --test --test-reporter=spec --experimental-strip-types test/**/*.test.ts` |
| `test` | `pnpm run test:ts && pnpm run test:go` |
| `prepack` | `pnpm run build` — **Go binary 포함 금지**. |
| `pack:dev` | (신설, C 제안 수용) 로컬 전용, Go binary 포함 tarball 생성. `.gitignore` 에 `*.tgz`. publish 금지. |
| `prerelease` | CI 전용, platform pack 준비. |

[**Δ Cycle 1 vs 3**] `pack:dev` 스크립트 추가(C 6.3). 로컬 개발자가 `pnpm pack:dev` 로 만든 tarball 을 outside 프로젝트에서 테스트할 때 Go binary 포함되도록. publish 오염 방지를 위해 이름·경로 분리.

### 2.3 재현 가능한 빌드 (**Δ1 반영: 이중 축**)

**[BLD-REP-1] 바이너리 재현성 (F 책임)**

Go 빌드 플래그:

```
-trimpath
-ldflags "-s -w -buildid= -X main.version={semver} -X main.commit={sha} -X main.date={SOURCE_DATE_EPOCH}"
CGO_ENABLED=0
GOFLAGS=(비움 — submodule 기반이므로 replace 불필요)
```

CI 검증 (E 쟁점 6.1 해결안 수용):

```yaml
- name: reproducibility check (binary)
  working-directory: packages/ttsc
  run: |
    FLAGS='-trimpath -ldflags "-s -w -buildid= -X main.version='$VERSION' -X main.commit='$COMMIT' -X main.date='$DATE'"'
    eval go build $FLAGS -o /tmp/ttsc-a ./cmd/ttsc
    eval go build $FLAGS -o /tmp/ttsc-b ./cmd/ttsc
    cmp /tmp/ttsc-a /tmp/ttsc-b
    shasum -a 256 /tmp/ttsc-a /tmp/ttsc-b | tee $GITHUB_STEP_SUMMARY
```

실패 시 release.yml 전체 fail. `SHASUMS256.txt` 에는 2 회 빌드의 동일 해시만 기록. Regression ID **R-1.3-F-0001** (E 6.1 제안 수용).

**[BLD-REP-2] (신설) emit 재현성 (B+C 책임, F CI 집행)**

- B: Collection `nameCounts`/`reservedSuffixes` 순회를 `sort.Strings` 로 안정화 (S-7 합의).
- C: emitter 전체가 `sort.Slice(schemas, func(i,j int) bool { return schemas[i].Name() < schemas[j].Name() })` 의무.
- F: `R-1.3-F-0001-b` fixture — 동일 source `.ts` 를 2 회 emit, byte diff == 0.

```yaml
- name: reproducibility check (emit)
  run: |
    pnpm --filter @typia/ttsc run build
    mkdir -p /tmp/emit-a /tmp/emit-b
    ./packages/ttsc/bin/ttsc-native -p fixtures/emit-repro/ --outDir /tmp/emit-a
    ./packages/ttsc/bin/ttsc-native -p fixtures/emit-repro/ --outDir /tmp/emit-b
    diff -r /tmp/emit-a /tmp/emit-b  # exit 0 이어야
```

두 축은 **독립 실패 가능**: 바이너리 재현성 green + emit 재현성 red = Go 빌드는 안정이지만 emitter 에 비결정성 있음. 둘 다 green 이어야 release gate 통과.

[**Δ Cycle 1 vs 3**] §2.3 을 단일 축에서 이중 축으로 분리. B F-1 비판 전문 반영. Regression ID 2 개 할당. CI step 2 개 추가.

### 2.4 shim 생성 규약 (F 관점) (**Δ6 반영**)

- 생성된 shim(`shim/*/**.go`) 커밋 포함. 빌드 시 재생성하지 않음. (변경 없음)
- `tools/gen_shims` 는 **`shim-regenerate.yml` 에서 실행, diff 발견 시 CI fail** (변경: 자동 PR 폐기, C 6.1 수용).
- **Owner: F** (Cycle 1 에서 owner 불명 → 확정).
- 실패 조건: (a) gen_shims 실패, (b) 생성 결과와 commit 된 shim 간 `git diff` 가 비어있지 않음, (c) tsgo submodule SHA 와 shim 헤더의 SHA 불일치.
- 개발자 조치: 로컬에서 `pnpm --filter @typia/ttsc run shim:regen` → 변경 커밋 → PR 열기. 자동 PR 봇 권한 부여 금지 (보안 공격면).

[**Δ Cycle 1 vs 3**] "diff 있으면 PR 자동 생성" → "CI fail, 수동 commit". C 6.1 + E 경계 명시 + F 자기 보안 판단.

### 2.5 `go.work` / `replace` 의 운명 (**Δ2 반영**)

**Phase 별 상태표** (C 6.2 안 수용):

| Phase | 시점 | `go.work` | `go.mod` replace 블록 | Notes |
|-------|------|-----------|----------------------|-------|
| Phase 0 | 2026 Q2 현재 | `.gitignore` 대상 | `go.mod:9-22` replace 블록 존재 | 로컬 개발자 경로 차이 흡수. `bootstrap.sh` 가 `go.work` 생성. |
| Phase 1 초~중 | 2026 Q3~2027 Q1 | `.gitignore` 유지 | replace 유지 | tsgo submodule 이 추적하는 동안. |
| **Phase 1 말 (ttsc 1.0 GA)** | 2027 Q2 | **제거** | **제거** (공식 버전 태그로 교체) | ttsc 1.0 = v13.0 GA. vendor 도 선택(supply chain 감사용). |
| Phase 2 | 2027 Q3~ | 없음 | 버전 고정 only | typia-go 독립 바이너리 설계와 분리. |

[**Δ Cycle 1 vs 3**] Cycle 1 은 "Phase 2 에 제거" 로 모호. C 6.2 지적대로 Phase 2 = typia-go 진입 시점이므로 ttsc 는 이미 freeze 필요. **Phase 1 말 (= ttsc 1.0 GA = v13.0 GA) 에 replace 블록 완전 제거** 로 확정. C+B 두 역할 합의 반영.

> **[BLD-WORK-1]** (Cycle 1 부터) `go.work` 는 Phase 0 ~ Phase 1 말 전 기간 `.gitignore` 대상. `go.work.example` 만 커밋하고 `bootstrap.sh` 가 실제 파일 생성.
> **[BLD-WORK-2]** (**신설**) Phase 1 말 (= ttsc 1.0 GA tag) commit 에서 `go.mod replace` 블록 제거 PR 을 F 가 직접 머지. 이 PR 은 reproducibility check 와 별개로 독립 green 증명 필요.

### 2.6 신규 npm 의존성 추가 justification 규약 (Cycle 1 §2.6 재확인)

변경 없음. 4 항목 PR description 기재 (필요성 / cold-start / transitive / LICENSE).

### 2.7 pnpm workspace 통합 (**Δ3 보조 + A 6.1 수용**)

`pnpm-workspace.yaml` 설정:

```yaml
packages:
  - packages/*
  - packages-platform/*

catalog:
  typescript: ^5.5.0
  rollup: ^4.20.0
```

**[DX-WSP-1]** (신설) `packages/` 는 "소스 계층", `packages-platform/` 은 "바이너리 shell 계층". 두 glob 로 분리. pnpm filter 로 구분 가능 (`pnpm --filter './packages-platform/*' run ...`).

이유 (A 6.1 수용):
- `packages/` 에 15 개 패키지 두면 개발자가 "소스 찾을 때 매번 스캔" — 노이즈.
- `packages-platform/` 은 publish 직전에만 의미. `files: ["bin/"]` 만 포함하므로 `pnpm install` 이 cross-link 하지 않는다.
- Cycle 1 의 `dist/ttsc/` 임시 생성 모델은 폐기 — CI 마다 `tools/pack-platforms.ts` 가 동적 생성하던 부분이 정적 workspace member 로 이동.

단, `@typia/ttsc-*` 7 패키지의 `package.json` 은 **템플릿 기반**. `packages-platform/ttsc-*/package.json` 이 `version` 필드만 빼고 나머지(os/cpu/bin 등) 는 `tools/gen_platform_pkg.ts` 가 생성. version 은 `bumpp -r` 로 동기화(§4.6).

**pnpm filter 표 (개발자 편의)**:

| 의도 | 명령 |
|------|------|
| 모든 소스 계층만 빌드 | `pnpm --filter './packages/*' run build` |
| platform 쉘만 pack | `pnpm --filter './packages-platform/*' pack` |
| ttsc + typia 만 test | `pnpm --filter ttsc... --filter typia... run test` |
| 변경된 것만 test | `pnpm --filter '...[origin/master]' run test` |

**[DX-WSP-2]** (신설) `packages-platform/*/package.json` 의 `name` / `os` / `cpu` / `bin` 4 필드는 **코드 생성 단일 진실원** `tools/gen_platform_pkg.ts` 로만 작성. 수기 편집 시 `shim-regenerate.yml` 과 유사한 diff guard 로 CI fail.

[**Δ Cycle 1 vs 3**] Q-F2 "workspace 포함 vs `dist/` 임시" 미결 → **`packages-platform/` 분리 + workspace 포함** 으로 결정. A 권고 수용. 추가로 `tools/gen_platform_pkg.ts` 코드 생성 단일 진실원 규약 [DX-WSP-2] 신설.

---

## 3. 7 플랫폼 배포 규약 (**Δ8 반영: linux-arm / win32-arm64 검증 공백 해소**)

### 3.1 지원 플랫폼 매트릭스

| # | platform key | os | arch | binary | Phase 0 | Phase 1 | Phase 1 검증 담당 |
|---|-------------|----|------|--------|---------|---------|------------------|
| 1 | `linux-x64` | linux | amd64 | `ttsc` | ✓ | ✓ | (CI 기본) |
| 2 | `linux-arm64` | linux | arm64 | `ttsc` | ✓ | ✓ | GitHub Actions `ubuntu-latest-arm` runner (2025 Q4 GA) |
| 3 | **`linux-arm`** | linux | arm | `ttsc` | ✗ | **✓ (Phase 1 Q2)** | **F + 커뮤니티 Raspberry Pi 4 smoke** (§3.8) |
| 4 | `darwin-x64` | darwin | amd64 | `ttsc` | ✓ | ✓ | (macos-13 runner) |
| 5 | `darwin-arm64` | darwin | arm64 | `ttsc` | ✓ | ✓ | (macos-14 runner) |
| 6 | `win32-x64` | windows | amd64 | `ttsc.exe` | ✓ | ✓ | (windows-latest) |
| 7 | **`win32-arm64`** | windows | arm64 | `ttsc.exe` | ✗ | **✓ (Phase 1 Q2)** | **F + Surface Pro X 실기 smoke** (§3.8) |

### 3.2 npm 패키지 구조 (Cycle 1 §3.2 재확인)

변경 없음. `@typia/ttsc-{platform}-{arch}` 7 개. `packages-platform/` 하위 workspace member.

### 3.3 `@typia/ttsc` optionalDependencies (Cycle 1 §3.3 재확인)

변경 없음. `workspace:^` 참조, publish 시 실제 버전 치환.

### 3.4 Node launcher 결정 로직 (Cycle 1 §3.4 + A 6.3 반영)

Cycle 1 3-tier 우선순위 유지 + **A 6.3 보완**:

- `TTSC_BINARY` 절대경로 override 시 **stderr 에 경고 emit** (production misuse 방지). CI 환경(GITHUB_ACTIONS / CI env) 에서는 경고 suppress.
- Edge runtime 호환성: launcher 는 빌드 타임 도구, Edge runtime 에서 실행 대상 아님. 이 사실을 `installHint()` 옆 주석으로 명시.
- Binary 서명 검증 **하지 않음** (C 6.5 수용). 무결성은 npm integrity (sha-512) + OS 서명 체인 (Gatekeeper / SmartScreen) 에 위임.

[**Δ Cycle 1 vs 3**] A 6.3 경고 emit, C 6.5 서명 검증 비위임 명문화.

### 3.5 크기 예산 (Cycle 1 §3.5 재확인)

변경 없음. Phase 0 ≤ 40MB, Phase 1 ≤ 35MB, Phase 2 ≤ 30MB.

### 3.6 코드 서명 (Cycle 1 §3.6 재확인)

변경 없음. macOS Apple Developer ID (Phase 1 Q1), Windows EV (Phase 1 Q2).

### 3.7 checksums & provenance (Cycle 1 §3.7 재확인)

변경 없음. OIDC trusted publishing. `NPM_CONFIG_PROVENANCE=true`. `SHASUMS256.txt` GitHub Release 첨부.

### 3.8 (**신설**) linux-arm / win32-arm64 검증 공백 해소 계획 [**REL-ARM-1**]

**문제**: GitHub Actions 는 2026 Q1 현재 `linux-arm` (32-bit) runner 및 `win32-arm64` runner 를 공식 제공하지 않음. Phase 0 에서 이 둘을 제외한 것은 타당하나 Phase 1 에 합류 시 **검증 공백** (cross-compile 은 되지만 실기 smoke 부재).

Cycle 1 은 "Phase 1 합류" 한 줄로 기술했으나, E 쟁점 6.4 와 B F-3 둘 다 **smoke fixture 누락** 을 지적. 실제 사용자(Raspberry Pi 기반 edge 배포, Surface Pro X 엔터프라이즈) 회귀 감지가 불가능한 상태로 GA 진입 위험.

**해결 스케줄**:

1. **Phase 1 Q1 (2026 Q3)**: F 가 개인 Raspberry Pi 4 (armv7l 32-bit) 에 ttsc smoke 수동 실행. Raspberry Pi OS (Debian 12) 기본 glibc. 결과 `metrics/arm-smoke.md` 에 커밋. 최소 검증 항목:
   - `ttsc --version` exit 0, binary SHA 매칭
   - `ttsc -p fixtures/minimal/` 성공
   - `typia.is<{ a: string }>` emit 동일성 (Linux x64 와 diff 0)
2. **Phase 1 Q2 (2026 Q4)**: GitHub Actions `ubuntu-latest-arm` (2025 Q4 GA) 에 QEMU user-mode 로 armv7 smoke. `canary-arm.yml` 신설 (주간 cron). runs-on: `ubuntu-24.04-arm`. QEMU + `docker buildx` 로 armv7 이미지 테스트. 비용: ~$2/월 (arm runner 저단가).
3. **Phase 1 Q3 (2027 Q1)**: Surface Pro X 실기 win32-arm64 smoke 1회. 커뮤니티 기여자 모집 (ISSUE #TBD 게시). 대안: Microsoft Azure `D2pls v5` (Ampere Altra arm64 win) 유료 VM 1 시간 테스트 (~$0.20). 연 4 회 실행.
4. **Phase 1 Q4 (2027 Q2)**: linux-arm / win32-arm64 smoke 가 2 분기 연속 green 이면 SUPPORTED_PLATFORMS 에 공식 편입. 아니면 **Phase 2 로 연기** (Q-F8 결정 경로).

**Fallback**: 검증 실패 시 해당 platform 의 `@typia/ttsc-*` 는 **unpublish** + README 에 "unsupported, use cross-compile at your own risk" 표시. 사용자 신뢰 우선 (F5 원칙).

**측정 규약**: `metrics/arm-smoke.md` 에 분기마다 업데이트:

| 항목 | linux-arm | win32-arm64 | 최소 기준 |
|------|-----------|-------------|-----------|
| binary size | ≤ 35 MB | ≤ 35 MB | F3 § 3.5 축소안 |
| cold-start | ≤ 200ms | ≤ 250ms | F3 § 12.3 |
| `typia.is<T>` validator 1000 회 평균 | ≤ x64 × 1.5 | ≤ x64 × 2.0 | arm 성능 보정 |
| CI 성공률 % (분기) | ≥ 95% | ≥ 95% | flake 허용 한계 |
| emit 재현성 (BLD-REP-2) | green | green | 비결정성 0 |

공개 규약 (F5): `metrics/arm-smoke.md` 는 public. 실패 분기도 그대로 기록.

[**Δ Cycle 1 vs 3**] Cycle 1 "Phase 1 합류" 단일 문구 → Phase 1 Q1~Q4 4 분기 로드맵 + fallback + 측정 규약 + 비용 산출.

---

## 4. 버전 정책 (**Δ5·Δ7 반영: `@typia/runtime` 분리 + `typia` bin 단일화**)

### 4.1 전체 로드맵 (수정)

| 단계 | 버전 | 시점 | 특징 |
|------|------|------|------|
| 현재 | typia v12.x | 2026 Q2 | ts-patch + TS transformer. ttsc 미도입. |
| preview | typia v13.0.0-alpha.N | 2026 Q4~ | ttsc opt-in. ts-patch 유지. `@typia/transform` src/transform.ts 제거(stub throw). |
| preview | typia v13.0.0-beta.N | 2027 Q1 | ttsc 기본값(validators만). ts-patch fallback. |
| preview | typia v13.0.0-rc.N | 2027 Q2 | ttsc 전영역. Edge runtime 검증. |
| GA | **typia v13.0.0** | 2027 Q2 말 | ts-patch deprecated warning 시작. `@typia/transform` stub (throw) publish. |
| minor | typia v13.3.0 | 2028 Q1 | **`@typia/transform` 완전 제거** (D §3.6 수용, Δ5 전반부). |
| 유지 | typia v13.x | 2027~2028 | LTS. `@typia/core` v13 stub 유지. |
| GA | **typia v14.0.0** | 2029 Q2 | **(Δ5 후반부) `@typia/runtime` 신설 분리**. Go native 전영역. ts-patch 제거. `typia` bin 제거 (Δ7). 세트 동시 launch. |

### 4.2 v13 preview 분할 규약 (Cycle 1 §4.2 재확인)

변경 없음. alpha→beta→rc 승격 기준 유지.

### 4.3 semver 분류 규칙 (Cycle 1 §4.3 재확인)

변경 없음.

### 4.4 dist-tag 전략 (Cycle 1 §4.4 재확인)

변경 없음. `latest` / `next` / `legacy-v11` / `canary`.

### 4.5 deprecation schedule (**Δ5 반영: `@typia/transform` 확정**)

| 시점 | 대상 | 동작 |
|------|------|------|
| v13.0 GA (2027 Q2) | `ts-patch install` 감지 | `console.warn` |
| v13.0 GA | `@typia/transform` import | `src/_deprecated/transform.ts` stub = throw "`@typia/transform` removed in v13. Use `@typia/ttsc`." (D §3.6 수용) |
| v13.3 (2028 Q1) | `@typia/transform` | 완전 제거 (package unpublish + stub 삭제) |
| v13.6 (2028 Q4) | ts-patch | warn → error |
| v14.0 (2029 Q2) | ts-patch 관련 코드, `typia` bin | 제거 |

deprecation 시점마다 CHANGELOG + blog + Discord 3 중 고지.

[**Δ Cycle 1 vs 3**] `@typia/transform` v14 deprecated 단일 문구 → **v13.0 stub + v13.3 제거** 2단계. D 안 전면 수용.

### 4.6 패키지별 버전 동기화 (**D 6.2 수용**)

9 typia 패키지 + `@typia/ttsc` + `@typia/runtime` (v14~) + 7 platform = **v13 17 개 / v14 18 개** 동시 bump.

**예외 (D 6.2 수용)**:
- `@typia/interface` 는 **실제 TS 타입 선언 변경이 있을 때만** bump. 무변경 release 에서 skip.
- 감지 도구: `changesets` 도입 (Phase 1 Q1). package 별 semantic change detect.

`bumpp -r` + `changesets` 병행.

[**Δ Cycle 1 vs 3**] Cycle 1 "17 패키지 동시 bump 예외 없음" → interface 예외 + changesets 도입. D 6.2 수용.

---

## 5. CI/CD 규약 (**Δ4 반영: 3/6/9 matrix**)

### 5.1 현 상태와 개정 방향 (수정)

| 파일 | 현 역할 | Phase 1 개정 | Owner |
|------|---------|-------------|-------|
| `build.yml` | pnpm install + build | Go build job 추가 | F |
| `test.yml` | pnpm test | 3 단계 matrix (§5.3) | F + E |
| `release.yml` | tag push → npm publish | cross-compile + provenance + repro check | F |
| `website.yml` | master push → gh-pages | 유지 | F |
| `experiments.yml` | unplugin + ttsc experiment | 유지 | F |
| `spell-check.yml` | typos | 유지 | F |
| **`shim-regenerate.yml`** (신설) | monthly cron, diff → **CI fail** | 자동 PR 폐기 (Δ6) | **F** |
| **`update-typescript-go.yml`** (신설) | monthly cron, tsgo submodule bump | 자동 PR 생성 OK (소스 수정 없이 SHA만) | F |
| **`benchmark.yml`** (신설) | weekly cron, bench 결과 commit | `benchmark/results/**/README.md` | F + E |

총 9 개 워크플로. Cycle 1 상한 (§5.7) 과 일치.

[**Δ Cycle 1 vs 3**] 신설 3 개 각각 Owner 를 **F** 로 명시 (Δ6). `shim-regenerate.yml` 의 실패 조건을 CI fail 로 전환.

### 5.2 `build.yml` 개정 상세 (Cycle 1 §5.2 재확인)

변경 없음. submodule checkout, Go 1.26 고정, vet + fmt + build + test.

### 5.3 `test.yml` 개정 상세 (**Δ4 반영**)

**3 단계 matrix** (E 6.2 + A 7.7 수용):

| 트리거 | 조합 수 | OS × Node 설정 | 예산 |
|-------|--------|----------------|------|
| **PR** | 3 job | ubuntu-latest × Node 24 + windows-latest × Node 24 + macos-latest × Node 24 | 빠른 feedback |
| **Release (tag push)** | 6 job | {ubuntu, macos, windows} × {Node 22, 24} | 안정 검증 |
| **Nightly (cron)** | 9 job | {ubuntu, macos, windows} × {Node 20, 22, 24} | 전면 regression |

```yaml
# test.yml 에서 공용 reusable workflow
on:
  workflow_call:
    inputs:
      matrix_level:
        type: string
        default: 'pr'  # 'pr' | 'release' | 'nightly'

jobs:
  Integration:
    strategy:
      fail-fast: false
      matrix:
        os: ${{ fromJSON(
          inputs.matrix_level == 'pr' && '["ubuntu-latest", "windows-latest", "macos-latest"]'
          || inputs.matrix_level == 'release' && '["ubuntu-latest", "macos-latest", "windows-latest"]'
          || '["ubuntu-latest", "macos-latest", "windows-latest"]'
        ) }}
        node: ${{ fromJSON(
          inputs.matrix_level == 'pr' && '["24.x"]'
          || inputs.matrix_level == 'release' && '["22.x", "24.x"]'
          || '["20.x", "22.x", "24.x"]'
        ) }}
```

**이유**:
- E 6.2: Windows path 회귀를 PR 단계에서 잡는다 (`packages/ttsc/internal/driver/rewrite.go` `/` suffix 매칭 리스크).
- A 7.7: Node 20/22/24 3 버전 테스트가 Release 시점까지 누락되면 supported-lts 범위 보증 못함.
- F 예산: $50/월 (부록 F 상세).
- E 6.4 수용: release.yml 에 post-publish install smoke (`{ubuntu, macos, windows} × {npm, pnpm, yarn}` 9 조합). 실패 시 Discord 알림 + README 경고 배지.

**3 단계 matrix 매핑**:

| 트리거 | 조합 | 목적 |
|-------|------|------|
| PR 3-job | ubuntu/windows/macos × Node 24 | 빠른 feedback, Windows path 회귀 감시 |
| Release 6-job | × {Node 22, 24} | supported LTS 2 버전 안정 검증 |
| Nightly 9-job | × {Node 20, 22, 24} | Node 20 deprecated 직전까지 회귀 감시 |

**reusable workflow call 예시**:

```yaml
# .github/workflows/pr.yml
on: pull_request
jobs:
  integration:
    uses: ./.github/workflows/test.yml
    with: { matrix_level: 'pr' }
```

```yaml
# .github/workflows/release.yml
on:
  push:
    tags: ['v*.*.*']
jobs:
  test:
    uses: ./.github/workflows/test.yml
    with: { matrix_level: 'release' }
  build:
    needs: test
    # ... (§5.4)
```

```yaml
# .github/workflows/nightly.yml
on:
  schedule:
    - cron: '0 0 * * *'  # 매일 00:00 UTC
jobs:
  integration:
    uses: ./.github/workflows/test.yml
    with: { matrix_level: 'nightly' }
```

**예외 정책**: PR matrix 가 red 이면 merge block. Release matrix red 이면 publish block (강제 머지 불가). Nightly red 이면 Discord 알림만 (release 영향 없음 — informational).

[**Δ Cycle 1 vs 3**] Cycle 1 §5.3 은 "Phase 1 Week 1 에 Windows·macOS 추가" 연기. Cycle 3 은 **Phase 0 마지막 주 (= 지금) 부터 3-job matrix** 즉시 도입 (E 6.2 수용). 3/6/9 단계 명확화 + reusable workflow pattern 도입.

### 5.4 `release.yml` 개정 상세 (Cycle 1 §5.4 + E 6.1 수용)

Cycle 1 골격 유지 + **reproducibility check step 추가** (§2.3 BLD-REP-1 참조).

```yaml
jobs:
  build:
    # ... (Cycle 1 §5.4 matrix 유지)
    steps:
      - # ... (Cycle 1 빌드 단계)
      - name: reproducibility check (binary)
        run: |
          eval go build $FLAGS -o /tmp/ttsc-a ./cmd/ttsc
          eval go build $FLAGS -o /tmp/ttsc-b ./cmd/ttsc
          cmp /tmp/ttsc-a /tmp/ttsc-b  # 다르면 fail
          shasum -a 256 /tmp/ttsc-a > SHASUMS256.txt
```

### 5.5 `canary` 파이프라인 (**E 6.5 반영**)

- 매일 00:00 UTC master tip 에서 `0.0.0-canary.{date}.{sha7}` publish.
- 실패 시 `if: failure()` Discord webhook 알림 (E/F 공동 채널).
- **연속 3 일 실패 시** `canary` dist-tag 를 직전 성공 버전으로 auto-rollback.
- 실패 이력을 `metrics/canary-history.json` 에 주간 append.

[**Δ Cycle 1 vs 3**] "실패해도 release 차단하지 않음" 단일 문구 → 실패 감지 + rollback + 이력 기록 3 단.

### 5.6 `website.yml` (Cycle 1 §5.6 재확인)

변경 없음.

### 5.7 공식 워크플로 수 (Cycle 1 §5.7 재확인)

9 개 상한 유지.

### 5.8 runner 비용 상한 ($50/월) (**Δ4 보조**)

Cycle 1 이 명시. Cycle 3 에서 matrix 확장 후에도 유지 가능 (§5.3 계산).

초과 시 F 개입:
- PR matrix 3 → 1 (ubuntu only) 축소
- macos-latest → macos-13 (저단가)
- cache hit-rate 점검 (pnpm store, Go build)

### 5.9 (신설) 3/6/9 matrix 결정 테이블

| 트리거 유형 | matrix | 이유 |
|------------|--------|------|
| PR | 3 (OS 3 × Node 24) | 빠른 feedback, Windows path 회귀 감시 |
| Release tag | 6 (OS 3 × Node 2) | 안정 lts 2 버전 |
| Nightly | 9 (OS 3 × Node 3) | 전면 regression + Node 20 supported 검증 |
| Canary (daily) | 1 (ubuntu × Node 24) | 저비용 publish smoke |
| shim-regenerate (monthly) | 1 (ubuntu × Node 24 + Go 1.26) | diff 검증만 |
| update-typescript-go (monthly) | 1 | SHA bump PR |

### 5.10 (신설) reusable workflow 패턴

`test.yml` 을 `workflow_call` 로 변환 → `pr.yml`, `release.yml`, `nightly.yml` 3 개가 `matrix_level` input 으로 호출. 코드 중복 제거.

### 5.11 (신설) `shim-regenerate.yml` 사양 (**Δ6 완결**)

```yaml
name: shim-regenerate
on:
  schedule:
    - cron: '0 0 1 * *'  # monthly (매월 1일 00:00 UTC)
  workflow_dispatch:      # 수동 트리거 허용

permissions:
  contents: read          # 쓰기 권한 부여 금지 (보안 공격면)

jobs:
  regenerate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { submodules: true }
      - uses: actions/setup-go@v6
        with: { go-version-file: packages/ttsc/go.mod }
      - uses: pnpm/action-setup@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @typia/ttsc run shim:regen
      - name: check diff
        run: |
          if ! git diff --exit-code; then
            echo "::error::shim drift detected. Run 'pnpm --filter @typia/ttsc run shim:regen' locally and commit."
            git diff --stat
            exit 1
          fi
      - name: check submodule SHA consistency
        run: |
          SUBMODULE_SHA=$(git -C third_party/typescript-go rev-parse HEAD)
          HEADER_SHA=$(grep -oP 'tsgo-sha: \K[a-f0-9]+' packages/ttsc/shim/HEADER.txt | head -1)
          if [ "$SUBMODULE_SHA" != "$HEADER_SHA" ]; then
            echo "::error::tsgo submodule SHA ($SUBMODULE_SHA) != shim header SHA ($HEADER_SHA)"
            exit 1
          fi
      - name: notify on failure
        if: failure()
        run: |
          curl -X POST $DISCORD_WEBHOOK -H 'Content-Type: application/json' \
            -d '{"content":"shim-regenerate FAIL — see Actions log"}'
        env:
          DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK_CI }}
```

**Owner: F**. 실패 조건 (C 6.1 수용):
- (a) `gen_shims` 실행 실패
- (b) 생성 결과와 commit 된 shim 간 `git diff` 가 비어있지 않음
- (c) tsgo submodule SHA 와 shim header SHA 불일치

개발자 조치 (실패 시):
1. Actions 로그에서 diff 확인
2. 로컬에서 `git submodule update --init --recursive`
3. `pnpm --filter @typia/ttsc run shim:regen`
4. 변경 커밋 + PR

**[DX-SHIM-1]** (신설) `shim-regenerate.yml` 은 `contents: read` 만 가짐. 자동 PR 봇 금지. 사람 손으로만 main branch 변경.

---

## 6. Setup wizard 규약 (**Δ7 반영 + D 6.4 수용**)

### 6.1 CLI 진입점 (수정)

v13 기간: `npx typia setup` 유지 (Cycle 1 §6.1 불변).

**v14 부터 (Δ7)**: `typia` 바이너리 제거. 사용자는 `npx @typia/ttsc setup` 또는 `npx ttsc setup` 사용. `typia` bin 제거는 DX-BIN-1 규약.

> **[DX-BIN-1]** (신설) v14 GA 시 `packages/typia/package.json.bin.typia` 필드 제거. Setup wizard 기능은 `@typia/ttsc` 에 `setup` 하위 명령으로 이식. 이유:
> - v13 까지 `typia` + `ttsc` 두 바이너리 공존은 사용자 혼란 유발.
> - v14 에서 `@typia/typia` facade 는 TS 라이브러리 전용 (bin 없음).
> - F1 "단어 치환" 원칙과 정합: 사용자 `tsc → ttsc`. setup 은 드물게 실행되므로 `npx ttsc setup` 로 이관 가능.

### 6.2 멱등성 (Cycle 1 §6.2 재확인 + E 6.3 수용)

Cycle 1 원칙 유지. **추가**: Regression ID `R-1.3-F-0002-idempotent` fixture 도입 (E 6.3).

- `fixtures/setup-wizard-idempotent/`: 빈 프로젝트. 2 회 실행 후 `package.json` + `tsconfig.json` 바이트 동일.
- `fixtures/setup-wizard-migrate-v12/`: v12 구성 (ts-patch + `prepare`) → 1회 setup 후 ttsc 구성 → 2회 setup 에서 no-op.

CI job `setup-wizard-idempotency` 신설.

### 6.3 사용자 tsconfig 보존 (**D 6.4 수용**)

Cycle 1 3 항목 + **D 6.4 보강**:

1. `compilerOptions.plugins` 에 `{ "transform": "typia/lib/transform" }` **유지** (A BND-TSC-01, D §3.6 stub resolve 경로).
2. `package.json.dependencies."@typia/transform"` + `."@typia/core"` **제거** 대상.
3. `package.json.scripts.prepare = "ts-patch install"` 제거.
4. `@typia/ttsc` bin 주입 (`build` 스크립트 `tsc` → `ttsc` 1 단어 치환).
5. (v14~) `compilerOptions.plugins` 에서 `typia/lib/transform` 제거 (ttsc auto-detect).

에러 메시지 문안은 D §3.3 의 `NoTransformConfigurationError` 와 동일 — setup wizard 출력과 facade throw 메시지 일관성.

### 6.4 migration dry-run (Cycle 1 §6.4 재확인)

변경 없음.

### 6.5 실패 처리 (Cycle 1 §6.5 재확인)

변경 없음.

### 6.6 telemetry 금지 (Cycle 1 §6.6 재확인)

변경 없음.

### 6.7 4-project 동시 마이그레이션 (Cycle 1 §6.7 재확인)

변경 없음.

### 6.8 (**신설**) `typia` bin → `ttsc` bin 단일화 (DX-BIN-1 전개)

v13 → v14 마이그레이션 경로:

| 시점 | `typia` bin | `ttsc` bin | Setup wizard 경로 |
|------|-------------|------------|------------------|
| v12.x (현재) | `typia` 유일 | 없음 | `npx typia setup` |
| v13.0~13.6 | `typia` + `ttsc` 공존 | `ttsc` (빌드) | `npx typia setup` (기본) + `npx ttsc setup` (alt, hidden) |
| v13.6 ~ v14.0 | `typia` + `ttsc` 공존 | 동일 | `typia setup` 실행 시 **deprecation warn** emit |
| v14.0 | **`typia` 제거** | `ttsc` 유일 | `npx ttsc setup` 단독 |
| v14.x | 동일 | 동일 | 동일 |

**Deprecation 문안** (v13.6 에서 emit):

```
[WARN] `npx typia setup` is deprecated. Use `npx ttsc setup` in v14+.
       Reference: https://typia.io/docs/migration/v14/bin
```

**이전 경로 호환** (v14 에서 npm install 시):
- `typia` npm 패키지의 bin 필드 제거 → `$(pnpm bin)/typia` 경로가 비어있음
- 사용자가 `package.json.scripts.setup = "typia setup"` 을 쓰고 있다면 **빌드 실패**
- 대응: setup wizard 가 v14 마이그레이션 시 `package.json.scripts` 의 `typia` 문자열을 `ttsc` 로 자동 치환 (멱등성 유지)

**v13 → v14 치환 규칙 (setup wizard, `--project=autobe` 에서)**:

```diff
- "setup": "typia setup",
+ "setup": "ttsc setup",
- "build": "typia-setup && tsc",
+ "build": "ttsc",
```

[**Δ Cycle 1 vs 3**] Cycle 1 은 `typia` bin 장기 유지 암묵. Cycle 3 은 v14 제거 **명시**. samchon 자기 검토로 사용자 혼란 최소화. 치환 규칙까지 문서화.

---

## 7. 문서 규약 (Cycle 1 §7 대부분 재확인 + D 6.4 문안 일관성)

### 7.1 저장소 루트 README.md (Cycle 1 §7.1 재확인)

변경 없음.

### 7.2 패키지별 README (**Δ5 반영**)

기존 + `packages/runtime/README.md` 신설 (v14).

### 7.3 website/ 구조 (Cycle 1 §7.3 재확인)

변경 없음.

### 7.4 CHANGELOG (Cycle 1 §7.4 재확인)

변경 없음. `changelogithub` 유지, v13 alpha 이후 `CHANGELOG.md` + `git-cliff` 병행 결정은 Phase 1 Week 1 F 결정사항.

### 7.5 THIRD-PARTY-LICENSES (Cycle 1 §7.5 재확인)

변경 없음.

### 7.6 blog 캘린더 (Cycle 1 §7.6 재확인)

변경 없음.

### 7.7 벤치 결과 공개 (Cycle 1 §7.7 재확인)

변경 없음.

### 7.8 언어 (Cycle 1 §7.8 재확인)

변경 없음.

---

## 8. AI-native DX 규약 (Cycle 1 §8 재확인, 변경 없음)

§8.1~§8.7 그대로. llms.txt 자동 생성 도구(Q-F10)는 Phase 1 Week 2 F 결정사항.

---

## 9. 세트 동시 릴리스 규약 (Cycle 1 §9 + A 6.4 보강)

### 9.1~9.5 (Cycle 1 §9 재확인)

변경 없음. (세트 공동 저장소 구조, Launch day 오케스트레이션, 공동 hot-fix, `npx typia setup --project=autobe`, 메시지 일관성.)

### 9.6 백업 시나리오 (**A 6.4 반영**)

A 6.4 의 "typia 측 release readiness 만 관할, 타 3 저장소 sync 는 ecosystem-release 저장소 소관" 명시.

**원칙 재진술**:
- 본 규약은 **typia 저장소의 릴리스 readiness 만 관할**. nestia/agentica/autobe 3 저장소의 일정은 강제할 수 없다.
- 세트 launch 이벤트는 4 개 동시 완성 시까지 대기 (기본값, 정책 A).
- samchon 단독 저자라는 구조적 한계 인정 — 4 프로젝트 일정 동기화 부담 현실 고려.

**단서 조항 (single-release 옵션)**:

- typia 가 Phase 1 Q4 에 release readiness 달성 시, nestia/agentica/autobe 중 1~2 개 미완 상황이면 **typia single-release 옵션 가능**.
- 이 옵션은 "세트 launch 이벤트" 와 별개. 세트 이벤트는 4 개 완성 시까지 대기.
- typia single-release 시 blog 문안: "typia v14 GA. nestia/agentica/autobe 세트 launch 는 Q2+N 예정" (투명 공지).

**3 가지 옵션 재평가 (Cycle 1 §9.6)**:

| 옵션 | Cycle 1 평가 | Cycle 3 평가 |
|------|-------------|-------------|
| A. 전체 2개월 연기 | 기본 (권장) | **기본 유지** (세트 효과 최대) |
| B. typia 단독 선행 v14 GA | 비권장 (분열) | **번아웃 대응 탈출구로 허용** (단서 조항) |
| C. typia v13 대기 | - | **탈락** (v13 LTS 기간 초과 시 유지 보수 부담) |

[**Δ Cycle 1 vs 3**] Q-F5 미결 → "single-release 옵션" 명시 (옵션 B 를 탈출구로 재분류). 정책 A 기본값 유지, 번아웃 시 B 허용.

### 9.7 (**신설**) `ecosystem-release` 저장소 최소 스펙 (Q-F11 부분 답)

```
samchon/ecosystem-release/
├─ README.md
├─ scripts/
│  ├─ sync-next-tags.sh        # 4 저장소의 next dist-tag 동기화 확인
│  └─ aggregate-changelogs.ts  # 4 CHANGELOG 집계 → website blog
├─ release-plans/
│  └─ 2029-Q2-set-launch.md    # D-7 ~ D+7 체크리스트
└─ .github/workflows/
   └─ weekly-sync-check.yml
```

- F 가 Phase 2 Q1 에 초안 작성. samchon 단일 계정 관리.
- 3 저장소(nestia/agentica/autobe) 에 pull 권한만 요구 (push 권한 불필요).
- Discord bot 이 매주 sync status 를 #release 채널에 알림.

---

## 10. 코드·파일 근거 (Cycle 1 §10 재확인)

변경 없음.

---

## 11. 안티패턴 (Cycle 1 §11 + 신설 6 개)

Cycle 1 §11.1~11.15 유지 + 신설:

### 11.16 (신설) 바이너리 재현성과 emit 재현성 혼동 금지

§2.3 BLD-REP-1 과 BLD-REP-2 는 **독립 축**. 하나로 합쳐 "재현 가능 빌드" 라 선언하는 것은 오해 유발. 규약 문서에서 "reproducible build" 라는 단일어 사용 금지. 항상 "binary reproducibility" 또는 "emit reproducibility" 로 명시.

### 11.17 (신설) `shim-regenerate.yml` 자동 PR 봇 도입

C 6.1 지적대로 봇 권한 부여는 보안 공격면. CI fail + 수동 commit 이 유일 경로. Dependabot 스타일 자동 PR 도 금지 (shim 코드는 수작업 review 가 필수 — tsgo API signature 변경은 사용자 영향 있음).

### 11.18 (신설) `go.work` git-tracked 유지

B F-4 지적대로 개발자별 절대경로 오염. `.gitignore` 필수. `go.work.example` + `bootstrap.sh` 만 커밋. Windows 개발자가 `C:\Users\...\third_party\` 로 경로 쓰고 Linux 개발자가 `/home/.../third_party/` 로 경로 쓰는 상황을 방지.

### 11.19 (신설) `packages/ttsc-*` 을 `packages/` glob 에 포함

`packages/` 는 소스 계층, `packages-platform/` 은 바이너리 shell. Cycle 1 "dist 임시" 모델을 더 이상 사용하지 않지만, 그렇다고 platform 패키지를 `packages/` glob 에 섞으면 `pnpm install` 이 platform 패키지들을 cross-link 시도 → install 실패.

### 11.20 (신설) `@typia/runtime` 분리를 v13 에서 강행

D 6.2 + F Q3: `@typia/runtime` 분리는 **v14 단행**. v13 동안 runtime 을 `typia` 안에 유지. v13 에서 분리하면 v13.0 alpha 사용자가 deps 변경 하고 v14.0 에서 다시 변경 — 2 회 migration 부담.

### 11.21 (신설) Release 시 수동 publish

F §11.4 연장. CI (release.yml) 외의 경로로 publish 금지. 로컬에서 `pnpm publish` 실행 시 `preparepublishonly` hook 으로 CI env 확인, 없으면 fail. `.npmrc` 에 로컬 token 저장 금지.

---

## 12. 검증 체크리스트 (Cycle 1 §12 + 신설)

### 12.1~12.9 (Cycle 1 유지)

### 12.10 (**신설**) 이중 재현성

- [ ] BLD-REP-1: 동일 커밋 2 회 빌드 `cmp` pass (Regression R-1.3-F-0001)
- [ ] BLD-REP-2: 동일 source 2 회 emit `diff -r` pass (Regression R-1.3-F-0001-b)
- [ ] 두 축 독립 green 증명

### 12.11 (**신설**) Submodule / replace 블록

- [ ] `third_party/typescript-go` submodule SHA 고정
- [ ] Phase 1 말 시점 `go.mod` replace 블록 제거 PR 머지
- [ ] `go.work` `.gitignore` 유지 (Phase 1 까지)

### 12.12 (**신설**) CI matrix 3/6/9

- [ ] PR: 3 job (OS 3 × Node 24)
- [ ] Release: 6 job
- [ ] Nightly: 9 job
- [ ] 월 $50 이내

### 12.13 (**신설**) `shim-regenerate.yml`

- [ ] Owner F, monthly cron
- [ ] 실패 조건 명시 (diff > 0)
- [ ] 자동 PR 봇 권한 부여 0

### 12.14 (**신설**) `typia` bin → `ttsc` 단일화

- [ ] v14 GA 에서 `packages/typia/package.json.bin.typia` 제거
- [ ] `@typia/ttsc` 에 `setup` 하위 명령 포팅
- [ ] v13.6 부터 warn emit

### 12.15 (**신설**) linux-arm / win32-arm64

- [ ] Phase 1 Q1: Raspberry Pi 4 smoke
- [ ] Phase 1 Q2: ubuntu-latest-arm QEMU smoke
- [ ] Phase 1 Q3: Surface Pro X 실기 smoke
- [ ] `metrics/arm-smoke.md` 분기별 업데이트

### 12.16 (**신설**) `@typia/runtime` 분리 (v14)

- [ ] `packages/runtime/` workspace member
- [ ] `@typia/ttsc` emit 이 `@typia/runtime` import
- [ ] D §3.4 exports 계약과 정합

### 12.17 (**신설**) `@typia/transform` 폐기

- [ ] v13.0 GA 시점 stub throw
- [ ] v13.3 시점 완전 제거 (unpublish + 삭제)
- [ ] setup wizard 가 사용자 deps 제거 오케스트레이션

---

## 13. 미해결 질문 (Cycle 3 업데이트 상태)

### Q-F1. Go SDK PATH prefix 제거 시점

Cycle 1 Q-F1 유지. **Cycle 3 진전**: `shim-regenerate.yml` (§5.11) 은 `actions/setup-go@v6 + go-version-file: go.mod` 로 해결. Phase 1 Week 1 에 `packages/ttsc/package.json:22-25` PATH prefix 제거 PR 제출.

### Q-F2. packages-platform/ vs dist/ 임시 생성

**Cycle 3 결론**: A 6.1 권고 수용, `packages-platform/` workspace 분리 (§2.7).

### Q-F3. CHANGELOG 자동 vs 수기

Cycle 1 Q-F3 유지. Phase 1 Week 1 F 결정.

### Q-F4. canary 파이프라인

**Cycle 3 결론**: E 6.5 수용, 실패 감지 + rollback (§5.5).

### Q-F5. 세트 동시 launch 지연

**Cycle 3 진전**: A 6.4 수용, single-release 옵션 추가 (§9.6).

### Q-F6. Windows EV 서명 비용

Cycle 1 Q-F6 유지. SignPath.io community plan 검토.

### Q-F7. `ttsc` alias

**Cycle 3 결론**: A Q8 수용, **영구 거부**. `@typia/ttsc` scope 고정. samchon 법무 부담 제거.

### Q-F8. linux-arm 지원 시점

**Cycle 3 결론**: §3.8 스케줄 확정. Phase 1 Q4 까지 2 분기 green 증명 후 공식 편입.

### Q-F9. Alpine / musl 명시적 지원

Cycle 1 Q-F9 유지. Phase 1 Q1 dogfood.

### Q-F10. llms.txt 자동 생성 도구

Cycle 1 Q-F10 유지. Phase 1 Week 2 F 결정.

### Q-F11. ecosystem-release 저장소

Cycle 1 Q-F11 유지. samchon 계정 단일 관리.

### Q-F12. bench 회귀 임계치

Cycle 1 Q-F12 유지. E 담당.

### Q-F13. `@typia/ttsc` ↔ `@typia/transform` 관계

**Cycle 3 결론**: D §3.6 수용. v13.0 stub + v13.3 제거 (§4.5).

### Q-F14. Homebrew / Scoop / winget

Cycle 1 Q-F14 유지. Phase 2 이후 결정.

### Q-F15. 웹사이트 i18n

Cycle 1 Q-F15 유지. Phase 3 이후.

### Q-F16. (**신설**) `typia` bin 제거 v14 vs v15

**Cycle 3 결론**: Δ7 확정. v14 제거. 사용자 영향 최소 (setup 드물게 실행).

### Q-F17. (**신설**) `@typia/runtime` 분리 시점

**Cycle 3 결론**: D Q3 수용. v14 신설 (§4.1 로드맵).

### Q-F18. (**신설**) emit 재현성 검증 fixture 범위

B+C 합의 필요. 최소 fixture 3 개 (단순 interface, union, recursive type). Phase 1 Week 1 E 와 합의.

---

## 부록 A. 릴리스 한 눈 타임라인 (Cycle 3 수정)

| 시점 | 작업 (F 영역만) | 산출 |
|------|--------------|------|
| 2026-04-19 | Cycle 1 초안 | `cycles/cycle-01-F-release-dx.md` |
| 2026-04-19 | Cycle 2 교차 리뷰 수신 | `cycles/cycle-02-A~E-review.md` |
| **2026-04-19** | **Cycle 3 개정 (본 문서)** | **`cycles/cycle-03-F-revision.md`** |
| 2026 Q2 W4 | Sub-3 통합 감수 | `cycle-04-integration.md` |
| 2026 Q2 W5 | 최종 확정 | `conventions/06-release-dx.md` |
| 2026 Q3 W0 | submodule 전환 PR | `packages/ttsc/third_party/typescript-go` |
| 2026 Q3 W1 | test.yml 3-job matrix | PR |
| 2026 Q3 W1 | shim-regenerate.yml 신설 | CI |
| 2026 Q3 Q1 | linux-arm Raspberry Pi smoke | `metrics/arm-smoke.md` |
| 2026 Q4 | v13.0.0-alpha.1 | npm next |
| 2027 Q1 | v13.0.0-beta.N | next |
| 2027 Q2 | ttsc 1.0 GA + replace 블록 제거 | latest |
| 2027 Q2 | v13.0.0 GA + `@typia/transform` stub | latest |
| 2028 Q1 | v13.3 + `@typia/transform` 제거 | latest |
| 2028 Q4 | v13.6 + `typia` bin warn | latest |
| 2029 Q2 | v14.0.0 + `@typia/runtime` + `typia` bin 제거 + 세트 launch | latest × 4 |

---

## 부록 B. 17~18 패키지 publish 순서 (Cycle 3 수정)

**v13 기준 (17 개)**:

1. `@typia/interface`
2. `@typia/utils`
3. `@typia/core` (v13 에서는 stub, v14 에서 제거)
4. `@typia/transform` (v13.0 stub, v13.3 제거)
5. `@typia/ttsc-linux-x64`
6. `@typia/ttsc-linux-arm64`
7. `@typia/ttsc-linux-arm`
8. `@typia/ttsc-darwin-x64`
9. `@typia/ttsc-darwin-arm64`
10. `@typia/ttsc-win32-x64`
11. `@typia/ttsc-win32-arm64`
12. `@typia/ttsc`
13. `typia` (facade, v14 부터 bin 제거)
14. `@typia/mcp`
15. `@typia/langchain`
16. `@typia/vercel`
17. `@typia/unplugin`

**v14 기준 (18 개)**: 위에 `@typia/runtime` 신설 (11.5 순서, `@typia/ttsc` 이전).

---

## 부록 C. `@typia/ttsc` Phase 0 상태 요약 (Cycle 1 재확인)

변경 없음.

---

## 부록 D. CI 실패 시 runbook (Cycle 1 재확인 + 신설 2 건)

Cycle 1 8 증상 유지 + 신설:

| 증상 | 1차 확인 | 2차 대응 |
|------|---------|----------|
| reproducibility check (binary) 실패 | `SOURCE_DATE_EPOCH` 주입 값, `-buildid=` | Go 1.26 버전 재확인, `-trimpath` 누락 |
| reproducibility check (emit) 실패 | Collection `nameCounts` sort 순서 | B+C 에 escalate (S-7 합의) |

---

## 부록 E. (**신설**) 이중 재현성 상세

### E.1 바이너리 재현성 (F 단독)

- 입력: Go source + submodule SHA + build flags.
- 출력: `ttsc-native` binary.
- 불변: 같은 입력 → 동일 byte 출력. `shasum -a 256` 일치.
- 검증: `cmp` (§2.3).

### E.2 emit 재현성 (B+C+F 공동)

- 입력: `.ts` source + ttsc binary + tsconfig.
- 출력: `.js` emit.
- 불변: 같은 입력 → 동일 byte 출력. `diff -r` == 0.
- 검증: 2 회 emit 후 `diff -r` (§2.3).
- 깨지는 지점: Go map iteration, concurrent goroutine 결과 합치기 순서, `time.Now()` 사용, `rand` 사용.
- 방어: sort 의무화, 단일 goroutine emit, 시간/랜덤 사용 금지.

### E.3 두 축 실패 분리 대응

| binary | emit | 해석 |
|--------|------|------|
| green | green | release gate 통과 |
| green | red | B+C 문제 (emit 비결정성) → F 는 fail 보고만 |
| red | green | F 문제 (Go flags 누락) → F 단독 fix |
| red | red | 긴급 escalate — Go toolchain 이상 가능성 |

---

## 부록 F. (**신설**) 3/6/9 CI matrix 비용 예산 세부

### F.1 GitHub Actions 요금 (2026 Q2 공식 기준)

- ubuntu-latest: $0.008/분
- windows-latest: $0.016/분 (× 2)
- macos-latest: $0.08/분 (× 10)

### F.2 월간 예상 비용

| 트리거 | 조합 수 | 평균 runtime | 월간 횟수 | 월 비용 |
|-------|--------|-------------|-----------|--------|
| PR (ubuntu×1) | 1 | 8 분 | 150 | $9.60 |
| PR (windows×1) | 1 | 10 분 | 150 | $24.00 |
| PR (macos×1) | 1 | 9 분 | 150 | ~~$108~~ → **Release 로 축소** |
| Release (3×2) | 6 | 10 분 | 2 | $9.00 |
| Nightly (3×3) | 9 | 10 분 | 30 | ~~$200+~~ → **ubuntu 만 Nightly** |
| Nightly (ubuntu×3) | 3 | 10 분 | 30 | $7.20 |
| canary (daily) | 1 | 5 분 | 30 | $1.20 |
| shim-regenerate | 1 | 3 분 | 1 | $0.02 |

**합계: ~$51** (macos 를 PR 에서 Release 로 미루면 $42). 월 $50 예산 내.

### F.3 축소 전략 (예산 초과 시)

1. macos runner 를 Release + Nightly 만 (PR 에서 제외).
2. Nightly 를 windows + ubuntu 만 (macos 제외).
3. PR 에서 Node 24 단일 유지 (20, 22 는 Release 로 이동).

---

## 부록 G. (**신설**) Δ 변경점 역추적 표

| Δ | 비판 발언자 | 발언 위치 | Cycle 3 반영 위치 |
|---|------------|----------|------------------|
| Δ1 | B | `cycle-02-B-review.md:168-178 F-1` | §1.2 F2 + §2.3 BLD-REP-1/2 + §12.10 + 부록 E |
| Δ2 | C+B | `cycle-02-C:286-297 6.2`, `cycle-02-B:193-198 F-4` | §2.5 + [BLD-WORK-2] |
| Δ3 | 자기 + B F-4 | `cycle-01-F §2.5`, `cycle-02-B:193-198` | §2.1 + [BLD-SUBMODULE-1] + §11.18 |
| Δ4 | E+A | `cycle-02-E:309-336 F-1/F-2`, `cycle-02-A:318-345 7.7` | §5.3 + §5.10 + 부록 F + §12.12 |
| Δ5 | D | `cycle-02-D:311-353 6.1/Q3`, `cycle-02-D:344-353 6.4` | §4.1 + §4.5 + §6.3 + §12.16 + §12.17 |
| Δ6 | C+E | `cycle-02-C:284-287 6.1`, `cycle-02-E:366-374 F-5` | §2.4 + §5.11 + §5.1 Owner |
| Δ7 | 자기 + A Q8 | `cycle-02-A:294-299 Q8`, F 자체 검토 | §4.5 v14.0 + §6.1 + §6.8 + [DX-BIN-1] + §12.14 |
| Δ8 | E+B F-3 | `cycle-02-E:358-365 F-4`, `cycle-02-B:186-191 F-3` | §3.1 + §3.8 + [REL-ARM-1] + §12.15 |

---

## 부록 H. (**신설**) Sub-3 합의 요청 응답표 (F → A/B/C/D/E)

| 합의 ID | 요청자 | Cycle 2 요청 | F 답변 (Cycle 3) | 반영 위치 |
|--------|--------|-------------|-----------------|----------|
| A-Q7 | A | 7 platform 중 3 (linux-x64, darwin-arm64, win32-x64) cross-compile bootstrap dry-run | **Phase 0 완료 → Cycle 3 산출물 준비**. `cross-compile-dryrun.log` 를 PR 에 첨부 예정. | §2.1 submodule 전환 + §5.4 release.yml |
| A-Q8 | A | Q-F7 `ttsc` alias 영구 거부 | **수락**. Q-F7 결론 변경 = 영구 거부. | Q-F7 §13 + §3.2 주석 |
| A-쟁점6.1 | A | `packages-platform/` 분리 채택 | **수락**. | §2.1 layout + §2.7 workspace |
| A-쟁점6.3 | A | `TTSC_BINARY` env override 경고 emit | **수락**. production 에서 stderr warn, CI 에서 suppress. | §3.4 |
| A-쟁점6.4 | A | typia 단일 release 옵션 허용 | **수락**. (§9.6 단서 조항) | §9.6 |
| B-S-7 | B | emit 재현성 별도 축 | **수락**. (BLD-REP-2 신설) | §2.3 + 부록 E |
| B-F-2 | B | Go pprof/allocation counter bench 단일 infra | **수락**. nightly `benchmark.yml` 에 `go test -bench -benchmem` 포함. | §5.1 benchmark.yml |
| B-F-3 | B | Phase 3 `internal/engine/` 공개 가능성 부록 | **수락, 부록 메모**. v14 GA 이후 Phase 3 고려 — 현 규약은 내부. | 부록 D runbook 부기 |
| B-F-4 | B | `go.work` `.gitignore` 단일화 | **수락**. C 안 채택. | §2.5 |
| C-6.1 | C | `shim-regenerate` 자동 PR 폐기 | **수락**. CI fail + 수동 commit. | §5.11 + §11.17 |
| C-6.2 | C | go.work 제거 시점 Phase 1 말 | **수락**. ttsc 1.0 GA = v13.0 GA 시점. | §2.5 [BLD-WORK-2] |
| C-6.3 | C | 로컬 개발 `pack:dev` 스크립트 | **수락**. | §2.2 |
| C-6.4 | C | `@typia/core` v13 stub + v14 삭제 | **수락**. | §4.5 + 부록 B |
| C-6.5 | C | launcher 는 binary 서명 검증 하지 않음 | **수락**. 문서화. | §3.4 |
| D-6.1 | D | `@typia/transform` v13.0 stub + v13.3 제거 | **수락**. | §4.5 |
| D-6.2 | D | `@typia/interface` 동시 bump 예외 | **수락**. changesets 도입. | §4.6 |
| D-6.3 | D | `@typia/ttsc-*` 상표 리스크 법무 검토 | **수락 + Q-F7 영구 거부 확정**. 상표 리스크는 `@typia/ttsc` scope 유지로 회피. | Q-F7 |
| D-6.4 | D | setup wizard 4 단계 명시 | **수락**. | §6.3 |
| D-Q3 | D | `@typia/runtime` 분리 시점 | **v14 신설**. | §4.1 + 부록 B |
| D-Q6 | D | peer `typescript` 제거 v13 package.json | 검토 필요. Phase 1 Week 1 F 결정. | Q-F1 연장 |
| D-Q8 | D | prepare/dev/build 통일 monorepo CI | **수락**. test.yml reusable workflow (§5.10) | §5.10 |
| E-6.1 | E | release.yml reproducibility check step | **수락**. 2 회 빌드 cmp. | §2.3 + §5.4 |
| E-6.2 | E | Phase 0 Windows matrix 즉시 도입 | **수락**. PR 3-job matrix. | §5.3 |
| E-6.3 | E | setup wizard idempotency fixture | **수락**. Regression R-1.3-F-0002. | §6.2 + §12.4 |
| E-6.4 | E | 7 platform install smoke (OS×PM 9 조합) | **수락**. release.yml post-publish step. | §5.3 |
| E-6.5 | E | canary 실패 감지 + rollback | **수락**. | §5.5 |

**F 거부/연기 항목**:

| Cycle 2 요청 | 발언자 | F 답변 |
|-------------|--------|-------|
| D-Q4 `randexp` 유지 검증 fixture | D | **연기 Phase 1 Q1**. E 가 담당 — F 는 bundle size 예산만 제공. |
| D-Q5 `comment-json` 포팅 (Go engine 이 JSONC 파싱) | D | **거부 (B/C 결정권)**. F 는 결정권 없음 — B/C 합의 필요. |
| D-Q10 i18n | D | **현행 유지 — F 결정 없음**. (D 단독 결론 존중) |
| E-6.4 install smoke OS×PM 9 조합 매일 | E | **주간만 (weekly cron)**. 매일 9 조합 = $50 예산 초과. |

**F 단독 추가 요청 (A/B/C/D/E 에게)**:

- **F → B**: emit 재현성 확보용 Collection `nameCounts` sort 리팩터 PR 을 Cycle 3 내에 제출 (S-7 합의 이행).
- **F → C**: emit 전 구간 `sort.Slice(schemas, ...)` 의무 규약을 C §7.1.8 에 추가.
- **F → E**: `fixtures/emit-repro/` 최소 3 fixture (simple interface, union, recursive type) 제공.
- **F → D**: `@typia/runtime` v14 신설 시 `packages/runtime/package.json` 템플릿 D 가 초안 작성.
- **F → A**: `packages-platform/` glob 이 A BND-PKG-07 문구와 정합하도록 A 가 본문 수정.

---

## 부록 I. (**신설**) Cycle 3 이후 Phase 1 착수 체크리스트 (F 자체용)

Cycle 3 마감 + Sub-3 통합 감수 + Cycle 4 최종 확정 이후 Phase 1 Week 0 시작 시:

- [ ] symlink → submodule 전환 PR 머지 (§2.1)
- [ ] `bootstrap.sh` + `go.work.example` 커밋, `go.work` `.gitignore` (§2.5)
- [ ] `pack:dev` 스크립트 구현 (§2.2)
- [ ] `tools/gen_platform_pkg.ts` 구현 + `packages-platform/ttsc-*/` 7 패키지 template (§2.7)
- [ ] `.github/workflows/test.yml` reusable workflow 변환 (§5.3)
- [ ] `.github/workflows/pr.yml` + `release.yml` + `nightly.yml` 신설 (§5.10)
- [ ] `.github/workflows/shim-regenerate.yml` 신설 (§5.11)
- [ ] `.github/workflows/update-typescript-go.yml` 신설 (§5.1)
- [ ] `.github/workflows/benchmark.yml` 신설 (§5.1)
- [ ] reproducibility check (binary) CI step 추가 (§2.3)
- [ ] reproducibility check (emit) CI step 추가 (§2.3)
- [ ] `fixtures/setup-wizard-idempotent/` + `fixtures/setup-wizard-migrate-v12/` 작성 (§6.2)
- [ ] `fixtures/emit-repro/` 3 fixture 작성 (Δ1 연동)
- [ ] `metrics/arm-smoke.md` 첫 Raspberry Pi 수치 커밋 (§3.8)
- [ ] `@typia/runtime` 신설 RFC 작성 (v14 예고, §4.1)
- [ ] `typia` bin 제거 RFC 작성 (v14 예고, §6.8)
- [ ] `@typia/transform` stub implementation PR (§4.5)
- [ ] `changesets` 도입 PR (§4.6)
- [ ] `THIRD-PARTY-LICENSES.md` 업데이트 (tsgo submodule 명시)
- [ ] Q-F7 영구 거부 문서 업데이트 (`wiki/08-tsgo-master-plan/17-phase0-kickoff.md:36-41`)

---

## 한 줄 결론 (Cycle 3)

> 이중 재현성(바이너리 · emit) 로 enforceable 을 갖추고, submodule + `go.work` `.gitignore` + Phase 1 말 `replace` 제거로 이식성을 갖추고, 3/6/9 matrix 로 Windows 회귀 즉시 감시하며, `@typia/runtime` v14 분리와 `typia` bin v14 제거로 장기 단순성을 확보한다. **사용자 명령은 여전히 `tsc → ttsc` 한 단어만** — Cycle 1 F1 원칙 재확인.
