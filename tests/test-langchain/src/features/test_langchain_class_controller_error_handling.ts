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
 * @evidence contracts/testing.md#behavioral-verification Division by zero returns a failure containing the fixture exception; a declared object result returning undefined reports its authored registrar error.
 * @evidence contracts/testing.md#independent-expectations The Calculator thrown message and BrokenOutput declared-return contradiction define the two failure expectations.
 * @evidence contracts/testing.md#distinguishing-cases Controller throw and undefined declared output are different errors; successful arithmetic belongs to the execute sibling.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_class_controller_error_handling through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Division by zero returns a failure containing the fixture exception; a declared object result returning undefined reports its authored registrar error. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Controller throw and undefined declared output are different errors; successful arithmetic belongs to the execute sibling. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
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
