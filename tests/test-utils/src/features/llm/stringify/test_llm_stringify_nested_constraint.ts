import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface INestedConstraint {
  user: {
    email: string & tags.Format<"email">;
    age: number & tags.Minimum<0>;
  };
}

export const test_llm_stringify_nested_constraint = (): void => {
  const valid: INestedConstraint = {
    user: { email: "test@example.com", age: 25 },
  };
  (valid.user as { email: unknown }).email = "invalid-email";
  (valid.user as { age: unknown }).age = -5;
  const result = typia.validate<INestedConstraint>(valid);
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestEquality.equals(
      "contains email error",
      output.includes("$input.user.email"),
      true,
    );
    TestEquality.equals(
      "contains age error",
      output.includes("$input.user.age"),
      true,
    );
  }
};
