package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNodeBufferNativeExportsIsTransform preserves runtime-native identity for
// the authoritative Blob and File exports from Node's buffer modules (#1568).
//
// Node's module-exported types and its equivalent bare globals have distinct
// checker symbols even though they describe the same runtime constructors. A
// name-only or global-pointer-only classifier can therefore confuse either the
// authoritative exports or unrelated package declarations with structural
// lookalikes.
//
//  1. Transform validators for Blob and File imported from both Node module
//     spellings, plus their bare-global controls, with DOM libraries excluded.
//  2. Require every validator to emit a runtime-native identity check rather
//     than structural Blob/File property checks.
//  3. Execute real instances and full plain lookalikes through all six emitted
//     validators, requiring exactly twelve runtime outcomes.
//  4. Transform ordinary package and user ambient Blob/File declarations and
//     require their structural members and eight negative-control outcomes.
//  5. Exclude Node types and prove a user-authored counterfeit of the exact
//     node:buffer/buffer module names remains structural in eight more cases,
//     even when its path mimics node_modules/@types/node without package data.
func TestNodeBufferNativeExportsIsTransform(t *testing.T) {
  project := nodeBufferNativeExportsProject(t)
  transform := func(file string) string {
    t.Helper()
    js, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("Node buffer native export transform %s failed: code=%d stderr=\n%s", file, code, errText)
    }
    return js
  }
  js := transform("src/input.ts")
  controlsJS := transform("src/controls.ts")
  spoofProject := nodeBufferNativeExportsSpoofProject(t)
  spoofJS, spoofErrText, spoofCode := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", spoofProject,
      "--tsconfig", "tsconfig.json",
      "--file", "src/input.ts",
      "--output", "js",
    })
  })
  if spoofCode != 0 {
    t.Fatalf("counterfeit Node buffer module transform failed: code=%d stderr=\n%s", spoofCode, spoofErrText)
  }

  failures := []string{}
  for _, expected := range []struct {
    check string
    count int
  }{
    {check: "instanceof Blob", count: 4},
    {check: "instanceof File", count: 4},
  } {
    if actual := strings.Count(js, expected.check); actual != expected.count {
      failures = append(failures, fmt.Sprintf(
        "emit contains %q %d times; expected %d runtime-native validators",
        expected.check,
        actual,
        expected.count,
      ))
    }
  }
  for _, structural := range []string{"webkitRelativePath", ".lastModified", ".size", ".type"} {
    if strings.Contains(js, structural) {
      failures = append(failures, fmt.Sprintf("emit retained structural Blob/File member %q", structural))
    }
  }
  for _, retained := range []string{"nodeBlobOk", "nodeFileOk"} {
    if !strings.Contains(js, retained) {
      failures = append(failures, fmt.Sprintf("native intersection union dropped control arm %q", retained))
    }
  }
  for _, pruned := range []string{"blobLabel", "fileLabel"} {
    if strings.Contains(js, pruned) {
      failures = append(failures, fmt.Sprintf("native intersection union retained pruned member %q", pruned))
    }
  }
  for _, structural := range []string{"packageBrand", "ambientBrand"} {
    if !strings.Contains(controlsJS, structural) {
      failures = append(failures, fmt.Sprintf("structural package/ambient control dropped member %q", structural))
    }
  }
  for _, native := range []string{"instanceof Blob", "instanceof File"} {
    if strings.Contains(controlsJS, native) {
      failures = append(failures, fmt.Sprintf("structural package/ambient control was promoted to %q", native))
    }
  }
  if !strings.Contains(spoofJS, "spoofBrand") {
    failures = append(failures, "counterfeit Node buffer modules dropped their structural brand")
  }
  for _, native := range []string{"instanceof Blob", "instanceof File"} {
    if strings.Contains(spoofJS, native) {
      failures = append(failures, fmt.Sprintf("counterfeit Node buffer module was promoted to %q", native))
    }
  }

  output, runtimeErr := nodeBufferNativeExportsRun(t, project, js, controlsJS)
  if runtimeErr != nil {
    failures = append(failures, fmt.Sprintf("runtime matrix failed: %v\n%s", runtimeErr, output))
  }
  for _, expectedCases := range []string{"RAN 12 CASES", "RAN 10 INTERSECTION CASES", "RAN 8 CONTROL CASES"} {
    if !strings.Contains(output, expectedCases) {
      failures = append(failures, fmt.Sprintf("runtime runner did not report %q; got:\n%s", expectedCases, output))
    }
  }
  spoofOutput, spoofRuntimeErr := nodeBufferNativeExportsSpoofRun(t, spoofProject, spoofJS)
  if spoofRuntimeErr != nil {
    failures = append(failures, fmt.Sprintf("counterfeit runtime matrix failed: %v\n%s", spoofRuntimeErr, spoofOutput))
  }
  const expectedSpoofCases = "RAN 8 COUNTERFEIT CASES"
  if !strings.Contains(spoofOutput, expectedSpoofCases) {
    failures = append(failures, fmt.Sprintf("counterfeit runner did not report %q; got:\n%s", expectedSpoofCases, spoofOutput))
  }
  if len(failures) != 0 {
    t.Fatalf(
      "Node buffer native export mismatches:\n%s\n\nnative emit:\n%s\n\ncontrol emit:\n%s\n\ncounterfeit emit:\n%s",
      strings.Join(failures, "\n"),
      js,
      controlsJS,
      spoofJS,
    )
  }
}

func nodeBufferNativeExportsProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "node-buffer-native-exports-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })

  src := filepath.Join(dir, "src")
  dependency := filepath.Join(dir, "node_modules", "native-buffer-lookalike")
  for _, path := range []string{src, dependency} {
    if err := os.MkdirAll(path, 0o755); err != nil {
      t.Fatalf("mkdir fixture path %s: %v", path, err)
    }
  }
  for path, content := range map[string]string{
    filepath.Join(dir, "tsconfig.json"):       nodeBufferNativeExportsTSConfig,
    filepath.Join(src, "input.ts"):            nodeBufferNativeExportsSource,
    filepath.Join(src, "controls.ts"):         nodeBufferNativeExportsControlSource,
    filepath.Join(src, "node-buffer-augmentation.d.ts"): nodeBufferNativeExportsAugmentation,
    filepath.Join(src, "user-ambient.d.ts"):   nodeBufferNativeExportsAmbientDeclarations,
    filepath.Join(dependency, "package.json"): nodeBufferNativeExportsPackageJSON,
    filepath.Join(dependency, "index.d.ts"):   nodeBufferNativeExportsPackageDeclarations,
  } {
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", path, err)
    }
  }
  return dir
}

func nodeBufferNativeExportsSpoofProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "node-buffer-native-exports-spoof-")
  if err != nil {
    t.Fatalf("create counterfeit fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })

  src := filepath.Join(dir, "src")
  fakeNodeRoot := filepath.Join(src, "node_modules", "@types", "node")
  for _, path := range []string{src, fakeNodeRoot} {
    if err := os.MkdirAll(path, 0o755); err != nil {
      t.Fatalf("mkdir counterfeit source %s: %v", path, err)
    }
  }
  for path, content := range map[string]string{
    filepath.Join(dir, "tsconfig.json"):       nodeBufferNativeExportsSpoofTSConfig,
    filepath.Join(fakeNodeRoot, "buffer.d.ts"): nodeBufferNativeExportsSpoofDeclarations,
    filepath.Join(src, "input.ts"):             nodeBufferNativeExportsSpoofSource,
  } {
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write counterfeit fixture file %s: %v", path, err)
    }
  }
  return dir
}

func nodeBufferNativeExportsRun(t *testing.T, project string, js string, controlsJS string) (string, error) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
    return "", nil
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  for name, content := range map[string]string{
    "input.cjs":    ttscTypiaTestRewriteCommonJS(t, js),
    "controls.cjs": ttscTypiaTestRewriteCommonJS(t, controlsJS),
    "run.cjs":      nodeBufferNativeExportsRuntimeRunner,
  } {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write runtime file %s: %v", name, err)
    }
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  return string(output), err
}

func nodeBufferNativeExportsSpoofRun(t *testing.T, project string, js string) (string, error) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
    return "", nil
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir counterfeit runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  for name, content := range map[string]string{
    "input.cjs": ttscTypiaTestRewriteCommonJS(t, js),
    "run.cjs":   nodeBufferNativeExportsSpoofRuntimeRunner,
  } {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write counterfeit runtime file %s: %v", name, err)
    }
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  return string(output), err
}

const nodeBufferNativeExportsTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": ["node"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const nodeBufferNativeExportsSource = `import typia from "typia";
import type { Blob as NodeBlob, File as NodeFile } from "node:buffer";
import type { Blob as LegacyBlob, File as LegacyFile } from "buffer";

