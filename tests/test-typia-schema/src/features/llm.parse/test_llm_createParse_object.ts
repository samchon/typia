import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_createParse_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Create reusable parser
  const parse = typia.llm.createParse<IInput>();

  // Test with multiple inputs
  const input1 = JSON.stringify({ name: "John", age: 30, alive: true });
  const input2 = JSON.stringify({ name: "Jane", age: 25, alive: false });

  const result1 = parse(input1);
  const result2 = parse(input2);

  TestValidator.equals("result1 success", result1.success, true);
  TestValidator.equals("result2 success", result2.success, true);

  if (result1.success) {
    TestValidator.equals("result1 name", result1.data.name, "John");
    TestValidator.equals("result1 age", result1.data.age, 30);
  }

  if (result2.success) {
    TestValidator.equals("result2 name", result2.data.name, "Jane");
    TestValidator.equals("result2 age", result2.data.age, 25);
  }
};
