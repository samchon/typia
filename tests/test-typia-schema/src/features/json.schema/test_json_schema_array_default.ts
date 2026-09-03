import { TestValidator } from "@nestia/e2e";
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
 */
export const test_json_schema_array_default = (): void => {
  const HEADERS = ["id", "status", "created_at"] as const;
  type Header = (typeof HEADERS)[number];
  type Selection = Array<Header> &
    tags.Default<typeof HEADERS> &
    tags.MinItems<1> &
    tags.UniqueItems;

  const selection: any = typia.json.schema<Selection>().schema;
  TestValidator.equals("array default and constraints", pick(selection), {
    default: [...HEADERS],
    minItems: 1,
    uniqueItems: true,
  });

  const empty: any = typia.json.schema<string[] & tags.Default<readonly []>>()
    .schema;
  TestValidator.equals("empty array default", empty.default, []);

  const bigint: any = typia.json.schema<
    number[] & tags.Default<readonly [1n, 2n]>
  >().schema;
  TestValidator.equals("bigint array default", bigint.default, [1, 2]);
};

const pick = (schema: any): object => ({
  default: schema.default,
  minItems: schema.minItems,
  uniqueItems: schema.uniqueItems,
});
