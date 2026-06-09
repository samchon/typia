/**
 * 멀티모달 메시지의 문서/파일 content part. URL 또는 인라인 데이터로 표현한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentFileContent {
  /** 판별자(discriminator). */
  type: "file";

  /** 파일 URL. */
  url?: string | undefined;

  /** Base64 인코딩된 인라인 데이터. */
  data?: string | undefined;

  /** 파일명. */
  name?: string | undefined;

  /** MIME 타입. */
  mediaType?: string | undefined;
}
