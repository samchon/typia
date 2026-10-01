import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies json schema string against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts is string type, email is
 * string, email format, pattern is string, pattern value, minLength.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (is string type; email is string; email format; pattern is string; pattern value; minLength).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is string type; email is string; email format; pattern is string; pattern value; minLength) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_string is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_string = (): void => {
  const unit = typia.json.schema<string>();
  const schema = unit.schema;

  TestValidator.predicate("is string type", () =>
    OpenApiTypeChecker.isString(schema),
  );

  // string with format
  const emailUnit = typia.json.schema<string & tags.Format<"email">>();
  const email = emailUnit.schema;
  TestValidator.predicate("email is string", () =>
    OpenApiTypeChecker.isString(email),
  );
  if (OpenApiTypeChecker.isString(email)) {
    TestEquality.equals("email format", email.format, "email");
  }

  // string with pattern
  const patternUnit = typia.json.schema<string & tags.Pattern<"^[a-z]+$">>();
  const pattern = patternUnit.schema;
  TestValidator.predicate("pattern is string", () =>
    OpenApiTypeChecker.isString(pattern),
  );
  if (OpenApiTypeChecker.isString(pattern)) {
    TestEquality.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // string with length constraints
  const constrainedUnit = typia.json.schema<
    string & tags.MinLength<1> & tags.MaxLength<100>
  >();
  const constrained = constrainedUnit.schema;
  if (OpenApiTypeChecker.isString(constrained)) {
    TestEquality.equals("minLength", constrained.minLength, 1);
    TestEquality.equals("maxLength", constrained.maxLength, 100);
  }
};
