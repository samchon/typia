import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a zero-parameter tool succeeds when `arguments` is omitted.
 *
 * The MCP spec makes `CallToolRequest.arguments` optional and clients omit it
 * for parameterless tools, but validating the raw `undefined` fails even an
 * empty object schema. The handler must normalize the omission to `{}` before
 * validation; a regression makes every zero-parameter tool uncallable.
 *
 * 1. Serve `Greeter.hello()` — a method with no parameters — as a tool.
 * 2. Call `tools/call` without any `arguments` field.
 * 3. Assert the call succeeds and returns the greeting.
 *
 * @evidence contracts/testing.md#behavioral-verification The reflected zero-parameter hello tool accepts a request with no arguments and returns Hello, world! without a tool error.
 * @evidence contracts/testing.md#independent-expectations The authored Greeter method and zero-parameter declaration establish omission acceptance and the literal greeting.
 * @evidence contracts/testing.md#distinguishing-cases Missing arguments for a parameterless method contrasts with invalid required Calculator arguments in the validation sibling.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_omitted_arguments through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The reflected zero-parameter hello tool accepts a request with no arguments and returns Hello, world! without a tool error. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Missing arguments for a parameterless method contrasts with invalid required Calculator arguments in the validation sibling. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_tool_omitted_arguments = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );

  const rawServer: Server = server.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;
  const callHandler: Function = requestHandlers.get("tools/call")!;

  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "hello" },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.predicate(
    "call without arguments should not be an error",
    result.isError !== true,
  );
  TestEquality.equals(
    "hello() should return the greeting",
    result.structuredContent,
    { message: "Hello, world!" },
  );
};
