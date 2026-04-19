# F. Release/DX Lead — Cycle 1 초안

> 작성자: Release/DX Lead (역할 F) · 2026-04-19
> 범위: 빌드 시스템 · 7 플랫폼 릴리스 · npm publish 정책 · CI/CD · 버전 정책 · Setup wizard · 문서 (README · website · changelog) · AI-native DX
> 제외: 코드 내부 구현(B/C/D), 테스트 전략(E), 경계 설계(A). 이 초안은 "**어떻게 빌드·배포·문서화·홍보하는가**"에 집중한다.
> 진실원: `wiki/08-tsgo-master-plan/` 전체. 본 규약은 08의 실행 규약이며, 충돌 시 08이 우선한다.
> 전제: Phase 0 실구현(`packages/ttsc/`, 9,947 Go + 1,769 TS LOC, 21/21 test PASS)이 성립했다는 전제에서 출발.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 관장 범위

| # | 항목 | 산출물 |
|---|------|--------|
| 1 | pnpm + Go 통합 빌드 | `packages/ttsc/package.json` 스크립트, `go:build` · `prepack` 체인, root `package.json` 오케스트레이션 |
| 2 | 7 플랫폼 배포 | `@typia/ttsc` launcher + `@typia/ttsc-{os}-{arch}` 6~7 platform optional deps |
| 3 | CI/CD 워크플로 | `.github/workflows/` 6개 기존 파일 + Go cross-compile/release 신설 |
| 4 | 버전 정책 | typia v12 유지 → v13 preview (ttsc opt-in) → v14 Go native 3단계 |
| 5 | Setup wizard | `npx typia setup --runtime=ttsc` / `--runtime=legacy` / `--project=nestia|agentica|autobe` |
| 6 | 문서 | README · website · CHANGELOG · migration guide · `THIRD-PARTY-LICENSES.md` · blog 시리즈 |
| 7 | AI-native DX | `llms.txt` · `llms-full.txt` · Cursor rules · `@typia/mcp` server · AGENTS.md |
| 8 | 세트 동시 릴리스 | typia + nestia + agentica + autobe 2029 Q2 launch event |

### 1.2 핵심 원칙 (7개)

> F1. **사용자 명령 불변 보장**. 사용자의 빌드 파이프라인은 `tsc` → `ttsc` 한 단어 치환이 전부여야 한다. 그 이상 변경을 요구하는 릴리스는 **reject**.
>
> F2. **재현 가능한 빌드**. 동일 커밋·동일 tsgo submodule pinning에서 재빌드 시 Go 바이너리 바이트 수준(`shasum`)이 일치해야 한다. `-trimpath` + `-ldflags "-buildid="` + CGO 비활성화가 기본.
>
> F3. **postinstall 금지**. 바이너리 설치는 **optional deps only**. `postinstall` script로 네트워크 다운로드하는 모델(esbuild 구버전 · sharp)은 캐시·supply chain·권한 문제 때문에 채택하지 않음. tsgonest/esbuild 신버전 패턴 그대로 따라간다.
>
> F4. **최소 의존**. `@typia/ttsc` Node launcher는 **Node built-in 만** 사용(fs, path, child_process). devDependencies는 `typescript`, `rimraf`, `@types/node` 3개 catalog 참조에 한함. 신규 npm dep 추가 시 §2.6의 justification 규약을 거친다.
>
> F5. **공개 가능한 실측**. 모든 릴리스에 벤치·binary size·cold-start 수치를 첨부한다. 불리한 수치도 숨기지 않는다(wiki 11 커뮤니케이션 원칙).
>
> F6. **버전 라벨은 semver**. `0.0.0-phase0` 같은 비정식 라벨은 **pre-GA에만 허용**. GA 이후는 `MAJOR.MINOR.PATCH` + `next` dist-tag 조합. prerelease는 `-alpha.N` / `-beta.N` / `-rc.N`.
>
> F7. **세트가 먼저다**. 단일 패키지 관점이 아니라 typia/nestia/agentica/autobe 네 프로젝트가 동일 ttsc 바이너리를 공유하는 세트 관점에서 배포를 설계한다. Launch event는 한 번에 네 개.

### 1.3 이 규약이 다루지 않는 것

- Go 엔진 내부 IR 구조 (→ B)
- shim 생성 규칙 · tsgo patch 최대치 (→ C)
- `@typia/typia` facade의 TS API 시그니처 유지 규칙 (→ D)
- fixture·벤치 측정 방법론(결과 포맷은 포함) (→ E)
- 경계 토폴로지 자체의 적법성 검증 (→ A)

---

## 2. 빌드 규약 (pnpm + Go, 재현성)

### 2.1 저장소 layout

```
typia/
├─ package.json            (private, workspace root, script orchestrator)
├─ pnpm-workspace.yaml
├─ packages/
│  ├─ ttsc/                ← @typia/ttsc (Node launcher + Go binary host)
│  │   ├─ package.json     ← bin: ttsc, optionalDependencies 6~7종
│  │   ├─ go.mod · go.work
│  │   ├─ cmd/ttsc/        ← Go entrypoint
│  │   ├─ internal/        ← Go engine (driver + engine)
│  │   ├─ shim/            ← typescript-go shim 12 모듈
│  │   ├─ tools/gen_shims/ ← shim 자동 생성기
│  │   ├─ src/             ← TS launcher 소스 (platform.ts · api.ts · index.ts)
│  │   ├─ lib/             ← TS build 산출
│  │   ├─ bin/
│  │   │   ├─ ttsc.js          ← Node launcher (dep-free)
│  │   │   └─ ttsc-native      ← 로컬 Phase 0 build (published 안 함)
│  │   └─ THIRD-PARTY-LICENSES.md
│  ├─ typia/               ← 사용자 facade (bin: `typia`)
│  ├─ core · interface · transform · utils   ← v12 정렬된 9 패키지
│  └─ mcp · langchain · unplugin · vercel    ← 보조 패키지
└─ dist/ttsc/              ← cross-compile 산출 (6~7 platform binaries)
    ├─ linux-x64/ttsc
    ├─ linux-arm64/ttsc
    ├─ linux-arm/ttsc
    ├─ darwin-x64/ttsc
    ├─ darwin-arm64/ttsc
    ├─ win32-x64/ttsc.exe
    └─ win32-arm64/ttsc.exe
```

platform-specific npm 패키지 `@typia/ttsc-{platform}-{arch}` 는 `dist/ttsc/<key>/` 를 `bin/` 으로 복사해 publish한다(§3.2).

### 2.2 `packages/ttsc/package.json` scripts 고정 계약

현재 `packages/ttsc/package.json:18-27` 의 스크립트를 다음으로 확정한다.

| script | 규약 |
|--------|------|
| `build` | `rimraf lib && tsc` — TS launcher 컴파일만. Go 빌드 포함 금지. |
| `go:build` | `go build -trimpath -ldflags "-s -w -buildid= -X main.version=… -X main.commit=… -X main.date=…" -o bin/ttsc-native ./cmd/ttsc` — 로컬·CI 공통. |
| `go:build:all` | 6~7 `GOOS`/`GOARCH` 조합으로 `dist/ttsc/<key>/ttsc` 생성. CI matrix가 아닌 로컬에서도 실행 가능. |
| `go:test` | `go test ./...` — 모든 Go 패키지. |
| `go:vet` | `go vet ./...` + `gofmt -l` (출력 비어있어야 통과). |
| `test:ts` | `node --test --test-reporter=spec --experimental-strip-types test/**/*.test.ts` — TS launcher 단위 테스트. |
| `test` | `pnpm run test:ts && pnpm run test:go` — 순차 실행, 각각 독립 pass여야 전체 pass. |
| `prepack` | `pnpm run build` — **Go binary 포함 금지**. platform-specific 패키지에만 binary가 들어간다. |
| `prerelease` | cross-compile + platform pack 준비 (CI에서만 사용, 로컬 npm publish 차단용). |

`bash -c 'export PATH=...'` 같은 로컬 Go SDK 경로 prefix는 **개발 편의용**으로만 유지. CI는 `actions/setup-go@v6`가 PATH를 세팅하므로 prefix 불필요. Phase 1 진입 시 prefix 제거 여부 재검토(§13 Q-F1).

