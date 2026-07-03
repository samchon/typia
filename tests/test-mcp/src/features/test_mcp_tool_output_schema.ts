import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult, Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies tools ship `outputSchema` and `structuredContent` from the reflected
 * return type.
 *
 * `ILlmFunction.output` reflects the method's return type, and MCP structured
 * output maps onto it directly: `outputSchema` in `tools/list` and
 * `structuredContent` alongside the text fallback in `tools/call`. A regression
 * would degrade every typed tool result back to opaque text.
 *
 * 1. Serve `Calculator` whose methods return `IResult` objects.
 * 2. Assert `tools/list` advertises `outputSchema` with the `value` property.
 * 3. Call `add` and assert `structuredContent` carries the typed result while the
 *    text block remains as fallback.
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
  TestValidator.equals(
    "structuredContent should carry the typed result",
    result.structuredContent,
    { value: 15 },
  );
  TestValidator.equals(
    "text content should remain as fallback",
    JSON.parse((result.content[0] as { text: string }).text),
    { value: 15 },
  );
};
