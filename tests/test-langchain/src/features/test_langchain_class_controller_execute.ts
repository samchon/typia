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
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (number of tools; add(10, 5); subtract(10, 3); multiply(4, 7); divide(20, 4)).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (number of tools; add(10, 5); subtract(10, 3); multiply(4, 7); divide(20, 4)) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_class_controller_execute is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
