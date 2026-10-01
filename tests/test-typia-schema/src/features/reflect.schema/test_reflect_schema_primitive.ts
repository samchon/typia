import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema primitive against the native typia.reflect.schema
 * output.
 *
 * The case builds its input in this file and asserts string atomics length,
 * string atomic type, number atomics length, number atomic type, boolean
 * atomics length, boolean atomic type.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (string atomics length; string atomic type; number atomics length; number atomic type; boolean atomics length; boolean atomic type).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (string atomics length; string atomic type; number atomics length; number atomic type; boolean atomics length; boolean atomic type) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_primitive is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
