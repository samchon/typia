import { ILlmApplication } from "@typia/interface";

/**
 * Model Context Protocol 서버 controller — MCP 서버의 tool을 그 client로 호출한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentMcpController {
  /** 프로토콜 판별자. */
  protocol: "mcp";

  /** Controller 식별자. */
  name: string;

  /** MCP 서버의 tool들을 기술하는 function 스키마. */
  application: ILlmApplication;

  /**
   * 서버 tool을 호출하는 MCP client.
   *
   * 타입 표면에 MCP SDK 의존을 두지 않기 위해 `unknown`으로 둔다. 구체 adapter가 좁힌다.
   */
  client: unknown;
}
