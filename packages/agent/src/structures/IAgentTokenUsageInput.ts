/**
 * {@link IAgentTokenUsage}의 입력(프롬프트) 측 토큰 분해.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTokenUsageInput {
  /** 입력 토큰 총합. */
  total: number;

  /** Provider의 prompt cache에서 제공된 토큰(보고될 경우). */
  cached: number;
}
