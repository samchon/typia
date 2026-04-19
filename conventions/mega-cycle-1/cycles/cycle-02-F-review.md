# F — Mega-1 Sub-2 교차 리뷰 (Release/DX Lead 관점)

> 교차 리뷰 기준: 2026-04-19 feat/ttsc. F(Release/DX)가 A/B/C/D/E 5 초안(자기 제외)을 `tsc → ttsc 한 단어 치환`, `pnpm+Go 재현 빌드`, `7 플랫폼 cross-compile`, `optionalDeps`, `OIDC provenance`, `Setup wizard`, `release.yml / workflow 일치`, `4 프로젝트 동시 launch` 관점으로 본 결과다.
> 약어: **P1** = "tsc→ttsc 한 단어만" 불변. **F2** = reproducible binary. **F3** = no postinstall, optionalDeps only.

---

## 1. 총평

### 1.1 전반적 품질 및 결함의 위치

5 초안 모두 **자기 도메인은 정밀**하지만 **release 표면과의 계약이 비어 있거나 상충**한다. 특히 ① A가 `@typia/ttsc-{os}-{arch}` optionalDep **이름은 F 소관**이라 넘기면서 그 이름 자체를 `BND-API-03` 에서 "v13 고정" 으로 박아 F 의 자유도를 이미 잠갔고, ② B 의 **Go 1.26 + go.work + linkname** 조합은 F2 재현 빌드 (`-trimpath -buildid= CGO=0`) 와 기술적으로 양립하지만 `go.work`/`replace directive`/`symlink third_party` 가 CI release runner 의 `fetch-depth`, submodule checkout, reproducible 해시에 **각각 isolated 해답**을 요구하며, ③ C 의 **"patch ≤ 3 + shim 자동생성"** 은 7 플랫폼 cross-compile 시 (특히 Windows arm64 / Linux arm) linkname 의존성이 깨질 수 있음에도 "cross-compile 테스트" 조항이 없고, ④ D 의 **`executable/` → `@typia/ttsc` bin proxy 이전** 은 `package.json.bin.typia` 유지를 말하지만 P1 ("한 단어 치환") 과 `npx typia setup` 엔트리가 **두 패키지에 이중 존재**하는 UX 모순을 유발, ⑤ E 의 **CI matrix 3 OS × 3 Node** 은 F 의 `release.yml`·`build.yml`·`test.yml` 가 `ubuntu-latest` 단일 + Node 24 만 게이트로 제시한 수치와 충돌한다. 통합하면 **Sub-3 에서 9 조합 matrix + shim 재생성 drift 검증 + optionalDeps 이름 A/F 재확인 + Setup wizard 단일 bin entry 재정의**가 필요하다.

### 1.2 핵심 위험 5 가지 (우선순위)

(가) **deprecation pipeline 의 semver 분류 공백** — D 의 "`typia/lib/transform` 제거" 일정(v13.3) vs A 의 "v13 에서 throw stub" vs F `release.yml` 의 semver 분류표가 이 deprecation 을 PATCH 로 분류할지 MINOR 로 분류할지 명확하지 않다. 잘못 pipe 하면 `latest` dist-tag 가 throw stub 로 덮이면서 v13.2 → v13.3 에서 사용자 수만 앱이 런타임 실패. F 의 `bumpp -r` (§4.6) 가 자동화라 더 위험.

(나) **Windows runner × symlink × submodule 물리적 상충** — B `go.work` + `third_party/typescript-go` symlink 전략이 CI 의 `actions/checkout@v4 submodules: true` 와 **물리적으로 상충** 한다 (symlink 는 git blob 에 없음). release.yml bootstrap 이 반드시 cross-platform bash (Windows runner) 에서 동작해야 함. C §2.1 은 "symlink 가 기본, F 판단 시 submodule 전환" 인데 **F 는 이미 판단했다**: submodule 필수.

(다) **Standard Schema emit 정본 미확정** — D(`_createStandardSchema` 호출) 와 B/C(inline emit) 사이에서 정본 미확정이라 GA 시점까지 user-observable drift 존재. E 가 golden fixture 로 고정할지 아직 합의 없음. Sub-3 전에 해결하지 않으면 v13.0.0-beta.1 release 가 GA 기능을 깨지 않고는 못 낸다.

(라) **7 플랫폼 cross-compile 의 untested 2 종** — linux-arm (Raspberry Pi 32-bit) 과 win32-arm64 는 tsgo 본체가 공식 빌드 매트릭스에 포함하지 않는 플랫폼. typia 가 여기서 먼저 cross-compile 을 돌리는 것은 **tsgo 버그 발견의 최전선**. B 초안은 이 리스크를 Phase 1 체크리스트에도 넣지 않음.

(마) **bin entry 이중 존재 (`typia` vs `ttsc`)** — D §3.5 는 `bin.typia` 를 `@typia/ttsc` CLI proxy 로 유지. F §6.1 은 `npx typia setup` 유지. 결과적으로 `typia` + `ttsc` 두 명령이 사용자 `node_modules/.bin` 에 동시 존재. 사용자는 어느 것을 써야 하는지 혼란. P1 ("tsc → ttsc 한 단어") 은 지키지만 onboarding UX 는 깨짐.

### 1.3 F 의 결론

이 5 초안은 **각자 옳지만 서로 다른 우주를 가정한다**. Sub-3 에서 F 는 `pnpm install → submodule checkout → shim drift check → go build matrix × 7 → cross-platform test → pnpm publish with OIDC` 파이프라인을 **단일 트레이서** 로 하여 A/B/C/D/E 의 조항을 "이 pipeline 을 통과할 수 있는가" 로 재평가할 것을 요청한다. 통과 불가능한 조항은 Sub-3 에서 개정 또는 유예. F 는 파이프라인의 실패 지점을 `release.yml` 에 직접 박아서 gate 로 만든다.

---

## 2. A 초안 비판 (경계 ↔ npm 토폴로지)

### 2.1 쟁점1 — `@typia/ttsc-{os}-{arch}` 이름을 A 가 선점한 뒤 F 에 떠넘김

A `BND-PKG-07` (L190~252) 에서 optionalDeps 7 종 이름 (`@typia/ttsc-darwin-arm64` 외) 을 **문자 그대로 고정**하고 "F 소관" 이라 덧댔으나, `BND-API-03` (L449 이후 표) 에선 이 경로를 **v13·v14 불변 표면**으로 재고정한다. 두 조항이 같은 이름을 서로 다른 "책임 주체" 로 지정하는 구조적 자기 참조다.

