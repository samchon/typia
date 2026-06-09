/**
 * {@link IAgentAdapter}가 광고하는 선택적 backend capability.
 *
 * Harness가 더 빠른 native 경로(예: native structured output, prompt caching)를 쓸 수
 * 있는지를 알려준다. 없으면 text-streaming만 가능하다고 가정한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentAdapterCapabilities {
  /** Backend가 JSON schema를 native로 강제할 수 있는가(OpenAI structured output). */
  structuredOutput?: boolean | undefined;

  /** Backend가 native `tools` / `tool_calls`를 지원하는가. */
  nativeTools?: boolean | undefined;

  /** Backend가 prompt caching을 지원하는가(history/compaction 전략에 영향). */
  promptCache?: boolean | undefined;
}
