import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { TicketSearch } from "../structures/TicketSearch";

/**
 * Verifies Markdown-bearing object results are exposed through
 * structuredContent.
 *
 * Locks the MCP structured-output path for controller methods that wrap raw
 * Markdown in an object to satisfy typia.llm's object-return rule. A regression
 * would leave clients with only an escaped JSON text rendering.
 *
 * 1. Serve a ticket search controller whose result object contains Markdown.
 * 2. Call `searchTickets` through tools/call.
 * 3. Assert `structuredContent` carries the original object and no text copy
 *    accompanies it by default.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (structuredContent should carry the Markdown wrapper object; content should stay empty without the opt-in text fallback). The case documents its purpose as: Verifies Markdown-bearing object results are exposed through structuredContent.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Locks the MCP structured-output path for controller methods that wrap raw Markdown in an object to satisfy typia.llm's object-return rule. A regression would leave clients with only an escaped JSON text rendering. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (structuredContent should carry the Markdown wrapper object; content should stay empty without the opt-in text fallback) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_tool_markdown_structured_content is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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

    TestEquality.equals(
      "structuredContent should carry the Markdown wrapper object",
      result.structuredContent,
      { content: markdown },
    );
    TestEquality.equals(
      "content should stay empty without the opt-in text fallback",
      result.content,
      [],
    );
  };
