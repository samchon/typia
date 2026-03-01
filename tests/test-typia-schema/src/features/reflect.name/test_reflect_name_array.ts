import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_name_array = (): void => {
  TestValidator.equals("string[]", typia.reflect.name<string[]>(), "string[]");
  TestValidator.equals("number[]", typia.reflect.name<number[]>(), "number[]");
  TestValidator.equals(
    "boolean[][]",
    typia.reflect.name<boolean[][]>(),
    "boolean[][]",
  );
};
