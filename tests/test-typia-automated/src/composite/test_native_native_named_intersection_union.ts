import typia from "typia";

interface Date {
  stamp: number;
}
interface String {
  stringValue: string;
}
interface Number {
  numberValue: number;
}
interface Map<K, V> {
  brandMap: K;
  valueMap: V;
}
interface Set<T> {
  brandSet: T;
}
interface WeakMap<K extends object, V> {
  brandWeakMap: K;
  valueWeakMap: V;
}
interface WeakSet<T extends object> {
  brandWeakSet: T;
}
type LocalIntersection = Date & { label: string };
type LocalUnion = LocalIntersection | { ok: boolean };
type LocalStringUnion = (String & { label: string }) | { stringOk: boolean };
type LocalNumberUnion = (Number & { label: string }) | { numberOk: boolean };
type LocalMapUnion =
  | (Map<string, number> & { label: string })
  | { mapOk: boolean };
type LocalSetUnion = (Set<string> & { label: string }) | { setOk: boolean };
type LocalWeakMapUnion =
  | (WeakMap<object, string> & { label: string })
  | { weakMapOk: boolean };
type LocalWeakSetUnion =
  | (WeakSet<object> & { label: string })
  | { weakSetOk: boolean };

type NativeDate = InstanceType<typeof globalThis.Date>;
type NativeIntersectionUnion =
  | (NativeDate & { label: string })
  | { ok: boolean };
type NativeString = InstanceType<typeof globalThis.String>;
type NativeNumber = InstanceType<typeof globalThis.Number>;
type NativeStringIntersectionUnion =
  | (NativeString & { label: string })
  | { nativeStringOk: boolean };
type NativeNumberIntersectionUnion =
  | (NativeNumber & { label: string })
  | { nativeNumberOk: boolean };
type ImpossibleUnion = (string & { data: number }) | { ok: boolean };

const isLocalDate = typia.createIs<Date>();
const isLocalIntersection = typia.createIs<LocalIntersection>();
const isLocalUnion = typia.createIs<LocalUnion>();
const isLocalStringUnion = typia.createIs<LocalStringUnion>();
const isLocalNumberUnion = typia.createIs<LocalNumberUnion>();
const isLocalMapUnion = typia.createIs<LocalMapUnion>();
const isLocalSetUnion = typia.createIs<LocalSetUnion>();
const isLocalWeakMapUnion = typia.createIs<LocalWeakMapUnion>();
const isLocalWeakSetUnion = typia.createIs<LocalWeakSetUnion>();
const isNativeDate = typia.createIs<NativeDate>();
const isNativeIntersectionUnion = typia.createIs<NativeIntersectionUnion>();
const isNativeStringIntersectionUnion =
  typia.createIs<NativeStringIntersectionUnion>();
const isNativeNumberIntersectionUnion =
  typia.createIs<NativeNumberIntersectionUnion>();
const isImpossibleUnion = typia.createIs<ImpossibleUnion>();
const fixture = {
  isLocalDate,
  isLocalIntersection,
  isLocalUnion,
  isLocalStringUnion,
  isLocalNumberUnion,
  isLocalMapUnion,
  isLocalSetUnion,
  isLocalWeakMapUnion,
  isLocalWeakSetUnion,
  isNativeDate,
  isNativeIntersectionUnion,
  isNativeStringIntersectionUnion,
  isNativeNumberIntersectionUnion,
  isImpossibleUnion,
};

