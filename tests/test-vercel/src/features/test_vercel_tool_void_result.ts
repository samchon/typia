import { TestValidator } from "@nestia/e2e";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

/**
 * Verifies a true void Vercel tool remains a schema-free success.
 *
 * Runtime `undefined` is invalid only when a reflected output exists. A method
 * declared as `void` must keep the existing `{ success: true }` result and must
 * not advertise a fabricated typed data branch.
 *
 * 1. Reflect and convert a void class method.
 * 2. Assert it has no output schema.
 * 3. Execute it and assert the schema-free success result is preserved.
 */
export const test_vercel_tool_void_result = async (): Promise<void> => {
  const tools: Record<string, Tool> = toVercelTools(
    typia.llm.controller<VoidController>("void", new VoidController()),
  );
  const reset: Tool = tools["reset"]!;
  TestValidator.predicate(
    "void tool does not advertise outputSchema",
    reset.outputSchema === undefined,
  );
  const result: unknown = await reset.execute!(
    {},
    {
      toolCallId: "test-void-output",
      messages: [],
      abortSignal: undefined as any,
    },
  );
  TestValidator.equals("void tool remains successful", result, {
    success: true,
  });
};

class VoidController {
  /** Complete without a declared result. */
  reset(_: VoidController.IProps): void {}
}

namespace VoidController {
  export interface IProps {}
}
