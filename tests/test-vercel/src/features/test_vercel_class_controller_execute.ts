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
 * @evidence contracts/testing.md#behavioral-verification Calls add, subtract, multiply and divide tools and compares each complete success wrapper to literal values 15,7,28 and5.
 * @evidence contracts/testing.md#independent-expectations Arithmetic follows the four handwritten Calculator methods; literals and the success/data wrapper do not depend on another generated validator.
 * @evidence contracts/testing.md#distinguishing-cases Four separate method dispatches and operands distinguish wiring errors; class_controller_validation and class_controller_error_handling own malformed arguments and zero-denominator rejection.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_execute in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Native metadata for four distinct Calculator methods is consumed by adapter dispatch and output validation. Literal arithmetic wrappers distinguish incorrect producer-to-method wiring; validation and exception siblings own the negative branches.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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
