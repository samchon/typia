import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel class controller execute against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts add(10, 5) should return
 * 15, subtract(10, 3) should return 7, multiply(4, 7) should return 28,
 * divide(20, 4) should return 5.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (add(10, 5) should return 15; subtract(10, 3) should return 7; multiply(4, 7) should return 28; divide(20, 4) should return 5).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (add(10, 5) should return 15; subtract(10, 3) should return 7; multiply(4, 7) should return 28; divide(20, 4) should return 5) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_class_controller_execute is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_vercel_class_controller_execute = async (): Promise<void> => {
  // 1. Create class-based controller using typia.llm.controller
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());

  // 2. Convert to Vercel tools
  const tools: Record<string, Tool> = toVercelTools({
    controllers: [controller],
  });

  // 3. Test add function
  const addTool: Tool = tools["add"]!;
  const addResult: unknown = await addTool.execute!(
    { x: 10, y: 5 },
    { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
  );
  TestEquality.equals("add(10, 5) should return 15", addResult, {
    success: true,
    data: { value: 15 },
  });

  // 4. Test subtract function
  const subtractTool: Tool = tools["subtract"]!;
  const subtractResult: unknown = await subtractTool.execute!(
    { x: 10, y: 3 },
    { toolCallId: "test-2", messages: [], abortSignal: undefined as any },
  );
  TestEquality.equals("subtract(10, 3) should return 7", subtractResult, {
    success: true,
    data: { value: 7 },
  });

  // 5. Test multiply function
  const multiplyTool: Tool = tools["multiply"]!;
  const multiplyResult: unknown = await multiplyTool.execute!(
    { x: 4, y: 7 },
    { toolCallId: "test-3", messages: [], abortSignal: undefined as any },
  );
  TestEquality.equals("multiply(4, 7) should return 28", multiplyResult, {
    success: true,
    data: { value: 28 },
  });

  // 6. Test divide function
  const divideTool: Tool = tools["divide"]!;
  const divideResult: unknown = await divideTool.execute!(
    { x: 20, y: 4 },
    { toolCallId: "test-4", messages: [], abortSignal: undefined as any },
  );
  TestEquality.equals("divide(20, 4) should return 5", divideResult, {
    success: true,
    data: { value: 5 },
  });
};
