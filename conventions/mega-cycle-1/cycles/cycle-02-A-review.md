# A — Mega-1 Sub-2 교차 리뷰 (Boundary Architect 관점)

리뷰 일자: 2026-04-19
리뷰 대상: `cycle-01-B/C/D/E/F` 초안 5건
리뷰 관점: 패키지 경계, Go/TS 언어 선택, 사용자 API 불변, 13 namespace 정합성

## 1. 총평

다섯 초안 모두 자기 영역은 밀도 높게 정리되어 있다. 경계 관점의 판정은 다음과 같다.

1. **Layer 분류 준수도**: B(L2 Engine), C(L4 Build), D(L0+L1+L3+L5), F(L4+배포)는 BND-PKG-01의 6 Layer와 모순 없다. E는 테스트 layer라 layer 독립이라 무관.
2. **Go/TS 언어 경계**: B는 stdlib-only + shim 우선 원칙이 명확 (BND-PKG-04 준수). C의 "shim 우선, patch 최후 / patches ≤ 3" 원칙도 BND-PKG-04와 정합. 단 **D의 `@typia/utils` 분할**은 A가 BND-PKG-06에서 요청한 "런타임 vs 변환부 경계 확정"에 아직 **미확정** 상태 (D §1.1의 🟡).
3. **사용자 API 불변**: 전 초안이 F1/BND-API-01을 최상위 원칙으로 인정. 단 **D §5.3은 Standard Schema emit의 TS↔Go 불일치를 스스로 폭로** — BND-API-04(동치성) 위반 가능성이 실재.
4. **13 namespace 정합성**: A가 Q2에서 요청한 "13 공식 정의"가 **D §3 / D Q7**에서 자체적으로 재계산되었으나 "8 sub + 5 top-level 그룹"으로 A의 "9 namespace (root+8 sub)"와 다름. Cycle 3에서 단일 표 확정 필수.
5. **tsgo upstream 의존 리스크**: B Q-B2(Type.Id 안정성), C Q-C-self-3(WriteFile API 변동), F Q-F1(bash PATH hack) 이 모두 같은 근본 리스크를 다른 각도에서 제기. A 관점에서 **공통 대응 규약**이 필요 (tsgo pin 정책 + upstream RFC 경로).

우려는 있으나 경계 토폴로지 자체가 흔들릴 대형 결함은 없다. 개별 쟁점은 §2~§6, 교차 모순은 §7, Sub-3 합의 요청은 §8.

### Boundary Architect 관점 4 축 점검 요약

| 축 | 판정 | 근거 |
|---|------|------|
| 패키지 경계 (6 Layer) | **정합** | B/C/D/F 모두 Layer 지정 일치. utils 분할 미결 1 건. |
| Go/TS 언어 선택 | **정합** | B: stdlib-only, C: shim+patch≤3, D: L0 0-dep · L1 얇게, F: CGO 비활성. 모순 없음. |
| 사용자 API 불변 (BND-API) | **1건 위반 실재** | D §5.3 Standard Schema TS↔Go emit 관측 가능 차이. |
| 13 namespace | **용어 3중 충돌** | A(9) / D(13=8+5) / C(13 emitter) / F(13 릴리스 항목) 서로 다름. |

핵심 판단: Standard Schema 불일치 1건이 구현 PR로 해소되고, 13 용어가 단일 표로 정리되면 Mega-1 경계 초안은 **Sub-3 진입 가능**. 나머지 8 건은 Cycle 3~4 통합 감수에서 자연스럽게 정련.

---

## 2. B 초안 비판 (Go Engine)

쟁점 2.1 — **typia v12 이름 보존 원칙이 D의 API-frozen과 잠재 충돌**

- 위치: `cycle-01-B §1.3.4` "접두어 `Metadata`만 제거하고 나머지는 TS와 같게" + B §1.4 용어 표
- 문제: Go 내부 이름이지만, B Q-B1의 `ConstantValue.Value any` → discriminated struct 전환 결정이 실행되면 JSON serialization 출력이 바뀐다. `MetadataSchema.ts` JSON 직렬화는 `@typia/interface` 의 `IMetadataSchema*`(D 관장 L0)가 **공개 API** — 즉 Go 내부 결정이 **L0 타입 표면**에 누출될 수 있음.
- 제안: B §3.1에서 "JSON 호환은 L0 `IMetadataSchema*` 와 byte-level parity"로 승격 못박고, discriminated struct 전환은 JSON 출력 동일성이 보장될 때만 허용으로 제약. Cycle 3에서 D와 공동 부록(Go struct ↔ L0 인터페이스 매핑 표) 추가.

