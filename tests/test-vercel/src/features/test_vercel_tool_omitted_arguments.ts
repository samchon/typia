import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Greeter } from "../structures/Greeter";

/**
 * Verifies a zero-parameter Vercel tool succeeds when arguments are omitted.
 *
 * Some tool-call paths hand `undefined` to the execute function for
 * parameterless calls. The adapter must normalize the omission to `{}` before
 * typia validation; otherwise a valid zero-parameter method fails before the
 * controller can run.
 *
 * 1. Convert `Greeter.hello()` as a Vercel AI SDK tool.
 * 2. Execute it with an omitted arguments object.
 * 3. Assert the tool returns the greeting as a successful result.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes a native zero-parameter Greeter tool with undefined arguments and compares the complete successful greeting wrapper.
 * @evidence contracts/testing.md#independent-expectations Greeter.hello declares no parameters and returns the literal greeting, so omission must normalize to an empty argument object and preserve that output.
 * @evidence contracts/testing.md#distinguishing-cases Undefined argument omission is the boundary input; class_controller_execute covers ordinary populated arguments and class_controller_validation covers malformed required arguments.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_tool_omitted_arguments in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The actual native producer emits controller or structured-output metadata consumed by the public Vercel adapter. This retains a producer-to-adapter assembly check that handwritten metadata alone would not exercise.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_tool_omitted_arguments = async (): Promise<void> => {
  const tools: Record<string, Tool> = toVercelTools(
    typia.llm.controller<Greeter>("greeter", new Greeter()),
  );

  const result: unknown = await tools["hello"]!.execute!(undefined as any, {
    toolCallId: "test-1",
    messages: [],
    abortSignal: undefined as any,
  });

  TestEquality.equals("omitted arguments should call hello()", result, {
    success: true,
    data: { message: "Hello, world!" },
  });
};
