/**
 * 멀티모달 메시지의 이미지 content part. URL 또는 인라인 데이터로 표현한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentImageContent {
  /** 판별자(discriminator). */
  type: "image";

  /** 이미지 URL(또는 data URI). */
  url: string;

  /** Vision 모델을 위한 detail 힌트. */
  detail?: "auto" | "low" | "high" | undefined;
}
