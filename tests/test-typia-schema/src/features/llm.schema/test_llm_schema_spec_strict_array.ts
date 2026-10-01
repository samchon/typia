import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm schema spec strict array against the native typia.llm.schema
 * output.
 *
 * The case builds its input in this file and asserts strict array shifts
 * constraints.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (strict array shifts constraints).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict array shifts constraints) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_strict_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_strict_array = (): void => {
  TestEquality.equals(
    "strict array shifts constraints",
    clean(
      typia.llm.schema<
        (string & tags.MinLength<1>)[] &
          tags.MinItems<1> &
          tags.MaxItems<3> &
          tags.UniqueItems,
        { strict: true }
      >({}),
    ),
    {
      type: "array",
      items: {
        type: "string",
        description: "@minLength 1",
      },
      description: ["@minItems 1", "@maxItems 3", "@uniqueItems"].join("\n"),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