declare const nodeBlobBrand: unique symbol;
declare const nodeFileBrand: unique symbol;
type BrandedNodeBlob = NodeBlob & { readonly [nodeBlobBrand]?: never };
type BrandedNodeFile = NodeFile & { readonly [nodeFileBrand]?: never };
type NodeBlobIntersectionUnion =
  | (NodeBlob & { blobLabel: string })
  | { nodeBlobOk: boolean };
type NodeFileIntersectionUnion =
  | (NodeFile & { fileLabel: string })
  | { nodeFileOk: boolean };

export const isNodeBlob = typia.createIs<NodeBlob>();
export const isNodeFile = typia.createIs<NodeFile>();
export const isLegacyBlob = typia.createIs<LegacyBlob>();
export const isLegacyFile = typia.createIs<LegacyFile>();
export const isGlobalBlob = typia.createIs<Blob>();
export const isGlobalFile = typia.createIs<File>();
export const isBrandedNodeBlob = typia.createIs<BrandedNodeBlob>();
export const isBrandedNodeFile = typia.createIs<BrandedNodeFile>();
export const isNodeBlobIntersectionUnion =
  typia.createIs<NodeBlobIntersectionUnion>();
export const isNodeFileIntersectionUnion =
  typia.createIs<NodeFileIntersectionUnion>();
`

const nodeBufferNativeExportsPackageJSON = `{
  "name": "native-buffer-lookalike",
  "version": "1.0.0",
  "types": "index.d.ts"
}
`

const nodeBufferNativeExportsSpoofTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": [],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "files": [
    "src/input.ts",
    "src/node_modules/@types/node/buffer.d.ts"
  ]
}
`

const nodeBufferNativeExportsPackageDeclarations = `export interface Blob {
  packageBrand: string;
  size: number;
  type: string;
}
export interface File extends Blob {
  lastModified: number;
  name: string;
  webkitRelativePath: string;
}
`

const nodeBufferNativeExportsAmbientDeclarations = `declare module "user-buffer-lookalike" {
  export interface Blob {
    ambientBrand: string;
    size: number;
    type: string;
  }
  export interface File extends Blob {
    lastModified: number;
    name: string;
    webkitRelativePath: string;
  }
}
`

const nodeBufferNativeExportsAugmentation = `import "node:buffer";

declare module "node:buffer" {
  interface Blob {
    readonly __typiaNodeBufferAugmentation?: never;
  }
  interface File {
    readonly __typiaNodeBufferAugmentation?: never;
  }
}
`

const nodeBufferNativeExportsControlSource = `import typia from "typia";
import type { Blob as PackageBlob, File as PackageFile } from "native-buffer-lookalike";
import type { Blob as AmbientBlob, File as AmbientFile } from "user-buffer-lookalike";

export const isPackageBlob = typia.createIs<PackageBlob>();
export const isPackageFile = typia.createIs<PackageFile>();
export const isAmbientBlob = typia.createIs<AmbientBlob>();
export const isAmbientFile = typia.createIs<AmbientFile>();
`

const nodeBufferNativeExportsSpoofDeclarations = `declare module "node:buffer" {
  export interface Blob {
    spoofBrand: string;
    size: number;
    type: string;
  }
  export interface File extends Blob {
    lastModified: number;
    name: string;
    webkitRelativePath: string;
  }
}
declare module "buffer" {
  export * from "node:buffer";
}
`

const nodeBufferNativeExportsSpoofSource = `import typia from "typia";
import type { Blob as NodeBlob, File as NodeFile } from "node:buffer";
import type { Blob as LegacyBlob, File as LegacyFile } from "buffer";

export const isNodeBlob = typia.createIs<NodeBlob>();
export const isNodeFile = typia.createIs<NodeFile>();
export const isLegacyBlob = typia.createIs<LegacyBlob>();
export const isLegacyFile = typia.createIs<LegacyFile>();
`