### 2.3 재현 가능한 빌드 (F2 원칙 구체화)

Go 빌드 플래그 **고정**:

```
-trimpath                  # 소스 경로 제거
-ldflags "
  -s -w                    # 심볼/DWARF 제거 (binary size ↓)
  -buildid=                # build id 고정 (bit-for-bit reproducibility)
  -X main.version={semver}
  -X main.commit={git sha}
  -X main.date={SOURCE_DATE_EPOCH}
"
CGO_ENABLED=0              # glibc/musl 구분 없애기 (linux 대상)
GOFLAGS='-mod=vendor'      # Phase 2 이후: vendor된 shim 사용 (현재 replace 블록)
```

`SOURCE_DATE_EPOCH` 는 `git log -1 --pretty=%ct` 기반. 이 조합이면 동일 커밋에서 두 번 빌드한 바이너리가 `shasum -a 256` 일치한다(tsgonest release.yml:158-197 동일 패턴).

### 2.4 shim 생성 규약 (F 관점)

shim 코드는 `tools/gen_shims/` 가 자동 생성한다. F 영역에서의 규약은:

- 생성된 shim 파일(`shim/*/**.go`)은 **커밋에 포함**한다. 빌드 시 재생성하지 않는다(재현성).
- `tools/gen_shims` 는 **CI의 별도 job**(`shim-regenerate`)에서 주기적으로 실행하여 diff가 없는지 확인. diff 있으면 PR 자동 생성.
- tsgo submodule bump는 월 1회 cron(`update-typescript-go.yml` — tsgolint 패턴 차용).
- shim 재생성으로 인한 LICENSE 주석 유실 방지 — `tools/gen_shims/main.go` 에 header template 명시.

### 2.5 `go.work` 의 운명

`packages/ttsc/go.work` 는 **`.gitignore` 대상**이 아니다(Phase 0~1). Phase 2 production build에서는:

- `go.work` 제거 + `go.mod replace` 블록을 **공식 버전 태그**로 교체.
- 또는 `vendor/` 커밋 후 `-mod=vendor` (supply chain 감사 목적).

현재 `go.work` 에 `../../third_party/typescript-go` 심볼릭 참조가 있다(`packages/ttsc/go.work:21`). 저장소 root에는 `third_party/` 가 존재해야 하며, submodule로 등록한다. CI는 `submodules: true` 로 checkout.

### 2.6 신규 npm 의존성 추가 justification 규약

Node launcher 쪽 dep 추가 시 다음 4항목을 PR description에 기재:

1. **왜 필요한가** — 동등한 Node built-in/bash 한 줄 대안이 존재하지 않는 근거
2. **cold-start 영향** — `require()` 비용 (≤ 5ms)
3. **transitive footprint** — `npm ls --prod --all` 결과 추가 노드 수 (≤ 10 노드)
4. **LICENSE 호환** — MIT / Apache 2.0 / BSD / ISC 이외는 법무 검토 필요

거부 사례: `chalk` (ANSI 코드 직접 사용), `commander` (`process.argv` 직접 파싱으로 충분), `chokidar` (Go에서 fsnotify 사용).

수용 사례: `package-manager-detector` (기존 `packages/typia/package.json:44` 에 이미 사용 중, Setup wizard 재사용).

### 2.7 pnpm workspace 통합

`pnpm-workspace.yaml:2-6` 의 현 설정(`packages/*` 포함)은 그대로 유지. `@typia/ttsc` 는 이미 해당 glob에 잡힌다. 다만 platform-specific 패키지들(`@typia/ttsc-{os}-{arch}`)은 **publish 전용**으로 생성하며 workspace에 올리지 않는다(workspace에 6~7개 빈 패키지를 두는 것은 노이즈). 대신 `tools/pack-platforms.ts` 스크립트(§3.4)가 CI에서 각 platform 패키지를 임시로 생성→publish→정리.

대안으로 tsgonest는 `packages/cli-*` 를 workspace 내부에 둔다(`contributions/tsgonest/packages/`). typia는 9 패키지 + 6 platform = 15개가 되면 pnpm 검색 범위가 커지므로, **dist 경로 임시 패키지 모델**을 선호한다. §13 Q-F2에서 재검토.

---

## 3. 7 플랫폼 배포 규약 (optional deps, 자동 선택)

### 3.1 지원 플랫폼 매트릭스

| # | platform key | os | arch | binary | notes |
|---|-------------|----|------|--------|-------|
| 1 | `linux-x64` | linux | amd64 | `ttsc` | `CGO_ENABLED=0` static (glibc + musl 공통) |
| 2 | `linux-arm64` | linux | arm64 | `ttsc` | static |
| 3 | `linux-arm` | linux | arm | `ttsc` | Raspberry Pi 32-bit, Phase 1 합류 |
| 4 | `darwin-x64` | darwin | amd64 | `ttsc` | macOS Intel |
| 5 | `darwin-arm64` | darwin | arm64 | `ttsc` | Apple Silicon |
| 6 | `win32-x64` | windows | amd64 | `ttsc.exe` | Windows 10/11 x64 |
| 7 | `win32-arm64` | windows | arm64 | `ttsc.exe` | Surface Pro X, Phase 1 합류 |

Phase 0은 1/2/4/5/6 다섯 개(`packages/ttsc/src/platform.ts:69-76` SUPPORTED_PLATFORMS와 일치). Phase 1에 3/7 두 개 추가하여 7개 완성.

### 3.2 npm 패키지 구조

```
@typia/ttsc                    ← 메인 (Node launcher + JS API)
@typia/ttsc-linux-x64          ← platform binary (linux/amd64)
@typia/ttsc-linux-arm64
@typia/ttsc-linux-arm          ← Phase 1
@typia/ttsc-darwin-x64
@typia/ttsc-darwin-arm64
@typia/ttsc-win32-x64
@typia/ttsc-win32-arm64        ← Phase 1
```

각 platform 패키지 package.json 템플릿(tsgonest 모델 기반, `contributions/tsgonest/packages/cli-linux-x64/package.json`):

```json
{
  "name": "@typia/ttsc-linux-x64",
  "version": "0.0.0-phase0",
  "description": "ttsc binary for Linux x64. Automatically selected by @typia/ttsc via optionalDependencies.",
  "os": ["linux"],
  "cpu": ["x64"],
  "license": "MIT",
  "repository": { "type": "git", "url": "https://github.com/samchon/typia" },
  "homepage": "https://typia.io",
  "bugs": { "url": "https://github.com/samchon/typia/issues" },
  "files": ["bin/", "THIRD-PARTY-LICENSES.md"],
  "bin": { "ttsc": "bin/ttsc" }
}
```

포인트:
- `os` / `cpu` 필드가 npm이 **다른 플랫폼에서 자동 skip**하게 만드는 핵심. optionalDependencies 설치 실패가 fatal이 되지 않는 이유.
- `bin` 을 선언해 두면 `$(pnpm bin)/ttsc` 가 해당 platform 패키지의 binary를 직접 가리키게 되어 launcher 경유 없이도 실행 가능(디버깅 편의).
- `THIRD-PARTY-LICENSES.md` 각 platform 패키지마다 포함 — 다운스트림 사용자가 single-file audit 가능.

### 3.3 `@typia/ttsc` optionalDependencies

`packages/ttsc/package.json` 에 추가:

```json
"optionalDependencies": {
  "@typia/ttsc-linux-x64": "workspace:^",
  "@typia/ttsc-linux-arm64": "workspace:^",
  "@typia/ttsc-linux-arm": "workspace:^",
  "@typia/ttsc-darwin-x64": "workspace:^",
  "@typia/ttsc-darwin-arm64": "workspace:^",
  "@typia/ttsc-win32-x64": "workspace:^",
  "@typia/ttsc-win32-arm64": "workspace:^"
}
```

publish 시 pnpm이 `workspace:^` 를 실제 버전으로 치환한다(기존 `packages/typia/package.json:37-41` 과 동일 패턴).

### 3.4 Node launcher 결정 로직

`packages/ttsc/bin/ttsc.js` 와 `packages/ttsc/src/platform.ts` 가 이미 다음 우선순위를 구현. 이를 **불변 계약**으로 못박는다.

