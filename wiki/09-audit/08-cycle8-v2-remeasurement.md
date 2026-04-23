# Audit 8 — 재실측 (2026-04-18)

> 목적: wiki v4 작성 이후 line-by-line 재정독 + 소스 코드 실측 + 외부 저장소 재조사로 확인된 오차·누락 사실 기록.

## 방법론

1. wiki 104 파일 전수 정독 (7,215 lines)
2. typia 9 패키지 전체 소스 구조 파악 (src 디렉토리 전체)
3. 핵심 transform/core 파일 line-by-line 정독
4. 외부 저장소 재확인
5. 웹 리서치로 tsgo / Issue #516 / #1534 최신성 확인

## 발견 1: typia 전체 LOC 재실측

| 패키지 | 기존 (v4) | v2 실측 | 차이 |
|---|---|---|---|
| interface | 8,508 | 8,508 | ✓ |
| core | 30,307 | 30,307 | ✓ |
| transform | 4,306 | 4,306 | ✓ |
| typia | 7,544 | 7,544 | ✓ |
| **utils** | **(미측정)** | **11,715** | **신규** |
| **unplugin** | **(미측정)** | **1,359** | **신규** |
| **mcp** | **(미측정)** | **397** | **신규** |
| **langchain** | **(미측정)** | **213** | **신규** |
| **vercel** | **(미측정)** | **329** | **신규** |
| **전체** | 50,665 (4 패키지) | **64,678 (9 패키지)** | **+14,013** |

**영향**:
- 16-package-port-boundary.md 표의 "현재 ~50,665" 부분 수정 필요
- typia-go Go LOC 추정 (100~150K)이 4 패키지 기준 → 9 패키지 기준 재검토 필요
- 단 utils runtime 부분은 TS 유지이므로 Go 포팅 대상은 여전히 core+transform+utils 변환부에 한정

## 발견 2: Standard Schema 부분 구현되어 있음

**wiki 주장** (06/02 W2, 06/03 A1):
> "typia는 아직 Standard Schema 어댑터 미공식 — 1주 작업으로 해결 가능"

**실측**:
- `packages/typia/src/internal/_createStandardSchema.ts` (134 LOC) 존재
- `@standard-schema/spec` 실제 dependency
- `typia.createValidate<T>()` / `typia.createValidateEquals<T>()` 이미 `~standard` 프로퍼티 자동 주입
- `packages/transform/src/CallExpressionTransformer.ts`에서 `standardSchema: true` 옵션 전달
- `packages/core/src/programmers/ValidateProgrammer.ts`에 `IConfig.standardSchema?: boolean` 처리 로직
- path 파서 (`typiaPathToStandardSchemaPath`) — `$input.user.address[0].zipCode` → `[{key:"user"},{key:"address"},{key:0},{key:"zipCode"}]`

**영향**:
- 현재 작업은 "미구현 → 구현"이 아니라 "구현 → 문서화·확장·마케팅"
- 남은 과제: (a) `createIs` / `createAssert`로 확장, (b) MCP/AI SDK 통합 예제, (c) 공식 블로그/문서

## 발견 3: tsgo GA 공식 날짜 미확정

**wiki 주장** (05/03, 08/02):
> "TypeScript 7.0 (Corsa) GA 2026 mid/late"

**실측 (웹 재확인 2026-04)**:
- Microsoft DevBlog Dec 2025 "Progress on TypeScript 7": **GA 날짜 명시 없음**
- 제3자 기사: "2026 mid/late" / "Jan 15, 2026" 등 추정 혼재
- 공식적으로는 **"API not ready"** 명시

**영향**:
- "2026 mid/late"는 추정. plan은 **2026 H2 ~ 2027 H1** 범위로 표기하는 것이 안전
- wiki 05/03 + 08/02 경고 추가 완료

## 발견 4: tsgonest patches = 정확히 3개

**wiki 주장** (08/03):
> "tsgonest — 최소 patches"

**실측**:
- `patches/0001-fix-early-return-from-invalid-tsconfig.patch`
- `patches/0002-fix-collections-ordered-map-public-json.patch`
- `patches/0003-perf-cache-readfile-in-cachedvfs.patch`
- 모두 minor (tsconfig 에러 처리, ordered map JSON, VFS 캐시 perf)
- **모델 D (Hybrid)의 살아있는 실증**

