# `@typia/agent` — 아키텍처

> 상태: **인터페이스 설계(타입 전용)**. 이 문서와 `src/*.ts` 타입 정의가 1차 산출물이다. 런타임 구현은 아직 출하되지 않았다. 모든 결정의 근거가 되는 연구 흔적은 repo 루트의 git-ignore된 `.wiki/`에 있다.

## 1. 이것이 무엇인가

`@typia/agent`는 typia의 컴파일 타임 validation 위에 구축된, 벤더 중립적인 **streaming function-calling harness**다. `MicroAgentica` 스타일의 대화형 agent를 제공하되, 기존의 모든 프레임워크와 세 축에서 다르다.

1. **max-output-token 천장을 넘는다.** 모델이 structured data를 *streamed text*로 내보내면, harness가 자라나는 prefix를 leniently 파싱하고, incremental하게 validate하며, 확정된 checkpoint를 **lock**한다. 그리고 한 턴이 `length` 한계에 닿으면 그 lock으로부터 새 completion을 이어 붙인다 — 그리하여 하나의 논리적 답변이 단일 completion을 초과할 수 있다.
2. **incremental하게 validate한다.** 업계 표준 `generate-all → validate-once`가 아니라 `generate → parse partial → validate prefix → lock → continue`다.
3. **`for await`로 소비한다.** `conversate()`는 response part의 discriminated union을 담은 async-iterable을 반환하고, 각 part는 그 자체로 더 파고들 수 있다(`text.stream()`, `tool.execute()`). content를 소비하는 데 callback registry가 없다.

철학은 두 편의 typia harness 아티클(lenient parsing, incremental validation, CoT compliance)에서, 소비 모델은 Claude Code의 async-generator loop에서, connector/orchestration 어휘는 agentica에서, adapter 형태는 Vercel의 `LanguageModelV2`와 BAML의 schema-aligned parsing에서 가져왔다. 출처 분석은 `.wiki/10`–`.wiki/50` 참고.

## 2. 표준 use-case (사양)

```ts
const agent = new TypiaAgent({ adapter, controllers });
const response = await agent.conversate("Yaho~");
for await (const r of response) {
  if (r.type === "tool") {
    if ((await r.success()) === false) await r.feedback(); // 교정
    else                               await r.execute();  // 실행
  } else if (r.type === "text") {
    for await (const piece of r.stream()) console.log("piece", piece);
  }
}
const { histories, usage, stop } = await response.join();
```

`src/`의 모든 타입은 이 루프를 타입 안전하고, 자동완성되고, 자명하게 만들기 위해 존재하며, 동시에 성장의 여지를 남긴다.

## 3. 계층 아키텍처

```
┌──────────────────────────────────────────────────────────────────────┐
│ TypiaAgent  (IAgent)        facade: conversate(), getHistories, on/off  │
├──────────────────────────────────────────────────────────────────────┤
│ Orchestration               turn loop · selection · describe            │  교체 가능
├──────────────────────────────────────────────────────────────────────┤
│ Harness  (제품의 본질)       stream → lenient parse → incremental        │  typia-native,
│                             validate → lock → feedback → continue        │  벤더-무관
├──────────────────────────────────────────────────────────────────────┤
│ Adapter  (IAgentAdapter)    중립 chat-stream primitive                  │  OpenAI | Vercel | …
└──────────────────────────────────────────────────────────────────────┘
```

harness가 차별화된 핵심이고, adapter는 얇은 provider 시임이며, orchestration은 그 위의 얇은 계층이다. (조사한 모든 프레임워크가 결국 streaming-chat primitive 위의 얇은 loop였다 — 그래서 우리는 primitive에 투자한다.)

### harness, 단계별

