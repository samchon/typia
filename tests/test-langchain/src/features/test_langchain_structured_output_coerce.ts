import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_langchain_structured_output_coerce = (): void => {
  interface IInput {
    name: string;
    age: number;
    score: number;
  }

  const output = typia.llm.structuredOutput<IInput>();

  const coerced = output.coerce({
    name: "Bob",
    age: "42",
    score: "95.5",
  });

  TestValidator.equals("name", coerced.name, "Bob");
  TestValidator.equals("age", coerced.age, 42);
  TestValidator.equals("score", coerced.score, 95.5);
};
