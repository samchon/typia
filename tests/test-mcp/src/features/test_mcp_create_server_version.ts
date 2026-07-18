import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a class controller announces the fixed `"1.0.0"` handshake version.
 *
 * An HTTP controller can inherit OpenAPI `info.version`, but a class controller
 * has no inferred version source. When the caller omits an explicit version,
 * the handshake therefore preserves the backward-compatible `"1.0.0"` fallback
 * rather than announcing `undefined`.
 *
 * 1. Create a server over a class controller.
 * 2. Connect an SDK client through the public in-memory transport.
 * 3. Assert the initialize handshake announces the `"1.0.0"` fallback.
 */
export const test_mcp_create_server_version = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );
  const client: Client = new Client({ name: "version-test", version: "1.0" });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();

  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    TestValidator.equals(
      "class controller should announce the 1.0.0 default",
      client.getServerVersion(),
      { name: "greeter", version: "1.0.0" },
    );
  } finally {
    await Promise.allSettled([client.close(), server.close()]);
  }
};
