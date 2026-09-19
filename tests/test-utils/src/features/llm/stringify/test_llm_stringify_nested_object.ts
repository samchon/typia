import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INested {
  user: {
    name: string;
    age: number;
  };
}

export const test_llm_stringify_nested_object = (): void => {
  const valid: INested = { user: { name: "John", age: 30 } };
  (valid.user as { age: unknown }).age = "thirty";
  const result = typia.validate<INested>(valid);
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestEquality.equals(
      "contains error marker",
      output.includes("// ❌"),
      true,
    );
    TestEquality.equals(
      "contains nested path",
      output.includes("$input.user.age"),
      true,
    );
  }
};
