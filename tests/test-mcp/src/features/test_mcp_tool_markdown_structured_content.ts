import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { TicketSearch } from "../structures/TicketSearch";

/**
 * Verifies Markdown-bearing object results are exposed through
 * structuredContent.
 *
 * Locks the MCP structured-output path for controller methods that wrap raw
 * Markdown in an object to satisfy typia.llm's object-return rule. A regression
 * would leave clients with only an escaped JSON text fallback.
 *
 * 1. Serve a ticket search controller whose result object contains Markdown.
 * 2. Call `searchTickets` through tools/call.
 * 3. Assert `structuredContent` carries the original object while text remains the
 *    backward-compatible serialized JSON fallback.
 */
export const test_mcp_tool_markdown_structured_content =
  async (): Promise<void> => {
    const server: McpServer = createMcpServer(
      typia.llm.controller<TicketSearch>("tickets", new TicketSearch()),
    );

    const rawServer: Server = server.server;
    const callHandler: Function = (rawServer as any)._requestHandlers.get(
      "tools/call",
    )!;
    const markdown: string =
      "# Ticket 123\nStatus: Open\n\nDescription: Payment failed";

    const result: CallToolResult = await callHandler(
      {
        method: "tools/call",
        params: { name: "searchTickets", arguments: { query: "payment" } },
      },
      { signal: new AbortController().signal },
    );

    TestValidator.equals(
      "structuredContent should carry the Markdown wrapper object",
      result.structuredContent,
      { content: markdown },
    );
    TestValidator.equals(
      "text content should remain the JSON fallback",
      JSON.parse((result.content[0] as { text: string }).text),
      { content: markdown },
    );
  };
