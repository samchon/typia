import assert from "node:assert/strict";
import typia from "typia";

/**
 * Verifies that an optional phantom marker is not a symbol data value.
 *
 * 1. Transform a string with an optional phantom symbol marker.
 * 2. Require the string predicate to accept strings and reject other values.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual generated predicate keeps its string check after discarding the phantom marker.
 * @evidence contracts/testing.md#independent-expectations The authored string base supplies the expected result, and numeric input is its negative twin.
 * @evidence contracts/testing.md#distinguishing-cases This phantom marker is contrasted with a real optional symbol field in the diagnostic suite.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor executes the exported feature through ttsx.
 * @evidence contracts/e2e.md#necessary-boundary Real transform and execution distinguish rejecting the brand, accepting everything and checking the surviving string base.
 * @evidence contracts/e2e.md#shared-execution The feature reuses the schema compiler session.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The marker is type-only and the inputs are literals.
 * @evidence contracts/e2e.md#preserved-coverage Existing intersection and symbol-keyed controls remain unchanged.
 */
export const test_symbol_value_phantom_brand = (): void => {
  type Branded = string & { readonly brand?: symbol };
  const is = typia.createIs<Branded>();
  assert.equal(is("value"), true);
  assert.equal(is(1), false);
};
