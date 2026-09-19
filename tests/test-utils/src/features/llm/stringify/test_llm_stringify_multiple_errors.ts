import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IMultipleProps {
  name: string;
  age: number;
  active: boolean;
}

export const test_llm_stringify_multiple_errors = (): void => {
  const valid: IMultipleProps = { name: "John", age: 30, active: true };
  (valid as { name: unknown; age: unknown }).name = 123;
  (valid as { name: unknown; age: unknown }).age = "thirty";
  const result = typia.validate<IMultipleProps>(valid);
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestEquality.equals(
      "contains name error",
      output.includes("$input.name"),
      true,
    );
    TestEquality.equals(
      "contains age error",
      output.includes("$input.age"),
      true,
    );
  }
};
