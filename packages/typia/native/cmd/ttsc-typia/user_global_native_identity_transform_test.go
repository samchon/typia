package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestUserGlobalNativeIdentityTransform checks the authored operation results described below.
//
// Winning a global symbol lookup does not establish runtime-native ownership. User declarations remain structural, while a supported default-library or Node declaration can supply the runtime constructor contract even with an empty user augmentation.
//
// 1. Interface/class/type-alias globals, user constructor bindings, aliases/nesting/intersections/unions/re-exports and schema consumers contrast with real runtime-provided natives and near-miss names.
// 2. User global File/Blob validator, schema and alias emissions retain structural brands and avoid native instance checks; near-miss controls retain members and Node/default-library supplied natives keep their instance checks.
//
// @evidence contracts/testing.md#behavioral-verification User global File/Blob validator, schema and alias emissions retain structural brands and avoid native instance checks; near-miss controls retain members and Node/default-library supplied natives keep their instance checks.
// @evidence contracts/testing.md#independent-expectations Winning a global symbol lookup does not establish runtime-native ownership. User declarations remain structural, while a supported default-library or Node declaration can supply the runtime constructor contract even with an empty user augmentation.
// @evidence contracts/testing.md#distinguishing-cases Interface/class/type-alias globals, user constructor bindings, aliases/nesting/intersections/unions/re-exports and schema consumers contrast with real runtime-provided natives and near-miss names.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestUserGlobalNativeIdentityTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestUserGlobalNativeIdentityTransform(t *testing.T) {
  project := userGlobalNativeIdentityProject(t)
  aliasProject := userGlobalNativeIdentityAliasProject(t)
  providedProject := userGlobalNativeIdentityProvidedProject(t)
  transform := func(dir string, file string) string {
    t.Helper()
    js, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", dir,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("user global native identity transform %s/%s failed: code=%d stderr=\n%s", dir, file, code, errText)
    }
    return js
  }

  js := transform(project, "src/input.ts")
  schemasJS := transform(project, "src/schemas.ts")
  controlsJS := transform(project, "src/controls.ts")
  aliasJS := transform(aliasProject, "src/input.ts")
  providedJS := transform(providedProject, "src/input.ts")

  failures := []string{}
  for _, native := range []string{"instanceof File", "instanceof Blob"} {
    for name, emit := range map[string]string{
      "validator emit":    js,
      "schema emit":       schemasJS,
      "type alias emit":   aliasJS,
      "near-miss control": controlsJS,
    } {
      if strings.Contains(emit, native) {
        failures = append(failures, fmt.Sprintf("%s promoted a user-authored global to %q", name, native))
      }
    }
  }
  for _, member := range []string{"userBlobBrand", "userFileBrand"} {
    for name, emit := range map[string]string{
      "validator emit":  js,
      "schema emit":     schemasJS,
      "type alias emit": aliasJS,
    } {
      if !strings.Contains(emit, member) {
        failures = append(failures, fmt.Sprintf("%s dropped user-declared member %q", name, member))
      }
    }
  }
  for _, member := range []string{"intersectionBrand", "unionControl", "nestedHolder"} {
    if !strings.Contains(js, member) {
      failures = append(failures, fmt.Sprintf("validator emit dropped composition member %q", member))
    }
  }
  for _, member := range []string{"nearMissBrand", "prefixBrand"} {
    if !strings.Contains(controlsJS, member) {
      failures = append(failures, fmt.Sprintf("near-miss control emit dropped member %q", member))
    }
  }
  for _, kept := range []string{
    "instanceof Date",
    "instanceof RegExp",
    "instanceof Uint8Array",
    "instanceof Map",
    "instanceof Set",
    "instanceof WeakMap",
    "instanceof WeakSet",
    "instanceof File",
    "instanceof Blob",
  } {
    if !strings.Contains(providedJS, kept) {
      failures = append(failures, fmt.Sprintf("runtime-provided native lost %q", kept))
    }
  }

  if len(failures) != 0 {
    t.Fatalf(
      "user global native identity mismatches:\n%s\n\nvalidator emit:\n%s\n\nschema emit:\n%s\n\nalias emit:\n%s\n\ncontrol emit:\n%s\n\nprovided emit:\n%s",
      strings.Join(failures, "\n"),
      js,
      schemasJS,
      aliasJS,
      controlsJS,
      providedJS,
    )
  }
}

