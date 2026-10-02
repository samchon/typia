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
 * @evidence contracts/testing.md#behavioral-verification SDK toJsonSchema and convertToOpenAITool preserve reflected parameter data, including authored x/y properties and required membership.
 * @evidence contracts/testing.md#independent-expectations Schema equality compares conversion output to its actual producer input and establishes propagation, not independent reflection correctness. Authored x/y presence and required membership are independent checks.
 * @evidence contracts/testing.md#distinguishing-cases Two public SDK conversion paths are checked; full native schema correctness and invocation verdicts are owned elsewhere.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_tool_model_facing_schema through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary SDK toJsonSchema and convertToOpenAITool preserve reflected parameter data, including authored x/y properties and required membership. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Two public SDK conversion paths are checked; full native schema correctness and invocation verdicts are owned elsewhere. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
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