쟁점 2.2 — **§3 IR의 "tsgo Type.Id() 의존"이 패키지 경계 하나를 뚫는다**

- 위치: `cycle-01-B §3` + `cycle-01-B Q-B2` + `cycle-01-C Q-C2B-2`
- 문제: `typeKey` 가 `shim/checker.Type.Id()` 의존. B는 "IR은 순수 데이터" 원칙(§1.3.2)인데 실제 IR 생성 path가 shim 내부 ID에 묶이면 BND-PKG-04(shim 경계) 침범. 또 C는 Q-C2B-2에서 shim에 `Id()` 노출 확인을 B에게 되묻는데, **책임자 불명** 상태.
- 제안: A-원칙 추가. "IR 내부 키는 analyzer가 발행, shim 외부에서는 불투명(opaque handle)". `typeKey` 계산 로직을 analyzer 패키지에 가두고 IR struct는 `string` 키만 저장. shim에는 `Id()` 대신 analyzer가 `Type` 포인터 → 해시로 매핑.

쟁점 2.3 — **Collection 공유 정책 미확정이 병렬 처리 규약에 영향**

- 위치: `cycle-01-B Q-B4` (파일별 vs 프로그램별 Collection)
- 문제: 이 결정은 C 의 driver 동시성(`program.Emit` per-file 호출) 과 E의 race 테스트 규약에 연쇄. Cycle 1 미결은 허용되나 Cycle 3 전 확정 못하면 세 문서가 가정 불일치.
- 제안: Cycle 3 앞 별도 결정 미팅. A 관점 잠정 권고: **파일별 Collection + 프로그램 종료 시 merge pass**. race 없음 + cross-file sharing은 merge에서 복구.

쟁점 2.4 — **§5 Tag 시스템 규약은 L0 `@typia/interface/tags` 스키마를 암묵 정본으로 삼음**

- 위치: `cycle-01-B §5` Tag 시스템 규약 + D §2.3 tags 21종 export
- 문제: B는 tag matrix 포팅 규약을 자세히 적으나, tag 정의 원본(`@typia/interface/src/tags/`)이 L0(D 관장)이라는 명시가 부족. tag 추가 절차(D §2.3: "validate 필드 템플릿 절대 변경 금지")가 B의 Go parse 로직과 어떻게 동기화되는지 미기술.
- 제안: B §5 도입부에 "tag 정의 원본 = L0 `@typia/interface/tags/*`, 이 파일의 `validate` 필드 템플릿 문자열은 Go parser 의 단일 정본" 명기. 테스트는 E가 tag 21종 raw 템플릿과 Go parser 결과를 snapshot 비교.

---

## 3. C 초안 비판 (ttsc Driver)

쟁점 3.1 — **"13 emitter 분야"가 A의 13 namespace 정의와 다른 개념**

- 위치: `cycle-01-C §7` 제목 "Emitter 규약 — 13 분야별" + `§6.3` 7 module 커버리지 표
- 문제: C의 "13"은 emitter 파일 수 (is/assert/validate/equals/json_stringify/json_parse/json_schema/random/misc/notations/reflect/http/functional 등 예정치). A의 "13 namespace"는 사용자 가시 API 단위. 이 용어 충돌이 교차 문서 읽기를 망친다.
- 제안: C §7 제목을 "Emitter 규약 — 13 programmer 분야"로 정정. "namespace"는 사용자 import 지점에만 사용. Cycle 3의 단일 용어 표(A §8 Q1)에 둘 다 등재.

쟁점 3.2 — **"경로 B(emit-time rewrite) 채택"이 BND-API-04(동치성)와 잠재 충돌**