(a) **Release 관점 문제** — F 가 optionalDeps 배포를 실무 실행할 때, 예컨대 2028 년에 tsgonest 처럼 `@typia/binary-*` 로 통일하거나, 4 프로젝트 (typia/nestia/agentica/autobe) 가 **같은 Go 바이너리 하나**를 `@samchon-ecosystem/tsgo-{os}-{arch}` 같은 공용 네이밍으로 공유하게 만들고 싶다면, A 의 이름 고정은 **semver-major 급 변화**로 취급되어 다른 경계 약속들 (BND-API-01 등) 과 한 번에 bump 되어야 한다. F 는 이를 원하지 않는다 — 이름 변경은 **배포 토폴로지 최적화**이지 사용자 API 불변과는 무관하다.

(b) **세트 launch 에 미치는 영향** — F §9 가 제시한 2029 Q2 4 프로젝트 동시 launch 는 공통 바이너리 배포를 **비용과 일관성 측면에서 강하게 원하는 시나리오**. A 의 이름 고정은 이 경로를 구조적으로 봉쇄한다. 2029 까지 typia 가 공식 바이너리 호스팅 권한을 독점한다는 사실 자체가 4 프로젝트 합류를 늦춘다.

(c) **해결안** — A `BND-PKG-07` 은 "L4 ttsc 는 Node launcher + Go 바이너리 이고 optionalDeps 모델을 사용한다" 까지만 규정. 패키지 이름 열거와 표는 F §3.1~3.3 으로 이관. `BND-API-03` 의 import 경로표에서 `@typia/ttsc-*` 행 전체 삭제, 사용자는 `@typia/ttsc` 를 **하나만** import 하므로 optionalDeps 이름 변경은 사용자 가시성이 0.

### 2.2 쟁점2 — BND-TSC-01 `"typia/lib/transform"` 지시자 유지 vs D 의 v13.3 삭제

A (L502~525) 는 사용자 tsconfig 의 `plugins[{transform: "typia/lib/transform"}]` 가 v13 ttsc 에서도 resolve 가능해야 한다고 하지만, D §3.6 (L178~197) 는 `src/transform.ts` 를 v13.3 에서 **완전 제거**한다. 두 규약이 겹치는 3 minor window (v13.0~v13.2) 는 stub throw 로 메꾸지만 v13.3 이후 사용자 tsconfig 는 "`typia/lib/transform` can't resolve" 를 맞는다.

(a) **이 자체로 P1 위반** — P1 "tsc → ttsc 한 단어 치환" 은 빌드 스크립트 한 줄만 바꾼다는 뜻인데, v13.3 에서 추가로 tsconfig plugins 배열도 수정해야 한다면 "한 단어" 가 아니다. 본 규약의 근본 약속 붕괴.

(b) **ttsc driver 의 재정의 필요** — ttsc 는 tsconfig plugins 배열의 `transform` 필드를 **문자열 marker 로만 사용하고 resolve 는 건너뛰는** 동작이 필요하다. 즉 `"typia/lib/transform"` 을 Node module resolution 대상에서 제외하고 "이 프로젝트는 typia 변환 대상" 이라는 signal flag 로만 사용. 이는 ts-patch 의 "module exists must be resolvable" 요건과 상이.

(c) **릴리스 일정의 위험** — F `release.yml` 은 tag push 로 자동 publish. 만약 v13.3 의 changelog 에 "remove `typia/lib/transform` module" 이 PATCH 로 분류되어 들어가면 사용자는 `npm update` 한 번으로 빌드 파괴를 맞는다. 이는 `latest` dist-tag 에 unattended 영향.

(d) **해결안** — A/C/D 삼자 Sub-3 합의: `"typia/lib/transform"` 은 **영구 marker string** (resolve 안 함), module 은 v13.3 에 삭제되나 marker 문자열 인식은 v14 까지 유지. D 는 `src/_deprecated/transform.ts` stub 을 **v14 까지** 유지하도록 계획 연장. F 는 semver 분류표에 "tsconfig plugins marker 변경 = MAJOR" 를 추가.

### 2.3 쟁점3 — `peerDependency typescript` 제거를 BND 경계에 적지 않음

A 가 P1(API 불변)·P2(Layer)·P3(순환 없음) 등은 명시했으나 "TypeScript peerDependency" 의 존폐를 규정하지 않았다. D §3.7 는 "`@typia/typia` 에서 v13 에서 삭제" 를 선언, F F1/§4.3 는 "ttsc 바이너리가 내장 tsgo 를 사용하므로 peer 제거" 를 선언.

(a) **L0/L5 패키지의 peer 는 누가?** — `@typia/interface` (L0, 0-dep 정책) · `@typia/mcp` · `@typia/langchain` · `@typia/vercel` (L5, peer SDK) 의 TypeScript peer 는 A 가 경계상 판정해야 한다. L5 는 IDE 타입 체크 경로상 여전히 TypeScript (또는 tsgo 타입 서비스) 가 필요하며, 사용자가 `tsc` 대신 `ttsc` 를 써도 **IDE 는 여전히 `typescript` npm 패키지를 요구**.

(b) **ttsc 내장 tsgo 와 IDE 의 분리** — F 의 "tsgo 내장 바이너리" 는 **빌드 타임 only**. VS Code 의 TypeScript extension 은 `typescript` npm 패키지의 `lib/typescript.js` 를 로드하지 tsgo 바이너리를 호출하지 않는다. peer 제거가 IDE breaking 을 유발하지 않는다고 단언하려면, D/F 가 **IDE 경로에서 사용자가 `typescript` 를 직접 설치하게 안내** 해야 한다. 이는 Setup wizard (F §6) 의 추가 스텝.

(c) **AGENTS.md + Cursor rules 영향** — AI 코딩 에이전트 (Cursor / Claude Code) 는 사용자 `node_modules/typescript/` 를 가정하고 타입 힌트를 뽑는다. peer 제거 후에도 정상 동작하려면 Setup wizard 가 `typescript` 를 **devDep 으로** 추가하도록 처리.

(d) **해결안** — A 가 `BND-PEER-01` 신설: "`@typia/typia` / `@typia/ttsc` 는 TypeScript peer 없음 (v13). `@typia/mcp`/`langchain`/`vercel` 는 peer SDK 만 유지 (기존 유지). `@typia/interface` 는 dev only." + Setup wizard 가 `typescript` 를 devDep 으로 적어주도록 F §6.3 확장.

---

## 3. B 초안 비판 (Go 빌드 재현성)

### 3.1 쟁점1 — Go 1.26 + go.work 공존과 F2 재현 빌드 충돌

B §2.3 (Go 1.26 고정) 와 §2.2 (`go.work` 에 `../../third_party/typescript-go` use) 는 개발자 경험은 매끄럽지만 **`go.work` 는 gitignored** (B L119 명시) 이므로 release runner 가 `go.work` 없이 빌드해야 한다. F 의 `release.yml` (L456~495) 는 `-trimpath -ldflags "-buildid= -X main.version=..."` 으로 bit-for-bit 재현을 요구한다.

