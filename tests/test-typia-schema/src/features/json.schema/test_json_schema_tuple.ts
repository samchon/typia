import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies json schema tuple against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts is tuple type, prefixItems
 * length, first is string, second is number, third is boolean.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (is tuple type; prefixItems length; first is string; second is number; third is boolean).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is tuple type; prefixItems length; first is string; second is number; third is boolean) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_tuple is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_tuple = (): void => {
  const unit = typia.json.schema<[string, number, boolean]>();
  const schema = unit.schema;

  TestValidator.predicate("is tuple type", () =>
    OpenApiTypeChecker.isTuple(schema),
  );

  if (OpenApiTypeChecker.isTuple(schema)) {
    const tuple = schema as OpenApi.IJsonSchema.ITuple;
    TestEquality.equals("prefixItems length", tuple.prefixItems.length, 3);
    TestValidator.predicate("first is string", () =>
      OpenApiTypeChecker.isString(tuple.prefixItems[0]!),
    );
    TestValidator.predicate("second is number", () =>
      OpenApiTypeChecker.isNumber(tuple.prefixItems[1]!),
    );
    TestValidator.predicate("third is boolean", () =>
      OpenApiTypeChecker.isBoolean(tuple.prefixItems[2]!),
    );
  }
};
