import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification The real SDK initialize exchange announces greeter version 2.3.4 from the explicit server option.
 * @evidence contracts/testing.md#independent-expectations The authored option and literal greeter identity define the expected handshake value.
 * @evidence contracts/testing.md#distinguishing-cases Explicit class version contrasts with the default 1.0.0 sibling handshake.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_create_server_explicit_version through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The real SDK initialize exchange announces greeter version 2.3.4 from the explicit server option. A public SDK Client and McpServer exchange initialize/tool messages through InMemoryTransport. Direct handler calls cannot establish SDK message admission or host response enforcement.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. All requests in this scenario reuse its configured SDK host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each connected host owns its application/options and paired transports. Requests within that host reuse the initialized connection; finally closes client and server with Promise.allSettled on success or failure.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Explicit class version contrasts with the default 1.0.0 sibling handshake. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
      TestEquality.equals(
        "explicit implementation version reaches the handshake",
        client.getServerVersion(),
        { name: "greeter", version: "2.3.4" },
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  };
