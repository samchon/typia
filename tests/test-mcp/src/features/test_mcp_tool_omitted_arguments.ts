import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
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
  TestValidator.equals(
    "hello() should return the greeting",
    JSON.parse((result.content[0] as { text: string }).text),
    { message: "Hello, world!" },
  );
};
