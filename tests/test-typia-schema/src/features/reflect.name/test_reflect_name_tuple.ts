import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect name tuple against the native typia.reflect.name output.
 *
 * The case builds its input in this file and asserts [string, number],
 * [boolean, string, number].
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.name is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions ([string, number]; [boolean, string, number]).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles ([string, number]; [boolean, string, number]) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_name_tuple is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_name_tuple = (): void => {
  TestEquality.equals(
    "[string, number]",
    typia.reflect.name<[string, number]>(),
    "[string, number]",
  );
  TestEquality.equals(
    "[boolean, string, number]",
    typia.reflect.name<[boolean, string, number]>(),
    "[boolean, string, number]",
  );
};
