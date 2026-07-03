import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a `void`-returning tool reports success without structured output.
 *
 * `typia.llm.controller` allows a method to return `void`, and MCP tool results
 * must carry at least one content block. The handler must translate an
 * `undefined` result into a plain `"Success"` text and must not attach
 * `structuredContent` (there is no value to structure). A regression would
 * either return an empty, spec-invalid result or crash serializing `undefined`.
 *
 * 1. Serve `Greeter.reset()`, a `void`-returning method.
 * 2. Call it through `tools/call`.
 * 3. Assert the result is not an error, its text is `"Success"`, and no
 *    `structuredContent` is present.
 */
export const test_mcp_tool_void_result = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );

  const rawServer: Server = server.server;
  const callHandler: Function = (rawServer as any)._requestHandlers.get(
    "tools/call",
  )!;

  const result: CallToolResult = await callHandler(
    { method: "tools/call", params: { name: "reset" } },
    { signal: new AbortController().signal },
  );

  TestValidator.predicate(
    "void tool call is not an error",
    result.isError !== true,
  );
  TestValidator.equals(
    "void result reports Success as text",
    (result.content[0] as { text: string }).text,
    "Success",
  );
  TestValidator.predicate(
    "void result carries no structuredContent",
    result.structuredContent === undefined,
  );
};
