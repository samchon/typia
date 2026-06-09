import { IAgentOperationBase } from "./IAgentOperationBase";

/**
 * Class 메서드로 뒷받침되는 operation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentClassOperation extends IAgentOperationBase<"class"> {
  /** 메서드가 도는 인스턴스 또는 dispatch 콜백. */
  execute: object | ((...args: any[]) => unknown);
}
