import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm schema number against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is number type, int32 is
 * integer, minimum, maximum, exclusiveMinimum, exclusiveMaximum.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (is number type; int32 is integer; minimum; maximum; exclusiveMinimum; exclusiveMaximum).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is number type; int32 is integer; minimum; maximum; exclusiveMinimum; exclusiveMaximum) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_number is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_number = (): void => {
  const schema = typia.llm.schema<number>({});

  TestValidator.predicate("is number type", () =>
    LlmTypeChecker.isNumber(schema),
  );

  // integer type
  const integer = typia.llm.schema<number & tags.Type<"int32">>({});
  TestValidator.predicate("int32 is integer", () =>
    LlmTypeChecker.isInteger(integer),
  );

  // number with range
  const ranged = typia.llm.schema<number & tags.Minimum<0> & tags.Maximum<100>>(
    {},
  );
  if (LlmTypeChecker.isNumber(ranged)) {
    TestEquality.equals("minimum", ranged.minimum, 0);
    TestEquality.equals("maximum", ranged.maximum, 100);
  }

  // exclusive range
  const exclusive = typia.llm.schema<
    number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
  >({});
  if (LlmTypeChecker.isNumber(exclusive)) {
    TestEquality.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestEquality.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // multipleOf
  const multiple = typia.llm.schema<number & tags.MultipleOf<5>>({});
  if (LlmTypeChecker.isNumber(multiple)) {
    TestEquality.equals("multipleOf", multiple.multipleOf, 5);
  }
};
