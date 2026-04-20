# 17. Phase 0 Kickoff — 실행 가이드 (v2, 6-week spike)

> v1 (4주 스파이크)의 20개 결함을 Audit 9 cycle 3 critical review로 도출 후 전면 재작성. 관련: [09-audit/09-cycle9-phase0-critical-review.md](../09-audit/09-cycle9-phase0-critical-review.md) · [16-package-port-boundary.md](16-package-port-boundary.md).
>
> **핵심 변화 v1 → v2**:
> - 4주 → **6주**로 확장 (Week 0 사전 준비 + 5주 실행)
> - 자기 빌드(dogfooding) / pnpm workspace / sourcemap / Setup wizard v2 / Week-level kill gate 등 추가
> - IPC 용어 정의 분리 (ttsc spawn latency vs tsgo 공식 IPC)
> - 공식 입장문 Week 4 발행 (결과 동반)

## 재실측 요약 (Cycle 2)

| 항목 | v2 실측 |
|---|---|
| typia TS LOC | **64,678** (9 패키지 전체). 단일 진실원은 [13-appendix-facts.md](13-appendix-facts.md) |
| Tag 수 | 정확 **21** |
| FUNCTORS entry | **147** |
| `ts.factory.*` 호출 | **2,111 / 106 파일**, 전부 public API |
| `ts-expose-internals` 실제 사용 | **0** |
| Standard Schema | **부분 구현됨** (`_createStandardSchema.ts` 134 LOC, `createValidate` / `createValidateEquals`) |
| tsgonest patches | **3개** (Hybrid 모델 D 실증) |
| tsgo GA | 공식 미정, 2026 H2~2027 H1 추정 |

## IPC 용어 정의 (v2 정리)

