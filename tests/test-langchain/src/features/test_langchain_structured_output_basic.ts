import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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
  TestEquality.equals("typeof parameters", typeof output.parameters, "object");

  const parsed = output.parse('{"name":"John","age":"30"}');
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.name", parsed.data.name, "John");
    TestEquality.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestEquality.equals("validate.success", validated.success, true);
};
