import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a `void`-returning tool reports success without structured output.
 *
 * `typia.llm.controller` allows a method to return `void`, and MCP tool results
 * must carry at least one content block. The handler must translate an
 * `undefined` result into a plain `"Success"` text and must not attach
 * `structuredContent` (there is no value to structure). A regression would
 * either return an empty, spec-invalid result or crash serializing
 * `undefined`.
 *
 * 1. Serve `Greeter.reset()`, a `void`-returning method.
 * 2. Call it through `tools/call`.
 * 3. Assert the result is not an error, its text is `"Success"`, and no
 *    `structuredContent` is present.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (void tool call is not an error; void result reports Success as text; void result carries no structuredContent). The case documents its purpose as: Verifies a `void`-returning tool reports success without structured output.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `typia.llm.controller` allows a method to return `void`, and MCP tool results must carry at least one content block. The handler must translate an `undefined` result into a plain `"Success"` text and must not attach `structuredContent` (there is no value to structure). A regression would either return an empty, spec-invalid result or crash serializing `undefined`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (void tool call is not an error; void result reports Success as text; void result carries no structuredContent) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_tool_void_result is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals(
    "void result reports Success as text",
    (result.content[0] as { text: string }).text,
    "Success",
  );
  TestValidator.predicate(
    "void result carries no structuredContent",
    result.structuredContent === undefined,
  );
};
