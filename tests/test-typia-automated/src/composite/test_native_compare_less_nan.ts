import typia from "typia";

const lessNumber = typia.compare.createLess<number>();
const lessNumberDirect = (x: number, y: number) =>
  typia.compare.less<number>(x, y);
const lessDate = typia.compare.createLess<Date>();
const lessArray = typia.compare.createLess<number[]>();
const lessTuple = typia.compare.createLess<[number, Date]>();
const lessNested = typia.compare.createLess<{
  value: number;
}>();
const lessMixed = typia.compare.createLess<number | string>();
/**
 * Verifies NaN-last ordering through scalar and container comparisons.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Ordinary/NaN pairs, invalid dates, arrays, tuple positions, nested values, mixed-type rank, signed zero, infinity and a complete sorted result distinguish the ordering boundaries.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary/NaN pairs, invalid dates, arrays, tuple positions, nested values, mixed-type rank, signed zero, infinity and a complete sorted result distinguish the ordering boundaries.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_less_nan = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    lessNumber,
    lessNumberDirect,
    lessDate,
    lessArray,
    lessTuple,
    lessNested,
    lessMixed,
  };
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected)
      throw new Error(label + ": expected " + expected + ", got " + actual);
  };
  const assertPair: any = (label: any, less: any, ordinary: any, nan: any) => {
    expect(label + " ordinary < NaN", less(ordinary, nan), true);
    expect(label + " NaN !< ordinary", less(nan, ordinary), false);
    expect(label + " NaN !< NaN", less(nan, nan), false);
  };
  for (const less of [mod.lessNumber, mod.lessNumberDirect]) {
    assertPair("number", less, 1, Number.NaN);
    expect("-Infinity < finite", less(-Infinity, 0), true);
    expect("finite < Infinity", less(0, Infinity), true);
    expect("signed zero equivalent left", less(-0, 0), false);
    expect("signed zero equivalent right", less(0, -0), false);
  }
  assertPair("date", mod.lessDate, new Date(0), new Date(Number.NaN));
  assertPair("array", mod.lessArray, [1], [Number.NaN]);
  assertPair(
    "tuple head",
    mod.lessTuple,
    [1, new Date(0)],
    [Number.NaN, new Date(0)],
  );
  assertPair(
    "tuple date",
    mod.lessTuple,
    [1, new Date(0)],
    [1, new Date(Number.NaN)],
  );
  assertPair("nested", mod.lessNested, { value: 1 }, { value: Number.NaN });
  assertPair("mixed numeric arm", mod.lessMixed, 1, Number.NaN);
  expect(
    "mixed type rank before numeric rule",
    mod.lessMixed(Number.NaN, "a"),
    true,
  );
  const values: any = [Number.NaN, Infinity, -1, -Infinity, 0, Number.NaN];
  const comparator: any = (x: any, y: any) =>
    mod.lessNumber(x, y) ? -1 : mod.lessNumber(y, x) ? 1 : 0;
  const sorted: any = values.slice().sort(comparator);
  expect("sort first", sorted[0], -Infinity);
  expect("sort second", sorted[1], -1);
  expect("sort third", sorted[2], 0);
  expect("sort fourth", sorted[3], Infinity);
  expect("sort NaN tail 1", Number.isNaN(sorted[4]), true);
  expect("sort NaN tail 2", Number.isNaN(sorted[5]), true);
};
