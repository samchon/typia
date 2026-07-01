import { IAgentSystemHistoryJson } from "./IAgentSystemHistoryJson";
import { IAgentTextHistoryJson } from "./IAgentTextHistoryJson";
import { IAgentToolHistoryJson } from "./IAgentToolHistoryJson";

/**
 * {@link IAgentHistory}의 직렬화 mirror — live 객체 없이 `JSON.stringify` 가능하며
 * {@link IAgentProps.histories}로 round-trip한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentHistoryJson =
  | IAgentTextHistoryJson
  | IAgentToolHistoryJson
  | IAgentSystemHistoryJson;
