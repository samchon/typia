package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestDefaultLibrarySpoofNativeIdentityTransform keeps a declaration package out
// of the runtime-native authority even when its file is named like a TypeScript
// default library (#2200).
//
// Runtime-native identity admits a global whose constructor a default library
// provides, so how "default library" is decided is the whole boundary. `lib.d.ts`
// is an ordinary published file name, so a base-name test makes that authority
// claimable by any package a project pulls in through `typeRoots` — the forged
// declarations below are a full-member copy of the DOM `File` and `Blob`,
// including their `declare var` constructor bindings, and nothing but the
// containing directory distinguishes them from the real thing.
//
//  1. Publish `lib.dom.d.ts` and `lib.es5.d.ts` from a fixture `@types` package
//     that declares global File and Blob with their constructors.
//  2. Transform validators for those globals with no DOM library and no Node
//     types loaded, so the forged package is their only declaration source.
//  3. Require the emit to keep the forged members instead of an `instanceof`.
//  4. Execute the validators in Node against the forged structural values and
//     against the real runtime instances, requiring an exact case count.
func TestDefaultLibrarySpoofNativeIdentityTransform(t *testing.T) {
  project := defaultLibrarySpoofNativeIdentityProject(t)
  js, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/input.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("default library spoof transform failed: code=%d stderr=\n%s", code, errText)
  }

  failures := []string{}
  for _, native := range []string{"instanceof File", "instanceof Blob"} {
    if strings.Contains(js, native) {
      failures = append(failures, fmt.Sprintf("a lib.*.d.ts named package declaration was promoted to %q", native))
    }
  }
  for _, member := range []string{"spoofBlobBrand", "spoofFileBrand"} {
    if !strings.Contains(js, member) {
      failures = append(failures, fmt.Sprintf("emit dropped forged declaration member %q", member))
    }
  }

  output, runtimeErr := defaultLibrarySpoofNativeIdentityRun(t, project, js)
  if runtimeErr != nil {
    failures = append(failures, fmt.Sprintf("runtime matrix failed: %v\n%s", runtimeErr, output))
  }
  if expected := "RAN 6 SPOOF CASES"; !strings.Contains(output, expected) {
    failures = append(failures, fmt.Sprintf("spoof runner did not report %q; got:\n%s", expected, output))
  }
  if len(failures) != 0 {
    t.Fatalf("default library spoof mismatches:\n%s\n\nemit:\n%s", strings.Join(failures, "\n"), js)
  }
}

func defaultLibrarySpoofNativeIdentityProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "default-library-spoof-native-identity-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  for name, content := range map[string]string{
    "tsconfig.json": defaultLibrarySpoofNativeIdentityTSConfig,
    "node_modules/@types/spoof-lib/package.json": defaultLibrarySpoofNativeIdentityPackageJSON,
    "node_modules/@types/spoof-lib/lib.dom.d.ts": defaultLibrarySpoofNativeIdentityDeclarations,
    "node_modules/@types/spoof-lib/lib.es5.d.ts": defaultLibrarySpoofNativeIdentityExtraDeclarations,
    "src/input.ts": defaultLibrarySpoofNativeIdentitySource,
  } {
    path := filepath.Join(dir, filepath.FromSlash(name))
    if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
      t.Fatalf("mkdir fixture path %s: %v", filepath.Dir(path), err)
    }
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", path, err)
    }
  }
  return dir
}

func defaultLibrarySpoofNativeIdentityRun(t *testing.T, project string, js string) (string, error) {
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
    "input.cjs": ttscTypiaTestRewriteCommonJS(t, js),
    "run.cjs":   defaultLibrarySpoofNativeIdentityRuntimeRunner,
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

const defaultLibrarySpoofNativeIdentityTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": ["spoof-lib"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const defaultLibrarySpoofNativeIdentityPackageJSON = `{
  "name": "@types/spoof-lib",
  "version": "1.0.0",
  "types": "lib.dom.d.ts"
}
`

const defaultLibrarySpoofNativeIdentityDeclarations = `/// <reference path="./lib.es5.d.ts" />

interface Blob {
  readonly size: number;
  readonly type: string;
  spoofBlobBrand: string;
}
declare var Blob: {
  prototype: Blob;
  new (parts?: unknown[], options?: unknown): Blob;
};
`

const defaultLibrarySpoofNativeIdentityExtraDeclarations = `interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
  spoofFileBrand: string;
}
declare var File: {
  prototype: File;
  new (parts: unknown[], name: string, options?: unknown): File;
};
`

const defaultLibrarySpoofNativeIdentitySource = `import typia from "typia";

export const createdIsBlob = typia.createIs<Blob>();
export const createdIsFile = typia.createIs<File>();
`

const defaultLibrarySpoofNativeIdentityRuntimeRunner = `const validators = require("./input.cjs");

let ran = 0;
const failures = [];
const eq = (name, actual, expected) => {
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
eq("spoof Blob rejects runtime instance", validators.createdIsBlob(new Blob(["x"])), false);
eq("spoof Blob missing brand", validators.createdIsBlob({ size: 1, type: "text/plain" }), false);
eq("spoof File structural", validators.createdIsFile(spoofFile), true);
eq("spoof File rejects runtime instance", validators.createdIsFile(new File(["x"], "x.txt")), false);
eq("spoof File missing brand", validators.createdIsFile({ ...spoofFile, spoofFileBrand: undefined }), false);

console.log("RAN " + ran + " SPOOF CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
