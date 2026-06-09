import { IAgentAdapterCapabilities } from "./IAgentAdapterCapabilities";
import { IAgentAdapterRequest } from "./IAgentAdapterRequest";
import { IAgentChunk } from "./IAgentChunk";

/**
 * 벤더 중립 LLM streaming adapter — `@typia/agent`를 provider 비종속으로 만드는 단 하나의
 * 시임(seam).
 *
 * 어떤 chat-completion backend(OpenAI SDK, Vercel AI SDK, self-hosted 모델로의 raw
 * `fetch` 등)든 하나의 primitive로 환원한다. 즉 요청을 받아 {@link IAgentChunk}의 async 스트림을
 * 돌려준다. Vercel의 `LanguageModelV2.doStream`을 본떴으되, harness가 native `tool_calls`가
 * 아니라 _structured 텍스트_를 streaming하므로 chunk union이 의도적으로 **더 작다**. native
 * tool-call streaming은 선택적 capability이지 핵심 경로가 아니다.
 *
 * Provider 고유의 모든 것 — OpenAI의 "첫 tool-call delta에만 id/name이 온다",
 * `stream_options.include_usage`, Vercel의 major 버전 간 식별자 변동 — 은 adapter
 * **내부에서** 정규화된다. 위의 harness는 그것을 결코 보지 않는다. typia의 {@link ILlmSchema}가 vendor
 * 통합형(모델별 schema 변형 없음)이라, adapter가 provider 지식이 사는 _유일한_ 장소다.
 *
 * 라이브러리는 이 인터페이스의 구현체(`OpenAiAdapter`, `VercelAdapter` 등)를 제공한다. provider 교체는
 * {@link IAgentProps.adapter} 한 줄 교체이며 agent 코드는 그대로다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentAdapter {
  /** 로깅/telemetry용 provider 식별자(예: `"openai"`, `"vercel"`). */
  readonly provider: string;

  /** Backend에 전달되는 모델 식별자(예: `"gpt-4o"`, `"claude-..."`). */
  readonly model: string;

  /**
   * 선택적 capability 광고.
   *
   * 없으면 text-streaming만 가능하다고 가정한다.
   */
  readonly capabilities?: IAgentAdapterCapabilities | undefined;

  /**
   * Streaming completion을 연다.
   *
   * @param input 중립 요청(messages + 선택적 schema/tool 힌트).
   * @returns 중립 {@link IAgentChunk}의 async iterable.
   */
  stream(input: IAgentAdapterRequest): AsyncIterable<IAgentChunk>;
}
