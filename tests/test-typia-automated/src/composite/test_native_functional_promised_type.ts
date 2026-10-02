import typia from "typia";

interface Receiver {
  base: number;
}
interface Input {
  value: number;
}
interface Output {
  total: number;
}
class DerivedPromise<T> extends Promise<T> {}
interface InterfacePromise<T> extends Promise<T> {}
type BrandedPromise<T> = Promise<T> & {
  readonly __brand: unique symbol;
};
namespace Shadow {
  export class Promise<T> {
    public constructor(public value: T) {}
  }
}
function promisedTarget(this: Receiver, input: Input): DerivedPromise<Output> {
  return new DerivedPromise((resolve) =>
    resolve({ total: this.base + input.value }),
  );
}
function interfaceTarget(input: Input): InterfacePromise<Output> {
  return Promise.resolve({ total: input.value }) as InterfacePromise<Output>;
}
function brandedTarget(input: Input): BrandedPromise<Output> {
  return Promise.resolve({ total: input.value }) as BrandedPromise<Output>;
}
function shadowedTarget(input: Input): Shadow.Promise<Output> {
  return new Shadow.Promise({ total: input.value });
}
function rejectingTarget(): DerivedPromise<Output> {
  return new DerivedPromise((_resolve, reject) =>
    reject(new Error("promised rejection")),
  );
}
const promised = {
  assertFunction: typia.functional.assertFunction(promisedTarget),
  assertParameters: typia.functional.assertParameters(promisedTarget),
  assertReturn: typia.functional.assertReturn(promisedTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(promisedTarget),
  assertEqualsParameters:
    typia.functional.assertEqualsParameters(promisedTarget),
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
  validateEqualsFunction:
    typia.functional.validateEqualsFunction(promisedTarget),
  validateEqualsParameters:
    typia.functional.validateEqualsParameters(promisedTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(promisedTarget),
};
const shadowed = {
  assertFunction: typia.functional.assertFunction(shadowedTarget),
  assertParameters: typia.functional.assertParameters(shadowedTarget),
  assertReturn: typia.functional.assertReturn(shadowedTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(shadowedTarget),
  assertEqualsParameters:
    typia.functional.assertEqualsParameters(shadowedTarget),
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
  validateEqualsFunction:
    typia.functional.validateEqualsFunction(shadowedTarget),
  validateEqualsParameters:
    typia.functional.validateEqualsParameters(shadowedTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(shadowedTarget),
};
const semanticShapes = {
  interfaceAssert:
    typia.functional.assertReturn<(input: Input) => InterfacePromise<Output>>(
      interfaceTarget,
    ),
  interfaceIs: typia.functional.isReturn(interfaceTarget),
  interfaceValidate: typia.functional.validateReturn(interfaceTarget),
  brandedAssert: typia.functional.assertReturn(brandedTarget),
  brandedIs:
    typia.functional.isReturn<(input: Input) => BrandedPromise<Output>>(
      brandedTarget,
    ),
  brandedValidate: typia.functional.validateReturn(brandedTarget),
};
const rejecting = typia.functional.assertReturn(rejectingTarget);
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
type PromisedWrapperCases = [
  Assert<Equal<ReturnType<typeof promised.isFunction>, Promise<Output | null>>>,
  Assert<
    Equal<
      ReturnType<typeof promised.validateReturn>,
      Promise<typia.IValidation<Output>>
    >
  >,
  Assert<
    Equal<ReturnType<typeof shadowed.isFunction>, Shadow.Promise<Output> | null>
  >,
  Assert<
    Equal<
      ReturnType<typeof shadowed.validateReturn>,
      typia.IValidation<Shadow.Promise<Output>>
    >
  >,
];
// Keep every original compile-time equivalence assertion checked in this consumer project.
void (null as unknown as [PromisedWrapperCases]);
/**
 * Verifies semantic Promise types select asynchronous wrapper behavior.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Derived, interface and branded Promises retain Promise shape and fulfilled results, invalid parameters/returns reject or report failure by wrapper family, shadowed Promise stays synchronous, and target rejection propagates.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Derived, interface and branded Promises retain Promise shape and fulfilled results, invalid parameters/returns reject or report failure by wrapper family, shadowed Promise stays synchronous, and target rejection propagates.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each row creates its own receiver, input and pending Promise; all awaited fulfillment/rejection observations finish within the exported asynchronous case. Shadow-Promise targets construct a fresh returned object. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_functional_promised_type = async (): Promise<void> => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    DerivedPromise,
    promisedTarget,
    interfaceTarget,
    brandedTarget,
    shadowedTarget,
    rejectingTarget,
    promised,
    shadowed,
    semanticShapes,
    rejecting,
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
  for (const [name, wrapped] of Object.entries(mod.promised) as [
    string,
    any,
  ][]) {
    const pending: any = wrapped.call({ base: 40 }, { value: 2 });
    expect(
      "promised " + name + " returns Promise",
      pending instanceof Promise,
      true,
    );
    const result: any = await pending;
    if (validateNames.has(name)) {
      expect("promised " + name + " succeeds", result.success, true);
      expect("promised " + name + " fulfilled total", result.data.total, 42);
    } else {
      expect("promised " + name + " is non-null", result === null, false);
      expect("promised " + name + " fulfilled total", result.total, 42);
    }
    const invalid: any = wrapped.call({ base: 40 }, { value: "bad" });
    expect(
      "invalid " + name + " keeps Promise shape",
      invalid instanceof Promise,
      true,
    );
    if (assertNames.has(name)) {
      let error: any;
      try {
        await invalid;
      } catch (exp: any) {
        error = exp;
      }
      expect("invalid " + name + " rejects", Boolean(error), true);
    } else {
      const failure: any = await invalid;
      if (validateNames.has(name))
        expect("invalid " + name + " validation fails", failure.success, false);
      else expect("invalid " + name + " returns null", failure, null);
    }
  }
  for (const [name, wrapped] of Object.entries(mod.semanticShapes) as [
    string,
    any,
  ][]) {
    const pending: any = wrapped({ value: 7 });
    expect(name + " returns Promise", pending instanceof Promise, true);
    const result: any = await pending;
    if (name.endsWith("Validate")) {
      expect(name + " succeeds", result.success, true);
      expect(name + " total", result.data.total, 7);
    } else expect(name + " total", result.total, 7);
  }
  for (const [name, wrapped] of Object.entries(mod.shadowed) as [
    string,
    any,
  ][]) {
    const result: any = wrapped({ value: 9 });
    expect(
      "shadowed " + name + " stays synchronous",
      result instanceof Promise,
      false,
    );
    if (validateNames.has(name)) {
      expect("shadowed " + name + " succeeds", result.success, true);
      expect("shadowed " + name + " value", result.data.value.total, 9);
    } else {
      expect("shadowed " + name + " is non-null", result === null, false);
      expect("shadowed " + name + " value", result.value.total, 9);
    }
  }
  let rejection: any;
  try {
    await mod.rejecting();
  } catch (error: any) {
    rejection = error;
  }
  expect(
    "rejection propagates",
    rejection && rejection.message,
    "promised rejection",
  );
};
