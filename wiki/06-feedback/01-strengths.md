# 01. 강점 — typia가 정말 잘하는 것들

> ⚠️ [09-audit/03-cycle3-feedback-honesty.md](../09-audit/03-cycle3-feedback-honesty.md) 감수 결과 반영:
> - **S1 "사상의 정직함"**: AI의 미덕 투사일 수 있음. 아래 설명은 그 경계를 인정함.
> - **S2 "객관적 우위"**: 특정 시점 머신 벤치이며, Zod v4 JIT 등 경쟁 이후 재측정 필요. [05-research/](../05-research/)의 수치 참조.
> - **S10 vs [04-philosophy-critique.md](04-philosophy-critique.md) 비판 8**: "일관된 비전"(강점)과 "bus factor"(약점)는 **같은 현상의 양면**이다. 프레이밍 편향 주의.
> - **누락 강점**: **nestia 생태계 통합** (실제 채택 드라이버의 상당수)과 **AI agent-time 적응성** (AutoBE 사례) 은 더 부각되어야 함.

피드백을 시작하기 전에, typia가 잘하는 것을 정리한다. 아래 각 항목은 **마케팅 수사가 아닌 관찰**이며, 감수 결과와 조화를 위해 원문 유지.

## S1. 사상의 정직함

이 항목이 가장 위에 와야 한다. 다른 라이브러리들이 "DX와 성능 둘 다"를 외치며 절충안을 만들 때, typia는 **"Pure TypeScript 하나"**라는 한 명제에 모든 것을 정렬했다. 이 정직함이 typia의 가장 큰 자산이다.

증거:
- 마케팅 카피와 코드가 일치 (P1~P8 원칙이 코드 전반에 일관됨)
- 새 기능이 들어와도 IR이 흔들리지 않음 (LLM 통합조차 새 Programmer로 흡수)
- 사용자 친화 우회로(예: 별도 스키마 객체 옵션)를 추가하지 않음 — 사상에 충실

대부분의 OSS는 1~2년 지나면 사상이 흐려진다. typia는 v1 → v12 동안 흐려지지 않았다.

## S2. 객관적·정량적 우위

벤치마크 (i9-13900HX, v5.3.4):

| 지표 | typia | 차순위 |
|---|---|---|
| 단순 객체 validate | 270K MB/s | typebox 256K |
| 재귀 구조 validate | 20K | — |
| 에러 경로 (validate) | 782 MB/s | typebox 35, zod 109 |
| optimizer 효과 | 287K | typebox 8.45 (33×) |
| stringify | 2,045 MB/s | fast-json-stringify 688, JSON.stringify 124 |

이 숫자들이 마케팅에 그치지 않는다 — 동일 머신에서 reproducible하게 검증된다 (`benchmark/results/*/`).

## S3. 깨끗한 패키지 분리

9개 패키지가 0-순환, 4-layer 구조. [02-architecture/03-package-graph.md](../02-architecture/03-package-graph.md):

- `interface` (0-dep)
- `utils`
- `core`
- `transform / typia / unplugin / mcp / langchain / vercel`

이 분리 덕에:
- LLM SDK 어댑터를 추가할 때 core는 불변
- 0-dep `interface`가 모든 패키지의 ABI 역할
- 사용자가 필요한 패키지만 install

## S4. 자체 IR 보유 (MetadataSchema)

`packages/core/src/schemas/metadata/MetadataSchema.ts:49-135`이 typia의 진짜 표준. **TypeScript Compiler API가 바뀌어도 IR 위 코드는 살아남는다**.

이는 미래 대비의 가장 강력한 자산. tsgo 시대에 'TypeChecker만 다시 만들면 나머지는 그대로'라는 분리가 완성되어 있다.

## S5. ts.* public API만 사용

`ts-expose-internals` devDependency는 declare만 — 실제 사용 거의 없음. 모든 AST 생성은 `ts.factory.*`. 호환성 표면이 최소화되어 있다.

→ TypeScript 4.8 ~ 5.9 동안 거의 깨지지 않은 이유.

## S6. 에러 메시지의 정확성

다른 라이브러리가 흉내 내기 어려운 부분.

```js
{
  path: "$input.user.address[0].zipCode",
  expected: "string & Format<\"postal-code\">",
  value: 12345
}
```

이 path는 컴파일 타임에 합성된다 (`AssertProgrammer.ts:56-84`). 런타임 reflection 없이 정확. 이 한 가지만으로도 typia를 쓸 이유가 된다 (특히 폼/API 입력 검증).

## S7. 한 라이브러리에서 다영역 커버

검증·직렬화·JSON 스키마·OpenAPI·Protobuf·LLM 함수 호출·랜덤·HTTP 디코딩·notation 변환을 **한 IR에서 모두**.

```
한 interface 작성 → typia.is + typia.json.stringify + typia.json.schema
                  + typia.protobuf.encode + typia.llm.application + typia.random
                  + typia.http.queryObject ...
```

비교 라이브러리 (zod/valibot)는 검증만, typebox는 검증+JSON Schema, BAML은 LLM만. 다영역 통합은 typia 고유.

## S8. LLM 함수 호출의 깊은 통합

ILlmFunction의 `parse / coerce / validate` 3종 메소드가 LLM 협상 프로토콜로 작동. AutoBE의 "6.75% → 100%" 정확도 사례가 이 위에서 가능.

다른 라이브러리는 "스키마 주고 검증"이지만, typia는 **"스키마 + 복구 + 피드백 루프"**까지 제공.

## S9. 활발한 문서 + Playground

- typia.io 사이트의 "Pure TypeScript" 사상 페이지가 명확
- 인-브라우저 playground가 즉시 실험 가능
- 11개 블로그 포스트가 깊이 있는 설명 (15,000× 검증, V8 hidden class, Bun 비교 등)
- API 문서 생성 파이프라인 자체를 별도 유지할 수 있는 구조가 이미 있음 (현재 website 기본 빌드에서는 TypeDoc generation 을 분리)

웬만한 OSS의 두 배 수준의 문서량.

## S10. 활성도 + 신뢰성

- 5.7k stars, 2026-04 활발 (master에 매주 PR/release)
- v12.0.2까지 - major bump가 사상 변경 아니라 점진적 개선
- 한 사람(samchon)이 6년 가까이 단일 비전 유지 — OSS에서 보기 드문 일관성
- nestia/AutoBE 같은 주변 OSS와 시너지

## S11. 상업적 백업

`AutoBE / Agentica`처럼 typia를 핵심 기술로 쓰는 상업/연구 프로젝트들이 있다. 이는:
- typia의 사용 사례가 실증됨
- typia 개발 동기가 마르지 않음 (사용자 피드백이 직접 들어옴)
- 단순한 OSS 취미가 아닌 직업적 약속

이 11가지가 typia의 객관적 위치다. 이제 [02-weaknesses.md](02-weaknesses.md)에서 같은 정직함으로 약점을 본다.
