import * as real from "../native-profiles/provenance/node/fixtures/collection/real";
import * as user from "../native-profiles/provenance/node/fixtures/collection/user";

/**
 * Verifies collection declaration provenance in generated validators.
 *
 * Same-spelled module-local collections remain structural while the unchanged
 * ES2015 collection library owns the real Map/Set/weak constructors.
 *
 * 1. Load the authored declarations in the node compiler authority profile.
 * 2. Run all 27 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original nativeCollectionIdentityRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 27 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases Same-spelled module-local collections remain structural while the unchanged ES2015 collection library owns the real Map/Set/weak constructors. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance node entry registers test_native_identity_collection with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual node declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every nativeCollectionIdentityRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_collection = (): void => {
  let ran = 0;
  const failures: string[] = [];
  const eq = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  };

  // A user interface named Map must validate against its own members, not the
  // native Map instanceof path (#2212).
  eq(
    "isUserMap valid",
    user.isUserMap({ brandMap: "x", keyMap: "k", valMap: 1 }),
    true,
  );
  eq(
    "isUserMap missing brand",
    user.isUserMap({ keyMap: "k", valMap: 1 }),
    false,
  );
  eq(
    "isUserMap wrong valMap type",
    user.isUserMap({ brandMap: "x", keyMap: "k", valMap: "1" }),
    false,
  );
  eq(
    "isUserMap rejects a real Map",
    user.isUserMap(new Map([["k", 1]])),
    false,
  );
  eq("isUserMap null", user.isUserMap(null), false);
  eq("isUserMap empty object", user.isUserMap({}), false);

  // A user interface named Set is structural too.
  eq("isUserSet valid", user.isUserSet({ brandSet: "s", elemSet: 2 }), true);
  eq("isUserSet missing brand", user.isUserSet({ elemSet: 2 }), false);
  eq("isUserSet rejects a real Set", user.isUserSet(new Set([1])), false);

  // A user interface named WeakMap is structural, not instanceof WeakMap.
  eq("isUserWeakMap valid", user.isUserWeakMap({ brandWeakMap: "w" }), true);
  eq("isUserWeakMap missing brand", user.isUserWeakMap({}), false);
  eq(
    "isUserWeakMap rejects a real WeakMap",
    user.isUserWeakMap(new WeakMap()),
    false,
  );

  // A user interface named WeakSet is structural, not instanceof WeakSet.
  eq("isUserWeakSet valid", user.isUserWeakSet({ brandWeakSet: "z" }), true);
  eq("isUserWeakSet missing brand", user.isUserWeakSet({}), false);
  eq(
    "isUserWeakSet rejects a real WeakSet",
    user.isUserWeakSet(new WeakSet()),
    false,
  );

  // The genuine globals keep their instanceof check and accept a real instance
  // while rejecting a plain object of the same shape.
  eq("isRealMap real", real.isRealMap(new Map([["a", 1]])), true);
  eq("isRealMap empty real", real.isRealMap(new Map()), true);
  eq("isRealMap plain object", real.isRealMap({}), false);
  eq(
    "isRealMap user Map shape",
    real.isRealMap({ brandMap: "x", keyMap: "k", valMap: 1 }),
    false,
  );

  eq("isRealSet real", real.isRealSet(new Set([1, 2])), true);
  eq("isRealSet plain object", real.isRealSet({}), false);

  eq("isRealWeakMap real", real.isRealWeakMap(new WeakMap()), true);
  eq("isRealWeakMap plain object", real.isRealWeakMap({}), false);

  eq("isRealWeakSet real", real.isRealWeakSet(new WeakSet()), true);
  eq("isRealWeakSet plain object", real.isRealWeakSet({}), false);

  // Real collections stay disjoint from one another.
  eq("isRealMap rejects a real Set", real.isRealMap(new Set()), false);
  eq(
    "isRealWeakMap rejects a real WeakSet",
    real.isRealWeakMap(new WeakSet()),
    false,
  );

  if (ran !== 27)
    throw new Error("native identity observation census changed: " + ran);

  if (failures.length) throw new Error(failures.join("\n"));
};
