import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies calling an unknown tool raises an `InvalidParams` protocol error.
 *
 * The MCP spec classifies an unknown tool as a protocol error (JSON-RPC
 * `-32602`), not an in-band tool-execution error: unlike bad arguments, a model
 * cannot self-correct a call to a tool that does not exist, and the reference
 * `McpServer` throws `McpError` here too. The handler must therefore throw
 * `McpError(InvalidParams)`, which the low-level Server turns into the error
 * response — a regression returning `isError` content would misreport the
 * failure category.
 *
 * 1. Serve a `Calculator` controller and grab its tools/call handler.
 * 2. Call a tool name that isn't registered.
 * 3. Assert it throws `McpError` with code `InvalidParams` naming the tool.
 */
export const test_mcp_class_controller_unknown_tool =
  async (): Promise<void> => {
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());
    const mcpServer: McpServer = createMcpServer(controller);

    const rawServer: Server = mcpServer.server;
    const requestHandlers: Map<string, Function> = (rawServer as any)
      ._requestHandlers;
    const callHandler: Function = requestHandlers.get("tools/call")!;

    let caught: unknown = null;
    try {
      await callHandler(
        {
          method: "tools/call",
          params: { name: "nonExistentTool", arguments: {} },
        },
        { signal: new AbortController().signal },
      );
    } catch (error) {
      caught = error;
    }

    TestValidator.predicate(
      "unknown tool raises InvalidParams protocol error naming the tool",
      caught instanceof McpError &&
        caught.code === ErrorCode.InvalidParams &&
        caught.message.includes("nonExistentTool"),
    );
  };
