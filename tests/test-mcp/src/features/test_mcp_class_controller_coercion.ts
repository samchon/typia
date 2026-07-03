import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies registerMcpControllers coerces loosely-typed arguments before
 * dispatch.
 *
 * LLMs frequently emit numbers as strings (`"7"` instead of `7`). The registrar
 * runs the shared `LlmJson.validateArguments` (coerce then validate), so such a
 * call must succeed and execute with the corrected numeric types. This guards
 * against a regression where the coercion step is dropped and the tool call is
 * rejected — the exact degradation an inlined `func.validate(args)` suffers.
 *
 * 1. Register a class controller and grab its tools/call handler.
 * 2. Invoke `add` with stringified operands `{ x: "3", y: "4" }`.
 * 3. Assert the call is not an error and returns the computed `7`.
 */
export const test_mcp_class_controller_coercion = async (): Promise<void> => {
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());

  const mcpServer: McpServer = new McpServer(
    { name: "test-server", version: "1.0.0" },
    { capabilities: { tools: {} } },
  );
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: false,
  });

  const rawServer: Server = mcpServer.server;
  const callHandler: Function = (rawServer as any)._requestHandlers.get(
    "tools/call",
  )!;

  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "add",
        arguments: { x: "3", y: "4" },
      },
    },
    { signal: new AbortController().signal },
  );

  TestValidator.predicate(
    "coerced call is not an error",
    () => result.isError !== true,
  );
  TestValidator.predicate("coerced call returns the sum", () =>
    result.content.some(
      (x) => x.type === "text" && x.text.includes('"value": 7'),
    ),
  );
};
