import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_schema_primitive = (): void => {
  // string
  const stringUnit = typia.reflect.schema<string>();
  TestEquality.equals(
    "string atomics length",
    stringUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "string atomic type",
    stringUnit.schema.atomics[0]?.type,
    "string",
  );

  // number
  const numberUnit = typia.reflect.schema<number>();
  TestEquality.equals(
    "number atomics length",
    numberUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "number atomic type",
    numberUnit.schema.atomics[0]?.type,
    "number",
  );

  // boolean
  const booleanUnit = typia.reflect.schema<boolean>();
  TestEquality.equals(
    "boolean atomics length",
    booleanUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "boolean atomic type",
    booleanUnit.schema.atomics[0]?.type,
    "boolean",
  );

  // bigint
  const bigintUnit = typia.reflect.schema<bigint>();
  TestEquality.equals(
    "bigint atomics length",
    bigintUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "bigint atomic type",
    bigintUnit.schema.atomics[0]?.type,
    "bigint",
  );
};
