# Audit Report 1 — Philosophy / Architecture / Packages 감수

> 감수자: 독립 감수 에이전트
> 대상: `wiki/01-philosophy/`, `wiki/02-architecture/`, `wiki/03-packages/`
> 원칙: 저자(AI) 옹호 금지, 공격적 비판

## 적발된 오점 10건

### F1. "0-dep" 엄밀 거짓
- **주장**: `@typia/interface`: 0-dependency 순수 타입 (`03-packages/01-interface.md`)
- **실측**: `devDependencies`에 `rimraf`, `typescript` 존재
- **판정**: runtime 0-dep이 맞으나, "0-dep"이라는 단어는 **엄밀히 거짓**
- **조치**: "0-runtime-dependency" 또는 "production-dep 0"으로 표기 통일

### F2. 패키지 수 표기 내부 모순
- **주장 A**: `02-architecture/03-package-graph.md` — "9개 패키지"
- **주장 B**: `03-packages/00-README.md` — "(7 파일)"
- **실측**: 9개 맞으나 문서마다 묶음·분리 기준이 다름 (6 코어 + 3 LLM 어댑터 vs 9 통합)
- **조치**: 모든 문서에 "9개 npm 패키지 (6 core + 3 LLM 어댑터)" 동일 표기

### F3. MetadataSchema 라인 범위 의미 오류
- **주장**: `MetadataSchema.ts:49-135` (계약 표면 핵심)
- **실측**: 해당 파일 **전체 701 라인**. 49-135는 constructor+static 헬퍼, 실제 프로퍼티 선언은 50-69줄
- **조치**: "프로퍼티 선언 `:50-69`, 전체 클래스 `:49-701`"로 세분화

### F4. iterate_metadata.ts 인용 문맥 미흡
- **주장**: `iterate_metadata.ts:22-31` — 제너릭 미지정 에러 처리
- **실측**: 실제 54 LOC 파일, 21-32이 generic 검사
- **조치**: 경미. 원문 21-32로 정정

### F5. `create_guard_call` 함수 위치 모호
- **주장**: `AssertProgrammer.ts:56-84`의 `create_guard_call`
- **실측**: 56-84는 호출 지점, 함수 정의는 파일 뒷부분
- **조치**: "호출 지점 56-84, 정의 ~100+" 명시

### F6. **"Pure TypeScript 4중 의미"는 AI 재구성**
- **주장**: `02-pure-typescript.md`의 "4중 명제 — 표현/시점/영역/IR"
- **실측**: `website/.../pure.mdx` 원문은 "한 번만 쓴다" 한 문장 강조. 4중 분해는 **wiki 저자 해석**
- **판정**: 독해로서는 타당, 원문 인용은 아님
- **조치**: "이 wiki가 typia 사상을 4가지 측면으로 해석/재구성한 것" 명시

### F7. **P1~P8 원칙은 후견지명(post-hoc rationalization)**
- **주장**: `03-design-principles.md`의 8 원칙이 "코드베이스 어디서나 일관되게 지켜지는 패턴"
- **실측**: 8 원칙을 samchon이 명시한 근거 없음. AI가 코드 관찰 후 귀납한 것
- **판정**: 공식 원칙처럼 서술한 것은 **사후 정당화**
- **조치**: 서문에 "이 wiki의 관찰적 귀납이며 typia 공식 원칙은 아님" 명시

### F8. CheckerProgrammer 1614 LOC ✓
- **주장**: 1614 LOC
- **실측**: 정확히 1614
- **판정**: **정확**

### F9. 패키지 의존 그래프의 화살표
- **주장**: interface ← utils ← core ← transform ← typia ...
- **실측**: 대체로 맞으나 utils가 mcp/langchain/vercel에 peer dep로 인입되는 관계가 그림에서 명시 약함
- **조치**: 의존 그래프 세밀화

### F10. 내부 용어 불일치
- **주장 A**: "9 원칙" (어디선가), "8 원칙" (design-principles)
- **실측**: 현재 8 원칙으로 통일되었으나 과거 문서에 9 원칙 기록 잔존 가능성
- **조치**: 전수 조사 후 통일

## 총평

| 범주 | 적발 | 수준 |
|---|---|---|
| 사실 오류 | F1, F3, F4, F5 | 경미~중 |
| AI 재구성 과장 | F6, F7 | 중요 |
| 내부 모순 | F2, F10 | 중요 |
| 검증 정확 | F8 | — |

**핵심 비판**: Wiki는 논리적 일관성은 높으나, **AI 재구성을 원저자 사상인 것처럼 서술한 대목이 섞여있다**. "4중 의미"와 "P1~P8"은 공격받을 수 있는 약한 지점.

**무결한 master plan에 반영할 교훈**:
1. 인용은 직접 인용과 재구성을 구분 (`"...": 원문` vs `(본 문서의 해석)`)
2. 원칙·규칙은 공식 vs 귀납을 명시
3. 모든 숫자에 출처(파일/명령어) 표시
4. 내부 모순은 sweep 후 통일