(a) **Module resolution 불일치 위험** — 로컬 개발에서는 `go.work` + `use` 로 shim 과 tsgo 가 로드되지만, CI 에서는 `go.work` 가 없으므로 `go.mod` 의 `replace ./shim/*` directive 에만 의존. 이 두 경로가 동일한 module path 해시를 산출한다는 보장은 **현재 문서 어디에도 없다**. stdlib 외 import 가 있는 `analyzer` 패키지 (B §6.4 - `shim/checker`, `shim/ast` 의존) 가 특히 민감. 동일 커밋을 로컬에서 빌드한 것과 CI 에서 빌드한 것의 `shasum -a 256` 이 다르면 F2 재현 빌드 주장이 무너진다.

(b) **replace directive 유지 기간** — B §2.2 "Production mode (Phase 2+)" 에서 `replace` 제거를 말하지만 **2027 Q2 v13 GA 시점까지 replace 가 남는다면 F2 는 구조적으로 달성 불가**. `go build -mod=vendor` 로 전환 (F §2.3 의 GOFLAGS='-mod=vendor') 하려 해도 `replace` 는 vendor 와 공존하지 않음. tsgo tagged release 가 2027 Q2 전에 나올지 불확실.

(c) **SOURCE_DATE_EPOCH 의 한계** — F §2.3 은 `git log -1 --pretty=%ct` 로 SOURCE_DATE_EPOCH 를 세팅해 `-X main.date` 주입. 동일 커밋에서는 동일 값. 그러나 `replace` 타깃 (`../../third_party/typescript-go`) 의 commit 이 달라지면 바이너리 해시가 달라짐 — 이건 재현 빌드의 **필수 입력이 Go module graph 에 명시되어 있지 않다**는 뜻.

(d) **해결안** — Sub-3 에서 B 가 Phase 1 일정에 "**v13 GA 이전 replace 제거 + tsgo tagged release 요건**" 을 포함. 미달 시 F 는 F2 목표를 "SOURCE_DATE_EPOCH 기반 + tsgo commit SHA 고정 재현" 으로 격하하고, `release.yml` 은 tsgo commit 을 lockfile 화 (`third_party.lock`) 하는 추가 스텝을 가진다.

### 3.2 쟁점2 — linkname + Go 1.27 handshake 리스크가 7 플랫폼 cross-compile 에 미치는 영향

B §2.3 + §2.5.2 는 Go 1.27 linkname 제한을 위험으로 인지했으나, 7 플랫폼 (linux-x64/arm64/arm + darwin-x64/arm64 + win-x64/arm64) 에서 **linkname 동작 차이** 를 언급하지 않는다.

(a) **tsgo 본체 matrix 와의 gap** — Windows arm64 와 linux-arm (32-bit) 은 tsgo 자체 CI matrix 에 없으므로, typia 가 tsgo 를 `replace` 로 가져올 때 **검증된 플랫폼은 5 종**이고 F 가 목표로 한 **7 플랫폼 중 2 개는 untested territory**. 이는 typia 가 tsgo 버그 발견의 최전선이 된다는 뜻.

(b) **unsafe.Pointer 정렬 문제** — `shim/checker` 의 `unsafe.Pointer` mirror struct (B §3.3.2) 는 64-bit 가정 일 가능성이 높다. linux-arm 은 32-bit 시스템이어서 struct 레이아웃 padding 이 다름. "extra_<Name>" mirror struct 가 linux-arm 에서 field offset 이 다르게 계산되면 **런타임 null dereference**. C §3.3.2 "새 필드 추가 시 verified in X" 주석 정책이 있어도 32/64 bit 분기는 가려지지 않는다.

(c) **darwin cross-compile 에서 CGO 이슈** — B 는 CGO 에 대해 전혀 언급하지 않는다. F §2.3 은 `CGO_ENABLED=0` 고정. 그러나 tsgo 본체가 stdlib crypto 이나 net 을 사용할 경우 macOS 동적 링킹을 요구할 수 있음. `CGO_ENABLED=0` 에서 static binary 가 제대로 나오는지 B 측 검증 필요.

(d) **해결안** — Sub-3: B 가 Phase 1 체크리스트에 "cross-compile smoke per platform" + "`unsafe.Pointer` 정렬 32/64 bit 검증" + "CGO=0 static link 검증" 을 추가. F 는 `release.yml` build matrix 의 `include:` 에 linux-arm / win32-arm64 를 Phase 1 에서만 추가하되 **smoke test 실패를 허용** (optional matrix) 하는 중간 단계 허용.

### 3.3 쟁점3 — `metadata/` stdlib-only 원칙과 재현 빌드 ldflags 의 `-X main.version` 주입 지점 부재

B §6.4 는 "`metadata/` 는 `sort` `strings` `strconv` 만" 의 의존 surface 를 엄격히 고정했다. 훌륭하다. 그러나 F 의 `-ldflags "-X main.version=$VERSION"` 은 `cmd/ttsc/main.go` 에 `var version string` 이 존재해야 동작하는데 B 초안에선 이 변수의 소유자가 어느 패키지인지 미정 (`cmd/ttsc` 는 C 소관).

(a) **버전 문자열 부재의 현장 영향** — F 입장에서 버전 문자열이 안 붙으면 npm 산출 `@typia/ttsc-*` 바이너리가 `ttsc --version` 에 빈 값을 반환. 세트 launch (2029 Q2) 때 4 프로젝트가 **동일 바이너리 버전임을 증명 불가**. 고객 버그 리포트에서 "어느 ttsc 버전에서 발생?" 질문에 답 못함.

(b) **build info 의 3 요소** — `version` (semver) / `commit` (git SHA) / `date` (SOURCE_DATE_EPOCH) 세 요소가 **exported var** 로 존재해야 함. B 의 metadata stdlib-only 원칙은 `internal/engine/metadata/` 에만 적용. `cmd/ttsc/` 는 `flag` / `runtime/debug` 등 사용 가능.

(c) **--version 포맷 계약** — `ttsc --version` 출력 포맷이 nestia / agentica / autobe 의 CI 에서 정규식 매칭될 것 (세트 launch 시). F 는 이 포맷을 계약으로 박아야 함: `ttsc v{semver} ({commit_short}, built {ISO8601})` 형태. B/C 가 `main.go` 에서 이 포맷을 고정.

(d) **해결안** — Sub-3: B/C 가 `cmd/ttsc/main.go` 의 `version/commit/date` 3 변수 exported 를 확정. F 가 `pack-platforms.ts` 에서 각 플랫폼 바이너리의 `--version` 출력을 smoke test.

---

## 4. C 초안 비판 (cross-compile, shim CI)

