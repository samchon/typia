import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies untagged/constrained arrays and positional tuples match authored
 * complete schema objects.
 *
 * Array wrapper annotations and positional tuple metadata must pass the native
 * public producer without collapsing their distinct representations.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert bounds 1/3 and enabled uniqueness have an untagged twin; tuple
 *    string/number/boolean positions retain their order, never normalized by
 *    sorting.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that untagged/constrained arrays and positional tuples match authored complete schema objects.
 * @evidence contracts/testing.md#independent-expectations Expected objects follow the supported emended schema representation: items for arrays and ordered prefixItems plus closed additionalItems for tuples.
 * @evidence contracts/testing.md#distinguishing-cases Bounds 1/3 and enabled uniqueness have an untagged twin; tuple string/number/boolean positions retain their order, never normalized by sorting.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_array_tuple through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Array wrapper annotations and positional tuple metadata must pass the native public producer without collapsing their distinct representations. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Bounds 1/3 and enabled uniqueness have an untagged twin; tuple string/number/boolean positions retain their order, never normalized by sorting. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
