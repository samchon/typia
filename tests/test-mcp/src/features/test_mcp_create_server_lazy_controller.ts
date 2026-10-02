import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Inspector } from "../structures/Inspector";

/**
 * Verifies createMcpServer serves a lazily-constructed controller — the
 * `@ttsc/graph` adoption pattern.
 *
 * `@ttsc/graph` builds its resident graph only on the first tool call so a
 * large project cannot stall the handshake, and hangs its usage contract off
 * the interface JSDoc. createMcpServer must reflect that JSDoc into
 * `instructions` and list/serve the tool without ever touching the deferred
 * state until a call arrives — otherwise the inline server it replaces would
 * lose either the lazy build or the contract.
 *
 * 1. Build a controller whose executor defers its state behind a closure.
 * 2. Assert the class JSDoc reached the handshake instructions and that
 *    `tools/list` never triggered the closure.
 * 3. Invoke the tool and assert the closure ran exactly once with the result.
 *
 * @evidence contracts/testing.md#behavioral-verification Listing reflected Inspector tools leaves built=0; the first inspect call increments it once and returns depth=42, while class guidance reaches instructions.
 * @evidence contracts/testing.md#independent-expectations The authored counter and Inspector closure define 0, 1 and the literal result independently of generated controller metadata.
 * @evidence contracts/testing.md#distinguishing-cases Listing versus first execution distinguishes deferred construction; this case does not exercise a second call or concurrency.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_create_server_lazy_controller through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary Listing reflected Inspector tools leaves built=0; the first inspect call increments it once and returns depth=42, while class guidance reaches instructions. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Listing versus first execution distinguishes deferred construction; this case does not exercise a second call or concurrency. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_create_server_lazy_controller =
  async (): Promise<void> => {
    let built: number = 0;
    const server: McpServer = createMcpServer(
      typia.llm.controller<Inspector>(
        "ttsc-graph",
        new Inspector(() => {
          ++built;
          return { value: 42 };
        }),
      ),
    );

    const raw: Server = server.server;
    const handlers: Map<string, Function> = (raw as any)._requestHandlers;

    TestValidator.predicate(
      "class JSDoc should reach the handshake instructions",
      ((raw as any)._instructions ?? "").includes("What This MCP Is"),
    );

    await handlers.get("tools/list")!(
      { method: "tools/list", params: {} },
      { signal: new AbortController().signal },
    );
    TestEquality.equals("tools/list must not build the state", built, 0);

    const result: CallToolResult = await handlers.get("tools/call")!(
      {
        method: "tools/call",
        params: { name: "inspect", arguments: { query: "depth" } },
      },
      { signal: new AbortController().signal },
    );
    TestEquality.equals("first call builds the state once", built, 1);
    TestEquality.equals(
      "call returns the reflected result",
      result.structuredContent,
      { answer: "depth=42" },
    );
  };
