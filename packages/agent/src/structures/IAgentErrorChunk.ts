/**
 * Adapter 스트림의 transport/provider 에러 chunk.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentErrorChunk {
  /** 판별자(discriminator). */
  type: "error";

  /** 에러 객체. */
  error: unknown;
}
