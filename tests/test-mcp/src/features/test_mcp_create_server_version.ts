import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies `options.version` reaches the MCP handshake `serverInfo`.
 *
 * The server version lives in {@link IMcpServerOptions} next to the other
 * optional behaviors, and it must land on the `Implementation` the SDK
 * announces during initialization. A regression would pin every server to the
 * `"1.0.0"` default no matter what the caller declares.
 *
 * 1. Create a server with `{ version: "2.5.0" }`.
 * 2. Assert the underlying SDK server's `serverInfo.version` is `"2.5.0"`.
 * 3. Create a server without options and assert the `"1.0.0"` default.
 */
export const test_mcp_create_server_version = async (): Promise<void> => {
  const explicit: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
    { version: "2.5.0" },
  );
  TestValidator.equals(
    "explicit version should reach serverInfo",
    ((explicit.server as any)._serverInfo as { version: string }).version,
    "2.5.0",
  );

  const defaulted: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );
  TestValidator.equals(
    "omitted version should default to 1.0.0",
    ((defaulted.server as any)._serverInfo as { version: string }).version,
    "1.0.0",
  );
};