const nodeBufferNativeExportsRuntimeRunner = `const validators = require("./input.cjs");
const controls = require("./controls.cjs");
const node = require("node:buffer");
const legacy = require("buffer");

const blobPlain = { size: 1, type: "text/plain" };
const filePlain = {
  lastModified: 0,
  name: "x.txt",
  size: 1,
  type: "text/plain",
  webkitRelativePath: "",
};

const cases = [
  ["node:buffer Blob real", validators.isNodeBlob(new node.Blob(["x"], { type: "text/plain" })), true],
  ["node:buffer Blob plain", validators.isNodeBlob(blobPlain), false],
  ["node:buffer File real", validators.isNodeFile(new node.File(["x"], "x.txt", { lastModified: 0, type: "text/plain" })), true],
  ["node:buffer File plain", validators.isNodeFile(filePlain), false],
  ["buffer Blob real", validators.isLegacyBlob(new legacy.Blob(["x"], { type: "text/plain" })), true],
  ["buffer Blob plain", validators.isLegacyBlob(blobPlain), false],
  ["buffer File real", validators.isLegacyFile(new legacy.File(["x"], "x.txt", { lastModified: 0, type: "text/plain" })), true],
  ["buffer File plain", validators.isLegacyFile(filePlain), false],
  ["global Blob real", validators.isGlobalBlob(new Blob(["x"], { type: "text/plain" })), true],
  ["global Blob plain", validators.isGlobalBlob(blobPlain), false],
  ["global File real", validators.isGlobalFile(new File(["x"], "x.txt", { lastModified: 0, type: "text/plain" })), true],
  ["global File plain", validators.isGlobalFile(filePlain), false],
];

const intersectionCases = [
  ["branded Node Blob real", validators.isBrandedNodeBlob(new node.Blob(["x"])), true],
  ["branded Node Blob plain", validators.isBrandedNodeBlob(blobPlain), false],
  ["branded Node File real", validators.isBrandedNodeFile(new node.File(["x"], "x.txt")), true],
  ["branded Node File plain", validators.isBrandedNodeFile(filePlain), false],
  ["Node Blob intersection pruned", validators.isNodeBlobIntersectionUnion(Object.assign(new node.Blob(["x"]), { blobLabel: "x" })), false],
  ["Node Blob intersection plain", validators.isNodeBlobIntersectionUnion({ ...blobPlain, blobLabel: "x" }), false],
  ["Node Blob intersection other", validators.isNodeBlobIntersectionUnion({ nodeBlobOk: true }), true],
  ["Node File intersection pruned", validators.isNodeFileIntersectionUnion(Object.assign(new node.File(["x"], "x.txt"), { fileLabel: "x" })), false],
  ["Node File intersection plain", validators.isNodeFileIntersectionUnion({ ...filePlain, fileLabel: "x" }), false],
  ["Node File intersection other", validators.isNodeFileIntersectionUnion({ nodeFileOk: true }), true],
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
const controlCases = [
  ["package Blob structural", controls.isPackageBlob(packageBlob), true],
  ["package Blob rejects native", controls.isPackageBlob(new node.Blob(["x"])), false],
  ["package File structural", controls.isPackageFile(packageFile), true],
  ["package File rejects native", controls.isPackageFile(new node.File(["x"], "x.txt")), false],
  ["ambient Blob structural", controls.isAmbientBlob(ambientBlob), true],
  ["ambient Blob rejects native", controls.isAmbientBlob(new node.Blob(["x"])), false],
  ["ambient File structural", controls.isAmbientFile(ambientFile), true],
  ["ambient File rejects native", controls.isAmbientFile(new node.File(["x"], "x.txt")), false],
];

const failures = [];
for (const [name, actual, expected] of [...cases, ...intersectionCases, ...controlCases]) {
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
}
console.log("RAN " + cases.length + " CASES");
console.log("RAN " + intersectionCases.length + " INTERSECTION CASES");
console.log("RAN " + controlCases.length + " CONTROL CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`

const nodeBufferNativeExportsSpoofRuntimeRunner = `const validators = require("./input.cjs");
const node = require("node:buffer");

const blob = { spoofBrand: "fake", size: 1, type: "text/plain" };
const file = {
  ...blob,
  lastModified: 0,
  name: "x.txt",
  webkitRelativePath: "",
};
const cases = [
  ["counterfeit node:buffer Blob structural", validators.isNodeBlob(blob), true],
  ["counterfeit node:buffer Blob rejects native", validators.isNodeBlob(new node.Blob(["x"])), false],
  ["counterfeit node:buffer File structural", validators.isNodeFile(file), true],
  ["counterfeit node:buffer File rejects native", validators.isNodeFile(new node.File(["x"], "x.txt")), false],
  ["counterfeit buffer Blob structural", validators.isLegacyBlob(blob), true],
  ["counterfeit buffer Blob rejects native", validators.isLegacyBlob(new node.Blob(["x"])), false],
  ["counterfeit buffer File structural", validators.isLegacyFile(file), true],
  ["counterfeit buffer File rejects native", validators.isLegacyFile(new node.File(["x"], "x.txt")), false],
];

const failures = [];
for (const [name, actual, expected] of cases) {
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
}
console.log("RAN " + cases.length + " COUNTERFEIT CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
