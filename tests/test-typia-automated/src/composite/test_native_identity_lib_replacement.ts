import * as validators from "../native-profiles/provenance/replacement/fixtures/input";

/**
 * Verifies lib replacement declaration provenance in generated validators.
 *
 * The compiler must load its installed collection library replacement, then
 * recognize its Map/Set/weak collection declarations and preserve bundled
 * Date/Uint8Array native identity.
 *
 * The profile uses noCheck to preserve the original transform-only boundary:
 * the native checker still resolves these types and the plugin emits actual
 * callbacks, while unrelated public-source DOM diagnostics are outside this
 * runtime claim. The original Go unit owns declaration and emitted-shape
 * checks; this profile does not claim a full consumer typecheck.
 *
 * 1. Load the authored declarations in the replacement compiler authority profile.
 * 2. Run all 13 original runtime observations and two invalid probe controls.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes all 13 original libReplacementNativeIdentityRuntimeRunner observations and rejects the missing/wrong replacement marker in two added probe controls. An unresolved probe falling back to an unrestricted type cannot satisfy those negatives.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases The compiler must load its installed collection library replacement, then recognize its Map/Set/weak collection declarations and preserve bundled Date/Uint8Array native identity. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance replacement entry registers test_native_identity_lib_replacement with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual replacement declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every libReplacementNativeIdentityRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_lib_replacement = (): void => {
  let ran = 0;
  const failures: string[] = [];
  const eq = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  };

  eq(
    "probe structural",
    validators.createdIsProbe({ libReplacementMarker: "x" }),
    true,
  );
  eq("probe missing marker", validators.createdIsProbe({}), false);
  eq(
    "probe wrong marker",
    validators.createdIsProbe({ libReplacementMarker: 1 }),
    false,
  );
  eq("Map real", validators.createdIsMap(new Map([["x", 1]])), true);
  eq("Map plain", validators.createdIsMap({}), false);
  eq("Set real", validators.createdIsSet(new Set(["x"])), true);
  eq("Set plain", validators.createdIsSet({}), false);
  eq("WeakMap real", validators.createdIsWeakMap(new WeakMap()), true);
  eq("WeakMap plain", validators.createdIsWeakMap({}), false);
  eq("WeakSet real", validators.createdIsWeakSet(new WeakSet()), true);
  eq("WeakSet plain", validators.createdIsWeakSet({}), false);
  eq("Date real", validators.createdIsDate(new Date()), true);
  eq("Date plain", validators.createdIsDate({}), false);
  eq("Uint8Array real", validators.createdIsBytes(new Uint8Array(1)), true);
  eq("Uint8Array plain", validators.createdIsBytes({}), false);

  if (ran !== 15)
    throw new Error("native identity observation census changed: " + ran);
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
