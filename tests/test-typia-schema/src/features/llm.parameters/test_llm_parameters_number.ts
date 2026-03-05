import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

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
  TestValidator.equals("additionalProperties", params.additionalProperties, false);

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
    TestValidator.equals("minimum", ranged.minimum, 0);
    TestValidator.equals("maximum", ranged.maximum, 100);
  }

  // check exclusive
  const exclusive = params.properties["exclusive"];
  if (LlmTypeChecker.isNumber(exclusive!)) {
    TestValidator.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestValidator.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // check multipleOf
  const multiple = params.properties["multiple"];
  if (LlmTypeChecker.isNumber(multiple!)) {
    TestValidator.equals("multipleOf", multiple.multipleOf, 5);
  }
};
