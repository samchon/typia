import { TestValidator } from "@nestia/e2e";
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

  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("name", result.data.name, "Jane");
    TestValidator.equals("age", result.data.age, 25);
    TestValidator.equals("alive", result.data.alive, true);
  }
};
