import { DynamicStructuredTool } from "@langchain/core/tools";
import { convertToOpenAITool } from "@langchain/core/utils/function_calling";
import { toJsonSchema } from "@langchain/core/utils/json_schema";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, ILlmFunction } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies a LangChain tool still shows the model typia's parameters schema.
 *
 * A LangChain tool's `schema` is read for two different purposes: LangChain
 * validates arguments against it, and `toJsonSchema` turns it into the
 * parameters the model is shown. Because typia validates arguments itself, the
 * registrar declines the first role by registering Standard JSON Schema — and
 * the whole point of that shape is that it does not cost the second. Nothing
 * else asserts the model-facing artifact, so a regression that traded the
 * schema away to reclaim validation would leave the model calling tools blind,
 * with every other test still green.
 *
 * 1. Build a class controller and convert it to LangChain tools.
 * 2. Assert `toJsonSchema` yields typia's parameters document unchanged.
 * 3. Assert the OpenAI tool definition LangChain sends carries the same document,
 *    with the properties and required list the model needs.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (toJsonSchema yields typia's parameters unchanged; the tool definition sent to the model carries typia's parameters; the model is still shown both operands and their requirement). The case documents its purpose as: Verifies a LangChain tool still shows the model typia's parameters schema.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A LangChain tool's `schema` is read for two different purposes: LangChain validates arguments against it, and `toJsonSchema` turns it into the parameters the model is shown. Because typia validates arguments itself, the registrar declines the first role by registering Standard JSON Schema — and the whole point of that shape is that it does not cost the second. Nothing else asserts the model-facing artifact, so a regression that traded the schema away to reclaim validation would leave the model calling tools blind, with every other test still green. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (toJsonSchema yields typia's parameters unchanged; the tool definition sent to the model carries typia's parameters; the model is still shown both operands and their requirement) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_tool_model_facing_schema is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_tool_model_facing_schema =
  async (): Promise<void> => {
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });
    const addTool: DynamicStructuredTool | undefined = tools.find(
      (t) => t.name === "add",
    );
    const func: ILlmFunction | undefined =
      controller.application.functions.find((f) => f.name === "add");
    if (addTool === undefined) throw new Error("Missing add tool");
    if (func === undefined) throw new Error("Missing add function");

    TestEquality.equals(
      "toJsonSchema yields typia's parameters unchanged",
      toJsonSchema(addTool.schema),
      func.parameters,
    );

    const definition = convertToOpenAITool(addTool);
    TestEquality.equals(
      "the tool definition sent to the model carries typia's parameters",
      definition.function.parameters,
      func.parameters,
    );
    TestValidator.predicate(
      "the model is still shown both operands and their requirement",
      () => {
        const parameters = definition.function.parameters as {
          properties?: Record<string, unknown>;
          required?: string[];
        };
        return (
          parameters.properties?.x !== undefined &&
          parameters.properties?.y !== undefined &&
          parameters.required?.includes("x") === true &&
          parameters.required?.includes("y") === true
        );
      },
    );
  };
