import { TestValidator } from "@nestia/e2e";
import { ILlmStructuredOutput } from "@typia/interface";
import typia from "typia";

export const test_langchain_structured_output_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  // parameters is directly assignable to Record<string, any>
  // so it can be passed to model.withStructuredOutput() as-is
  TestValidator.equals("typeof parameters", typeof output.parameters, "object");

  const parsed = output.parse('{"name":"John","age":"30"}');
  TestValidator.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestValidator.equals("parse.data.name", parsed.data.name, "John");
    TestValidator.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestValidator.equals("validate.success", validated.success, true);
};
