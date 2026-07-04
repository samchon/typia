import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { toLangChainTools } from "@typia/langchain";
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

    TestValidator.equals(
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
