import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies number, integer, inclusive/exclusive ranges and multipleOf tags
 * retain their numeric schema fields.
 *
 * Numeric type/tag analysis must supply the generated schema with both kind and
 * constraint annotations.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert untagged number and int32 kind checks remain; range/exclusive/multiple
 *    shapes now fail explicitly rather than skipping their existing field
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that number, integer, inclusive/exclusive ranges and multipleOf tags retain their numeric schema fields.
 * @evidence contracts/testing.md#independent-expectations Declared int32, 0/100 boundaries and factor 5 supply fixed expected schema keywords/values.
 * @evidence contracts/testing.md#distinguishing-cases Untagged number and int32 kind checks remain; range/exclusive/multiple shapes now fail explicitly rather than skipping their existing field assertions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_number through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Numeric type/tag analysis must supply the generated schema with both kind and constraint annotations. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Untagged number and int32 kind checks remain; range/exclusive/multiple shapes now fail explicitly rather than skipping their existing field assertions. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
  TestValidator.predicate("range is number", () =>
    OpenApiTypeChecker.isNumber(ranged),
  );
  if (OpenApiTypeChecker.isNumber(ranged)) {
    TestEquality.equals("minimum", ranged.minimum, 0);
    TestEquality.equals("maximum", ranged.maximum, 100);
  }

  // exclusive range
  const exclusiveUnit = typia.json.schema<
    number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
  >();
  const exclusive = exclusiveUnit.schema;
  TestValidator.predicate("exclusive range is number", () =>
    OpenApiTypeChecker.isNumber(exclusive),
  );
  if (OpenApiTypeChecker.isNumber(exclusive)) {
    TestEquality.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestEquality.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // multipleOf
  const multipleUnit = typia.json.schema<number & tags.MultipleOf<5>>();
  const multiple = multipleUnit.schema;
  TestValidator.predicate("multiple is number", () =>
    OpenApiTypeChecker.isNumber(multiple),
  );
  if (OpenApiTypeChecker.isNumber(multiple)) {
    TestEquality.equals("multipleOf", multiple.multipleOf, 5);
  }
};
