import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies json schema boolean against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts is boolean type.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (is boolean type).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is boolean type) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_boolean is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_boolean = (): void => {
  const unit = typia.json.schema<boolean>();
  const schema = unit.schema;

  TestValidator.predicate("is boolean type", () =>
    OpenApiTypeChecker.isBoolean(schema),
  );
};
