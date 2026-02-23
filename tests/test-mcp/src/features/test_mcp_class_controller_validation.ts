import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, IValidation } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import { stringifyValidationFailure } from "@typia/utils";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_mcp_class_controller_validation = async (): Promise<void> => {
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

  // 5. Test validation failure: wrong type (string instead of number)
  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "add",
        arguments: {
          x: "not a number",
          y: 5,
        },
      },
    },
    { signal: new AbortController().signal },
  );
  const expected: IValidation = typia.validate<Calculator.IProps>({
    x: "not a number",
    y: 5,
  });
  if (expected.success === true)
    throw new Error("Expected validation to fail, but it succeeded.");

  const message: string = stringifyValidationFailure(expected);
  TestValidator.predicate(
    "Validation failure",
    () =>
      expected.success === false &&
      result.content.some((x) => x.type === "text" && x.text === message),
  );
};
