import { IAgentHistory } from "../histories/IAgentHistory";
import { IAgentTokenUsage } from "../structures/IAgentTokenUsage";

/**
 * 한 번의 {@link IAgent.conversate} 턴 결과 — {@link IAgentExecution}의 async-iterator 가
 * (yield하는 part가 아니라) _return_하는 값이자, {@link IAgentExecution.join}으로도 닿는 값.
 *
 * "part의 stream"과 "단일 종료 결과"의 분리는 Claude Code의 `AsyncGenerator<Event,
 * Terminal>` 형태를 따른다. `for await`가 part를 소비하고, 결과는 턴이 왜 끝났고 무엇을 영속화할지를 알려준다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTurn {
  /**
   * 이 턴에 생성된 새 history(사용자 입력, assistant 텍스트, tool 호출+결과). store에 append하라.
   * {@link IAgentHistoryJson}로 직렬화하면 {@link IAgentProps.histories}로 나중에 재개할 수
   * 있다.
   */
  histories: IAgentHistory[];

  /** 이 턴의 토큰 usage({@link IAgentTokenUsage.continuations} 포함). */
  usage: IAgentTokenUsage;

  /**
   * 턴이 끝난 이유:
   *
   * - `"completed"` — 모델이 더 할 말 없이 끝남.
   * - `"aborted"` — {@link IAgentExecution.abort}(또는 abort signal)가 발화.
   * - `"ceiling"` — 구조 완성 전에 continuation {@link IAgentContinuation.limit}에
   *   도달(truncated output).
   * - `"error"` — 치명적 adapter/transport 에러로 턴 종료(상세는 `error` 이벤트).
   */
  stop: "completed" | "aborted" | "ceiling" | "error";
}
