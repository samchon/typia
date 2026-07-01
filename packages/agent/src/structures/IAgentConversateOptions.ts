/**
 * {@link IAgent.conversate}의 턴 단위 옵션.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentConversateOptions {
  /** 외부에서 턴을 중단한다. {@link IAgentExecution.signal}에 연결된다. */
  abortSignal?: AbortSignal | undefined;
}
