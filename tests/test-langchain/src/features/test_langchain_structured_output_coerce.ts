import { TestEquality } from "@typia/template/equality";
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

  TestEquality.equals("name", coerced.name, "Bob");
  TestEquality.equals("age", coerced.age, 42);
  TestEquality.equals("score", coerced.score, 95.5);
};
