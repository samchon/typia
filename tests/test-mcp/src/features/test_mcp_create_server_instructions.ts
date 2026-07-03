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
