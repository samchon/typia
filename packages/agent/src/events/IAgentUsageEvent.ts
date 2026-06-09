import { IAgentTokenUsage } from "../structures/IAgentTokenUsage";
import { IAgentEventBase } from "./IAgentEventBase";

/**
 * 누적 usage 갱신.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentUsageEvent extends IAgentEventBase<"usage"> {
  usage: IAgentTokenUsage;
}
