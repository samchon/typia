# 04. 포지셔닝과 가치관 — 좌표축 위의 typia

## typia를 측정하는 4개 좌표축

typia를 다른 라이브러리들과 비교하려면 다음 4축이 필요하다.

```
A. 표현축       : 스키마 객체 ←→ 순수 타입
B. 시점축       : 런타임 인터프리터 ←→ 컴파일 타임 코드 생성
C. 영역축       : 단일 기능(검증만) ←→ 다영역(검증+직렬화+스키마+LLM+protobuf)
D. 통합 마찰축  : 런타임 import만 ←→ 빌드 파이프라인 변경 필요
```

이 4축에 주요 라이브러리를 배치하면:

| 라이브러리 | A 표현 | B 시점 | C 영역 | D 마찰 |
|---|---|---|---|---|
| Zod | 스키마 | 런타임 + JIT(v4) | 단일+생태계 | 0 |
| Valibot | 스키마(함수) | 런타임 | 단일 | 0 |
| ArkType | TS-syntax DSL | 런타임 | 단일 | 0 |
| TypeBox | JSON Schema | 런타임 | 단일+OpenAPI | 0 |
| io-ts | 스키마 | 런타임 | 단일 | 0 |
| Deepkit | 타입 | 컴파일+런타임 reflection | 다영역(프레임워크) | 중(transformer) |
| ts-runtime-checks | 타입 | 컴파일 | 단일 | 중 |
| **typia** | **순수 타입** | **컴파일** | **다영역(올인원)** | **중** |
| BAML | DSL | 컴파일+codegen | 단일(LLM) | 높(DSL) |

typia는 **A=가장 순수, B=가장 컴파일, C=가장 다영역, D=중간**의 조합이다. 이 좌표가 비어 있는 자리였고, typia가 그 자리를 채웠다.

## 좌표가 의미하는 가치관

| 축 | typia의 가치판단 |
|---|---|
| A | "표현이 둘이면 진실도 둘. 진실은 하나여야 한다." |
| B | "런타임 비용이 0에 가까워야 검증이 어디서나 켜진다." |
| C | "한 타입의 모든 변환은 같은 IR에서 나오는 것이 자연스럽다." |
| D | "마찰은 일회성이지만 사상의 비순수는 영구적이다." |

D축은 약점이다. 그러나 typia는 "마찰 0"을 위해 사상 1·2·3을 양보하지 않는다. 이게 가치관 — 어디서 양보하지 않을지의 선택.

## "가장 빠르다"는 진짜 무엇인가

벤치마크 숫자(20,000×, 200×, 287K MB/s, ...)는 인상적이지만, 이 숫자보다 더 중요한 것은 **속도가 사상의 따름정리**라는 점이다.

순서가 거꾸로다:
- 보통: "빠르려면 컴파일 시점에 emit한다"
- typia: "Pure TypeScript의 자연스러운 결과로 컴파일 emit이고, 그 부산물이 속도다"

이 차이는 마케팅 용어가 아니라 진짜 의미가 있다. 만약 누군가 "런타임에 같은 속도가 나오는 라이브러리"를 만들어도 typia의 가치 명제는 무너지지 않는다 — typia의 핵심은 **타입 단일성**이지 속도 자체가 아니다. 속도는 결과일 뿐.

이 정렬이 잘 되어 있어 typia 마케팅에는 일관성이 있다. "빠르다"만 강조하지 않고 "Pure TypeScript"를 함께 강조하는 이유다.

## LLM 시대의 새로운 좌표 — type-first vs schema-first

2024~2026 동안 좌표축이 하나 더 생겼다.

```
type-first              schema-first
   typia                  Zod, BAML
   ArkType(부분)          Pydantic
```

LLM/agentic 시대의 implication:

| 차원 | type-first | schema-first |
|---|---|---|
| AI 코드 생성 | LLM이 interface만 생성하면 끝 | 스키마 객체까지 생성·동기화 필요 |
| 프롬프트 버저닝 | 자동 (코드 git diff) | 별도 도구 필요(BAML이 강점) |
| 멀티 언어 | TS만 가능 | Pydantic·BAML로 다언어 |
| 런타임 동적 스키마 | 불가 | 가능 |

typia가 type-first 진영의 가장 우수한 표현이고, AutoBE/Agentica가 그 위에 만든 사례다. 이 이야기는 typia가 더 강하게 외부에 알려야 할 부분이다 — "vibe coding 시대의 typia"라는 한 줄로 압축된다.

## typia의 딜레마 — Standard Schema 표준화

2025~2026의 가장 큰 외부 변동은 **Standard Schema 1.0** 의 표면화다. Zod·Valibot·ArkType·Effect Schema·TypeBox가 모두 `~standard` 인터페이스를 구현하고, MCP TS SDK·Next.js Server Actions·Hono·Drizzle이 이걸 수용한다.

이는 typia에게 두 가지를 동시에 의미한다:

**기회**: typia가 Standard Schema 어댑터를 노출하면 Zod 자리에 끼워 넣을 수 있다 → Zod 종속 생태계로 즉시 진입.

**위협**: typia가 어댑터를 노출하지 않으면 "Zod와 호환 안 되는 라이브러리" 가 된다. AI SDK / MCP / LangChain 통합에서 자기 어댑터 패키지(@typia/vercel, @typia/mcp, @typia/langchain)를 계속 만들어야 하는 부담.

→ Standard Schema 어댑터 출시는 사상이 양보하는 게 아니라 **사상을 더 멀리 퍼뜨리는 통로**다. 이게 [07-strategy/](../07-strategy/)에서 가장 우선순위 높은 항목이 되는 이유.

## "사상이 코드를, 코드가 사상을 증명한다" — 한 줄 요약

typia는 그냥 "빠른 검증 라이브러리"가 아니다. **TypeScript 타입 시스템에 대한 한 가지 입장의 가장 정직한 코드적 구현**이다. "타입이면 충분하다. 타입을 끝까지 믿어라."

이 입장을 가진 라이브러리는 거의 typia와 ArkType 둘뿐이고, ArkType은 transformer 없는 비용을 DSL 표면에서 갚는다. typia는 transformer 비용을 받아들이고 그 대가로 사상의 가장 순수한 형태를 얻었다.

다음을 결정해야 하는 시점이다:
1. 사상을 더 강하게 옹호하는 마케팅 (vibe coding / type-first / Standard Schema)
2. 사상을 위협하는 외부 변동 (tsgo) 에 대한 대응
3. 사상을 양보하지 않으면서 통합 마찰을 낮추는 기술 (unplugin 강화, Standard Schema 어댑터)

→ [06-feedback/](../06-feedback/) 와 [07-strategy/](../07-strategy/) 로 이어진다.
