import { IAgentSystemHistory } from "./IAgentSystemHistory";
import { IAgentTextHistory } from "./IAgentTextHistory";
import { IAgentToolHistory } from "./IAgentToolHistory";

/**
 * 하나의 대화 사건의 live 기록 — agent 메모리의 단위.
 *
 * `@typia/agent`의 상태는 history 배열이며, 매 턴 (중립 메시지로 재구성되어) 재생된다 (agentica 모델).
 * live 형태는 런타임 객체를 참조할 수 있고, 직렬화 mirror는 {@link IAgentHistoryJson}이며 이것이
 * 영속화·재개({@link IAgentProps.histories}) 대상이다.
 *
 * `type`으로 판별된다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentHistory =
  | IAgentTextHistory
  | IAgentToolHistory
  | IAgentSystemHistory;
