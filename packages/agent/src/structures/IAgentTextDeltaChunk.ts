/**
 * Adapter 스트림의 증분 assistant 텍스트 — 주 채널.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTextDeltaChunk {
  /** 판별자(discriminator). */
  type: "text-delta";

  /** 이번에 추가된 텍스트 조각(누적이 아니라 delta). */
  delta: string;
}
