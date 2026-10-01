import { DynamicStructuredTool } from "@langchain/core/tools";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies langchain tool description against the native typia.llm.controller
 * output.
 *
 * The case builds its input in this file and asserts add tool should have
 * description, schema type should be object.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (add tool should have description; schema type should be object).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (add tool should have description; schema type should be object) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_tool_description is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_tool_description = async (): Promise<void> => {
  // 1. Create class-based controller
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());

  // 2. Convert to LangChain tools
  const tools: DynamicStructuredTool[] = toLangChainTools({
    controllers: [controller],
  });

  // 3. Find add tool and verify description
  const addTool = tools.find((t) => t.name === "add");
  if (!addTool) {
    throw new Error("Missing add tool");
  }

  // 4. Verify description is present (from JSDoc)
  TestEquality.equals(
    "add tool should have description",
    addTool.description.includes("Add two numbers"),
    true,
  );

  // 5. Verify schema is present
  const schema = addTool.schema;
  TestEquality.equals("schema type should be object", typeof schema, "object");
};
