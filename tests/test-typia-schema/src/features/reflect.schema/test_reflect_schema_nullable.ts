import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema nullable against the native typia.reflect.schema
 * output.
 *
 * The case builds its input in this file and asserts nullable is true, atomics
 * length, atomic type is string, required is false, atomics length for
 * undefined union.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (nullable is true; atomics length; atomic type is string; required is false; atomics length for undefined union).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (nullable is true; atomics length; atomic type is string; required is false; atomics length for undefined union) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_nullable is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_nullable = (): void => {
  // nullable string
  const nullableUnit = typia.reflect.schema<string | null>();
  TestEquality.equals("nullable is true", nullableUnit.schema.nullable, true);
  TestEquality.equals("atomics length", nullableUnit.schema.atomics.length, 1);
  TestEquality.equals(
    "atomic type is string",
    nullableUnit.schema.atomics[0]?.type,
    "string",
  );

  // string | undefined (not optional, but not required)
  const undefinedUnit = typia.reflect.schema<string | undefined>();
  TestEquality.equals(
    "required is false",
    undefinedUnit.schema.required,
    false,
  );
  TestEquality.equals(
    "atomics length for undefined union",
    undefinedUnit.schema.atomics.length,
    1,
  );
};