/**
 * Verifies native named intersection union in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * nativeNamedIntersectionUnionSource declarations; the former
 * nativeNamedIntersectionUnionRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: local Date valid; local Date
 * native; local Date missing stamp; local intersection valid; local
 * intersection missing label; local intersection missing stamp.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from nativeNamedIntersectionUnionRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored local interfaces require their structural fields despite matching native names. Original regression literals separately pin typia's existing policy that genuine Date/String/Number intersections with ordinary data-object members are pruned from these unions, while neighboring ordinary arms survive; those rejecting controls are a typia policy anchor, not proof that TypeScript cannot represent such an instance. Actual native instances and literal near-misses supply independent observations.
 * @evidence contracts/testing.md#distinguishing-cases Preserves local Date valid; local Date native; local Date missing stamp; local intersection valid; local intersection missing label; local intersection missing stamp; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_native_named_intersection_union in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed nativeNamedIntersectionUnionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/native_named_intersection_union_transform_test.go nativeNamedIntersectionUnionRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_native_named_intersection_union = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  let ran: any = 0;
  const failures: any = [];
  const check: any = (label: any, actual: any, expected: any): any => {
    ran += 1;
    if (actual !== expected) {
      failures.push(label + ": expected " + expected + " but got " + actual);
    }
  };

  check("local Date valid", mod.isLocalDate({ stamp: 1 }), true);
  check("local Date native", mod.isLocalDate(new Date(0)), false);
  check("local Date missing stamp", mod.isLocalDate({}), false);

  check(
    "local intersection valid",
    mod.isLocalIntersection({ stamp: 1, label: "x" }),
    true,
  );
  check(
    "local intersection missing label",
    mod.isLocalIntersection({ stamp: 1 }),
    false,
  );
  check(
    "local intersection missing stamp",
    mod.isLocalIntersection({ label: "x" }),
    false,
  );

  check(
    "local union structural arm",
    mod.isLocalUnion({ stamp: 1, label: "x" }),
    true,
  );
  check("local union other arm", mod.isLocalUnion({ ok: true }), true);
  check("local union near-miss", mod.isLocalUnion({ stamp: 1 }), false);
  check("local union bad other arm", mod.isLocalUnion({ ok: "yes" }), false);

  check(
    "local String union structural arm",
    mod.isLocalStringUnion({ stringValue: "x", label: "s" }),
    true,
  );
  check(
    "local String union other arm",
    mod.isLocalStringUnion({ stringOk: true }),
    true,
  );
  check(
    "local String union near-miss",
    mod.isLocalStringUnion({ stringValue: "x" }),
    false,
  );
  check(
    "local String union bad other arm",
    mod.isLocalStringUnion({ stringOk: "yes" }),
    false,
  );
  check(
    "local Number union structural arm",
    mod.isLocalNumberUnion({ numberValue: 1, label: "n" }),
    true,
  );
  check(
    "local Number union other arm",
    mod.isLocalNumberUnion({ numberOk: true }),
    true,
  );
  check(
    "local Number union near-miss",
    mod.isLocalNumberUnion({ numberValue: 1 }),
    false,
  );
  check(
    "local Number union bad other arm",
    mod.isLocalNumberUnion({ numberOk: "yes" }),
    false,
  );

  check(
    "local Map union structural arm",
    mod.isLocalMapUnion({ brandMap: "x", valueMap: 1, label: "m" }),
    true,
  );
  check(
    "local Map union other arm",
    mod.isLocalMapUnion({ mapOk: true }),
    true,
  );
  check(
    "local Map union near-miss",
    mod.isLocalMapUnion({ brandMap: "x", valueMap: 1 }),
    false,
  );
  check(
    "local Set union structural arm",
    mod.isLocalSetUnion({ brandSet: "x", label: "s" }),
    true,
  );
  check(
    "local Set union other arm",
    mod.isLocalSetUnion({ setOk: true }),
    true,
  );
  check(
    "local Set union near-miss",
    mod.isLocalSetUnion({ brandSet: "x" }),
    false,
  );
  check(
    "local WeakMap union structural arm",
    mod.isLocalWeakMapUnion({
      brandWeakMap: {},
      valueWeakMap: "x",
      label: "wm",
    }),
    true,
  );
  check(
    "local WeakMap union other arm",
    mod.isLocalWeakMapUnion({ weakMapOk: true }),
    true,
  );
  check(
    "local WeakMap union near-miss",
    mod.isLocalWeakMapUnion({ brandWeakMap: {}, valueWeakMap: "x" }),
    false,
  );
  check(
    "local WeakSet union structural arm",
    mod.isLocalWeakSetUnion({ brandWeakSet: {}, label: "ws" }),
    true,
  );
  check(
    "local WeakSet union other arm",
    mod.isLocalWeakSetUnion({ weakSetOk: true }),
    true,
  );
  check(
    "local WeakSet union near-miss",
    mod.isLocalWeakSetUnion({ brandWeakSet: {} }),
    false,
  );

  check("genuine Date", mod.isNativeDate(new Date(0)), true);
  check("genuine Date plain object", mod.isNativeDate({}), false);
  check(
    "genuine native intersection pruned",
    mod.isNativeIntersectionUnion(Object.assign(new Date(0), { label: "x" })),
    false,
  );
  check(
    "genuine native union other arm",
    mod.isNativeIntersectionUnion({ ok: true }),
    true,
  );
  check(
    "genuine native plain near-miss",
    mod.isNativeIntersectionUnion({ label: "x" }),
    false,
  );

  check(
    "genuine String wrapper intersection pruned",
    mod.isNativeStringIntersectionUnion(
      Object.assign(new String("x"), { label: "s" }),
    ),
    false,
  );
  check(
    "genuine String wrapper union other arm",
    mod.isNativeStringIntersectionUnion({ nativeStringOk: true }),
    true,
  );
  check(
    "genuine String wrapper plain near-miss",
    mod.isNativeStringIntersectionUnion({ label: "s" }),
    false,
  );
  check(
    "genuine Number wrapper intersection pruned",
    mod.isNativeNumberIntersectionUnion(
      Object.assign(new Number(1), { label: "n" }),
    ),
    false,
  );
  check(
    "genuine Number wrapper union other arm",
    mod.isNativeNumberIntersectionUnion({ nativeNumberOk: true }),
    true,
  );
  check(
    "genuine Number wrapper plain near-miss",
    mod.isNativeNumberIntersectionUnion({ label: "n" }),
    false,
  );

  check(
    "impossible union other arm",
    mod.isImpossibleUnion({ ok: true }),
    true,
  );
  check("impossible union primitive", mod.isImpossibleUnion("x"), false);
  check("impossible union object", mod.isImpossibleUnion({ data: 1 }), false);

  console.log("RAN " + ran + " CASES");
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
