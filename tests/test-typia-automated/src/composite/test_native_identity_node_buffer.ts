import * as legacy from "buffer";
import * as nodeModule from "node:buffer";

import * as controls from "../native-profiles/provenance/node/fixtures/node-buffer/controls";
import * as validators from "../native-profiles/provenance/node/fixtures/node-buffer/input";

/**
 * Verifies node buffer declaration provenance in generated validators.
 *
 * Node and legacy buffer exports, global bridges and optional branded aliases
 * keep runtime Blob/File identity; required-data intersection union arms are
 * pruned and package/ambient lookalikes remain structural.
 *
 * 1. Load the authored declarations in the node compiler authority profile.
 * 2. Run all 30 original runtime observations and compare their authored outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the original nodeBufferNativeExportsRuntimeRunner callbacks against real instances, structural objects and adjacent negative inputs; all 30 original observations and their labels remain below.
 * @evidence contracts/testing.md#independent-expectations The declaration provider determines native ownership; the authored brands, constructor instances and original literal outcomes establish the oracle independently of emission. Expected values are not generated from the transformer.
 * @evidence contracts/testing.md#distinguishing-cases Node and legacy buffer exports, global bridges and optional branded aliases keep runtime Blob/File identity; required-data intersection union arms are pruned and package/ambient lookalikes remain structural. The preserved census detects a dropped observation; the Go owner retains emission-specific checks.
 * @evidence contracts/testing.md#execution-ownership The provenance node entry registers test_native_identity_node_buffer with executeProfile in the existing automated suite. Its local comparison helpers belong to this case; no per-case compiler or Node subprocess is created.
 * @evidence contracts/e2e.md#necessary-boundary The installed native transform resolves the actual node declaration providers and emits validators which execute on the Node host. A differently configured global namespace or Go output inspection cannot prove these runtime decisions.
 * @evidence contracts/e2e.md#shared-execution This authority profile shares one compiler project and process with every compatible identity case and consumes the workspace's unchanged native plugin artifact. Only incompatible declaration-provider environments require another profile.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Declarations and packages are immutable authored fixtures. Each invocation constructs its own runtime inputs and verdicts; incompatible global providers are separated by compiler profile. The surrounding automated profile runner owns and closes the process.
 * @evidence contracts/e2e.md#preserved-coverage Every nodeBufferNativeExportsRuntimeRunner observation executes here with its original expected value and failure label. The colocated Go unit retains source emission/provenance assertions; this case restores the removed JavaScript execution rather than treating output presence as equivalent.
 */
export const test_native_identity_node_buffer = (): void => {
  const node = nodeModule;

  const blobPlain = { size: 1, type: "text/plain" };
  const filePlain = {
    lastModified: 0,
    name: "x.txt",
    size: 1,
    type: "text/plain",
    webkitRelativePath: "",
  };

  const cases: ReadonlyArray<readonly [string, boolean, boolean]> = [
    [
      "node:buffer Blob real",
      validators.isNodeBlob(new node.Blob(["x"], { type: "text/plain" })),
      true,
    ],
    ["node:buffer Blob plain", validators.isNodeBlob(blobPlain), false],
    [
      "node:buffer File real",
      validators.isNodeFile(
        new node.File(["x"], "x.txt", { lastModified: 0, type: "text/plain" }),
      ),
      true,
    ],
    ["node:buffer File plain", validators.isNodeFile(filePlain), false],
    [
      "buffer Blob real",
      validators.isLegacyBlob(new legacy.Blob(["x"], { type: "text/plain" })),
      true,
    ],
    ["buffer Blob plain", validators.isLegacyBlob(blobPlain), false],
    [
      "buffer File real",
      validators.isLegacyFile(
        new legacy.File(["x"], "x.txt", {
          lastModified: 0,
          type: "text/plain",
        }),
      ),
      true,
    ],
    ["buffer File plain", validators.isLegacyFile(filePlain), false],
    [
      "global Blob real",
      validators.isGlobalBlob(new Blob(["x"], { type: "text/plain" })),
      true,
    ],
    ["global Blob plain", validators.isGlobalBlob(blobPlain), false],
    [
      "global File real",
      validators.isGlobalFile(
        new File(["x"], "x.txt", { lastModified: 0, type: "text/plain" }),
      ),
      true,
    ],
    ["global File plain", validators.isGlobalFile(filePlain), false],
  ];

  const intersectionCases: ReadonlyArray<readonly [string, boolean, boolean]> =
    [
      [
        "branded Node Blob real",
        validators.isBrandedNodeBlob(new node.Blob(["x"])),
        true,
      ],
      [
        "branded Node Blob plain",
        validators.isBrandedNodeBlob(blobPlain),
        false,
      ],
      [
        "branded Node File real",
        validators.isBrandedNodeFile(new node.File(["x"], "x.txt")),
        true,
      ],
      [
        "branded Node File plain",
        validators.isBrandedNodeFile(filePlain),
        false,
      ],
      [
        "Node Blob intersection pruned",
        validators.isNodeBlobIntersectionUnion(
          Object.assign(new node.Blob(["x"]), { blobLabel: "x" }),
        ),
        false,
      ],
      [
        "Node Blob intersection plain",
        validators.isNodeBlobIntersectionUnion({
          ...blobPlain,
          blobLabel: "x",
        }),
        false,
      ],
      [
        "Node Blob intersection other",
        validators.isNodeBlobIntersectionUnion({ nodeBlobOk: true }),
        true,
      ],
      [
        "Node File intersection pruned",
        validators.isNodeFileIntersectionUnion(
          Object.assign(new node.File(["x"], "x.txt"), { fileLabel: "x" }),
        ),
        false,
      ],
      [
        "Node File intersection plain",
        validators.isNodeFileIntersectionUnion({
          ...filePlain,
          fileLabel: "x",
        }),
        false,
      ],
      [
        "Node File intersection other",
        validators.isNodeFileIntersectionUnion({ nodeFileOk: true }),
        true,
      ],
    ];

  const packageBlob = { packageBrand: "package", size: 1, type: "text/plain" };
  const packageFile = {
    ...packageBlob,
    lastModified: 0,
    name: "x.txt",
    webkitRelativePath: "",
  };
  const ambientBlob = { ambientBrand: "ambient", size: 1, type: "text/plain" };
  const ambientFile = {
    ...ambientBlob,
    lastModified: 0,
    name: "x.txt",
    webkitRelativePath: "",
  };
  const controlCases: ReadonlyArray<readonly [string, boolean, boolean]> = [
    ["package Blob structural", controls.isPackageBlob(packageBlob), true],
    [
      "package Blob rejects native",
      controls.isPackageBlob(new node.Blob(["x"])),
      false,
    ],
    ["package File structural", controls.isPackageFile(packageFile), true],
    [
      "package File rejects native",
      controls.isPackageFile(new node.File(["x"], "x.txt")),
      false,
    ],
    ["ambient Blob structural", controls.isAmbientBlob(ambientBlob), true],
    [
      "ambient Blob rejects native",
      controls.isAmbientBlob(new node.Blob(["x"])),
      false,
    ],
    ["ambient File structural", controls.isAmbientFile(ambientFile), true],
    [
      "ambient File rejects native",
      controls.isAmbientFile(new node.File(["x"], "x.txt")),
      false,
    ],
  ];

  const failures: string[] = [];
  for (const [name, actual, expected] of [
    ...cases,
    ...intersectionCases,
    ...controlCases,
  ]) {
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  }
  if (
    cases.length !== 12 ||
    intersectionCases.length !== 10 ||
    controlCases.length !== 8
  )
    throw new Error("native identity observation census changed");
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
