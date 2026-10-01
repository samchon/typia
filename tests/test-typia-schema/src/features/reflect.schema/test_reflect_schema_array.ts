import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema array against the native typia.reflect.schema output.
 *
 * The case builds its input in this file and asserts arrays length, arrays
 * name, components arrays length, array element is string, number arrays
 * length, number array element.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (arrays length; arrays name; components arrays length; array element is string; number arrays length; number array element).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (arrays length; arrays name; components arrays length; array element is string; number arrays length; number array element) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_array = (): void => {
  // string[]
  const stringArrayUnit = typia.reflect.schema<string[]>();
  TestEquality.equals("arrays length", stringArrayUnit.schema.arrays.length, 1);
  TestValidator.predicate(
    "arrays name",
    () => !!stringArrayUnit.schema.arrays[0]?.name.includes("string"),
  );

  // components has array definition
  TestEquality.equals(
    "components arrays length",
    stringArrayUnit.components.arrays.length,
    1,
  );
  TestEquality.equals(
    "array element is string",
    stringArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );

  // number[]
  const numberArrayUnit = typia.reflect.schema<number[]>();
  TestEquality.equals(
    "number arrays length",
    numberArrayUnit.schema.arrays.length,
    1,
  );
  TestEquality.equals(
    "number array element",
    numberArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "number",
  );
};
