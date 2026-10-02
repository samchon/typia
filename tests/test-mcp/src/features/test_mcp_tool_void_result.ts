import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a `void`-returning tool reports success without structured output.
 *
 * `typia.llm.controller` allows a method to return `void`, and MCP tool results
 * must carry at least one content block. The handler must translate an
 * `undefined` result into a plain `"Success"` text and must not attach
 * `structuredContent` (there is no value to structure). A regression would
 * either return an empty, spec-invalid result or crash serializing
 * `undefined`.
 *
 * 1. Serve `Greeter.reset()`, a `void`-returning method.
 * 2. Call it through `tools/call`.
 * 3. Assert the result is not an error, its text is `"Success"`, and no
 *    `structuredContent` is present.
 *
 * @evidence contracts/testing.md#behavioral-verification The reflected Greeter reset call succeeds, returns text Success and omits structuredContent.
 * @evidence contracts/testing.md#independent-expectations The authored void declaration and adapter void-result contract define Success and absence of structured data.
 * @evidence contracts/testing.md#distinguishing-cases Void success contrasts with declared object outputs and execution errors; a missing arguments field is retained in the request.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_void_result through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The reflected Greeter reset call succeeds, returns text Success and omits structuredContent. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Void success contrasts with declared object outputs and execution errors; a missing arguments field is retained in the request. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_tool_void_result = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );

  const rawServer: Server = server.server;
  const callHandler: Function = (rawServer as any)._requestHandlers.get(
    "tools/call",
  )!;

  const result: CallToolResult = await callHandler(
    { method: "tools/call", params: { name: "reset" } },
    { signal: new AbortController().signal },
  );

  TestValidator.predicate(
    "void tool call is not an error",
    result.isError !== true,
  );
  TestEquality.equals(
    "void result reports Success as text",
    (result.content[0] as { text: string }).text,
    "Success",
  );
  TestValidator.predicate(
    "void result carries no structuredContent",
    result.structuredContent === undefined,
  );
};
