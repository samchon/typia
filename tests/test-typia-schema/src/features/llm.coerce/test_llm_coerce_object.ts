import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_coerce_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Already parsed object with wrong types
  const input = {
    name: "John",
    age: "30" as unknown as number, // string instead of number
    alive: "true" as unknown as boolean, // string instead of boolean
  };

  const result = typia.llm.coerce<IInput>(input);

  TestValidator.equals("name", result.name, "John");
  TestValidator.equals("age", result.age, 30);
  TestValidator.equals("age type", typeof result.age, "number");
  TestValidator.equals("alive", result.alive, true);
  TestValidator.equals("alive type", typeof result.alive, "boolean");
};
