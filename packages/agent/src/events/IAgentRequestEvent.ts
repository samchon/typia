import { IAgentMessage } from "../structures/IAgentMessage";
import { IAgentEventBase } from "./IAgentEventBase";
import { IAgentEventSource } from "./IAgentEventSource";

/**
 * Adapter로 나간 요청(우리가 보낸 중립 메시지).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentRequestEvent extends IAgentEventBase<"request"> {
  source: IAgentEventSource;
  messages: IAgentMessage[];
}
