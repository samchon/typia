import { TestEquality } from "@typia/template/equality";
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

  TestEquality.equals("name", result.name, "John");
  TestEquality.equals("age", result.age, 30);
  TestEquality.equals("age type", typeof result.age, "number");
  TestEquality.equals("alive", result.alive, true);
  TestEquality.equals("alive type", typeof result.alive, "boolean");
};
