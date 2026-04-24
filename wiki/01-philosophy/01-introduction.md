# 01. typia란 무엇인가 — 한 줄 정의에서 시작

## 한 줄 정의

> **typia는 "TypeScript 타입 그 자체를 런타임 코드의 단일 진실원(Single Source of Truth)으로 삼는다"는 단 하나의 명제로 모든 결정을 정렬한 라이브러리다.**

마케팅 카피가 아니다. typia의 모든 기술적 선택 — 트랜스포머, 메타데이터 IR, JSDoc/Brand 태그, JSON·Protobuf·LLM 스키마 일원화, `IRandomGenerator` 형태까지 — 이 명제 하나에서 연역된다. 사상이 코드를 결정하고, 코드가 사상을 증명하는 보기 드문 라이브러리다.

## 다른 라이브러리와 무엇이 다른가

런타임 검증 라이브러리는 본질적으로 **두 가지 표현 사이의 다리**다.

| 표현 A (개발 시) | 표현 B (런타임) | 다리 |
|---|---|---|
| TypeScript 타입 | JavaScript 값 | 검증/직렬화 |

이 다리를 어떻게 짓느냐로 라이브러리의 정체성이 결정된다.

| 접근 | 대표 | 다리 짓는 방식 |
|---|---|---|
| **스키마 빌더** | Zod, Valibot, ArkType, TypeBox | 별도 스키마 객체 작성 → `Static<typeof S>` 같은 도구로 TS 타입 추출 |
| **데코레이터** | class-validator, io-ts | 클래스/인스턴스에 메타데이터 주입 → 런타임에 reflection |
| **반사(reflection)** | Deepkit | TS 타입을 bytecode로 보존 → 런타임에 typeOf<T>()로 조회 |
| **AST 변환 (typia)** | typia, ts-runtime-checks | TS 타입 자체를 컴파일러가 읽고, 컴파일 타임에 전용 함수를 emit |

처음 셋은 모두 **타입 표현이 둘 이상 존재**한다. 사용자(또는 도구)가 둘을 동기화해야 한다. typia는 이 동기화 비용 자체를 0으로 만든다 — **타입 한 번 쓰면 끝**.

## "Pure TypeScript" 라는 슬로건의 진짜 무게

`docs/pure.mdx:12-24`의 본문:

> typia needs only one line with pure TypeScript type. You know what? Every other validator libraries need extra schema definition, that is different with pure TypeScript type.
>
> Those duplicated schema definitions are not only annoying, but also error-prone. If you take any mistake on the extra schema definition, such mistake can't be detected by TypeScript compiler.

"Pure"는 "추가 코드가 없다"가 아니라 "**TS 컴파일러가 검증할 수 있는 모든 것을 검증한다**"이다. 별도 스키마 객체는 컴파일러 시야 밖이라 동기화가 깨져도 컴파일은 통과한다. typia는 사용자 타입을 그대로 받기 때문에, **타입 자체가 옳으면 검증 코드가 틀릴 수 없다**.

이는 DX 개선이 아니라 **정확성의 정의를 바꾸는 주장**이다. 다른 라이브러리에선 "스키마≡타입"이 사용자 책임이지만, typia에선 **그 불일치 자체가 존재할 수 없다**.

## 한 명제의 5가지 따름정리

이 명제 하나에서 typia의 모든 특징이 자연스럽게 따라 나온다:

1. **속도** — 컴파일 타임에 타입을 알면 검증 함수는 해당 타입에 맞춘 specialized code. Zod·AJV 같은 인터프리터와 달리 분기 트리가 inline되어 V8 hidden class까지 최적화 → **20,000× class-validator, 200× class-transformer**.

2. **0 외부 런타임** — 검증기는 사용자 코드 안에 emit. 빌드 후 산출물에 typia 의존이 거의 없다(TypeGuardError·RandomGenerator 등 최소 헬퍼만). Edge runtime/RSC에서 사이즈 우위.

3. **JSON/Protobuf/LLM 스키마 일원화** — 모두 같은 메타데이터 IR에서 도출. 한 타입에서 OpenAPI v3.0/3.1, Protobuf .proto, OpenAI·Anthropic·Gemini 함수 호출 스키마가 동시에 나온다.

4. **에러 경로 정확성** — 실패 시 `$input.user.address[0].zipCode` 처럼 **TS 식별자 그대로**. 런타임 reflection 기반 라이브러리가 흉내 내기 어려운 영역.

5. **AI 에이전트 친화** — interface 한 번이면 `typia.llm.application<App>()`이 함수 호출 스키마를 즉시 생성. 별도 스키마 객체 불필요. AutoBE/Agentica가 이 위에서 동작.

## 이 명제의 비용

공짜가 아니다. **TS 컴파일러를 빌드 파이프라인에 끼워야** 한다 — 현재 기본 경로는 `npx typia setup` → `@typescript/native-preview` + `@typia/ttsc` + `typia/lib/transform`, 번들러 중심 대체 경로는 `@typia/unplugin` 이다. 이는:

- 기본 설치 계약은 이미 `ttsc` 로 넘어왔지만, bundler/browser compatibility lane 과 optional runner(`@typia/ttsx`)까지 이해해야 하므로 setup 마찰이 여전히 큰 약점
- TypeScript Compiler API (특히 향후 tsgo)에 강하게 종속
- `ts-node` / `tsx` 류 실행은 별도 runner `@typia/ttsx` 같은 보조 경로가 필요

이 비용을 어떻게 다룰지가 [08-tsgo-master-plan/](../08-tsgo-master-plan/)의 핵심 주제.

## 다음 읽기 순서

- [02. Pure TypeScript 사상](02-pure-typescript.md) — 위 슬로건의 기술적 의미를 더 깊이
- [03. 설계 원칙](03-design-principles.md) — 사상에서 따라 나온 코드 차원의 원칙들
- [04. 포지셔닝과 가치관](04-positioning.md) — 다른 라이브러리들 사이에서 typia의 좌표
