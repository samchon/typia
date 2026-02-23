import type { Tool } from "ai";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_class_controller_execute = async (): Promise<void> => {
  // 1. Create class-based controller using typia.llm.controller
  const controller: ILlmController<Calculator> = typia.llm.controller<Calculator>(
    "calculator",
    new Calculator(),
  );

  // 2. Convert to Vercel tools
  const tools: Record<string, Tool> = toVercelTools({
    controllers: [controller],
  });

  // 3. Test add function
  const addTool: Tool = tools["calculator_add"]!;
  const addResult: unknown = await addTool.execute!(
    { x: 10, y: 5 },
    { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("add(10, 5) should return 15", addResult, 15);

  // 4. Test subtract function
  const subtractTool: Tool = tools["calculator_subtract"]!;
  const subtractResult: unknown = await subtractTool.execute!(
    { x: 10, y: 3 },
    { toolCallId: "test-2", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("subtract(10, 3) should return 7", subtractResult, 7);

  // 5. Test multiply function
  const multiplyTool: Tool = tools["calculator_multiply"]!;
  const multiplyResult: unknown = await multiplyTool.execute!(
    { x: 4, y: 7 },
    { toolCallId: "test-3", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("multiply(4, 7) should return 28", multiplyResult, 28);

  // 6. Test divide function
  const divideTool: Tool = tools["calculator_divide"]!;
  const divideResult: unknown = await divideTool.execute!(
    { x: 20, y: 4 },
    { toolCallId: "test-4", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("divide(20, 4) should return 5", divideResult, 5);
};
