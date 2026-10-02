import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

interface ITaggedPayload {
  values: Array<{ id: number }> & tags.UniqueItems;
}

interface IJsDocPayload {
  /** @uniqueItems */
  values: Array<{ id: number }>;
}

/**
 * Generated UniqueItems tag spellings reject duplicate objects and accept
 * distinct or empty arrays.
 *
 * Keep native tag wiring here and exercise the complete direct helper matrix in
 * the plugin-free test-utils unit owner.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated UniqueItems tag spellings reject duplicate objects and accept distinct or empty arrays.
 * @evidence contracts/testing.md#independent-expectations Fixed false/true verdicts on authored object arrays independently anchor the generated checks; the complete direct helper relation has a separate portable unit owner.
 * @evidence contracts/testing.md#distinguishing-cases Both type and JSDoc spellings retain the original duplicate-object negatives and add matching distinct-object and empty-array positives.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_validate_unique_items_structural under the schema ttsx/native suite; its exported body owns all six generated checks.
 * @evidence contracts/e2e.md#necessary-boundary Native type-tag and comment-tag factories must connect to structural uniqueness checks rather than their former independent shallow predicates.
 * @evidence contracts/e2e.md#shared-execution Both generated spellings and all three inputs reuse the suite project load/native artifact without per-input builds or hosts.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Authored input objects and arrays are local to this body and are not mutated. The suite owns shared host lifetime; no cache invalidation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage The original two generated duplicate negatives remain here, strengthened by both positive twins. Every original direct helper input/assertion moved unchanged to test-utils unit/features/schema/test_validate_unique_items_structural_helper.ts; no portable relation was deleted.
 */
export const test_validate_unique_items_structural = (): void => {
  const duplicateObject = { id: 1 };
  const structurallyDuplicate = { id: 1 };

  const input = { values: [duplicateObject, structurallyDuplicate] };
  TestEquality.equals(
    "type tag rejects duplicate objects",
    typia.is<ITaggedPayload>(input),
    false,
  );
  TestEquality.equals(
    "JSDoc tag rejects duplicate objects",
    typia.is<IJsDocPayload>(input),
    false,
  );
  for (const [label, values] of [
    ["distinct objects", [{ id: 1 }, { id: 2 }]],
    ["empty", []],
  ] as const) {
    const accepted = { values: [...values] };
    TestEquality.equals(
      `type tag accepts ${label}`,
      typia.is<ITaggedPayload>(accepted),
      true,
    );
    TestEquality.equals(
      `JSDoc tag accepts ${label}`,
      typia.is<IJsDocPayload>(accepted),
      true,
    );
  }
};
