import typia from "typia";

interface WeakMapLike {
  id: number;
  count: number;
}
interface WeakSetLike {
  id: number;
  count: number;
}
interface WeakMapEntry {
  id: number;
  count: number;
}
interface MapLike {
  id: number;
  count: number;
}

const isWeakMapLike = (input: unknown): boolean => typia.is<WeakMapLike>(input);
const isWeakSetLike = (input: unknown): boolean => typia.is<WeakSetLike>(input);
const isWeakMapEntry = (input: unknown): boolean =>
  typia.is<WeakMapEntry>(input);
const isMapLike = (input: unknown): boolean => typia.is<MapLike>(input);
const isNativeWeakMap = (input: unknown): boolean =>
  typia.is<WeakMap<object, number>>(input);
const isNativeWeakSet = (input: unknown): boolean =>
  typia.is<WeakSet<object>>(input);
const fixture = {
  isWeakMapLike,
  isWeakSetLike,
  isWeakMapEntry,
  isMapLike,
  isNativeWeakMap,
  isNativeWeakSet,
};

/**
 * Verifies native generic name guard is in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * nativeGenericNameGuardSource declarations; the former
 * nativeGenericNameGuardRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: WeakMapLike accepts its shape; WeakMapLike
 * rejects a missing property; WeakMapLike rejects a wrong property type;
 * WeakMapLike rejects a real WeakMap; WeakSetLike accepts its shape;
 * WeakSetLike rejects a missing property.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from nativeGenericNameGuardRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The user interfaces' explicit id/count members determine structural acceptance. Real WeakMap/WeakSet instances and plain objects establish runtime-native controls; name prefixes alone cannot justify native classification.
 * @evidence contracts/testing.md#distinguishing-cases Preserves WeakMapLike accepts its shape; WeakMapLike rejects a missing property; WeakMapLike rejects a wrong property type; WeakMapLike rejects a real WeakMap; WeakSetLike accepts its shape; WeakSetLike rejects a missing property; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_native_generic_name_guard_is in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed nativeGenericNameGuardSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/native_generic_name_guard_is_transform_test.go nativeGenericNameGuardRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_native_generic_name_guard_is = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };

  const shaped: any = { id: 1, count: 2 };

  // A user interface whose name is merely prefixed by a native generic must
  // validate against its declared shape, not the native instanceof path.
  expect("WeakMapLike accepts its shape", mod.isWeakMapLike(shaped), true);
  expect(
    "WeakMapLike rejects a missing property",
    mod.isWeakMapLike({ id: 1 }),
    false,
  );
  expect(
    "WeakMapLike rejects a wrong property type",
    mod.isWeakMapLike({ id: 1, count: "2" }),
    false,
  );
  expect(
    "WeakMapLike rejects a real WeakMap",
    mod.isWeakMapLike(new WeakMap()),
    false,
  );

  expect("WeakSetLike accepts its shape", mod.isWeakSetLike(shaped), true);
  expect(
    "WeakSetLike rejects a missing property",
    mod.isWeakSetLike({ id: 1 }),
    false,
  );
  expect(
    "WeakSetLike rejects a real WeakSet",
    mod.isWeakSetLike(new WeakSet()),
    false,
  );

  expect("WeakMapEntry accepts its shape", mod.isWeakMapEntry(shaped), true);
  expect(
    "WeakMapEntry rejects a missing property",
    mod.isWeakMapEntry({ id: 1 }),
    false,
  );

  // MapLike is the already-guarded control: it stays a plain object exactly as
  // the WeakMap*/WeakSet* names now do.
  expect("MapLike control accepts its shape", mod.isMapLike(shaped), true);
  expect(
    "MapLike control rejects a missing property",
    mod.isMapLike({ id: 1 }),
    false,
  );

  // Genuine native generics always carry angle brackets, so the exact-name guard
  // keeps them on the native instanceof path unchanged.
  expect(
    "native WeakMap accepts an instance",
    mod.isNativeWeakMap(new WeakMap()),
    true,
  );
  expect(
    "native WeakMap rejects a plain object",
    mod.isNativeWeakMap(shaped),
    false,
  );
  expect(
    "native WeakMap rejects a WeakSet",
    mod.isNativeWeakMap(new WeakSet()),
    false,
  );

  expect(
    "native WeakSet accepts an instance",
    mod.isNativeWeakSet(new WeakSet()),
    true,
  );
  expect(
    "native WeakSet rejects a plain object",
    mod.isNativeWeakSet(shaped),
    false,
  );
  expect(
    "native WeakSet rejects a WeakMap",
    mod.isNativeWeakSet(new WeakMap()),
    false,
  );
};
