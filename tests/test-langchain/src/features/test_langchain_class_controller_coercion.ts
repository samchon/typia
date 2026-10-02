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
 * @evidence contracts/testing.md#behavioral-verification The reflected add tool invoked with x="42", y=5 returns success data value 47.
 * @evidence contracts/testing.md#independent-expectations Authored operands and literal sum 47 establish coercion independently of reflection.
 * @evidence contracts/testing.md#distinguishing-cases Numeric-string acceptance complements invalid-argument rejection.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_class_controller_coercion through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary The reflected add tool invoked with x="42", y=5 returns success data value 47. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Numeric-string acceptance complements invalid-argument rejection. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
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
