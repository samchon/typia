import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

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
    TestValidator.equals("number of tools", tools.length, 4);

    // 4. Find specific tools
    const addTool = tools.find((t) => t.name === "calculator_add");
    const subtractTool = tools.find((t) => t.name === "calculator_subtract");
    const multiplyTool = tools.find((t) => t.name === "calculator_multiply");
    const divideTool = tools.find((t) => t.name === "calculator_divide");

    if (!addTool || !subtractTool || !multiplyTool || !divideTool) {
      throw new Error("Missing expected tools");
    }

    // 5. Test add function via tool.invoke
    const addResult = await addTool.invoke({ x: 10, y: 5 });
    TestValidator.equals("add(10, 5)", addResult, "15");

    // 6. Test subtract function
    const subtractResult = await subtractTool.invoke({ x: 10, y: 3 });
    TestValidator.equals("subtract(10, 3)", subtractResult, "7");

    // 7. Test multiply function
    const multiplyResult = await multiplyTool.invoke({ x: 4, y: 7 });
    TestValidator.equals("multiply(4, 7)", multiplyResult, "28");

    // 8. Test divide function
    const divideResult = await divideTool.invoke({ x: 20, y: 4 });
    TestValidator.equals("divide(20, 4)", divideResult, "5");
  };
