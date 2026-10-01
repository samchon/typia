import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";

import { CalculatorApi } from "../structures/CalculatorApi";

/**
 * Verifies langchain http controller standalone against the behavior of the
 * adapter or utility under test.
 *
 * The case builds its input in this file and asserts tools count should match
 * controller functions, tool … should exist, at least one tool should have
 * description.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 3 assertions (tools count should match controller functions; tool … should exist; at least one tool should have description).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (tools count should match controller functions; tool … should exist; at least one tool should have description) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_http_controller_standalone is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
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
