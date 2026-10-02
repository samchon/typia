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
 * @evidence contracts/testing.md#behavioral-verification The real SDK initialize exchange carries explicit 9.8.7 instead of the document version.
 * @evidence contracts/testing.md#independent-expectations The authored conflicting server option and document version define override precedence independently of adapter output.
 * @evidence contracts/testing.md#distinguishing-cases Explicit HTTP override contrasts with the inferred HTTP-version sibling handshake.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_http_controller_version_override through DynamicExecutor. The SDK host/protocol exchange is E2E even though this case needs no native transformer.
 * @evidence contracts/e2e.md#necessary-boundary The real SDK initialize exchange carries explicit 9.8.7 instead of the document version. A public SDK Client and McpServer exchange initialize/tool messages through InMemoryTransport. Direct handler calls cannot establish SDK message admission or host response enforcement.
 * @evidence contracts/e2e.md#shared-execution This case has no native typia call; the SDK connection is its real boundary. It currently shares the integration project with native-controller cases, so plugin preparation remains suite overhead rather than a semantic requirement of this case. All requests in this scenario reuse its configured SDK host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each connected host owns its application/options and paired transports. Requests within that host reuse the initialized connection; finally closes client and server with Promise.allSettled on success or failure.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Explicit HTTP override contrasts with the inferred HTTP-version sibling handshake. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
