import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies that `typia.llm.schema` emits correct array schemas including bounds
 * and item unions.
 *
 * Array schemas must propagate `MinItems`, `MaxItems`, and `UniqueItems` tags,
 * and must wrap multi-type item unions in `anyOf`. Emission order of `anyOf`
 * members is not guaranteed, so comparisons are order-insensitive.
 *
 * 1. Call `typia.llm.schema` for `string[]`, a bounded/unique array, and
 *    `Array<string | number>`.
 * 2. Assert basic array shape and tag propagation for the first two cases.
 * 3. Assert the `anyOf` members of the union array match after sorting.
 */
export const test_llm_schema_spec_array = (): void => {
  TestValidator.equals(
    "array of string",
    clean(typia.llm.schema<string[]>({})),
    {
      type: "array",
      items: {
        type: "string",
      },
    },
  );
  TestValidator.equals(
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
  const unionArray = clean(typia.llm.schema<Array<string | number>>({})) as {
    type: string;
    items: { anyOf: unknown[] };
  };
  TestValidator.equals("array item union type", unionArray.type, "array");
  TestValidator.predicate("array item union has anyOf", () =>
    Array.isArray(unionArray.items?.anyOf),
  );
  TestValidator.equals(
    "array item union anyOf (sorted)",
    [...(unionArray.items?.anyOf ?? [])].sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b)),
    ),
    [{ type: "number" }, { type: "string" }].sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b)),
    ),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
