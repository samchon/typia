import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm parameters number against the native typia.llm.parameters
 * output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, basic is number, integer is integer type, minimum,
 * maximum.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (is object; additionalProperties; basic is number; integer is integer type; minimum; maximum).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; basic is number; integer is integer type; minimum; maximum) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_number is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_number = (): void => {
  interface IInput {
    basic: number;
    integer: number & tags.Type<"int32">;
    ranged: number & tags.Minimum<0> & tags.Maximum<100>;
    exclusive: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>;
    multiple: number & tags.MultipleOf<5>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check basic number
  const basic = params.properties["basic"];
  TestValidator.predicate("basic is number", () =>
    LlmTypeChecker.isNumber(basic!),
  );

  // check integer
  const integer = params.properties["integer"];
  TestValidator.predicate("integer is integer type", () =>
    LlmTypeChecker.isInteger(integer!),
  );

  // check ranged
  const ranged = params.properties["ranged"];
  if (LlmTypeChecker.isNumber(ranged!)) {
    TestEquality.equals("minimum", ranged.minimum, 0);
    TestEquality.equals("maximum", ranged.maximum, 100);
  }

  // check exclusive
  const exclusive = params.properties["exclusive"];
  if (LlmTypeChecker.isNumber(exclusive!)) {
    TestEquality.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestEquality.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // check multipleOf
  const multiple = params.properties["multiple"];
  if (LlmTypeChecker.isNumber(multiple!)) {
    TestEquality.equals("multipleOf", multiple.multipleOf, 5);
  }
};
