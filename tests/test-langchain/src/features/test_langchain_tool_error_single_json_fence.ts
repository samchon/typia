import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, ILlmFunction, IValidation } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies a LangChain argument failure fences typia's feedback exactly once.
 *
 * `LlmJson.stringify` owns the markdown fence around its annotated JSON, so a
 * caller that adds a second fence hands the model two opening JSON fences with
 * nothing between them — broken markdown, in the one payload whose whole
 * purpose is to be read back and corrected. Counting the fence is what pins
 * this: an assertion that the feedback merely contains an opening JSON fence
 * passes with one fence or two, and asserting the body equals
 * `LlmJson.stringify`'s output verbatim additionally pins that the registrar
 * wraps it in nothing at all.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Invoke `add` with a non-numeric operand to force typia's feedback.
 * 3. Assert the message opens exactly one JSON fence.
 * 4. Assert the message is the registrar's title followed by `LlmJson.stringify`
 *    verbatim.
 *
 * @evidence contracts/testing.md#behavioral-verification Invalid add arguments produce exactly one json fence and feedback equal to the unwrapped LlmJson.stringify failure with the registrar title.
 * @evidence contracts/testing.md#independent-expectations The literal fence count and title are independent; the expected report body uses the same validateArguments/stringify family, so agreement establishes propagation and cannot rule out a shared rendering or validation defect.
 * @evidence contracts/testing.md#distinguishing-cases A malformed numeric operand distinguishes failure formatting; valid argument dispatch belongs to the validation sibling.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_tool_error_single_json_fence through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Invalid add arguments produce exactly one json fence and feedback equal to the unwrapped LlmJson.stringify failure with the registrar title. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. A malformed numeric operand distinguishes failure formatting; valid argument dispatch belongs to the validation sibling. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_tool_error_single_json_fence =
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

    const args: object = { x: "not a number", y: 5 };
    const error: unknown = await addTool
      .invoke(args)
      .then(() => undefined)
      .catch((exp: unknown) => exp);
    if (error instanceof Error === false)
      throw new Error("Expected invalid arguments to be rejected.");
    const message: string = error.message;

    TestEquality.equals(
      "argument feedback opens exactly one json fence",
      message.split("```json").length - 1,
      1,
    );

    const func: ILlmFunction | undefined =
      controller.application.functions.find((f) => f.name === "add");
    if (func === undefined) throw new Error("Missing add function");
    const validation: IValidation<unknown> = LlmJson.validateArguments(
      func,
      args,
    );
    TestValidator.predicate(
      "argument feedback is LlmJson.stringify verbatim, wrapped in nothing",
      () =>
        validation.success === false &&
        message ===
          `Type errors in "add" arguments:\n\n${LlmJson.stringify(validation)}`,
    );
  };
