import { TestValidator } from "@nestia/e2e";
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

  TestValidator.equals("omitted arguments should call hello()", result, {
    success: true,
    data: { message: "Hello, world!" },
  });
};
