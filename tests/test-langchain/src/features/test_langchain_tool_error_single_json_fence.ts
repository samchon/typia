import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, ILlmFunction, IValidation } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { LlmJson } from "@typia/utils";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies a LangChain argument failure fences typia's feedback exactly once.
 *
 * `LlmJson.stringify` owns the markdown fence around its annotated JSON, so a
 * caller that wraps the return value in a second ```` ```json ```` fence hands
 * the model ```` ```json\n```json ```` — broken markdown, in the one payload
 * whose whole purpose is to be read back and corrected. Counting the fence is
 * what pins this, because asserting the feedback merely `includes("```json")`
 * passes with one fence or two; asserting the body is `LlmJson.stringify`'s
 * output verbatim additionally pins that the registrar wraps it in nothing at
 * all.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Invoke `add` with a non-numeric operand to force typia's feedback.
 * 3. Assert the message opens exactly one ```` ```json ```` fence.
 * 4. Assert the message is the registrar's title followed by `LlmJson.stringify`
 *    verbatim.
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

    TestValidator.equals(
      "argument feedback opens exactly one json fence",
      message.split("```json").length - 1,
      1,
    );

    const func: ILlmFunction | undefined = controller.application.functions.find(
      (f) => f.name === "add",
    );
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
