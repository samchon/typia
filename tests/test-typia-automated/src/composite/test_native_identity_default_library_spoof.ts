import * as validators from "../native-profiles/provenance/spoof-library/fixtures/input";

/**
 * Verifies default library spoof declaration provenance in generated
 * validators.
 *
 * Spoofed library filenames must retain package-owned structural Blob/File
 * brands. A real runtime constructor has no such brand.
 *
 * The profile uses noCheck to preserve the original transform-only boundary:
 * the native checker still resolves these types and the plugin emits actual
 * callbacks, while unrelated public-source DOM diagnostics are outside this
 * runtime claim. The original Go unit owns declaration and emitted-shape
 * checks; this profile does not claim a full consumer typecheck.
 *
 * 1. Load the authored declarations in the spoof-library compiler authority
 *    profile.
 * 2. Run all 6 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original defaultLibrarySpoofNativeIdentityRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 6 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases Spoofed library filenames must retain package-owned structural Blob/File brands. A real runtime constructor has no such brand. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance spoof-library entry registers test_native_identity_default_library_spoof with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual spoof-library declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every defaultLibrarySpoofNativeIdentityRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_default_library_spoof = (): void => {
  const runtimeHost = globalThis as unknown as {
    Blob: new (parts: unknown[], options?: unknown) => unknown;
    File: new (parts: unknown[], name: string, options?: unknown) => unknown;
  };

  let ran = 0;
  const failures: string[] = [];
  const eq = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  };

  const spoofBlob = {
    size: 1,
    type: "text/plain",
    spoofBlobBrand: "spoof",
  };
  const spoofFile = {
    ...spoofBlob,
    lastModified: 0,
    name: "x.txt",
    webkitRelativePath: "",
    spoofFileBrand: "spoof",
  };

  eq("spoof Blob structural", validators.createdIsBlob(spoofBlob), true);
  eq(
    "spoof Blob rejects runtime instance",
    validators.createdIsBlob(new runtimeHost.Blob(["x"])),
    false,
  );
  eq(
    "spoof Blob missing brand",
    validators.createdIsBlob({ size: 1, type: "text/plain" }),
    false,
  );
  eq("spoof File structural", validators.createdIsFile(spoofFile), true);
  eq(
    "spoof File rejects runtime instance",
    validators.createdIsFile(new runtimeHost.File(["x"], "x.txt")),
    false,
  );
  eq(
    "spoof File missing brand",
    validators.createdIsFile({ ...spoofFile, spoofFileBrand: undefined }),
    false,
  );

  if (ran !== 6)
    throw new Error("native identity observation census changed: " + ran);
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
