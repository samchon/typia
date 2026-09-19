import { TestEquality } from "@typia/template/equality";
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

  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("name", result.data.name, "John");
    TestEquality.equals("age", result.data.age, 30);
    TestEquality.equals("alive", result.data.alive, true);
  }
};
