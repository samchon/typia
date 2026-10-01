import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies typia — not LangChain — rejects a class tool's invalid arguments.
 *
 * `toLangChainTools` promises that every tool call is validated by typia, and
 * that a failure returns `LlmJson.stringify` feedback the model can correct
 * itself from. LangChain's `StructuredTool.call` runs `@cfworker/json-schema`
 * against whatever `schema` a tool registers and throws before the tool body,
 * so registering a bare JSON Schema silently hands validation to LangChain and
 * reduces the feedback to its generic "Received tool input did not match
 * expected schema". Asserting only that `ToolInputParsingException` is thrown
 * cannot tell the two sources apart, so this pins the message instead: deleting
 * the registrar's typia validation must fail this test.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Invoke `add` with a non-numeric operand.
 * 3. Assert the throw carries typia's annotated feedback for `$input.x` and never
 *    LangChain's schema message.
 * 4. Assert valid arguments still execute.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (invalid arguments throw ToolInputParsingException; feedback comes from typia, not LangChain's JSON Schema validation; feedback is titled by the registrar; feedback annotates the offending property with typia's expected type; valid arguments execute). The case documents its purpose as: Verifies typia — not LangChain — rejects a class tool's invalid arguments.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `toLangChainTools` promises that every tool call is validated by typia, and that a failure returns `LlmJson.stringify` feedback the model can correct itself from. LangChain's `StructuredTool.call` runs `@cfworker/json-schema` against whatever `schema` a tool registers and throws before the tool body, so registering a bare JSON Schema silently hands validation to LangChain and reduces the feedback to its generic "Received tool input did not match expected schema". Asserting only that `ToolInputParsingException` is thrown cannot tell the two sources apart, so this pins the message instead: deleting the registrar's typia validation must fail this test. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (invalid arguments throw ToolInputParsingException; feedback comes from typia, not LangChain's JSON Schema validation; feedback is titled by the registrar; feedback annotates the offending property with typia's expected type; valid arguments execute) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_class_controller_validation is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_class_controller_validation =
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

    const error: unknown = await addTool
      .invoke({ x: "not a number", y: 5 })
      .then(() => undefined)
      .catch((exp: unknown) => exp);
    TestValidator.predicate(
      "invalid arguments throw ToolInputParsingException",
      () => error instanceof ToolInputParsingException,
    );

    const message: string = (error as Error).message;
    TestValidator.predicate(
      "feedback comes from typia, not LangChain's JSON Schema validation",
      () =>
        message.includes(
          "Received tool input did not match expected schema",
        ) === false,
    );
    TestValidator.predicate("feedback is titled by the registrar", () =>
      message.includes('Type errors in "add" arguments:'),
    );
    TestValidator.predicate(
      "feedback annotates the offending property with typia's expected type",
      () =>
        message.includes("// ❌") &&
        message.includes('"path":"$input.x"') &&
        message.includes('"expected":"number"'),
    );

    const valid: unknown = await addTool.invoke({ x: 10, y: 5 });
    TestEquality.equals("valid arguments execute", valid, {
      success: true,
      data: { value: 15 },
    });
  };
