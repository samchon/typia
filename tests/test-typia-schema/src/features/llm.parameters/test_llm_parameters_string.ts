import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm parameters string against the native typia.llm.parameters
 * output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, has $defs, has basic, has email, has pattern.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 15 assertions (is object; additionalProperties; has $defs; has basic; has email; has pattern).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; has $defs; has basic; has email; has pattern) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_string is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_string = (): void => {
  interface IInput {
    basic: string;
    email: string & tags.Format<"email">;
    pattern: string & tags.Pattern<"^[a-z]+$">;
    length: string & tags.MinLength<1> & tags.MaxLength<100>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  // parameters should be object with additionalProperties: false
  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );
  TestValidator.predicate("has $defs", () => params.$defs !== undefined);

  // check properties exist
  TestValidator.predicate("has basic", () => "basic" in params.properties);
  TestValidator.predicate("has email", () => "email" in params.properties);
  TestValidator.predicate("has pattern", () => "pattern" in params.properties);
  TestValidator.predicate("has length", () => "length" in params.properties);

  // all should be required
  TestValidator.predicate(
    "basic is required",
    () => params.required?.includes("basic") ?? false,
  );
  TestValidator.predicate(
    "email is required",
    () => params.required?.includes("email") ?? false,
  );

  // check basic string
  const basic = params.properties["basic"];
  TestValidator.predicate("basic is string", () =>
    LlmTypeChecker.isString(basic!),
  );

  // check email format
  const email = params.properties["email"];
  TestValidator.predicate("email is string", () =>
    LlmTypeChecker.isString(email!),
  );
  if (LlmTypeChecker.isString(email!)) {
    TestEquality.equals("email format", email.format, "email");
  }

  // check pattern
  const pattern = params.properties["pattern"];
  if (LlmTypeChecker.isString(pattern!)) {
    TestEquality.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // check length constraints
  const length = params.properties["length"];
  if (LlmTypeChecker.isString(length!)) {
    TestEquality.equals("minLength", length.minLength, 1);
    TestEquality.equals("maxLength", length.maxLength, 100);
  }
};
