import { IAgentHistoryBase } from "./IAgentHistoryBase";

/**
 * 대화에 주입된 system/developer 지시의 history 기록.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentSystemHistory extends IAgentHistoryBase<"system"> {
  /** 지시 본문. */
  content: string;
}
