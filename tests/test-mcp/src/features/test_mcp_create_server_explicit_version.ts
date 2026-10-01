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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (explicit implementation version reaches the handshake). The case documents its purpose as: Verifies a class-controller host can announce its implementation version.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The controller owns reflected tools, but the application assembling the MCP server owns the deployed implementation version. Without a public option, every class-backed release announced the same `"1.0.0"` identity. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (explicit implementation version reaches the handshake) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_create_server_explicit_version is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
