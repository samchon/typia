# 03. LLM Function Calling Harness

## 핵심 명제

> "LLM에 도구를 주려면, **별도 스키마를 작성하지 말고 TypeScript class 한 번만 쓰라**."

대조:
```ts
// 일반 (Zod 기반)
const tools = [{
  name: "addUser",
  description: "Add a new user",
  parameters: z.object({ name: z.string(), email: z.string().email() }),
  execute: async (args) => api.addUser(args),
}];

// typia
class UserService {
  /** Add a new user */
  addUser(props: { name: string; email: string & tags.Format<"email"> }): Promise<IUser> {
    return api.addUser(props);
  }
}
const app = typia.llm.application<UserService, "chatgpt">();
// → app.functions = [{ name, description, parameters, ... }] 자동
```

## 4개 함수

| 함수 | 사용 |
|---|---|
| `typia.llm.application<Class, Model>()` | 클래스의 모든 메소드 → 함수 호출 스키마 모음 |
| `typia.llm.controller<Class, Model>()` | application + 클래스 인스턴스 결합 |
| `typia.llm.schema<T, Model>()` | 단일 타입 → LLM JSON 스키마 |
| `typia.llm.parameters<T, Model>()` | 함수 파라미터 객체 → 스키마 |
| `typia.llm.structuredOutput<T, Model>()` | structured output 스키마 |

## Model 인자 — 다중 LLM 공급자 호환

```
"chatgpt"   // OpenAI strict mode
"claude"    // Anthropic
"gemini"    // Google
"llama"     // Llama 3
"deepseek"  // DeepSeek
"3.0" / "3.1" / "v3" // 일반 JSON Schema 버전
```

같은 `ILlmSchema`에서 `IConfig.strict`와 공급자별 호환 모드로 분기. 한 타입에서 모든 공급자 스키마가 나온다 (P8).

## ILlmFunction 구조 — 진짜 핵심

`packages/interface/src/schema/ILlmFunction.ts:1-145`:

```ts
interface ILlmFunction<Schema> {
  name: string;
  description?: string;
  parameters: ILlmSchema.IParameters;     // 입력 스키마
  output?: ILlmSchema;                     // 출력 스키마
  
  // 핵심 3종 메소드
  parse: (str: string) => IJsonParseResult;       // lenient JSON 파싱
  coerce: (input: object) => object;              // "42"→42, "true"→true
  validate: (input: unknown) => IValidation;       // 정밀 검증
}
```

이 3종이 typia LLM의 진짜 무기다. zod tool은 schema만 주지 이런 보호막이 없다.

### parse — lenient JSON

LLM은 깨진 JSON을 자주 뱉는다:
- 마크다운 펜스 (` ```json `)
- 단일 따옴표
- 키에 따옴표 없음
- 후행 콤마
- 주석

`@typia/utils/utils/LlmJson.ts`가 이걸 모두 복구. **AutoBE/Agentica의 100% accuracy 주장의 절반이 여기서 나온다**.

### coerce — type 강제

```
{ "age": "42", "active": "true" }  →  { "age": 42, "active": true }
```

LLM이 string과 number를 헷갈릴 때 자동 보정. validate 전에 적용.

### validate — 정밀 검증

`typia.validate<T>` 동등. coerce 후에도 안 맞으면 errors 반환.

## "6.75% → 100%" 정확도 주장 (블로그 2026-03-26)

AutoBE 프로젝트 + Qwen 모델 케이스. 일반 함수 호출이 6.75% 정확도일 때 typia harness가 100% 달성.

비결:
1. **lenient parse**가 "거의 맞는" JSON을 살림
2. **coerce**가 type 차이를 고침
3. **validate** 실패 시 LLM에게 **정확한 path와 expected**를 피드백 → LLM이 다음 시도에서 정확히 고침
4. **재시도 루프**로 수렴

이는 단순 스키마 검증이 아니라 **LLM 협상 프로토콜**이다 — typia가 가진 LLM 영역 만의 차별점.

## MCP / LangChain / Vercel 통합

[03-packages/05-llm-integrations.md](../03-packages/05-llm-integrations.md) 참조.

3개 어댑터 모두 같은 `ILlmController`에서 출발 → 각 SDK Tool 타입으로 매핑. ~150 LOC씩.

## HTTP LLM (Swagger → 함수 호출)

`typia.http.application<Path>()` (또는 `@typia/utils/http/HttpLlm`):
- OpenAPI YAML/JSON 파일을 받아 → IHttpLlmApplication으로 변환
- 각 OpenAPI 경로가 하나의 LLM 함수가 됨
- LLM이 실제 HTTP 호출 가능

→ "기존 REST API에 LLM Agent를 붙이는" 가장 빠른 길.

## Standard Schema 누락의 의미

[05-research/02-competitors.md](../05-research/02-competitors.md) 강조: MCP TS SDK 2025-11-25부터 Standard Schema (`~standard`) 수용.

typia는 아직 Standard Schema 어댑터 미공식. → 어댑터 1주일 작업으로 노출하면 즉시 Zod 자리에 끼워 넣을 수 있음. **가장 우선순위 높은 액션 아이템**.

## 약점

- **모델별 호환 모드 매뉴얼 유지**: OpenAI strict 변경, Anthropic prompt caching 등 매번 손으로 추적
- **함수 description은 JSDoc 주석에서 추출**: 한국어/영문 혼용 시 LLM 혼동
- **streaming 미지원**: tool call streaming은 SDK 어댑터(vercel)에 위임
- **관찰성 부족**: 어떤 함수가 몇 번 호출됐는지 typia가 자체 추적 안 함 (사용자가 wrapper)
