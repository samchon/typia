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
 *
 * @evidence contracts/testing.md#behavioral-verification Calling reflected add with non-numeric x returns isError true and the same rendered failure as the explicit typia.validate plus LlmJson.coerce reference path.
 * @evidence contracts/testing.md#independent-expectations The error flag and authored invalid operand are independent. Expected text is computed with the same native validator/coercion/rendering family, so matching text establishes feedback propagation and cannot independently detect a shared validation or rendering defect.
 * @evidence contracts/testing.md#distinguishing-cases Invalid numeric input contrasts with numeric-string coercion and valid arithmetic sibling cases; this case checks exact feedback agreement rather than a separately authored full report.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_class_controller_validation through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary Calling reflected add with non-numeric x returns isError true and the same rendered failure as the explicit typia.validate plus LlmJson.coerce reference path. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Invalid numeric input contrasts with numeric-string coercion and valid arithmetic sibling cases; this case checks exact feedback agreement rather than a separately authored full report. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
