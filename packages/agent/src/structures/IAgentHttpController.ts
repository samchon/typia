import { IHttpConnection, IHttpLlmApplication } from "@typia/interface";

import { IAgentHttpExecuteProps } from "./IAgentHttpExecuteProps";

/**
 * OpenAPI/HTTP backend controller — REST 백엔드 전체를 그 OpenAPI 문서
 * (`HttpLlm.application`)로부터 function으로 바꾼다. HTTP 요청을 보내 실행한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentHttpController {
  /** 프로토콜 판별자. */
  protocol: "http";

  /** Controller 식별자. */
  name: string;

  /** `HttpLlm.application({ document })`로 생성한 function 스키마. */
  application: IHttpLlmApplication;

  /** 실제 요청을 보낼 connection(host + headers). */
  connection: IHttpConnection;

  /** 기본 fetch 기반 실행기를 덮어쓰는 선택적 override. */
  execute?:
    | ((next: IAgentHttpExecuteProps) => Promise<unknown> | unknown)
    | undefined;
}
