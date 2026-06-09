/**
 * 번역 없이 그대로 통과시키는 provider 고유 이벤트(citations, logprobs 등)의 chunk.
 *
 * 깔끔히 매핑되지 않는 provider 이벤트를 최저공통분모로 뭉개지 않기 위한 escape hatch다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentRawChunk {
  /** 판별자(discriminator). */
  type: "raw";

  /** Provider 고유 원본 값. */
  value: unknown;
}
