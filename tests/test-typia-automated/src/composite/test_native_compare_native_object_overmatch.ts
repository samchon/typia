import typia from "typia";

interface IStamp {
  timestamp: number;
}
interface ISource {
  source: string;
}
const equalDateObj = typia.compare.createEquals<Date | IStamp>();
const coverDateObj = typia.compare.createCover<Date | IStamp>();
const equalObjDate = typia.compare.createEquals<IStamp | Date>();
const equalBytesObj = typia.compare.createEquals<Uint8Array | IStamp>();
const equalRegExpObj = typia.compare.createEquals<RegExp | ISource>();
// controls: the native alone and the object alone must be unchanged.
const equalDate = typia.compare.createEquals<Date>();
const equalStamp = typia.compare.createEquals<IStamp>();
/**
 * Verifies native union arms cannot fall through to structural objects.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Different dates, bytes and regular-expression flags must compare false while identical natives and ordinary timestamp objects retain positive controls.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Different dates, bytes and regular-expression flags must compare false while identical natives and ordinary timestamp objects retain positive controls.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_native_object_overmatch = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    equalDateObj,
    coverDateObj,
    equalObjDate,
    equalBytesObj,
    equalRegExpObj,
    equalDate,
    equalStamp,
  };
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };
  // Two different natives must NOT be reported equal by the object branch.
  expect(
    "Date|obj: two different Dates equal",
    mod.equalDateObj(new Date(0), new Date(5000)),
    false,
  );
  expect(
    "Date|obj: cover two different Dates",
    mod.coverDateObj(new Date(0), new Date(5000)),
    false,
  );
  expect(
    "obj|Date: two different Dates equal",
    mod.equalObjDate(new Date(0), new Date(5000)),
    false,
  );
  expect(
    "Bytes|obj: different bytes equal",
    mod.equalBytesObj(new Uint8Array([1, 2, 3]), new Uint8Array([9, 9, 9])),
    false,
  );
  expect(
    "Bytes|obj: one-byte diff equal",
    mod.equalBytesObj(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4])),
    false,
  );
  expect(
    "RegExp|obj: same source diff flags equal",
    mod.equalRegExpObj(/a/g, /a/i),
    false,
  );
  // Legitimate equal cases must be preserved.
  expect(
    "Date|obj: same Date equal",
    mod.equalDateObj(new Date(0), new Date(0)),
    true,
  );
  expect(
    "Date|obj: cover same Date",
    mod.coverDateObj(new Date(0), new Date(0)),
    true,
  );
  expect(
    "Date|obj: stamp object equal",
    mod.equalDateObj({ timestamp: 5 }, { timestamp: 5 }),
    true,
  );
  expect(
    "Date|obj: stamp object not equal",
    mod.equalDateObj({ timestamp: 5 }, { timestamp: 9 }),
    false,
  );
  expect(
    "Bytes|obj: same bytes equal",
    mod.equalBytesObj(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3])),
    true,
  );
  expect(
    "RegExp|obj: identical regexp equal",
    mod.equalRegExpObj(/a/g, /a/g),
    true,
  );
  // Controls: native alone and object alone are unchanged.
  expect("control Date: equal", mod.equalDate(new Date(0), new Date(0)), true);
  expect(
    "control Date: not equal",
    mod.equalDate(new Date(0), new Date(5000)),
    false,
  );
  expect(
    "control Stamp: equal",
    mod.equalStamp({ timestamp: 5 }, { timestamp: 5 }),
    true,
  );
  expect(
    "control Stamp: not equal",
    mod.equalStamp({ timestamp: 5 }, { timestamp: 9 }),
    false,
  );
};
