import { TestValidator } from "@nestia/e2e";
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

  TestValidator.equals("name", coerced.name, "Bob");
  TestValidator.equals("age", coerced.age, 42);
  TestValidator.equals("score", coerced.score, 95.5);
};
