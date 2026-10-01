import { _test_plain_prune, preparePrune } from "@typia/oracle/prune";
import assert from "node:assert/strict";

/**
 * Verifies pruning preserves nested data, aliases and declared surplus-like
 * keys.
 *
 * Looking only at surviving children conceals deletion of a whole valid branch.
 * Capturing original nodes also avoids cloning losses for undefined, NaN,
 * functions, null prototypes and shared references.
 *
 * 1. Accept surplus-only deletion across nested objects and arrays.
 * 2. Reject lost, replaced and changed branches, array contents and prototypes.
 * 3. Preserve authored prefix keys and shared/cyclic identities, and handle
 *    primitive and empty fixtures without inventing declared properties.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual preparePrune check and plain.prune entry run authored deletion and corruption callbacks. Lost/replaced children, array truncation/holes, changed scalar values, missing undefined-valued keys and changed prototypes fail; correct mutation retains the original graph.
 * @evidence contracts/testing.md#independent-expectations The literal authored values and references precede injection. Deletion-only pruning cannot change them. Prefix-like declared keys are valid fixture data, while only keys absent before preparation are surplus in these closed fixtures.
 * @evidence contracts/testing.md#distinguishing-cases Nested records/arrays, empty/primitive inputs, NaN/-0/undefined/function values, prefix collisions, null prototypes, reserved valueOf data, aliases and cycles contribute different preservation or traversal boundaries. Adjacent corruptions target each captured invariant.
 * @evidence contracts/testing.md#execution-ownership This exported case is registered in the plugin-free test-utils-unit node:test runner. It calls the maintained portable oracle directly; native producer assembly remains in the automated suite.
 */
export const test_prune_oracle_graph_preservation = (): void => {
  const make = () => ({
    child: { value: 1, optional: undefined, nan: NaN, zero: -0, fn: () => 1 },
    array: [{ value: 2 }],
  });
  const reject = (mutate: (input: ReturnType<typeof make>) => void): void => {
    const input = make();
    const check = preparePrune(input, "lost authored data");
    remove(input);
    mutate(input);
    assert.throws(check, /lost authored data/);
  };
  const input = make();
  const check = preparePrune(input, "wrong mutation");
  remove(input);
  assert.doesNotThrow(check);
  reject((value) => {
    delete (value as Partial<typeof value>).child;
  });
  reject((value) => {
    value.child = { ...value.child };
  });
  reject((value) => {
    value.child.value = 2;
  });
  reject((value) => {
    delete (value.child as Partial<typeof value.child>).optional;
  });
  reject((value) => {
    value.child.zero = 0;
  });
  reject((value) => {
    value.array.length = 0;
  });
  reject((value) => {
    delete value.array[0];
  });
  reject((value) => {
    value.array[0] = { value: 2 };
  });
  reject((value) => {
    Object.setPrototypeOf(value.child, null);
  });

  const declared = { __non_regular_type__0: "declared", valueOf: 7 };
  const nullPrototype = Object.assign(
    Object.create(null) as Record<string, unknown>,
    declared,
  );
  for (const object of [declared, nullPrototype]) {
    const original = Object.keys(object);
    const verify = preparePrune(object, "collision lost valid key");
    assert.equal(object.__non_regular_type__0, "declared");
    assert.equal(Object.keys(object).length, original.length + 10);
    for (const key of Object.keys(object))
      if (!original.includes(key))
        delete (object as Record<string, unknown>)[key];
    assert.doesNotThrow(verify);
  }
  const shared = { value: 1 };
  const graph: Record<string, unknown> = { left: shared, right: shared };
  graph.self = graph;
  const verify = preparePrune(graph, "lost shared graph");
  remove(graph);
  assert.doesNotThrow(verify);
  assert.equal(graph.left, graph.right);
  assert.equal(graph.self, graph);

  for (const value of [undefined, null, 1, "", false, [], {}])
    assert.doesNotThrow(() =>
      _test_plain_prune("empty/primitive")({ generate: () => value })(remove),
    );
  assert.throws(
    () =>
      _test_plain_prune("no-op")({ generate: () => ({ value: 1 }) })(() => {}),
    Error,
  );
};

function remove(input: unknown, visited = new Set<object>()): void {
  if (input === null || typeof input !== "object" || visited.has(input)) return;
  visited.add(input);
  const node = input as Record<string, unknown>;
  for (const [key, value] of Object.entries(node))
    if (key.startsWith("__non_regular_type__")) delete node[key];
    else remove(value, visited);
}
