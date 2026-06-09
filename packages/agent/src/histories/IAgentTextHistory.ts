import { IAgentMessageContent } from "../structures/IAgentMessageContent";
import { IAgentHistoryBase } from "./IAgentHistoryBase";

/**
 * 사용자/assistant/describe 텍스트 메시지의 history 기록.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTextHistory extends IAgentHistoryBase<"text"> {
  /** 화자. */
  role: "user" | "assistant";

  /** Assistant는 `"answer"`/`"describe"`, 사용자는 `"request"`. */
  purpose: "request" | "answer" | "describe";

  /** 일반 텍스트, 또는 사용자 입력의 멀티모달 content. */
  content: string | IAgentMessageContent[];
}
