import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies runtime controller errors become model-readable tool results.
 *
 * LangChain should still throw `ToolInputParsingException` for invalid
 * arguments, but a valid tool call whose implementation throws is feedback for
 * the model, not an adapter crash. Returning the same failure object shape as
 * `@typia/vercel` keeps the tool-call loop recoverable.
 *
 * 1. Convert a `Calculator` controller and find the `divide` tool.
 * 2. Invoke it with valid arguments that trigger the controller's divide-by-zero
 *    branch.
 * 3. Assert the tool returns `{ success: false, error }` with the original
 *    message.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (runtime error should be returned as a failure object; typed undefined result should be returned as a failure object). The case documents its purpose as: Verifies runtime controller errors become model-readable tool results.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: LangChain should still throw `ToolInputParsingException` for invalid arguments, but a valid tool call whose implementation throws is feedback for the model, not an adapter crash. Returning the same failure object shape as `@typia/vercel` keeps the tool-call loop recoverable. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (runtime error should be returned as a failure object; typed undefined result should be returned as a failure object) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_class_controller_error_handling is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_class_controller_error_handling =
  async (): Promise<void> => {
    const tools: DynamicStructuredTool[] = toLangChainTools(
      typia.llm.controller<Calculator>("calculator", new Calculator()),
    );

    const divide: DynamicStructuredTool | undefined = tools.find(
      (tool) => tool.name === "divide",
    );
    if (divide === undefined) throw new Error("Missing divide tool");

    const result: unknown = await divide.invoke({ x: 10, y: 0 });
    const failure = result as { success?: boolean; error?: string };

    TestValidator.predicate(
      "runtime error should be returned as a failure object",
      () =>
        failure.success === false &&
        typeof failure.error === "string" &&
        failure.error.includes("Division by zero"),
    );

    const broken: DynamicStructuredTool[] = toLangChainTools(
      typia.llm.controller<BrokenOutput>("broken", new BrokenOutput()),
    );
    const read: DynamicStructuredTool | undefined = broken.find(
      (tool) => tool.name === "read",
    );
    if (read === undefined) throw new Error("Missing read tool");

    TestEquality.equals(
      "typed undefined result should be returned as a failure object",
      await read.invoke({}),
      {
        success: false,
        error:
          'Function "read" returned undefined despite declaring an output schema',
      },
    );
  };

class BrokenOutput {
  /** Read a typed result but violate it at runtime. */
  read(_: BrokenOutput.IProps): BrokenOutput.IResult {
    return undefined as any;
  }
}
namespace BrokenOutput {
  export interface IProps {}
  export interface IResult {
    value: number;
  }
}