### 4.1 쟁점1 — shim 재생성을 CI 에 명시하지 않음

C §3.1 (gen_shims 유일 관문) 은 로컬 개발 순서만 규정. F (§2.4) 는 "`shim-regenerate.yml` monthly cron" 을 신설하지만 **C 가 이 워크플로의 실패 기준을 정의하지 않는다**.

(a) **drift 침묵 실패 시나리오** — shim 자동생성 결과가 커밋본과 다르면 (upstream bump 누락) release.yml 은 quiet 하게 성공하고 **사용자 런타임에서만 segfault** (B §3.1 경고: "go build 는 통과하지만 checker.GetTypeOfSymbol 이 segfault"). 이는 npm publish 후 hotfix 요구.

(b) **gate 조건의 소유자** — F 혼자 워크플로를 만들어도 실패 조건 (`git diff --exit-code` on `shim/**/shim.go`) 을 C 가 박아줘야 gate 가 된다. 현재 C §3.2.1 은 shim 추가 절차만 규정할 뿐, drift 자체를 CI 로 잡는 조항이 없음. tsgolint 는 이 패턴을 이미 구현 (`update-typescript-go.yml` + PR 자동 생성).

(c) **월 1 bump vs PR 마다 검사** — B §2.5 는 "월간 bump" 를 규정. 그런데 중간에 누군가 `extra-shim.json` 을 수정하고 `gen_shims` 를 안 돌린 채 PR 을 올리면? PR 마다 drift 검사가 없으면 릴리스까지 누적.

(d) **해결안** — Sub-3: C §3.1 에 "CI diff-guard" 조항 추가 (`git diff --exit-code` on `shim/**/shim.go`). F `release.yml` 의 `test` job 앞에 `shim-drift-check` job 삽입. `build.yml` PR gate 에도 동일 job 추가.

### 4.2 쟁점2 — patch ≤ 3 목표가 cross-compile 실패와 상충

C §4.1 (patch ≤ 3 목표, Phase 0 는 0 patches). 훌륭. 다만 F 관점에서 7 플랫폼 cross-compile 시 patch 가 늘어날 수밖에 없는 시나리오들이 존재.

(a) **플랫폼 특화 패치 증가** — tsgo 가 darwin-arm64 에서만 빌드되는 내부 코드 (예: CGO 의존 파일) 가 발견되면 patch 가 늘어난다. tsgonest 는 3 patches 로 macos 만 지원. typia 는 7 플랫폼. 확률적으로 **플랫폼당 1 개 patch** 필요 가능성 → 7 patches (C 상한 2 배).

(b) **tsgo upstream PR 대기 비용** — C §4.2 "언제 patch 허용" 4 단계 중 "upstream PR 로 받아들여질 합리적 근거" 는 실제로 tsgo upstream 이 MS 이므로 merge lead time 이 **월 단위**. 7 플랫폼 GA 일정이 이 lead time 을 감당 불가.

(c) **PR 실패 기준 미정** — C §4.3.2 는 "patch 적용은 bootstrap.sh 의 일부로만 실행. CI 는 적용 상태를 해시로 검증" — 해시 불일치 시 누가 실패를 선언? F 의 release.yml 은 이를 **reject gate** 로 붙여야 함.

(d) **해결안** — C §4.2 의 4 단계에 "cross-compile 비빌드" 를 **허용 사유 5 번째**로 추가. F `release.yml build matrix` 에서 patch hash mismatch 시 자동 reject. patch ≤ 3 상한은 **"핵심 로직 패치"** 에 한정하고 플랫폼 특화는 별도 카운트.

### 4.3 쟁점3 — `third_party/typescript-go` symlink 가 Windows release runner 에서 깨짐

C §2.1 은 "submodule 대신 symlink + third_party/" 를 기본으로 선언. F 재심사 여지는 §2.1 끝 한 줄 ("Release/DX Lead 가 판단 시 전환 가능") 만.

(a) **Windows runner 의 symlink 제약** — GitHub Actions `windows-latest` 러너는 기본 심링크 활성화가 **Developer Mode 에서만** 가능. 관리자 권한 없이 `mklink` 실패. F `release.yml` 의 `win32-x64` / `win32-arm64` build 에서 `go.work use ../../third_party/typescript-go` 가 resolve 실패. `bootstrap.sh` 으로 symlink 만드는 전략도 Windows PowerShell 에서 동작 보장 없음.

(b) **tsgolint 가 submodule 인지 아닌지** — C L110 은 "tsgolint 가 submodule 아님" 이라 기술. F 는 이 사실을 재확인 필요 (contributions/ 참조). tsgonest 저장소 clone 에서 `.gitmodules` 존재 여부 확인 후 결정.

(c) **submodule 의 CI 비용** — `actions/checkout@v4 submodules: true` 는 shallow clone 가능. 추가 부하는 < 30 초. 로컬 개발 시 `git submodule update --init` 한 줄. symlink 유지의 이점 ("bump 유연성") 대비 CI 신뢰성 손실이 더 크다.

(d) **해결안** — Sub-3: C §2.1 을 **submodule 모델로 확정**. F 의 `release.yml` 와 `build.yml` `actions/checkout@v4` 에 `submodules: true` 추가. Phase 1 Week 1 전환. B §2.2 의 `go.work` 는 유지하되 local `use ./third_party/typescript-go` (repo-root 기준) 로 경로 바꿈.

---

## 5. D 초안 비판 (publish 순서, dist-tag)

### 5.1 쟁점1 — `package.json.bin.typia` 유지 + `@typia/ttsc` 의 bin `ttsc` 공존 → P1 모호

D §3.5 는 `packages/typia/src/executable/` 삭제 후 `package.json.bin.typia` 를 `@typia/ttsc` CLI proxy 로 재작성. F §6.1 은 `npx typia setup` 을 유지한다고 선언. 두 조항의 조합은 UX 혼란.

(a) **bin 이중 존재** — **`typia` 명령은 `@typia/typia` 에서 온 것이고 `ttsc` 명령은 `@typia/ttsc` 에서 온 것**. 사용자가 `node_modules/.bin/` 을 보면 둘이 공존. "어느 것을 써야 하나?" 의 첫 번째 혼란.

(b) **설치 경로 2 가지** — 사용자 시나리오:
- Case A: `npm i -D typia` → `npx typia setup` → 내부적으로 `@typia/ttsc` 를 추가 설치? 아니면 optionalDeps 가 이미 끌어옴? D 초안은 후자 가정인데, 그러면 `typia` 가 `@typia/ttsc` 에 **runtime dep** 을 가진다는 뜻. 순수 런타임 사용자 (Edge Worker) 는 ~27 MB 바이너리 강제 다운로드.
- Case B: `npm i -D @typia/ttsc` (ttsc 만 설치) → 즉시 `ttsc` 사용 가능. `typia` bin 은 누가 제공? 없음. 사용자는 `typia setup` 을 못 씀. 양쪽 경로의 일관성 깨짐.

