import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_llm_structuredOutput_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  // Check all members exist
  TestEquality.equals("typeof parameters", typeof output.parameters, "object");
  TestEquality.equals("typeof parse", typeof output.parse, "function");
  TestEquality.equals("typeof coerce", typeof output.coerce, "function");
  TestEquality.equals("typeof validate", typeof output.validate, "function");

  // Minimal functionality check
  const parsed = output.parse('{"name":"John","age":"30"}');
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.age", parsed.data.age, 30); // coerced from string
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestEquality.equals("validate.success", validated.success, true);
};
