import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

import { CalculatorApi } from "../structures/CalculatorApi";

/**
 * Verifies an HTTP controller inherits the swagger `info.version` in the
 * handshake.
 *
 * An OpenAPI document is the one controller source with a natural version:
 * `HttpLlm.application()` preserves `info.version` onto
 * `IHttpLlmApplication.version`, and `createMcpServer` announces it as the MCP
 * `serverInfo.version`. A regression would pin every HTTP server to the
 * `"1.0.0"` class-controller default.
 *
 * 1. Build an HTTP controller from a document whose `info.version` is known.
 * 2. Connect an SDK client through the public in-memory transport.
 * 3. Assert the initialize handshake inherits the document version.
 */
export const test_mcp_http_controller_version = async (): Promise<void> => {
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "calculator",
    document: CalculatorApi.document(),
    connection: { host: "http://localhost:0" },
  });
  const server: McpServer = createMcpServer(controller);
  const client: Client = new Client({ name: "version-test", version: "1.0" });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();

  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    TestValidator.equals(
      "handshake version should mirror the document info.version",
      client.getServerVersion(),
      { name: "calculator", version: CalculatorApi.VERSION },
    );
  } finally {
    await Promise.allSettled([client.close(), server.close()]);
  }
};