(c) **A 의 의존 상한과 충돌** — D 의 "proxy" 는 `@typia/typia` 가 `@typia/ttsc` 에 runtime dep 을 가진다는 뜻인데, 이는 A `BND-API-03` + D §3.7 의 "`@typia/typia` 런타임 의존 ≤4" 와 충돌. `@typia/ttsc` 는 **~27 MB 바이너리의 optionalDep** 을 끌고 온다.

(d) **P1 재해석** — P1 "tsc → ttsc 한 단어 치환" 은 **빌드 스크립트 한 줄**. `typia` CLI 명령은 빌드 명령이 아니고 onboarding 명령. 따라서 `typia setup` → `ttsc setup` 교체는 P1 위반 아님. 오히려 bin 단일화가 P1 정신에 부합.

(e) **해결안** — Sub-3: D §3.5 개정. `package.json.bin.typia` 를 v13 에서 **완전 삭제** (proxy 아님). v12→v13 마이그레이션 시 deprecation warning 과 함께 `ttsc setup` 안내. F §6.1 의 "`npx typia setup`" 을 "`npx ttsc setup`" 으로 교체. 단, v13.0~v13.2 는 `bin.typia` 유지하되 "This command moves to `ttsc setup`" warning 만 출력하고 `ttsc` 로 exec 위임 (진정한 단일화는 v13.3).

### 5.2 쟁점2 — Standard Schema Q1 가 v13 GA 전 해결되지 않으면 dist-tag `latest` 공개 시 drift

D Q1 (§11) 은 `_createStandardSchema` TS 정본 vs C `assert.go:63` Go emit 의 **외부 관측 상이** 를 인정.

(a) **현재 drift 의 구체** — TS 는 `typiaPathToStandardSchemaPath` 로 정교한 path segment (key/index) 를 만들지만, Go emit 은 `String(e.path).split(".").slice(1)` 로 단순 split. bracket notation (`["foo"]`) 이 있을 때 결과 상이. `message` 포맷도 "expected X, got Y" vs "expected X, got <typeof> <JSON.stringify>" 다름.

(b) **F semver 분류와의 충돌** — F `release.yml` semver 분류표 §4.3 는 "emit 코드 개선 (결과 동일) = PATCH" 로 못 박음. Q1 이 v13 alpha/beta 어느 시점에 해결되느냐에 따라 **동일 버전 레인지의 patch bump 가 사실은 breaking** 이 될 수 있다. 사용자가 `result.issues[0].path` 비교 테스트 (`["foo", 0, "bar"]` 기대) 를 가지고 있으면 PATCH 가 그 테스트를 깨뜨린다.