1. `TTSC_BINARY` 환경변수(절대경로) — dev/CI override
2. `@typia/ttsc-{platform}-{arch}/bin/ttsc(.exe)` optional dep — production
3. 로컬 `bin/ttsc-native` sibling — Phase 0 dogfooding

실패 시 `installHint()`(`src/platform.ts:118-139`) 출력 후 exit(1). 출력 포맷은 **stderr**, 다국어화 **금지**(영어 고정).

해결 가능한 실패 사례 vs 해결 불가능한 실패 사례를 메시지에서 구분:

| 케이스 | 메시지 | exit |
|--------|--------|------|
| optionalDependencies 설치 실패 | "Try: npm install --include=optional …" | 1 |
| 지원되지 않는 플랫폼 | "Supported: linux-x64, …. Your: freebsd-x64. Open an issue." | 1 |
| binary 존재하지만 exec 실패 | "Failed to spawn {bin}: {errno}. …" | 1 |

### 3.5 크기 예산

Phase 0 snapshot: `bin/ttsc-native` ≈ 27 MB (`packages/ttsc/bin/ttsc-native`). 목표:

- **Phase 0**: ≤ 40 MB/binary (tsgo submodule 포함)
- **Phase 1**: ≤ 35 MB
- **Phase 2**: ≤ 30 MB (데드 코드 제거, UPX 금지 — antivirus false positive)

총 npm download 크기(7 platform): 27 MB × 7 = 189 MB. 하지만 사용자는 `os`/`cpu` 필터로 **단 1개만** 다운로드 → 사용자 체감 ≤ 40 MB.

### 3.6 코드 서명

- **macOS**: Apple Developer ID notarization (연 $99) — Phase 1 Q1 우선순위
- **Windows**: EV code signing (연 $300~500) — AutoBE 수익으로 조달, Phase 1 Q2
- **Linux**: 미적용 (관례상)

미서명 기간에는 `README.md` 와 install hint에 "macOS Gatekeeper / Windows SmartScreen 경고 정상" 공지.

### 3.7 checksums & provenance

각 GitHub Release에 binary 6~7개 + `SHASUMS256.txt` 첨부. npm publish는 `NPM_CONFIG_PROVENANCE=true` 로 **OIDC trusted publishing**(`contributions/tsgonest/.github/workflows/release.yml:87-92` 모델). NPM_TOKEN secret 불필요 → supply chain 리스크 감소.

---

## 4. 버전 정책 (semver, v13 preview 단계)

### 4.1 전체 로드맵

| 단계 | 버전 | 시점 | 특징 |
|------|------|------|------|
| 현재 | typia v12.x | 2026 Q2 | ts-patch + TS transformer. ttsc 미도입. |
| preview | typia v13.0.0-alpha.N | 2026 Q4~ | ttsc opt-in. ts-patch 유지. |
| preview | typia v13.0.0-beta.N | 2027 Q1 | ttsc 기본값(validators만). ts-patch fallback. |
| preview | typia v13.0.0-rc.N | 2027 Q2 | ttsc 전영역. Edge runtime 검증. |
| GA | typia v13.0.0 | 2027 Q2 말 | ts-patch deprecated warning 시작. |
| 유지 | typia v13.x | 2027~2028 | ttsc 기본값. LTS. |
| GA | typia v14.0.0 | 2029 Q2 | Go native 전영역. ts-patch 제거. 세트 동시 launch. |

### 4.2 v13 preview 분할 규약

`-alpha.N` → `-beta.N` → `-rc.N` 승격 기준(E와 공동, F 측면 기준만):

- **alpha → beta**: 3개 세트 프로젝트(nestia · agentica · autobe)에서 dogfood 최소 1주 무사. Edge runtime smoke 통과.
- **beta → rc**: 공개 사용자 5명 이상 production report OK. npm `next` dist-tag로 배포.
- **rc → GA**: GA 1주 전 RC 버전 동결. 24시간 무버그 리포트.

### 4.3 semver 분류 규칙

| 변경 종류 | 버전 bump | 예시 |
|----------|-----------|------|
| 사용자 API 시그니처 변경 | MAJOR | `typia.is<T>` 반환 타입 변경 |
| namespace 추가 (validators · json · llm · …) | MINOR | `typia.new_namespace` 추가 |
| emit 코드 개선 (결과 동일) | PATCH | ternary → switch 성능 리팩터 |
| ttsc CLI 플래그 추가 | MINOR | `ttsc --parallel=N` 신규 |
| ttsc Go binary 재빌드 (코드 불변) | PATCH | Go 1.26 → 1.27 |
| shim 재생성 (tsgo submodule bump) | PATCH | typescript-go weekly bump |
| tsgo submodule major bump (TS 8.0 등) | MAJOR | TS 7.0 → TS 8.0 |

### 4.4 dist-tag 전략

| tag | 용도 |
|-----|------|
| `latest` | 가장 최근 stable GA (v12.x 현재, v13.0 GA 시 갱신) |
| `next` | preview / prerelease (alpha/beta/rc) |
| `legacy-v11` | v12 GA 후 v11 사용자용 긴급 패치 창구 (2028 Q2까지) |
| `canary` | 매일 master tip 자동 publish (§5.5) — 실험용 |

현재 `next.bash:3` 의 `--tag next` 패턴을 그대로 사용. v13 preview 기간에도 동일 스크립트로 배포.

### 4.5 deprecation schedule

- v13.0 GA: `ts-patch install` 감지 시 console.warn 추가
- v13.6 (2028 Q2): warn → error (CI에서 실패)
- v14.0: ts-patch 관련 코드 제거

deprecation 시점마다 CHANGELOG + blog post + Discord 공지 3중 고지.

### 4.6 패키지별 버전 동기화

9 typia 패키지 + `@typia/ttsc` + 7 platform 패키지 = **17개 패키지 버전 동시 bump**. `bumpp -r` (`package.json:13-14`) 로 처리. platform 패키지도 포함되도록 `bumpp` 설정 `packages/ttsc-*/package.json` 경로 명시.

tsgonest는 node script로 loop bump (`contributions/tsgonest/.github/workflows/release.yml:217-235`). typia는 `bumpp` 사용 중이므로 동일 도구 사용.

---

## 5. CI/CD 규약 (`.github/workflows/` 구조)

### 5.1 현 상태와 개정 방향

현재 6개 워크플로:

| 파일 | 현 역할 | Phase 1 개정 |
|------|--------|-------------|
| `build.yml` | pnpm install + build | **Go build job 추가**(matrix 7 platform) |
| `test.yml` | pnpm test | **Go test job 추가** + integration test 추가 |
| `release.yml` | tag push → npm publish + changelogithub + website deploy | **cross-compile + platform pack + provenance 추가** |
| `website.yml` | master push/PR → next build → gh-pages | 유지 (컨텐츠만 갱신) |
| `experiments.yml` | unplugin 실험 테스트 | 유지 + ttsc experiment job 추가 |
| `spell-check.yml` | typos | 유지 |

신설:
- `shim-regenerate.yml` — monthly cron으로 `tools/gen_shims` 재실행, diff 있으면 PR 생성
- `update-typescript-go.yml` — monthly cron으로 tsgo submodule bump (tsgolint `.github/workflows/update-typescript-go.yml` 패턴)
- `benchmark.yml` — weekly cron으로 벤치 실행, 결과를 `benchmark/results/**/README.md` 에 커밋

### 5.2 `build.yml` 개정 상세

```yaml
# .github/workflows/build.yml
name: build
on:
  pull_request:
    paths:
      - '.github/workflows/build.yml'
      - 'internals/config/**'
      - 'packages/*/src/**'
      - 'packages/*/package.json'
      - 'packages/ttsc/**'
      - 'pnpm-lock.yaml'
      - 'pnpm-workspace.yaml'
      - 'package.json'

jobs:
  # ── 기존: TS 빌드 ────────────────────────────
  Ubuntu:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { submodules: true }
      - uses: actions/setup-node@v4
        with: { node-version: 24.x }
      - uses: pnpm/action-setup@v4
      - run: pnpm install
      - run: pnpm run build

  # ── 신설: Go 빌드 (native only, cross-compile은 release.yml) ─
  Go:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: packages/ttsc
    steps:
      - uses: actions/checkout@v4
        with: { submodules: true }
      - uses: actions/setup-go@v6
        with:
          go-version: '1.26'
          cache: true
          cache-dependency-path: 'packages/ttsc/**/go.sum'
      - run: go vet ./...
      - run: test -z "$(gofmt -l .)"
      - run: go build -trimpath -o bin/ttsc-native ./cmd/ttsc
      - run: go test ./...
```

