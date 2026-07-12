import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies `textFallback: true` adds the serialized text copy next to
 * `structuredContent`.
 *
 * Structured results ship once by default. The MCP spec's backwards
 * compatibility recommendation — the same JSON serialized into a text block —
 * is an opt-in for servers whose clients ignore `outputSchema`. A regression
 * would strand those clients with an empty `content` array.
 *
 * 1. Serve `Calculator` with `textFallback: true`.
 * 2. Call `add` through tools/call.
 * 3. Assert `structuredContent` carries the typed result and the text block
 *    serializes the same object.
 */
export const test_mcp_tool_text_fallback_enabled = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Calculator>("calculator", new Calculator()),
    { textFallback: true },
  );

  const rawServer: Server = server.server;
  const callHandler: Function = (rawServer as any)._requestHandlers.get(
    "tools/call",
  )!;
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
    "text block should serialize the same object",
    JSON.parse((result.content[0] as { text: string }).text),
    { value: 15 },
  );
};