- 위치: `cycle-01-C §4.4~§4.5` + `§8` (JS rewrite 규약) + `§1.4` non-goals sourcemap
- 문제: 문자열 rewrite + sourcemap 미지원은 Phase 0 타당하나, 사용자 디버거 UX가 v12 대비 degrade. BND-API-04의 "동작 동치"는 사실상 런타임 동치만 보장 — DX 동치 아님. 사용자 광고로는 "단어 치환 한 번"이지만 실제 breakpoint 경험이 다르면 불만 발생.
- 제안: F §3.4 install hint와 동급의 "capability matrix"를 사용자에게 공개. v12 vs v13-Phase0 차이 (sourcemap/watch/cache) 를 F 의 README 섹션에 명시 의무. BND-API에 "DX degradation은 공시 의무"라는 서브 원칙 추가 검토.

쟁점 3.3 — **dispatch 단일화 원칙은 강력하나 B의 IR 확장과 동기화 누락 가능성**

- 위치: `cycle-01-C §6.2~§6.4` (dispatch 단일 switch) + `§6.4` 신규 method 추가 5 단계 절차
- 문제: 5단계 절차에서 "emitter 함수 작성"은 B의 IR(`*metadata.Schema`)만 소비. 그러나 functional/protobuf/llm이 요구하는 정보는 현 IR로 부족할 수 있음(C Q-C-self-2 자인). dispatch 단일화가 IR 확장 합의 없이 진행되면 emitter가 shim 직접 접근으로 빠져서 §7.1.1(shim 의존 금지)를 위반할 위험.
- 제안: §6.4 절차에 "0단계: 필요한 IR 정보가 `*metadata.Schema`에 있는지 B와 합의" 추가. 부족 시 IR 확장 PR을 emitter PR과 동일 커밋에 포함.

쟁점 3.4 — **`src/api.ts` (프로그래매틱 API) 경계 주관리자 불명**

- 위치: `cycle-01-C Q-C2A-1` (A에게 질의) + D §1.1 "ttsc는 D 소비 대상"
- 문제: C는 "CLI 진입은 C 소유, 프로그래매틱 `api.ts`는 D와 공유?" 질의. D §1.1은 `packages/unplugin/`, `packages/ttsc/`를 **D 범위 밖**(F 영역)으로 못박음. 결과: `api.ts`가 경계 고아. unplugin 어댑터가 그 API를 사용한다면 C + F + D 삼자 공유.
- 제안: A 결정 필요. 권고: **`api.ts`는 C 소유 (driver 계층 표면), D는 소비자, F는 패키징**. C §5 Driver 규약에 `api.ts` 섹션 명시. unplugin 어댑터가 요구하는 shape 변경은 C + F 합동 결정, D는 breaking만 vet.

---

## 4. D 초안 비판 (TS Facade)

쟁점 4.1 — **"13 namespace" 재정의 (8 sub + 5 top-level)가 A의 "9 namespace"와 불일치**

- 위치: `cycle-01-D §1.2.4` 원칙 4, `§3`, `D Q7` 자체 제기
- 문제: D는 "8 sub namespace + 5 top-level 그룹 = 13" 셈법 채택. A-BND-NS-01은 "root + 8 sub = 9 namespace"로 count. 같은 숫자 주장이 서로 다른 열거로 존재하면 외부 문서(wiki, README)가 어느 셈법을 따를지 혼란.
- 제안: Cycle 3에서 A가 "정식 namespace enum 표" 1 장을 확정. 후보 3안: (a) 9 (root+8), (b) 13 (D안), (c) N programmer(C식). D/A/F가 합의 후 wiki/08 및 README에 동일 표 고정. 현재 D Q7이 A에게 공을 넘긴 상태이므로 A가 Sub-3 전 초안 발행 의무.

쟁점 4.2 — **Standard Schema emit 불일치 자체 폭로는 BND-API-04 위반 실증**

- 위치: `cycle-01-D §5.3` TS vs Go emit 차이 ("두 구현이 다르다")
- 문제: path segment 파서 품질과 message 포맷이 TS(`_createStandardSchema`)와 Go(`assert.go:63`) 사이에 실제로 다름. `~standard.validate` 결과가 관측 가능하게 다르면 v12 → v13 전환 시 **사용자가 검출 가능한 회귀**. A-BND-API-04("같은 입력 같은 출력")의 Phase 0 위반.
- 제안: D §5.3 제안(c) 채택 — Go emit을 `_createStandardSchema(__fn)` 한 줄로 축소, TS가 정본. C는 `assert.go:63` 패치 + E는 두 구현 diff를 regression guard로 등재. Cycle 3 전 구현 PR 선행 권고(문서만으로는 경계 무결성 회복 불가).

