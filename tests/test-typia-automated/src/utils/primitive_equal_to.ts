import { TestEquality } from "@typia/template/equality";

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
 * @returns Whether both values hold the same data
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
