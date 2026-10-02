import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies `textFallback: true` adds the serialized text copy next to
 * `structuredContent`.
 *
 * Structured results ship once by default. The MCP spec's backwards
 * compatibility recommendation — the same JSON serialized into a text block —
 * is an opt-in for servers whose clients ignore `outputSchema`. A regression
 * would strand those clients with an empty `content` array.
 *
 * 1. Serve `Calculator` with `textFallback: true`.
 * 2. Call `add` through tools/call.
 * 3. Assert `structuredContent` carries the typed result and the text block
 *    serializes the same object.
 *
 * @evidence contracts/testing.md#behavioral-verification With textFallback true the reflected add result remains structured value 15 and the parsed text block represents the same authored object.
 * @evidence contracts/testing.md#independent-expectations The literal arithmetic result and opt-in duplicate-delivery contract supply the expected object independently of tool output.
 * @evidence contracts/testing.md#distinguishing-cases Enabled text fallback contrasts with structured-only sibling cases; text formatting or additional content-block population is not independently checked.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_text_fallback_enabled through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary With textFallback true the reflected add result remains structured value 15 and the parsed text block represents the same authored object. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Enabled text fallback contrasts with structured-only sibling cases; text formatting or additional content-block population is not independently checked. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_tool_text_fallback_enabled = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Calculator>("calculator", new Calculator()),
    { textFallback: true },
  );

  const rawServer: Server = server.server;
  const callHandler: Function = (rawServer as any)._requestHandlers.get(
    "tools/call",
  )!;
  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "add", arguments: { x: 10, y: 5 } },
    },
    { signal: new AbortController().signal },
  );
  TestEquality.equals(
    "structuredContent should carry the typed result",
    result.structuredContent,
    { value: 15 },
  );
  TestEquality.equals(
    "text block should serialize the same object",
    JSON.parse((result.content[0] as { text: string }).text),
    { value: 15 },
  );
};
