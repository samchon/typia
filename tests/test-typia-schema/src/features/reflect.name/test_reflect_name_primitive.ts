import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_name_primitive = (): void => {
  TestValidator.equals("string", typia.reflect.name<string>(), "string");
  TestValidator.equals("number", typia.reflect.name<number>(), "number");
  TestValidator.equals("boolean", typia.reflect.name<boolean>(), "boolean");
  TestValidator.equals("bigint", typia.reflect.name<bigint>(), "bigint");
  TestValidator.equals("null", typia.reflect.name<null>(), "null");
  TestValidator.equals("undefined", typia.reflect.name<undefined>(), "undefined");
};
