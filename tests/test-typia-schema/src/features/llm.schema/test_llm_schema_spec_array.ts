import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm schema spec array against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts array of string, array
 * bounds, array item union.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (array of string; array bounds; array item union).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (array of string; array bounds; array item union) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_array = (): void => {
  TestEquality.equals(
    "array of string",
    clean(typia.llm.schema<string[]>({})),
    {
      type: "array",
      items: {
        type: "string",
      },
    },
  );
  TestEquality.equals(
    "array bounds",
    clean(
      typia.llm.schema<
        string[] & tags.MinItems<1> & tags.MaxItems<3> & tags.UniqueItems
      >({}),
    ),
    {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
      maxItems: 3,
      uniqueItems: true,
    },
  );
  TestEquality.equals(
    "array item union",
    clean(typia.llm.schema<Array<string | number>>({})),
    {
      type: "array",
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
