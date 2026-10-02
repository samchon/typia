import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies each class method executes as a tool and returns its result.
 *
 * Locks the happy-path dispatch of the tools/call handler: the method named in
 * the request runs on the controller instance and its object return ships back
 * as `structuredContent`. A regression would misroute the call or drop the
 * computed value.
 *
 * 1. Serve a `Calculator` controller and grab its tools/call handler.
 * 2. Call add, subtract, multiply, and divide with concrete operands.
 * 3. Assert each returns the correct arithmetic result.
 *
 * @evidence contracts/testing.md#behavioral-verification The reflected add, subtract, multiply and divide handlers return structured values 15, 7, 28 and 5 for their authored operands.
 * @evidence contracts/testing.md#independent-expectations Literal arithmetic results follow the authored Calculator method contract independently of schema emission.
 * @evidence contracts/testing.md#distinguishing-cases Four registered successful operations complement unknown-name, invalid-input and controller-exception sibling cases.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_class_controller_execute through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The reflected add, subtract, multiply and divide handlers return structured values 15, 7, 28 and 5 for their authored operands. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Four registered successful operations complement unknown-name, invalid-input and controller-exception sibling cases. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_class_controller_execute = async (): Promise<void> => {
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());
  const mcpServer: McpServer = createMcpServer(controller);

  const rawServer: Server = mcpServer.server;
  const callHandler: Function = (rawServer as any)._requestHandlers.get(
    "tools/call",
  )!;

  const addResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "add", arguments: { x: 10, y: 5 } },
    },
    { signal: new AbortController().signal },
  );
  TestEquality.equals(
    "add(10, 5) should return 15",
    addResult.structuredContent,
    { value: 15 },
  );

  const subtractResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "subtract", arguments: { x: 10, y: 3 } },
    },
    { signal: new AbortController().signal },
  );
  TestEquality.equals(
    "subtract(10, 3) should return 7",
    subtractResult.structuredContent,
    { value: 7 },
  );

  const multiplyResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "multiply", arguments: { x: 4, y: 7 } },
    },
    { signal: new AbortController().signal },
  );
  TestEquality.equals(
    "multiply(4, 7) should return 28",
    multiplyResult.structuredContent,
    { value: 28 },
  );

  const divideResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "divide", arguments: { x: 20, y: 4 } },
    },
    { signal: new AbortController().signal },
  );
  TestEquality.equals(
    "divide(20, 4) should return 5",
    divideResult.structuredContent,
    { value: 5 },
  );
};
