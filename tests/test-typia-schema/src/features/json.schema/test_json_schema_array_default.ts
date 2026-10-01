import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies `Default` carries readonly literal tuples into array schemas.
 *
 * Array tags are intersections on the array wrapper, so a default tuple must
 * coexist with `MinItems` and `UniqueItems` without becoming an element tag or
 * losing its literal values during metadata extraction.
 *
 * 1. Emit the reported header-selection shape and assert all three annotations.
 * 2. Preserve an empty tuple as an empty default rather than missing metadata.
 * 3. Convert bigint tuple members to the JSON numeric values scalar defaults use.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (array default and constraints; empty array default; bigint array default). The case documents its purpose as: Verifies `Default` carries readonly literal tuples into array schemas.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Array tags are intersections on the array wrapper, so a default tuple must coexist with `MinItems` and `UniqueItems` without becoming an element tag or losing its literal values during metadata extraction. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (array default and constraints; empty array default; bigint array default) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_array_default is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_array_default = (): void => {
  const HEADERS = ["id", "status", "created_at"] as const;
  type Header = (typeof HEADERS)[number];
  type Selection = Array<Header> &
    tags.Default<typeof HEADERS> &
    tags.MinItems<1> &
    tags.UniqueItems;

  const selection: any = typia.json.schema<Selection>().schema;
  TestEquality.equals("array default and constraints", pick(selection), {
    default: [...HEADERS],
    minItems: 1,
    uniqueItems: true,
  });

  const empty: any = typia.json.schema<string[] & tags.Default<readonly []>>()
    .schema;
  TestEquality.equals("empty array default", empty.default, []);

  const bigint: any = typia.json.schema<
    number[] & tags.Default<readonly [1n, 2n]>
  >().schema;
  TestEquality.equals("bigint array default", bigint.default, [1, 2]);
};

const pick = (schema: any): object => ({
  default: schema.default,
  minItems: schema.minItems,
  uniqueItems: schema.uniqueItems,
});
