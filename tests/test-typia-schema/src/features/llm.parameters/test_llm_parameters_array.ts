import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm parameters array against the native typia.llm.parameters output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, tags is array, tags items is string, scores is array,
 * scores items is number.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (is object; additionalProperties; tags is array; tags items is string; scores is array; scores items is number).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; tags is array; tags items is string; scores is array; scores items is number) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_array = (): void => {
  interface IInput {
    tags: string[];
    scores: number[];
    limited: string[] & tags.MinItems<1> & tags.MaxItems<10>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check tags
  const tagsSchema = params.properties["tags"];
  TestValidator.predicate("tags is array", () =>
    LlmTypeChecker.isArray(tagsSchema!),
  );
  if (LlmTypeChecker.isArray(tagsSchema!)) {
    TestValidator.predicate("tags items is string", () =>
      LlmTypeChecker.isString(tagsSchema.items),
    );
  }

  // check scores
  const scores = params.properties["scores"];
  TestValidator.predicate("scores is array", () =>
    LlmTypeChecker.isArray(scores!),
  );
  if (LlmTypeChecker.isArray(scores!)) {
    TestValidator.predicate("scores items is number", () =>
      LlmTypeChecker.isNumber(scores.items),
    );
  }

  // check limited array constraints
  const limited = params.properties["limited"];
  if (LlmTypeChecker.isArray(limited!)) {
    TestEquality.equals("minItems", limited.minItems, 1);
    TestEquality.equals("maxItems", limited.maxItems, 10);
  }
};
