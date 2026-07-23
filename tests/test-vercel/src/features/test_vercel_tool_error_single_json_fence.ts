import { TestValidator } from "@nestia/e2e";
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
    TestValidator.equals(
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
    TestValidator.equals(
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
