import { IAgentEventBase } from "./IAgentEventBase";

/**
 * Ceiling-continuation이 수행됨(출력이 단일 completion을 초과).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentContinuationEvent extends IAgentEventBase<"continuation"> {
  /** 현재 답변 내 이 continuation의 1-based 인덱스. */
  index: number;

  /** 이를 trigger한 finish 사유(대개 `"length"`). */
  trigger: string;
}
