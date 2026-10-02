import { TestEquality } from "./TestEquality";

/**
 * Structural equality of two JSON-shaped values.
 *
 * The JSON operations compare a parsed output with the value it should equal.
 * This used to walk only the first argument's keys, and the stringify internals
 * pass the parsed output first, so a property the stringifier dropped was never
 * compared (#2401). It now delegates to the shared symmetric
 * {@link TestEquality}.
 *
 * @param x First value
 * @param y Second value
 * @param tracer Receives the first differing path, like `$input.a[0]`; `silent`
 *   suppresses the console dump for a caller that expects inequality
 *
 * @returns Whether both values hold the same data
 *
 * @evidence contracts/common.md#principled-implementation Delegates complete JSON-shaped data comparison to TestEquality.difference and reports the first differing path.
 * @evidence contracts/common.md#clear-and-simple-design One difference population decides equality; optional silent/tracer controls only diagnostics and cannot turn inequality into equality.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts TestEquality supplies the shared data comparison policy, including its absent/undefined equivalence. This wrapper does not certify prototype or arbitrary getter behavior.
 * @evidence contracts/common.md#meaningful-documentation The native comment explains the former one-sided key loss and caller diagnostic controls.
 */
export function primitive_equal_to<Instance>(
  x: Instance,
  y: Instance,
  tracer?: { value?: string; silent?: boolean },
): boolean {
  const diff: string[] = TestEquality.difference(x, y);
  if (diff.length === 0) return true;
  if (tracer?.silent !== true)
    console.log({ path: diff.map((path) => `$input${path}`), x, y });
  if (tracer) tracer.value = `$input${diff[0]}`;
  return false;
}
