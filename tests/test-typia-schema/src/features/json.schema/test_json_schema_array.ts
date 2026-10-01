import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies json schema array against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts is array type, items is
 * string, minItems, maxItems, uniqueItems.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (is array type; items is string; minItems; maxItems; uniqueItems).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is array type; items is string; minItems; maxItems; uniqueItems) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_array = (): void => {
  const unit = typia.json.schema<string[]>();
  const schema = unit.schema;

  TestValidator.predicate("is array type", () =>
    OpenApiTypeChecker.isArray(schema),
  );

  if (OpenApiTypeChecker.isArray(schema)) {
    TestValidator.predicate("items is string", () =>
      OpenApiTypeChecker.isString(schema.items),
    );
  }

  // array with constraints
  const constrainedUnit = typia.json.schema<
    string[] & tags.MinItems<1> & tags.MaxItems<10>
  >();
  const constrained = constrainedUnit.schema;
  if (OpenApiTypeChecker.isArray(constrained)) {
    TestEquality.equals("minItems", constrained.minItems, 1);
    TestEquality.equals("maxItems", constrained.maxItems, 10);
  }

  // unique items
  const uniqueUnit = typia.json.schema<
    (string & tags.Format<"uuid">)[] & tags.UniqueItems
  >();
  const unique = uniqueUnit.schema;
  if (OpenApiTypeChecker.isArray(unique)) {
    TestEquality.equals("uniqueItems", unique.uniqueItems, true);
  }
};
