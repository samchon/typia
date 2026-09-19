import { TestEquality } from "@typia/template/equality";
import { toVercelSchema } from "@typia/vercel";
import typia from "typia";

export const test_vercel_structured_output_coerce = (): void => {
  interface IInput {
    name: string;
    age: number;
    score: number;
  }

  const output = typia.llm.structuredOutput<IInput>();
  toVercelSchema(output.parameters); // ensure schema conversion works

  // Test coerce from ILlmStructuredOutput directly
  const coerced = output.coerce({
    name: "Bob",
    age: "42",
    score: "95.5",
  });

  TestEquality.equals("name", coerced.name, "Bob");
  TestEquality.equals("age", coerced.age, 42);
  TestEquality.equals("score", coerced.score, 95.5);
};