1. agent는 모델에게 자신의 결정을 typia 스키마(보통 discriminated union: *speak* vs *call F* — CoT-compliance 아티클이 reasoning을 강제할 때 쓰는 바로 그 패턴)에 맞는 **streamed text**로 내보내게 한다.
2. 토큰이 도착하는 대로 harness는 raw 텍스트를 누적하고, **debounce된 주기**(`IAgentConfig.validateCadence`, 기본 `"boundary"`. 매 토큰은 O(n²)라 금물)에 typia의 **lenient parser**를 돌려 `DeepPartial<T>`를 얻는다.
3. 판별자가 확정되면 harness가 해당 part(`IAgentText` 또는 `IAgentTool`)를 **열고** 이후 delta를 거기로 라우팅한다.
4. typia 생성 validator로 **prefix를 validate**하며, 매 tick을 `IAgentValidation.watch()`(`phase: "streaming" | "validated" | "locked" | "failed"`)로 노출하고, validated checkpoint를 **lock**한다.
5. 구조 중간에 `length` finish가 오면 locked prefix로부터 **이어 붙이고**(`IAgentConfig.continuation`) `usage.continuations`를 올린다.
6. validation 실패 시 `IAgentTool.feedback()`이 에러를 `LlmJson.stringify`로 annotated JSON 렌더하여(아티클의 feedback loop) 재요청하며 `IAgentConfig.retry`로 제한된다.

결정적으로, harness는 parse/validate/coerce를 **재구현하지 않는다**. `typia.llm.*`의 각 `ILlmFunction` / `ILlmStructuredOutput`이 *같은* 타입에서 생성된 그 클로저를 이미 지닌다. `@typia/agent`는 그것을 sequencing할 뿐이다. 상류 표면은 `.wiki/20` 참고.

## 4. 타입 카탈로그 (파일 맵)

타입 하나당 파일 하나. namespace에 변형을 쑤셔넣지 않는다. union 타입은 독립 파일들을 import해 합치는 얇은 파일이고, 변형 interface는 각자의 파일을 가진다. 총 69개 파일.

### 루트
- `IAgent.ts` — `IAgent` (계약)
- `TypiaAgent.ts` — `TypiaAgent` (`declare class implements IAgent`)

### structures/ — 생성 & 배선
- `IAgentProps.ts`, `IAgentConfig.ts`, `IAgentSystemPrompt.ts`, `IAgentContinuation.ts`, `IAgentCompaction.ts`, `IAgentConversateOptions.ts`

### structures/ — controllers & operations
- controller union: `IAgentController.ts` → `IAgentClassController.ts` · `IAgentHttpController.ts` · `IAgentMcpController.ts` (+ `IAgentClassExecuteProps.ts` · `IAgentHttpExecuteProps.ts`)
- operation union: `IAgentOperation.ts` → `IAgentClassOperation.ts` · `IAgentHttpOperation.ts` · `IAgentMcpOperation.ts` · `IAgentOutputOperation.ts` (+ 공통 헤드 `IAgentOperationBase.ts`)
- selector: `IAgentSelector.ts` · `IAgentSelectorProps.ts`

### structures/ — adapter (벤더 중립 시임)
- `IAgentAdapter.ts` · `IAgentAdapterRequest.ts` · `IAgentAdapterCapabilities.ts`
- chunk union: `IAgentChunk.ts` → `IAgentTextDeltaChunk.ts` · `IAgentFinishChunk.ts` · `IAgentErrorChunk.ts` · `IAgentRawChunk.ts` (+ `IAgentFinishReason.ts`)

### structures/ — messages & usage
- `IAgentMessage.ts`; content union `IAgentMessageContent.ts` → `IAgentTextContent.ts` · `IAgentImageContent.ts` · `IAgentFileContent.ts` · `IAgentAudioContent.ts`
- `IAgentTokenUsage.ts` (+ `IAgentTokenUsageInput.ts` · `IAgentTokenUsageOutput.ts`)

### responses/ — streamed 턴
- `IAgentExecution.ts` — `AsyncIterable<IAgentResponse>` + `join()`/`abort()`
- response union: `IAgentResponse.ts` → `IAgentText.ts` · `IAgentTool.ts` (+ `IAgentFeedbackProps.ts`)
- incremental validation: `IAgentValidation.ts` (+ `IAgentValidationState.ts`)
- `IAgentExecute.ts` · `IAgentTurn.ts`