요점: submodule checkout 필수, Go 1.26 고정, vet+fmt+build+test 순차, 전부 green이어야 PR merge 가능.

### 5.3 `test.yml` 개정 상세

기존 ubuntu-latest 단일 runner에서 **OS 매트릭스**로 확장:

```yaml
jobs:
  Integration:
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        node: [20.x, 22.x, 24.x]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
        with: { submodules: true }
      - uses: actions/setup-go@v6
        with: { go-version: '1.26' }
      - uses: actions/setup-node@v4
        with: { node-version: ${{ matrix.node }} }
      - uses: pnpm/action-setup@v4
      - run: pnpm install
      - run: pnpm -r run test
```

3 OS × 3 Node = 9 조합. 현재는 Ubuntu 단일이라 Windows path 이슈가 뒤늦게 드러날 위험(`packages/ttsc/internal/driver/rewrite.go` 의 `/` suffix 매칭 로직). Phase 0은 Linux 단일 허용, **Phase 1 Week 1에 Windows·macOS 추가**가 F 책임.

### 5.4 `release.yml` 개정 상세

기본 골격은 tsgonest release.yml 을 차용하되 typia 고유 사항 반영:

```yaml
name: release
on:
  push:
    tags: ['v*.*.*']
permissions:
  id-token: write     # OIDC trusted publishing
  contents: write     # GitHub Release

jobs:
  # Gate: 전체 테스트 통과 확인
  test:
    uses: ./.github/workflows/test.yml

  # Cross-compile 7 platform
  build:
    needs: test
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - { goos: linux,   goarch: amd64, key: linux-x64    }
          - { goos: linux,   goarch: arm64, key: linux-arm64  }
          - { goos: linux,   goarch: arm,   key: linux-arm    }
          - { goos: darwin,  goarch: amd64, key: darwin-x64   }
          - { goos: darwin,  goarch: arm64, key: darwin-arm64 }
          - { goos: windows, goarch: amd64, key: win32-x64    }
          - { goos: windows, goarch: arm64, key: win32-arm64  }
    steps:
      - uses: actions/checkout@v4
        with: { submodules: true, fetch-depth: 0 }
      - uses: actions/setup-go@v6
        with: { go-version: '1.26' }
      - name: Build
        working-directory: packages/ttsc
        env:
          GOOS: ${{ matrix.goos }}
          GOARCH: ${{ matrix.goarch }}
          CGO_ENABLED: 0
        run: |
          VERSION="${GITHUB_REF_NAME#v}"
          COMMIT="${GITHUB_SHA::7}"
          DATE="$(git log -1 --pretty=%ct)"
          EXT=""
          [ "$GOOS" = "windows" ] && EXT=".exe"
          mkdir -p ../../dist/ttsc/${{ matrix.key }}
          go build \
            -trimpath \
            -ldflags "-s -w -buildid= -X main.version=$VERSION -X main.commit=$COMMIT -X main.date=$DATE" \
            -o ../../dist/ttsc/${{ matrix.key }}/ttsc$EXT \
            ./cmd/ttsc
      - uses: actions/upload-artifact@v7
        with:
          name: ttsc-${{ matrix.key }}
          path: dist/ttsc/${{ matrix.key }}/**

  publish:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: actions/setup-node@v6
        with: { node-version: 24.x }
      - uses: pnpm/action-setup@v4
      - uses: actions/download-artifact@v8
        with: { pattern: ttsc-*, path: dist/ttsc }

      # Platform 패키지 staging
      - run: pnpm tsx packages/ttsc/tools/pack-platforms.ts

      - run: pnpm install --no-frozen-lockfile
      - run: pnpm -r --filter=./packages/* run build

      # Publish with OIDC provenance
      - run: pnpm -r --filter=./packages/* publish --tag ${{ contains(github.ref_name, '-') && 'next' || 'latest' }} --access public --no-git-checks
        env:
          NPM_CONFIG_PROVENANCE: 'true'

      # GitHub Release + binary 첨부
      - uses: softprops/action-gh-release@v2
        with:
          files: |
            dist/release/ttsc-*
            dist/release/SHASUMS256.txt
          generate_release_notes: true
```

### 5.5 `canary` 파이프라인 (신설, 선택)

master push 시 매일 자정 자동으로 `0.0.0-canary.{date}.{sha7}` 로 publish (dist-tag `canary`). 검증용. 실패해도 release 차단하지 않음.

### 5.6 `website.yml` 유지 + AI 문서 반영

현 `website.yml:1-45` 그대로 사용. `llms.txt` 및 `llms-full.txt` 는 `website/src/app/` 에 동적 라우트로 추가(§8.1).

### 5.7 공식 워크플로 수 불리기 금지

워크플로 개수가 많아지면 GitHub Actions UI 가독성 저하 + minutes 낭비. 기본 6개 + 신설 3개 = 9개 상한. 새 워크플로 추가 시 기존 워크플로 합치기 우선 검토.

### 5.8 runner 비용 상한

monthly budget: **$50** (`wiki/08-tsgo-master-plan/17-phase0-kickoff.md:360-362`). 초과 시 F가 개입:

- matrix 축소 (Node 20.x 제거 등)
- cache hit-rate 점검
- `pnpm store prune` 주기적 실행

---

## 6. Setup wizard 규약 (migrate 명령)

### 6.1 CLI 진입점

현 `packages/typia/package.json:12-14` `bin: { typia: ./src/executable/typia.ts }` 유지. 즉 사용자는 여전히 `npx typia setup` 을 쓴다. **단어 하나 추가도 없다** (F1 원칙).

옵션 추가:

```
npx typia setup [--runtime=ttsc|legacy] [--project=typia|nestia|agentica|autobe]
```

| 플래그 | 기본 | 동작 |
|--------|------|------|
| `--runtime=ttsc` | (v13 preview에서는 기본) | ts-patch 제거 + `@typia/ttsc` 설치 + `prepare` script 제거 + tsconfig 검증 |
| `--runtime=legacy` | | 기존 v12 경로 (ts-patch install). deprecation warning 표시. |
| `--project=nestia` | | 추가로 `@nestia/sdk` 의 tsconfig plugin 확인, swagger config 검증 |
| `--project=agentica` | | typia.llm.application 사용처 스캔, v13 호환 경고 |
| `--project=autobe` | | 전체 세트(typia+nestia+agentica) 동시 마이그레이션 |

### 6.2 멱등성 (idempotency)

`setup` 은 N번 실행해도 같은 결과여야 한다. 각 단계는 "이미 완료되었는지 감지 → skip". 실패 시 rollback 지점 명시.

### 6.3 사용자 tsconfig 보존

tsconfig.json 을 `comment-json` (`packages/typia/package.json:41`) 로 파싱, 주석·포맷 보존. 다음 3항목만 수정:

1. `compilerOptions.plugins` 에 `{ "transform": "typia/lib/transform" }` 존재 확인(유지 — API 불변)
2. ts-patch 관련 `prepare` 스크립트 제거 (package.json)
3. (v14부터) `plugins` 항목 자체를 제거하고 `ttsc` 가 자동 감지

### 6.4 migration dry-run

```
npx typia setup --dry-run --runtime=ttsc
```

수정사항을 실제로 쓰지 않고 diff만 출력. CI 자동화 / 검토용. 2026 Q4 v13 alpha부터 필수.

### 6.5 실패 처리

- Node 버전 < 20 → error exit 2, "Node 20+ required"
- pnpm/npm/yarn 감지 실패 → `package-manager-detector` 로 해결, 실패 시 user에게 선택지 제공
- @typia/ttsc install 실패 → `installHint()` 그대로 재사용 (§3.4)

### 6.6 telemetry 금지

Setup wizard는 **네트워크 호출 0회**. 분석 목적의 ping 등 일체 없음. 사용자 신뢰 원칙.

