import { TestEquality } from "@typia/template/equality";
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

  TestEquality.equals("name", coerced.name, "Bob");
  TestEquality.equals("age", coerced.age, 42);
  TestEquality.equals("score", coerced.score, 95.5);
};
