import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (class controller should announce the 1.0.0 default). The case documents its purpose as: Verifies a class controller announces the fixed `"1.0.0"` handshake version.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: An HTTP controller can inherit OpenAPI `info.version`, but a class controller has no inferred version source. When the caller omits an explicit version, the handshake therefore preserves the backward-compatible `"1.0.0"` fallback rather than announcing `undefined`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (class controller should announce the 1.0.0 default) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_create_server_version is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
    TestEquality.equals(
      "class controller should announce the 1.0.0 default",
      client.getServerVersion(),
      { name: "greeter", version: "1.0.0" },
    );
  } finally {
    await Promise.allSettled([client.close(), server.close()]);
  }
};
