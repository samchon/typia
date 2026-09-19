import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ITupleType {
  pair: [string, number];
}

export const test_llm_stringify_tuple_type = (): void => {
  const valid: ITupleType = { pair: ["hello", 42] };
  (valid.pair as unknown[])[1] = "not-a-number";
  const result = typia.validate<ITupleType>(valid);
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
      "contains pair path",
      output.includes("$input.pair"),
      true,
    );
  }
};