### 6.7 4-project 동시 마이그레이션 (autobe 케이스)

`--project=autobe` 는 사용자 저장소에 autobe + agentica + nestia + typia 의존성이 모두 있다고 가정. 순서:

1. typia 먼저 (가장 낮은 층, 4.1 로드맵 순서)
2. agentica (typia.llm.application 소비자)
3. nestia (typia.assert/validate + @nestia/sdk)
4. autobe (최상위)

각 단계 실패 시 이전 단계 롤백 않음 — "여기까지 성공, 여기부터 수동" 메시지. idempotent이므로 재실행 안전.

---

## 7. 문서 규약 (README, website, 변경 이력)

### 7.1 저장소 루트 README.md

현 `README.md:1-52` 유지(사용자 API 불변). v13 preview 시 상단에 배너 추가:

```markdown
> **v13 preview available!** `@typia/ttsc` (tsgo-native) is now in beta.
> Migrate with `npx typia setup --runtime=ttsc`.
> See [v13 migration guide](https://typia.io/docs/migration/v13).
```

v13 GA 시 배너 해제. v14 로드맵 언급은 별도 `ROADMAP.md` 로 분리.

### 7.2 패키지별 README

각 `packages/*/README.md` 는 루트 README의 복사본이 아니라 **해당 패키지의 역할**을 설명:

- `packages/typia/README.md` → 사용자용 (현재 README.md 복사. `package.json:20` 가 `cp ../../README.md README.md` 수행)
- `packages/ttsc/README.md` → ttsc 자체 사용자용 (tsgo, 설치, CLI, bundler 통합)
- `packages/core/README.md` → 개발자/기여자용 (IR 구조, Go 포팅 관계)
- `packages/ttsc-{platform}-{arch}/README.md` → 불필요. 대신 하나의 짧은 문장 + @typia/ttsc 링크.

### 7.3 website/ 구조

현 `website/` (Next.js) 그대로 유지. 신설 섹션:

```
website/src/app/
├─ docs/
│  ├─ migration/
│  │   ├─ v13/                   ← 신설
│  │   │   ├─ from-v12.mdx
│  │   │   ├─ runtime-ttsc.mdx
│  │   │   └─ troubleshooting.mdx
│  │   └─ v14/                   ← 2028 Q4 신설
│  ├─ ttsc/                      ← 신설
│  │   ├─ overview.mdx
│  │   ├─ cli.mdx
│  │   ├─ bundler-adapters.mdx
│  │   └─ ai-native.mdx
│  └─ ...
└─ blog/
   ├─ 2026-q2-tsgo-announcement.mdx
   ├─ 2026-q4-ttsc-beta.mdx
   └─ ...
```

### 7.4 CHANGELOG

현재는 GitHub Releases 자동 생성(`changelogithub`, `.github/workflows/release.yml:34`). 유지. 단, v13 alpha.1 이후부터는 `CHANGELOG.md` 루트 커밋(`git-cliff` 모델, tsgonest `release.yml:109-137`) 병행 고려. Phase 1 Week 1 F 결정사항.

### 7.5 THIRD-PARTY-LICENSES

`packages/ttsc/THIRD-PARTY-LICENSES.md` 필수. 포함 내용:

| 프로젝트 | LICENSE | 사용 형태 |
|---------|---------|----------|
| microsoft/typescript-go | Apache 2.0 | submodule, shim 통한 사용 |
| typescript-eslint/tsgolint | MIT | `tools/gen_shims` 아이디어 이식 (attribution) |
| (tsgonest 구조 참고는 copy 없음, attribution 대상 아님) | - | 구조만 참고 |

각 platform 패키지에도 동일 파일 복사 — `tools/pack-platforms.ts` 담당.

### 7.6 blog 캘린더 (§8.1의 메시지 계층과 연결)

| 시점 | 제목 | 대상 | 근거 |
|------|------|------|------|
| 2026 Q2 | typia × tsgo: 공식 입장 | Issue #1534 응답 | wiki 11 메시지 A |
| 2026 Q2 | Why typia is the only validator that works on Cloudflare Workers | Edge runtime 차별 | wiki 11 메시지 B |
| 2026 Q2 | Type-first works best with AI | AI-native DX | wiki 11 메시지 C |
| 2026 Q4 | `ttsc` beta: 6주 spike 결과 | ttsc beta | wiki 11 메시지 D |
| 2027 Q2 | typia v13: Surviving tsgo | v13 GA | wiki 11 메시지 E |
| 2028 분기 | typia-go progress | 투명 업데이트 | wiki 11 메시지 F |
| 2029 Q2 | The ecosystem goes native | 세트 동시 launch | wiki 10-05 |

### 7.7 벤치 결과 공개

`benchmark/results/**/README.md` 9개 CPU별 결과 유지. ttsc 전환 후에는 "tsc+ts-patch vs ttsc" 추가 컬럼. 불리한 경우도 숨기지 않음(F5 원칙).

### 7.8 언어

README·website·블로그: **영어 원본**. 한국어 번역 wiki 는 별도(현 wiki/ 다국어 정책 유지).

---

## 8. AI-native DX 규약 (llms.txt, Cursor rules, MCP)

> 배경: wiki 11 메시지 C — "Type-first works best with AI code generation". typia는 AI 코드 생성 도구(Cursor, Claude, Copilot)와 가장 궁합이 좋은 validator임을 차별점으로 삼는다.

### 8.1 `llms.txt` 와 `llms-full.txt`

https://llmstxt.org/ 규격에 따라 `website/public/llms.txt` 생성:

- `llms.txt` — 간단판 (200~500 줄). 사이트맵 역할. 링크 중심.
- `llms-full.txt` — 전문판 (5~20K 줄). 주요 API 레퍼런스 + 예제 본문 포함.

생성은 `website` 빌드 시 자동. `package.json` 의 `postbuild` hook에서 MDX → plain text 변환. Next.js 정적 페이지로 서빙.

### 8.2 Cursor rules

`website/public/cursor-rules/typia.mdc` 배포. 사용자는 `~/.cursor/rules/` 에 복사하여 사용. 내용:

- typia.is / assert / validate 선택 가이드
- namespace 매핑 (llm / json / protobuf / random)
- `tsconfig.json` 설정 예시
- ttsc 마이그레이션 팁

### 8.3 `@typia/mcp` server

`packages/mcp/` 이미 존재(`packages/mcp/package.json`). 확장:

- `typia.schema` — 타입명 → JSON Schema 조회
- `typia.bench` — 벤치 결과 조회
- `typia.migrate` — 마이그레이션 힌트 제공

Claude Desktop / Cursor / Windsurf / Claude Code 네 클라이언트에 등록 가이드를 `website/docs/ai-native/mcp.mdx` 에 수록.

### 8.4 AGENTS.md

저장소 루트에 `AGENTS.md` 추가(OpenAI Codex / Claude Code agent 관례). 내용:

- 이 저장소의 folder map
- Go/TS 듀얼 빌드 안내
- 주요 명령 (`pnpm install`, `pnpm run test`, `pnpm --filter ttsc run go:test`)
- agent가 피해야 할 것 (generated shim 수정 금지 등)

tsgolint `AGENTS.md` / tsgonest `AGENTS.md` · `CLAUDE.md` 모델 참고.

### 8.5 자동 생성 vs 수기

`llms.txt` 는 MDX 소스에서 자동 생성(수기 작성 금지 — drift 위험). `AGENTS.md`, `Cursor rules` 는 수기. typia 정체성과 결합되므로 매 MAJOR 릴리스 시 작성자 검수.

### 8.6 모델 호환 리스트

typia가 지원하는 LLM 모델(typia.llm.application의 현재 6 model) 리스트를 `docs/ai-native/models.mdx` 에 명시. OpenAI / Anthropic / Gemini / Llama / DeepSeek 등. 이 리스트는 typia v12 현 wiki의 `@nestia`/`@agentica` 사례와 일관성.

### 8.7 Discovery 채널

- cursor.com 포럼 게시(wiki 11 메시지 C)
- Anthropic devrel 컨택
- LangChain / LlamaIndex 커뮤니티 `@typia/langchain` (`packages/langchain/`) 홍보

---

## 9. 세트 동시 릴리스 규약 (typia/nestia/agentica/autobe)

