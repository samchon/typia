/**
 * 멀티모달 메시지의 일반 텍스트 content part.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTextContent {
  /** 판별자(discriminator). */
  type: "text";

  /** 텍스트 본문. */
  text: string;
}
