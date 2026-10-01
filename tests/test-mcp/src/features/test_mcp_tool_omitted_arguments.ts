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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (call without arguments should not be an error; hello() should return the greeting). The case documents its purpose as: Verifies a zero-parameter tool succeeds when `arguments` is omitted.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The MCP spec makes `CallToolRequest.arguments` optional and clients omit it for parameterless tools, but validating the raw `undefined` fails even an empty object schema. The handler must normalize the omission to `{}` before validation; a regression makes every zero-parameter tool uncallable. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (call without arguments should not be an error; hello() should return the greeting) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_tool_omitted_arguments is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
