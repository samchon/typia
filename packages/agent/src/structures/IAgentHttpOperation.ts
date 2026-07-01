import { IHttpConnection, IHttpLlmFunction } from "@typia/interface";

import { IAgentOperationBase } from "./IAgentOperationBase";

/**
 * HTTP 엔드포인트로 뒷받침되는 operation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentHttpOperation extends IAgentOperationBase<"http"> {
  /** HTTP function 스키마(method/path/operation/route 포함). */
  function: IHttpLlmFunction;

  /** 요청을 보낼 connection. */
  connection: IHttpConnection;
}