### histories/ — 메모리
- live union: `IAgentHistory.ts` → `IAgentTextHistory.ts` · `IAgentToolHistory.ts` · `IAgentSystemHistory.ts`
- JSON union: `IAgentHistoryJson.ts` → `IAgentTextHistoryJson.ts` · `IAgentToolHistoryJson.ts` · `IAgentSystemHistoryJson.ts` (+ 공통 헤드 `IAgentHistoryBase.ts`)

### events/ — telemetry (부차)
- union: `IAgentEvent.ts` → `IAgentRequestEvent.ts` · `IAgentResponseEvent.ts` · `IAgentValidateEvent.ts` · `IAgentParseEvent.ts` · `IAgentContinuationEvent.ts` · `IAgentUsageEvent.ts` (+ `IAgentEventBase.ts` · `IAgentEventMapper.ts` · `IAgentEventSource.ts`)

### 하중을 견디는 세 타입

- **`IAgentExecution`** — 그 자체가 async-iterable이다. iterator는 `IAgentResponse`를 **yield**하고 `IAgentTurn`을 **return**한다(Claude Code의 `AsyncGenerator<Event, Terminal>`). `for await`가 part를 소비하고, `join()`이 결과를 회수한다. lazy/pull 주도라, `tool` part가 소비자의 결정을 위해 턴 재개 전에 멈출 수 있다.
- **`IAgentTool`** — streamed payload 위의 소비자 주도 state machine이며 `IAgentValidation`을 상속한다. `success()`/`validate()`로 점검, `feedback()`은 제한된 correction loop를 돌려 *교정된* tool을 resolve(chainable), `execute()`는 바인딩된 함수를 실행(소비자 게이팅 — permission / human-in-the-loop의 자연스러운 자리).
- **`IAgentValidation`** — incremental validation 표면: `snapshot()`(최신 `DeepPartial<T>`), `locked()`(truncation을 견디는 checkpoint), `watch()`(BAML식 `phase`를 가진 typed *이며 validated*된 partial), `validate()`/`success()`.

## 5. 벤더 중립 adapter

`IAgentAdapter`는 어떤 backend든 하나의 메서드로 환원한다.

```ts
stream(input: IAgentAdapterRequest): AsyncIterable<IAgentChunk>;
//  IAgentChunk = text-delta | finish | error | raw
```

Vercel의 `LanguageModelV2.doStream`을 본떴으되 **더 작다** — harness가 *텍스트*를 streaming하므로 chunk union은 `text-delta` + `finish`가 지배하고, provider 고유 이벤트(citations, logprobs 등)는 `raw` escape hatch로 흘려 최저공통분모 함정을 피한다. native `tools`는 광고된 선택 capability(`IAgentAdapterCapabilities`)이지 핵심이 아니다.

모든 provider 특이성은 adapter **내부**에서 정규화된다(OpenAI의 "첫 tool-call delta에만 id/name", `stream_options.include_usage`, Vercel의 major 버전 간 식별자 변동). typia의 `ILlmSchema`가 vendor 통합형(`typia@13`에서 모델별 schema 변형 없음)이라, adapter가 provider 지식이 사는 *유일한* 장소다. OpenAI ⇄ Vercel 교체는 `IAgentProps.adapter` 한 줄이고 agent 코드는 그대로다.

**해결된 질문:** Vercel AI SDK는 저수준 *stateless* primitive다(내장 메모리 없음). 그래서 어떤 adapter를 쓰든 `@typia/agent`가 history/메모리를 직접 소유한다(`IAgentHistory`). adapter는 request→stream만 한다. `.wiki/50` 참고.

## 6. 메모리

상태는 `IAgentHistory` 배열이며 매 턴 (`IAgentMessage[]`로 재구성되어) 재생된다 — agentica 모델. live 형태는 런타임 객체를 참조할 수 있고, 직렬화 mirror `IAgentHistoryJson`이 영속화·재개(`IAgentProps.histories`) 대상이다. v1은 전체 history를 재생한다. `IAgentConfig.compaction`은 긴 호흡에서 summarize-and-truncate를 위한 예약 hook이다(Claude Code가 보이듯 규모가 커지면 중요해진다 — `.wiki/40`).

