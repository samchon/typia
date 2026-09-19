import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_json_schema_number = (): void => {
  const unit = typia.json.schema<number>();
  const schema = unit.schema;

  TestValidator.predicate("is number type", () =>
    OpenApiTypeChecker.isNumber(schema),
  );

  // integer type
  const integerUnit = typia.json.schema<number & tags.Type<"int32">>();
  const integer = integerUnit.schema;
  TestValidator.predicate("int32 is integer", () =>
    OpenApiTypeChecker.isInteger(integer),
  );

  // number with range
  const rangedUnit = typia.json.schema<
    number & tags.Minimum<0> & tags.Maximum<100>
  >();
  const ranged = rangedUnit.schema;
  if (OpenApiTypeChecker.isNumber(ranged)) {
    TestEquality.equals("minimum", ranged.minimum, 0);
    TestEquality.equals("maximum", ranged.maximum, 100);
  }

  // exclusive range
  const exclusiveUnit = typia.json.schema<
    number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
  >();
  const exclusive = exclusiveUnit.schema;
  if (OpenApiTypeChecker.isNumber(exclusive)) {
    TestEquality.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestEquality.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // multipleOf
  const multipleUnit = typia.json.schema<number & tags.MultipleOf<5>>();
  const multiple = multipleUnit.schema;
  if (OpenApiTypeChecker.isNumber(multiple)) {
    TestEquality.equals("multipleOf", multiple.multipleOf, 5);
  }
};
