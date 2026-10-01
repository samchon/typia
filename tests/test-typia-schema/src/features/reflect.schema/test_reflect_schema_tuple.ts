import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema tuple against the native typia.reflect.schema output.
 *
 * The case builds its input in this file and asserts tuples length, components
 * tuples length, tuple elements count, first element is string, second element
 * is number, third element is boolean.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (tuples length; components tuples length; tuple elements count; first element is string; second element is number; third element is boolean).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (tuples length; components tuples length; tuple elements count; first element is string; second element is number; third element is boolean) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_tuple is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_tuple = (): void => {
  const unit = typia.reflect.schema<[string, number, boolean]>();

  // schema has tuples reference
  TestEquality.equals("tuples length", unit.schema.tuples.length, 1);

  // components has tuple definition
  TestEquality.equals(
    "components tuples length",
    unit.components.tuples.length,
    1,
  );

  const tuple = unit.components.tuples[0];
  if (tuple === undefined) return;

  TestEquality.equals("tuple elements count", tuple.elements.length, 3);
  TestEquality.equals(
    "first element is string",
    tuple.elements[0]?.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "second element is number",
    tuple.elements[1]?.atomics[0]?.type,
    "number",
  );
  TestEquality.equals(
    "third element is boolean",
    tuple.elements[2]?.atomics[0]?.type,
    "boolean",
  );
};
