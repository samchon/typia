import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm schema string against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is string type, email is
 * string, email format, pattern value, minLength, maxLength.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (is string type; email is string; email format; pattern value; minLength; maxLength).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is string type; email is string; email format; pattern value; minLength; maxLength) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_string is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_string = (): void => {
  const schema = typia.llm.schema<string>({});

  TestValidator.predicate("is string type", () =>
    LlmTypeChecker.isString(schema),
  );

  // string with format
  const email = typia.llm.schema<string & tags.Format<"email">>({});
  TestValidator.predicate("email is string", () =>
    LlmTypeChecker.isString(email),
  );
  if (LlmTypeChecker.isString(email)) {
    TestEquality.equals("email format", email.format, "email");
  }

  // string with pattern
  const pattern = typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({});
  if (LlmTypeChecker.isString(pattern)) {
    TestEquality.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // string with length constraints
  const constrained = typia.llm.schema<
    string & tags.MinLength<1> & tags.MaxLength<100>
  >({});
  if (LlmTypeChecker.isString(constrained)) {
    TestEquality.equals("minLength", constrained.minLength, 1);
    TestEquality.equals("maxLength", constrained.maxLength, 100);
  }
};