### 9.1 세트 공동 저장소 + 분리 저장소

| 프로젝트 | 저장소 | 릴리스 도구 |
|---------|--------|-------------|
| typia | samchon/typia (현 저장소) | `release.yml` + `bumpp` |
| nestia | samchon/nestia | 유사 구조 (별도 저장소) |
| agentica | samchon/agentica | 유사 |
| autobe | samchon/autobe | 유사 |

세트 동기화는 **별도 repo** `samchon/ecosystem-release` 가 조율:

- weekly master → dev 동기화 확인
- 네 프로젝트의 CHANGELOG 링크 집계
- 세트 launch tag (`ecosystem-v1`) 관리

### 9.2 Launch day 오케스트레이션 (2029 Q2)

1. **D-7**: 네 저장소 `next` dist-tag 프리즈. RC 버전 동일 커밋.
2. **D-1**: 블로그 포스트 4편 예약. 컨퍼런스 슬라이드 동결.
3. **D0 09:00 KST**: typia v14 `latest` publish → 10:00 nestia v12 → 11:00 agentica next → 12:00 autobe next. 1시간 간격 롤링.
4. **D0 14:00**: 블로그 메인 글 게시.
5. **D0 15:00**: Discord 타운홀.
6. **D+7**: 문제 리포트 공개 (투명성).

### 9.3 공동 hot-fix

세트 릴리스 후 1개 프로젝트 critical bug 시 네 저장소 **모두** hot-fix 버전 동시 발표 — 사용자가 세트 단위로 잠금. 시스템적 해결은 ecosystem-release 저장소 script로 자동화.

### 9.4 `npx typia setup --project=autobe`

§6.7 참조.

### 9.5 메시지 일관성

세트 launch 메시지는 wiki 10-05 의 한 줄:

> "타입 하나에서 백엔드 전체까지. 4 프로젝트가 하나의 Go 바이너리와 하나의 사상을 공유한다."

모든 블로그·X 포스트·컨퍼런스 슬라이드에서 이 문장 유지.

### 9.6 백업 시나리오 (세트 내 일부 지연)

예: typia 기간 내 완성, nestia 2개월 지연. 세트 launch 일정 조정 옵션:

- A. 전체 2개월 연기 (권장 — 세트 효과 극대화)
- B. typia만 먼저 v14 GA, nestia는 v12 유지 (분열 메시지, 비권장)
- C. typia v13 GA 머무르고 nestia 따라잡기 대기

§13 Q-F5 미해결.

---

## 10. 코드·파일 근거 (파일:라인 인용)

### 10.1 Phase 0 실구현 증거

| 근거 | 위치 | 내용 |
|------|------|------|
| Node launcher 구현 | `packages/ttsc/bin/ttsc.js:14-94` | dep-free, inline fallback 내장 |
| platform 결정 로직 | `packages/ttsc/src/platform.ts:88-112` | 3-tier resolveBinary |
| installHint 메시지 | `packages/ttsc/src/platform.ts:118-139` | 에러 출력 포맷 (영어 고정) |
| SUPPORTED_PLATFORMS | `packages/ttsc/src/platform.ts:69-76` | Phase 0 6개 key |
| JS API 계약 | `packages/ttsc/src/api.ts:96-212` | transform/build/check/version/transformAsync |
| Go main entrypoint | `packages/ttsc/cmd/ttsc/main.go:41-85` | run() switch 계약 |
| 버전 ldflags 주입 | `packages/ttsc/cmd/ttsc/main.go:29-33` | `-X main.version=... -X main.commit=... -X main.date=...` |
| help 본문 | `packages/ttsc/cmd/ttsc/main.go:118-169` | CLI 문서 단일 진실원 |
| go.mod replace 블록 | `packages/ttsc/go.mod:9-22` | Phase 0 local shim 구조 |
| go.work 워크스페이스 | `packages/ttsc/go.work:6-22` | 14 use 항목 |
| package.json scripts | `packages/ttsc/package.json:18-27` | 현 scripts 계약 |
| publishConfig | `packages/ttsc/package.json:62-64` | `access: public` |

### 10.2 기존 typia 저장소 근거

| 근거 | 위치 | 내용 |
|------|------|------|
| next 배포 스크립트 | `next.bash:1-4` | `bumpp + pnpm publish --tag next` |
| release workflow | `.github/workflows/release.yml:1-60` | tag push → npm + changelogithub + website |
| build workflow | `.github/workflows/build.yml:1-28` | 현 Ubuntu 단일 build |
| test workflow | `.github/workflows/test.yml:1-28` | 현 Ubuntu 단일 test |
| website workflow | `.github/workflows/website.yml:1-45` | master → gh-pages |
| experiments workflow | `.github/workflows/experiments.yml:1-31` | unplugin tarball 테스트 |
| spell-check | `.github/workflows/spell-check.yml:1-15` | typos |
| catalogs | `pnpm-workspace.yaml:7-28` | typescript · rollup · utils |
| 패키지 publishConfig 패턴 | `packages/core/package.json:86-99` | 9 패키지 공통 |
| typia bin entrypoint | `packages/typia/package.json:12-14` | `npx typia setup` 진입점 |
| typia publishConfig bin | `packages/typia/package.json:119-121` | publish 후 `lib/executable/typia.js` |
| 의존성(Setup wizard 관련) | `packages/typia/package.json:35-46` | comment-json · inquirer · package-manager-detector |
| v12 peerDep | `packages/typia/package.json:47-49` | `typescript: >=4.8.0 <5.10.0` |

### 10.3 wiki 근거

| 근거 | 위치 | 내용 |
|------|------|------|
| 메시지 A~G 계획 | `wiki/08-tsgo-master-plan/11-communication-plan.md:5-82` | 블로그·입장문 캘린더 |
| Phase 0 Week 구조 | `wiki/08-tsgo-master-plan/17-phase0-kickoff.md:30-169` | 6주 스파이크 |
| ttsc.js 템플릿 | `wiki/08-tsgo-master-plan/17-phase0-kickoff.md:207-237` | Node launcher 초안 |
| 플랫폼 호환 정책 | `wiki/08-tsgo-master-plan/17-phase0-kickoff.md:239-244` | glibc/musl, 서명 |
| 자기 빌드 전략 | `wiki/08-tsgo-master-plan/17-phase0-kickoff.md:171-186` | dogfooding 시점 |
| Phase 0 진행 스냅샷 | `wiki/08-tsgo-master-plan/18-phase0-progress-report.md:55-68` | LOC·테스트 현황 |
| 4-project 통합 | `wiki/10-ecosystem/05-integrated-tsgo-transition.md:14-79` | Phase 매트릭스 + launch day |
| Kill criteria (커뮤) | `wiki/08-tsgo-master-plan/11-communication-plan.md:127-132` | 릴리스 기준 |

### 10.4 외부 참조 근거

| 근거 | 위치 | 내용 |
|------|------|------|
| tsgonest release flow | `contributions/tsgonest/.github/workflows/release.yml:1-277` | 완전한 cross-compile + OIDC publish 모델 |
| tsgonest platform pkg | `contributions/tsgonest/packages/cli-linux-x64/package.json:1-11` | os/cpu 필터 + bin 선언 |
| tsgonest optionalDeps | `contributions/tsgonest/packages/core/package.json:50-57` | 6 platform 참조 |
| tsgolint release flow | `contributions/tsgolint/.github/workflows/release.yml:1-87` | workflow_dispatch + matrix |
| tsgolint Node launcher | `contributions/tsgolint/npm/core/bin/tsgolint.js:1-21` | 20줄 dep-free launcher |
| tsgolint gen_shims | `contributions/tsgolint/tools/gen_shims/` | shim 자동 생성 참조 구조 |

---

## 11. 안티패턴

### 11.1 postinstall 다운로드

금지. 이유: supply chain, offline 설치, 캐시 누락. esbuild 구버전 실수를 반복하지 않는다.

### 11.2 npm `scripts.prepare` 와 `postinstall` 혼용

혼용 시 pnpm / npm / yarn 간 동작 불일치. 오직 `scripts.prepack` 에서 build, `postinstall` 없음.

### 11.3 binary를 main package에 포함

