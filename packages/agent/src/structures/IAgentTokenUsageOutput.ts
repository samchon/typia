/**
 * {@link IAgentTokenUsage}의 출력(completion) 측 토큰 분해.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTokenUsageOutput {
  /** 출력 토큰 총합. */
  total: number;

  /** Provider가 분리해 주는 경우의 reasoning/thinking 토큰. */
  reasoning: number;
}
