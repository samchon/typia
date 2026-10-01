import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IHttpLlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 1 assertion (handshake version should mirror the document info.version). The case documents its purpose as: Verifies an HTTP controller inherits the swagger `info.version` in the handshake.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: An OpenAPI document is the one controller source with a natural version: `HttpLlm.application()` preserves `info.version` onto `IHttpLlmApplication.version`, and `createMcpServer` announces it as the MCP `serverInfo.version`. A regression would pin every HTTP server to the `"1.0.0"` class-controller default. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (handshake version should mirror the document info.version) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_http_controller_version is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
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
    TestEquality.equals(
      "handshake version should mirror the document info.version",
      client.getServerVersion(),
      { name: "calculator", version: CalculatorApi.VERSION },
    );
  } finally {
    await Promise.allSettled([client.close(), server.close()]);
  }
};
