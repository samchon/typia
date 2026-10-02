import { DynamicStructuredTool } from "@langchain/core/tools";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies langchain class controller execute against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts number of tools, add(10,
 * 5), subtract(10, 3), multiply(4, 7), divide(20, 4).
 *
 * 1. Generate a controller from the imported Calculator fixture.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Four reflected Calculator tools invoke actual methods and return authored arithmetic results 15, 7, 28 and 5 in success wrappers.
 * @evidence contracts/testing.md#independent-expectations Declared method population and literal arithmetic expectations are independent of emitted controller metadata.
 * @evidence contracts/testing.md#distinguishing-cases Four normal dispatches complement coercion, invalid-input and execution-error sibling cases.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_class_controller_execute through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Four reflected Calculator tools invoke actual methods and return authored arithmetic results 15, 7, 28 and 5 in success wrappers. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Four normal dispatches complement coercion, invalid-input and execution-error sibling cases. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_class_controller_execute =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to LangChain tools
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });

    // 3. Verify tools were created
    TestEquality.equals("number of tools", tools.length, 4);

    // 4. Find specific tools
    const addTool = tools.find((t) => t.name === "add");
    const subtractTool = tools.find((t) => t.name === "subtract");
    const multiplyTool = tools.find((t) => t.name === "multiply");
    const divideTool = tools.find((t) => t.name === "divide");

    if (!addTool || !subtractTool || !multiplyTool || !divideTool) {
      throw new Error("Missing expected tools");
    }

    // 5. Test add function via tool.invoke
    const addResult = await addTool.invoke({ x: 10, y: 5 });
    TestEquality.equals("add(10, 5)", addResult, {
      success: true,
      data: { value: 15 },
    });

    // 6. Test subtract function
    const subtractResult = await subtractTool.invoke({ x: 10, y: 3 });
    TestEquality.equals("subtract(10, 3)", subtractResult, {
      success: true,
      data: { value: 7 },
    });

    // 7. Test multiply function
    const multiplyResult = await multiplyTool.invoke({ x: 4, y: 7 });
    TestEquality.equals("multiply(4, 7)", multiplyResult, {
      success: true,
      data: { value: 28 },
    });

    // 8. Test divide function
    const divideResult = await divideTool.invoke({ x: 20, y: 4 });
    TestEquality.equals("divide(20, 4)", divideResult, {
      success: true,
      data: { value: 5 },
    });
  };