`@typia/ttsc` 에 모든 platform binary를 포함하면 download 크기 189 MB → 비현실적. platform 패키지 분리 철칙.

### 11.4 CI에서 binary 로컬 빌드 후 tag

로컬에서 `pnpm go:build:all && pnpm publish` 는 재현성 없음 + 서명 누락. **반드시 GitHub Actions의 `release.yml` 만 publish 권한**. `.npmrc` 에 로컬 인증 secret을 두지 않는다.

### 11.5 버전 불일치

17 패키지 중 일부 버전 up, 일부 down 상태로 publish. `bumpp -r` 로 일괄만 허용. 예외 없음.

### 11.6 `ttsc` 명령 외 별칭 추가

`typia-build`, `tscgo`, `tgo` 같은 alias는 혼란 유발. ttsc 한 단어로 통일(`packages/ttsc/cmd/ttsc/main.go:118-168` help 참조). 단 `ttsc -p` = `tsc -p` 는 tsc 호환 alias이므로 예외(`main.go:72-79`).

### 11.7 비공개 prerelease

`0.0.0-phase0` (현재) 같은 비정식 버전을 `latest` dist-tag로 publish. v13 alpha부터 `next` dist-tag 전용. v12 사용자가 실수로 끌어쓰지 않도록.

### 11.8 문서에서 경쟁자 비방

wiki 11 원칙과 일치. tsgonest / typical / Zod / Valibot 언급 시 사실 기반 비교만. 주관적 우위 주장 금지.

### 11.9 breaking change를 patch로 밀어넣기

"소소한 버그 수정" 명분으로 MAJOR 영향 변경 강행 금지. 사용자 신뢰가 모든 것에 우선(F1 원칙 연장).

### 11.10 Setup wizard에서 사용자 코드 자동 수정

`.ts` 소스 파일은 절대 건드리지 않는다. tsconfig.json · package.json · 마크다운 가이드만 수정 대상.

### 11.11 ts-patch 갑작스런 제거

v13 GA에서 즉시 `throw` 하면 사용자가 막힌다. v13 GA는 `console.warn`, v13.6부터 error, v14에서 완전 제거 — 3단계 점진(§4.5).

### 11.12 multi-arch 단일 바이너리 꼼수

universal2 fat binary는 macOS 외 플랫폼에 부재. platform 매트릭스 7개를 각각 독립 bin으로 유지.

### 11.13 Go 빌드를 `npm run build`에 엮기

`packages/ttsc/package.json:19` `build` 는 TS만. Go 는 `go:build`. 엮으면 Go toolchain 없는 Node 사용자 환경에서 install 실패. **철칙**.

### 11.14 telemetry 추가

어떠한 경로에서도 사용자 환경에서 typia.io / analytics 서버로 ping 금지. 신뢰의 해자.

### 11.15 공식 워크플로 11+ 개

`.github/workflows/` 9개 상한(§5.7). 초과 시 통합·삭제 먼저.

---

## 12. 검증 체크리스트

릴리스 전 PR 리뷰어 + F 역할이 통과 여부를 확인할 항목.

### 12.1 빌드 재현성
- [ ] 동일 커밋 두 번 `go:build:all` 결과의 각 7개 바이너리 `shasum -a 256` 일치
- [ ] `-trimpath`, `-buildid=`, CGO=0 flags가 적용됨
- [ ] Go 1.26 LTS로 빌드됨
- [ ] `SOURCE_DATE_EPOCH` 주입 완료

### 12.2 npm publish 형식
- [ ] `@typia/ttsc` main/types/bin 필드 정확
- [ ] `@typia/ttsc-{platform}-{arch}` 7개 패키지 `os`/`cpu` 필드 정확
- [ ] 각 platform 패키지에 `THIRD-PARTY-LICENSES.md` 포함
- [ ] `NPM_CONFIG_PROVENANCE=true` 로 publish 된 증거 (npm 페이지의 ✓ 표시)
- [ ] 17 패키지 버전 일치
- [ ] v13 preview는 `--tag next` 로만 publish

### 12.3 Node launcher
- [ ] Node 20/22/24 에서 모두 실행
- [ ] Ubuntu / macOS / Windows 에서 cold-start ≤ 200ms
- [ ] `TTSC_BINARY` env override 작동
- [ ] optional dep 누락 시 `installHint()` 정확한 메시지
- [ ] 지원되지 않는 플랫폼 검출 (예: freebsd) 시 meaningful error

### 12.4 CI/CD
- [ ] `build.yml` 에 Go job 추가됨
- [ ] `test.yml` matrix 3 OS × 3 Node
- [ ] `release.yml` 7 platform cross-compile
- [ ] `shim-regenerate.yml` monthly cron
- [ ] `update-typescript-go.yml` monthly cron
- [ ] runner minutes 월 $50 이하

### 12.5 Setup wizard
- [ ] `npx typia setup --runtime=ttsc` N회 실행 멱등
- [ ] tsconfig.json 주석 보존
- [ ] package.json 의 `prepare: "ts-patch install"` 정확히 제거
- [ ] dry-run 모드 동작
- [ ] `--project=autobe` 4단계 순차 전환

### 12.6 문서
- [ ] README 에 v13 preview 배너 (해당 단계일 때)
- [ ] CHANGELOG (GitHub Releases 또는 CHANGELOG.md)
- [ ] 각 패키지 README 의 역할 차별
- [ ] `THIRD-PARTY-LICENSES.md` 존재
- [ ] `llms.txt` + `llms-full.txt` 빌드 산출
- [ ] `AGENTS.md` 루트
- [ ] Cursor rules 파일 존재
- [ ] 블로그 예약 캘린더 업데이트

### 12.7 AI-native DX
- [ ] `@typia/mcp` 3가지 tool 동작
- [ ] Cursor rules 문서 공개
- [ ] 4 AI 클라이언트 (Claude Desktop/Cursor/Windsurf/Claude Code) 등록 가이드

### 12.8 세트 릴리스 (launch day 전용)
- [ ] 4 프로젝트 RC 동일 커밋 동결
- [ ] 블로그 포스트 4편 예약
- [ ] D-1 체크리스트 완료
- [ ] hot-fix 롤백 리허설

### 12.9 보안·신뢰
- [ ] `SHASUMS256.txt` GitHub Release 첨부
- [ ] OIDC provenance 검증 가능
- [ ] macOS/Windows 코드 서명(해당 시점)
- [ ] telemetry 코드 0건 (grep 통과)
- [ ] postinstall script 0건

---

## 13. 미해결 질문 (Cycle 2 교차 리뷰 대상)

### Q-F1. `packages/ttsc/package.json` 스크립트의 `bash -c 'export PATH=...'` 제거 시점

현재 `packages/ttsc/package.json:22-25` 에 `$HOME/go-sdk/go/bin` prefix 포함. samchon 로컬 편의. Phase 1 CI에서 `actions/setup-go@v6` 가 PATH를 세팅하므로 제거 가능. 언제 제거? dev docker image 제공하면 완전 제거? → B/C/E와 토의.

### Q-F2. Platform-specific 패키지를 workspace에 넣을까 vs `dist/` 임시 생성

tsgonest는 workspace 방식(`packages/cli-*`). typia는 15개로 커지는 부담 우려. 타협안으로 `packages-platform/` 폴더 분리 + workspace 포함? → A와 토의.

### Q-F3. `CHANGELOG.md` 수기 커밋 vs `changelogithub` 자동 Release notes

현재는 `changelogithub`만. git-cliff 전환 시 conventional commits 강제해야 함. 기여자 교육 비용 있음. → D와 토의.

### Q-F4. canary 파이프라인 유지 여부

master tip 자동 publish (dist-tag `canary`). npm 오염 우려 vs 검증 용이. → E와 토의.

### Q-F5. 세트 동시 launch에서 한 프로젝트 지연 시 정책

§9.6 3옵션 (A/B/C). 기본 A(전체 연기)지만 samchon 번아웃 예산 초과 시? → A와 토의.

### Q-F6. Windows EV 코드 서명 비용 조달 시점

연 $300~500. AutoBE 수익 의존. AutoBE 상업화 지연 시 대안? (SignPath.io community plan 확인 필요) → samchon에 확인.

### Q-F7. `@typia/ttsc` 와 `ttsc` alias 패키지 가능 여부

