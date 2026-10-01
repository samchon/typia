import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";

import { CalculatorApi } from "../structures/CalculatorApi";

/**
 * Verifies vercel http controller register against the behavior of the adapter
 * or utility under test.
 *
 * The case builds its input in this file and asserts tools count should match
 * controller functions, tool names should match function names, … should have
 * description, … should have inputSchema, … should have execute.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 5 assertions (tools count should match controller functions; tool names should match function names; … should have description; … should have inputSchema; … should have execute).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (tools count should match controller functions; tool names should match function names; … should have description; … should have inputSchema; … should have execute) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_http_controller_register is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
 */
export const test_vercel_http_controller_register = async (): Promise<void> => {
  // 1. Create a controller from a checked-in OpenAPI document
  const swagger: OpenApiV3_1.IDocument = CalculatorApi.document();
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "calculator",
    document: swagger,
    connection: { host: "http://localhost:3000" },
  });

  // 2. Convert to Vercel tools
  const tools: Record<string, Tool> = toVercelTools({
    controllers: [controller],
  });

  // 3. Verify tools are registered
  const toolNames: string[] = Object.keys(tools);
  TestEquality.equals(
    "tools count should match controller functions",
    toolNames.length,
    controller.application.functions.length,
  );

  // 4. Verify tool names match function names (no prefix by default)
  const funcNames = controller.application.functions.map((f) => f.name).sort();
  TestEquality.equals(
    "tool names should match function names",
    toolNames.sort(),
    funcNames,
  );

  // 5. Verify each tool has required properties
  for (const name of toolNames) {
    const tool: Tool = tools[name]!;
    TestValidator.predicate(
      `${name} should have description`,
      () => tool.description !== undefined,
    );
    TestValidator.predicate(
      `${name} should have inputSchema`,
      () => tool.inputSchema !== undefined,
    );
    TestValidator.predicate(
      `${name} should have execute`,
      () => typeof tool.execute === "function",
    );
  }
};
