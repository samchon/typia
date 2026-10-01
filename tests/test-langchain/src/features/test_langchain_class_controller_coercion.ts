import { DynamicStructuredTool } from "@langchain/core/tools";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies LangChain tool calls coerce loosely-typed arguments before dispatch.
 *
 * LLMs frequently emit numbers as strings (`"42"` instead of `42`), so the
 * registrar runs the shared `LlmJson.validateArguments` (coerce, then validate)
 * and dispatches its coerced `data`. That coercion is unreachable whenever
 * LangChain validates the registered `schema` itself, because
 * `@cfworker/json-schema` rejects the string before the tool body runs and
 * never coerces. `@typia/mcp` and `@typia/vercel` both accept this exact input;
 * this pins `@typia/langchain` to the same answer.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Invoke `add` with a stringified operand `{ x: "42", y: 5 }`.
 * 3. Assert the call executes and returns the computed `47`.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (stringified operand is coerced and executed). The case documents its purpose as: Verifies LangChain tool calls coerce loosely-typed arguments before dispatch.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: LLMs frequently emit numbers as strings (`"42"` instead of `42`), so the registrar runs the shared `LlmJson.validateArguments` (coerce, then validate) and dispatches its coerced `data`. That coercion is unreachable whenever LangChain validates the registered `schema` itself, because `@cfworker/json-schema` rejects the string before the tool body runs and never coerces. `@typia/mcp` and `@typia/vercel` both accept this exact input; this pins `@typia/langchain` to the same answer. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (stringified operand is coerced and executed) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_class_controller_coercion is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_class_controller_coercion =
  async (): Promise<void> => {
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });
    const addTool: DynamicStructuredTool | undefined = tools.find(
      (t) => t.name === "add",
    );
    if (addTool === undefined) throw new Error("Missing add tool");

    const result: unknown = await addTool.invoke({ x: "42", y: 5 });
    TestEquality.equals("stringified operand is coerced and executed", result, {
      success: true,
      data: { value: 47 },
    });
  };