npm `ttsc` 패키지명 가용 확인 필요(`wiki/08-tsgo-master-plan/17-phase0-kickoff.md:36-41`). 확보되면 `ttsc` alias 추가 검토. Microsoft `tsc` 상표 리스크? → 법무 검토 필요.

### Q-F8. linux-arm (32-bit) 지원 시점

Phase 1 합류 결정했지만 Raspberry Pi 시장 실사용자 조사 없음. 트래픽이 작으면 Phase 2로 연기? → 커뮤니티 설문.

### Q-F9. Alpine / musl 명시적 지원

현재 CGO_ENABLED=0 static build면 glibc/musl 양쪽 작동. 단 이를 공식 문서에 **약속**할지, 단순히 "아마 동작"으로 둘지. Docker 이미지 공식 제공 여부까지. → Phase 1 Q1에 dogfood.

### Q-F10. Cursor rules · llms.txt 자동 생성 도구

`website` 빌드 시 자동 생성 언급했지만 구체 스크립트 미존재. next.js 정적 생성 방법? 외부 lib (`docusaurus-plugin-llms` 등) 있지만 next.js 기반. → 개발 필요.

### Q-F11. `ecosystem-release` 저장소 스펙

§9.1 언급. 실제 저장소 구조·스크립트 미정의. nestia/agentica/autobe 저장소 접근 권한 통합? → samchon 계정 단일 관리면 문제 없음.

### Q-F12. 자동 bench 회귀 감지

`benchmark.yml` 신설 (§5.1)의 결과를 어떤 임계치로 regression으로 판단? 5% 악화? 10%? → E와 토의.

### Q-F13. `@typia/ttsc` 와 `@typia/transform` 관계 (v13~v14)

v13 preview: 두 패키지 공존(ttsc opt-in), `@typia/transform` 은 ts-patch용. v14: `@typia/transform` deprecated + 제거? 아니면 얇은 shim 유지? → D와 토의.

### Q-F14. Homebrew / Scoop / winget 배포

npm 만으로 충분한지 vs 네이티브 패키지 매니저 지원. 유지 비용 ↑. 많은 개발자가 npm 설치로 충분. Phase 2 이후 사용자 요청 기반 결정.

### Q-F15. 웹사이트 i18n

ko / ja / zh 번역 필요성. 현재 영어 원본. wiki 는 ko 병행. 공식 문서 i18n는 번역자 확보 필요. Phase 3 이후 결정.

---

## 부록 A. 릴리스 한 눈 타임라인 (F 관점)

| 시점 | 일·주차 | 작업 (F 영역만) | 산출 |
|------|---------|--------------|------|
| 2026-04-19 | Cycle 1 초안 | 본 문서 | `conventions/cycles/cycle-01-F-release-dx.md` |
| 2026 Q2 W2 | 교차 리뷰 | A~E의 초안을 F 관점에서 점검 | `cycle-02-F.md` |
| 2026 Q2 W3 | 개정 | 비판 반영 | `cycle-03-F.md` |
| 2026 Q2 W4 | 통합 감수 | 6 역할 합동 | `cycle-04-integration.md` 기여 |
| 2026 Q2 W5 | 최종 확정 | 최종 규약 | `conventions/06-release-dx.md` |
| 2026 Q2 말 | 공식 입장문 + 블로그 | Issue #1534 답변 + 3편 | github release tag n/a (문서만) |
| 2026 Q3 | Phase 1 Week 0~2 | CI matrix 확장 · shim-regenerate · release.yml 완성 | `.github/workflows/*` 패치 PR들 |
| 2026 Q4 | v13.0.0-alpha.1 | 첫 preview 릴리스 | npm `next` 태그 |
| 2027 Q1 | v13.0.0-beta.N | ttsc 기본값 | `next` |
| 2027 Q2 | v13.0.0 GA | 공식 발표 | `latest` |
| 2027~2028 | v13.1~13.6 | LTS | 월 1~2회 `latest` |
| 2028 Q2 | v13.6 — ts-patch error | deprecation 2단계 | `latest` |
| 2028 Q4 | v14.0.0-alpha.1 | Go-native preview | `next` |
| 2029 Q2 D0 | v14.0.0 GA + 세트 | 4 프로젝트 동시 launch | `latest` × 4 + blog 시리즈 + 컨퍼런스 발표 |
| 2029 Q3~ | v14.1+ | 안정화 | `latest` |

---

## 부록 B. 17 패키지 publish 순서 (v13 GA 기준)

dependency graph 토폴로지 순. 순환 의존 없음(B/A 책임).

1. `@typia/interface`
2. `@typia/utils`
3. `@typia/core`
4. `@typia/transform` (v13 동안은 유지, v14에서 deprecated)
5. `@typia/ttsc-linux-x64`
6. `@typia/ttsc-linux-arm64`
7. `@typia/ttsc-linux-arm`
8. `@typia/ttsc-darwin-x64`
9. `@typia/ttsc-darwin-arm64`
10. `@typia/ttsc-win32-x64`
11. `@typia/ttsc-win32-arm64`
12. `@typia/ttsc` (platform 7개가 먼저 npm에 존재해야 optional deps 해석됨)
13. `typia` (facade)
14. `@typia/mcp`
15. `@typia/langchain`
16. `@typia/vercel`
17. `@typia/unplugin`

`pnpm -r publish` 가 dependency order를 자동 해석하므로 수기 정렬 불필요. 단 **1~11 → 12** 순서는 CI에서 명시적 gating 필요(12가 실패 시 1~11 rollback 불가).

---

## 부록 C. `@typia/ttsc` 의 Phase 0 상태 요약 (타 역할 참고용)

| 항목 | 현재 | 계약 |
|------|------|------|
| `package.json` name | `@typia/ttsc` | 불변 |
| `package.json` version | `0.0.0-phase0` | v13.0.0-alpha.1 에서 semver 복귀 |
| `bin` | `ttsc → bin/ttsc.js` | 불변 |
| `main` / `types` / `exports` | `lib/index.js` / `lib/index.d.ts` / dual | 불변 |
| `optionalDependencies` | **미설정** | Phase 1 Week 1 추가 |
| `scripts.build` | `rimraf lib && tsc` | 불변 |
| `scripts.go:build` | 로컬 PATH prefix | CI에서는 prefix 제거 |
| `scripts.prepack` | `pnpm run build` | 불변 (Go 제외) |
| `devDependencies` | 3개 (catalog) | 불변 — 추가 시 §2.6 |
| `license` | MIT | 불변 |
| `files` | README · LICENSE · package.json · bin · lib · src | 불변 |
| `publishConfig.access` | public | 불변 |

---

## 부록 D. CI 실패 시 runbook (간이)

| 증상 | 1차 확인 | 2차 대응 |
|------|---------|----------|
| Go build 실패 (특정 GOOS) | `actions/setup-go` 버전, submodule 상태 | shim 재생성 PR 열기 |
| npm publish OIDC 실패 | `id-token: write` permission | `NPM_CONFIG_PROVENANCE` 값 확인 |
| optionalDeps install 누락 | `npm ls @typia/ttsc-*` | `--include=optional` 강제 |
| bench regression | `benchmark/results/**/README.md` diff | B/C에게 alert, patch bump 연기 |
| shim diff 감지 | `shim-regenerate.yml` 산출 PR 머지 | 영향 조사 (API 변경 여부) |
| tsgo submodule bump 빌드 실패 | Microsoft 측 변경 확인 | C와 협의, 필요시 bump 연기 |
| website deploy 실패 (gh-pages) | 권한, branch 존재 | 수동 트리거 재시도 |
| Windows test 실패 (path) | `\` vs `/` 처리 | driver/rewrite.go 확인 |

---

## 한 줄 결론 (F 관점)

> **빌드는 재현 가능하게, 배포는 platform 분리 + OIDC provenance 로, 버전은 v12 → v13 preview → v14 native 3단계로, Setup wizard는 멱등+dry-run으로, 문서는 영어 원본 + AI-native DX(llms.txt · Cursor · MCP · AGENTS.md) 로, 세트는 한 번의 launch event로. 사용자 명령은 `ttsc` 한 단어만 추가 — 그 이상은 reject.**
