import { IAgentOperation } from "../structures/IAgentOperation";
import { IAgentHistoryBase } from "./IAgentHistoryBase";

/**
 * 완료된 함수 호출의 history 기록: 인자 + 실행 결과.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentToolHistory extends IAgentHistoryBase<"tool"> {
  /** 호출된 operation(live 참조). */
  operation: IAgentOperation;

  /** Validated 인자. */
  arguments: Record<string, unknown>;

  /** 반환값(또는 `"output"` operation의 structured payload). */
  value: unknown;

  /** 실행 성공 여부. */
  success: boolean;
}
