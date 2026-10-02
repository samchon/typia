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
 *
 * @evidence contracts/testing.md#behavioral-verification An absent nonExistentTool name throws an SDK McpError with ErrorCode.InvalidParams and the requested name.
 * @evidence contracts/testing.md#independent-expectations The SDK error type and enum supply protocol error identity; the absent authored name is independent of controller emission.
 * @evidence contracts/testing.md#distinguishing-cases Absent-name rejection contrasts with registered Calculator dispatch; this direct-handler probe does not assert a serialized protocol response.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_class_controller_unknown_tool through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary An absent nonExistentTool name throws an SDK McpError with ErrorCode.InvalidParams and the requested name. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Absent-name rejection contrasts with registered Calculator dispatch; this direct-handler probe does not assert a serialized protocol response. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
