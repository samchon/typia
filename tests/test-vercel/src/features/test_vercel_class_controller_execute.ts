import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that class-controller tools execute correctly via the Vercel AI SDK.
 *
 * Locks the happy-path execution branch of `VercelToolsRegistrar` for
 * class-based controllers. Each `Calculator` method must be callable as a
 * Vercel `Tool`, and invoking it with valid arguments must return the expected
 * `{ success: true, data: { value } }` envelope.
 *
 * 1. Convert a `Calculator` controller to Vercel tools via `toVercelTools`.
 * 2. Invoke each of the four arithmetic tools with valid arguments.
 * 3. Assert each result equals the correct `{ success: true, data: { value } }`.
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
  TestValidator.equals("add(10, 5) should return 15", addResult, {
    success: true,
    data: { value: 15 },
  });

  // 4. Test subtract function
  const subtractTool: Tool = tools["subtract"]!;
  const subtractResult: unknown = await subtractTool.execute!(
    { x: 10, y: 3 },
    { toolCallId: "test-2", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("subtract(10, 3) should return 7", subtractResult, {
    success: true,
    data: { value: 7 },
  });

  // 5. Test multiply function
  const multiplyTool: Tool = tools["multiply"]!;
  const multiplyResult: unknown = await multiplyTool.execute!(
    { x: 4, y: 7 },
    { toolCallId: "test-3", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("multiply(4, 7) should return 28", multiplyResult, {
    success: true,
    data: { value: 28 },
  });

  // 6. Test divide function
  const divideTool: Tool = tools["divide"]!;
  const divideResult: unknown = await divideTool.execute!(
    { x: 20, y: 4 },
    { toolCallId: "test-4", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals("divide(20, 4) should return 5", divideResult, {
    success: true,
    data: { value: 5 },
  });
};
