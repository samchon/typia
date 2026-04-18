# 01. Preface — 사상·전제·범위

## 이 계획이 지키는 것 (불변)

### 1. 사용자 API
```ts
typia.is<Member>(input);
typia.json.stringify<Member>(member);
typia.llm.application<MyClass>();
```
위 세 줄은 2026년에도, 2030년에도 동일하게 작동해야 한다. 어떤 옵션을 선택해도 이 약속은 파기되지 않는다.

### 2. tsconfig.json 스키마
```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]
  }
}
```
이 5줄도 변경 없이 유지. (신규 사용자는 `npx typia setup`이 자동 작성.)

### 3. "타입에서 모든 산출물이 도출된다"는 명제
한 TypeScript type에서 validate / stringify / schema / LLM function / protobuf / random이 동시에 나오는 성질. 구현 언어가 TS든 Go든 이 성질은 동일해야 한다.

## 이 계획이 흔드는 것 (변경 가능)

### 1. 빌드 명령어 (최소 변경)
`tsc` → `ttsc`. `typia setup`이 package.json의 scripts를 자동 수정한다. 사용자 타이핑 변경은 **한 번**.

### 2. 내부 구현 언어
현재: TypeScript **~50,665 LOC** (core 30,307 + transform 4,306 + interface 8,508 + typia 7,544) + Node 런타임.
- Go 포팅 대상: `@typia/core` + `@typia/transform` = **34,613 TS LOC**
- TS 유지: `@typia/interface` + `@typia/typia` 얇은 facade + runtime helpers = ~20K
미래: Go 100~150K (ttsc 내에 engine 통합) + TS ~20K.

### 3. 의존 도구
- ts-patch (현재) → ttsc Go 바이너리 (2027~)
- ttsc 하나에 engine 내장 — 별도 typia-go 프로젝트 없음
- 각 전환은 사용자에게 투명

## 이 계획이 답하지 않는 것

### 범위 밖
- nestia 자체 로드맵 (별도 프로젝트)
- AutoBE / Agentica 상업화 전략
- typia의 완전 새 기능 개발 (gRPC 서비스 정의, GraphQL 등)
- typia 외 생태계(Deno, Bun의 자체 검증)에 대한 대응

이들은 중요하지만 이 plan의 관심사 밖.

## 용어 정의 (혼동 방지)

| 용어 | 정의 |
|---|---|
| **tsgo** | Microsoft/typescript-go. TypeScript 7의 Go 포팅 공식 프로젝트 |
| **TypeScript 7 / Corsa** | 위 프로젝트의 사용자 브랜드명 |
| **ts-patch** | 현재 typia가 의존하는 transformer patcher |
| **ttsc** | (이 plan에서 신규 제안) samchon이 만들 tsgo transformer wrapper |
| **typia-go** | (이 plan에서 신규 제안) typia core/transform을 Go로 재구현한 것 |
| **typia v12** | 현재 릴리스, TS 6.x + ts-patch 기반 |
| **typia v13** | ttsc 채택 릴리스 (2027 Q2 예정) |
| **typia v14** | typia-go 채택 릴리스 (2029 Q2 예정) |
| **Phase 0~4** | ttsc 개발 단계 (06 문서) |
| **M0~M7** | typia-go 개발 단계 (07 문서) |

## 이 계획의 인식 한계

이 plan은 다음을 **모른다**:
1. Microsoft의 2027~2028 TypeScript 정책 세부 (공식 transformer API 등)
2. tsgonest의 향후 1~2년 성장 속도 (정확한 시장 장악 예측 불가)
3. Go 조력자 확보 가능성 (samchon의 네트워크 미지)
4. AutoBE/Agentica 상업화 수익 규모
5. TypeScript 7.0 GA 시점의 정확한 날짜 (2026 mid/late 까지만 공식)

이러한 불확실성은 **분기 조건 (05 문서)** 로 처리한다.

## 이 계획의 증거 기반

### 직접 실측 (확실)
- typia core TS LOC: `find packages/core/src -name "*.ts" | wc -l` → 217 파일 / `cat ... | wc -l` → 30,307 LOC
- typia transform LOC: 117 파일 / 4,306 LOC
- **합계: 334 파일 / 34,613 TS LOC**
- tsgolint `go:linkname` 개수: `grep -rn "go:linkname" shim/ | wc -l` → 896+

### 저장소 측정 (확실)
- tsgonest Go LOC: ~72,200 (typescript-go 제외)
- Effect-tsgo 24 patch 파일 수: `ls _patches/*.patch | wc -l` 결과

### 웹 리서치 (신뢰도 중간)
- Microsoft DevBlog 발표 (TS 7 GA 2026 mid/late)
- Issue #516 milestone "Post-7.0"
- tsgonest v0.13.5, 49 releases (2026-04-15)

### AI 추정 (신뢰도 약함, 출처 명시)
- ttsc 12개월 개발 기간
- typia-go 18~24개월
- IPC 오버헤드 ~15-50ms/file
- Go/TS LOC 비율 2~3배

→ AI 추정은 15 부록에 모두 표시. 이를 근거로 **양자택일 판단 금지**.

## 이 계획의 생명 주기

- **작성**: 2026-04-18
- **검토 기한**: 2026 Q2 종료 (2026-06-30)
- **수정 주기**: 매 분기 또는 tsgo/tsgonest 중대 변화 시
- **폐기 조건**: TypeScript 7.0 GA 이후 6개월 경과, 또는 Microsoft 공식 transformer API 출시

→ 다음 [02. 위협 지도](02-threat-landscape.md)
