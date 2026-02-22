import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_mcp_class_controller_execute = async (): Promise<void> => {
  // 1. Create class-based controller using typia.llm.controller
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());

  // 2. Create McpServer with tools capability
  const mcpServer: McpServer = new McpServer(
    {
      name: "test-server",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  // 3. Register controller
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: false,
  });

  // 4. Get tools/call handler
  const rawServer: Server = mcpServer.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;
  const callHandler: Function = requestHandlers.get("tools/call")!;

  // 5. Test add function
  const addResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "add",
        arguments: {
          x: 10,
          y: 5,
        },
      },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "add(10, 5) should return 15",
    (addResult.content[0] as { text: string }).text,
    "15",
  );

  // 6. Test subtract function
  const subtractResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "subtract",
        arguments: {
          x: 10,
          y: 3,
        },
      },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "subtract(10, 3) should return 7",
    (subtractResult.content[0] as { text: string }).text,
    "7",
  );

  // 7. Test multiply function
  const multiplyResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "multiply",
        arguments: {
          x: 4,
          y: 7,
        },
      },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "multiply(4, 7) should return 28",
    (multiplyResult.content[0] as { text: string }).text,
    "28",
  );

  // 8. Test divide function
  const divideResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "divide",
        arguments: {
          x: 20,
          y: 4,
        },
      },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "divide(20, 4) should return 5",
    (divideResult.content[0] as { text: string }).text,
    "5",
  );

  // 9. Test unknown tool returns error
  const unknownResult: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "unknown_tool",
        arguments: {},
      },
    },
    {
      signal: new AbortController().signal,
    },
  );
  TestValidator.equals(
    "unknown tool should return isError true",
    unknownResult.isError,
    true,
  );
  console.log(unknownResult);
};
