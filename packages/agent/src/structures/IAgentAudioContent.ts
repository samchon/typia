/**
 * 멀티모달 메시지의 오디오 content part. base64 인코딩된 클립.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentAudioContent {
  /** 판별자(discriminator). */
  type: "audio";

  /** Base64 인코딩된 오디오 데이터. */
  data: string;

  /** 오디오 포맷. */
  format: "wav" | "mp3" | (string & {});
}
