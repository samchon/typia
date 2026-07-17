import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies LangChain tool calls coerce loosely-typed arguments before dispatch.
 *
 * LLMs frequently emit numbers as strings (`"42"` instead of `42`), so the
 * registrar runs the shared `LlmJson.validateArguments` (coerce, then validate)
 * and dispatches its coerced `data`. That coercion is unreachable whenever
 * LangChain validates the registered `schema` itself, because
 * `@cfworker/json-schema` rejects the string before the tool body runs and never
 * coerces. `@typia/mcp` and `@typia/vercel` both accept this exact input; this
 * pins `@typia/langchain` to the same answer.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Invoke `add` with a stringified operand `{ x: "42", y: 5 }`.
 * 3. Assert the call executes and returns the computed `47`.
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
    TestValidator.equals(
      "stringified operand is coerced and executed",
      result,
      {
        success: true,
        data: { value: 47 },
      },
    );
  };
