import { TestValidator } from "@nestia/e2e";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_schema_number = (): void => {
  const schema = typia.llm.schema<number>({});

  TestValidator.predicate("is number type", () => LlmTypeChecker.isNumber(schema));

  // integer type
  const integer = typia.llm.schema<number & tags.Type<"int32">>({});
  TestValidator.predicate("int32 is integer", () =>
    LlmTypeChecker.isInteger(integer),
  );

  // number with range
  const ranged = typia.llm.schema<number & tags.Minimum<0> & tags.Maximum<100>>({});
  if (LlmTypeChecker.isNumber(ranged)) {
    TestValidator.equals("minimum", ranged.minimum, 0);
    TestValidator.equals("maximum", ranged.maximum, 100);
  }

  // exclusive range
  const exclusive = typia.llm.schema<
    number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
  >({});
  if (LlmTypeChecker.isNumber(exclusive)) {
    TestValidator.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestValidator.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // multipleOf
  const multiple = typia.llm.schema<number & tags.MultipleOf<5>>({});
  if (LlmTypeChecker.isNumber(multiple)) {
    TestValidator.equals("multipleOf", multiple.multipleOf, 5);
  }
};