## 7. 함수가 많을 때의 확장

기본 agent는 **micro**다. selector가 없고 매 턴 모든 함수를 나열한다 — 수십 개까지 이상적. `IAgentConfig.capacity`를 넘으면 `IAgentSelector`가 개입하며, 세 가지 조합 가능한 전략을 둔다(`.wiki/60` D9).

1. **Semantic pre-filter**(`IAgentSelector.prefilter`) — 함수 description을 embedding해 사용자 메시지와 유사한 것만, LLM 호출 이전에 남긴다.
2. **Capacity divide-and-conquer** — 생존자를 그룹으로 쪼개 그룹별 병렬 선택, elitism 재선택은 선택(agentica 방식).
3. **Incremental-validation selection** — 선택 자체를 enum/`MinItems` 스키마에 대해 incremental하게 validate되는 streamed structured output으로 돌린다(dog-fooding).

HTTP controller(`IAgentHttpController`, `HttpLlm` 경유)는 REST 백엔드 전체를 함수로 바꾼다 — "함수가 아주 많은" 흔한 출처다.

## 8. 선행 기술과의 차이

| 관심사 | agentica | Vercel AI SDK | `@typia/agent` |
| --- | --- | --- | --- |
| 턴 반환 | `Promise<History[]>` + `on/off` 이벤트 | `streamText` view | **`AsyncIterable<part>`** + `join()` |
| function calling | native `tool_calls` | native `tool_calls` | **streamed text + lenient parse** |
| output-token 천장 | — | — | **checkpoint-lock + continue** |
| partial validation | post-hoc | typed but **미검증** 스냅샷 | **incremental, validated** partial |
| 벤더 결합 | 하드 OpenAI | 중립 `LanguageModelV2` | **중립 `IAgentAdapter`** |
| 메모리 | full-replay history | 없음(stateless) | full-replay history (+ compaction hook) |
| 많은 함수 | `capacity` divide-and-conquer | — | `IAgentSelector` (prefilter + D&C + streamed) |

## 9. 검증 상태

- `tsgo --noEmit -p packages/agent/tsconfig.json` → **클린**(전체 타입 표면이 내부적으로 정합하며 `@typia/interface`에 대해 조합된다).
- `prettier --write` 적용(import 정렬 + repo의 `prettier-plugin-jsdoc`). markdown은 prettier 대상이 아니라 줄바꿈 없이 유지된다.
- 런타임/테스트는 아직 없다 — 이번 작업은 타입 + 문서 전용(mandate대로).

## 10. 미해결 질문

`.wiki/70-open-questions.md`에서 추적한다: 정확한 continuation-seeding 프로토콜(prefill vs remainder, provider별), iterator 포기 시 teardown(`onUnhandledTool`), parallel tool 실행, history compaction 소유 주체, 능동적 토큰 추정, 멀티모달 *출력*, adapter capability 협상, 에러 분류 체계, 그리고 structured-output이 별도 response 멤버를 가질지(현재는 `IAgentOutputOperation`을 통해 `IAgentTool`에 접힘).

## 11. 다음 단계 (구현 단계)

1. `IAgentAdapter`에 대해 `OpenAiAdapter`와 `VercelAdapter` 구현.
2. harness 구현: streaming 버퍼 + debounce된 lenient-parse + incremental validate + checkpoint lock + continuation, `ILlmFunction` 클로저 sequencing.
3. `IAgentExecution`을 생산하는 lazy orchestration loop 구현.
4. parallel tool을 위해 Claude Code의 `Stream<T>` callback↔async-iterable bridge와 bounded concurrent-generator merge 이식(`.wiki/40` L5).
5. suite 컨벤션을 미러링한 `tests/test-agent/` 하위 function-per-file 테스트(`.codex/skills/development`).
