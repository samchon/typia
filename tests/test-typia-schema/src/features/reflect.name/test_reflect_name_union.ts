import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_name_union = (): void => {
  TestValidator.equals(
    "string | number",
    typia.reflect.name<string | number>(),
    "string | number",
  );
  TestValidator.equals(
    "string | null",
    typia.reflect.name<string | null>(),
    "string | null",
  );
};
