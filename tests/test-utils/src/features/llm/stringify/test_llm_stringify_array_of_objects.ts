import { TestEquality } from "@typia/template/equality";
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
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestEquality.equals(
      "contains error marker",
      output.includes("// ❌"),
      true,
    );
    TestEquality.equals(
      "contains array object path",
      output.includes("$input.users[1].age"),
      true,
    );
  }
};
