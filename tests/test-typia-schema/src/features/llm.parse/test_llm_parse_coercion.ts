import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_llm_parse_coercion = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Test parse with stringified values (LLM commonly returns these)
  const malformedJson = JSON.stringify({
    name: "John",
    age: "30", // number as string
    alive: "true", // boolean as string
  });
  const result = typia.llm.parse<IInput>(malformedJson);

  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("name", result.data.name, "John");
    TestEquality.equals("age", result.data.age, 30);
    TestEquality.equals("alive", result.data.alive, true);
  }
};
