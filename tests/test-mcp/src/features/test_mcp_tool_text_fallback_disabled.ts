import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult, Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies `textFallback: false` ships a structured result exactly once.
 *
 * By default a typed tool result crosses the wire twice — once as the
 * serialized text fallback and once as `structuredContent` — and a client that
 * caps tool-result size counts both copies, rejecting a payload at double its
 * real size. The opt-out must drop the text block while `structuredContent`
 * still carries the typed result, and must leave `outputSchema` advertisement
 * untouched.
 *
 * 1. Serve `Calculator` with `textFallback: false`.
 * 2. Assert `tools/list` still advertises `outputSchema` for `add`.
 * 3. Call `add` and assert `structuredContent` carries the typed result while
 *    `content` is empty.
 */
export const test_mcp_tool_text_fallback_disabled = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Calculator>("calculator", new Calculator()),
    { textFallback: false },
  );

  const rawServer: Server = server.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;

  const listHandler: Function = requestHandlers.get("tools/list")!;
  const listed: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );
  TestValidator.predicate(
    "add tool should still advertise outputSchema",
    listed.tools.find((tool: Tool) => tool.name === "add")?.outputSchema !==
      undefined,
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
    "content should omit the text fallback",
    result.content,
    [],
  );
};
