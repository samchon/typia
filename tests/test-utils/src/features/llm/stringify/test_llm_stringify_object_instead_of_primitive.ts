import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IPrimitiveProp {
  count: number;
}

export const test_llm_stringify_object_instead_of_primitive = (): void => {
  const valid: IPrimitiveProp = { count: 42 };
  (valid as { count: unknown }).count = { nested: "object" };
  const result = typia.validate<IPrimitiveProp>(valid);
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
      "contains count path",
      output.includes("$input.count"),
      true,
    );
  }
};
