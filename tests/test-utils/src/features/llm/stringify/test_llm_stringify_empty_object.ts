import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IRequired {
  name: string;
  age: number;
}

export const test_llm_stringify_empty_object = (): void => {
  const invalid: unknown = {};
  const result = typia.validate<IRequired>(invalid);
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
      "contains name path",
      output.includes("$input.name"),
      true,
    );
    TestEquality.equals(
      "contains age path",
      output.includes("$input.age"),
      true,
    );
  }
};
