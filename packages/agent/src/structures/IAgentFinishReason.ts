/**
 * Completion이 끝난 이유.
 *
 * `"length"`는 harness가 **output-token 천장을 넘어** locked checkpoint로부터 이어 붙이기 위해
 * 사용하는 신호다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentFinishReason =
  | "stop"
  | "length"
  | "content-filter"
  | "abort"
  | "error"
  | "other";
