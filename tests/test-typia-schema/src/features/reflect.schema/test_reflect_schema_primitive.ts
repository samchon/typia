import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_primitive = (): void => {
  // string
  const stringUnit = typia.reflect.schema<string>();
  TestValidator.equals("string atomics length", stringUnit.schema.atomics.length, 1);
  TestValidator.equals("string atomic type", stringUnit.schema.atomics[0]?.type, "string");

  // number
  const numberUnit = typia.reflect.schema<number>();
  TestValidator.equals("number atomics length", numberUnit.schema.atomics.length, 1);
  TestValidator.equals("number atomic type", numberUnit.schema.atomics[0]?.type, "number");

  // boolean
  const booleanUnit = typia.reflect.schema<boolean>();
  TestValidator.equals("boolean atomics length", booleanUnit.schema.atomics.length, 1);
  TestValidator.equals("boolean atomic type", booleanUnit.schema.atomics[0]?.type, "boolean");

  // bigint
  const bigintUnit = typia.reflect.schema<bigint>();
  TestValidator.equals("bigint atomics length", bigintUnit.schema.atomics.length, 1);
  TestValidator.equals("bigint atomic type", bigintUnit.schema.atomics[0]?.type, "bigint");
};
