import { IAgentTokenUsage } from "../structures/IAgentTokenUsage";
import { IAgentEventBase } from "./IAgentEventBase";
import { IAgentEventSource } from "./IAgentEventSource";

/**
 * 보고된 usage를 담은, 완료된 adapter 응답.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentResponseEvent extends IAgentEventBase<"response"> {
  source: IAgentEventSource;
  usage: IAgentTokenUsage;
  finishReason: string;
}
