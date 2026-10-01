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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (result should have isError: true; error should contain division by zero message). The case documents its purpose as: Verifies MCP tool handler catches runtime errors and returns `isError: true`.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Locks the error-catching branch of `McpControllerRegistrar.handleToolCall`. When a tool's `execute` function throws (e.g. division by zero), the handler must catch the error and return a well-formed `CallToolResult` with `isError: true` and the error message as text content, rather than letting the exception propagate and crash the MCP server. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (result should have isError: true; error should contain division by zero message) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_class_controller_error_handling is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
