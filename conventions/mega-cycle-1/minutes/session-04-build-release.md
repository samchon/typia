# Session 4 — 빌드·배포·플랫폼 공방

> 2026-04-19, 15:20. 의장: **F (Release/DX Lead)**. 기록: E.
> 쟁점: symlink/submodule 전환, `go.work replace directive`, 7 플랫폼 matrix, bin 단일화, Setup wizard 의 P1 침해 여부.
> 자료: `cycle-01-F-release-dx.md §2~§6`, `cycle-02-F-review.md § (각 초안 비판)`, `packages/ttsc/go.work`, `packages/ttsc/bin/ttsc.js`.

## symlink vs submodule

**F (의장)**: S1 에서 꺼낸 그대로입니다. 현재 `packages/ttsc/third_party/typescript-go` 는 **symlink** 입니다. 이게 Windows CI runner 에서 깨집니다. `go.work use ../../third_party/typescript-go` 가 resolve 실패.

제안: symlink 를 버리고 **git submodule** 로 전환. 장점은 (1) cross-platform 안전, (2) 버전 lock (pinned commit), (3) 클론 한 번에 전부 준비. 단점은 사용자가 `git submodule update --init` 을 잊으면 빌드 실패.

C, 반대 의견 있습니까?

**C**: submodule 찬성. 저는 Phase 0 초기에 symlink 로 시작한 게 **빠른 반복** 때문이었습니다. 로컬에서 typescript-go fork 를 띄워 놓고 바로 연결하려니까. 하지만 이제 stable 한 ref 가 필요하면 submodule 이 맞습니다.

단, 조건 — tsgo 가 **tagged release** 를 시작하면 submodule 대신 **Go module proxy** 를 쓸 수 있을지 고려해야 합니다. 현재 typescript-go 는 아직 tagged release 없어서 commit SHA 로 pin 밖에 방법 없죠.

**F**: 맞습니다. 단계별로:
- (Phase 0 종료) symlink → submodule 전환.
- (Phase 1 중반, tsgo 가 tagged release 시작하면) submodule → `go.mod` + `replace` 없는 pinned version.

**B**: 저는 endpoint 만 제시합니다 — 빌드 재현성. 어떤 방법이든 좋으니 CI 가 매번 같은 typescript-go commit 으로 빌드해야 합니다.

**F**: 그래서 두 번째 쟁점 꺼냅니다.

## go.work replace directive

**F**: `go.work` 안의 `replace` directive 는 로컬 개발용이지 배포용이 아닙니다. 현재 설정에 따라 바이너리 해시가 로컬/CI 간 불일치할 수 있어요. v13 GA 이전에 제거해야 합니다.

**C**: 동의. 단 제거 시점은 tsgo 가 tagged release 시작한 뒤. 그 전엔 replace 없이는 pin 이 어렵습니다.

**F**: 좋습니다. **조건부 deadline**: "tsgo tagged release 시작 후 30 일 이내 replace 제거".

**B**: 제거 전까지는 CI 가 `go.work.sum` 을 verify 하도록. 이미 그렇게 하고 있죠?

**C**: 예.

## 재현 가능 빌드 두 축

**B**: F 의 초안 원칙 ②를 재확인하고 싶습니다. "`-trimpath`, `-buildid=`, `CGO_ENABLED=0`, `SOURCE_DATE_EPOCH`". 저는 재현성을 두 축으로 나누고 싶습니다.

1. **바이너리 재현**: Go 빌드 결과물 (ttsc 실행파일) 의 바이트 해시 재현.
2. **emit 재현**: 같은 입력 TS 가 항상 같은 JS 를 emit 하는 것. Go 엔진 내부의 map iteration 순서 등이 영향을 줄 수 있습니다.

①은 F 의 영역, ②는 B 의 영역. 둘 다 CI 게이트로 검증해야 합니다.

**F**: 두 축 분리 합의. 규약 §3 을 두 축으로 재작성하겠습니다.

**E**: 둘 다 fixture 가 필요합니다.
- `R-1.4-F-0001`: 같은 typia 소스를 두 번 빌드해서 ttsc 바이너리 해시 비교. RED = 해시 다름.
- `R-1.4-B-0001`: 같은 TS 입력을 두 번 emit 해서 JS 결과 바이트 비교. RED = 결과 다름.

