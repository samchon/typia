import typia from "typia";

enum MyEnum {
  A = "a",
  B = "b",
}
interface Foo {
  a: number;
}
interface Bar {
  b: number;
}

// Every distributed member is a non-object base & a real-data object — all pruned
// to never. The union must validate as never, never as accept-everything.
const isEnumData = typia.createIs<MyEnum & { data: number }>();
const isUnionData = typia.createIs<(string | number) & { data: number }>();
const isUnionNested = typia.createIs<
  (string | number) & { nested: { a: string } }
>();
const isUnionMulti = typia.createIs<
  (string | number) & { a: string; b: number }
>();

// A "decisive" reduce_union reduction that matches no member is also uninhabited.
// The constraint is decisive (a named/shareable object, or a primitive/native/
// array), unlike an inline object — that is the path with no member-write, which
// must render as never, not the default-required accept-everything.
const isPrimNamed = typia.createIs<(string | number) & Foo>();
const isObjPrim = typia.createIs<({ a: number } | { b: number }) & string>();
const isNamedObjPrim = typia.createIs<(Foo | Bar) & string>();
const isNamedObjArray = typia.createIs<(Foo | Bar) & number[]>();

// A union narrowed to its surviving object member keeps validating that object —
// the never-pruning guard must not fire when a member contributes a bucket.
const isNarrowPrimitive = typia.createIs<
  (string | { a: number }) & { a: number }
>();
const isNarrowNumber = typia.createIs<
  (number | { a: number }) & { a: number }
>();

// A nullary member (null / undefined) sets a flag without a bucket, so the union
// still reaches the all-pruned guard with empty size. The guard must NOT swallow
// it: 'null | never' is 'null' (accepts only null, rejects undefined); 'undefined
// | never' is 'undefined'; their combination accepts both — never accept-everything.
const isNullNever = typia.createIs<null | (string & { data: number })>();
const isUndefinedNever = typia.createIs<
  undefined | (string & { data: number })
>();
const isNullUndefinedNever = typia.createIs<
  null | undefined | (string & { data: number })
>();
const fixture = {
  isEnumData,
  isUnionData,
  isUnionNested,
  isUnionMulti,
  isPrimNamed,
  isObjPrim,
  isNamedObjPrim,
  isNamedObjArray,
  isNarrowPrimitive,
  isNarrowNumber,
  isNullNever,
  isUndefinedNever,
  isNullUndefinedNever,
};

/**
 * Verifies intersection all never union in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * intersectionAllNeverUnionSource declarations; the former
 * intersectionAllNeverUnionRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: isNarrowPrimitive {a:1}; isNarrowPrimitive
 * 'x'; isNarrowPrimitive {a:'s'}; isNarrowPrimitive {}; isNarrowNumber {a:1};
 * isNarrowNumber 5.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from intersectionAllNeverUnionRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The source intersections have disjoint primitive or structural requirements, so no authored sample can satisfy their never results. Neighboring intersections that preserve an actual object member must accept that member and reject its wrong property type.
 * @evidence contracts/testing.md#distinguishing-cases Preserves isNarrowPrimitive {a:1}; isNarrowPrimitive 'x'; isNarrowPrimitive {a:'s'}; isNarrowPrimitive {}; isNarrowNumber {a:1}; isNarrowNumber 5; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_intersection_all_never_union in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed intersectionAllNeverUnionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/intersection_all_never_union_transform_test.go intersectionAllNeverUnionRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_intersection_all_never_union = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const check: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(
        label +
          ": expected " +
          JSON.stringify(expected) +
          ", got " +
          JSON.stringify(actual),
      );
    }
  };

  // All-pruned unions reject every concrete value (never-render, not accept-everything).
  const neverValidators: any = {
    isEnumData: mod.isEnumData,
    isUnionData: mod.isUnionData,
    isUnionNested: mod.isUnionNested,
    isUnionMulti: mod.isUnionMulti,
    isPrimNamed: mod.isPrimNamed,
    isObjPrim: mod.isObjPrim,
    isNamedObjPrim: mod.isNamedObjPrim,
    isNamedObjArray: mod.isNamedObjArray,
  };
  const samples: any = [
    "a",
    "b",
    1,
    0,
    true,
    false,
    null,
    {},
    [],
    { data: 1 },
    { a: "s", b: 1 },
    "x",
  ];
  for (const [name, fn] of Object.entries(neverValidators)) {
    for (const value of samples) {
      check(
        name + "(" + JSON.stringify(value) + ")",
        (fn as (value: unknown) => boolean)(value),
        false,
      );
    }
  }

  // Narrowing a union to its object member still validates that object.
  check("isNarrowPrimitive {a:1}", mod.isNarrowPrimitive({ a: 1 }), true);
  check("isNarrowPrimitive 'x'", mod.isNarrowPrimitive("x"), false);
  check("isNarrowPrimitive {a:'s'}", mod.isNarrowPrimitive({ a: "s" }), false);
  check("isNarrowPrimitive {}", mod.isNarrowPrimitive({}), false);
  check("isNarrowNumber {a:1}", mod.isNarrowNumber({ a: 1 }), true);
  check("isNarrowNumber 5", mod.isNarrowNumber(5), false);
  check("isNarrowNumber {a:'s'}", mod.isNarrowNumber({ a: "s" }), false);

  // A nullary member must survive the all-pruned guard: null accepts only null,
  // undefined only undefined — and neither accepts a concrete value or each other.
  check("isNullNever null", mod.isNullNever(null), true);
  check("isNullNever undefined", mod.isNullNever(undefined), false);
  check("isNullNever 'x'", mod.isNullNever("x"), false);
  check("isNullNever {data:1}", mod.isNullNever({ data: 1 }), false);
  check("isUndefinedNever undefined", mod.isUndefinedNever(undefined), true);
  check("isUndefinedNever null", mod.isUndefinedNever(null), false);
  check("isUndefinedNever 'x'", mod.isUndefinedNever("x"), false);
  check("isNullUndefinedNever null", mod.isNullUndefinedNever(null), true);
  check(
    "isNullUndefinedNever undefined",
    mod.isNullUndefinedNever(undefined),
    true,
  );
  check("isNullUndefinedNever 'x'", mod.isNullUndefinedNever("x"), false);
  check(
    "isNullUndefinedNever {data:1}",
    mod.isNullUndefinedNever({ data: 1 }),
    false,
  );

  console.log("ok");
};
