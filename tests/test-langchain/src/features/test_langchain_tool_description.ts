import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that JSDoc summaries are propagated as LangChain tool descriptions.
 *
 * Locks the description-propagation branch of `LangChainToolsRegistrar`. The
 * `description` field of each `DynamicStructuredTool` must derive from the
 * JSDoc comment on the corresponding controller method; omitting or truncating
 * it would degrade LLM routing quality silently.
 *
 * 1. Create an `ILlmController<Calculator>` and convert to LangChain tools.
 * 2. Find the `add` tool and assert its description contains "Add two numbers".
 * 3. Assert the tool's `schema` property is a non-null object.
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
  TestValidator.equals(
    "add tool should have description",
    addTool.description.includes("Add two numbers"),
    true,
  );

  // 5. Verify schema is present
  const schema = addTool.schema;
  TestValidator.equals("schema type should be object", typeof schema, "object");
};
