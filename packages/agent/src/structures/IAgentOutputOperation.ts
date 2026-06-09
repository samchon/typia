import { IAgentOperationBase } from "./IAgentOperationBase";

/**
 * Executor 없는 structured-output 대상 operation.
 *
 * Side-effect 함수 호출이 아니라 하나의 큰 typed payload를 생산해야 할 때 사용한다(token-ceiling
 * streaming use-case). 이 프로토콜에 바인딩된 {@link IAgentTool}은 incremental validation
 * 표면을 모두 노출하되, `execute()`는 validated 값 자체를 resolve한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentOutputOperation extends IAgentOperationBase<"output"> {}
