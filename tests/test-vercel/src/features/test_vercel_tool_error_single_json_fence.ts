import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies Vercel tool feedback fences typia's annotated JSON exactly once.
 *
 * `LlmJson.stringify` already wraps its output in a JSON fence, so a caller
 * that adds a second one hands the model two opening fences with nothing
 * between them. `VercelToolsRegistrar` formats that same result on two separate
 * paths — once for invalid arguments and once for an invalid output — and a
 * fence added back to either one is invisible to a check that merely looks for
 * an opening fence, which passes with one fence or two. Counting the fence on
 * both paths is what pins it.
 *
 * 1. Build a controller whose method both takes and returns a typed value.
 * 2. Force an argument failure and count the fences in its feedback.
 * 3. Force an output failure and count the fences in its feedback.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes malformed Calculator arguments and deliberately malformed OutputController results, then checks each feedback title and exactly one opening JSON fence.
 * @evidence contracts/testing.md#independent-expectations Both declared input/output types require numbers; counting the literal opening fence detects double wrapping while retaining the adapter-specific argument/output titles.
 * @evidence contracts/testing.md#distinguishing-cases Separate argument and result validation branches each carry one fence; helper failureOf requires an actual failure result before returning error text.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_tool_error_single_json_fence in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Native argument/output metadata reaches both adapter failure-formatting branches, and each must retain exactly one JSON opening fence. The basic validation case only checks fence presence, which cannot detect duplicate wrapping.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_tool_error_single_json_fence =
  async (): Promise<void> => {
    const calculator: Record<string, Tool> = toVercelTools(
      typia.llm.controller<Calculator>("calculator", new Calculator()),
    );
    const argumentError: string = await failureOf(calculator["add"]!, {
      x: "not a number",
      y: 5,
    });
    TestValidator.predicate("argument feedback is typia's", () =>
      argumentError.includes('Type errors in "add" arguments:'),
    );
    TestEquality.equals(
      "argument feedback opens exactly one json fence",
      countFences(argumentError),
      1,
    );

    const outputs: Record<string, Tool> = toVercelTools(
      typia.llm.controller<OutputController>("output", new OutputController()),
    );
    const outputError: string = await failureOf(outputs["read"]!, { seed: 1 });
    TestValidator.predicate("output feedback is typia's", () =>
      outputError.includes('Type errors in "read" output:'),
    );
    TestEquality.equals(
      "output feedback opens exactly one json fence",
      countFences(outputError),
      1,
    );
  };

class OutputController {
  /**
   * Read the stored value.
   *
   * @param input The lookup seed
   *
   * @returns The stored value
   */
  read(input: OutputController.IInput): OutputController.IResult {
    return { value: `not a number: ${input.seed}` } as never;
  }
}
namespace OutputController {
  export interface IInput {
    /** Lookup seed */
    seed: number;
  }
  export interface IResult {
    /** Stored value */
    value: number;
  }
}

const failureOf = async (tool: Tool, args: object): Promise<string> => {
  const result: unknown = await tool.execute!(args, {
    toolCallId: "test-fence",
    messages: [],
    abortSignal: undefined as any,
  });
  const failure = result as { success?: boolean; error?: string };
  if (failure.success !== false || typeof failure.error !== "string")
    throw new Error(
      `Expected a failure result, but got ${JSON.stringify(result)}`,
    );
  return failure.error;
};

const countFences = (text: string): number => text.split("```json").length - 1;