쟁점 4.3 — **`@typia/utils` 분할의 "🟡" 미확정이 BND-PKG-06 미결과 동일 지점**

- 위치: `cycle-01-D §1.1` utils 🟡 분할 + A §6 Q1
- 문제: D는 "runtime → TS 유지, 변환부(OpenApi/LlmSchemaConverter 등) → Go 이주"를 제안하되 확정은 유예. A가 Q1에서 "런타임 vs 변환 분류"를 B에게 물은 질문과 같은 미결. 세 역할(A, B, D)이 공을 서로 돌림.
- 제안: Sub-3에 단일 결정 회의 — utils 8 파일별 "런타임/변환/양쪽" 3 bucket 분류표 확정. A가 표 초안, B(Go 이식 비용)와 D(TS 유지 범위)가 각 셀에 투표. 교착 시 A 결정권.

쟁점 4.4 — **executable/ CLI 삭제 책임 분산이 잔여 호환성 위험**

- 위치: `cycle-01-D §1.1` executable 🟡 "삭제/이관" (D 삭제 책임, F 신규 CLI) + `D §8.5` executable 3 파일 인용 + F §6 Setup wizard
- 문제: `TypiaSetupWizard/TypiaPatchWizard/TypiaGenerateWizard` 3 파일(298 LOC) 삭제는 D 영역이나, 신규 `@typia/ttsc` bin 은 F 영역. 삭제 시점과 신규 bin publish 시점이 어긋나면 `npx typia setup` 호출 사용자가 깨짐 — **BND-API-01 (사용자 명령 불변) 위반 창**.
- 제안: A가 "삭제 PR과 신규 bin publish는 동일 release에서" 규약 명시. D § 12 부록 A diff preview에 삭제 커밋 SHA ↔ F publish tag 연결 요구. 사이 기간에는 `typia setup`이 두 경로 모두 지원(임시 호환 shim).

---

## 5. E 초안 비판 (QA/Test)

쟁점 5.1 — **BND-API-04 동치성 측정 기준이 E에 위임되어 있으나 E가 "내용"은 거부**

- 위치: `cycle-01-E §1.1` 범위 매트릭스 (내용=B/C/D, 조직=E) + A §6 Q4
- 문제: A는 Q4에서 "의미적 동치 vs 문자열 동치"를 E에게 판단 요청했다. 그러나 E는 §1.1에서 "이 테스트가 무엇을 단언해야 하는가"는 B/C/D의 영역이라 못박음. 즉 **동치성 레벨 결정권 공백**.
- 제안: 동치성 정책을 A(경계)가 소유하도록 정정. A-BND-API-04 본문에 "레벨 0: 런타임 값 동치 / 레벨 1: error 메시지 문자열 동치 / 레벨 2: JS 출력 byte 동치" 3단 스펙을 추가. E는 레벨별 fixture 셋만 조직. Cycle 3에 A 초안.

쟁점 5.2 — **test-typia-ttsc 네이밍 질문(Q-E6)은 경계 변경 신호**

- 위치: `cycle-01-E Q-E6` "test-typia-ttsc vs test-ttsc"
- 문제: E는 유지로 잠정 결정하나 근거는 "이주 비용". BND-PKG 관점으로는 ttsc는 L4 build integration이므로 **`test-ttsc-build` 또는 `test-@typia/ttsc`** 가 더 정확. D도 Q1에서 `@typia/ttsc` facade 경계 문의 — 같은 명명 혼란.
- 제안: Sub-3에서 F와 공동 결정. A 권고: v13 preview 전 `test-@typia/ttsc`로 개명 (scope package 명시). 비용은 Phase 0 종료 시점에 흡수 가능.

쟁점 5.3 — **"Go 단위 ↔ TS 통합 중간층 없음"이 boundary test gap**

