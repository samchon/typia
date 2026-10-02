import * as natives from "../native-profiles/provenance/node/fixtures/package-declaration/native";
import * as packageTypes from "../native-profiles/provenance/node/fixtures/package-declaration/package";

/**
 * Verifies package declaration declaration provenance in generated validators.
 *
 * Package d.ts declarations do not acquire native identity from Date/collection
 * names; equally shaped local controls and real default/Node natives
 * distinguish provenance from shape.
 *
 * 1. Load the authored declarations in the node compiler authority profile.
 * 2. Run all 30 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original packageDeclarationNativeIdentityRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 30 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases Package d.ts declarations do not acquire native identity from Date/collection names; equally shaped local controls and real default/Node natives distinguish provenance from shape. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance node entry registers test_native_identity_package_declaration with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual node declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every packageDeclarationNativeIdentityRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_package_declaration = (): void => {
  let ran = 0;
  const failures: string[] = [];
  const eq = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  };

  eq("package Date valid", packageTypes.isPackageDate({ stamp: 1 }), true);
  eq("package Date invalid", packageTypes.isPackageDate({}), false);
  eq(
    "package Date rejects native",
    packageTypes.isPackageDate(new Date()),
    false,
  );
  eq(
    "package Map valid",
    packageTypes.isPackageMap({ brandMap: "x", valueMap: 1 }),
    true,
  );
  eq(
    "package Map invalid",
    packageTypes.isPackageMap({ brandMap: "x" }),
    false,
  );
  eq(
    "package Map rejects native",
    packageTypes.isPackageMap(new Map([["x", 1]])),
    false,
  );
  eq("package Set valid", packageTypes.isPackageSet({ brandSet: "x" }), true);
  eq("package Set invalid", packageTypes.isPackageSet({}), false);
  eq(
    "package Set rejects native",
    packageTypes.isPackageSet(new Set(["x"])),
    false,
  );
  eq(
    "package WeakMap valid",
    packageTypes.isPackageWeakMap({ brandWeakMap: {}, valueWeakMap: "x" }),
    true,
  );
  eq(
    "package WeakMap invalid",
    packageTypes.isPackageWeakMap({ brandWeakMap: {} }),
    false,
  );
  eq(
    "package WeakMap rejects native",
    packageTypes.isPackageWeakMap(new WeakMap()),
    false,
  );

  eq("local Date control", packageTypes.isLocalDate({ stamp: 1 }), true);
  eq(
    "local Map control",
    packageTypes.isLocalMap({ brandMap: "x", valueMap: 1 }),
    true,
  );
  eq("local Set control", packageTypes.isLocalSet({ brandSet: "x" }), true);
  eq(
    "local WeakMap control",
    packageTypes.isLocalWeakMap({ brandWeakMap: {}, valueWeakMap: "x" }),
    true,
  );

  eq("native Date real", natives.isNativeDate(new Date()), true);
  eq("native Date plain", natives.isNativeDate({}), false);
  eq("native Map real", natives.isNativeMap(new Map([["x", 1]])), true);
  eq("native Map plain", natives.isNativeMap({}), false);
  eq("native Set real", natives.isNativeSet(new Set(["x"])), true);
  eq("native Set plain", natives.isNativeSet({}), false);
  eq("native WeakMap real", natives.isNativeWeakMap(new WeakMap()), true);
  eq("native WeakMap plain", natives.isNativeWeakMap({}), false);
  eq("native WeakSet real", natives.isNativeWeakSet(new WeakSet()), true);
  eq("native WeakSet plain", natives.isNativeWeakSet({}), false);
  eq("Node File real", natives.isNativeFile(new File(["x"], "x.txt")), true);
  eq(
    "Node File plain",
    natives.isNativeFile({ name: "x.txt", size: 1 }),
    false,
  );
  eq("Node Blob real", natives.isNativeBlob(new Blob(["x"])), true);
  eq(
    "Node Blob plain",
    natives.isNativeBlob({ size: 1, type: "text/plain" }),
    false,
  );

  if (ran !== 30)
    throw new Error("native identity observation census changed: " + ran);
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
