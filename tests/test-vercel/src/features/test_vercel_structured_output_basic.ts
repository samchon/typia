import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

export const test_vercel_structured_output_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();
  const schema = toVercelSchema(output.parameters);

  // Check schema exists
  TestEquality.equals("typeof schema", typeof schema, "object");

  // Structured output utilities come from ILlmStructuredOutput directly
  const parsed = output.parse('{"name":"John","age":"30"}');
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.name", parsed.data.name, "John");
    TestEquality.equals("parse.data.age", parsed.data.age, 30);
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestEquality.equals("validate.success", validated.success, true);
};
