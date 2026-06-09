import { IAgentOperationBase } from "./IAgentOperationBase";

/**
 * MCP tool로 뒷받침되는 operation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentMcpOperation extends IAgentOperationBase<"mcp"> {
  /** 서버 tool을 호출하는 MCP client. */
  client: unknown;
}
