import { DynamicStructuredTool } from "@langchain/core/tools";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies langchain class controller prefix against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts tool names with prefix,
 * tool names without prefix.
 *
 * 1. Generate a controller from the imported Calculator fixture.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification The same reflected four-method controller produces exact calculator-prefixed names when prefix is true and unprefixed names when false.
 * @evidence contracts/testing.md#independent-expectations Authored controller/method names and explicit Boolean options define both literal expected populations.
 * @evidence contracts/testing.md#distinguishing-cases Both prefix options differ along one naming axis; cross-controller collision behavior belongs to the namespace sibling.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_class_controller_prefix through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary The same reflected four-method controller produces exact calculator-prefixed names when prefix is true and unprefixed names when false. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Both prefix options differ along one naming axis; cross-controller collision behavior belongs to the namespace sibling. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_class_controller_prefix =
  async (): Promise<void> => {
    // 1. Create class-based controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Test with prefix: true
    const toolsWithPrefix: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
      prefix: true,
    });

    // Tools should be named calculator_add, calculator_subtract, etc.
    const toolNamesWithPrefix = toolsWithPrefix.map((t) => t.name).sort();
    TestEquality.equals("tool names with prefix", toolNamesWithPrefix, [
      "calculator_add",
      "calculator_divide",
      "calculator_multiply",
      "calculator_subtract",
    ]);

    // 3. Test with prefix: false
    const toolsWithoutPrefix: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
      prefix: false,
    });

    // Tools should be named add, subtract, etc.
    const toolNamesWithoutPrefix = toolsWithoutPrefix.map((t) => t.name).sort();
    TestEquality.equals("tool names without prefix", toolNamesWithoutPrefix, [
      "add",
      "divide",
      "multiply",
      "subtract",
    ]);
  };
