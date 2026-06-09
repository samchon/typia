import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies MCP tool handler returns `isError: true` for unknown tool names.
 *
 * Locks the unknown-tool fallback branch of `McpControllerRegistrar`'s
 * `tools/call` handler. When an LLM calls a tool name that doesn't exist in the
 * registry, the handler must return a well-formed `CallToolResult` with
 * `isError: true` and a descriptive message, rather than throwing or returning
 * undefined.
 *
 * 1. Register a `Calculator` controller with the MCP server.
 * 2. Invoke a non-existent tool name `"nonExistentTool"`.
 * 3. Assert the result has `isError: true`.
 * 4. Assert the text content contains `"Unknown tool: nonExistentTool"`.
 */
export const test_mcp_class_controller_unknown_tool =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Create McpServer with tools capability
    const mcpServer: McpServer = new McpServer(
      {
        name: "test-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      },
    );

    // 3. Register controller
    registerMcpControllers({
      server: mcpServer,
      controllers: [controller],
      preserve: false,
    });

    // 4. Get tools/call handler
    const rawServer: Server = mcpServer.server;
    const requestHandlers: Map<string, Function> = (rawServer as any)
      ._requestHandlers;
    const callHandler: Function = requestHandlers.get("tools/call")!;

    // 5. Call a non-existent tool
    const result: CallToolResult = await callHandler(
      {
        method: "tools/call",
        params: {
          name: "nonExistentTool",
          arguments: {},
        },
      },
      { signal: new AbortController().signal },
    );

    // 6. Verify the result is an error
    TestValidator.predicate(
      "result should have isError: true",
      () => result.isError === true,
    );

    // 7. Verify the error message references the unknown tool name
    TestValidator.predicate("error should contain unknown tool name", () =>
      result.content.some(
        (c) =>
          c.type === "text" &&
          (c as { type: "text"; text: string }).text ===
            "Unknown tool: nonExistentTool",
      ),
    );
  };
