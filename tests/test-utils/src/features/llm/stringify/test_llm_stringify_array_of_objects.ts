import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IUser {
  name: string;
  age: number;
}

interface IUserList {
  users: IUser[];
}

export const test_llm_stringify_array_of_objects = (): void => {
  const valid: IUserList = {
    users: [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
    ],
  };
  (valid.users[1] as { age: unknown }).age = "twenty-five";
  const result = typia.validate<IUserList>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains array object path", output.includes("$input.users[1].age"), true);
  }
};
