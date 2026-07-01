import { ILlmApplication } from "@typia/interface";

/**
 * 콜백 형태의 class controller 실행기({@link IAgentClassController.execute})에 전달되는 인자
 * 묶음. proxy / 원격 실행을 가능하게 한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentClassExecuteProps<Class extends object = any> {
  /** 대상 controller의 function calling application. */
  application: ILlmApplication<Class>;

  /** 호출 대상 함수의 schema. */
  function: ILlmApplication<Class>["functions"][number];

  /** 모델이 만든 인자. */
  arguments: Record<string, unknown>;
}
