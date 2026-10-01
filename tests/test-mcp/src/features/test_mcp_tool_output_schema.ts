import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult, Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies tools ship `outputSchema` and `structuredContent` from the reflected
 * return type.
 *
 * `ILlmFunction.output` reflects the method's return type, and MCP structured
 * output maps onto it directly: `outputSchema` in `tools/list` and
 * `structuredContent` in `tools/call`. By default the result crosses the wire
 * once — no duplicate text copy. A regression would either degrade typed
 * results back to opaque text or resurrect the double payload.
 *
 * 1. Serve `Calculator` whose methods return `IResult` objects.
 * 2. Assert `tools/list` advertises `outputSchema` with the `value` property.
 * 3. Call `add` and assert `structuredContent` carries the typed result while
 *    `content` stays empty.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (add tool should advertise outputSchema with the value property; structuredContent should carry the typed result; content should stay empty without the opt-in text fallback). The case documents its purpose as: Verifies tools ship `outputSchema` and `structuredContent` from the reflected return type.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `ILlmFunction.output` reflects the method's return type, and MCP structured output maps onto it directly: `outputSchema` in `tools/list` and `structuredContent` in `tools/call`. By default the result crosses the wire once — no duplicate text copy. A regression would either degrade typed results back to opaque text or resurrect the double payload. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (add tool should advertise outputSchema with the value property; structuredContent should carry the typed result; content should stay empty without the opt-in text fallback) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_tool_output_schema is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_mcp_tool_output_schema = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Calculator>("calculator", new Calculator()),
  );

  const rawServer: Server = server.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;

  const listHandler: Function = requestHandlers.get("tools/list")!;
  const listed: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );
  const add: Tool | undefined = listed.tools.find(
    (tool: Tool) => tool.name === "add",
  );
  TestValidator.predicate(
    "add tool should advertise outputSchema with the value property",
    add !== undefined &&
      add.outputSchema !== undefined &&
      (add.outputSchema as { properties: Record<string, unknown> }).properties
        .value !== undefined,
  );

  const callHandler: Function = requestHandlers.get("tools/call")!;
  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "add", arguments: { x: 10, y: 5 } },
    },
    { signal: new AbortController().signal },
  );
  TestEquality.equals(
    "structuredContent should carry the typed result",
    result.structuredContent,
    { value: 15 },
  );
  TestEquality.equals(
    "content should stay empty without the opt-in text fallback",
    result.content,
    [],
  );
};
