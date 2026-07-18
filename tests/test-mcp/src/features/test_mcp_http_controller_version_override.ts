import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

import { CalculatorApi } from "../structures/CalculatorApi";

/**
 * Verifies an explicit implementation version overrides OpenAPI inference.
 *
 * OpenAPI `info.version` remains the useful default for an HTTP controller, but
 * it describes the served API rather than necessarily the deployed MCP server.
 * A host-supplied implementation identity must therefore take precedence.
 *
 * 1. Build an HTTP controller whose document carries a known API version.
 * 2. Create the MCP server with a different explicit implementation version.
 * 3. Assert the public initialize handshake announces the explicit version.
 */
export const test_mcp_http_controller_version_override =
  async (): Promise<void> => {
    const controller: IHttpLlmController = HttpLlm.controller({
      name: "calculator",
      document: CalculatorApi.document(),
      connection: { host: "http://localhost:0" },
    });
    const server: McpServer = createMcpServer(controller, {
      version: "9.8.7",
    });
    const client: Client = new Client({ name: "version-test", version: "1.0" });
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    try {
      await server.connect(serverTransport);
      await client.connect(clientTransport);
      TestValidator.equals(
        "explicit version overrides OpenAPI info.version",
        client.getServerVersion(),
        { name: "calculator", version: "9.8.7" },
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  };
