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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (omitted arguments should call hello()). The case documents its purpose as: Verifies a zero-parameter Vercel tool succeeds when arguments are omitted.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Some tool-call paths hand `undefined` to the execute function for parameterless calls. The adapter must normalize the omission to `{}` before typia validation; otherwise a valid zero-parameter method fails before the controller can run. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (omitted arguments should call hello()) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_tool_omitted_arguments is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
