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
 * @evidence contracts/testing.md#behavioral-verification The real SDK initialize exchange announces greeter with the class-controller default version 1.0.0.
 * @evidence contracts/testing.md#independent-expectations The literal class-controller default and authored controller name define the expected handshake identity.
 * @evidence contracts/testing.md#distinguishing-cases Default class version contrasts with explicit class version and inferred/overridden HTTP version siblings.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_create_server_version through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The real SDK initialize exchange announces greeter with the class-controller default version 1.0.0. A public SDK Client and McpServer exchange initialize/tool messages through InMemoryTransport. Direct handler calls cannot establish SDK message admission or host response enforcement.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. All requests in this scenario reuse its configured SDK host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each connected host owns its application/options and paired transports. Requests within that host reuse the initialized connection; finally closes client and server with Promise.allSettled on success or failure.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Default class version contrasts with explicit class version and inferred/overridden HTTP version siblings. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
