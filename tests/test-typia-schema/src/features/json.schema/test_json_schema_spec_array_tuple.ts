import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies json schema spec array tuple against the native typia.json.schema
 * output.
 *
 * The case builds its input in this file and asserts array, array bounds,
 * tuple.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (array; array bounds; tuple).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (array; array bounds; tuple) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_spec_array_tuple is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_spec_array_tuple = (): void => {
  TestEquality.equals("array", clean(typia.json.schema<string[]>().schema), {
    type: "array",
    items: {
      type: "string",
    },
  });
  TestEquality.equals(
    "array bounds",
    clean(
      typia.json.schema<
        string[] & tags.MinItems<1> & tags.MaxItems<3> & tags.UniqueItems
      >().schema,
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
    "tuple",
    clean(typia.json.schema<[string, number, boolean]>().schema),
    {
      type: "array",
      prefixItems: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "boolean",
        },
      ],
      additionalItems: false,
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