**F**: 반영.

## 7 플랫폼 matrix

**F**: 7 플랫폼 = macos/linux/windows × arm64/x64 + linux-arm. 현재 Phase 0 에서 linux-x64 와 macos-arm64 만 CI 에서 검증. 나머지 5 개는 미검증.

E, 이게 CI 에서 돌릴 만한 규모인가요?

**E**: 완전 matrix 는 큽니다. 제안한 것은 **3/6/9 조합**:
- PR 마다: **3 조합** (linux-x64 Node 20, macos-arm64 Node 22, windows-x64 Node 22).
- Release 전: **6 조합** (PR 3 + macos-x64, linux-arm64, windows-arm64 추가).
- Nightly: **9 조합** (Release 6 + linux-arm, Node 18 legacy, Bun).

예산은 GitHub Actions 무료 티어 유지선에 맞춰 분 단위로 계산하면 $50/월 이내 가능.

**F**: 좋습니다. 이걸 §5 CI 규약으로 굳히겠습니다.

## linux-arm / win32-arm64 검증 공백

**F**: 현 상태에서 linux-arm (32-bit) 와 win32-arm64 는 Phase 0 에 실기기 검증이 없습니다. 제 초안 쟁점 10.

**B**: linux-arm 32-bit 는 우려 있습니다. `shim/checker` 에서 `unsafe.Pointer` 로 mirror struct 를 만드는 곳이 있어서 32-bit 에서 field offset mismatch 가능성. 실제로 돌려봐야 합니다.

**C**: 저는 `unsafe.Pointer` 쓰는 곳을 lint 로 찾아 목록화하겠습니다. 그 위치들을 linux-arm CI 스모크에서 중점 검증.

**F**: 그러면:
- Phase 0 종료 전: linux-arm / win32-arm64 스모크 CI 추가 (Nightly 한정).
- RED 뜨면 Phase 1 착수 전 해결.

## bin 단일화 (tsc → ttsc)

**F**: 제 원칙은 "tsc → ttsc 한 단어만 변경". 그런데 현재 `packages/typia/package.json` 의 `bin.typia` 가 있고, ttsc 자체도 `bin.ttsc` 를 제공합니다. bin 두 개.

사용자 입장에서 `typia generate` vs `ttsc` 둘 중 뭘 써야 하는지 헷갈립니다. 제 초안: v14 까지 `typia` 커맨드 유지, v15 에서 제거.

**D**: D 입장에서 맞춥니다. 지금 `typia` 커맨드는 legacy generate mode (ts-patch 기반) 입니다. tsgo 시대엔 불필요. 하지만 README 에 수년간 `typia generate` 가 적혀 있어 문서 수정·사용자 교육 부담.

절충안:
- v13.0~v13.2: `typia` 커맨드 → warning + 안내 메시지 (`ttsc` 쓰라고) 후 현 기능 유지.
- v13.3: `typia` 커맨드 warning + dry-run only.
- v14: `typia` 커맨드 완전 제거. `ttsc` 만 남김.

**F**: 좋습니다. 이건 D §3.5 에 정식 명문화.

**A**: BND-API-04 관점에서, 커맨드 이름 변경은 "API" 가 아니라 "사용자 빌드 명령" 이므로 별개 원칙. 제 P1 "API-Frozen" 이 커맨드까지 포함하는 건 아닙니다. F 의 v14 제거는 승인.

**F**: 감사합니다.

## Setup wizard — P1 침해 여부 점검

**F**: Setup wizard 는 `ttsc init` 처럼 호출하면 사용자 프로젝트의 tsconfig·package.json·README 를 자동 수정해 v13 로 이행시켜 줍니다. D 가 지적한 "marker 파일 삭제 시 tsconfig 추가 수정 필요" 를 wizard 로 흡수 가능.

**D**: Wizard 가 아래를 자동화하면 좋습니다:
- `typia` 의존성 교체 (`typia`→`@typia/typia@13`).
- tsconfig `plugins[]` 에 `{ transform: "typia/lib/transform" }` 가 있으면 제거.
- `build` 스크립트의 `tsc` → `ttsc`.
- Edge runtime 호환 flag 자동 설정.

이를 wizard 가 멱등·dry-run·telemetry 0 으로 수행하면 **P1 "한 단어만" 원칙의 실질적 이행** 입니다.

