import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a class-controller host can announce its implementation version.
 *
 * The controller owns reflected tools, but the application assembling the MCP
 * server owns the deployed implementation version. Without a public option,
 * every class-backed release announced the same `"1.0.0"` identity.
 *
 * 1. Create a class-backed server with an explicit implementation version.
 * 2. Connect an SDK client through the public in-memory transport.
 * 3. Assert the initialize handshake returns the controller name and supplied
 *    version.
 */
export const test_mcp_create_server_explicit_version =
  async (): Promise<void> => {
    const server: McpServer = createMcpServer(
      typia.llm.controller<Greeter>("greeter", new Greeter()),
      { version: "2.3.4" },
    );
    const client: Client = new Client({ name: "version-test", version: "1.0" });
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    try {
      await server.connect(serverTransport);
      await client.connect(clientTransport);
      TestValidator.equals(
        "explicit implementation version reaches the handshake",
        client.getServerVersion(),
        { name: "greeter", version: "2.3.4" },
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  };
