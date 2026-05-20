import { TestValidator } from "@nestia/e2e";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies that `typia.llm.schema` emits correct string schemas including
 * format, pattern, and length constraints.
 *
 * The string-schema converter must propagate tag metadata (`Format`, `Pattern`,
 * `MinLength`, `MaxLength`) into the LLM schema. A silent skip when `isString`
 * returns false would mask a type mismatch where the transform emitted the
 * wrong schema kind.
 *
 * 1. Call `typia.llm.schema` for plain `string`, `string & Format<"email">`,
 *    pattern, and length-constrained variants.
 * 2. Assert each result satisfies `LlmTypeChecker.isString` via
 *    `TestValidator.predicate`.
 * 3. Assert format, pattern, minLength, and maxLength values match the declared
 *    tags.
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
    TestValidator.equals("email format", email.format, "email");
  }

  // string with pattern
  const pattern = typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({});
  TestValidator.predicate("pattern is string type", () =>
    LlmTypeChecker.isString(pattern),
  );
  if (LlmTypeChecker.isString(pattern)) {
    TestValidator.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // string with length constraints
  const constrained = typia.llm.schema<
    string & tags.MinLength<1> & tags.MaxLength<100>
  >({});
  TestValidator.predicate("constrained is string type", () =>
    LlmTypeChecker.isString(constrained),
  );
  if (LlmTypeChecker.isString(constrained)) {
    TestValidator.equals("minLength", constrained.minLength, 1);
    TestValidator.equals("maxLength", constrained.maxLength, 100);
  }
};