func userGlobalNativeIdentityWriteProject(t *testing.T, prefix string, files map[string]string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, prefix)
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  for name, content := range files {
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

func userGlobalNativeIdentityProject(t *testing.T) string {
  t.Helper()
  return userGlobalNativeIdentityWriteProject(t, "user-global-native-identity-", map[string]string{
    "tsconfig.json":    userGlobalNativeIdentityTSConfig,
    "src/globals.d.ts": userGlobalNativeIdentityGlobals,
    "src/reexport.ts":  userGlobalNativeIdentityReexport,
    "src/input.ts":     userGlobalNativeIdentitySource,
    "src/schemas.ts":   userGlobalNativeIdentitySchemaSource,
    "src/controls.ts":  userGlobalNativeIdentityControlSource,
  })
}

func userGlobalNativeIdentityAliasProject(t *testing.T) string {
  t.Helper()
  return userGlobalNativeIdentityWriteProject(t, "user-global-native-identity-alias-", map[string]string{
    "tsconfig.json":    userGlobalNativeIdentityTSConfig,
    "src/globals.d.ts": userGlobalNativeIdentityAliasGlobals,
    "src/input.ts":     userGlobalNativeIdentityAliasSource,
  })
}

func userGlobalNativeIdentityProvidedProject(t *testing.T) string {
  t.Helper()
  return userGlobalNativeIdentityWriteProject(t, "user-global-native-identity-provided-", map[string]string{
    "tsconfig.json":    userGlobalNativeIdentityProvidedTSConfig,
    "src/globals.d.ts": userGlobalNativeIdentityProvidedGlobals,
    "src/input.ts":     userGlobalNativeIdentityProvidedSource,
  })
}

const userGlobalNativeIdentityTSConfig = `{
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
  "include": ["src"]
}
`

const userGlobalNativeIdentityProvidedTSConfig = `{
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

// userGlobalNativeIdentityGlobals is the whole runtime-native declaration set of
// its project: neither the DOM libraries nor @types/node is loaded, so Blob and
// File exist only because this file declares them. Blob is the interface-only
// spelling and File is the class spelling, which additionally gives File a
// user-owned constructor binding — the one signal a runtime provider would
// otherwise be recognized by.
const userGlobalNativeIdentityGlobals = `export {};

declare global {
  interface Blob {
    userBlobBrand: string;
  }
  class File {
    userBlobBrand: string;
    userFileBrand: string;
  }
}
`

const userGlobalNativeIdentityReexport = `export type ReexportedFile = File;
`

const userGlobalNativeIdentitySource = `import typia from "typia";
import type { ReexportedFile } from "./reexport";

type FileAlias = File;
type BrandedFile = File & { intersectionBrand: string };
type FileUnion = BrandedFile | { unionControl: boolean };
type NestedFile = { nestedHolder: File };

export const isFile = (input: unknown): boolean => typia.is<File>(input);
export const assertFile = (input: unknown): File => typia.assert<File>(input);
export const assertGuardFile = (input: unknown): void => typia.assertGuard<File>(input);
export const validateFile = (input: unknown) => typia.validate<File>(input);
export const equalsFile = (input: unknown): boolean => typia.equals<File>(input);
export const randomBlob = (): Blob => typia.random<Blob>();

export const createdIsBlob = typia.createIs<Blob>();
export const createdIsFile = typia.createIs<File>();
export const createdIsAlias = typia.createIs<FileAlias>();
export const createdIsReexported = typia.createIs<ReexportedFile>();
export const createdIsBranded = typia.createIs<BrandedFile>();
export const createdIsUnion = typia.createIs<FileUnion>();
export const createdIsNested = typia.createIs<NestedFile>();
`

const userGlobalNativeIdentitySchemaSource = `import typia from "typia";

export const jsonSchema = typia.json.schema<File>();
export const jsonStringify = typia.json.createStringify<File>();
export const jsonIsStringify = typia.json.createIsStringify<File>();
export const protobufMessage = typia.protobuf.message<Blob>();
export const protobufEncode = typia.protobuf.createIsEncode<Blob>();
export const llmSchema = typia.llm.schema<File>({});
`

const userGlobalNativeIdentityControlSource = `import typia from "typia";

interface FileEntry {
  nearMissBrand: string;
}
interface Blobby {
  prefixBrand: string;
}

export const createdIsFileEntry = typia.createIs<FileEntry>();
export const createdIsBlobby = typia.createIs<Blobby>();
`

// userGlobalNativeIdentityAliasGlobals spells the same collision as a global
// `type` alias, whose symbol is an anonymous type literal rather than a named
// declaration. It is the negative twin that proves the classification is decided
// by declaration provenance rather than by the shape of the declaring node.
const userGlobalNativeIdentityAliasGlobals = `export {};

declare global {
  type Blob = { userBlobBrand: string };
  type File = { userBlobBrand: string; userFileBrand: string };
}
`

const userGlobalNativeIdentityAliasSource = `import typia from "typia";

export const isAliasFile = (input: unknown): boolean => typia.is<File>(input);
export const createdIsAliasBlob = typia.createIs<Blob>();
`

// userGlobalNativeIdentityProvidedGlobals is the positive control: @types/node
// bridges the node:buffer constructors to the bare globals, and the user adds
// only an empty augmentation. Merging a declaration into a runtime-provided
// global must not change what provides that global.
const userGlobalNativeIdentityProvidedGlobals = `export {};

declare global {
  interface Blob {}
  interface File {}
}
`

const userGlobalNativeIdentityProvidedSource = `import typia from "typia";

export const createdIsDate = typia.createIs<Date>();
export const createdIsRegExp = typia.createIs<RegExp>();
export const createdIsBytes = typia.createIs<Uint8Array>();
export const createdIsMap = typia.createIs<Map<string, number>>();
export const createdIsSet = typia.createIs<Set<string>>();
export const createdIsWeakMap = typia.createIs<WeakMap<object, string>>();
export const createdIsWeakSet = typia.createIs<WeakSet<object>>();
export const createdIsFile = typia.createIs<File>();
export const createdIsBlob = typia.createIs<Blob>();
`
