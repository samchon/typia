package main

import (
  "regexp"
  "testing"
)

// TestFunctionalReceiverTransform verifies dynamic receiver forwarding in functional wrapper emission.
//
// JavaScript method meaning depends on this at invocation; Reflect.apply with the runtime receiver preserves that meaning across the validation wrapper.
//
// 1. The authored fixture contains receiver-using wrappers across functional families; promised async forwarding is asserted separately.
// 2. The output retains Reflect.apply rather than dropping the method receiver during wrapping.
//
// @evidence contracts/testing.md#behavioral-verification The output retains Reflect.apply rather than dropping the method receiver during wrapping.
// @evidence contracts/testing.md#independent-expectations JavaScript method meaning depends on this at invocation; Reflect.apply with the runtime receiver preserves that meaning across the validation wrapper.
// @evidence contracts/testing.md#distinguishing-cases The authored fixture contains receiver-using wrappers across functional families; promised async forwarding is asserted separately.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestFunctionalReceiverTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestFunctionalReceiverTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "functional-receiver-", functionalReceiverSource)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  applications := regexp.MustCompile(`Reflect\.apply\([^,]+,\s*this,\s*\[`).FindAllString(js, -1)
  if len(applications) != 40 {
    t.Fatalf("expected all 40 functional wrappers to pass their invocation receiver to Reflect.apply; got %d:\n%s", len(applications), js)
  }
  if regexp.MustCompile(`typia_1\.default\.functional\.`).MatchString(js) {
    t.Fatalf("functional output retains an untransformed wrapper call:\n%s", js)
  }

}

const functionalReceiverSource = `import typia from "typia";

export interface Receiver {
  base: number;
  calls: number;
}
export interface Input {
  value: number;
}
export interface Output {
  total: number;
}

export function syncTarget(this: Receiver, input: Input): Output {
  this.calls += 1;
  return { total: this.base + input.value };
}
export async function asyncTarget(this: Receiver, input: Input): Promise<Output> {
  this.calls += 1;
  return { total: this.base + input.value };
}

export const sync = {
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
  validateEqualsParameters: typia.functional.validateEqualsParameters(syncTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(syncTarget),
};

export const asynchronous = {
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
  validateEqualsParameters: typia.functional.validateEqualsParameters(asyncTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(asyncTarget),
};

const boundReceiver: Receiver = { base: 20, calls: 0 };
export const boundAssert = typia.functional.assertFunction(syncTarget).bind(boundReceiver);
export const customAssert = typia.functional.assertParameters(
  syncTarget,
  (props) => Object.assign(new Error("custom receiver"), props),
);
export const receiverFree = typia.functional.isFunction((input: Input): Output => ({ total: input.value }));
export const receiverFreeResult = receiverFree({ value: 2 });
export const throwing = typia.functional.assertParameters(function (this: Receiver, input: Input): Output {
  throw new Error(String(this.base + input.value));
});

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
export type ReceiverCases = [
  Assert<Equal<ThisParameterType<typeof sync.assertFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.isFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.equalsParameters>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.validateReturn>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.validateEqualsFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.assertReturn>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.isParameters>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.validateFunction>, Receiver>>,
];
`
