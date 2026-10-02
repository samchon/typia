import typia from "typia";

interface Moment extends Object {
  valueOf(): number;
}

const isObject = typia.createIs<Object>();
const assertObject = typia.createAssert<Object>();
const validateObject = typia.createValidate<Object>();

const isFuncMember = typia.createIs<{ fn: Function }>();
const isMoment = typia.createIs<Moment>();

const isLowerObject = typia.createIs<object>();
const isEmptyObject = typia.createIs<{}>();

// random must produce a sample that its own is accepts (round trip). Object and
// a Function-only member need no numeric generator stub, so they stay hermetic.
const randomObject = typia.createRandom<Object>();
const randomFuncOnly = typia.createRandom<{ fn: Function }>();

const captureThrow = (task: () => void): boolean => {
  try {
    task();
    return false;
  } catch {
    return true;
  }
};
const fixture = {
  isObject,
  assertObject,
  validateObject,
  isFuncMember,
  isMoment,
  isLowerObject,
  isEmptyObject,
  randomObject,
  randomFuncOnly,
  captureThrow,
};

/**
 * Verifies is object function member in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * isObjectFunctionMemberSource declarations; the former
 * isObjectFunctionMemberRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: is<Object>({}); is<Object>({a:1});
 * is<Object>(new Object()); is<Object>(new Date()); is<Object>([]);
 * is<Object>(null).
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from isObjectFunctionMemberRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The supported Object, lowercase object and empty-object contracts establish the stated array/null/primitive distinctions. Function metadata is lenient in the original default producer and requires typeof function in the functional profile. Authored undefined-field counterexamples and own-property/value checks distinguish the profiles; original random-to-is checks remain correlated.
 * @evidence contracts/testing.md#distinguishing-cases Preserves is<Object>({}); is<Object>({a:1}); is<Object>(new Object()); is<Object>(new Date()); is<Object>([]); is<Object>(null); the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_is_object_function_member in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed isObjectFunctionMemberSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/is_object_function_member_transform_test.go isObjectFunctionMemberRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_is_object_function_member = (
  mode: "default" | "functional" = "functional",
): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  let ran: any = 0;
  const eq: any = (name: any, actual: any, expected: any): any => {
    ran += 1;
    if (actual !== expected) {
      throw new Error(name + ": expected " + expected + " but got " + actual);
    }
  };

  // Original functional:false accepts these non-null objects. The functional
  // profile additionally checks the inherited Function-valued constructor.
  // Null, undefined and primitives remain rejecting controls in both profiles.
  eq("is<Object>({})", mod.isObject({}), true);
  eq("is<Object>({a:1})", mod.isObject({ a: 1 }), true);
  eq("is<Object>(new Object())", mod.isObject(new Object()), true);
  eq("is<Object>(new Date())", mod.isObject(new Date()), true);
  eq("is<Object>([])", mod.isObject([]), true);
  eq("is<Object>(null)", mod.isObject(null), false);
  eq("is<Object>(undefined)", mod.isObject(undefined), false);
  eq("is<Object>(5)", mod.isObject(5), false);
  eq("is<Object>('x')", mod.isObject("x"), false);

  // validate and assert share the checker object path, so they must agree with is.
  eq("validate<Object>({})", mod.validateObject({}).success, true);
  eq("validate<Object>({a:1})", mod.validateObject({ a: 1 }).success, true);
  eq("validate<Object>(null)", mod.validateObject(null).success, false);
  eq(
    "assert<Object>({}) no throw",
    mod.captureThrow((): any => mod.assertObject({})),
    false,
  );
  eq(
    "assert<Object>(null) throws",
    mod.captureThrow((): any => mod.assertObject(null)),
    true,
  );

  // Explicit Function-typed member: the same lenient function path as () => void.
  eq("is<{fn:Function}>({fn(){}})", mod.isFuncMember({ fn() {} }), true);
  eq(
    "is<{fn:Function}>({fn:()=>{}})",
    mod.isFuncMember({ fn: (): any => {} }),
    true,
  );
  eq("is<{fn:Function}>(null)", mod.isFuncMember(null), false);

  // interface Moment extends Object: the inherited constructor member no longer
  // breaks a real instance.
  eq("is<Moment>(real)", mod.isMoment({ valueOf: (): any => 1 }), true);
  eq("is<Moment>(null)", mod.isMoment(null), false);

  // lowercase object keeps its Array.isArray guard (byte-identical, unchanged).
  eq("is<object>({})", mod.isLowerObject({}), true);
  eq("is<object>([])", mod.isLowerObject([]), false);
  eq("is<object>(null)", mod.isLowerObject(null), false);

  // {} empty object type keeps its Array.isArray guard (byte-identical, unchanged).
  eq("is<{}>({})", mod.isEmptyObject({}), true);
  eq("is<{}>([])", mod.isEmptyObject([]), false);
  eq("is<{}>(null)", mod.isEmptyObject(null), false);

  // The original functional:false producer accepts the generated undefined
  // callable fields. Random generates data without methods; functional:true
  // requires callable fields and therefore rejects those same generated values.
  const objectSample = mod.randomObject();
  const functionSample = mod.randomFuncOnly();
  const acceptsIgnoredFunctions = mode === "default";
  eq(
    "is<Object>(random<Object>())",
    mod.isObject(objectSample),
    acceptsIgnoredFunctions,
  );
  eq(
    "is<{fn:Function}>(random)",
    mod.isFuncMember(functionSample),
    acceptsIgnoredFunctions,
  );
  if (mode === "functional") {
    eq(
      "random Object owns constructor",
      Object.hasOwn(objectSample, "constructor"),
      true,
    );
    eq(
      "random Object constructor is undefined",
      objectSample.constructor,
      undefined,
    );
    eq(
      "random Function member owns fn",
      Object.hasOwn(functionSample, "fn"),
      true,
    );
    eq("random Function member is undefined", functionSample.fn, undefined);
    eq(
      "strict Object rejects explicit undefined constructor",
      mod.isObject({ constructor: undefined }),
      false,
    );
    eq(
      "strict Function member rejects explicit undefined fn",
      mod.isFuncMember({ fn: undefined }),
      false,
    );
  }

  console.log("RAN " + ran + " CASES");

  if (ran !== (mode === "default" ? 27 : 33))
    throw new Error("runtime case census changed: " + ran);
};
