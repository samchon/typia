import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IArrayOfUsers {
  users: Array<{
    name: string;
    age: number;
  }>;
}

export const test_llm_coerce_nested_array_objects = (): void => {
  const parameters = typia.llm.parameters<IArrayOfUsers>();
  const original: IArrayOfUsers = {
    users: [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
  };

  const corrupted = {
    users: original.users.map((u) => JSON.stringify(u) as unknown),
  };

  const result = LlmJson.parse<IArrayOfUsers>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("users[0].name", result.data.users[0]!.name, "Alice");
    TestValidator.equals("users[0].age", result.data.users[0]!.age, 30);
    TestValidator.equals("users[1].name", result.data.users[1]!.name, "Bob");
    TestValidator.equals("users[1].age", result.data.users[1]!.age, 25);
  }
};
