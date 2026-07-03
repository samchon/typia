import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies each class method executes as a tool and returns its result.
 *
 * Locks the happy-path dispatch of the tools/call handler: the method named in
 * the request runs on the controller instance and its object return is
 * serialized back as the tool result. A regression would misroute the call or
 * drop the computed value.
 *
 * 1. Serve a `Calculator` controller and grab its tools/call handler.
 * 2. Call add, subtract, multiply, and divide with concrete operands.
 * 3. Assert each returns the correct arithmetic result.
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
  TestValidator.equals(
    "add(10, 5) should return 15",
    JSON.parse((addResult.content[0] as { text: string }).text),
    { value: 15 },
  );

  const subtractResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "subtract", arguments: { x: 10, y: 3 } },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "subtract(10, 3) should return 7",
    JSON.parse((subtractResult.content[0] as { text: string }).text),
    { value: 7 },
  );

  const multiplyResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "multiply", arguments: { x: 4, y: 7 } },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "multiply(4, 7) should return 28",
    JSON.parse((multiplyResult.content[0] as { text: string }).text),
    { value: 28 },
  );

  const divideResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: { name: "divide", arguments: { x: 20, y: 4 } },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "divide(20, 4) should return 5",
    JSON.parse((divideResult.content[0] as { text: string }).text),
    { value: 5 },
  );
};
