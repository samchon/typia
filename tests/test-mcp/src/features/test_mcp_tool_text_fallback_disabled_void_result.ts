import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies `textFallback: false` keeps the text block when nothing is
 * structured.
 *
 * The opt-out only suppresses the _duplicate_ copy of a result that also ships
 * as `structuredContent`. A `void`-returning method has no structured
 * representation, so its `"Success"` text is the sole payload — dropping it
 * under `textFallback: false` would return an empty, spec-invalid result.
 *
 * 1. Serve `Greeter.reset()`, a `void`-returning method, with `textFallback:
 *    false`.
 * 2. Call it through `tools/call`.
 * 3. Assert the result still reports `"Success"` as text and carries no
 *    `structuredContent`.
 */
export const test_mcp_tool_text_fallback_disabled_void_result =
  async (): Promise<void> => {
    const server: McpServer = createMcpServer(
      typia.llm.controller<Greeter>("greeter", new Greeter()),
      { textFallback: false },
    );

    const rawServer: Server = server.server;
    const callHandler: Function = (rawServer as any)._requestHandlers.get(
      "tools/call",
    )!;

    const result: CallToolResult = await callHandler(
      { method: "tools/call", params: { name: "reset" } },
      { signal: new AbortController().signal },
    );

    TestValidator.equals(
      "void result should keep Success as text",
      (result.content[0] as { text: string }).text,
      "Success",
    );
    TestValidator.predicate(
      "void result should carry no structuredContent",
      result.structuredContent === undefined,
    );
  };
