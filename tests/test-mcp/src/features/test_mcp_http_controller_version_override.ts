import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IHttpLlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 1 assertion (explicit version overrides OpenAPI info.version). The case documents its purpose as: Verifies an explicit implementation version overrides OpenAPI inference.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: OpenAPI `info.version` remains the useful default for an HTTP controller, but it describes the served API rather than necessarily the deployed MCP server. A host-supplied implementation identity must therefore take precedence. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (explicit version overrides OpenAPI info.version) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_http_controller_version_override is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
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
      TestEquality.equals(
        "explicit version overrides OpenAPI info.version",
        client.getServerVersion(),
        { name: "calculator", version: "9.8.7" },
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  };
