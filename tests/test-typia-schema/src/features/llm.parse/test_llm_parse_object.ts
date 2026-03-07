import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_parse_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  const input: IInput = {
    name: "John",
    age: 30,
    alive: true,
  };

  // Test parse with valid JSON
  const json = JSON.stringify(input);
  const result = typia.llm.parse<IInput>(json);

  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("name", result.data.name, "John");
    TestValidator.equals("age", result.data.age, 30);
    TestValidator.equals("alive", result.data.alive, true);
  }
};
