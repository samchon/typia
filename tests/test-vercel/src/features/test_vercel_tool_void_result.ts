import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (void tool does not advertise outputSchema; void tool remains successful). The case documents its purpose as: Verifies a true void Vercel tool remains a schema-free success.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Runtime `undefined` is invalid only when a reflected output exists. A method declared as `void` must keep the existing `{ success: true }` result and must not advertise a fabricated typed data branch. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (void tool does not advertise outputSchema; void tool remains successful) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_tool_void_result is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals("void tool remains successful", result, {
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
