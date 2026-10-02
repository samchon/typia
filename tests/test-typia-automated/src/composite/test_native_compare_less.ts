import typia from "typia";

interface IPoint {
  x: number;
  y: number;
  label: string;
}
const lessPoint = typia.compare.createLess<IPoint>();
const lessPointDirect = (a: IPoint, b: IPoint) =>
  typia.compare.less<IPoint>(a, b);
interface INested {
  head: {
    rank: number;
    name: string;
  };
  tags: string[];
}
const lessNested = typia.compare.createLess<INested>();
const lessNumbers = typia.compare.createLess<number[]>();
const lessTuple = typia.compare.createLess<[number, string]>();
const lessString = typia.compare.createLess<string>();
const lessNullable = typia.compare.createLess<number | null | undefined>();
/**
 * Verifies lexicographic comparison order and sort composition.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Declaration-order fields, nested objects, prefix arrays, tuples, strings and undefined/null/value rank are checked against hand-authored ordering results.
 * @evidence contracts/testing.md#independent-expectations The lexicographic contract uses declaration-order fields and array elements, a shorter equal prefix first, and undefined before null before values. Handwritten operand pairs and literal booleans/sort positions encode those rules independently of another native comparator or emitted-source patterns.
 * @evidence contracts/testing.md#distinguishing-cases Declaration-order fields, nested objects, prefix arrays, tuples, strings and undefined/null/value rank are checked against hand-authored ordering results.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_less = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    lessPoint,
    lessPointDirect,
    lessNested,
    lessNumbers,
    lessTuple,
    lessString,
    lessNullable,
  };
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };
  // object: first differing field in declaration order decides
  expect(
    "point x decides",
    mod.lessPoint({ x: 1, y: 9, label: "z" }, { x: 2, y: 0, label: "a" }),
    true,
  );
  expect(
    "point x decides direct",
    mod.lessPointDirect({ x: 1, y: 9, label: "z" }, { x: 2, y: 0, label: "a" }),
    true,
  );
  expect(
    "point y decides",
    mod.lessPoint({ x: 2, y: 0, label: "z" }, { x: 2, y: 1, label: "a" }),
    true,
  );
  expect(
    "point label decides",
    mod.lessPoint({ x: 2, y: 2, label: "a" }, { x: 2, y: 2, label: "b" }),
    true,
  );
  expect(
    "point equal is not less",
    mod.lessPoint({ x: 2, y: 2, label: "a" }, { x: 2, y: 2, label: "a" }),
    false,
  );
  expect(
    "point greater is not less",
    mod.lessPoint({ x: 3, y: 0, label: "a" }, { x: 2, y: 9, label: "z" }),
    false,
  );
  // nested object + array tie-break
  expect(
    "nested head decides",
    mod.lessNested(
      { head: { rank: 1, name: "b" }, tags: ["z"] },
      { head: { rank: 2, name: "a" }, tags: ["a"] },
    ),
    true,
  );
  expect(
    "nested tags decide",
    mod.lessNested(
      { head: { rank: 1, name: "a" }, tags: ["a"] },
      { head: { rank: 1, name: "a" }, tags: ["b"] },
    ),
    true,
  );
  // arrays: lexicographic, shorter prefix precedes
  expect("array element", mod.lessNumbers([1, 2, 3], [1, 9]), true);
  expect("array shorter prefix", mod.lessNumbers([1, 2], [1, 2, 0]), true);
  expect("array equal not less", mod.lessNumbers([1, 2], [1, 2]), false);
  // tuple
  expect("tuple second", mod.lessTuple([1, "a"], [1, "b"]), true);
  expect("tuple first", mod.lessTuple([2, "a"], [1, "z"]), false);
  // string
  expect("string less", mod.lessString("apple", "banana"), true);
  expect("string equal", mod.lessString("apple", "apple"), false);
  // nullable: undefined < null < value
  expect("undefined < null", mod.lessNullable(undefined, null), true);
  expect("null < value", mod.lessNullable(null, 0), true);
  expect("value not < null", mod.lessNullable(0, null), false);
  expect("value compare", mod.lessNullable(1, 2), true);
  // composes into a sort comparator
  const cmp: any = (a: any, b: any) =>
    mod.lessPoint(a, b) ? -1 : mod.lessPoint(b, a) ? 1 : 0;
  const sorted: any = [
    { x: 2, y: 0, label: "a" },
    { x: 1, y: 5, label: "b" },
    { x: 1, y: 2, label: "c" },
  ].sort(cmp);
  expect("sort[0].y", sorted[0].y, 2);
  expect("sort[1].y", sorted[1].y, 5);
  expect("sort[2].x", sorted[2].x, 2);
};
