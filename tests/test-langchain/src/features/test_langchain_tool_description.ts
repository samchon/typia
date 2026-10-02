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
 * @evidence contracts/testing.md#behavioral-verification The reflected add tool retains authored method prose and exposes an object-valued schema.
 * @evidence contracts/testing.md#independent-expectations Calculator JSDoc supplies Add two numbers independently of reflected output; typeof object checks schema presence only.
 * @evidence contracts/testing.md#distinguishing-cases Documented-tool description and schema presence are checked, while missing description and full schema content are outside this case.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_tool_description through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary The reflected add tool retains authored method prose and exposes an object-valued schema. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Documented-tool description and schema presence are checked, while missing description and full schema content are outside this case. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
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
