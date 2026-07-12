import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Inspector } from "../structures/Inspector";

/**
 * Verifies createMcpServer serves a lazily-constructed controller — the
 * `@ttsc/graph` adoption pattern.
 *
 * `@ttsc/graph` builds its resident graph only on the first tool call so a
 * large project cannot stall the handshake, and hangs its usage contract off
 * the interface JSDoc. createMcpServer must reflect that JSDoc into
 * `instructions` and list/serve the tool without ever touching the deferred
 * state until a call arrives — otherwise the inline server it replaces would
 * lose either the lazy build or the contract.
 *
 * 1. Build a controller whose executor defers its state behind a closure.
 * 2. Assert the class JSDoc reached the handshake instructions and that
 *    `tools/list` never triggered the closure.
 * 3. Invoke the tool and assert the closure ran exactly once with the result.
 */
export const test_mcp_create_server_lazy_controller =
  async (): Promise<void> => {
    let built: number = 0;
    const server: McpServer = createMcpServer(
      typia.llm.controller<Inspector>(
        "ttsc-graph",
        new Inspector(() => {
          ++built;
          return { value: 42 };
        }),
      ),
    );

    const raw: Server = server.server;
    const handlers: Map<string, Function> = (raw as any)._requestHandlers;

    TestValidator.predicate(
      "class JSDoc should reach the handshake instructions",
      ((raw as any)._instructions ?? "").includes("What This MCP Is"),
    );

    await handlers.get("tools/list")!(
      { method: "tools/list", params: {} },
      { signal: new AbortController().signal },
    );
    TestValidator.equals("tools/list must not build the state", built, 0);

    const result: CallToolResult = await handlers.get("tools/call")!(
      {
        method: "tools/call",
        params: { name: "inspect", arguments: { query: "depth" } },
      },
      { signal: new AbortController().signal },
    );
    TestValidator.equals("first call builds the state once", built, 1);
    TestValidator.equals(
      "call returns the reflected result",
      result.structuredContent,
      { answer: "depth=42" },
    );
  };
