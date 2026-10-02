import * as nodeModule from "node:buffer";

import * as validators from "../native-profiles/provenance/spoof-node/fixtures/input";

/**
 * Verifies node buffer spoof declaration provenance in generated validators.
 *
 * A counterfeit @types/node buffer declaration has the same ambient module
 * spelling but no genuine Node declaration ownership. Its own brand must be
 * validated.
 *
 * The profile uses noCheck to preserve the original transform-only boundary:
 * the native checker still resolves these types and the plugin emits actual
 * callbacks, while unrelated public-source DOM diagnostics are outside this
 * runtime claim. The original Go unit owns declaration and emitted-shape
 * checks; this profile does not claim a full consumer typecheck.
 *
 * 1. Load the authored declarations in the spoof-node compiler authority profile.
 * 2. Run all 8 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original nodeBufferNativeExportsSpoofRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 8 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases A counterfeit @types/node buffer declaration has the same ambient module spelling but no genuine Node declaration ownership. Its own brand must be validated. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance spoof-node entry registers test_native_identity_node_buffer_spoof with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual spoof-node declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every nodeBufferNativeExportsSpoofRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_node_buffer_spoof = (): void => {
  const node = nodeModule as unknown as {
    Blob: new (parts: unknown[], options?: unknown) => unknown;
    File: new (parts: unknown[], name: string, options?: unknown) => unknown;
  };
  const blob = { spoofBrand: "fake", size: 1, type: "text/plain" };
  const file = {
    ...blob,
    lastModified: 0,
    name: "x.txt",
    webkitRelativePath: "",
  };
  const cases: ReadonlyArray<readonly [string, boolean, boolean]> = [
    [
      "counterfeit node:buffer Blob structural",
      validators.isNodeBlob(blob),
      true,
    ],
    [
      "counterfeit node:buffer Blob rejects native",
      validators.isNodeBlob(new node.Blob(["x"])),
      false,
    ],
    [
      "counterfeit node:buffer File structural",
      validators.isNodeFile(file),
      true,
    ],
    [
      "counterfeit node:buffer File rejects native",
      validators.isNodeFile(new node.File(["x"], "x.txt")),
      false,
    ],
    ["counterfeit buffer Blob structural", validators.isLegacyBlob(blob), true],
    [
      "counterfeit buffer Blob rejects native",
      validators.isLegacyBlob(new node.Blob(["x"])),
      false,
    ],
    ["counterfeit buffer File structural", validators.isLegacyFile(file), true],
    [
      "counterfeit buffer File rejects native",
      validators.isLegacyFile(new node.File(["x"], "x.txt")),
      false,
    ],
  ];

  const failures: string[] = [];
  for (const [name, actual, expected] of cases) {
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  }
  if (cases.length !== 8)
    throw new Error("counterfeit identity observation census changed");
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
