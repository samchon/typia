import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";

import { CalculatorApi } from "../../structures/CalculatorApi";

/**
 * Verifies langchain http controller standalone against the behavior of the
 * adapter or utility under test.
 *
 * The case builds its input in this file and asserts tools count should match
 * controller functions, tool … should exist, at least one tool should have
 * description.
 *
 * 1. Convert the imported CalculatorApi document into an HTTP controller.
 * 2. Assert the properties listed above.
 */
export const test_langchain_http_controller_standalone =
  async (): Promise<void> => {
    // 1. Create a controller from a checked-in OpenAPI document
    const swagger: OpenApiV3_1.IDocument = CalculatorApi.document();
    const controller: IHttpLlmController = HttpLlm.controller({
      name: "calculator",
      document: swagger,
      connection: { host: "http://localhost:3000" },
    });

    // 2. Convert to LangChain tools
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });

    // 3. Verify tools count matches controller functions
    TestEquality.equals(
      "tools count should match controller functions",
      tools.length,
      controller.application.functions.length,
    );

    // 4. Verify each tool has correct name (no prefix by default)
    for (const func of controller.application.functions) {
      const tool = tools.find((t) => t.name === func.name);
      TestValidator.predicate(
        `tool ${func.name} should exist`,
        () => tool !== undefined,
      );
    }

    // 5. Verify tools have descriptions from OpenAPI
    const toolWithDescription = tools.find((t) => t.description.length > 0);
    TestValidator.predicate(
      "at least one tool should have description",
      () => toolWithDescription !== undefined,
    );
  };
