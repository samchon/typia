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
 * @evidence contracts/testing.md#behavioral-verification Reflected Calculator arguments "3" and "4" are coerced and dispatched to add, returning structured value 7 without an error.
 * @evidence contracts/testing.md#independent-expectations The authored string operands and literal sum 7 establish numeric coercion independently of emitted schemas.
 * @evidence contracts/testing.md#distinguishing-cases Numeric-string acceptance complements invalid argument rejection in class_controller_validation.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_class_controller_coercion through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary Reflected Calculator arguments "3" and "4" are coerced and dispatched to add, returning structured value 7 without an error. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Numeric-string acceptance complements invalid argument rejection in class_controller_validation. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
