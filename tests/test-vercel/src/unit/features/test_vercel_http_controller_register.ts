import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";

import { CalculatorApi } from "../../structures/CalculatorApi";

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
