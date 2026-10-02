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
 * @evidence contracts/testing.md#behavioral-verification Checks a native void controller advertises no outputSchema and executing reset returns exactly success:true without data.
 * @evidence contracts/testing.md#independent-expectations VoidController.reset returns undefined; an absent result schema and success-only wrapper follow the void-tool contract.
 * @evidence contracts/testing.md#distinguishing-cases Void absence is distinct from typed result wrappers exercised by tool_output_schema; this case does not assert side effects of the empty reset method.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_tool_void_result in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The actual native producer emits controller or structured-output metadata consumed by the public Vercel adapter. This retains a producer-to-adapter assembly check that handwritten metadata alone would not exercise.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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
