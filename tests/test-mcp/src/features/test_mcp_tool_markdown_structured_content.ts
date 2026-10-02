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
 * @evidence contracts/testing.md#behavioral-verification The reflected TicketSearch call returns the exact authored Markdown wrapper in structuredContent and no text-fallback content.
 * @evidence contracts/testing.md#independent-expectations The authored Markdown fixture and disabled fallback contract define the expected object and empty content array.
 * @evidence contracts/testing.md#distinguishing-cases Markdown-bearing structured data without fallback complements ordinary structured output and enabled fallback siblings.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_markdown_structured_content through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The reflected TicketSearch call returns the exact authored Markdown wrapper in structuredContent and no text-fallback content. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Markdown-bearing structured data without fallback complements ordinary structured output and enabled fallback siblings. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