**A**: 동의. P1 의 정의를 "**사용자가 수동으로 바꾸는 글자 수**" 로 해석하면, wizard 가 자동화한 것은 P1 범위에서 제외.

**E**: wizard 테스트. dry-run 모드에서 결과 diff 만 찍어 주고, 실제 적용은 `--apply` flag. fixture 로 가짜 프로젝트 12 개 (여러 구조) 두고 매번 검증.

## AI-native DX — llms.txt 등

**F**: AI 시대를 대비한 원칙 이것도 한마디. **llms.txt 자동 생성**, **Cursor rules**, **@typia/mcp 확장**, **AGENTS.md**.

**D**: @typia/mcp 는 이미 있죠. 어떻게 확장?

**F**: 현재 @typia/mcp 는 typia 기능을 LLM 에 노출하는 MCP server 입니다. 이것에 추가로 "typia 규약 검색" 엔드포인트를 두어, Claude/Cursor 같은 AI 가 conventions/ 문서를 의미 검색하도록. 신규 기여자가 규약을 찾는 시간을 줄입니다.

**A**: 이건 nice-to-have 지 v13/v14 필수 아닙니다. Phase 2~3 으로 이월.

**F**: 동의.

## 4 프로젝트 동시 launch

**F**: typia + nestia + agentica + autobe 동시 launch 는 wiki/10-ecosystem/05 에 명시된 전략입니다. D-7~D+7 오케스트레이션.

이 세션에서는 **규약 측면에서** 만 봅니다: typia 의 release cycle 을 다른 3 프로젝트와 sync. 즉 typia v14 release 일자가 나머지 3 의 major version 과 맞아야 함.

**A**: 이건 Mega-5 미래 시나리오에서 더 다룰 문제. 본 세션은 typia 기준 규약만.

**F**: 동의.

## 의장 요약

**F (의장)**: 합의 사항.

1. **symlink → submodule** (Phase 0 종료).
2. **go.work replace 제거**: tsgo tagged release 후 30 일.
3. **재현 가능 빌드 두 축** (바이너리 + emit). 각 fixture.
4. **7 플랫폼 matrix 3/6/9 조합**. PR/Release/Nightly.
5. **linux-arm / win32-arm64 nightly 스모크** — Phase 0 종료 전.
6. **bin 단일화 단계별**: v13.0~13.2 warning, v13.3 dry-run only, v14 제거.
7. **Setup wizard** — 멱등·dry-run·telemetry 0·fixture 12.
8. **AI-native DX** (llms.txt 등) 는 Phase 2~3 로 이월.

이의 없음? 없음. **Session 4 종료**.

---

## Session 4 결산

### 합의

| ID | 내용 | 담당 | 데드라인 |
|----|------|------|----------|
| C4-01 | symlink → submodule | C + F | Phase 0 종료 전 |
| C4-02 | go.work replace 제거 조건부 | C + F | tsgo tagged release +30d |
| C4-03 | 재현 빌드 두 축 분리 | F (바이너리) + B (emit) | 규약 §3 재작성 |
| C4-04 | 7 플랫폼 matrix 3/6/9 | E + F | CI 게이트 §5 |
| C4-05 | linux-arm/win-arm nightly 스모크 | E + F | Phase 0 종료 전 |
| C4-06 | bin 단일화 단계별 | D + F | v13~v14 |
| C4-07 | Setup wizard 멱등·dry-run | F | Phase 1 착수 |
| C4-08 | fixture 2 건 (R-1.4-F-0001, R-1.4-B-0001) | E | 이번 주 |

### 미결 → Mega-5

- `@typia/runtime` 시점 (C4 에서는 v14 확정, 하지만 전략상 변동 가능)
- AI-native DX 확장 범위
- 4 프로젝트 동시 launch 오케스트레이션 세부

### 규약 문서 변경

- F §2 빌드 분리, §3 재현 빌드 두 축, §5 CI 3/6/9.
- C §2 submodule, §2.4 go.work replace 제거 조건.
- D §3.5 bin 단계별.
- B §3/§4 emit 결정론 규약.
- E — R 목록 2 건 추가.

다음 세션: **S5 — 검증 공백과 R-ID 체계**. 의장 E.
