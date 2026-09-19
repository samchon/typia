import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_llm_structuredOutput_parse = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  const output = typia.llm.structuredOutput<IInput>();

  // Test parse with stringified values (coercion)
  const result = output.parse('{"name":"Jane","age":"25","alive":"true"}');

  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("name", result.data.name, "Jane");
    TestEquality.equals("age", result.data.age, 25);
    TestEquality.equals("alive", result.data.alive, true);
  }
};