- 위치: `cycle-01-E Q-E1` + `Q-E3` (analyzer fake Checker)
- 문제: analyzer(L2 Go)가 shim(L4 경계)을 건너뛰면서 동작하는지 검증하는 테스트 부재. 즉 BND-PKG-04 "shim 외 의존 금지"를 CI가 강제하지 못함. E 자체는 "없음" 잠정 결정.
- 제안: Cycle 3 권고: Go `go vet` 커스텀 checker 또는 `depguard` linter 규칙을 E §7 CI 규약에 추가. analyzer/ 와 metadata/ 패키지가 shim/*를 import하지 못하도록 정적 강제. Fake Checker는 보조.

쟁점 5.4 — **"항상 PASS" 원칙과 Phase 0 "지원 안 함" fixture 공존 전략의 경계 애매**

- 위치: `cycle-01-E §1.2.1` "항상 PASS" + `§4.5` "지원 안 함은 주석으로" + `§5` regression guard
- 문제: E §4.5는 "지원 안 함을 주석으로 표현"하여 PASS 유지. 그러나 이는 **사용자 관점의 capability matrix**(쟁점 3.2 지적)와 단절. v12 지원 기능이 ttsc Phase 0에서 누락될 때, fixture 주석만으로는 외부 가시성 부족.
- 제안: E §4.5에 "지원 안 함 주석 = `conventions/capability-matrix.md` 자동 생성 소스" 의무화. Cycle 3에서 A가 capability-matrix.md 형식 정의. `v12-supported / ttsc-phase0-gap / phase1-planned` 3 column.

---

## 6. F 초안 비판 (Release/DX)

쟁점 6.1 — **`Q-F2` platform 패키지 workspace 포함 여부가 BND-PKG-07과 충돌할 수 있음**

- 위치: `cycle-01-F Q-F2` + `§3.2` 7 platform 패키지 구조 + A-BND-PKG-07
- 문제: F는 "tsgonest 방식 workspace 포함(15개로 증가)" vs "`packages-platform/` 분리" 사이에서 미결. A-BND-PKG-07은 "7 platform 패키지는 workspace member"로 가정. `packages-platform/` 분리 채택 시 BND-PKG-07 문구 수정 필요.
- 제안: Sub-3에서 A가 결정권 행사. 권고: `packages-platform/` 분리 (workspace 포함은 유지). 이유: `packages/` 는 "소스 계층", `packages-platform/` 은 "바이너리 shell" — 개념 분리. 15 패키지 부담은 pnpm filter로 흡수 가능.

쟁점 6.2 — **Q-F7 `ttsc` alias 패키지 추구는 사용자 API 불변 원칙과 긴장**

- 위치: `cycle-01-F Q-F7` + F §6.1 "`npx typia setup` 유지" (단어 하나 추가도 없다)
- 문제: F1 원칙("사용자 명령 불변")은 **기존 typia 사용자**에게는 지켜지지만, `ttsc` alias는 **새 명령 도입** — Microsoft `tsc` 상표 리스크 언급만 있고 결론 없음. 법무 리스크를 F 자율에 두는 것은 부적절.
- 제안: Cycle 3에서 공식 포기 결정. 이유: (a) `@typia/ttsc` scope 유지가 안전, (b) 사용자는 `npx typia setup` → `package.json.scripts.build=ttsc` 에서 이미 `ttsc`로 타이핑(bin 이름), (c) 추가 alias 는 marginal 이익. A 권고: Q-F7 항목을 "영구 거부"로 확정.

쟁점 6.3 — **§3.4 "TTSC_BINARY 환경변수 우선"이 BND-API(환경독립) 잠재 침범**

- 위치: `cycle-01-F §3.4` 결정 로직 1순위
- 문제: 환경변수 override는 dev/CI override로 명시. 그러나 문서화 부족 시 사용자가 `TTSC_BINARY=/old/ttsc`로 회귀 버전을 고정 → F5 "공개 가능한 실측"과 충돌(실측 환경 통제 불가). Edge runtime에서는 env var 자체 제약.
- 제안: §3.4 본문에 "production deployment 시 `TTSC_BINARY` 설정 시 stderr 경고 emit, CI에서는 감춤 plain" 의무화. Edge runtime 호환성은 이미 emit 산출물에만 적용되므로(C §1.2.3) launcher 바이너리에는 무관 — 명시 필요 (C Q-C2A-2 답변 겸).

쟁점 6.4 — **§9 세트 동시 릴리스 규약이 BND-PKG 범위를 초과**

- 위치: `cycle-01-F §9` 세트 동시 릴리스 + `Q-F5` 한 프로젝트 지연 정책
- 문제: typia+nestia+agentica+autobe 동시 launch는 **typia 저장소 내부 규약의 범위를 넘음**. 다른 3 저장소의 릴리스 일정은 typia의 경계 문서로 강제 불가. F §9.6 옵션 A(전체 연기) 채택 시 단일 프로젝트 issue가 타 3개 지연 — samchon 번아웃 리스크 직접 언급됨.
- 제안: F §9 본문에 "본 규약은 typia 측 release readiness만 관할, 타 3 저장소의 sync 는 ecosystem-release 저장소(Q-F11) 소관" 명시. samchon 개인 리스크 때문에 typia 릴리스가 블로킹되지 않도록 "typia 준비 완료 시 single release 가능" 단서 추가.

---

## 7. 초안 간 모순

교차 비교에서 드러난 문서 간 불일치. 심각도 높은 순.

### 7.1 [심각] Standard Schema emit 주체 (C vs D)

- C §7 (emitter 13 분야)는 `assert.go:63`이 inline으로 `~standard` 방출.
- D §5.3은 "Go가 `_createStandardSchema(__fn)` 한 줄 호출로 축소, TS functor 정본" 요구.
- 현 상태 두 구현 **실제 출력 상이**. BND-API-04 위반.
- **해결**: D의 제안 채택. C §7.2 (assert.go) 및 §3.4 "shim-agnostic" 규약에 "L1 facade helper import 허용" 예외 한 줄 추가. E는 두 버전 diff를 regression fixture로 고정.

### 7.2 [심각] "13" 용어 4중 충돌

- A BND-NS-01: "9 namespace (root + 8 sub)" + 3곳 wiki 인용
- D §1.2.4: "8 sub + 5 top-level 그룹 = 13 namespace"
- C §7: "13 emitter 분야 (programmer 파일 수)"
- F §1.1: "13 항목"은 릴리스 범위(사용자 명령/CI/wizard/etc) — 별 숫자
- **해결**: Sub-3에서 A가 단일 용어 표 발행. 3 개념 분리: **(1) 사용자 공개 namespace (9) / (2) emitter programmer 파일 (~13) / (3) 릴리스 항목 (~8)**. 문서 전수 치환.

### 7.3 [중] Go ↔ shim 의존 경계 (B vs C)

- B §1.3.3 "metadata/는 stdlib 외 import 없음. analyzer는 shim만".
- C §7.1.1 "emitter는 `*metadata.Schema`만 입력, shim 직접 의존 금지".
- 그러나 B Q-B2 / C Q-C2B-1~2에서 **driver가 `*shimchecker.Type`을 analyzer에 넘기는 지점**을 양측 모두 문제 인식 — 책임자 불명.
- **해결**: A가 BND-PKG-04에 "driver 경계 통과 시 shim type은 analyzer 진입 즉시 IR 핸들로 변환, 이후 engine 내부에 shim type 누출 금지"를 명기. `Walk(shimType)` API는 engine 표면의 유일 예외.

### 7.4 [중] utils 분류 (A vs B vs D)

- A §6 Q1: "런타임 vs 변환부 분류를 B가 확정하라"
- D §1.1: "utils 🟡 분할, 변환부 Go 이주"
- B 문서 전체: utils에 대한 언급 없음 (§1.2 범위 밖).
- **해결**: 공이 세 번 튕김. Sub-3에서 A 주재 결정. §4.3 (쟁점 4.3)과 동일 해결.

### 7.5 [경미] tsgo 저장소 형태 (C vs F)

- C §2.1: symlink + `third_party/` + `.gitignore` + bootstrap.sh.
- F §1.1 및 §5 build matrix: 7 platform cross-compile 시 bootstrap 전제 미검증.
- C 본인이 Q-C2F-1에서 F에게 cross-compile 정합 질문, F는 답변 없음 (F Q-F1에 bash PATH 언급만).
- **해결**: Sub-3 전 F가 bootstrap.sh + cross-compile 매트릭스 dry-run 1회 실행 증명. 실패 시 submodule 전환 (C §2.1 단서대로).

### 7.6 [경미] patch 상한 (C 3 vs 가정 미확정)

- C §4.1: "patches ≤ 3" 확정.
- C Q-C-self-1: sourcemap 재도입 시 threshold 재검토 제안.
- A BND-PKG-04는 patch 수를 고정 수치로 못박지 않음.
- **해결**: A가 BND-PKG-04에 "patches ≤ 3 (tsgonest parity)" 수치 명기. 초과 시 A와 합동 RFC 경로. C Q-C-self-1의 sourcemap 확장은 **patch 수 증가 금지 + rewrite 정교화**로만 해결 방향 고정.

### 7.7 [중] Go 버전 floor (B 1.26 vs F 미지정)

- B Q-B10: Go 1.26 floor, 1.27 전환 시 linkname 제약 검토.
- F §2 빌드 규약: Go 버전 floor 미기술.
- E §7 CI 규약: actions/setup-go 버전 미고정.
- **해결**: A가 BND-PKG 부록에 "Go 1.26 floor, tsgo/tsgolint와 동기". F는 actions/setup-go@v6 + `go-version-file: go.mod`로 단일 진실원. 1.27 전환은 별도 Cycle 결정.

### 7.8 [경미] 테스트 프레임워크 정합 (E DynamicExecutor vs F CI)

- E Q-E2: DynamicExecutor 유지 잠정.
- F §5 CI 워크플로: 테스트 프레임워크 불명시.
- D §8.9 다른 테스트 패키지(langchain/mcp)도 DynamicExecutor.
- **해결**: A 개입 불필요. E 결정 유지. 단 F CI의 `test.yml`에 "DynamicExecutor 기반 jobs: test-ttsc, test-interface, ..." 명시 요청.

### 7.9 [중] Edge runtime 호환 범위 정의 (C vs A)

- C §1.2.3: "emit 결과 edge runtime 호환" (launcher 바이너리 제외).
- A BND-API 원칙 4는 "edge runtime 호환" 을 포괄적으로 진술.
- C Q-C2A-2에서 A에게 "바이너리에도 적용?" 재질의.
- **해결**: A가 BND-API-05 신설. "edge runtime 호환 = emit 산출물에만 적용. `@typia/ttsc` 바이너리는 Node/빌드 타임 도구". D §1.2.5, F §2 에도 동일 참조 강제.

### 7.10 [심각] 경계 침범 감지 메커니즘 부재

- B/C/D 모두 원칙은 명기하나, **규약 위반을 CI가 자동 검출**할 수단 없음.
- E §2.1 Go 테이블 드리븐은 기능 테스트, 경계 lint 아님.
- F §5 CI는 workflow matrix 만 기술.
- **해결**: Sub-3에 "경계 lint 규약" 신설 제안. Go: `depguard` + custom checker. TS: `eslint-plugin-boundaries`. `@typia/interface`가 0-dep인지 `dependency-cruiser`로 정적 검증. 매 PR에 자동 vet.

---

## 8. Sub-3 개정 합의 요청

A가 Sub-3 (4-인 정련) 전 선행 발행·합의가 필요한 항목 8 건. 우선순위 순.

### Q1. [A 선작성] 공식 용어 표

- 산출: `conventions/00-vocabulary.md` 1 장. (1) 9 namespace 열거, (2) emitter programmer 이름 ~13, (3) 릴리스 항목 수 분리.
- 시한: Sub-3 시작 전.
- 참여: A 초안, D·C 검토, F 최종 서명.

### Q2. [A+D+B 합동] utils 분할 결정표

- 산출: utils 8 파일별 (런타임=TS / 변환부=Go / 양쪽=분할) 3-bucket 표.
- 시한: Sub-3 내부 결정 미팅 1회.
- 충돌 시: A 결정권 (BND-PKG-06 최종 형태).

### Q3. [A 권고] BND-API-04 3 단 동치성 스펙

- 산출: A-BND-API-04 본문에 레벨 0/1/2 추가 (값 / 메시지 / byte 동치).
- 시한: Sub-3 중간.
- E는 레벨별 fixture 조직, C는 구현.

### Q4. [D+C 합동] Standard Schema 단일 구현

- 산출: `assert.go:63` → `_createStandardSchema(__fn)` 호출로 축소 PR.
- 시한: Sub-3 이전 권장 (문서 정합성 회복).
- 실패 시: Cycle 4 통합 감수에서 BND-API-04 위반으로 escalate.

### Q5. [A 추가] Engine-shim 경계 예외 조항

- 산출: BND-PKG-04에 "driver → analyzer 경계에서만 shim type 통과 허용" 1 조 추가.
- 시한: Sub-3 초.
- B·C·E 검토.

### Q6. [A 확정] patches ≤ 3 수치 명기

- 산출: BND-PKG-04 본문에 수치 + tsgonest 근거 + RFC escalation 경로.
- 시한: Sub-3 초.

### Q7. [F 증명] cross-compile bootstrap dry-run

- 산출: 7 platform 중 최소 3 플랫폼(linux-x64, darwin-arm64, win32-x64)에서 bootstrap.sh → cross-build 성공 로그.
- 시한: Sub-3 중.
- 실패 시: submodule 방식 전환 검토 (C §2.1 단서).

### Q8. [A 단독 결정] Q-F7 `ttsc` alias 영구 거부

- 산출: A가 BND-PKG-07 주석으로 "top-level `ttsc` npm 이름 미추구, `@typia/ttsc` scope 고정" 명기.
- 시한: Sub-3 초.
- 이유: 법무 리스크 + marginal 이익.

---

### 우선순위 요약 (Sub-3 담당 4 인 대상 분배안)

| # | 담당 | 산출 형태 | 블로킹 대상 |
|---|------|----------|-------------|
| Q1 | A | `00-vocabulary.md` | D/C/F 전 문서 |
| Q2 | A+D+B | utils 분할표 | BND-PKG-06 |
| Q3 | A | BND-API-04 재집필 | E fixture 설계 |
| Q4 | C+D | PR 머지 | D §5.3 |
| Q5 | A | BND-PKG-04 수정 | B IR / C driver |
| Q6 | A | BND-PKG-04 수치 | C §4.1 |
| Q7 | F | CI 로그 증명 | C §2.1 |
| Q8 | A | BND-PKG-07 주석 | F Q-F7 |

Q1, Q5, Q6, Q8은 A 단독으로 Sub-3 개시 전 즉시 발행 가능. Q2, Q3, Q4, Q7은 타 역할 협력 필요.

---

### Sub-3 진입 조건 체크리스트 (A 자체용)

Sub-3(4-인 정련) 진입 가능 판단 기준:

- [ ] Q1 `00-vocabulary.md` 초안 발행 완료 → D/C/F 의 "13" 용어 충돌 §7.2 해소
- [ ] Q5 BND-PKG-04 shim 경계 예외 조항 추가 → §7.3 해소
- [ ] Q6 BND-PKG-04 patches ≤ 3 수치 명기 → §7.6 해소
- [ ] Q8 BND-PKG-07 주석 (ttsc alias 거부) → F Q-F7 종결
- [ ] Q4 Standard Schema 단일 구현 **구현 PR** 머지 → §7.1 심각도 해소
- [ ] Q2 utils 분할표 회의 (A+B+D) → §7.4 해소
- [ ] Q7 F 가 cross-compile dry-run 3 플랫폼 증명 → §7.5 해소
- [ ] Q3 BND-API-04 3 단 동치성 스펙 → 쟁점 5.1 해소

위 8 항목 중 최소 5 개 (Q1/Q5/Q6/Q8 + 1개) 클리어 시 Sub-3 진입 가능. Q4는 코드 작업이라 문서 작업과 병렬 진행 가능.

### 경계 무결성 리스크 매트릭스

| 리스크 | 현 상태 | Cycle 3 목표 | Sub-3 책임자 |
|--------|---------|-------------|-------------|
| Standard Schema TS↔Go 불일치 (BND-API-04 위반) | 실재 | 단일 구현 | C+D |
| 13 namespace 용어 3중 혼란 | 문서상 | 단일 표 | A |
| Engine-shim 경계 누수 (Type.Id 의존) | 잠재 | 규약 추가 | A+B |
| utils 분할 미결 | 미결 | 8 파일 분류표 | A+B+D |
| patch 상한 수치 불확정 | 잠재 | BND-PKG-04 수치 | A |
| Edge runtime 적용 범위 모호 | 잠재 | BND-API-05 신설 | A |
| 경계 위반 CI 감지 부재 | 실재 | lint 규약 신설 | E+F (A 설계) |
| set release 외부 의존 | 잠재 | 문서상 분리 | F |

**총평**: 심각 2건, 중 4건, 경미 2건. 모두 Sub-3 또는 Cycle 3 내 해소 가능 범위. Mega-1 경계 토폴로지의 구조적 결함(Layer 붕괴, 6 계층 중 어느 레이어 잘못 배치 등)은 **없음**.


