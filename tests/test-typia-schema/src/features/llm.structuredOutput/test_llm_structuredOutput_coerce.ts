import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_structuredOutput_coerce = (): void => {
  interface IInput {
    name: string;
    age: number;
    score: number;
  }

  const output = typia.llm.structuredOutput<IInput>();

  // Test coerce with stringified values
  const coerced = output.coerce({
    name: "Bob",
    age: "42" as any,
    score: "95.5" as any,
  });

  TestValidator.equals("name", coerced.name, "Bob");
  TestValidator.equals("age", coerced.age, 42);
  TestValidator.equals("score", coerced.score, 95.5);
};
