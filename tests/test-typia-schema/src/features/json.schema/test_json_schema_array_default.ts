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
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that array-wrapper Default preserves readonly tuples, an empty tuple and bigint tuple values beside MinItems and UniqueItems.
 * @evidence contracts/testing.md#independent-expectations Declared HEADERS and tags.Default values provide the expected values; the JSON-facing bigint default contract projects 1n/2n to 1/2.
 * @evidence contracts/testing.md#distinguishing-cases Nonempty/empty defaults, literal string/bigint defaults and simultaneous minimum/uniqueness annotations are all asserted.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_array_default through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Array default metadata must cross TypeScript readonly tuple analysis and literal emission. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Nonempty/empty defaults, literal string/bigint defaults and simultaneous minimum/uniqueness annotations are all asserted. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
