import { IAgentHistoryBase } from "./IAgentHistoryBase";

/**
 * {@link IAgentSystemHistory}의 직렬화 mirror.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentSystemHistoryJson extends IAgentHistoryBase<"system"> {
  content: string;
}
