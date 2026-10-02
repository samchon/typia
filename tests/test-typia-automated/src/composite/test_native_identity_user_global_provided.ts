import * as validators from "../native-profiles/provenance/node/fixtures/provided/input";

/**
 * Verifies user global provided declaration provenance in generated validators.
 *
 * An empty user augmentation cannot replace the genuine Node Blob/File global
 * bridge or the standard-library constructor ownership.
 *
 * 1. Load the authored declarations in the node compiler authority profile.
 * 2. Run all 18 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original userGlobalNativeIdentityProvidedRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 18 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases An empty user augmentation cannot replace the genuine Node Blob/File global bridge or the standard-library constructor ownership. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance node entry registers test_native_identity_user_global_provided with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual node declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every userGlobalNativeIdentityProvidedRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_user_global_provided = (): void => {
  let ran = 0;
  const failures: string[] = [];
  const eq = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  };

  eq("Date real", validators.createdIsDate(new Date()), true);
  eq("Date plain", validators.createdIsDate({}), false);
  eq("RegExp real", validators.createdIsRegExp(/x/), true);
  eq("RegExp plain", validators.createdIsRegExp({}), false);
  eq("Uint8Array real", validators.createdIsBytes(new Uint8Array(1)), true);
  eq("Uint8Array plain", validators.createdIsBytes({}), false);
  eq("Map real", validators.createdIsMap(new Map([["x", 1]])), true);
  eq("Map plain", validators.createdIsMap({}), false);
  eq("Set real", validators.createdIsSet(new Set(["x"])), true);
  eq("Set plain", validators.createdIsSet({}), false);
  eq("WeakMap real", validators.createdIsWeakMap(new WeakMap()), true);
  eq("WeakMap plain", validators.createdIsWeakMap({}), false);
  eq("WeakSet real", validators.createdIsWeakSet(new WeakSet()), true);
  eq("WeakSet plain", validators.createdIsWeakSet({}), false);
  eq("File real", validators.createdIsFile(new File(["x"], "x.txt")), true);
  eq("File plain", validators.createdIsFile({ name: "x.txt", size: 1 }), false);
  eq("Blob real", validators.createdIsBlob(new Blob(["x"])), true);
  eq(
    "Blob plain",
    validators.createdIsBlob({ size: 1, type: "text/plain" }),
    false,
  );

  if (ran !== 18)
    throw new Error("native identity observation census changed: " + ran);
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
