import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm schema spec boolean against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts boolean, true literal,
 * false literal, boolean literal union collapses to boolean.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (boolean; true literal; false literal; boolean literal union collapses to boolean).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (boolean; true literal; false literal; boolean literal union collapses to boolean) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_boolean is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_boolean = (): void => {
  TestEquality.equals("boolean", clean(typia.llm.schema<boolean>({})), {
    type: "boolean",
  });
  TestEquality.equals("true literal", clean(typia.llm.schema<true>({})), {
    type: "boolean",
    enum: [true],
  });
  TestEquality.equals("false literal", clean(typia.llm.schema<false>({})), {
    type: "boolean",
    enum: [false],
  });
  TestEquality.equals(
    "boolean literal union collapses to boolean",
    clean(typia.llm.schema<true | false>({})),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
