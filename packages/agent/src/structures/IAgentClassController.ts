import { ILlmApplication } from "@typia/interface";

import { IAgentClassExecuteProps } from "./IAgentClassExecuteProps";

/**
 * TypeScript class-method controller — `typia.llm.application<Class>()`로 만든
 * function 스키마와, 그 메서드가 도는 인스턴스(또는 dispatch 콜백)를 묶는다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentClassController<Class extends object = any> {
  /** 프로토콜 판별자. */
  protocol: "class";

  /** Controller 식별자(함수명 중복 제거 시 namespace, operation에 노출). */
  name: string;

  /** `typia.llm.application<Class>()`로 생성한 function 스키마. */
  application: ILlmApplication<Class>;

  /**
   * 실행 대상.
   *
   * 메서드가 호출되는 class 인스턴스이거나, `(name, arguments)`를 값으로 dispatch 하는 콜백이다. 후자는
   * proxy와 원격 실행을 가능하게 한다.
   */
  execute:
    | Class
    | ((next: IAgentClassExecuteProps<Class>) => Promise<unknown> | unknown);
}
