import { IAgentMessage } from "./IAgentMessage";
import { IAgentOperation } from "./IAgentOperation";

/**
 * {@link IAgentSelector}에 주어지는 입력.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentSelectorProps {
  /** 지금까지의 대화(중립 메시지). */
  messages: IAgentMessage[];

  /** Agent에 등록된 모든 operation. */
  operations: IAgentOperation[];

  /** {@link IAgentConfig.capacity}에서 온 capacity 힌트. */
  capacity?: number | undefined;

  /** 턴의 abort 핸들. */
  abortSignal?: AbortSignal | undefined;
}