(c) **Standard Schema 커뮤니티 신뢰** — typia 는 Standard Schema v1 의 초기 참여자. vendor `"typia"` 로 fixed. 이 커뮤니티 conformance suite (https://standardschema.dev) 는 `issues[].path` 비교를 포함. Go emit 이 틀린 경로를 내면 typia 가 **Standard Schema "부분 준수" 로 표기**될 위험.

(d) **해결안** — Sub-3: D/C/E 가 Q1 을 **v13.0.0-beta.1 이전 해결**. C 는 `assert.go:63` inline emit 을 `_createStandardSchema(__fn)` 호출 1 줄로 교체 (D §5.3 c 권장). E 는 `test_emit_standard_schema` fixture 카테고리 신설. F 는 `release.yml` 에 standardschema.dev conformance job 을 release gate 로 추가 (alpha/beta 에도 적용).

### 5.3 쟁점3 — `@typia/runtime` 도입 시점 Q3 가 dist-tag 전략에 영향

D Q3 는 `@typia/runtime` 을 v13 (보수 실패 위험) vs v14 (2 년 중복) 에서 결정 유예. F 의 v13 로드맵 (§4.1) 은 2027 Q2 GA 확정.

(a) **v13 도입 시 setup wizard 영향** — v13 에서 `@typia/runtime` 도입 → 사용자 package.json 에 신규 dep 1 개 강제 → `npx typia setup --runtime=ttsc` 가 자동 추가 수행 필요 (F §6.3). Setup wizard 가 현재 `comment-json` 으로 tsconfig 만 건드리는데, **package.json dependencies 조작은 D 가 안 적었고 F 도 안 적었다**.

(b) **v14 도입 시 장기 중복** — `@typia/utils` 와 `@typia/runtime` 이 v13~v14 사이 2 년 공존. CI 매트릭스 복잡도, 문서 중복, dependency graph 복잡도 모두 증가. F §4.6 의 "17 패키지 동시 bump" 가 19 패키지로 늘어남.

(c) **세트 launch 와의 연계** — 2029 Q2 4 프로젝트 동시 launch 는 `@typia/runtime` 이 안정화된 시점이어야 함. v14 에서 도입하면 launch 직전 2 분기에 막 GA — 리스크.

(d) **해결안** — Sub-3: D Q3 결정 기한을 **v13.0.0-alpha.1 이전**으로 당긴다. F 권장: **v14 도입 (보수)** + v13 은 `@typia/utils` 분할만 (런타임/변환부). `@typia/utils` 의 런타임 subset 은 v13.0 에서 별도 subpath `@typia/utils/runtime` 으로 expose. v14 에서 `@typia/runtime` 으로 rename + `@typia/utils` 전체 unpublish.

(e) **F 의 "v14 까지 `@typia/runtime` 신설 금지" 제약** — 2027~2028 전 구간에서 F 는 신규 @typia/* 패키지 금지 권한을 가진다 (새 패키지는 세트 launch 순서와 충돌). D 가 v13 에 runtime 신설을 강행하면 F 가 release gate 에서 reject.

---

## 6. E 초안 비판 (CI ↔ release.yml 일치)

### 6.1 쟁점1 — E 의 matrix 와 F 의 release gate 가 수치 불일치

E §7.3 는 "OS matrix: ubuntu + macos + windows, Node 20/22/24 Phase 1 부터" 를 제시. F §5.3 는 동일한 3×3 = 9 조합을 **Phase 1 Week 1** 에 추가.

(a) **gate 용도 충돌** — 숫자는 맞지만 **E 는 PR gate**, **F 는 release gate** 에 같은 matrix 를 요구. GitHub Actions minutes budget (F §5.8, $50/월 상한) 을 어떻게 분배할지 미정. 9 조합 × PR 마다 = 월간 minute 예측 초과 가능성.

(b) **Windows runner 의 분당 가중치** — Windows runner 는 Ubuntu 대비 **2× minutes billing**. macOS 는 **10×**. 9 조합 중 macOS 3 조합이 실제 billable minutes 의 과반 차지. F §5.8 는 monthly $50 상한을 말하지만 "macOS PR gate 3 조합" 으로 이미 월 $30+ 소비.

(c) **실무 권장치** — Node 20.x 는 2028 Q2 EOL 이므로 long-term matrix 에서 제외 가능. Phase 1 은 3 OS × 2 Node (22/24) = 6 조합이 현실적. `concurrency.cancel-in-progress` (F §7.3) 로 PR 덮어쓰기 시 이전 run 취소.

(d) **해결안** — Sub-3: E/F 가 공동 matrix 정의. **PR gate = 3 OS × 1 Node (24.x)** (3 조합). **Release gate = 3 OS × 2 Node (22/24.x)** (6 조합). **Nightly full matrix = 3 OS × 3 Node** (9 조합, 실패 허용). `fail-fast: false` + `cancel-in-progress: true` 로 비용 억제.

### 6.2 쟁점2 — E 의 "캐시 금지 (ttsc 바이너리)" 와 F 의 "Go cache: true" 상충

E §7.6 (L609~611) 은 "ttsc 바이너리는 **캐시 금지** — 매 CI 에서 새로 빌드" 를 선언. F §5.2 는 `actions/setup-go@v6 with cache: true` 를 사용.

(a) **레이어 구분 필요** — 두 발언은 **별개 레이어** (Go module cache / Go build cache / 최종 바이너리 산출물). 문서로만 보면 상충하는 것처럼 읽힘. `setup-go cache: true` 는 `~/go/pkg/mod` (module download cache) 캐시. 이는 재현 빌드에 영향 없음.

(b) **재현 빌드와 캐시** — F2 재현 빌드는 `-trimpath -buildid=` 로 달성. Go build cache 가 오래된 object 를 재사용해도 source + flags 가 같으면 결과 동일. 캐시는 성능용, 재현성용 아님.

(c) **pnpm store cache** — E §7.6 는 pnpm-lock.yaml 해시 기반 캐시. 안전. 다만 `installHint()` 테스트 경로에서 optionalDeps 설치 실패가 캐시로 숨겨질 수 있음 (E §2.1의 installHint 테스트와 연결).

(d) **해결안** — Sub-3: E/F 공동 단락 "캐시 3 층 (pnpm store / Go module / Go build) 은 캐시, **최종 ttsc 바이너리 산출물** 은 비캐시" 를 정본. release.yml 의 `upload-artifact` 는 artifact 지 cache 가 아님 — 이 구분도 문서화.

### 6.3 쟁점3 — E 의 golden fixture 가 Standard Schema 경로 패리티를 커버하는가

E §4 fixture 카테고리 규약에 `test_emit_formats` `test_emit_stress` 등은 있는데 **`test_emit_standard_schema`** 카테고리가 명시되지 않음.

(a) **패리티 테스트 부재** — D §5.3 의 TS ↔ Go emit 패리티 (Standard Schema `~standard.validate` 결과) 를 golden 으로 고정하려면 E 가 카테고리를 신설해야 함. 현재 E §4.1~4.4 는 8 카테고리 (primitives / objects / arrays / tuples / unions / formats / tags / stress) 를 열거 — standardschema 미포함.

(b) **F release.yml gate 와의 연계** — F release.yml 의 "Standard Schema conformance" gating 은 E 의 fixture 카테고리 위에서만 성립. 외부 standardschema.dev suite 실행은 fixture 없이 가능하지만 typia 자체의 회귀 방지는 내부 fixture 필수.

(c) **cross-emit 검증** — 한 fixture 타입에 대해 (1) TS 구현 `_createStandardSchema` 의 출력, (2) Go emit 의 출력, 두 개를 **byte-equal** 또는 **semantic-equal** 확인하는 테스트가 필요. E §5 regression test 와 결합.

(d) **해결안** — Sub-3: E §4 에 `test_emit_standard_schema` 카테고리 추가. 파일 4~6 개 (primitive / nested object / array / union / bracket notation path / number key path). E §5 regression test 에 "Q1 해결 이후의 expected path format" 을 확정.

### 6.4 쟁점4 — self-hosted runner 가정과 F 의 GitHub runner 가정 상충 (벤치)

E §6.2 (L517~522) 는 "self-hosted 러너에서 `sync && echo 3 > /proc/sys/vm/drop_caches`" 를 권장. F §5.4 는 GitHub Actions ubuntu-latest 를 전제. 두 전제가 상이.

(a) **벤치마크 전용 self-hosted** — 노이즈 최소화를 위해 self-hosted 는 벤치에만 필요. F §5.5 "canary" 파이프라인에도 self-hosted 는 없음.

(b) **비용과 유지보수** — self-hosted runner 는 samchon 개인 비용. F 예산 $50/월 에 포함되지 않음.

(c) **해결안** — Sub-3: E/F 가 "벤치는 self-hosted (samchon 개인) 또는 tsgonest 와 공유 runner, 일반 CI 는 GitHub hosted" 로 명시 분리. self-hosted 중단 시 벤치만 fallback.

---

## 7. 초안 간 모순

아래 10 항목은 F 관점에서 Sub-3 에 단일 합의가 필요한 cross-role 충돌이다. 각 항목은 초안들의 조문 충돌 + F 측 권장 결론 + 미해결 시 release pipeline 에 미치는 구체 영향 3 요소로 정리.

### 7.1 `typia/lib/transform` 의 수명
- A `BND-TSC-01`: marker resolve 유지 (영구).
- D §3.6: v13.3 완전 제거.
- F semver 분류표 §4.3: 이 deprecation 미분류.
- **영향**: PATCH 로 잘못 분류되면 `latest` dist-tag 가 v13.2 → v13.3 에서 사용자 빌드 파괴. `bumpp -r` 자동화가 이 위험을 증폭.
- **F 권장**: A marker-only (resolve 건너뜀) + D 파일 삭제 (v13.3) + F **MAJOR 분류** (tsconfig plugins 변경이 사용자 액션 필요하면 MAJOR). 단, v13 전체가 MAJOR 이므로 v13.3 자체는 MINOR 허용.

### 7.2 bin 엔트리 `typia` vs `ttsc`
- D §3.5: `bin.typia` → `@typia/ttsc` CLI proxy.
- F §6.1: `npx typia setup` 유지.
- A BND-PKG-07: `ttsc` 를 L4 의 별도 bin 으로.
- **영향**: 사용자 `node_modules/.bin/` 에 두 명령 공존. Onboarding 문서 두 배. Setup wizard 가 어느 패키지에 소유?
- **F 권장**: **`bin.typia` v13 에서 삭제**, `ttsc` 단일화. v13.0~v13.2 은 `bin.typia` 가 warning + exec `ttsc` 위임. v13.3 에서 완전 삭제.

### 7.3 Standard Schema emit 정본
- D §5.3: TS `_createStandardSchema` functor 정본.
- C `assert.go:63`: inline emit (간소한 path split).
- E: 해당 fixture 카테고리 없음.
- **영향**: GA 전 해결 안 되면 `~standard.validate(x).issues[0].path` 가 TS/Go 간 다름. Standard Schema 커뮤니티 conformance 표기 리스크.
- **F 권장**: C 가 Go emit 을 `_createStandardSchema(__fn)` 호출 1 줄로 교체. E 가 `test_emit_standard_schema` fixture 신설. F release.yml 에 standardschema.dev suite gating 추가.

### 7.4 `go.work` / `third_party/` / submodule 전략
- C §2.1: symlink + third_party/ (F 판단 시 submodule 전환).
- F §2.5 / §5.2: `actions/checkout@v4 submodules: true` 가정.
- B §2.2: gitignored `go.work`.
- **영향**: Windows runner 에서 symlink resolve 실패 → `win32-x64` / `win32-arm64` build fail. release.yml 7 플랫폼 matrix 붕괴.
- **F 권장**: **submodule 로 확정**. Phase 1 Week 1 전환. `go.work` 는 local-only 유지. C §2.1 의 `반대의견 수용 여지` 한 줄에 근거해 F 의 판단 기록.

### 7.5 Go 1.26 pin 기간
- B §2.3: Phase 0 1.26 pin, 1.27 linkname handshake 리스크 인지.
- F §4.3 semver 분류표: "Go 1.26 → 1.27 = PATCH".
- **영향**: 1.27 linkname 정책 변경이 shim 전략 붕괴로 이어지면 "PATCH = 실질 breaking" 발생.
- **F 권장**: F 표 수정. "Go minor 버전 bump = **MINOR**" (PATCH 아님). tsgo handshake 검증 전까지 Go 1.26 고정.

### 7.6 7 플랫폼 vs 5 플랫폼
- A BND-PKG-07: 7 이름 고정.
- F §3.1: Phase 0 = 5, Phase 1 = +2 (linux-arm, win32-arm64).
- B/C: cross-compile 검증 범위 미언급.
- **영향**: 검증 없는 플랫폼 GA 출시. 사용자 `installHint` 을 만나고 "@typia/ttsc-linux-arm 설치 실패" 리포트.
- **F 권장**: Phase 1 에 linux-arm / win32-arm64 를 **optional matrix 허용** (실패 시 skip). GA 에서 공식 지원 표기는 Phase 2. Phase 1 GA 는 5 플랫폼.

### 7.7 `@typia/runtime` 시점
- D Q3: v13 vs v14 유예.
- F §4.1: 2027 Q2 v13 GA 로드맵.
- A: `@typia/utils` 분할만 묵시.
- **영향**: v13 도입 시 Setup wizard 가 package.json dep 조작 필요 — 어느 초안에도 규정 없음. v14 도입 시 2 년 중복.
- **F 권장**: **v14 도입**. v13 에선 `@typia/utils/runtime` subpath 만. 세트 launch (2029 Q2) 직전 2 분기 GA 는 리스크이나, 보수적 선택.

### 7.8 TypeScript peerDependency 제거 범위
- D §3.7: `@typia/typia` 에서만 삭제.
- F F1/§4.3: ttsc 내장 tsgo 전제.
- A: L0/L5 여부 무언급.
- **영향**: L5 (`@typia/mcp` 등) peer 유지 여부 불명. IDE 타입 체크 경로에서 `typescript` 패키지 설치 지점 누락.
- **F 권장**: A 가 `BND-PEER-01` 신설. "L1/L4 peer 삭제, L5 peer (SDK) 유지, L0 dev-only". Setup wizard 가 `typescript` 를 devDep 으로 추가.

### 7.9 semver 분류와 deprecation 메시지
- D §3.3: `NoTransformConfigurationError` 메시지 교체 ("ttsc transform has not been applied").
- F §4.5: v13.0 warn → v13.6 error → v14 제거.
- **영향**: 메시지 문자열 변경 자체가 어느 semver 분류? 사용자가 메시지를 grep 해 감지하는 CI 가 있으면 PATCH 로 깨짐.
- **F 권장**: F 표에 "에러 메시지 문자열 변경 = PATCH" 명시. 단 warn → error 승격은 MINOR.

### 7.10 `shim-regenerate.yml` 실패 조건
- F §5.1: 신설 (monthly cron).
- C §3.1: 로컬 실행 규약만.
- B §2.5: 월 1 bump.
- **영향**: 같은 워크플로를 3 규약이 다른 트리거로 호출. 실패 조건 미정의로 quiet pass 가능.
- **F 권장**: F 가 워크플로 소유, C 가 "CI diff-guard 실패 시 PR 생성" 조항 제공, B 가 bump 주기를 cron schedule 에 맞춤. `release.yml` 의 `test` job 앞에 `shim-drift-check` job 삽입.

---

## 8. Sub-3 개정 합의 요청

F 는 아래 7 개를 Sub-3 에서 **단일 issue 로 묶어 5 인 합의**할 것을 요청한다. 각 항목은 release pipeline 이 관통하는 단면이므로 한 번에 다루지 않으면 회귀한다. 우선순위 순으로 나열.

### 8.1 optionalDeps 이름 및 소관 [최우선]
- A 가 `BND-PKG-07` 에서 이름 열거 삭제, F 가 §3.1 표를 정본으로.
- 4 프로젝트 세트 공용화 가능성 (예: `@samchon-ecosystem/tsgo-{os}-{arch}`) 를 Sub-3 에서 **배제할지 열어둘지** 결정.
- 결정 방식: A 는 "L4 ttsc 는 optionalDeps 모델을 쓴다" 까지만. 이름은 F 소관으로 명시. F 가 nestia/agentica/autobe 측 의견 수렴 후 Sub-3 말미에 이름 제안.

### 8.2 `typia/lib/transform` marker [v13.0 알파 이전 필수]
- A marker-only + D 파일 삭제 (v13.3) + F semver MAJOR (v13 전체 래이블) 라는 3 조항 동시 개정.
- ttsc driver (C) 가 이 marker 를 **resolve 시도하지 않고 signal flag 로만** 사용하도록 C §2.5 개정.
- 사용자 tsconfig 호환성 계약 완결.
- Setup wizard 는 이 marker 를 **추가도 제거도 하지 않는다** (기존 유저 구성 존중).

### 8.3 bin entry 단일화 [v13.0 알파 이전 필수]
- `typia` CLI 는 v13 에서 `@typia/ttsc` 위임 proxy 없이 **warning shell**, v13.3 에서 완전 삭제.
- `ttsc` CLI 가 유일한 onboarding 진입점. `npx typia setup` 은 `npx ttsc setup` 으로 교체.
- P1 재해석: bin 명령은 P1 약속 대상 아님 (build script tsc→ttsc 치환과 별개).
- 문서 (F §7) 의 모든 `npx typia setup` 을 `npx ttsc setup` 으로 일괄 교체.

### 8.4 Standard Schema 정본 + golden [v13.0 beta.1 이전 필수]
- D `_createStandardSchema` 호출 1 줄 emit 으로 C 가 교체 (`assert.go:63` inline 제거).
- E 가 `test_emit_standard_schema` fixture 카테고리 신설 (4~6 파일).
- F release gate 에 standardschema.dev suite 추가 (alpha/beta 부터 적용).
- TS/Go emit 의 `~standard.validate(x).issues[0].path` 가 **byte-equal** 이 될 것.

### 8.5 `third_party/typescript-go` 의 git 관리 [Phase 1 Week 1]
- **submodule 로 확정** (Windows 빌드 성공 조건).
- B/C 는 `go.work use` 를 로컬-only 유지. CI 는 `submodule: true` checkout + `replace directive` 제거 버전을 GA 조건으로.
- tsgo tagged release 가 v13 GA (2027 Q2) 이전 나오지 않으면 F2 재현 빌드 목표를 "commit SHA 고정 재현" 으로 격하.
- bootstrap.sh 제거 (submodule 이 대체).

### 8.6 CI matrix 최종 수치와 예산 [Phase 1]
- **PR gate** = 3 OS × 1 Node (24.x) = 3 조합. `fail-fast: false`, `cancel-in-progress: true`.
- **Release gate** = 3 OS × 2 Node (22/24.x) = 6 조합.
- **Nightly full matrix** = 3 OS × 3 Node = 9 조합 (실패 허용, 경보만).
- minutes 월 상한 $50 유지. 초과 시 macOS runner 축소 우선.
- E §7.3 와 F §5.3 를 병합 문서화. 서로 다른 파일을 복사 붙이지 말 것.

### 8.7 `@typia/runtime` 시점 + Setup wizard dep 조작 [v13 로드맵]
- **v14 도입**으로 확정 (D Q3 보수 선택).
- v13 에서 Setup wizard 는 `package.json.dependencies` 조작 **금지**, 오직 `tsconfig.json` 및 build script 만 수정.
- `@typia/utils` 는 v13 에서 `@typia/utils/runtime` subpath 분할. v14 에서 `@typia/runtime` 으로 rename + `@typia/utils` unpublish.
- 4 프로젝트 launch (2029 Q2) 와 맞물린 `@typia/runtime` 1.0 GA 타임라인 F 가 제시 (2028 Q4 beta).

---

### 8.8 F 담당 산출물 (Sub-3 진입 시 제공)

F 는 Sub-3 에 참여하는 시점에 다음 5 문서·아티팩트를 A/B/C/D/E 에 배포한다:

1. **완성 `release.yml` YAML** (optionalDeps publish staging, OIDC provenance, GitHub Release binary 첨부 포함). 현재 §5.4 의 초안을 Windows runner + submodule 검증까지 넓힘.
2. **`pack-platforms.ts` 스크립트 spec** — `dist/ttsc/<key>/` 를 읽어 `@typia/ttsc-{os}-{arch}` 임시 package 를 생성하고 npm publish. 버전 주입 로직 포함.
3. **`shim-drift-check` job 설계** — `go run ./tools/gen_shims` 실행 → `git diff --exit-code shim/` 검사 → drift 있으면 PR 생성 (tsgolint 모델).
4. **7 플랫폼 × `ttsc --version` 출력 포맷 계약** — `ttsc v{semver} ({commit_short}, built {ISO8601})` 고정. 세트 프로젝트가 정규식 파싱하는 계약.
5. **provenance/OIDC 키 rotation 절차 초안** — npm trusted publishing 설정, GitHub OIDC → npm registry 연결, 키 회전 주기 (연 1 회) 문서화.

### 8.9 Sub-3 후속 순서 제안

합의 이후 이행 순서 (실패 시 재진입):

1. 8.2, 8.3 (v13 alpha 이전) → D 개정 PR → A/C 개정 PR → F release.yml 갱신.
2. 8.4 (v13 beta 이전) → C 개정 PR (Go emit 변경) → E fixture 추가 PR.
3. 8.5 (Phase 1 Week 1) → submodule 전환 PR → Windows 빌드 검증 → bootstrap.sh 삭제.
4. 8.6 (Phase 1 Week 1) → 병합 matrix 문서 → 월간 minutes 모니터링 개시.
5. 8.1 (Phase 1 Week 2) → A 개정 PR → optionalDeps 이름 결정 (F 제안 기반).
6. 8.7 (v13 로드맵 고정) → D Q3 답변 PR → `@typia/utils/runtime` subpath 추가 PR.

---

### 8.10 미해결 소규모 질문 (F → 타 역할)

- **Q-F→A**: `@typia/core` v13 "빈 패키지 shell" 의 README 는 누가 작성? A 의 경계 책임인가 F 의 문서 책임인가?
- **Q-F→B**: `ttsc --version` 의 `main.version` 변수 소유자가 `cmd/ttsc/main.go` 라면, `packages/ttsc/cmd/ttsc/` 의 파일 규약 (`1 파일 1 개념`, B §1.3) 에서 `main.go` 는 예외인가?
- **Q-F→C**: patch ≤ 3 상한에 cross-compile 특화 패치를 "플랫폼 특화로 별도 카운트" 하면 상한을 재정의해야 함. C 는 몇 개까지 허용?
- **Q-F→D**: `_createStandardSchema` 를 `@typia/typia/src/internal/` 단일 출처로 하면, ttsc Go emit 이 이 functor 를 `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema"` 로 참조하는 emit 경로가 v12 emit 과 **다르지 않은가**? v12 에서도 동일 import 인지 D 가 확인 (Q1 연계).
- **Q-F→E**: E 가 self-hosted 벤치 러너를 유지할 때, 하드웨어 교체 시 이전 벤치 결과 재현성은? F 가 `benchmark/results/**/README.md` 의 CPU 키를 변경해야 할 수도 있음.

---

*본 Cycle 2 F 교차 리뷰는 5 초안을 release pipeline 트레이서로 재평가한 결과다. Sub-3 에서 A/B/C/D/E 가 각자 §8 의 책임을 지면 F 는 release.yml 을 2027 Q2 v13 GA 일정에 맞춰 완성 가능. 합의 실패 시 F 는 "ttsc 1.0 GA 는 5 플랫폼으로 제한, 7 플랫폼은 2028 Q2 로 연기" 를 제안한다.*

