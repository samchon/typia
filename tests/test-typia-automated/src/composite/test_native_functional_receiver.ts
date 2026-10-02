import typia from "typia";

interface Receiver {
  base: number;
  calls: number;
}
interface Input {
  value: number;
}
interface Output {
  total: number;
}
function syncTarget(this: Receiver, input: Input): Output {
  this.calls += 1;
  return { total: this.base + input.value };
}
async function asyncTarget(this: Receiver, input: Input): Promise<Output> {
  this.calls += 1;
  return { total: this.base + input.value };
}
const sync = {
  assertFunction: typia.functional.assertFunction(syncTarget),
  assertParameters: typia.functional.assertParameters(syncTarget),
  assertReturn: typia.functional.assertReturn(syncTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(syncTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(syncTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(syncTarget),
  isFunction: typia.functional.isFunction(syncTarget),
  isParameters: typia.functional.isParameters(syncTarget),
  isReturn: typia.functional.isReturn(syncTarget),
  equalsFunction: typia.functional.equalsFunction(syncTarget),
  equalsParameters: typia.functional.equalsParameters(syncTarget),
  equalsReturn: typia.functional.equalsReturn(syncTarget),
  validateFunction: typia.functional.validateFunction(syncTarget),
  validateParameters: typia.functional.validateParameters(syncTarget),
  validateReturn: typia.functional.validateReturn(syncTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(syncTarget),
  validateEqualsParameters:
    typia.functional.validateEqualsParameters(syncTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(syncTarget),
};
const asynchronous = {
  assertFunction: typia.functional.assertFunction(asyncTarget),
  assertParameters: typia.functional.assertParameters(asyncTarget),
  assertReturn: typia.functional.assertReturn(asyncTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(asyncTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(asyncTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(asyncTarget),
  isFunction: typia.functional.isFunction(asyncTarget),
  isParameters: typia.functional.isParameters(asyncTarget),
  isReturn: typia.functional.isReturn(asyncTarget),
  equalsFunction: typia.functional.equalsFunction(asyncTarget),
  equalsParameters: typia.functional.equalsParameters(asyncTarget),
  equalsReturn: typia.functional.equalsReturn(asyncTarget),
  validateFunction: typia.functional.validateFunction(asyncTarget),
  validateParameters: typia.functional.validateParameters(asyncTarget),
  validateReturn: typia.functional.validateReturn(asyncTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(asyncTarget),
  validateEqualsParameters:
    typia.functional.validateEqualsParameters(asyncTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(asyncTarget),
};
const boundReceiver: Receiver = { base: 20, calls: 0 };
const boundAssert = typia.functional
  .assertFunction(syncTarget)
  .bind(boundReceiver);
const customAssert = typia.functional.assertParameters(syncTarget, (props) =>
  Object.assign(new Error("custom receiver"), props),
);
const receiverFree = typia.functional.isFunction(
  (input: Input): Output => ({ total: input.value }),
);
const receiverFreeResult = receiverFree({ value: 2 });
const throwing = typia.functional.assertParameters(function (
  this: Receiver,
  input: Input,
): Output {
  throw new Error(String(this.base + input.value));
});
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
type ReceiverCases = [
  Assert<Equal<ThisParameterType<typeof sync.assertFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.isFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.equalsParameters>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.validateReturn>, Receiver>>,
  Assert<
    Equal<ThisParameterType<typeof sync.validateEqualsFunction>, Receiver>
  >,
  Assert<Equal<ThisParameterType<typeof asynchronous.assertReturn>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.isParameters>, Receiver>>,
  Assert<
    Equal<ThisParameterType<typeof asynchronous.validateFunction>, Receiver>
  >,
];
// Keep every original compile-time equivalence assertion checked in this consumer project.
void (null as unknown as [ReceiverCases]);
/**
 * Verifies all functional wrapper families preserve their receiver.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Eighteen synchronous and eighteen asynchronous wrapper families check total and receiver call count; bound and receiver-free controls, target exceptions, invalid parameter paths and custom error factories retain exact expectations.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Eighteen synchronous and eighteen asynchronous wrapper families check total and receiver call count; bound and receiver-free controls, target exceptions, invalid parameter paths and custom error factories retain exact expectations.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each synchronous/asynchronous row constructs a fresh receiver and checks its own call count. The module-owned bound receiver retains base 20; the bound-control expectation checks total 22 and the separate call-site receiver remains untouched, so prior target calls cannot supply that verdict. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_functional_receiver = async (): Promise<void> => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    syncTarget,
    asyncTarget,
    sync,
    asynchronous,
    boundAssert,
    customAssert,
    receiverFree,
    receiverFreeResult,
    throwing,
  };
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected)
      throw new Error(label + ": expected " + expected + ", got " + actual);
  };
  const assertNames: any = new Set([
    "assertFunction",
    "assertParameters",
    "assertReturn",
    "assertEqualsFunction",
    "assertEqualsParameters",
    "assertEqualsReturn",
  ]);
  const validateNames: any = new Set([
    "validateFunction",
    "validateParameters",
    "validateReturn",
    "validateEqualsFunction",
    "validateEqualsParameters",
    "validateEqualsReturn",
  ]);
  const checkResult = (label: string, name: string, result: any) => {
    if (validateNames.has(name)) {
      expect(label + " success", result.success, true);
      expect(label + " total", result.data.total, 42);
    } else {
      expect(label + " non-null", result === null, false);
      expect(label + " total", result.total, 42);
    }
  };
  for (const [name, wrapped] of Object.entries(mod.sync) as [string, any][]) {
    const receiver: any = { base: 40, calls: 0 };
    const result: any = wrapped.call(receiver, { value: 2 });
    checkResult("sync " + name, name, result);
    expect("sync " + name + " receiver calls", receiver.calls, 1);
  }
  for (const [name, wrapped] of Object.entries(mod.asynchronous) as [
    string,
    any,
  ][]) {
    const receiver: any = { base: 40, calls: 0 };
    const result: any = await wrapped.call(receiver, { value: 2 });
    checkResult("async " + name, name, result);
    expect("async " + name + " receiver calls", receiver.calls, 1);
  }
  const ignored: any = { base: 100, calls: 0 };
  const bound: any = mod.boundAssert.call(ignored, { value: 2 });
  expect("bound wrapper keeps bound receiver", bound.total, 22);
  expect("bound wrapper ignores call receiver", ignored.calls, 0);
  expect(
    "receiver-free arrow remains directly callable",
    mod.receiverFreeResult.total,
    2,
  );
  const receiver: any = { base: 40, calls: 0 };
  let thrown: any;
  try {
    mod.throwing.call(receiver, { value: 2 });
  } catch (error: any) {
    thrown = error;
  }
  expect("thrown target error", thrown && thrown.message, "42");
  for (const name of ["assertFunction", "isFunction", "validateFunction"]) {
    const receiver: any = { base: 40, calls: 0 };
    let result: any;
    let error: any;
    try {
      result = mod.sync[name].call(receiver, { value: "bad" });
    } catch (exp: any) {
      error = exp;
    }
    if (assertNames.has(name)) {
      expect("assert invalid throws", Boolean(error), true);
      expect("assert invalid path", error.path, "$input.parameters[0].value");
    } else if (validateNames.has(name)) {
      expect("validate invalid fails", result.success, false);
      expect(
        "validate invalid path",
        result.errors[0].path,
        "$input.parameters[0].value",
      );
    } else {
      expect("is invalid returns null", result, null);
    }
    expect(name + " invalid does not invoke target", receiver.calls, 0);
  }
  const customReceiver: any = { base: 40, calls: 0 };
  let customError: any;
  try {
    mod.customAssert.call(customReceiver, { value: "bad" });
  } catch (error: any) {
    customError = error;
  }
  expect(
    "custom error factory message",
    customError && customError.message,
    "custom receiver",
  );
  expect(
    "custom error factory path",
    customError && customError.path,
    "$input.parameters[0].value",
  );
  expect("custom error does not invoke target", customReceiver.calls, 0);
};
