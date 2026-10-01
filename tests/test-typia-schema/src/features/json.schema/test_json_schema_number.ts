import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies json schema number against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts is number type, int32 is
 * integer, minimum, maximum, exclusiveMinimum, exclusiveMaximum.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (is number type; int32 is integer; minimum; maximum; exclusiveMinimum; exclusiveMaximum).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is number type; int32 is integer; minimum; maximum; exclusiveMinimum; exclusiveMaximum) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_number is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
