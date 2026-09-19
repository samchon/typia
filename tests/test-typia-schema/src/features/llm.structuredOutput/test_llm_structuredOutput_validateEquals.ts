import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_llm_structuredOutput_validateEquals = (): void => {
  interface IInput {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IInput, { equals: true }>();

  // Valid input (exact match)
  const valid = output.validate({ name: "Alice", age: 28 });
  TestEquality.equals("valid.success", valid.success, true);

  // Invalid input (extra property)
  const extra = output.validate({ name: "Bob", age: 30, extra: "field" });
  TestEquality.equals("extra.success", extra.success, false);
};
