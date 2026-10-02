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
 * @evidence contracts/testing.md#behavioral-verification The generated Greeter description reaches the SDK server instructions and contains Greeting service.
 * @evidence contracts/testing.md#independent-expectations The authored Greeter class JSDoc supplies the expected text independently of reflected metadata.
 * @evidence contracts/testing.md#distinguishing-cases Documented-class instruction presence is checked; absent-description and complete handshake text are not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_create_server_instructions through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The generated Greeter description reaches the SDK server instructions and contains Greeting service. The native-produced Greeter controller is registered by createMcpServer and the SDK server instructions are read directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Documented-class instruction presence is checked; absent-description and complete handshake text are not asserted here. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
