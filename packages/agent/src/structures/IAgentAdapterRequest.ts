import { ILlmSchema } from "@typia/interface";

import { IAgentMessage } from "./IAgentMessage";

/**
 * {@link IAgentAdapter}에 보내는 중립 요청.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentAdapterRequest {
  /** 지금까지의 대화를 중립 메시지 형태로. */
  messages: IAgentMessage[];

  /**
   * 선택적 structured-output 힌트.
   *
   * Harness가 backend의 _native_ structured output을 원하고 adapter가
   * {@link IAgentAdapterCapabilities.structuredOutput}을 광고할 때 parameter schema를
   * 여기에 넘긴다. 그 외에는 harness가 그냥 텍스트를 streaming해 직접 파싱한다 — 이 라이브러리의 핵심.
   */
  response?: ILlmSchema.IParameters | undefined;

  /** Structured output 생성을 얼마나 강하게 유도할지(지원 시). */
  toolChoice?: "auto" | "required" | "none" | undefined;

  /** {@link IAgentExecution.abort}에서 연결된 abort 핸들. */
  abortSignal?: AbortSignal | undefined;

  /** Provider 고유 escape hatch(sampling 파라미터, 헤더 등). */
  options?: Record<string, unknown> | undefined;
}
