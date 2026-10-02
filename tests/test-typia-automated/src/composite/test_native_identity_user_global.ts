import * as controls from "../native-profiles/provenance/user-global/fixtures/controls";
import * as validators from "../native-profiles/provenance/user-global/fixtures/input";
import "../native-profiles/provenance/user-global/fixtures/schemas";

/**
 * Verifies user global declaration provenance in generated validators.
 *
 * With DOM and Node type providers absent, user global interface/class
 * declarations own Blob/File. Direct/factory validators and composed aliases
 * must retain their structural brands.
 *
 * The profile uses noCheck to preserve the original transform-only boundary:
 * the native checker still resolves these types and the plugin emits actual
 * callbacks, while unrelated public-source DOM diagnostics are outside this
 * runtime claim. The original Go unit owns declaration and emitted-shape
 * checks; this profile does not claim a full consumer typecheck.
 *
 * 1. Load the authored declarations in the user-global compiler authority profile.
 * 2. Run all 28 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original userGlobalNativeIdentityRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 28 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases With DOM and Node type providers absent, user global interface/class declarations own Blob/File. Direct/factory validators and composed aliases must retain their structural brands. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance user-global entry registers test_native_identity_user_global with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual user-global declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every userGlobalNativeIdentityRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_user_global = (): void => {
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
  const throws = (name: string, run: () => unknown) => {
    ran += 1;
    try {
      run();
      failures.push(name + ": expected a throw but none happened");
    } catch {}
  };

  const userBlob = { userBlobBrand: "user" };
  const userFile = { userBlobBrand: "user", userFileBrand: "user" };
  const realBlob = new runtimeHost.Blob(["x"]);
  const realFile = new runtimeHost.File(["x"], "x.txt");

  eq("is user File", validators.isFile(userFile), true);
  eq("is real File", validators.isFile(realFile), false);
  eq("assert user File", validators.assertFile(userFile), userFile);
  throws("assert real File", () => validators.assertFile(realFile));
  eq("assertGuard user File", validators.assertGuardFile(userFile), undefined);
  throws("assertGuard real File", () => validators.assertGuardFile(realFile));
  eq("validate user File", validators.validateFile(userFile).success, true);
  eq("validate real File", validators.validateFile(realFile).success, false);
  eq("equals user File", validators.equalsFile(userFile), true);
  eq("equals real File", validators.equalsFile(realFile), false);
  eq(
    "random Blob brand",
    typeof validators.randomBlob().userBlobBrand,
    "string",
  );

  eq("createIs user Blob", validators.createdIsBlob(userBlob), true);
  eq("createIs real Blob", validators.createdIsBlob(realBlob), false);
  eq("createIs user File", validators.createdIsFile(userFile), true);
  eq("createIs real File", validators.createdIsFile(realFile), false);
  eq("alias user File", validators.createdIsAlias(userFile), true);
  eq("alias real File", validators.createdIsAlias(realFile), false);
  eq("re-export user File", validators.createdIsReexported(userFile), true);
  eq("re-export real File", validators.createdIsReexported(realFile), false);
  eq(
    "branded user File",
    validators.createdIsBranded({ ...userFile, intersectionBrand: "x" }),
    true,
  );
  eq(
    "branded user File without brand",
    validators.createdIsBranded(userFile),
    false,
  );
  eq(
    "union branded arm",
    validators.createdIsUnion({ ...userFile, intersectionBrand: "x" }),
    true,
  );
  eq(
    "union control arm",
    validators.createdIsUnion({ unionControl: true }),
    true,
  );
  eq("union rejects real File", validators.createdIsUnion(realFile), false);
  eq(
    "nested user File",
    validators.createdIsNested({ nestedHolder: userFile }),
    true,
  );
  eq(
    "nested real File",
    validators.createdIsNested({ nestedHolder: realFile }),
    false,
  );

  eq(
    "near-miss FileEntry",
    controls.createdIsFileEntry({ nearMissBrand: "x" }),
    true,
  );
  eq("prefix Blobby", controls.createdIsBlobby({ prefixBrand: "x" }), true);

  if (ran !== 28)
    throw new Error("native identity observation census changed: " + ran);
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
