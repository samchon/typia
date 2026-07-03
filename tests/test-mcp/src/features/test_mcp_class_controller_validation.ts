import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, IValidation } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { LlmJson } from "@typia/utils";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies an invalid tool call returns typia's feedback as an in-band error.
 *
 * Locks the validation-failure branch of the tools/call handler. When the
 * arguments don't match the reflected schema, the tool must return BOTH
 * `isError: true` and the typia error text (from `LlmJson.stringify`): the
 * protocol flag tells the client the call failed, and the text lets the model
 * see why and self-correct. Dropping either half silently breaks the feedback
 * loop, so both are asserted.
 *
 * 1. Serve a `Calculator` controller and grab its tools/call handler.
 * 2. Call `add` with a non-numeric `x`.
 * 3. Assert the result is an error carrying the exact typia failure message.
 */
export const test_mcp_class_controller_validation = async (): Promise<void> => {
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
      params: { name: "add", arguments: { x: "not a number", y: 5 } },
    },
    { signal: new AbortController().signal },
  );

  const expected: IValidation = typia.validate<Calculator.IProps>(
    LlmJson.coerce(
      { x: "not a number", y: 5 },
      controller.application.functions.find((f) => f.name === "add")!
        .parameters,
    ),
  );
  if (expected.success === true)
    throw new Error("Expected validation to fail, but it succeeded.");
  const message: string = LlmJson.stringify(expected);

  TestValidator.predicate(
    "validation failure is an in-band error with typia's feedback",
    () =>
      result.isError === true &&
      result.content.some((x) => x.type === "text" && x.text === message),
  );
};