**영향**:
- 08/03-technical-foundations에 "3개 실측" 반영 완료
- ttsc Stage 0 목표: tsgonest처럼 **3개 이하 patches** 달성 가능성 높음

## 발견 5: FUNCTORS 147 entries 확정

**CallExpressionTransformer.ts 전수**:
- module: 25 entries (assert, is, validate, equals, createX, random)
- functional: 18 entries (assert/is/validate × function/parameters/return × equals)
- http: 22 entries (formData/headers/parameter/query × is/assert/validate + createX)
- llm: 10 entries (controller, application, applicationOfValidate, structuredOutput, parameters, schema, parse, createParse, coerce, createCoerce)
- json: 18 entries (schema, schemas, application, parse × is/assert/validate, stringify × is/assert/validate + createX)
- protobuf: 17 entries (message, encode/decode × is/assert/validate + createX)
- reflect: 4 entries (metadata, name, schema, schemas)
- misc: 17 entries (literals, clone/prune × is/assert/validate + createX)
- notations: 16 entries (camel/pascal/snake × is/assert/validate + createX)

**영향**:
- ttsc/typia-go가 dispatch 테이블에서 재현해야 할 엔트리 = **147**
- 각 엔트리는 정해진 transformer → Programmer 매핑
- 13-appendix-facts.md에 추가 완료

## 발견 6: ts-expose-internals 실제 사용 0

**wiki 주장** (01/03 P3, 03/03, 06/01 S5):
> "ts-expose-internals 사용 거의 없음"

**실측 (grep 전수)**:
- 5개 패키지 `package.json` devDep 선언: `@types/ts-expose-internals`
- `packages/unplugin/tsconfig.json`에 types 지정
- **실제 TypeScript 코드에서 import 0번** — type alias도 아니고 실제 사용 없음
- 2,111개의 `ts.factory.*` / `ts.*` 호출은 전부 public API
- 106 파일에 분포

**영향**:
- "거의 없음" → **"사용 0, devDep 선언만"**이 정확
- tsgo 대응 시 호환 표면이 매우 작음 — 호재

## 발견 7: Tag 정확히 21개

- 20 tag types + TagBase (base interface)
- `packages/interface/src/tags/index.ts`가 21개 re-export
- Tag 모듈 총 src LOC: 1,112 (TagBase 131 / Format 76 / Type 70 / Pattern 59 / 기타 45~49)

## 종합: 개정 반영 완료 목록

- [x] `08-tsgo-master-plan/13-appendix-facts.md` — 9 패키지 LOC, Tag 정확수, FUNCTORS, ts-expose-internals 사용 0, Standard Schema 부분 구현
- [x] `08-tsgo-master-plan/02-threat-landscape.md` — tsgo GA 날짜 공식 미정
- [x] `08-tsgo-master-plan/03-technical-foundations.md` — tsgonest patches 3개 실측
- [x] `05-research/03-tsgo-status.md` — GA 날짜 정정
- [x] `06-feedback/02-weaknesses.md` W2 — Standard Schema 부분 구현 경고
- [x] `06-feedback/03-improvement-proposals.md` A1 — Standard Schema 문서화·확장으로 성격 변경
- [x] `08-tsgo-master-plan/05-stage0-kickoff.md` 신설 — 첫 4주 실행 가이드
- [x] `00-INDEX.md` v5 — cycle 2 변경사항 노출

## 남은 검증 과제 (다음 사이클)

1. `@nestia/core` 의존 파일의 정확한 `@typia/core` import 경로 list화
2. `@typia/core` 내 각 Programmer의 LOC 실측 표
3. tsgonest `internal/codegen/` 각 파일 vs typia 대응 파일 1:1 매핑표
4. effect-tsgo 23 patches 각각의 내용 요약 (어떤 hook을 걸었는지)
5. tsgolint gen_shims의 실제 생성 규칙 파악 (Stage 0 직전 필수)
6. PR #711의 2026-04 최신 커밋 노출 API 범위 재조사
7. Issue #516 전체 comment 추이 (공식 정책 힌트가 숨어있을 가능성)
8. Go 1.27 release notes preview (linkname 정책 확인)
