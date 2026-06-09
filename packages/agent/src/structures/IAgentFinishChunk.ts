import { IAgentFinishReason } from "./IAgentFinishReason";
import { IAgentTokenUsage } from "./IAgentTokenUsage";

/**
 * Stop 사유와 보고된 usage를 담은 종료 chunk.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentFinishChunk {
  /** 판별자(discriminator). */
  type: "finish";

  /** Completion이 끝난 이유. */
  finishReason: IAgentFinishReason;

  /** Provider가 보고한 토큰 usage. */
  usage: IAgentTokenUsage;
}
