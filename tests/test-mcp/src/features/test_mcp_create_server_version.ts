import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a class controller announces the fixed `"1.0.0"` handshake version.
 *
 * `IMcpServerOptions` intentionally carries no version knob: an HTTP controller
 * inherits the OpenAPI `info.version`, and a class controller has no version
 * source, so the handshake pins the `"1.0.0"` default. A regression would
 * announce `undefined` and break the SDK's `Implementation` contract.
 *
 * 1. Create a server over a class controller.
 * 2. Assert the underlying SDK server's `serverInfo.version` is `"1.0.0"`.
 */
export const test_mcp_create_server_version = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );
  TestValidator.equals(
    "class controller should announce the 1.0.0 default",
    ((server.server as any)._serverInfo as { version: string }).version,
    "1.0.0",
  );
};
