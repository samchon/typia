import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies createMcpServer reflects the class JSDoc into `instructions`.
 *
 * The class JSDoc reflected onto `ILlmApplication.description` exists to feed
 * the MCP handshake `instructions`, and createMcpServer is the only thing that
 * wires it — a regression would silently ship servers without usage guidance.
 *
 * 1. Create a server from a documented class controller.
 * 2. Read the underlying server's handshake instructions.
 * 3. Assert they contain the controller class JSDoc.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (instructions should contain the class JSDoc). The case documents its purpose as: Verifies createMcpServer reflects the class JSDoc into `instructions`.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The class JSDoc reflected onto `ILlmApplication.description` exists to feed the MCP handshake `instructions`, and createMcpServer is the only thing that wires it — a regression would silently ship servers without usage guidance. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (instructions should contain the class JSDoc) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_create_server_instructions is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_mcp_create_server_instructions = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );
  const instructions: string | undefined = (server.server as any)._instructions;
  TestValidator.predicate(
    "instructions should contain the class JSDoc",
    instructions !== undefined && instructions.includes("Greeting service"),
  );
};
