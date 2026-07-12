import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies MCP tool calls coerce loosely-typed arguments before dispatch.
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

  const mcpServer: McpServer = createMcpServer(controller);

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
  TestValidator.equals(
    "coerced call returns the sum",
    result.structuredContent,
    { value: 7 },
  );
};
