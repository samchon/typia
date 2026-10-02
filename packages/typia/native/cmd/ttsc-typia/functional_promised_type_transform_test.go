package main

import (
  "regexp"
  "strings"
  "testing"
)

// TestFunctionalPromisedTypeTransform verifies async and dynamic receiver forwarding in promised wrappers.
//
// A promised functional wrapper must await the invoked result before validating its resolved value, and method invocation must retain this binding rather than call the function detached.
//
// 1. Promised assertion/validation wrappers and receiver-bearing declarations are combined; synchronous wrappers are owned by the functional receiver case.
// 2. Emission contains async functions, awaited Reflect.apply calls and dynamic receiver forwarding.
//
// @evidence contracts/testing.md#behavioral-verification Emission contains async functions, awaited Reflect.apply calls and dynamic receiver forwarding.
// @evidence contracts/testing.md#independent-expectations A promised functional wrapper must await the invoked result before validating its resolved value, and method invocation must retain this binding rather than call the function detached.
// @evidence contracts/testing.md#distinguishing-cases Promised assertion/validation wrappers and receiver-bearing declarations are combined; synchronous wrappers are owned by the functional receiver case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestFunctionalPromisedTypeTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestFunctionalPromisedTypeTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "functional-promised-type-", functionalPromisedTypeSource)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  if !strings.Contains(js, "async function") || !strings.Contains(js, "await Reflect.apply") {
    t.Fatalf("promised wrappers do not emit async/await:\n%s", js)
  }
  if !regexp.MustCompile(`await Reflect\.apply\([^,]+,\s*this,\s*\[`).MatchString(js) {
    t.Fatalf("promised wrappers do not preserve receiver forwarding:\n%s", js)
  }

}

const functionalPromisedTypeSource = `import typia from "typia";

export interface Receiver { base: number; }
export interface Input { value: number; }
export interface Output { total: number; }

export class DerivedPromise<T> extends Promise<T> {}
export interface InterfacePromise<T> extends Promise<T> {}
export type BrandedPromise<T> = Promise<T> & { readonly __brand: unique symbol };
export namespace Shadow {
  export class Promise<T> {
    public constructor(public value: T) {}
  }
}

export function promisedTarget(this: Receiver, input: Input): DerivedPromise<Output> {
  return new DerivedPromise((resolve) => resolve({ total: this.base + input.value }));
}
export function interfaceTarget(input: Input): InterfacePromise<Output> {
  return Promise.resolve({ total: input.value }) as InterfacePromise<Output>;
}
export function brandedTarget(input: Input): BrandedPromise<Output> {
  return Promise.resolve({ total: input.value }) as BrandedPromise<Output>;
}
export function shadowedTarget(input: Input): Shadow.Promise<Output> {
  return new Shadow.Promise({ total: input.value });
}
export function rejectingTarget(): DerivedPromise<Output> {
  return new DerivedPromise((_resolve, reject) => reject(new Error("promised rejection")));
}

export const promised = {
  assertFunction: typia.functional.assertFunction(promisedTarget),
  assertParameters: typia.functional.assertParameters(promisedTarget),
  assertReturn: typia.functional.assertReturn(promisedTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(promisedTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(promisedTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(promisedTarget),
  isFunction: typia.functional.isFunction(promisedTarget),
  isParameters: typia.functional.isParameters(promisedTarget),
  isReturn: typia.functional.isReturn(promisedTarget),
  equalsFunction: typia.functional.equalsFunction(promisedTarget),
  equalsParameters: typia.functional.equalsParameters(promisedTarget),
  equalsReturn: typia.functional.equalsReturn(promisedTarget),
  validateFunction: typia.functional.validateFunction(promisedTarget),
  validateParameters: typia.functional.validateParameters(promisedTarget),
  validateReturn: typia.functional.validateReturn(promisedTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(promisedTarget),
  validateEqualsParameters: typia.functional.validateEqualsParameters(promisedTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(promisedTarget),
};

export const shadowed = {
  assertFunction: typia.functional.assertFunction(shadowedTarget),
  assertParameters: typia.functional.assertParameters(shadowedTarget),
  assertReturn: typia.functional.assertReturn(shadowedTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(shadowedTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(shadowedTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(shadowedTarget),
  isFunction: typia.functional.isFunction(shadowedTarget),
  isParameters: typia.functional.isParameters(shadowedTarget),
  isReturn: typia.functional.isReturn(shadowedTarget),
  equalsFunction: typia.functional.equalsFunction(shadowedTarget),
  equalsParameters: typia.functional.equalsParameters(shadowedTarget),
  equalsReturn: typia.functional.equalsReturn(shadowedTarget),
  validateFunction: typia.functional.validateFunction(shadowedTarget),
  validateParameters: typia.functional.validateParameters(shadowedTarget),
  validateReturn: typia.functional.validateReturn(shadowedTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(shadowedTarget),
  validateEqualsParameters: typia.functional.validateEqualsParameters(shadowedTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(shadowedTarget),
};

export const semanticShapes = {
  interfaceAssert: typia.functional.assertReturn<(input: Input) => InterfacePromise<Output>>(interfaceTarget),
  interfaceIs: typia.functional.isReturn(interfaceTarget),
  interfaceValidate: typia.functional.validateReturn(interfaceTarget),
  brandedAssert: typia.functional.assertReturn(brandedTarget),
  brandedIs: typia.functional.isReturn<(input: Input) => BrandedPromise<Output>>(brandedTarget),
  brandedValidate: typia.functional.validateReturn(brandedTarget),
};
export const rejecting = typia.functional.assertReturn(rejectingTarget);

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
export type PromisedWrapperCases = [
  Assert<Equal<ReturnType<typeof promised.isFunction>, Promise<Output | null>>>,
  Assert<Equal<ReturnType<typeof promised.validateReturn>, Promise<typia.IValidation<Output>>>>,
  Assert<Equal<ReturnType<typeof shadowed.isFunction>, Shadow.Promise<Output> | null>>,
  Assert<Equal<ReturnType<typeof shadowed.validateReturn>, typia.IValidation<Shadow.Promise<Output>>>>,
];
`
