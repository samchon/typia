package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestDefaultLibrarySpoofNativeIdentityTransform verifies structural validation of counterfeit default-library types.
//
// A default-library-looking filename or directive does not grant a user declaration the semantic ownership of a supported native class. Structural members remain required by its declared type.
//
// 1. Several native-name collisions share forged library provenance; genuine native controls are owned by the library replacement and user-global cases.
// 2. The counterfeit default-library fixture retains each data-member check and emits none of the listed native instanceof paths.
//
// @evidence contracts/testing.md#behavioral-verification The counterfeit default-library fixture retains each data-member check and emits none of the listed native instanceof paths.
// @evidence contracts/testing.md#independent-expectations A default-library-looking filename or directive does not grant a user declaration the semantic ownership of a supported native class. Structural members remain required by its declared type.
// @evidence contracts/testing.md#distinguishing-cases Several native-name collisions share forged library provenance; genuine native controls are owned by the library replacement and user-global cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestDefaultLibrarySpoofNativeIdentityTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
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

  if len(failures) != 0 {
    t.Fatalf("default library spoof mismatches:\n%s\n\nemit:\n%s", strings.Join(failures, "\n"), js)
  }
}

func defaultLibrarySpoofNativeIdentityProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "default-library-spoof-native-identity-")
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
