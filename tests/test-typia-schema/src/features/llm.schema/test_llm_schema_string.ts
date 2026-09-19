import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

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
