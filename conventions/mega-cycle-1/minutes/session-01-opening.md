# Session 1 — 개회 및 포지션 발표

> 2026-04-19, 14:00 착수. 의장: **A (Boundary Architect)**. 기록: E (QA/Test Lead).
> 제출된 사전 자료: `../cycles/cycle-01-*.md` 6 편 (총 6,275 줄).

## 개회

**A (의장, Boundary Architect)**: 개회합니다. 이 회의는 wiki/08-tsgo-master-plan 이 확정한 "ttsc + typia-go 통합" 전략을 실행 **규약** 으로 굳히기 위한 것입니다. 아직 규약은 문서가 없고, `packages/ttsc/` 에는 9,947 줄의 Go 코드가 이미 존재합니다. 규약이 없으면 다음 기여자가 제대로 이어받지 못합니다. 오늘 Session 1 은 6 역할 각자의 입장 표명에 할애하겠습니다. 순서는 A → B → C → D → E → F. 각자 3 분 이내로 압축해 주세요.

## A — Boundary Architect 포지션

**A**: 저는 패키지 경계와 사용자 API 불변을 지킵니다. wiki/08/16 의 Layer 6 구분 (L0 Types / L1 Facade / L2 Engine / L3 Runtime / L4 Build / L5 LLM) 을 실행 규약으로 번역하는 게 제 일입니다.

다섯 원칙을 선언합니다. **P1 API-Frozen** — `typia.is<T>(input)` 한 자 불변. **P2 Layer-driven 언어 선택** — L0·L1·L3·L5 는 TS, L2·L4 일부는 Go. **P3 13 namespace 유지**. **P4 tsconfig 호환** (빌드 명령만 `tsc`→`ttsc`). **P5 Edge runtime 호환** (emit 에 `eval`/`new Function` 금지).

제출한 규약은 총 **26 개** 입니다: 패키지 경계 10, 언어 선택 2, 신규 패키지 2, API 불변 4, tsconfig 2, namespace 3 + 세부 + 에코시스템. 각 규약에 ID·본문·Why·인용·위반 결과를 붙였습니다.

솔직히 정직하게 짚습니다. 제 초안의 한계는 **6 항**: ① "13 namespace" 수치가 실제로는 root + 8 export 으로 9 import 지점이라는 것, ② `@typia/typia/src/internal/` 의 헬퍼들이 Layer 상 L3 인데 물리적으로 @typia/typia 안에 있는 혼재, ③ Go/TS 언어 선택을 "tsgonest 가 IPC 없음을 실증" 에 근거로 두었으나 실측 근거 보강 필요, ④ 이하 생략.

이상입니다.

## B — Go Engine Lead 포지션

**B**: 저는 `packages/ttsc/internal/engine/` 안의 Go 코드 — MetadataSchema IR, Analyzer, Collection, Tag — 규약입니다. 제출한 규약은 **1,122 줄 / 90+ 규약**.

핵심 원칙 6 개를 말합니다. ① **1:1 파일 매핑** — typia v12 TS 의 MetadataSchema 12 sum-type 과 Go 의 sum-type 파일이 1:1 대응. ② **Pointer identity** — Collection 등록된 `*ObjectType` 는 의미 동일 타입 간 항상 같은 포인터여야 한다. tsgo 가 의미 동일 타입에 distinct pointer 반환하는 경로가 있어 Cycle 4 에서 무한 재귀가 났고, `typeKey(t) = Type.Id()` 문자열로 교체했습니다. ③ **의존 zero** — 표준 라이브러리 + tsgo 만. ④ **v12 이름 보존** — TS 파일 이름을 Go 에서도 유지. ⑤ **Graceful degradation** — 예외 상황에서도 panic 금지, Metadata 빈 값 반환. ⑥ **측정 없는 최적화 금지**.

쟁점으로 던집니다. **emitter 와의 경계** 는 C 와 합의해야 합니다. 저는 IR 까지만 책임지고, JS 문자열 생성은 C 가 합니다. 하지만 현재 `packages/ttsc/internal/engine/emitter/` 도 제 engine 폴더 안에 있어 경계가 물리적으로 불명확합니다. A 가 이걸 정리해 주십시오.

## C — ttsc Driver Lead 포지션

**C**: 저는 driver (typescript-go 호출) 와 emitter (JS 코드 생성) 와 shim 을 책임집니다. 제출은 **1,357 줄 / 100+ 규약**.

여섯 원칙: **Shim-first** (patch 제로 유지), **Driver 는 얇게** (5 파일, 총 800 줄 이하), **Emitter 는 v12 programmer 1:1 매핑**, **JS rewrite 는 재현 가능**, **sourcemap 은 Phase 0 미지원 (Phase 1 결정)**, **watch mode 는 Phase 1**.

