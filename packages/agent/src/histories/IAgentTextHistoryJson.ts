import { IAgentMessageContent } from "../structures/IAgentMessageContent";
import { IAgentHistoryBase } from "./IAgentHistoryBase";

/**
 * {@link IAgentTextHistory}의 직렬화 mirror.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTextHistoryJson extends IAgentHistoryBase<"text"> {
  role: "user" | "assistant";
  purpose: "request" | "answer" | "describe";
  content: string | IAgentMessageContent[];
}
