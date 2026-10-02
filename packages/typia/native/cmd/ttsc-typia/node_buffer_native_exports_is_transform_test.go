package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNodeBufferNativeExportsIsTransform verifies Node buffer-module Blob/File exports versus counterfeit modules.
//
// Node builtin export aliases share the Blob/File native declaration contract, but a same-spelled package or user type cannot acquire it from its name alone.
//
// 1. Several actual Node export/alias forms contrast with user declarations and a counterfeit module; counted checks prevent both missing and duplicated native handling.
// 2. Native Blob/File export spellings produce the required instance-check counts and remove structural noise; user/counterfeit controls keep their members and avoid native checks.
//
// @evidence contracts/testing.md#behavioral-verification Native Blob/File export spellings produce the required instance-check counts and remove structural noise; user/counterfeit controls keep their members and avoid native checks.
// @evidence contracts/testing.md#independent-expectations Node builtin export aliases share the Blob/File native declaration contract, but a same-spelled package or user type cannot acquire it from its name alone.
// @evidence contracts/testing.md#distinguishing-cases Several actual Node export/alias forms contrast with user declarations and a counterfeit module; counted checks prevent both missing and duplicated native handling.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNodeBufferNativeExportsIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
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
    filepath.Join(dir, "tsconfig.json"):                 nodeBufferNativeExportsTSConfig,
    filepath.Join(src, "input.ts"):                      nodeBufferNativeExportsSource,
    filepath.Join(src, "controls.ts"):                   nodeBufferNativeExportsControlSource,
    filepath.Join(src, "node-buffer-augmentation.d.ts"): nodeBufferNativeExportsAugmentation,
    filepath.Join(src, "user-ambient.d.ts"):             nodeBufferNativeExportsAmbientDeclarations,
    filepath.Join(dependency, "package.json"):           nodeBufferNativeExportsPackageJSON,
    filepath.Join(dependency, "index.d.ts"):             nodeBufferNativeExportsPackageDeclarations,
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
    filepath.Join(dir, "tsconfig.json"):        nodeBufferNativeExportsSpoofTSConfig,
    filepath.Join(fakeNodeRoot, "buffer.d.ts"): nodeBufferNativeExportsSpoofDeclarations,
    filepath.Join(src, "input.ts"):             nodeBufferNativeExportsSpoofSource,
  } {
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write counterfeit fixture file %s: %v", path, err)
    }
  }
  return dir
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