현재 `patches = 0` 입니다. tsgonest 가 3 개, effect-ts 가 23 개인데 저희는 0. 이게 유지 가능할지는 typescript-go internal 이 어떻게 바뀌느냐에 달렸습니다. Go 1.27+ 에서 `go:linkname` 제한이 강화될 예정이라 하니 **risk** 입니다.

B 에게 한 마디 돌려드립니다: emitter 를 engine 폴더에서 driver 폴더로 옮기면 경계가 명확합니다. 대신 IR 은 engine, emit 호출은 driver 쪽에서. 이건 S3 에서 길게 다룹시다.

D 에게 한 가지 부탁: `typia.is<T>` 가 빌드 타임에 치환되는 marker 의 계약. emit 이 어떤 JS 를 쏴야 D 의 façade 가 보장한 동작을 깨지 않는지 명확히 해주세요.

## D — TS Facade Keeper 포지션

**D**: 저는 `@typia/typia`, `@typia/interface`, `@typia/utils` 런타임부, LLM 3 어댑터 (mcp/langchain/vercel) 를 얇게 유지합니다. 제출은 **836 줄 / 70+ 규약**.

일곱 원칙: **API-Frozen**, **0-dep** (interface), **thin-quantified** (typia 현재 7,544 → v13 3,500 → v14 3,000 LOC 상한), **13 namespace 유지**, **no-eval**, **Standard Schema 단일 정본**, **LLM 어댑터 페어**.

여기서 **제가 가장 심각하게 본 쟁점**을 꺼냅니다. `packages/ttsc/internal/engine/emitter/assert.go:63` 주변에서 Go 가 Standard Schema `~standard` 를 **inline 으로 합성** 합니다. 그런데 TS 쪽에는 이미 `packages/typia/src/internal/_createStandardSchema.ts` (134 LOC) 가 있어요. v12 에서 CallExpressionTransformer 가 이 함수를 호출하도록 emit 했죠. 지금 Go 가 inline 을 쓴다는 건 **같은 기능의 구현이 두 벌** 이라는 뜻이고, 사용자가 보는 바깥쪽 동작이 미세하게 다를 가능성이 있습니다. 이건 A 의 BND-API-04 (사용자 관측 동치) 위반입니다.

C 에게: Go inline 을 지우고 `_createStandardSchema(__fn)` 를 호출하는 한 줄로 축소할 수 있죠? 그러면 정본은 TS 하나로 수렴합니다.

A 에게: **"13 namespace"** 수치가 혼선입니다. 제가 도표를 그려봤는데 — `export * as` 실제 지점은 9 곳, docs 상 13 기능 그룹은 별도. 제가 "13=8+5" 라고 썼는데 A 초안은 "13 namespace" 라고만. B 의 "12 sum-type", C 의 "13 programmer", F 의 "13 릴리스 항목" 까지 네 축이 다 "13" 을 달리 씁니다. 한 표로 고정해 주세요.

F 에게: `@typia/utils` 런타임부를 언젠가 `@typia/runtime` 으로 분리해야 합니다. 언제로 할까요? 제 생각엔 v14 가 적절합니다.

## E — QA/Test Lead 포지션

**E**: 저는 Go unit + TS integration + fixture + benchmark + CI 를 책임집니다. 제출 **933 줄 / 80+ 규약**.

열 가지 원칙 중 가장 중요한 것: **"검증 수단 없는 규약 금지"**. 즉, 선언만 하고 CI 에서 감지 안 되면 공허합니다. 지금 사전 제출된 5 개 초안 (A~F, 제 자신 제외) 을 훑어보니 **40+ 규약 중 다수가 감지 메커니즘 없이 선언만** 되어 있습니다. 예를 들어 A 의 BND-API-04 는 어떻게 CI 에서 감지합니까? 제안하자면, 매 커밋마다 v12 와 v13 이 동일 입력에 대해 동일 출력을 낸다는 **parity test** 를 돌리는 겁니다.

둘째 원칙: **"PASS 되게 만든 무의미 테스트" 금지**. B 의 `analyzer_test.go` 에 placeholder 같은 assertion 이 있어요. "no panic" 만 체크하고 결과값을 안 봅니다. 그리고 "측정 없는 가정" 이 B 초안에 3 곳 표시되어 있는데 이건 skip 의 전 단계입니다.

셋째: **regression ID 체계**. 제가 제안합니다. `R-{mega}.{sub}-{role}-{seq}` 형식. 예: `R-1.4-B-0002` = Mega-1 Sub-4 에서 B 가 제기한 두 번째 regression. Cycle 4 에서 발견된 두 버그는 `R-0001` (analyzer pointer 무한 재귀) / `R-0002` (emitter goroutine 스택오버) 로 굳히고, 앞으로 발견되는 걸 이어 붙입시다.

