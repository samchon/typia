import { TestValidator } from "@nestia/e2e";
import { ILlmStructuredOutput } from "@typia/interface";
import typia from "typia";

export const test_llm_structuredOutput_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  // Check all members exist
  TestValidator.equals("typeof parameters", typeof output.parameters, "object");
  TestValidator.equals("typeof parse", typeof output.parse, "function");
  TestValidator.equals("typeof coerce", typeof output.coerce, "function");
  TestValidator.equals("typeof validate", typeof output.validate, "function");

  // Minimal functionality check
  const parsed = output.parse('{"name":"John","age":"30"}');
  TestValidator.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestValidator.equals("parse.data.age", parsed.data.age, 30); // coerced from string
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestValidator.equals("validate.success", validated.success, true);
};
