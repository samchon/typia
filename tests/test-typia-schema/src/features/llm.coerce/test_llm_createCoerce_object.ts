import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_createCoerce_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Create reusable coercer
  const coerce = typia.llm.createCoerce<IInput>();

  // Test with multiple inputs
  const input1 = {
    name: "John",
    age: "30" as unknown as number,
    alive: "true" as unknown as boolean,
  };
  const input2 = {
    name: "Jane",
    age: "25" as unknown as number,
    alive: "false" as unknown as boolean,
  };

  const result1 = coerce(input1);
  const result2 = coerce(input2);

  TestValidator.equals("result1 age", result1.age, 30);
  TestValidator.equals("result1 alive", result1.alive, true);
  TestValidator.equals("result2 age", result2.age, 25);
  TestValidator.equals("result2 alive", result2.alive, false);
};
