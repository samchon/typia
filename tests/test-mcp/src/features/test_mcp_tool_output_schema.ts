import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult, Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies tools ship `outputSchema` and `structuredContent` from the reflected
 * return type.
 *
 * `ILlmFunction.output` reflects the method's return type, and MCP structured
 * output maps onto it directly: `outputSchema` in `tools/list` and
 * `structuredContent` in `tools/call`. By default the result crosses the wire
 * once — no duplicate text copy. A regression would either degrade typed
 * results back to opaque text or resurrect the double payload.
 *
 * 1. Serve `Calculator` whose methods return `IResult` objects.
 * 2. Assert `tools/list` advertises `outputSchema` with the `value` property.
 * 3. Call `add` and assert `structuredContent` carries the typed result while
 *    `content` stays empty.
 *
 * @evidence contracts/testing.md#behavioral-verification The reflected add tool advertises a value output property, returns structured value 15 and produces no fallback text.
 * @evidence contracts/testing.md#independent-expectations The Calculator return declaration and literal sum 15 define the output property and data expectations.
 * @evidence contracts/testing.md#distinguishing-cases Declared-result advertisement and default structured-only delivery complement void-result omission and enabled fallback siblings; complete outputSchema equality is not asserted.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_output_schema through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The reflected add tool advertises a value output property, returns structured value 15 and produces no fallback text. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Declared-result advertisement and default structured-only delivery complement void-result omission and enabled fallback siblings; complete outputSchema equality is not asserted. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_tool_output_schema = async (): Promise<void> => {
  const server: McpServer = createMcpServer(
    typia.llm.controller<Calculator>("calculator", new Calculator()),
  );

  const rawServer: Server = server.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;

  const listHandler: Function = requestHandlers.get("tools/list")!;
  const listed: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );
  const add: Tool | undefined = listed.tools.find(
    (tool: Tool) => tool.name === "add",
  );
  TestValidator.predicate(
    "add tool should advertise outputSchema with the value property",
    add !== undefined &&
      add.outputSchema !== undefined &&
      (add.outputSchema as { properties: Record<string, unknown> }).properties
        .value !== undefined,
  );

  const callHandler: Function = requestHandlers.get("tools/call")!;
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
    "content should stay empty without the opt-in text fallback",
    result.content,
    [],
  );
};
