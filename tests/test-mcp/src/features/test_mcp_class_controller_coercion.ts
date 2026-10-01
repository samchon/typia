import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (coerced call is not an error; coerced call returns the sum). The case documents its purpose as: Verifies MCP tool calls coerce loosely-typed arguments before dispatch.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: LLMs frequently emit numbers as strings (`"7"` instead of `7`). The registrar runs the shared `LlmJson.validateArguments` (coerce then validate), so such a call must succeed and execute with the corrected numeric types. This guards against a regression where the coercion step is dropped and the tool call is rejected — the exact degradation an inlined `func.validate(args)` suffers. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (coerced call is not an error; coerced call returns the sum) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_class_controller_coercion is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals(
    "coerced call returns the sum",
    result.structuredContent,
    { value: 7 },
  );
};
