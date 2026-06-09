import { IHttpConnection, IHttpLlmApplication } from "@typia/interface";

/**
 * 커스텀 HTTP 실행기({@link IAgentHttpController.execute})에 전달되는 인자 묶음.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentHttpExecuteProps {
  /** 대상 controller의 HTTP function calling application. */
  application: IHttpLlmApplication;

  /** 호출 대상 함수의 schema. */
  function: IHttpLlmApplication["functions"][number];

  /** 요청을 보낼 connection(host + headers). */
  connection: IHttpConnection;

  /** 모델이 만든 인자. */
  arguments: Record<string, unknown>;
}
