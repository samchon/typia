import { IAgentOperation } from "../structures/IAgentOperation";
import { IAgentHistoryBase } from "./IAgentHistoryBase";

/**
 * {@link IAgentToolHistory}의 직렬화 mirror — live operation 객체 대신 protocol과 이름만
 * 담는다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentToolHistoryJson extends IAgentHistoryBase<"tool"> {
  /** 출처 operation의 protocol. */
  protocol: IAgentOperation["protocol"];

  /** 출처 controller 이름. */
  controller: string;

  /** 함수 이름. */
  function: string;

  /** Validated 인자. */
  arguments: Record<string, unknown>;

  /** 반환값. */
  value: unknown;

  /** 실행 성공 여부. */
  success: boolean;
}
