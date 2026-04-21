# 01. Preface — 범위와 용어

## 이 계획이 지키는 것

### 1. 사용자 표면
```ts
typia.is<Member>(input);
typia.json.stringify<Member>(member);
typia.llm.application<MyClass>();
```
이 표면은 유지한다.

### 2. tsconfig 스키마
```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]
  }
}
```
설정 스키마는 가능한 한 유지하고, 이주는 `npx typia setup` 이 맡는다.

### 3. type-first 원칙
한 TypeScript type에서 validator, serializer, schema, LLM, protobuf, random이 함께 도출된다는 원칙은 구현 언어와 무관하게 유지한다.

## 이 계획이 바꾸는 것

### 1. 빌드 엔진
`tsc + ts-patch` 에서 `@typia/ttsc` 로 옮긴다.

### 1.5. 실행 엔진
`ts-node` / `tsx` 류 경로는 별도 runner `@typia/ttsx` 로 옮긴다.

### 2. 내부 구현 언어
`@typia/core` 와 `@typia/transform` 의 책임은 Go로 이전한다. 수치 출처는 [13](13-appendix-facts.md)를 따른다.

### 3. 제품 단계
- 현재 단계: typia monorepo 안의 **`@typia/ttsc` + `@typia/ttsx`**
- 미래 단계: 공통 코어가 굳은 뒤의 **generic `ttsc`**

지금은 두 단계를 섞지 않는다.

## 용어 정의

| 용어 | 정의 |
|---|---|
| **tsgo** | Microsoft `typescript-go` |
| **ts-patch** | 현재 typia가 쓰는 JS patch 경로 |
| **`@typia/ttsc`** | 지금 만들고 배포할 typia 전용 build adapter |
| **`@typia/ttsx`** | `@typia/ttsc` 코어를 재사용하는 typia 전용 runner |
| **`ttsc`** | 나중에 추출할 generic 이름. 현재 repo/package 확정안 아님 |
| **typia-go** | `@typia/ttsc` 내부 Go engine을 가리키는 작업용 명칭 |
| **typia v12** | TS 6.x + ts-patch 기반 현재 세대 |
| **typia v13** | `@typia/ttsc` / `@typia/ttsx` preview/stable 세대 |
| **typia v14** | Go engine 성숙 후 완성 세대 |

## 이 계획이 답하지 않는 것

- AutoBE/Agentica의 사업 전략
- typia 외 모든 생태계의 개별 사정
- 지금 당장의 generic `ttsc` 저장소 명명과 상표 확정

이 문서는 **지금 typia에서 무엇을 먼저 고정할지** 에 집중한다.

## 증거 원칙

- 수치: [13](13-appendix-facts.md)
- 공격적 반론: [09-audit](../09-audit/)
- 현재 구현 진척도: [18](18-phase0-progress-report.md)

불확실한 것은 불확실하다고 적는다.

→ 다음 [02. 위협 지도](02-threat-landscape.md)
