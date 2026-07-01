import { IAgentResponse } from "./IAgentResponse";
import { IAgentTurn } from "./IAgentTurn";

/**
 * {@link IAgent.conversate}가 resolve하는 것: `for await`로 구동하는 단일 턴의 라이브
 * {@link IAgentResponse} part 스트림.
 *
 * `IAgentExecution`은 그 자체로 async-iterable이다 — stream _이_ 반환값이며, agentica의
 * "`Promise<History[]>` + 외부 이벤트" 모델을 뒤집는다. 내부 async-iterator 는 part를 yield하고
 * {@link IAgentTurn}을 _return_한다. `for await` 문이 part를 소비하고, 결과는 {@link join}으로
 * 회수한다:
 *
 * ```ts
 * const execution = await agent.conversate("Yaho~");
 * for await (const r of execution) {
 *   if (r.type === "tool") { ... }
 *   else if (r.type === "text") { ... }
 * }
 * const { histories, usage, stop } = await execution.join();
 * ```
 *
 * Iterator는 **lazy/pull 주도**다. 매 `next()`가 harness를 전진시키며, 이것이 `tool` part가
 * 소비자의 `execute()`/`feedback()` 결정을 위해 턴 재개 전에 멈출 수 있는 이유다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentExecution extends AsyncIterable<IAgentResponse> {
  /**
   * Async-iterator: {@link IAgentResponse} part를 **yield**하고 {@link IAgentTurn}
   * 결과를 **return**한다. 3-channel 시그니처는 return 값이 턴 결과를 나른다는 것을 문서화한다(평범한 `for
   * await`는 버리고, {@link join}이 소비).
   */
  [Symbol.asyncIterator](): AsyncIterator<IAgentResponse, IAgentTurn, void>;

  /**
   * 남은 part를 drain하고 턴 결과를 resolve한다.
   *
   * 순회 없이 호출해도(턴을 끝까지 실행) 안전하고, `for await` 이후 호출하면 이미 계산된 결과로 즉시 resolve한다.
   */
  join(): Promise<IAgentTurn>;

  /**
   * 턴을 중단한다: adapter 스트림을 취소하고, 대기 중 `execute()`를 reject하며, iterator를 `stop:
   * "aborted"`로 settle한다.
   */
  abort(reason?: unknown): void;

  /** {@link abort} 호출 또는 입력 signal 발화 시 abort되는 signal. */
  readonly signal: AbortSignal;
}