이전 문서에 "IPC"가 혼용됨. v2 통합 모델에서 두 의미로 분리:
- **A. ttsc spawn latency**: 사용자 `ttsc --build` 실행 시 Node launcher → Go binary 1회 spawn. **Phase 0 측정 대상**
- **B. tsgo 공식 IPC (PR #711, libsyncrpc)**: Microsoft가 2027+에 제공 예정 Node↔Go stdio IPC. **ttsc 내부에서 쓰지 않음** — shim (go:linkname) 기반
- 04/05/06/08 문서의 "IPC" 언급은 대부분 **A** 또는 **B** 중 어느 것인지 명시 필요 (향후 정비)

## 6-week Phase 0 구조

### Week 0 — 사전 준비 (1주, 본격 착수 전)

**목적**: 블로커 제거, 법무·상표 해결, pnpm workspace 설계

1. **이름 가용성·상표 검증**
   - GitHub `ttsc` 조직/저장소 존재 확인
   - npm `ttsc` / `@typia/ttsc` 가용성 확인 (samchon 보유 네임스페이스 안전)
   - Microsoft `tsc`와 상표 리스크 간단 검토
   - 대안 이름 후보: `tgo`, `typigo`, `tso`, `typia-build` — 백업
2. **외부 참조 LICENSE 호환성**
   - typescript-go: Apache 2.0 ✓
   - tsgolint (MIT) — gen_shims 차용 시 attribution 명시
   - tsgonest (MIT) — emitter/metadata 구조 참고 (copy 금지, 구조만)
   - effect-tsgo LICENSE 확인 (파일 직접 열어서)
   - **산출**: `packages/ttsc/THIRD-PARTY-LICENSES.md` 초안
3. **pnpm workspace + Go binary 통합 설계 문서화**
   - `pnpm-workspace.yaml`에 `packages/ttsc` 추가 (TS 진입 패키지만)
   - `optionalDependencies` vs `postinstall` + platform 감지 비교
   - 결정: **optionalDependencies (tsgonest/esbuild 패턴)**. `@typia/ttsc-${platform}-${arch}` 7개 별도 패키지
   - 산출: "workspace integration.md" 초안
4. **Go 조력자 JD + 채용 공고 작성** (게시는 Week 1)

**Week 0 산출**: 이름/라이선스/workspace 결정, JD

---

### Week 1 — 저장소 스캐폴딩 + 공고 + LICENSE

1. `packages/ttsc/` 신설
   - `go.mod` (Go 1.26), `go.work`
   - `cmd/ttsc/main.go` stub
   - `internal/driver/` + `internal/engine/` 빈 트리 (Go 측 구조 참조)
   - `bin/ttsc.js` 템플릿 (아래 §설치 UX)
   - `package.json` (main/bin/optionalDependencies 7종)
   - `THIRD-PARTY-LICENSES.md`
2. 루트 `pnpm-workspace.yaml` / `tsconfig.base.json` / CI 구성 업데이트
   - GitHub Actions matrix: `cross-compile` 잡 (7 플랫폼 빌드 + 아티팩트)
   - 초기엔 `workflow_dispatch`만 (자동 트리거는 Phase 1)
3. **Go 조력자 공고 게시** (OpenCollective, Reddit r/golang, Discord typia, Twitter/X)
4. **공식 입장문 초안** (Issue #1534 답변 준비, **발행은 Week 4**)
   - Week 1~3 동안 내부 검토 + 실측 결과 기다림

**Week 1 산출**: 저장소 스캐폴딩 + 공고 + 입장문 draft

**Abort gate**: 없음 (부하 낮음)

---

### Week 2 — typescript-go submodule + gen_shims

1. `git submodule add https://github.com/microsoft/typescript-go`
   - Pinning 정책: tsgonest와 동일 commit부터 (호환성 보장), 월단위 bump
2. `go.mod` replace 블록 작성 — tsgonest의 13 shim 복제
3. `tools/gen_shims/main.go` 이식 + typia 특화 확장
   - tsgolint gen_shims 코드 참조 (MIT attribution)
   - typia 필요 API 목록화 (다음 §shim target API)
4. MetadataSchema Go struct 초안 (`internal/engine/metadata/metadata.go`)
   - TS 원본과 1:1 대응 구조

**Week 2 산출**: shim 자동 생성된 파일 트리, MetadataSchema Go struct

**Abort gate (Week 2 종료 시)**:
- shim 생성 수 < 30 → typescript-go internal 접근 심각 차단. **early abort**, effect-tsgo patch 모델 단독 검증으로 전환
- gen_shims가 10회 이상 수동 수정 필요 → 자동화 포기, 수동 shim 작성 모드

---

### Week 3 — 경로 A/B 프로토타입 병행

**목표**: `typia.is<string>(input)` end-to-end 변환 양쪽 모델로

1. **경로 A (transform chain hook)**
   - patch 1~3개로 emitter에 hook 주입
   - shim으로 타입 정보 접근
   - Go engine.codegen.EmitIs 호출
   - 결과 AST를 emit 체인에 주입
2. **경로 B (emit-time rewrite, tsgonest 모델)**
   - `WriteFile` 콜백 (patch 0~1개)
   - 이미 emit된 .js를 문자열로 수정
   - marker (`typia.is<string>()`) 치환
3. 양쪽 모두 smoke test:
   - `typia.is<string>(input)` (primitive)
   - `typia.is<{a: number}>(input)` (object)
   - `typia.is<string[]>(input)` (array)

**Week 3 산출**: 두 경로 작동 여부 + 각 patch 수 + 복잡도 체감

**Abort gate (Week 3 종료 시)**:
- 경로 A, B 모두 실패 → typescript-go 팀에 RFC PR 제출 (Microsoft 협상), Phase 0 2주 추가
- 경로 A, B 중 하나 성공 → Week 4 진행

---

### Week 4 — 측정·sourcemap·setup v2 + 공식 입장문

1. **속도 측정**
   - 동일 fixture (typia test의 `tests/template` 10개 구조체)
   - tsc + ts-patch vs ttsc (경로 A), tsc + ts-patch vs ttsc (경로 B)
   - 목표: **tsc+ts-patch 대비 ≥ 2×** (tsgo 자체가 10× 이므로 ttsc는 tsc+ts-patch 대비 적어도 3~5× 기대)
2. **sourcemap 생성 검증**
   - 경로 A: AST position 보존
   - 경로 B: diff-match-patch 스타일 역매핑 (unplugin-typia 참고)
   - 목표: VSCode debugger에서 breakpoint 동작
3. **Setup wizard v2 스펙**
   - `npx typia setup --runtime=ttsc`: ts-patch 제거 + @typia/ttsc 설치 + prepare 스크립트 제거 + tsconfig 유지
   - `--runtime=legacy`: 기존 v12 유지
   - tsconfig plugins 스키마 호환 확인
4. **공식 입장문 발행** (Issue #1534)
   - Week 0~3 실측 결과 포함 (경로 A/B 비교, 속도)
   - 정직한 불확실성 명시 (Go 1.27 linkname, Microsoft handshake 등)

**Week 4 산출**: 속도·sourcemap 실측, setup v2 draft, 공식 입장문 발행

**Abort gate (Week 4 종료 시)**:
- 속도가 tsc+ts-patch 대비 < 2× → 성능 목표 재검토
- sourcemap 작동 불가 → 경로 A/B 중 sourcemap 친화 경로 강제 선택

---

### Week 5 — Phase 0 리포트 + Phase 1 설계

1. **Phase 0 종합 리포트**
   - 측정 결과 공개 (shim 수, patch 수, 속도, sourcemap, LICENSE, 비용)
   - 경로 A/B 최종 선택 근거
   - Go 조력자 접수 현황
2. **Go / No-Go 최종 결정**
   - Success: Phase 1 walking skeleton 설계 → 08-timeline 업데이트
   - Partial: 범위 축소 Phase 1 (validators only)
   - Fail: Microsoft 협상 모드 / effect-tsgo patch 모델 단독 검증
3. **Phase 1 상세 설계**
   - 08-timeline M1~M6 재작성 (실측 기반)
   - `typia` 자기 빌드 정책 확정 (§자기 빌드 전략)
4. Edge runtime 홍보 블로그 포스트 (차별점 마케팅, Week 1~5 병행)

**Week 5 산출**: Phase 0 리포트 공개 + Phase 1 상세 계획 + 블로그

---

## 자기 빌드 전략 (typia repo 자체, v1 공백 해결)

### 원칙
- typia 자체는 **v13 stable (2028 Q2) 까지 ts-patch 유지**
- Phase 2~4 동안 internal `packages/ttsc/` 개발은 ts-patch 없이 진행 가능 (Go 코드)
- 단 `packages/ttsc/testdata/` 안에 typia 테스트 입력 TS 파일은 **ts-patch로 빌드** (결과 비교용)

### Phase 1~2 일정 (typia repo 자체)
- Phase 1 (2026 Q3~Q4): typia v12 유지, ttsc는 별도 workspace
- Phase 2 (2027 Q1~Q2): typia v13 preview — ttsc로 typia validators 빌드 가능 (opt-in)
- Phase 3~4: ttsc 성숙 시 typia 자체도 ttsc로 전환 (dogfooding)
- Phase 6 (2029 Q2): typia v14 — 100% ttsc 빌드, ts-patch 제거

→ [16-package-port-boundary.md](16-package-port-boundary.md) 및 [08-implementation-timeline.md](08-implementation-timeline.md)과 정합

---

## 설치 UX 상세

### 사용자 관점
```bash
# v12 현재
npm i -D typescript typia ts-patch
# package.json scripts.prepare: "ts-patch install"
# tsconfig.json plugins: [{ transform: "typia/lib/transform" }]

# v13+ (목표)
npm i -D typia
npx typia setup --runtime=ttsc
# ↓ 자동으로 수행:
#   - ts-patch 제거 (있으면)
#   - prepare 스크립트 제거
#   - @typia/ttsc optionalDependencies 설치 확인
#   - tsconfig.json plugins 검증 (스키마 호환)
```

### `@typia/ttsc/bin/ttsc.js` 템플릿
```js
#!/usr/bin/env node
const os = require("os");
const { spawnSync } = require("child_process");
const path = require("path");

const platform = process.platform; // darwin / linux / win32
const arch = process.arch;         // arm64 / x64 / arm

const pkgName = `@typia/ttsc-${platform}-${arch}`;
try {
  const binPath = require.resolve(`${pkgName}/bin/ttsc${platform === "win32" ? ".exe" : ""}`);
  const result = spawnSync(binPath, process.argv.slice(2), { stdio: "inherit" });
  process.exit(result.status ?? 1);
} catch (err) {
  console.error(`
ttsc: platform-specific binary not found (${pkgName}).
This usually means optionalDependencies failed to install.

Try:
  npm install --include=optional ${pkgName}
  # or
  pnpm install --shamefully-hoist

Supported platforms: darwin-{arm64,x64}, linux-{arm64,arm,x64}, win32-{arm64,x64}.
If yours is not supported, please open an issue.
`);
  process.exit(1);
}
```

### 플랫폼 호환
- **Linux glibc vs musl**: 초기 glibc만 (Alpine은 Docker 이미지 안내), Phase 1~2에 musl 추가
- **Windows**: `.exe` + EV code signing (연 $300~500) — AutoBE 수익으로 조달
- **macOS**: Apple Developer ID notarization (연 $99)
- **Raspberry Pi**: linux-arm (32-bit) 포함

---

## shim 타겟 API 목록 (Phase 0 gen_shims 확장)

typia가 실제 쓰는 TypeScript Compiler API 전수 (grep 실측 필요, 초기 목록):

### TypeChecker (예상 30개)
- `getTypeAtLocation(node)`
- `getTypeFromTypeNode(node)`
- `getPropertiesOfType(type)` / `getAugmentedPropertiesOfType`
- `getIndexInfosOfType(type)`
- `getApparentType(type)` / `getApparentProperties`
- `getResolvedSignature(expression)`
- `getTypeOfSymbol(symbol)`
- `typeToString(type, enclosing?, flags?)`
- `isTypeParameter(type)` (Type 인스턴스 메소드)
- `getBaseTypes(type)`
- `getNonNullableType(type)` / `getNonOptionalType`
- `getTypeArguments(reference)`
- `getIntersectionType(types)` / `getUnionType`
- `getDeclaredTypeOfSymbol`
- `getAliasedSymbol` / `getImmediateAliasedSymbol`

### Node helpers (예상 20개)
- `ts.isCallExpression`, `ts.isPropertyAccessExpression`
- `ts.getModifiers`
- Node 필드 접근 (parent/flags/kind)
- `getFullText`, `getSourceFile`
- `getLineAndCharacterOfPosition`

### Factory (Go 측 재구현, shim 없음)
- 2,111개 `ts.factory.*` 호출은 Go 측에서 **문자열 emitter**로 치환 (tsgonest 패턴)

### gen_shims 측정 기대치
- 총 shim 함수/wrapper: **70~120** (tsgolint 910보다 적음 — lint는 AST visitor 많음)
- 수동 작성 shim: 10 미만

→ Week 2 종료 시 실측 후 확정

---

## 기술 결정 포인트 (Phase 0 결정, v2 개정)

### D1. 경로 A (transform chain hook) vs B (emit-time rewrite)
| 차원 | A | B |
|---|---|---|
| Patch 수 | 1~3 | 0~1 |
| 타입 정보 유지 | AST 레벨 | 문자열 레벨 |
| sourcemap | AST 보존 → 간단 | 수동 diff 매핑 → 복잡 |
| 복잡한 emit (LLM application) | ✓ | 확인 필요 |
| tsgonest 실증 | 없음 | ✓ |

→ Week 5 리포트에서 결정. 두 경로 모두 Week 3에서 프로토타입.

### D2. Go AST 직조 vs 문자열 emitter
- 문자열 emitter (tsgonest) **기본 선택**
- AST 직조는 복잡 경우 (union discriminator 등) fallback

### D3. shim 자동 생성 범위
- gen_shims 커버 80%+ 목표, 수동 mirror struct 10 미만

### D4. 공식 IPC API (PR #711) 활용 여부
- Phase 0~4: 쓰지 않음 (shim이 강력함)
- Phase 5+: 공식 API stable 되면 facade로 흡수 (Microsoft 협상용)

### **D5. sourcemap 생성 전략** (v2 신규)
- 경로 A: TS AST position 보존 + printer sourcemap
- 경로 B: 삽입 위치 기반 수동 매핑 (diff-match-patch-es 참고)
- 실패 시 `--source-map=false` fallback 허용, 주석 경고

### **D6. 자기 빌드 (dogfooding) 시점** (v2 신규)
- Phase 2까지 ts-patch 유지
- Phase 3부터 opt-in dogfooding
- Phase 6에 완전 전환

---

## 성공·실패 기준 (Week 5 종료 시 측정 가능)

### Success (Phase 1 착수)
- [ ] `typia.is<T>(input)` 최소 5 케이스 end-to-end 변환 통과
  - primitive, object, array, union (2~3 멤버), tuple
- [ ] shim으로 typia 필요 TypeChecker API 80%+ 커버 (사전 목록화된 ~30개 기준)
- [ ] patch 수 ≤ 5 (경로 A) 또는 ≤ 1 (경로 B)
- [ ] 빌드 속도 tsc+ts-patch 대비 **≥ 2×**
- [ ] sourcemap 생성 성공 (VSCode breakpoint 1회 동작 확인)
- [ ] tsgo submodule bump 1회 수동 성공
- [ ] Go 조력자 지원 ≥ 3건 (면접까지 가는 수)

### Partial (Phase 1 범위 축소)
- [ ] Success 항목 중 2~3개 미달
- [ ] → Phase 1 validators만 집중 (6개월)

### Fail (재설계)
- [ ] Success 항목 중 4+ 미달
- [ ] → typescript-go 팀과 RFC, effect-tsgo patch 단독 모델 검증

---

## 병행 작업 (Week 1~5 내내)

- Standard Schema 확장 — createAssert ~standard 래퍼 (createIs는 validate 래핑 필요 → 재평가)
- Edge runtime 홍보 블로그 포스트 (Week 5까지 완성)
- AI-native DX 템플릿 (llms.txt, Cursor rules, MCP server) — samchon 외 contributor 가능
- AutoBE/nestia 저자와 세트 전환 sync (monthly 미팅)

---

## Phase 0 예산 재조정

### 인력
- **samchon**: 주 25h × 6주 = **150시간**
- **contributor(문서/테스트)**: Phase 0 후반 opt-in

### 재정
- tsgo submodule / shim 개발: $0 (OSS)
- GitHub Actions cross-compile: ~$50 (minutes 추가분)
- Apple Developer / Windows signing: Phase 1 이후

### 리스크 예산
- Week 0~1 slip → Week 5 종료 시점 +1주 허용 (총 7주)
- Go 조력자 미확보 → Phase 1 범위 축소 (validators만)

---

## 관련 문서
- [05-recommended-path.md](05-recommended-path.md) — 상위 경로 (v2 통합)
- [08-implementation-timeline.md](08-implementation-timeline.md) — Phase 1~6 일정 (Phase 0 이후 재작성)
- [09-risk-register.md](09-risk-register.md) — 15 리스크
- [10-success-criteria.md](10-success-criteria.md) — 연간 KPI
- [11-communication-plan.md](11-communication-plan.md) — 공식 입장문 템플릿 A
- [16-package-port-boundary.md](16-package-port-boundary.md) — 현행 9개 패키지 + 신규 전환 드라이버 Go/TS
- [../09-audit/09-cycle9-phase0-critical-review.md](../09-audit/09-cycle9-phase0-critical-review.md) — 이 v2 개정 근거

## 한 줄

> **6주 안에 "Hello ttsc" + 양쪽 경로 프로토타입 + 측정 + Setup v2 + 공식 입장문 발행. Week 2/3/4 각각 abort gate로 보호. Week 5 리포트 후 Phase 1 범위 확정.**
