import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_name_tuple = (): void => {
  TestValidator.equals(
    "[string, number]",
    typia.reflect.name<[string, number]>(),
    "[string, number]",
  );
  TestValidator.equals(
    "[boolean, string, number]",
    typia.reflect.name<[boolean, string, number]>(),
    "[boolean, string, number]",
  );
};