넷째: **9 job CI matrix** 를 제안합니다. OS (linux/mac/windows) × Node (20/22) 중 주요 3 조합 + Go 1.26 + Bun + Edge 런타임 스모크. F 의 7 플랫폼 matrix 와 충돌 없이 조정 가능한지 확인해 주세요.

D 의 Standard Schema 쟁점에 대해: 지금 당장 parity fixture 하나 만들면 TS↔Go 차이를 red 로 잡을 수 있습니다. 미룰 이유가 없습니다.

## F — Release/DX Lead 포지션

**F**: 저는 pnpm+Go 빌드, 7 플랫폼 배포, 버전 정책, Setup wizard, 문서, AI-native DX. 제출 **1,161 줄 / 90+ 규약**.

핵심 결정 13 개를 압축합니다.

① **빌드 분리**: `npm run build` 는 TS 만. Go 빌드는 `go:build` 스크립트 별도. 섞으면 npm 유저가 Go 툴체인 요구받게 됩니다.

② **재현 가능 빌드**: `-trimpath`, `-buildid=`, `CGO_ENABLED=0`, `SOURCE_DATE_EPOCH` 고정.

③ **7 platform optional deps** — postinstall 다운로드 금지. esbuild·swc 스타일.

④ **버전 3 단계**: v12 → v13 preview (alpha/beta/rc → GA) → v14 Go-native. dist-tag: latest / next / legacy / canary.

⑤ **OIDC trusted publishing** — `NPM_TOKEN` 저장소에서 제거. provenance 기본 켬.

⑥ **Setup wizard 멱등 + dry-run + telemetry 0**.

⑦ **bin 단일화**: `typia` 커맨드는 v14 까지 유지, v15 에서 제거하고 `ttsc` 만 남김.

⑧ **AI-native DX**: llms.txt 자동 생성, Cursor rules, @typia/mcp 확장, AGENTS.md.

⑨ **세트 launch day** — typia + nestia + agentica + autobe 동시. D-7 ~ D+7 오케스트레이션.

제 쟁점 하나 꺼냅니다. **symlink vs submodule**. 지금 `packages/ttsc/third_party/typescript-go` 는 symlink 입니다. 이게 Windows runner 에서 깨집니다. submodule 로 바꿔야 합니다. C 와 합의 필요합니다.

D 에게: bin 단일화에서 `typia` 커맨드 삭제는 "한 단어만 변경" 원칙을 깰 수 있어요. 사용자가 README 따라서 `npx typia generate` 치던 걸 바꿔야 하면 곤란합니다. v14 까지는 유지하시죠.

A 의 P4 "tsconfig 호환" 은 제 편입니다. `plugins[]` 스키마 호환. OK.

## 1 차 자유 질문

**A**: D 가 Standard Schema inline 문제를 강하게 꺼냈는데, 이건 S2 에서 첫 쟁점으로 다루겠습니다.

**B**: F 의 symlink/submodule 은 S4 에서.

**C**: D 의 "13 vs 9" 는 S6 에서. 제 쪽에서는 **13 programmer** 가 실제로는 `Is/Assert/Validate/Stringify/Parse/Schema/Misc/Notations/Reflect/HTTP/Protobuf/Random/LLM` 입니다. A 의 "namespace" 와 별개 축임을 밝히는 게 우선입니다.

**D**: 동의합니다.

**E**: 모든 쟁점에 대해 제가 "검증 공백" 관점을 덧붙이겠습니다. S5 를 테스트·검증 세션으로 남기세요.

**F**: submodule 이외에 `go.work` 의 `replace directive` 가 로컬/CI 간 바이너리 해시 불일치를 일으킵니다. v13 GA 이전 제거 필요. S4 에.

**A (의장)**: 좋습니다. 오늘 Session 1 은 여기서 종료. Session 2 는 15 분 뒤 — 의장은 D 로 바꿉니다. 첫 쟁점은 **Standard Schema 정본**. 모두 `cycle-01-*.md` 재확인하고 돌아오세요.

---

## Session 1 결산

- 6 역할 포지션 공개 완료.
- 공통 발견: "13" 수치 4 축 충돌 (A/B/C/D/F 모두 "13" 을 달리 씀) — S6 중재 대상.
- 주요 쟁점 나열 (S2~S7 로 분배):
  - S2: Standard Schema 정본 (D 제기)
  - S3: IR↔emitter 경계 (B 제기), emitter 폴더 이동 (C 제기)
  - S4: symlink/submodule (F 제기), go.work replace (F 제기)
  - S5: 검증 공백 (E 제기), regression ID 체계 (E 제기)
  - S6: 13 namespace 용어 통합 (D 제기)
  - S7: 공통 — Standard Schema 단일 정본 결론
- samchon 발언 없음 (관찰만).

다음 세션: **S2 — Standard Schema 정본 공방**. 의장 D.
