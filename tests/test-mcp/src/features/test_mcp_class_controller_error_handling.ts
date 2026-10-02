import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies MCP tool handler catches runtime errors and returns `isError: true`.
 *
 * Locks the error-catching branch of `McpControllerRegistrar.handleToolCall`.
 * When a tool's `execute` function throws (e.g. division by zero), the handler
 * must catch the error and return a well-formed `CallToolResult` with `isError:
 * true` and the error message as text content, rather than letting the
 * exception propagate and crash the MCP server.
 *
 * 1. Register a `Calculator` controller with the MCP server.
 * 2. Invoke the `divide` tool with `y: 0` to trigger a division-by-zero error.
 * 3. Assert the result has `isError: true`.
 * 4. Assert the text content contains the "Division by zero" error message.
 *
 * @evidence contracts/testing.md#behavioral-verification Calling reflected divide with y=0 returns isError true and text containing Division by zero.
 * @evidence contracts/testing.md#independent-expectations The Calculator fixture throws the authored division-by-zero message; the expected tool error flag follows the adapter execution-error contract.
 * @evidence contracts/testing.md#distinguishing-cases The thrown controller branch complements four successful arithmetic dispatches in class_controller_execute.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_class_controller_error_handling through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary Calling reflected divide with y=0 returns isError true and text containing Division by zero. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. The thrown controller branch complements four successful arithmetic dispatches in class_controller_execute. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_class_controller_error_handling =
  async (): Promise<void> => {
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());
    const mcpServer: McpServer = createMcpServer(controller);

    const rawServer: Server = mcpServer.server;
    const requestHandlers: Map<string, Function> = (rawServer as any)
      ._requestHandlers;
    const callHandler: Function = requestHandlers.get("tools/call")!;

    const result: CallToolResult = await callHandler(
      {
        method: "tools/call",
        params: {
          name: "divide",
          arguments: {
            x: 10,
            y: 0,
          },
        },
      },
      { signal: new AbortController().signal },
    );

    TestValidator.predicate(
      "result should have isError: true",
      () => result.isError === true,
    );
    TestValidator.predicate(
      "error should contain division by zero message",
      () =>
        result.content.some(
          (c) =>
            c.type === "text" &&
            (c as { type: "text"; text: string }).text.includes(
              "Division by zero",
            ),
        ),
    );
  };
